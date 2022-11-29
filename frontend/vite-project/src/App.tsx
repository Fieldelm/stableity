import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style/App.scss';
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';


const App = () => {


  type Page = {
    name: string,
    route: string
  }


  const pages: Page[] = [
    {
      name: 'Horses',
      route: '/horses'
    },
    {
      name: 'Ferrier',
      route: '/ferrier'
    },
    {
      name: 'Vet',
      route: '/vet'
    },
    {
      name: 'Owners',
      route: '/wners'
    }
  ]


  return (
    <div>
      <Navbar pages = {pages}  />
    </div>
  )

}



export default App
