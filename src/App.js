import './App.css';
import Select from './components/Select'
//import Select from 'doubeck-react-select'

function App() {
  const data = [
    { "name" : "Sales" },
    { "name" : "Marketing" },
    { "name" : "Engineering" },
    { "name" : "Human Resources" },
    { "name" : "Legal" }
]

const handleSelect = ()=> {
  alert('Hello World !')
}

  return (
    <div className="App">
      <Select name={'test'} data={data} value={'select0'} updateSelect={handleSelect} />
    </div>
  );
}

export default App;
