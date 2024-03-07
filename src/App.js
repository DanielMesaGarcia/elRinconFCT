import React from 'react';
import 'tailwindcss/tailwind.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from "./pages/frontPage/frontPage";
import CreateActivityPage from "./pages/createPage/createPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage/>}/>
        <Route path="/home" element={<FrontPage/>}/>
        <Route path="/createPage" element={<CreateActivityPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;