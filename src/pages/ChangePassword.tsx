import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import Field from '../components/field/Field';
import { useChangePasswordMutation } from '../generated/graphql';

export default function ChangePassword() {
  const { changePasswordToken } = useParams()
  const [changePassword] = useChangePasswordMutation();

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);


  const handleSubmit = async (event: any) => {
    event.preventDefault();

    let pwd = event.target.password.value;

    setIsLoading(true);

    const response = await changePassword({
      variables: { changePasswordInput: {
        password: pwd,
        token: changePasswordToken
      } },
    });

    setIsLoading(false);

    const success = response?.data?.changePassword?.response;
    const errors = response?.data?.changePassword?.error;

    if (success) {
      setPasswordChanged(true);
    }

    if (errors) {
      setError(error as string)
    }
  };

  return (
    <div>
        {passwordChanged ? (
          <>
          <div>
            <h2>Votre mot de passe a été changé. Essayer de vous connecter à nouveau à l'application.</h2>
          </div>
          <div>
            <Button box="fill" type="general" buttonText="Connectez vous" to={'/sign-in'}/>
          </div>
        </>
        ) : (
          <>
            <div>
              <h2>Réinitialisation de mot de passe</h2>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                {error && <h3> {error}</h3>}
                <Field editing={true} type="text" name={"password"} placeholder={""} label="Mot de passe" mandatory={false}/>
                <Button box="fill" type="general" buttonText="Créez un nouveau mot de passe" to={'/sign-in'}/>
              </form>
            </div>
          </>
        )}
      </div>
  );
}