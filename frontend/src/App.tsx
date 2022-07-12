import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Login from './pages/Login';

import './App.css';
import Routes from './Routes';

function App() {

  const [user, setUser] = useState({
    id: 1,
    name: 'Kemily',
    avatar: ''
  });
  /*{
    id: 1,
    name: 'Kemily',
    avatar: ''
  }*/

  if(user === null){
    return (
      <Login />
    );
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes></Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
