import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// const resources = {
//   en: {
//     translation: translationEN
//   },
//   de: {
//     translation: translationDE
//   }
// };

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)

  .init({
    debug: __IS_DEV__,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
