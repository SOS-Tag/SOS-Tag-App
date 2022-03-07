import {Header} from './components/Header'; 
import Routes from './routes';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { withApollo } from './apollo';
import React, { useEffect, useState } from 'react';
import { HeaderTypeEnum } from './components/Header';
import { setAccessToken } from './utils/access-token';
import { useWelcomeQuery } from './generated/graphql';


function App() {
  const [loading2, setLoading] = useState(true);
  const { data, loading, error } = useWelcomeQuery();

  if (loading) {
    console.log("Chargement du message d'accueil ...");
  }
  if (error) {
    console.log("T'es mauvais Jack");
  }
  if (data?.welcome) {
    console.log("Ludwig il é tro for : "+data.welcome+ " <3");
  }

  useEffect(() => {
    const refreshToken = async () => {
      const res = await fetch(process.env.REACT_APP_API_BASE_URL + '/refresh_token', {
        method: "POST",
        credentials: "include"
      })
      const { accessToken } = await res.json();
      setAccessToken(accessToken);
      setLoading(false);
    }
    refreshToken()
  }, []);

  return (
    <BrowserRouter>
    <div className="App h-full min-h-screen flex flex-col items-stretch">
      <Header type={HeaderTypeEnum.after} />
      <div className='w-full h-full content flex flex-row'>
        <Routes />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default withApollo(App);
