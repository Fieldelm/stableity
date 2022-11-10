import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
//import App from './Components/App';
//import reportWebVitals from './reportWebVitals';

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
     loadPath: './locales/{{lng}}/translation.json',
   },
  })

function App() {
  const { t } = useTranslation();
  return <h1 className="font-weight-normal mb-3">{t('welcome_msg')}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <React.StrictMode>
      {/* <App /> */}
      <App />
    </React.StrictMode>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
