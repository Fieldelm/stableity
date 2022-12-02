import React, { Component, useState, ChangeEvent } from 'react';
import './style/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Horses from './Components/Horses';
import Ferrier from './Components/Ferrier';
import Owners from './Components/Owners';
import Vet from './Components/Vet';

import Flag from 'react-world-flags';
import './i18n/i18n';
import { useTranslation } from 'react-i18next';
import { availableLangs } from './i18n/i18n';



const App = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (event: any) => {
    i18n.changeLanguage(event.target.value);
    console.log(event.target.value);
  }

  const langs : language [] = [
    {
      code: 'hu',
      name: 'Magyar',
      country_code: 'hu',
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    }
  ]

  

  const pages: Page[] = [
    {
      name: t('Home'),
      route: '/',
      element: <Home />
    },
    {
      name: t('Horses'),
      route: '/horses',
      element: <Horses />
    },
    {
      name: t('Ferrier'),
      route: '/ferrier',
      element: <Ferrier />
    },
    {
      name: t('Veterinary'),
      route: '/vet',
      element: <Vet />
    },
    {
      name: t('Veterinary'),
      route: '/owners',
      element: <Owners />
    }
  ]


  return (
    <div>
      <BrowserRouter>

        <Navbar pages={pages} />

        <div className='content'>
{t('welcome_msg')}
          <div className='flag-container'>
            {langs.map((lan: any, index: number) => (
              <Flag key={index} code={lan.country_code} value={lan.code} onClick={changeLanguage} />
            ))}
          </div>
          <Routes>
            {pages.map((page: Page, index: number) => (
              <Route key={index} path={page.route} element={page.element} />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )

}



export default App
