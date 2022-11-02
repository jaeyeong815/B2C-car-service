import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detailpage from './pages/Detailpage';
import Mainpage from './pages/Mainpage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/:id" element={<Detailpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
