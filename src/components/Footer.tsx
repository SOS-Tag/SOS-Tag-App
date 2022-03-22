import React from "react";

type FooterType = {}

const Footer: React.FC<FooterType> = ({}) => {
    return ( 
        <div className="w-full footer flex flex-row items-center justify-center space-x-2 md:space-x-40  bg-SosTagBlue text-white md:h-100 p-2">
            <div className="images flex flex-row md:space-x-5 md:w-30 items-center">
                <img className="w-2/5" alt="imgLogoCircle" src="./assets/circle_logo.png"/>
                <img className="w-10 h-2 md:w-20 md:h-5" alt="imgTextLogo" src="./assets/SOS_TAG.png"/>
            </div>
            <div className="text flex flex-row text-[12px] space-x-5 md:text-[15px] md:space-x-40 justify-end">
                <p>Mention légales</p>
                <p>Politique de confidentialité</p>
            </div>
        </div>
     );
}
 
export default Footer;