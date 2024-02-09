import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TierList from './TierList'
import RankingContainer from './RankingContainer'
import RowForm from './RowForm'
import Modal from './Modal'

function App() {
  const [clubData, setClubData] = useState([]);
  const [isRowFormVisible, setIsRowFormVisible] = useState(false);
  const [isEditTierFormVisible, setIsEditTierFormVisible] = useState(false);
  const [tierData, setTierData] = useState([
    { name: 'S', color: '#FF7F7F', columns: [{ id: 1 }] },
    { name: 'A', color: '#FFBF7F', columns: [{ id: 1 }] },
    { name: 'B', color: '#FFDF7F', columns: [{ id: 1 }] },
    { name: 'C', color: '#FFFF7F', columns: [{ id: 1 }] },
    { name: 'D', color: '#BFFF7F', columns: [{ id: 1 }] }
  ]);

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

  const toggleRowFormVisibility = () => {
    setIsRowFormVisible(!isRowFormVisible);
    setIsEditTierFormVisible(false);
  };

  const toggleEditTierFormVisibility = () => {
    setIsEditTierFormVisible(!isEditTierFormVisible);
    setIsRowFormVisible(false);
  };

  const addNewTier = (newTierName, newTierColor) => {
    setTierData([...tierData, { name: newTierName, color: newTierColor, columns: [{ id: 1 }] }]);
  };

  const addColumn = () => {
    setTierData(prevTierData => {
      return prevTierData.map(tier => ({
        ...tier,
        columns: [...tier.columns, { id: Math.random() }]
      }));
    });
  };

  return (
    <>
      <h1 className='title'>Ultimate Tier List</h1>
      {isEditTierFormVisible && <Modal toggleVisibility={toggleEditTierFormVisibility} />}
      <TierList tierData={tierData} />
      <div className='buttons-container'>
        <button
          onClick={toggleRowFormVisibility}
          className='btn add-row'
        >
          Add Row
        </button>
        <button
          onClick={addColumn}
          className='btn add-column'
        >
          Add Column
        </button>
      </div>
      {isRowFormVisible && <RowForm toggleVisibility={toggleRowFormVisibility} addNewTier={addNewTier} />}
      <RankingContainer clubData={clubData} />
    </>
  );
}

export default App