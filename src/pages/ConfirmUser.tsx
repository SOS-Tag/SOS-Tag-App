import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { useConfirmUserMutation } from "../generated/graphql";

function ConfirmUser() {
  const { confirmAccountToken } = useParams();
  const [confirmUser] = useConfirmUserMutation();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [confirmed, setConfirmed] = useState(false);


  useEffect(() => {
    const confirm = async () => {
      const res = await confirmUser({ variables: { token: confirmAccountToken } });

      setLoading(false);

      const response = res.data?.confirmUser?.response;
      const errors = res.data?.confirmUser?.error;

      if (errors) {
        setError(error as string);
      }

      if (response) {
        setConfirmed(response);
      }
    }

    confirm()
  })

  if (loading) {
    <div>Confirmation en cours ...</div>
  }

  if (error) {
    <div> {error} </div>
  }

  return (
    <div className="w-full flex justify-center">
      {confirmed ? (
        <div className='flex justify-center m-8'>
          <div className="flex w-2/5 m-8 justify-center mobile:hidden tablet:flex">
            <svg width="294" height="224" viewBox="0 0 294 224" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M93.4315 176.728L23.7339 107.072L0 130.625L93.4315 224L294 23.5526L270.433 0L93.4315 176.728Z" fill="#EC3E55" fill-opacity="0.5"/>
            </svg>
          </div>
          <div className='tablet:w-2/5 tablet:mt-8 tablet:p-8 flex flex-col'>
          <h1 className="mb-8">Compte activé ! </h1> 
          <h2 className="mb-8">Félicitations ! Votre compte est actif. Vous pouvez désormais vous connecter à l'application.</h2>
          <Button box="fill" type="general" buttonText="Se connecter" to="/sign-in"/>
          </div>
        </div>
      ) : (
        <div className='flex justify-center m-8'>
          <div className="flex w-2/5 m-8 justify-center mobile:hidden tablet:flex">
          <svg width="214" height="214" viewBox="0 0 214 214" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M183.826 0L214 30.174L137.174 107L214 183.826L183.826 214L107 137.174L30.174 214L0 183.826L76.826 107L0 30.174L30.174 0L107 76.826L183.826 0Z" fill="#F69FAB"/>
          </svg>
          </div>
          <h1 className='tablet:w-2/5 tablet:mt-8 tablet:p-8'>Oups ... Il semble que la confirmation ne peut être effectuée.</h1>
      </div>
   )}
   </div>
 );
}

export default ConfirmUser;



