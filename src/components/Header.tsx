import { useLocation, useNavigate } from 'react-router-dom';
import Button from "./Button";
import Logo from "../assets/logo.jpg"
import QrCodeSVG from "../assets/QrCodeSVG";
import BasketSVG from "../assets/BasketSVG";
import AccountSVG from "../assets/AccountSVG";
import "./Header.css"
import React from "react";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { setAccessToken } from '../utils/access-token';


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
  const { client, data } = useMeQuery({
    fetchPolicy: 'network-only'
  });

  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    console.log("Il est ou l'user avant ? "+ data?.currentUser?.response)
    navigate('/sign-in')
    await logout();
    setAccessToken('');
    client.resetStore();
    console.log("Il est ou l'user après ? "+ data?.currentUser?.response)
  };



  if (type === "afterSignIn") {
    contenu = 
    <>

      {/* Menu Desktop */}
      <div className="NavDesktop">
        <a
          className={`header--link-item ${location.pathname === "/" ? "selected" : ""}`} 
          href="/"
        >
          Vue d'ensemble
        </a>
      
        <a
          className={`header--link-item ${location.pathname === "/medicalcard" ? "selected" : ""}`} 
          href="/medicalcard"
        >
          Fiche personnelle
        </a>

        <a onClick={handleLogout}>
          {data?.currentUser?.response !== undefined ? "Connecté" : "Se déconnecter"}
        </a>
      
        <a
          className="header--link-item"
          href="/basket"
        >
          <BasketSVG color={location.pathname === "/basket"? "#ec3e55" : "#19224F"}/>
        </a>
      
        <a
          className= "header--link-item" 
          href="/account"
        >
        <AccountSVG color={location.pathname === "/account"? "#ec3e55" : "#19224F"}/>
        </a>
      </div>

      {/* Menu Mobile */}
      <div className="NavMobile">
        <a
          className="header--link-item"
          href="/medicalcard"
        >
          <QrCodeSVG color={location.pathname === "/medicalcard"? "#ec3e55" : "#19224F"}/>
        </a>

        <a
          className="header--link-item"
          href="/basket"
        >
          <BasketSVG color={location.pathname === "/basket"? "#ec3e55" : "#19224F"}/>
        </a>
      
        <a
          className= "header--link-item" 
          href="/account"
        >
          <AccountSVG color={location.pathname === "/account"? "#ec3e55" : "#19224F"}/>
        </a>
      </div>
      
    </>
  }


  if (type === "beforeSignIn") {
    contenu = 
    <>
      <Button box="stroke" type="general" buttonText="S'inscrire"/>
      <Button box="fill" type ="general" buttonText="Se connecter"/> 
    </>
  }
  
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
 
