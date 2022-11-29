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

const App = () => {


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
      name: 'Vet',
      route: '/vet',
      element: <Vet />
    },
    {
      name: 'Owners',
      route: '/wners',
      element: <Owners />
    }
  ]


  return (
    <div>
      <BrowserRouter>
        <Navbar pages={pages} />
        <Routes>
          {pages.map((page: Page, index: number) => (
            <Route path={page.route} element={page.element} />
          ))}
        </Routes>

      </BrowserRouter>
    </div>
  )

}



export default App
