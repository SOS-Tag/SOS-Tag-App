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
    //faire la vérification des password identiques
    let pwdRepeat = event.target.passwordRepeat.value;

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
    <div className="w-full flex justify-center">
      {passwordChanged ? (
        <div className='flex justify-center m-8'>
          <div className='tablet:w-3/5 tablet:mt-8 tablet:p-8 flex flex-col'>
            <h1 className='mb-8'>Votre mot de passe a été changé. </h1> 
            <h2 className='mb-8 mt-8'> Essayer de vous connecter à nouveau à l'application</h2>
            <Button box="fill" type="general" buttonText="Connectez-vous" to={'/sign-in'}/>
          </div>
        </div>
      ) : (
        <div className='flex justify-center m-8'>
          <div className="flex w-2/5 m-8 justify-center mobile:hidden tablet:flex">
          </div>
          <div>
            <h1 className='mb-8'>Vous pouvez modifier votre mot de passe !</h1>
            <form onSubmit={handleSubmit}>
                <div className="m-auto formRow2 w-full grid">
                    <div className="formRow2-item-a">
                      {error && <h3> {error}</h3>}
                      <Field editing={true} type="password" name={"password"} placeholder={""} label="Nouveau mot de passe" mandatory={true}/>
                    </div>
                    <div className="formRow2-item-a">
                      {error && <h3> {error}</h3>}
                      <Field editing={true} type="password" name={"passwordRepeat"} placeholder={""} label="Répétez le mot de passe" mandatory={true}/>
                    </div>
                </div>
                <div className="mobile:flex mobile:justify-center tablet:block">
                  <Button box="fill" type="general" buttonText="Modifier mot de passe"/>
                </div>
            </form>
          </div>
      </div>
   )}
   </div>
 );
}
