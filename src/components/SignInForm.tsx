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
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(false);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
    
        const values = {
          email: event.target.mail.value, password: event.target.password.value
        }

        console.log(values);
    
        setIsLoading(true);
    
        const response = await login({
          variables: { loginInput: values },
          update: () => {
            resetStore();
          }
        });
    
        setIsLoading(false);
    
        const success = response?.data?.login?.response;
        const errors = response?.data?.login?.errors;
    
        if (success) {
          success.accessToken && setAccessToken(success.accessToken);
          setIsLoggedIn(true);
          navigate((location as Location)?.state?.from || '/users/all')
        }
    
        if (errors) {
          setError(errors[0]?.message as string)
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
                        <Field editing={true} name={"mail"} type="mail" placeholder={mail} label="Adresse mail" mandatory={true}/> 
                    </div>

                    <div className="formRow2-item-a">
                        <Field editing={true} name={"password"} type="password" placeholder={password} label="Mot de passe" mandatory={true}/>
                    </div>
                </div>

                {message && <TextMessage type={TextMessageType.oups}/>}
                <h4>Mot de passe oublié ?</h4>
                <Button box="fill" type ="general" buttonText="Valider"/>
            </form>
            
            <AlternativText text="Vous n'avez pas encore de compte ? " linkText="S'inscrire" link="./signup"/>
        </div>
     );
}
 
export default SignInForm;
