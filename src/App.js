import './App.css';
import WelcomePage from "./welcome-page/WelcomePage";
import {useEffect, useState} from "react";
import Dashboard from "./dashboard/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [offers, setOffers] = useState([]);

  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:8000/offers/', {mode:'cors'});
      const data = await response.json();
      setOffers(data);
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])



  return (isLoggedIn? <Dashboard offers={offers}/> : <WelcomePage login={() => setIsLoggedIn(true)}/>
  );
}

export default App;
