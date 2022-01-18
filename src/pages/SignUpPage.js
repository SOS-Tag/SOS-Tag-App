import React, { useState } from 'react';
import AlternativText from "../components/AlternativText";
import Field from "../components/Field";
import 'react-phone-number-input/style.css'

const SignUpPage = () => {

  const [surName, setSurName] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  return ( 
    <div className="SignUpPageContainer bg-red">
      <div className="SignUpPageIllustration">

      </div>
      <div className="SignUpPageContent">
        <h1>
          Créez votre compte SOS Tag
        </h1>
        <div className="SignUpPageForm">
          <form>
            <Field editing={true} type="text" value={name} onChange={setName} label="Nom" mandatory={true}/>
            <Field editing={true} type="text" value={surName} onChange={setSurName} label="Prenom" mandatory={false}/>
            <Field editing={true} type="mail" value={mail} onChange={setMail} label="Adresse mail" mandatory={true}/>
            <Field editing={true} type="tel" value={phone} onChange={setPhone} label="Numéro de téléphone" mandatory={true}/>
            <Field editing={true} type="password" onChange={setPassword1} label="Nouveau mot de passe" mandatory={true}/>
            <Field editing={true} type="password" onChange={setPassword2} label="Répéter mot de passe" mandatory={true}/>
            <input type="submit" value="Submit" />
          </form>
          
        </div>
        <AlternativText text="Déjà inscrit ? " linkText="Se connecter" link="./signin"/>

      </div>
    </div>
   );
}

export default SignUpPage;