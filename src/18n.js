import i18n from 'i18next'
import Backend  from 'i18next-http-backend'
import languageDetector from  'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n.use(Backend).use(languageDetector).use(initReactI18next).init({
    fallbacking: 'ru',
    debug:true,
    detection:{
        order:['queryString', 'cookie'],
        caches:['cookie']
    },
    interpolation:{
        escapeValue:false
    }
})
export default i18n