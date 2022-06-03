import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Watch from "./pages/Watch";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="/watch" element={<Layout drawerCollapsed />}>
            <Route index element={<Watch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
