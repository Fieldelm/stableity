import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/index.css';

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import { useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({

    // supportedLngs: ['en', 'hu'],

    fallbackLng: 'en',
    // debug: false,
    // Options for language detector
    detection: {
      order: ['cookie','htmlTag', 'path' ],
      caches: ['cookie']
    },
     backend: {
     loadPath: './i18n/{{lng}}/translation.json',
   },
  })

  
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
