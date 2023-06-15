import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header/header';
import Body from './components/body/body';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState();

  const handleLoggedInState = (boolean) => setIsLoggedIn(boolean)

  useEffect(() => console.log(isLoggedIn), [isLoggedIn])

  return (
    <div className="App">
      <Header
      isLoggedIn={isLoggedIn}
      handleLoggedInState={handleLoggedInState}/>
      <Body
      isLoggedIn= {isLoggedIn}/>
    </div>
  );
}

export default App;
