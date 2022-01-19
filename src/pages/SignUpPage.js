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
  const [consent, setConsent] = useState(false);

  function handleConsent(){
    (consent)?setConsent(false):setConsent(true);
  }

  function checkform(evt){
    let condition = true;
    if(password1 !== password2){
      condition = false;
    }
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))){
      condition = false;
    }
    if(condition){
      alert("formulaire valide");
    }
    else{
      evt.preventDefault();
      alert("formulaire invalide")
    }
  }

  function handleValidation(){
    console.log("name : "+name);
    console.log("surname : "+surname);
    console.log("mail : "+mail);
    //(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))?alert("mail valide"):alert("mail invalide");
    console.log("phone : "+phone);
    console.log("password : "+password1);
    //(password1===password2)?alert("MDP identiques"): alert("MDP différents");
    console.log("consent : "+consent);
    console.log("validation works");
  }

  return ( 
    <div className="m-auto w-full flex items-center SignUpPageContainer">
      <div className="w-1/2 SignUpPageIllustration">
        <img className="w-4/5" alt="imgSignUp" src="./assets/ImageSignUp.png"/>
      </div>
      <div className="w-1/2 SignUpPageContent ">
        <h1 className="mb-[50px]" >
          Créez votre compte SOS Tag
        </h1>
        <div action="./" className="SignUpPageForm">
          <form onSubmit={checkform}>
            <div className="formRow2 w-full grid">
              <div className="formRow2-item-a">
                <Field editing={true} type="text" value={name} onChange={setName} label="Nom" mandatory={true}/>
              </div>
              <div className="formRow2-item-b">
                <Field editing={true} type="text" value={surname} onChange={setSurname} label="Prenom" mandatory={true}/>
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

            <div className="w-[100%] flex ">
              <input className="mt-[6px]" type="checkbox" name="consent" onClick={handleConsent}/>
              <p className="ml-[10px] w-[80%] mb-[20px] shrink text-SosTagBlue">
                J'accepte les conditions générales d'utilisation et les conditions générales de vente. Je consens au traitement de mes données conformément à la politique de confidentialité de SOS Tag.
              </p>
            </div>
            <Button onClick={handleValidation} box="fill" type ="general" buttonText="Valider"/>
          </form>
        </div>
        <AlternativText className="mt-[30px] text-SosTagBlue" text="Déjà inscrit ? " linkText="Se connecter" link="./signin"/>
      </div>
    </div>
   );
}

export default SignUpPage;