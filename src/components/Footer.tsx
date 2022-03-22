import React from "react";

type FooterType = {}

const Footer: React.FC<FooterType> = ({}) => {
    return ( 
        <div className="w-full footer flex flex-row items-center justify-center space-x-2 md:space-x-40  bg-SosTagBlue text-white md:h-100 p-2">
            <div className="flex flex-row items-center">
                <img className="w-2/5" alt="imgLogoCircle" src="./assets/circle_logo.png"/>
                <img className="w-10 h-2" alt="imgTextLogo" src="./assets/SOS_TAG.png"/>
            </div>
            <div className="flex flex-row text-[12px] space-x-5 justify-end">
                <p>Mentions légales</p>
                <p>Politique de confidentialité</p>
            </div>
        </div>
     );
}
 
export default Footer;