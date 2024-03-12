import React from 'react';
import 'tailwindcss/tailwind.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from "./pages/frontPage/frontPage";
import AuthPage from './pages/authPage/loginPage';
import CreateActivityPage from "./pages/createPage/createPage";
import CalendarPage from "./pages/calendarPage/calendarPage";
import 'antd/dist/reset.css';
import MatchPage from './pages/matchPage/matchPage';
import NomatchPage from './pages/matchPage/nomatchPage';
import CategoriesPage from './pages/categoriesPage';
import ModalTestPage from './pages/ModalTestPage/modalTest';
import DetailsTestPage from './pages/DetailsTestPage/DetailPageTest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage/>}/>
        <Route path="/home" element={<FrontPage/>}/>
        <Route path="/createPage" element={<CreateActivityPage/>}/>
        <Route path="/calendarPage" element={<CalendarPage/>}/>
        <Route path="/authPage" element={<AuthPage/>}/>
        <Route path="/matchPage" element={<MatchPage/>}/>
        <Route path="/nomatchPage" element={<NomatchPage/>}/>
        <Route path="/categoriesPage" element={<CategoriesPage/>}/>
        <Route path="/modalTestPage" element={<ModalTestPage/>}/>
        <Route path="/DetailsTestPage/:id" element={<DetailsTestPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;