import AlternativText from "../components/AlternativText";

const SignInPage = () => {
  return ( 
    <div className="SignInPageContainer">
      <div className="SignInPageIllustration">

      </div>
      <div className="SignInPageContent">
        <h1>
          Créez votre compte SOS Tag
        </h1>
        <div className="SignInPageForm">

        </div>
        <AlternativText text="Vous n'avez pas encore de compte ? " linkText="S'inscrire" link="./signup"/>

      </div>
    </div>
   );
}

export default SignInPage;