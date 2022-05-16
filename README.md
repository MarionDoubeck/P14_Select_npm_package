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
  display: none !important;
}

.doubeck-select-container{
  width: 320px;
  height: 21px;
  text-align: left;
  z-index: 10;
}

.doubeck-select-title{
  width: 100%;
  height: 21px;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: white;
  border: solid 1px black;
}

.doubeck-select-option-container-YOUR_SELECT_NAME{
  width: 100%;
  height: 21px;
  cursor: pointer;
  border-bottom: solid 1px black;
  border-left: solid 1px black;
  border-right: solid 1px black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;font-size: .8rem;
}

.doubeck-select-option{
  text-align: center;
}
