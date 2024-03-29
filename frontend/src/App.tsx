import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import './App.css';
import Routes from './Routes';
import { useQuery } from '@apollo/client';
import { MOVIES_QUERY } from './querys';
import { client } from './services/apollo';


function App() {

  const { data } = useQuery(MOVIES_QUERY, {client: client})

  interface newUser {
    id: any,
    name: any,
    avatar: any
  }

  const [user, setUser] = useState< newUser | null>(null);

  const actionLoginDataGoogle = async (u: { id: any; displayName: any; photoURL: any; }) => {
    let newUser = {
      id: u.id,
      name: u.displayName,
      avatar: u.photoURL
    }
    
    setUser(newUser);
  }

  if(user === null){
    return (
      <Login onReceiveGoogle={actionLoginDataGoogle} />
    );
  }
  return (
    <BrowserRouter>
      <Header user={user}/>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <Routes></Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
