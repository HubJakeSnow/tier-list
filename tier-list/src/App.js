import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TierList from './TierList'
import RankingContainer from './RankingContainer'

function App() {
  const [clubData, setClubData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League'
        );

        if (response.data && response.data.teams) {
          const badgeURLs = response.data.teams.map((team) => team.strTeamBadge);
          setClubData(badgeURLs);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Ultimate Tier List</h1>
      <TierList />
      <div className='buttons-container'>
        <button className='btn add-row'>Add Row</button>
        <button className='btn add-column'>Add Column</button>
      </div>
      {/* Pass clubData as a prop to RankingContainer */}
      <RankingContainer clubData={clubData} />
    </>
  );
}

export default App