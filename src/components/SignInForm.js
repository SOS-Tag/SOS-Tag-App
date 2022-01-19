import React, { useState } from 'react';
import AlternativText from "../components/AlternativText";
import Field from "../components/Field";
import Button from '../components/Button';
import 'react-phone-number-input/style.css'

const SignInForm = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

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
                        <Field editing={true} type="password" onChange={setPassword} label="Mot de passe" mandatory={true}/>
                    </div>
                </div>

                <h4>Mot de passe oublié ?</h4>
                <Button box="fill" type ="general" buttonText="Valider"/>
            </form>
            

            <AlternativText text="Vous n'avez pas encore de compte ? " linkText="S'inscrire" link="./signup"/>
        </div>
     );
}
 
export default SignInForm;