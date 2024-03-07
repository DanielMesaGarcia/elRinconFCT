import React from 'react';
import 'tailwindcss/tailwind.css'
<<<<<<< HEAD

=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
>>>>>>> 63ed7be30aeb3f39ecb557f599c79b2dffd2b344
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