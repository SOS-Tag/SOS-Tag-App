import React, { FormEventHandler, useState } from 'react';
import AlternativText from "../components/AlternativText";
import TextMessage from '../components/TextMessage';
import Field from "../components/field/Field";
import Button from '../components/Button';
import 'react-phone-number-input/style.css'
import { TextMessageType } from '../components/Types';
import { text } from 'stream/consumers';
import { useRegisterMutation } from '../generated/graphql';

const SignUpPage = () => {

  const [consent, setConsent] = useState(false);
  const [errorMail, setErrorMail] = useState(false);
  const [errorPwd, setErrorPwd] = useState(false);

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const [register] = useRegisterMutation()

  function handleConsent(){
    (consent)?setConsent(false):setConsent(true);
  }

  async function checkform(event: any){
    event.preventDefault();
    console.log(event.target.firstname.value);
    console.log(event.target.lastname.value);
    console.log(event.target.mail.value);
    console.log(event.target.phone.value);
    console.log(event.target.password1.value);
    console.log(event.target.password2.value);

    setIsLoading(true);

    const values = {
      fname: event.target.firstname.value, 
      lname: event.target.lastname.value, 
      phone: event.target.phone.value,
      email: event.target.mail.value, 
      password: event.target.password1.value
    }

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
      console.log("formulaire valide");
      // We use the register mutation as we implement the registration of a Firebase user
      // on the backend.
      // When a user is created, we also create an account which shares the id and the
      // email (not sure for now about the email) of the new user.
      const response = await register({ variables: { registerInput: values } });

      setIsLoading(false);

      const success = response?.data?.register?.response;
      const error = response?.data?.register?.error;

      if (success) {
        console.log('inscription valide')
        setIsRegistered(true);
      }

      if (error) {
        console.log(error)
        setError(error?.message as string)
      }

    }
    else{
      event.preventDefault();
    }

  }

  return ( 
 
    <div className="m-auto w-full flex items-center SignUpPageContainer">
      <div className="mobile:hidden w-1/2 SignUpPageIllustration tablet:block">
        <img className="w-4/5" alt="imgSignUp" src="./assets/ImageSignUp.png"/>
      </div>
      <div className="w-full tablet:w-1/2 SignUpPageContent ">
        {(isRegistered)
          ? <h1 className="mobile:mt-[50px] mb-[50px] SignUpPageTitle" >
              Un mail vous a été envoyé pour valider votre compte
            </h1>
          : <>
              <h1 className="mobile:mt-[50px] mb-[50px] SignUpPageTitle" >
                Créez votre compte SOS Tag
              </h1>
              <div className="SignUpPageForm">
                <form onSubmit={checkform} >
                  <div className="SignUpPageRow w-full grid">
                    <div className="SignUpPageRow-item-a">
                      <Field editing={true} type="text" name={"firstname"} label="Nom" mandatory={true}/>
                    </div>
                    <div className="SignUpPageRow-item-b">
                      <Field editing={true} type="text" name={"lastname"} label="Prenom" mandatory={false}/>
                    </div>
                  </div>
                  <div className="SignUpPageRow w-full grid">
                    <div className="SignUpPageRow-item-a">
                      <Field editing={true} type="mail" name={"mail"} label="Adresse mail" mandatory={false}/> 
                      {errorMail && <TextMessage type={TextMessageType.error} message="Mail invalide"/>}
                    </div>
                    <div className="SignUpPageRow-item-b">
                      <Field editing={true} type="tel" name={"phone"} label="Numéro de téléphone" mandatory={false}/>
                    </div>
                  </div>
                  <div className="SignUpPageRow w-full grid">
                    <div className="SignUpPageRow-item-a">
                      <Field editing={true} type="password" name={"password1"} label="Nouveau mot de passe" mandatory={false}/>
                      {errorPwd && <TextMessage type={TextMessageType.error} message="Mots de passe différents"/>}
                    </div>
                    <div className="SignUpPageRow-item-b">
                      <Field editing={true} type="password" name={"password2"} label="Répéter mot de passe" mandatory={false}/>
                    </div>  
                  </div>

                  <div className="SignUpPageCheckbox flex ">
                    <input required className="mt-[6px]" type="checkbox" name="consent" onClick={handleConsent}/>
                    <p className="ml-[10px] w-[80%] mb-[20px] shrink text-SosTagBlue">
                      J'accepte les conditions générales d'utilisation et les conditions générales de vente. Je consens au traitement de mes données conformément à la politique de confidentialité de SOS Tag.
                    </p>
                  </div>
                  <div className='mobile:hidden tablet:block'>
                    <Button box="fill" type="general" buttonText="Valider"/>    
                  </div>
                  <div className='tablet:hidden w-[80vw] mb-[20px]'>
                    <Button box="fill" type="general" fullSize={true} buttonText="Valider"/>    
                  </div>
                  
                </form>
              </div>
              <div className="w-[100vw] mobile:w-auto flex mobile:pb-[50px]">
                <AlternativText className="mt-[30px] text-SosTagBlue" text="Déjà inscrit ? " linkText="Se connecter" link="./sign-in"/>
              </div> 
            </>
        }
        
      </div>
    </div>


   );
}

export default SignUpPage;