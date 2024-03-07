import React from 'react';
import 'tailwindcss/tailwind.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from "./pages/frontPage/frontPage";
import CreateActivityPage from "./pages/createPage/createPage";
import CalendarPage from "./pages/calendarPage/calendarPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage/>}/>
        <Route path="/home" element={<FrontPage/>}/>
        <Route path="/createPage" element={<CreateActivityPage/>}/>
        <Route path="/calendarPage" element={<CalendarPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
