import React from "react";
import Button from '../components/Button';
import Footer from '../components/Footer';

type LandingPageType = {}

const LandingPage: React.FC<LandingPageType> = ({ }) => {
  return (
    <div className="w-full flex flex-col space-y-20 items-center bg-slate-100">

      {/* HERO */}

      <div className="w-full flex flex-col space-y-4 bg-white drop-shadow-md p-8 items-center">
        <div className="w-1/2 desktop:w-1/4 m-auto desktop:mt-[50px]">
          <img className="w-5/5 m-auto" alt="imgManSmiling" src="./assets/man_smiling.png" />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-center md:text-left text-xs md:text-2xl">
            <h1>Avec SOS Tag,<br />Aidez-nous à vous aider !</h1>
          </div>
          <div className="flex flex-row">
            <Button box="fill" type="secondaire" buttonText="Commencer !" to="/sign-up" />
            <Button box="fill" type="general" buttonText="J'ai un QR Code !" to="/sign-in" />
          </div>
        </div>
      </div>

      {/* PRODUCT PRESENTATION */}

      <div className="w-[90%] desktop:w-1/2 p-10">
          <h2 className="mb-5">C'est quoi ?</h2>
          <p><strong>SOS Tag</strong> me permet de créer des fiches médicales d’urgence pour moi et mes enfants directement reliées à des QR codes. En cas d’accident, les urgentistes scannent mon QR code pour accéder aux <strong>informations personnelles de santé</strong> dont ils ont besoin pour accélerer la prise en charge.</p>
      </div>

      {/* HOW DOES IT WORK ?*/}

      <div className="w-full m-50 p-10 bg-white drop-shadow-md">
        <div className="flex flex-col space-y-8 items-center justify-items-center">
          <h2>Comment ça fonctionne ?</h2>
          <div className="grid grid-rows-2 desktop:grid-rows-none desktop:grid-cols-2">

            <div className="flex flex-col items-center">
              <div className="bg-SosTagYellowLight flex flex-col space-y-6 items-center p-8 text-SosTagBlue grow">
                <h2>Hors club</h2>
                <p>Je pratique du sport hors club et/ou en famille</p>
                <ol className="list-decimal">
                  <li>Je m'inscris</li>
                  <li>Je remplis ma fiche santé et celles de mes enfants</li>
                  <li>J’imprime mon QR code ou je passe une commande de sticker(s)</li>
                  <li>Je place le ou les QR codes sur mes accessoires sportifs </li>
                </ol>
                <p className="text-center"><strong>Vous devenez une famille qui anticipe une éventuelle prise en charge !</strong></p>
              </div>
              <Button box="fill" type="secondairelanding" buttonText="Créer un compte" to="/sign-up" />
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-SosTagRedLight flex flex-col space-y-6 items-center p-8 text-SosTagBlue grow">
                <h2>En club</h2>
                <p>Je suis membre d'un ensemble sportif</p>
                <ol className="list-decimal">
                  <li>Le club ou l’association me fournit une QR code</li>
                  <li>Je scanne le QR code</li>
                  <li>Je m’inscris</li>
                  <li>Je remplis ma fiche santé</li>
                  <li>Je place le ou les QR codes sur mes accessoires sportifs</li>
                </ol>
                <p className="text-center"><strong>Vous prenez en main votre santé au sein de votre club !</strong></p>
              </div>
              <Button box="fill" type="secondairelanding" buttonText="J'ai un QR Code" to="/sign-in" />
            </div>

          </div>
        </div>
      </div>

      <div className="desktop:flex">
        <div className="w-full desktop:w-1/2 desktop:w-1/2 flex flex-col items-center">
          <div className="w-1/2 rounded-full p-2">
            <img className="relative" alt="imgEllTennis" src="./assets/ellipse_3.png" />
          </div>

          <div className="w-[80%] mt-[5%] flex flex-col">
            <h2 className="mb-5">Vous êtes une <span className="text-SosTagRedLight">association sportive</span> ?</h2>
            <p>Vous êtes une fédération et vous souhaitez commander des QR codes pour tous vos membres. Prenez contact avec nous.
              <br />Rejoignez l’aventure <strong>SOS Tag</strong> et contribuez, vous aussi à préserver la santé des personnes qui vous sont chères</p>
          </div>
        </div>
        <div className="w-full desktop:w-1/2 desktop:w-1/2 flex flex-col items-center">

          <img className="desktop:hidden mt-6 mb-10" alt="RectYellow" src="./assets/rect_sep.png" />

          <div className="w-1/2 rounded-full p-2">
            <img className="relative" alt="imgEllTennis" src="./assets/ellipse_4.png" />
          </div>

          <div className="w-[80%] mt-[5%] flex flex-col">
            <h2 className="mb-5">Des stickers <span className="text-SosTagRedLight">designs</span> et <span className="text-SosTagRedLight">sécurisés</span> qui s’adaptent à votre équipement !</h2>
            <p>Pratique, discret mais visible, nos Tag s’adapent à tous types de surface.
              <br /><strong>SOS Tag</strong> assure votre sereineté lorsque vous pratiquez vos activités sportives seul(e) ou en famille.
              <br /><strong>Quoiqu’il arrive les secours accèderont à ce que vous auriez souhaité transmettre en un flash !</strong></p>
          </div>
        </div>

      </div>

      <Footer />

    </div>
  );
}

export default LandingPage;
