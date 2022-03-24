import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Welcome: "Welcome to ",
      "logo-title": "Dr Trai's Clinic",
    },
  },
  vi: {
    translation: {
      Welcome: "Chào mừng đến với",
      "logo-title": "Phòng khám Bs.Trãi",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
