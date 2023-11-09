// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavigationBar from './components/NaviationBar';
import Login from './components/LoginPage';
import SignupPage from './components/LoginPage';
import PetProfilePage from './components/PetProfilePage';
import ChatComponent from './components/ChatComponent';

function App() {

  const isAuthenticated = localStorage.getItem('authenticated') === 'true';


  return (
    
      <>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/PetProfile/:id" element={<PetProfilePage />} />
          <Route path="/chat" element={<ChatComponent/>} />
       </Routes>
      </>
  );
}

export default App;
