import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Header from './components/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
