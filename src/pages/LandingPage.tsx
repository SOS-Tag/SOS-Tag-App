import React from "react";
import Button from '../components/Button';
import Footer from '../components/Footer';

type LandingPageType = {}

const LandingPage: React.FC<LandingPageType> = ({}) => {
  return ( 
    <div className="w-full flex flex-col space-y-20 items-center landing-page bg-slate-100">

      <div className="w-full first-part flex flex-col space-y-4  bg-white drop-shadow-md items-center p-8  md:flex-row md:space-x-8 items-center md:mb-20 md:pb-6">
        <div className="w-1/2 LandingPageIllustration m-auto md:mt-[50px] flex ">
          <img className="w-5/5 m-auto" alt="imgManSmiling" src="./assets/man_smiling.png"/>
        </div>
        <div className="first-part-text flex flex-col items-center">
          <div className="first-message text-center md:text-left text-xs md:text-2xl">
            <h1>Avec SOS Tag,</h1>
            <h1>Aidez-nous à vous aider !</h1>
          </div>
          <div className="buttons flex flex-row">
            <Button box="fill" type ="secondaire" buttonText="Commencer !" to="/sign-up"/>
            <Button box="fill" type ="general" buttonText="J'ai un QR Code !" to="/sign-in"/>
          </div>
          
        </div>
      </div>

      <div className="w-full second-part flex flex-row m-50 p-10 md:bg-[url('./assets/img_part_2.svg')] md:bg-no-repeat md:bg-right md:bg-contain">
        <div className="second-part-text space-y-6 md:flex md:flex-col md:space-y-4 md:w-1/2">
          <h2>C'est quoi ?</h2>
          <p><strong>SOS Tag</strong> me permet de créer des fiches médicales d’urgence pour moi et mes enfants directement reliées à des QR codes. En cas d’accident, les urgentistes scannent mon QR code pour accéder aux <strong>informations personnelles de santé</strong> dont ils ont besoin pour accélerer la prise en charge.</p>
        </div>
        
      </div>
      
      <div className="third-part w-full m-50 p-10 bg-white drop-shadow-md">
        <div className="third-part-text flex flex-col space-y-8 items-center justify-items-center">
          <h2>Comment ça fonctionne ?</h2>
          
          <div className="cards grid grid-rows-2 md: grid-rows-none md:grid-cols-2 md:gap-6 justify-center">

            <div className="f-elem flex flex-col items-center">
              <div className="first-card bg-SosTagYellowLight flex flex-col space-y-6 items-center p-8 rounded-lg text-SosTagBlue w-448 h-601 grow">
                <h2>Hors club</h2>
                <p>Je pratique du sport hors club et/ou en famille</p>
                <ol className="list-decimal">
                  <li>Je m'inscris</li>
                  <li>Je remplis ma fiche santé et celles de mes enfants</li>
                  <li>J’imprime mon QR code ou je passe une commande de sticker(s)</li>
                  <li>Je place le ou les QR codes sur mes accessoires sportifs </li>
                </ol>
                <p className="end-text text-center"><strong>Vous devenez une famille qui anticipe une éventuelle prise en charge !</strong></p>
              </div>
              <Button box="fill" type ="secondairelanding" buttonText="Créer un compte" to="/sign-up"/>
                
            </div>

            <div className="s-elem flex flex-col items-center">
              <div className="second-card bg-SosTagRedLight flex flex-col space-y-6 items-center p-8 rounded-lg text-SosTagBlue w-448 h-601 grow">
                <h2>En club</h2>
                <p>Je suis membre d'un ensemble sportif</p>
                <ol className="list-decimal">
                  <li>Le club ou l’association me fournit une QR code</li>
                  <li>Je scanne le QR code</li>
                  <li>Je m’inscris</li>
                  <li>Je remplis ma fiche santé</li>
                  <li>Je place le ou les QR codes sur mes accessoires sportifs</li>
                </ol>
                <p className="end-text text-center"><strong>Vous prenez en main votre santé au sein de votre club !</strong></p>
              </div>
              <Button box="fill" type ="secondairelanding" buttonText="J'ai un QR Code" to="/sign-in"/>
            </div>
            


          </div>
        </div>
          
        
      </div>

      <div className="w-full forth-part flex flex-col space-y-16 md:flex-row md:space-x-8 items-center md:p-10">
        <div className="forth-part-image w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] flex items-center justify-center" >
          <div className="w-[100%] h-[100%] bg-SosTagRedLight rounded-full">
          <img className="w-[90%] h-[90%] ml-[5%] mt-[5%] z-10" alt="imgEllTennis" src="./assets/ellipse_1.png" style={ {position: "relative", zIndex: "10"}}/>
          </div>
          {/* <img className="w-3/5 md:w-1/5 " alt="imgEllPink" src="./assets/ellipse_2.png" style={ {position: "absolute", zIndex: "1", opacity: ".99"}}/> */}
          
        </div>

        <div className="forth-part-text flex flex-col space-y-4 w-1/2">
          <h2>Vous êtes une <span className="text-SosTagRedLight">association sportive</span> ?</h2>
          <p>Vous êtes une fédération et vous souhaitez commander des QR codes pour tous vos membres. Prenez contact avec nous.</p>
          <p>Rejoignez l’aventure <strong>SOS Tag</strong> et contribuez, vous aussi à préserver la santé des personnes qui vous sont chères</p>
        </div>
        
      </div>

      <img alt="RectYellow" src="./assets/rect_sep.png"/>

      <div className="w-full fifth-part flex flex-col space-y-4 md:flex-row-reverse md:flex-row md:space-x-8 items-center md:p-20">

        <div className="forth-part-image w-1/2 flex items-center justify-center" >
          <img className="w-full md:w-1/2 " alt="imgWomanSport" src="./assets/woman_on_phone.png"/>
        </div>

        <div className="fifth-part-text flex flex-col space-y-4 p-10 md:w-1/2 md:p-none">
          <h2>Des stickers <span className="text-SosTagRedLight">designs</span> et <span className="text-SosTagYellowLight">sécurisés</span> qui s’adaptent à votre équipement !</h2>
          <p>Pratique, discret mais visible, nos Tag s’adapent à tous types de surface.</p>
          <p><strong>SOS Tag</strong> assure votre sereineté lorsque vous pratiquez vos activités sportives seul(e) ou en famille. </p>
          <p><strong>Quoiqu’il arrive les secours accèderont à ce que vous auriez souhaité transmettre en un flash !</strong></p>
        </div>

        

        
        
      </div>

       <Footer/>



    </div>
  );
}
 
export default LandingPage;