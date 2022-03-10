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
    confirmed ?
      <div>
        <h2> Compté activé </h2>
        <p>
          Félicitations ! Votre compte est actif. Vous pouvez désormais vous connecter à l'application.
        </p>
        <Button box="fill" type="general" buttonText="Envoyer un lien de réinitialisation" to="/sign-in"/>
      </div> : 
      <div>Oups ... Il semble que la confirmation ne peut être effectuée.</div>
  );
}

export default ConfirmUser;