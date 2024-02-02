import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TierList from './TierList'
import RankingContainer from './RankingContainer'
import RowForm from './RowForm'
import ColumnForm from './ColumnForm'

function App() {
  const [clubData, setClubData] = useState([]);
  const [isRowFormVisible, setIsRowFormVisible] = useState(false);
  const [isColumnFormVisible, setIsColumnFormVisible] = useState(false);

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

  function toggleRowFormVisibility() {
    setIsRowFormVisible((prevVisibility) => !prevVisibility);
    setIsColumnFormVisible(false); // Hide the ColumnForm when RowForm is toggled
  }

  function toggleColumnFormVisibility() {
    setIsColumnFormVisible((prevVisibility) => !prevVisibility);
    setIsRowFormVisible(false); // Hide the RowForm when ColumnForm is toggled
  }

  return (
    <>
      <h1 className='title'>Ultimate Tier List</h1>
      <TierList />
      <div className='buttons-container'>
        <button onClick={toggleRowFormVisibility} className='btn add-row'>
          Add Row
        </button>
        <button onClick={toggleColumnFormVisibility} className='btn add-column'>
          Add Column
        </button>
      </div>
      <RankingContainer clubData={clubData} />
      {isRowFormVisible && <RowForm />}
      {isColumnFormVisible && <ColumnForm />}
    </>
  );
}

export default App