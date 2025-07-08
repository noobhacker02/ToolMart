import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ToolMart from './Toolmart.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Section1 from './Section1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Header />
   <ToolMart />
   <Section1 />
   
   <Footer />
  </StrictMode>,
)
