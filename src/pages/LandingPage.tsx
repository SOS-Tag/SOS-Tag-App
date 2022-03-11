import React from "react";
import Button from '../components/Button';
import Footer from '../components/Footer'

type LandingPageType = {}

const LandingPage: React.FC<LandingPageType> = ({}) => {
  return ( 
    <div className="w-auto w-full flex flex-col space-y-20 items-center landing-page">

      <div className="first-part flex flex-row space-x-8 items-center mb-20">
        <div className="w-1/2 LandingPageIllustration ml-6 mt-6">
          <img className="w-5/5" alt="imgManSmiling" src="./assets/man_smiling.png"/>
        </div>
        <div className="first-part-text flex flex-col">
          <div className="first-message">
            <h1>Avec SOS Tag,</h1>
            <h1>Aidez-nous à vous aider !</h1>
          </div>
          <div className="buttons flex flex-row">
            <Button box="fill" type ="general" buttonText="Commencer !"/>
            <Button box="fill" type ="general" buttonText="J'ai un QR Code !"/>
          </div>
          
        </div>
      </div>

      <div className="w-full second-part flex flex-row m-50 p-10 bg-[url('./assets/img_part_2.svg')] bg-no-repeat bg-right bg-50%">
        <div className="second-part-text flex flex-col space-y-4 w-1/2">
          <h2>C'est quoi ?</h2>
          <p><strong>SOS Tag</strong> me permet de créer des fiches médicales d’urgence pour moi et mes enfants directement reliées à des QR codes. En cas d’accident, les urgentistes scannent mon QR code pour accéder aux <strong>informations personnelles de santé</strong> dont ils ont besoin pour accélerer la prise en charge.</p>
        </div>
        
      </div>
      
      <div className="third-part w-full m-50 p-10">
        <div className="third-part-text flex flex-col space-y-8 items-center justify-items-center">
          <h2>Comment ça fonctionne ?</h2>
          
          <div className="cards grid grid-cols-2 gap-6 justify-center m-20">

            <div className="f-elem flex flex-col items-center">
              <div className="first-card bg-amber-200 flex flex-col space-y-6 items-center p-6 rounded-lg text-sky-900 w-448 h-601 grow" style={{position: "relative", zIndex:1}}>
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
                <button className="button inline-block -top-30 bg-sky-900 text-white relative" type="button">
                  Créer un compte
                </button>
                
            </div>

            <div className="s-elem flex flex-col items-center">
              <div className="second-card bg-red-300 flex flex-col space-y-6 items-center p-8 rounded-lg text-sky-900 w-448 h-601 grow">
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
                <Button box="fill" type ="general" buttonText="J'ai un QR Code"/>
            </div>
            


          </div>



          </div>
          
        
      </div>

      <div className="w-full forth-part flex flex-row space-x-8 items-center m-20 p-20">
        <div className="forth-part-image w-1/2 flex items-center justify-center" >
          <img className="w-1/5 " alt="imgEllPink" src="./assets/ellipse_2.png" style={ {position: "absolute", zIndex: "1", opacity: ".99"}}/>
          <img className="w-1/2 top-8 right-8" alt="imgEllTennis" src="./assets/ellipse_1.png" style={ {position: "relative", zIndex: "10"}}/>
        </div>

        <div className="forth-part-text flex flex-col space-y-4 w-1/2">
          <h2>Vous êtes une <span className="text-red-300">association sportive</span> ?</h2>
          <p>Vous êtes une fédération et vous souhaitez commander des QR codes pour tous vos membres. Prenez contact avec nous.</p>
          <p>Rejoignez l’aventure <strong>SOS Tag</strong> et contribuez, vous aussi à préserver la santé des personnes qui vous sont chères</p>
        </div>
        
      </div>

      <img alt="RectYellow" src="./assets/rect_sep.png"/>

      <div className="w-full fifth-part flex flex-row space-x-8 items-center m-20 p-20">

        <div className="fifth-part-text flex flex-col space-y-4 w-1/2">
          <h2>Des stickers <span className="text-red-300">designs</span> et <span className="text-amber-200">sécurisés</span> qui s’adaptent à votre équipement !</h2>
          <p>Pratique, discret mais visible, nos Tag s’adapent à tous types de surface.</p>
          <p><strong>SOS Tag</strong> assure votre sereineté lorsque vous pratiquez vos activités sportives seul(e) ou en famille. </p>
          <p><strong>Quoiqu’il arrive les secours accèderont à ce que vous auriez souhaité transmettre en un flash !</strong></p>
        </div>

        <div className="forth-part-image w-1/2 flex items-center justify-center" >
          <img className="w-1/2 " alt="imgWomanSport" src="./assets/woman_on_phone.png"/>
        </div>

        
        
      </div>

      <Footer/>



    </div>
  );
}
 
export default LandingPage;