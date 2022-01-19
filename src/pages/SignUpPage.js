import React, { useState } from 'react';
import AlternativText from "../components/AlternativText";
import Field from "../components/Field";
import Button from '../components/Button';
import 'react-phone-number-input/style.css'

const SignUpPage = () => {

  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  return ( 
    <div className="m-auto w-full flex items-center SignUpPageContainer">
      <div className="w-1/2 SignUpPageIllustration">
        <img className="w-4/5" alt="imgSignUp" src="./assets/ImageSignUp.png"/>
      </div>
      <div className="w-1/2 SignUpPageContent ">
        <h1>
          Créez votre compte SOS Tag
        </h1>
        <div className="SignUpPageForm">
          <form>
            <div className="w-full bg-red-200 flex direction-column">
              <Field editing={true} type="text" value={name} onChange={setName} label="Nom" mandatory={true}/>
              <Field editing={true} type="text" value={surname} onChange={setSurname} label="Prenom" mandatory={false}/>
            </div>
            <Field editing={true} type="mail" value={mail} onChange={setMail} label="Adresse mail" mandatory={true}/>
            <Field editing={true} type="tel" value={phone} onChange={setPhone} label="Numéro de téléphone" mandatory={true}/>
            <div className="w-full bg-red-200 flex direction-column">
              <Field editing={true} type="password" onChange={setPassword1} label="Nouveau mot de passe" mandatory={true}/>
              <Field editing={true} type="password" onChange={setPassword2} label="Répéter mot de passe" mandatory={true}/>
            </div>
            <Button box="fill" type ="general" buttonText="Valider"/>
          </form>
        </div>
        <AlternativText text="Déjà inscrit ? " linkText="Se connecter" link="./signin"/>

      </div>
    </div>
   );
}

export default SignUpPage;