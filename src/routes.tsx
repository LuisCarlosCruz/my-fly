import { Routes, Route, Navigate } from 'react-router-dom';
import PAGES from './pages';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={ <Navigate replace to="/login" /> } />
    <Route path="/login" element={ <PAGES.Login /> } />
  </Routes>
);

export default MainRoutes;