import React from "react";
import SignInForm from "../components/SignInForm"

type SigninPageType = {}

const SignInPage: React.FC<SigninPageType> = ({}) => {

  return ( 
    <div className=",-auto w-full flex items-center sign-in-page">
      <div className="w-1/2 SignInPageIllustration">
        <img className="w-5/5" alt="imgSignUp" src="./assets/ImageSignIn.png"/>
      </div>
      <div className="signinform">
        <SignInForm/>
      </div>
    </div>
  );
}
 
export default SignInPage;