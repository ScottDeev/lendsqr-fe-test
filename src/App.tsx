import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FilterForm from './components/molecules/filterForm/FilterForm';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/login/Login';
import User from './pages/user/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={
            <Login/>
          }/>
          <Route path="/filter" element={
            <FilterForm/>
          }/>
          <Route path="/" element={
            <Dashboard/>
          }/>
          <Route path="/user/:id" element={
            <User/>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
