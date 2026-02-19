import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Prodotti from "./pages/Prodotti";
import DefaultLayout from "./layouts/DefaultLayout";
import ProdottoDettaglio from "./pages/ProdottoDettaglio";
import NotFound from "./pages/NotFound";


export default function App() {
 

  return (
    
      
      

      <BrowserRouter>
      <h1>React Router Store</h1>
      <Routes>
        <Route element={<DefaultLayout />}>

          <Route index element={<HomePage />} />

          <Route path="/chi-siamo" element={<AboutPage />} />

          <Route path="/prodotti" element={<Prodotti />} />

          <Route path="/prodotti/:id" element={<ProdottoDettaglio />} />


        </Route>
      </Routes>
    </BrowserRouter>
    
       
   
  )
}



 
