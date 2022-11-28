import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style/App.scss';
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';


const App = () => {

  const [count, setCount] = useState(0);

  const sites: string[] = ['Horses', 'Ferrier', 'Vet', 'Owners', 'Anything'];


  return (
    <div>
     <Navbar titles={sites}/>
    </div>
 
     /*  <div className="App">
       {sites.map((site, index) => (
        <div key={index}>{site}</div>
       ))}
      </div> */
   )

  }



export default App
