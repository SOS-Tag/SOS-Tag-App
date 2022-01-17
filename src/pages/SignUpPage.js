import React, { useState } from 'react';
import AlternativText from "../components/AlternativText";
import Field from "../components/Field";

const SignUpPage = () => {

  const [surName, setSurName] = useState("");
  const [name, setName] = useState("");

  return ( 
    <div className="SignUpPageContainer">
      <div className="SignUpPageIllustration">

      </div>
      <div className="SignUpPageContent">
        <h1>
          Créez votre compte SOS Tag
        </h1>
        <div className="SignUpPageForm">
          <form>
            <Field editing={true} type="text" value={name} onChange={setName} label="Nom" mandatory={true}/>
            <Field editing={false} type="text" value={surName} onChange={setSurName} label="Prenom" mandatory={false}/>
            <input type="submit" value="Submit" />
          </form>
          
        </div>
        <AlternativText text="Déjà inscrit ? " linkText="Se connecter" link="./signin"/>

      </div>
    </div>
   );
}

export default SignUpPage;