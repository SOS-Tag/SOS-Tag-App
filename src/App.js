import Header from './Header.js';
import DashboardUser from './DashboardUser.js'; 
import Basket from './Basket.js'; 
import Account from './Account.js'; 
import MedicalForm from './MedicalForm.js'; 
import SignUpPage from './pages/SignUpPage.js'; 
import SignInPage from './pages/SignInPage.js'; 
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import "@fontsource/source-sans-pro";

function App() {
  return (
    <Router>
    <div className="App">
      <Header type="beforeSignIn" />
      <div className='-z-10 absolute w-full top-0 width-screen h-screen content flex direction-row'>
        <Switch>
          <Route exact path="/">
            <DashboardUser />
          </Route>
          <Route path="/medicalform">
            <MedicalForm />
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
