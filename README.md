1- Install package with :
npm i doubeck-react-select

2- Import component with : 
import Select from 'doubeck-react-select'

3- Call it with : 
<Select name={nameOfSelect} data={data} value={'value'} updateSelect={handleSelect} />

4- data must be an array of objects with a key 'name'.

Exemple : data = [

    { "name" : "Option 1" },

    { "name" : "Option 2" },

    { "name" : "Option 3" },

    { "name" : "Option 4" },

    { "name" : "Option 5" }

]
data can have other keys if needed, the component won't take them into account

5- personify style : 

<select> has className 'doubeck-select' and has the nameOfSelect you chose for an id

<option> have className 'doubeck-select-option'