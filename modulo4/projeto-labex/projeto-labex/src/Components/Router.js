import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Viagens from './Viagens';


function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={ <Home /> } />
            <Route path="/viagens/lista" element={ <Viagens /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default Router;