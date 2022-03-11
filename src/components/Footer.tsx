import React from "react";

type FooterType = {}

const Footer: React.FC<FooterType> = ({}) => {
    return ( 
        <div className="w-full footer flex flex-row items-center justify-center space-x-40  bg-sky-900 text-white h-100 p-2">
            <div className="images flex flex-row space-x-5 w-30 items-center">
                <img className="w-1/5" alt="imgLogoCircle" src="./assets/circle_logo.png"/>
                <img className="w-20 h-5" alt="imgTextLogo" src="./assets/SOS_TAG.png"/>
            </div>
            <div className="text flex flex-row space-x-40 justify-end">
                <p>Mention légales</p>
                <p>Politique de confidentialité</p>
            </div>
            
        </div>
        
     );
}
 
export default Footer;