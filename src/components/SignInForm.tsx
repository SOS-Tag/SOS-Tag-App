import React, { useState } from 'react';
import AlternativText from "./AlternativText";
import Field from "./Field";
import Button from './Button';
import TextMessage from './TextMessage';
import 'react-phone-number-input/style.css'
import { TextMessageType } from './Types';

type SignInFormProps = {

}

const SignInForm: React.FC<SignInFormProps> = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(false);

    function handleConnexion(){
        setMessage(true);    
    }

    return ( 
        <div className="sign-in-form">
            <h1 className="mb-[50px]">
                Connectez-vous à votre espace SOS Tag
            </h1>

            <form>
                <div className="formRow2 w-full grid">
                    <div className="formRow2-item-a">
                        <Field editing={true} type="mail" value={mail} onChange={setMail} label="Adresse mail" mandatory={true}/> 
                    </div>

                    <div className="formRow2-item-a">
                        <Field editing={true} type="password" value={password} onChange={setPassword} label="Mot de passe" mandatory={true}/>
                    </div>
                </div>

                {message && <TextMessage type={TextMessageType.oups}/>}
                <h4>Mot de passe oublié ?</h4>
                <Button onClick={handleConnexion} box="fill" type ="general" buttonText="Valider"/>
            </form>
            
            <AlternativText text="Vous n'avez pas encore de compte ? " linkText="S'inscrire" link="./signup"/>
        </div>
     );
}
 
export default SignInForm;
