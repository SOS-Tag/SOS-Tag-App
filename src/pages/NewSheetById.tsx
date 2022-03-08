import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAssignSheetToUserMutation } from "../generated/graphql";
import { Location } from '../routes';
import { withAuth } from "../guards/auth";

type NewSheetByIdType = {}

const NewSheetById: React.FC<NewSheetByIdType> = ({}) => {

  const navigate = useNavigate();
  const [assignSheetToUser] = useAssignSheetToUserMutation();
  const location = useLocation();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  return ( 
    <div className="flex flex-col bg-red-100">
      <h1 className="mt-[20px] m-auto">L'id de votre QR Code </h1>
      <form className="m-auto flex flex-col" onSubmit={handleSheetAssociation}>
        <input name="id" className="m-auto mt-[20px]" type="text" required></input>
        <button className="m-auto mt-[20px] bg-red-200"> Associer </button>
      </form>
    </div>
  );
}
 
export default withAuth(NewSheetById);