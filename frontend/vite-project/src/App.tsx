import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import './style/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Horses from './Components/Horses';
import Ferrier from './Components/Ferrier';
import Owners from './Components/Owners';
import Vet from './Components/Vet';
import Flag from 'react-world-flags';




const App = () => {

  const languages: string[] = ['gb', 'hu', 'fr'];

  type Page = {
    name: string,
    route: string,
    element: JSX.Element
  }


  const pages: Page[] = [
    {
      name: 'Home',
      route: '/',
      element: <Home />
    },
    {
      name: 'Horses',
      route: '/horses',
      element: <Horses />
    },
    {
      name: 'Ferrier',
      route: '/ferrier',
      element: <Ferrier />
    },
    {
      name: 'Veterinary',
      route: '/vet',
      element: <Vet />
    },
    {
      name: 'Owners',
      route: '/owners',
      element: <Owners />
    }
  ]


  return (
    <div>
      <BrowserRouter>

        <Navbar pages={pages} />

        <div className='content'>
        
          <div className='flag-container'>
            {languages.map((lan: string, index: number) => (
              <Flag key={index} code={lan} value={lan} />
            ))}
          </div>
          <Routes>
            {pages.map((page: Page, index: number) => (
              <Route path={page.route} element={page.element} />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )

}



export default App
