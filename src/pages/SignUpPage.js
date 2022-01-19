import React, { useState } from 'react';
import AlternativText from "../components/AlternativText";
import Field from "../components/Field";
import 'react-phone-number-input/style.css'

const SignUpPage = () => {

  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [consent, setConsent] = useState(false);

  function handleConsent(){
    (consent)?setConsent(false):setConsent(true);
    console.log(consent)
  }

  return ( 
    <div className="m-auto w-full flex items-center SignUpPageContainer">
      <div className="w-1/2 SignUpPageIllustration">
        <img className="w-4/5" src="./assets/ImageSignUp.png"/>
      </div>
      <div className="w-1/2 SignUpPageContent ">
        <h1 className="mb-[50px]">
          Créez votre compte SOS Tag
        </h1>
        <div className="SignUpPageForm">
          <form>
            <div className="formRow2 w-full grid">
              <div className="formRow2-item-a">
                <Field editing={true} type="text" value={name} onChange={setName} label="Nom" mandatory={true}/>
              </div>
              <div className="formRow2-item-b">
                <Field editing={true} type="text" value={surname} onChange={setSurname} label="Prenom" mandatory={false}/>
              </div>
            </div>
            <div className="formRow2 w-full grid">
              <div className="formRow2-item-a">
                <Field editing={true} type="mail" value={mail} onChange={setMail} label="Adresse mail" mandatory={true}/> 
              </div>
            </div>
            <div className="formRow2 w-full grid">
              <div className="formRow2-item-a">
                <Field editing={true} type="tel" value={phone} onChange={setPhone} label="Numéro de téléphone" mandatory={true}/>
              </div>
            </div>
            
            <div className="formRow2 w-full grid">
              <div className="formRow2-item-a">
                <Field editing={true} type="password" onChange={setPassword1} label="Nouveau mot de passe" mandatory={true}/>
              </div>
              <div className="formRow2-item-b">
                <Field editing={true} type="password" onChange={setPassword2} label="Répéter mot de passe" mandatory={true}/>
              </div>  
            </div>

            <div>
              <input type="checkbox" name="consent" onChange={handleConsent}/>
              <p>
                J'accepte les conditions générales d'utilisation et les conditions générales de vente. Je consens au traitement de mes données conformément à la politique de confidentialité de SOS Tag.
              </p>
            </div>

            <input className="py-[10px] px-[20px] text-white rounded-[12px] b-2 bg-SosTagRedLight hover:cursor-pointer hover:bg-SosTagRed" type="submit" value="Valider" />
          </form>
        </div>
        <AlternativText text="Déjà inscrit ? " linkText="Se connecter" link="./signin"/>

      </div>
    </div>
   );
}

export default SignUpPage;