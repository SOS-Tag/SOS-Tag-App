import React, { ReactElement, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAssignSheetToUserMutation } from "../generated/graphql";
import { Location } from '../routes';
import { withAuth } from "../guards/auth";
import Field from "../components/field/Field";
import Button from "../components/Button";
import TextMessage from "../components/TextMessage";
import { TextMessageType } from "../components/Types";
import Banner from "../components/Banner";

type NewSheetByIdType = {}

const NewSheetById: React.FC<NewSheetByIdType> = ({}) => {

  const navigate = useNavigate();
  const [assignSheetToUser] = useAssignSheetToUserMutation();
  const location = useLocation();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, changePage] = useState(true);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  async function handleSheetAssociation(event: any){
    event.preventDefault();
    console.log(event.target.id.value);

    setIsLoading(true);

    // We use the register mutation as we implement the registration of a Firebase user
    // on the backend.
    // When a user is created, we also create an account which shares the id and the
    // email (not sure for now about the email) of the new user.
    const response = await assignSheetToUser({ variables: { assignSheetToUserInput: {id: event.target.id.value} } });

    setIsLoading(false);

    const success = response?.data?.assignSheetToUser?.response;
    const error = response?.data?.assignSheetToUser?.error;

    if (success) {
      console.log("tout est bon !")
      navigate((location as Location)?.state?.from || '/users/:userId')
    }

    if (error) {
      setError(error?.message as string)
    }
  }

    const handleValidation = (e: any) => {
      e.preventDefault();
      changePage(false); 
      setName(e.target.firstname.value); 
      setSurname(e.target.lastname.value); 
    }

  let pageContent: ReactElement<any, any>; 

  if (page){
      pageContent = 
      <div className="w-full flex flex-col">
        <Banner title="Création d'un nouveau profil" />
        
        <div className="w-full flex">
          <div className="flex w-2/5 SignInPageIllustration">
            <div className="w-32 p-8 h-32 rounded-full bg-[#ffe7a0]">
            <img alt="imgCreateProfil" src="/assets/profile.png"/>
            </div>
          </div>
          <div>
            <form onSubmit={handleValidation}>
                <div className="formRow2 w-full grid">
                    <div className="formRow2-item-a">
                        <Field editing={true} name={"firstname"} type="text" placeholder={name} label="Nom" mandatory={true}/> 
                    </div>
    
                    <div className="formRow2-item-a">
                        <Field editing={true} name={"lastname"} type="text" placeholder={surname} label="Prénom" mandatory={true}/>
                    </div>
                </div>
                <Button box="fill" type ="general" buttonText="Créer"/>
            </form>
          </div>
      </div>
      </div>
  }
  else{
    pageContent =
      <div className="flex flex-col ">
        <h1 className="mb-[50px] mt-[100px] text-center">
                Activation d'un Tag <br /> pour le profil <span className="text-[#ffce40] font-light" >{surname}</span> <span className="text-[#ffce40]">{name}</span>
        </h1>
        <form className="m-auto flex flex-col" onSubmit={handleSheetAssociation}>
          <Field editing={true} name={"id"} type="text" label="Code d'activation" mandatory={true}/> 
          <Button box="fill" type ="secondaire" buttonText="Valider"/>
        </form>
      </div>

  }

  return ( 
    <div className="w-full flex justify-center">
     {pageContent}
    </div>
  );
}
 
export default withAuth(NewSheetById);