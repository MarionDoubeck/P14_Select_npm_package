import React, { useState } from 'react'

const Select = ({name, data, updateSelect}) => {

    const optionContainerClassName = 'doubeck-select-option-container-'+name
    const optionContainerQuery = '.doubeck-select-option-container-'+name
    const [title, setTitle] = useState(name.charAt(0).toUpperCase() + name.slice(1))

    const openMenu = () => {
        const options = document.querySelectorAll(`${optionContainerQuery}`)
        if (! options[0].classList.contains('hidden')){
            closeMenu()
            return
        }
        options.forEach(option => option.classList.remove('hidden'))
    }
    const closeMenu = () => {
        const options = document.querySelectorAll(`${optionContainerQuery}`)
        if (options[0].classList.contains('hidden')){
            openMenu()
            return
        }
        options.forEach(option => option.classList.add('hidden'))
    }

    const validate = (e) => {
        e.preventDefault()
        const selectedValue = e.target.outerText.toLowerCase();
        updateSelect(selectedValue, name)
        setTitle(e.target.outerText)
        closeMenu()
    }

    const options = data.map( option => 
        <div 
            className={`${optionContainerClassName} hidden`}
            key={option.name}
            onClick={(e) => validate(e) }
            style={{display:'flex', flexDirection:'column'}}
        ><span className='doubeck-select-option'>{option.name}</span></div>
    )
    
    return (
      <div className='doubeck-select-container'>
            <div className='doubeck-select-title' onClick={openMenu}>
                {title}
                <div style={{fontSize:'2rem'}}>&#x21D5;</div>
            </div>
          {options}
      </div>
    )
  }
  
  export default Select
