import {Header} from './components/Header'; 
import Basket from './pages/Basket'; 
import Account from './pages/Account'; 
import MedicalCard from './pages/MedicalCard'; 
import SignUpPage from './pages/SignUpPage'; 
import SignInPage from './pages/SignInPage'; 
import './App.css';
import UserDashboard from './pages/UserDashboard';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import React from 'react';
import { HeaderTypeEnum } from './components/Header';


function App() {
  return (
    <Router>
    <div className="App h-full min-h-screen flex flex-col items-stretch">
      {/* <Header type={HeaderTypeEnum.after} /> */}
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
