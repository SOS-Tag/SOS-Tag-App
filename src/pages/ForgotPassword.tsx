import { ChangeEvent, SyntheticEvent, useState } from 'react';
import Button from '../components/Button';
import Field from '../components/field/Field';
import { useForgotPasswordMutation } from '../generated/graphql';

export default function ForgotPassword() {
  const [forgotPassword] = useForgotPasswordMutation();

  const [email, setEmail] = useState('johndoe@mail.com');
  const [isLoading, setIsLoading] = useState(false);
  const [mailSent, setMailSent] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setIsLoading(true);
    setEmail(event.target.email.value);

    const response = await forgotPassword({
      variables: { userEmail: email },
    });

    setIsLoading(false);

    const success = response?.data?.forgotPassword?.response;

    if (success) {
      setMailSent(true);
    }
  };

  return (
    <div>
      {mailSent ? (
        <div>
          <p>Un email a été envoyé à {email}. Suivez les indications qu'il contient afin de changer votre mot de passe.</p>
        </div>
      ) : (
        <>
          <h2>Mot de passe oublié</h2>
          <div>
            <form onSubmit={handleSubmit}>
            <Field editing={true} type="text" name={"email"} placeholder={""} label="Email" mandatory={true}/>
            <Button box="fill" type="general" buttonText="Envoyer un lien de réinitialisation"/>
            </form>
          </div>
        </>
      )}
    </div>
  );
}