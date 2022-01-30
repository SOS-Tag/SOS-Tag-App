import React, { FormEventHandler, useState } from 'react';
import AlternativText from "../components/AlternativText";
import TextMessage from '../components/TextMessage';
import Field from "../components/field/Field";
import Button from '../components/Button';
import 'react-phone-number-input/style.css'
import { TextMessageType } from '../components/Types';
import { text } from 'stream/consumers';

const SignUpPage = () => {

  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [consent, setConsent] = useState(false);
  const [errorMail, setErrorMail] = useState(false);
  const [errorPwd, setErrorPwd] = useState(false);

  function handleConsent(){
    (consent)?setConsent(false):setConsent(true);
  }

  // function checkform(event: Event){
  //   let condition = true;
  //   if(password1 !== password2){
  //     condition = false;
  //     if(!errorPwd)
  //       setErrorPwd(true);
  //   }
  //   else{
  //     if(errorPwd)
  //       setErrorPwd(false);
  //   }
  //   if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))){
  //     condition = false;
  //     if(!errorMail)
  //       setErrorMail(true);
  //   }
  //   else{
  //     if(errorMail)
  //       setErrorMail(false);
  //   }
  //   if(!consent){
  //     condition = false;
  //   }
  //   if(condition){
  //     alert("formulaire valide");
  //   }
  //   else{
  //     event.preventDefault();
  //     alert("formulaire invalide")
  //   }
  // }

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
        <div className="SignUpPageForm">
          <form action="/signin" >
            <div className="formRow2 w-full grid">
              <div className="formRow2-item-a">
                <Field editing={false} type="text" placeholder={"bonjou"} label="Nom" mandatory={true}/>
              </div>
              <div className="formRow2-item-b">
                <Field editing={true} type="text" placeholder={surname} label="Prenom" mandatory={true}/>
              </div>
            </div>
            <div className="formRow2 w-full grid">
              <div className="formRow2-item-a">
                <Field editing={true} type="mail" placeholder={mail}  label="Adresse mail" mandatory={true}/> 
                {errorMail && <TextMessage type={TextMessageType.error} message="Mail invalide"/>}
              </div>
              <div className="formRow2-item-b">
                <Field editing={true} type="select" option={[{value : true, name : "oui"}, {value : false, name : "non"}, {value : "D", name : "la réponse D"}]} placeholder={mail} label="Maladie" mandatory={true}/> 
              </div>
            </div>
            <div className="formRow2 w-full grid">
              <div className="formRow2-item-a">
                <Field editing={true} type="tel" placeholder={phone} label="Numéro de téléphone" mandatory={false}/>
              </div>
            </div>
            
            <div className="formRow2 w-full grid">
              <div className="formRow2-item-a">
                <Field editing={true} type="password" label="Nouveau mot de passe" mandatory={true}/>
                {errorPwd && <TextMessage type={TextMessageType.error} message="Mots de passe différents"/>}
              </div>
              <div className="formRow2-item-b">
                <Field editing={true} type="password" label="Répéter mot de passe" mandatory={true}/>
              </div>  
            </div>

            <div className="w-[100%] flex ">
              <input required className="mt-[6px]" type="checkbox" name="consent" onClick={handleConsent}/>
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