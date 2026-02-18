import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import DefaultLayout from "./layouts/DefaultLayout";

export default function App() {
 

  return (
    <>
      
      <h1>React Router Store</h1>

      <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage} />
          <Route path="/chi-siamo" Component={AboutPage} />
        </Route>
      </Routes>
    </BrowserRouter>
    
       
    </>
  )
}



 
