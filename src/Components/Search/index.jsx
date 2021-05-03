import React, { useState } from 'react'
import { func } from 'prop-types'

import states from '../../Assets/stateList'

const propTypes = {
  onSubmit: func.isRequired
}

const createStateList = states.map((state, index) => {
  return (
    <option value={state.abbreviation} key={index}>{state.name}</option>

  )
})

const Search = ({ onSubmit }) => {
  const [positionType, setPositionType] = useState('')
  const [usStates, setUsStates] = useState('')

  const onChange = ({ target: { name, value } }) => {
    if (!name) return
    if (name === 'Position') setPositionType(value)
    if (name === 'States') setUsStates(value)
  }

  return (
    <>
      <select
        name='Position'
        onChange={onChange}
      >
        <option>Select Type</option>
        <option value='Representatives'>Representative</option>
        <option value='senators'>Senator</option>
      </select>
      <select
        name='States'
        onChange={onChange}
      >
        <option>Select State</option>
        {createStateList}
      </select>
      <button onClick={() => onSubmit(positionType, usStates)}>Submit</button>
    </>
  )
}

Search.propTypes = propTypes
export default Search;