import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header/header';
import Body from './components/body/body';
import { set } from 'mongoose';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState();

  const handleLoggedInState = (boolean) => setIsLoggedIn(boolean)

  return (
    <div className="App">
      <Header
      setIsLoggedIn={setIsLoggedIn}/>
      <Body
      isLoggedIn= {isLoggedIn}/>
    </div>
  );
}

export default App;
