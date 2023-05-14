import Home from './components/LandingPage/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authentication from './pages/Authentication';
import AdminLogin from './components/auth/AdminLogin';
import React from 'react';
import WeGuide from './pages/weGuide';
import AdminDashboard from './components/Admin/AdminDashboard'



function App() {
  return (
    <div data-testid="app">
  <BrowserRouter>
      <div data-testid="home">
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authentication />} />
        {/*Admin routes*/}
        <Route path="/adminlogin" element={<AdminLogin />}/>
        <Route path="/adminDashboard" element={<AdminDashboard />}/>
        <Route path="/weGuide" element={<WeGuide />} />
        </Routes>
        </div>
    </BrowserRouter>
    </div>
  );
}



export default App;
