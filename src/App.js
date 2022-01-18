import Header from './Header.js';
import DashboardUser from './DashboardUser.js'; 
import Basket from './Basket.js'; 
import Account from './Account.js'; 
import MedicalForm from './MedicalForm.js'; 
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import "@fontsource/source-sans-pro";

function App() {
  return (
    <Router>
    <div className="App">
      <Header type="beforeSignIn" />
      <div className='content'>
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
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
