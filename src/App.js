import React from 'react';
import 'tailwindcss/tailwind.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from "./pages/frontPage/frontPage";
import CreateActivityPage from "./pages/createPage/createPage";
import AuthPage from './pages/authPage/loginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage/>}/>
        <Route path="/home" element={<FrontPage/>}/>
        <Route path="/createPage" element={<CreateActivityPage/>}/>
        <Route path="/authPage" element={<AuthPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
