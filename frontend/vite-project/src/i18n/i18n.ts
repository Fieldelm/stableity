import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import  LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from 'i18next-http-backend';


import engTrans from "./en/translation.json";
import hunTrans from "./hu/translation.json";


const resources = {
  engTrans,
  hunTrans
}

export const availableLangs = Object.keys(resources);

i18next
.use(initReactI18next)
.use(LanguageDetector)
.init({
    resources,
    defaultNS : 'namespace',
    fallbackLng: 'en', 
});

//export default i18next;