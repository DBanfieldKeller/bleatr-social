import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header/header';
import Body from './components/body/body';
import LoginModal from './components/login-modal/loginModal';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState();

  const handleLoggedInState = (boolean) => setIsLoggedIn(boolean)

  return (
    <div className="App">
      <Header
      setIsLoggedIn={setIsLoggedIn}/>
      <LoginModal
      handleLoggedInState={handleLoggedInState}/>
      <Body
      isLoggedIn= {isLoggedIn}/>
    </div>
  );
}

export default App;
