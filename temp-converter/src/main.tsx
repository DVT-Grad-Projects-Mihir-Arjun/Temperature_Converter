import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import TeamDirectory from './components/TeamDirectory.tsx';
import PageNotFound from './components/PageNotFound.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path ='/team' element={<TeamDirectory/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
    </Routes>
  </BrowserRouter>
  </StrictMode>
)
