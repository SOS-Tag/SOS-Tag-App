import React, { FormEventHandler, useState } from 'react';
import AlternativText from "../components/AlternativText";
import TextMessage from '../components/TextMessage';
import Field from "../components/field/Field";
import Button from '../components/Button';
import 'react-phone-number-input/style.css'
import { TextMessageType } from '../components/Types';
import { text } from 'stream/consumers';

const SignUpPage = () => {

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

  function checkform(event: any){
    event.preventDefault();
    console.log(event.target.firstname.value);
    console.log(event.target.lastname.value);
    console.log(event.target.mail.value);
    console.log(event.target.phone.value);
    console.log(event.target.password1.value);
    console.log(event.target.password2.value);

    let condition = true;
    if(event.target.password1.value !== event.target.password2.value){
      condition = false;
      if(!errorPwd)
        setErrorPwd(true);
    }
    else{
      if(errorPwd)
        setErrorPwd(false);
    }
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.mail.value))){
      condition = false;
      if(!errorMail)
        setErrorMail(true);
    }
    else{
      if(errorMail)
        setErrorMail(false);
    }
    if(!consent){
      condition = false;
    }
    if(condition){
      alert("formulaire valide");
    }
    else{
      event.preventDefault();
      alert("formulaire invalide")
    }

  }

  return ( 
    // <div className="m-auto w-full flex items-center SignUpPageContainer">
    //   <div className="w-1/2 SignUpPageIllustration">
    //     <img className="w-4/5" alt="imgSignUp" src="./assets/ImageSignUp.png"/>
    //   </div>
    //   <div className="w-1/2 SignUpPageContent ">
    //     <h1 className="mb-[50px]" >
    //       Créez votre compte SOS Tag
    //     </h1>
    //     <div className="SignUpPageForm">
    //       <form onSubmit={checkform} >
    //         <div className="formRow2 w-full grid">
    //           <div className="formRow2-item-a">
    //             <Field editing={true} type="text" name={"firstname"} label="Nom" mandatory={true}/>
    //           </div>
    //           <div className="formRow2-item-b">
    //             <Field editing={true} type="text" name={"lastname"} label="Prenom" mandatory={false}/>
    //           </div>
    //         </div>
    //         <div className="formRow2 w-full grid">
    //           <div className="formRow2-item-a">
    //             <Field editing={true} type="mail" name={"mail"} label="Adresse mail" mandatory={false}/> 
    //             {errorMail && <TextMessage type={TextMessageType.error} message="Mail invalide"/>}
    //           </div>
    //           <div className="formRow2-item-b">
    //             <Field editing={true} type="tel" name={"phone"} label="Numéro de téléphone" mandatory={false}/>
    //           </div>
    //         </div>
    //         <div className="formRow2 w-full grid">
    //           <div className="formRow2-item-a">
    //             <Field editing={true} type="password" name={"password1"} label="Nouveau mot de passe" mandatory={false}/>
    //             {errorPwd && <TextMessage type={TextMessageType.error} message="Mots de passe différents"/>}
    //           </div>
    //           <div className="formRow2-item-b">
    //             <Field editing={true} type="password" name={"password2"} label="Répéter mot de passe" mandatory={false}/>
    //           </div>  
    //         </div>

    //         <div className="w-[100%] flex ">
    //           <input required className="mt-[6px]" type="checkbox" name="consent" onClick={handleConsent}/>
    //           <p className="ml-[10px] w-[80%] mb-[20px] shrink text-SosTagBlue">
    //             J'accepte les conditions générales d'utilisation et les conditions générales de vente. Je consens au traitement de mes données conformément à la politique de confidentialité de SOS Tag.
    //           </p>
    //         </div>
    //         <Button box="fill" type ="general" buttonText="Valider"/>
    //       </form>
    //     </div>
    //     <AlternativText className="mt-[30px] text-SosTagBlue" text="Déjà inscrit ? " linkText="Se connecter" link="./signin"/>
    //   </div>
    // </div>

    <div className="m-auto w-full flex items-center SignUpPageContainer">
      <div className="mobile:hidden w-1/2 SignUpPageIllustration tablet:block">
        <img className="w-4/5" alt="imgSignUp" src="./assets/ImageSignUp.png"/>
      </div>
      <div className="w-full tablet:w-1/2 SignUpPageContent ">
        <h1 className="mb-[50px] SignUpPageTitle" >
          Créez votre compte SOS Tag
        </h1>
        <div className="SignUpPageForm">
          <form onSubmit={checkform} >
            <div className="formRow2 w-full grid">
              <div className="formRow2-item-a">
                <Field editing={true} type="text" name={"firstname"} label="Nom" mandatory={true}/>
              </div>
              <div className="formRow2-item-b">
                <Field editing={true} type="text" name={"lastname"} label="Prenom" mandatory={false}/>
              </div>
            </div>
            <div className="formRow2 w-full grid">
              <div className="formRow2-item-a">
                <Field editing={true} type="mail" name={"mail"} label="Adresse mail" mandatory={false}/> 
                {errorMail && <TextMessage type={TextMessageType.error} message="Mail invalide"/>}
              </div>
              <div className="formRow2-item-b">
                <Field editing={true} type="tel" name={"phone"} label="Numéro de téléphone" mandatory={false}/>
              </div>
            </div>
            <div className="formRow2 w-full grid">
              <div className="formRow2-item-a">
                <Field editing={true} type="password" name={"password1"} label="Nouveau mot de passe" mandatory={false}/>
                {errorPwd && <TextMessage type={TextMessageType.error} message="Mots de passe différents"/>}
              </div>
              <div className="formRow2-item-b">
                <Field editing={true} type="password" name={"password2"} label="Répéter mot de passe" mandatory={false}/>
              </div>  
            </div>

            <div className="SignUpPageCheckbox flex ">
              <input required className="mt-[6px]" type="checkbox" name="consent" onClick={handleConsent}/>
              <p className="ml-[10px] w-[80%] mb-[20px] shrink text-SosTagBlue">
                J'accepte les conditions générales d'utilisation et les conditions générales de vente. Je consens au traitement de mes données conformément à la politique de confidentialité de SOS Tag.
              </p>
            </div>
            <Button box="fill" type="general" buttonText="Valider"/>
          </form>
        </div>
        <div className="w-[100vw] flex">
          <AlternativText className="mt-[30px] text-SosTagBlue" text="Déjà inscrit ? " linkText="Se connecter" link="./signin"/>
        </div>
      </div>
    </div>


   );
}

export default SignUpPage;