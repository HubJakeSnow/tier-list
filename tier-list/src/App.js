import React from 'react'
import TierList from './TierList'
import RankingContainer from './RankingContainer'

function App() {
  return (
    <>
      <h1>Ultimate Tier List</h1>
      <TierList />
      <div className='buttons-container'>
        <button className='btn add-row'>Add Row</button>
        <button className='btn add-column'>Add Column</button>
      </div>
      <RankingContainer />
    </>
    
  )
}

export default App