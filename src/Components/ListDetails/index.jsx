import React from 'react';
import { array, func } from 'prop-types'
import './ListDetails.scss'

const propTypes = {
  representatives: array,
  representativeInfo: func,
}


const ListDetails = ({ representatives, representativeInfo }) => {

  const makeTable = representatives?.map((representative, index) => {
    const party = representative.party.split('')[0]
    return (
      <tr onClick={() => representativeInfo(representative)} key={index} className='representative-row'>
        <td colSpan="2">{representative.name}</td>
        <td>{party}</td>
      </tr>
    )
  })

  return (
    <div className='party-info'>
      <table cellSpacing="0">
        <thead>
          <tr className='table-header' >
            <td colSpan="2">Name</td>
            <td>Party</td>
          </tr>
        </thead>
        <tbody>
          {makeTable}
        </tbody>
      </table>
    </div>
  )
}

ListDetails.propTypes = propTypes;

export default ListDetails;