import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import { HelmetProvider } from 'react-helmet-async';

const Router = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default Router;
