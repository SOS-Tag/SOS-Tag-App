import Header from './components/Header.js'; 
import Basket from './pages/Basket.js'; 
import Account from './pages/Account.js'; 
import MedicalCard from './pages/MedicalCard.tsx'; 
import SignUpPage from './pages/SignUpPage.js'; 
import SignInPage from './pages/SignInPage.js'; 
import './App.css';
import UserDashboard from './pages/UserDashboard';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 


function App() {
  return (
    <Router>
    <div className="App h-screen flex flex-col items-stretch">
      <Header type="afterSignIn" />
      <div className='w-full h-full content flex flex-row'>
        <Switch>
          <Route exact path="/">
            <UserDashboard />
          </Route>
          <Route path="/medicalcard">
            <MedicalCard />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/signin">
            <SignInPage />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
