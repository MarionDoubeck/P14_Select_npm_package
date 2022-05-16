import React from 'react'

const Select = ({name, data, updateSelect}) => {

    const openMenu = () => {
        const options = document.querySelectorAll('.doubeck-select-option-container')
        if (! options[0].classList.contains('hidden')){
            closeMenu()
            return
        }
        options.forEach(option => option.classList.remove('hidden'))
    }
    const closeMenu = () => {
        const options = document.querySelectorAll('.doubeck-select-option-container')
        if (options[0].classList.contains('hidden')){
            openMenu()
            return
        }
        options.forEach(option => option.classList.add('hidden'))
    }

    const validate = (e) => {
        e.preventDefault()
        updateSelect(e.target.value, name)
        closeMenu()
    }

    const options = data.map( option => 
        <div 
            className='doubeck-select-option-container hidden' 
            key={option.name}
            onClick={e => validate(e) }
            style={{display:'flex', flexDirection:'column'}}
        ><span className='doubeck-select-option'>{option.name}</span></div>
    )
    
    return (
      <div className='doubeck-select-container'>
            <div className='doubeck-select-title' onClick={openMenu}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
                <div style={{fontSize:'2rem'}}>&#x21D5;</div>
            </div>
          {options}
      </div>
    )
  }
  
  export default Select
