import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TierList from './TierList'
import RankingContainer from './RankingContainer'
import RowForm from './RowForm'
import ColumnForm from './ColumnForm'
import Modal from './Modal'

function App() {
  const [clubData, setClubData] = useState([]);
  const [isRowFormVisible, setIsRowFormVisible] = useState(false);
  const [isColumnFormVisible, setIsColumnFormVisible] = useState(false);
  const [isEditTierFormVisible, setIsEditTierFormVisible] = useState(false);
  const [tierData, setTierData] = useState(['S', 'A', 'B', 'C', 'D']);

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
    setIsColumnFormVisible(false);
    setIsEditTierFormVisible(false);
  };

  const toggleColumnFormVisibility = () => {
    setIsColumnFormVisible(!isColumnFormVisible);
    setIsRowFormVisible(false);
    setIsEditTierFormVisible(false);
  };

  const toggleEditTierFormVisibility = () => {
    setIsEditTierFormVisible(!isEditTierFormVisible);
    setIsRowFormVisible(false);
    setIsColumnFormVisible(false);
  };

  const addNewTier = (newTierName) => {
    setTierData([...tierData, newTierName]);
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
          onClick={toggleColumnFormVisibility}
          className='btn add-column'
        >
          Add Column
        </button>
      </div>
      {isRowFormVisible && <RowForm toggleVisibility={toggleRowFormVisibility} addNewTier={addNewTier} />}
      {isColumnFormVisible && <ColumnForm toggleVisibility={toggleColumnFormVisibility} />}
      <RankingContainer clubData={clubData} />
    </>
  );
}

export default App