import React from 'react';
import 'tailwindcss/tailwind.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from "./pages/frontPage/frontPage";
import CreateActivityPage from "./pages/createPage/createPage";
import 'antd/dist/reset.css';
import MatchPage from './pages/matchPage/matchPage';
import NomatchPage from './pages/matchPage/nomatchPage';
import CategoriesPage from './pages/categoriesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage/>}/>
        <Route path="/home" element={<FrontPage/>}/>
        <Route path="/createPage" element={<CreateActivityPage/>}/>
        <Route path="/matchPage" element={<MatchPage/>}/>
        <Route path="/nomatchPage" element={<NomatchPage/>}/>
        <Route path="/categoriesPage" element={<CategoriesPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;