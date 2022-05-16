1- Install package with :
npm i doubeck-react-select

2- Import component with : 
import Select from 'doubeck-react-select'

3- Call it with : 
<Select name={nameOfSelect} data={data} updateSelect={handleSelect} />

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

Select container has className 'doubeck-select-container'

The first line has className 'doubeck-select-title'

Option containers have className 'doubeck-select-option-container'

Text inside option containers have className 'doubeck-select-option'


You can copy/past this code for a good start :

.hidden{

    display : none !important;

}


.doubeck-select-container{

    border: 1px solid black;

    width: 100px;

    text-align: left;

}

.doubeck-select-title{

    width: 95%;

    display: inline-flex;

    align-items: center;

    justify-content: space-between;

    padding: 2px 5px 2px 5px;

    cursor: pointer;

}

.doubeck-select-option-container{

    width: 100%;

    cursor: pointer;

    border-top: solid 1px black;

}
.doubeck-select-option{

    padding: 5px 10px;

}
