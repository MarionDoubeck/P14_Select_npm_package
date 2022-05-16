import React from 'react'

const Select = ({name, data, value, updateSelect}) => {

    const options = data.map( option => <option class='doubeck-select-option' key={option.name}>{option.name}</option>)
    
    return (
      <select
        className='doubeck-select'
        id= {name}
        name = {name}
        value = {value}
        onChange = {e => updateSelect(e.target.value, name)}
      >
          {options}
      </select>
    )
  }
  
  export default Select