import React, {useState} from 'react';
import './App.css';
import {storeProducts} from './data';
import Output from './Output';



function App() {
  const [query, setQuery] = useState('');
  const [show, setShow] = useState(false);
  const handleChange=(event)=>{
    if(event.target.value.trim()===''){
      setShow(false);
    }else{
      setShow(true);
    }
    const query = event.target.value;
    setQuery(query);
  }
  const [searchby, setSearchby] = useState('commandName');
  
  const res = storeProducts.filter(item => item.command.toLowerCase().indexOf(query.toLowerCase())!==-1);

  return (
    <div className="container">
      <h1>Write Any Linux Command Here ...</h1>
      <div className="input-container">
        <input 
          type="text" 
          className="userInput"
          onChange={handleChange} 
        />
        <div className="search-btn">
          <select name="searchby" id="searchby" 
          onChange={(event)=>{
            setSearchby(event.target.value);
          }}
          >
            <option value="commandName">Command Name</option>
            <option value="optionName">Command options</option>
            <option value="commandTitle">Command Title</option>
          </select>
        </div>
      </div>
      {show ? <div className="result">
      <Output resultCommands={res} searchby/>
      </div> : null}
    </div>
  );
}

export default App;
