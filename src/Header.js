import Logo from "./assets/logo.jpg"
import {ReactComponent as BasketLogo} from "./assets/BasketSVG.svg";
import {ReactComponent as AccountLogo} from "./assets/AccountSVG.svg";
import "./Header.css"

const Header = () => {
    return (  
        <nav className="header">
            <div className ="header--logo--holder">
            <img src={Logo} alt="logo" className="header--logo" />
            </div>
            <div className="header--li nks">
                <a className="header--link-item" href="/"> Vue d'ensemble </a>
                <a className="header--link-item" href="/medicalform"> Fiche personnelle</a>
                <a className="header--link-item" href="/basket">
                    <BasketLogo />
                </a>
                <a className="header--link-item" href="/account">
                    <AccountLogo />
                </a>
            </div>
        </nav>


    );
}
 
export default Header;