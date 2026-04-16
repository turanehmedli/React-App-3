import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en.json'
import az from './az.json'
import ru from './ru.json'
import ge from './ge.json'
import fr from './fr.json'
import tr from './tr.json'
import es from './es.json'
import { useLang } from "../stores/langStore";

export const language = [
  { title: "English", value: "en"},
  { title: "Russian", value: "ru"},
  { title: "Azerbaijani", value: "az"},
  { title: "German", value: "de" },
  { title: "French", value: "fr"},
  { title: "Spanish", value: "es"},
  { title: "Turkish", value: "tr"}
];

i18n
  .use(initReactI18next) 
  .init({
   
    resources: {
      en: {
        translation: en
      },
      az: {
        translation: az
      },
      ru: {
        translation: ru
      },
      ge: {
        translation: ge
      },
      fr: {
        translation: fr
      },
      tr: {
        translation: tr
      },
      es: {
        translation: es
      },
    },
    lng: useLang.getState().langua, 
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });