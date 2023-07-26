import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './18n.js'
import Loader from './components/Loader/Loader.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loader/>}>
    <App />
    </Suspense>
  </React.StrictMode>,
)
