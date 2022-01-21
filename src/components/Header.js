import Logo from "../assets/logo.jpg"
import {ReactComponent as BasketLogo} from "../assets/BasketSVG.svg";
import {ReactComponent as AccountLogo} from "../assets/AccountSVG.svg";
import "./Header.css"
import Button from "./Button";


const Header = (props) => {
    let contenu; 
    if (props.type === "afterSignIn") {
        contenu = 
        <>
        <a className="header--link-item" href="/"> Vue d'ensemble </a>
        <a className="header--link-item" href="/medicalcard"> Fiche personnelle</a>
        <a className="header--link-item" href="/basket">
        <BasketLogo />
         </a>
        <a className="header--link-item" href="/account">
         <AccountLogo />
         </a>
        </>
    }
    if (props.type === "beforeSignIn") {
        contenu = 
        <>
        <Button box="stroke" type="general" buttonText="S'inscrire"/>
        <Button box="fill" type ="general" buttonText="Se connecter"/> 
        </>
    }
    
    return (  
        <nav className="header">
            <div className ="header--logo--holder">
            <img src={Logo} alt="logo" className="header--logo" />
            </div>
            <div className="header--links">
            {contenu}
            </div>
            
        </nav>


    );
}
 
export default Header;