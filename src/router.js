import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Main from './layouts/Main/Main';

import AdSetupPage from './pages/AdSetupPage';
import DashboardPage from './pages/DashboardPage';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<Main />}>
          <Route path='/' element={<Navigate to='/dashboard' />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/adsetup' element={<AdSetupPage />} />
        </Route>
        <Route path='*' element={<div>NotFound</div>} />
      </Routes>
    </Router>
  );
}
