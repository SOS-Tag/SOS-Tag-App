import AlternativText from "../components/AlternativText";

const SignUpPage = () => {
  return ( 
    <div className="SignUpPageContainer">
      <div className="SignUpPageIllustration">

      </div>
      <div className="SignUpPageContent">
        <h1>
          Créez votre compte SOS Tag
        </h1>
        <div className="SignUpPageForm">

        </div>
        <AlternativText text="Déjà inscrit ? " linkText="Se connecter" link="./signin"/>

      </div>
    </div>
   );
}

export default SignUpPage;