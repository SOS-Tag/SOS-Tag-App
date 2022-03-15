import { useLocation, useNavigate } from 'react-router-dom';
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { setAccessToken } from '../utils/access-token';
import Button from "./Button";
import Logo from "../assets/logo.jpg"
import QrCodeSVG from "../assets/QrCodeSVG";
import BasketSVG from "../assets/BasketSVG";
import AccountSVG from "../assets/AccountSVG";
import "./Header.css"
import React from "react";

import LogOutSVG from '../assets/logoutSVG';


export enum HeaderTypeEnum {
  after = "afterSignIn",
  before = "beforeSignIn"
}

type HeaderType = {
  type: HeaderTypeEnum,
  pathname?: string,
}

export const Header: React.FC<HeaderType> = ({
  type, 
}) => {
  
  let contenu; 
  const location = useLocation()
  const navigate = useNavigate();
  const { client, data, loading } = useMeQuery({
    fetchPolicy: 'network-only'
  });

  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    navigate('/sign-in')
    await logout();
    setAccessToken('');
    client.resetStore();
  };

  if (!loading &&data?.currentUser?.response !== undefined) {
    contenu = 
    <>
      {/* Menu Desktop */}
      <div className="NavDesktop">
        <a
          className={`header--link-item ${location.pathname === "/users/all" ? "selected" : ""}`} 
          href="/users/all"
        >
          Vue d'ensemble
        </a>
      
        <a
          className={`header--link-item ${location.pathname === "/users/:userId" ? "selected" : ""}`} 
          href="/users/:userId"
        >
          Fiche personnelle
        </a>
      
        <a
          className="header--link-item"
          href="/users/basket"
        >
          <BasketSVG color={location.pathname === "/users/basket"? "#ec3e55" : "#19224F"}/>
        </a>
      
        <a
          className= "header--link-item" 
          href="/users/me"
        >
        <AccountSVG color={location.pathname === "/users/me"? "#ec3e55" : "#19224F"}/>
        </a>

        <a
          className= "header--link-item" 
          onClick={handleLogout}
        >
        <LogOutSVG color={"#19224F"}/>
        </a>
      </div>

      {/* Menu Mobile */}
      <div className="NavMobile">
        <a
          className="header--link-item"
          href="/users/:userId"
        >
          <QrCodeSVG color={location.pathname === "/users/:userId"? "#ec3e55" : "#19224F"}/>
        </a>

        <a
          className="header--link-item"
          href="/users/basket"
        >
          <BasketSVG color={location.pathname === "/users/basket"? "#ec3e55" : "#19224F"}/>
        </a>
      
        <a
          className= "header--link-item" 
          href="/users/me"
        >
          <AccountSVG color={location.pathname === "/users/me"? "#ec3e55" : "#19224F"}/>
        </a>

        <a
          className= "header--link-item" 
          onClick={handleLogout}
        >
        <LogOutSVG color={"#19224F"}/>
        </a>
      </div>
    </>
  }

  if (!loading && data?.currentUser?.response === undefined) {
    contenu = 
    <>
      <div className="NavDesktop">
        <a href="/sign-up"><Button box="stroke" type="general" buttonText="S'inscrire"/></a>
        <a href="/sign-in"><Button box="fill" type ="general" buttonText="Se connecter"/></a>
      </div>
      <div className="NavMobile">
        <a href="/sign-up"><Button box="stroke" type="general" buttonText="S'inscrire"/></a>
        <a href="/sign-up"><Button box="fill" type ="general" buttonText="Se connecter"/></a>
      </div>
    </>
  }

  if(loading){
    return null
  }
  else{
    return (  
    <nav className="header">
      <div className ="header--logo--holder">
        <a href="/"><img src={Logo} alt="logo" className="header--logo" /></a>
      </div>
      <div className="header--links">
        {contenu}
      </div>
    </nav>
    );
  }
}
 
