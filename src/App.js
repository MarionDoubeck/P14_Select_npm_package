import './App.css';
import Select from './components/Select'
//import Select from 'doubeck-react-select'
import {useState} from 'react'

function App() {
  const data = [
    { "name" : "Sales" },
    { "name" : "Marketing" },
    { "name" : "Engineering" },
    { "name" : "Human Resources" },
    { "name" : "Legal" }
]

  const [myValue, setMyValue] = useState()
const handleSelect = (value, name)=> {
  setMyValue(value)
}



  return (
    <div className="App">
      <Select name={'test'} data={data} value={'select0'} updateSelect={handleSelect} />
      <div>{myValue}</div>
    </div>
  );
}

export default App;
