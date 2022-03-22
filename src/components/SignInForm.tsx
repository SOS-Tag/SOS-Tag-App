import React, { SyntheticEvent, useState } from 'react';
import AlternativText from "./AlternativText";
import Field from "./field/Field";
import Button from './Button';
import TextMessage from './TextMessage';
import 'react-phone-number-input/style.css'
import { TextMessageType } from './Types';
import { useLoginMutation } from '../generated/graphql';
import { useLocation, useNavigate } from 'react-router-dom';
import { resetStore } from '../apollo';
import { Location } from '../routes';
import { setAccessToken } from '../utils/access-token';

type SignInFormProps = {

}

const SignInForm: React.FC<SignInFormProps> = () => {

    const [login] = useLoginMutation();
    const navigate = useNavigate();
    const location = useLocation();


    const handleSubmit = async (event: any) => {
        event.preventDefault();
    
        const values = {
          email: event.target.mail.value, password: event.target.password.value
        }
    
        const response = await login({
          variables: { loginInput: values },
          update: () => {
            resetStore();
          }
        });
    
        const success = response?.data?.login?.response;
        const error = response?.data?.login?.error;
    
        if (success) {
          success.accessToken && setAccessToken(success.accessToken);
          navigate((location as Location)?.state?.from || '/users/all')
        }
    
      };

    return ( 
        <div className="sign-in-form">
            <h1 className="mb-[50px]">
                Connectez-vous à votre espace SOS Tag
            </h1>

            <form onSubmit={handleSubmit}>
                <div className="formRow2 w-full grid">
                    <div className="formRow2-item-a">
                        <Field editing={true} name={"mail"} type="mail" placeholder={""} label="Adresse mail" mandatory={true}/> 
                    </div>

                    <div className="formRow2-item-a">
                        <Field editing={true} name={"password"} type="password" placeholder={""} label="Mot de passe" mandatory={true}/>
                    </div>
                </div>

                <a href='./auth/forgot-password'> <h4>Mot de passe oublié ?</h4></a>
                <Button box="fill" type ="general" buttonText="Valider"/>
            </form>
            
            <AlternativText text="Vous n'avez pas encore de compte ? " linkText="S'inscrire" link="./sign-up"/>
        </div>
     );
}
 
export default SignInForm;
