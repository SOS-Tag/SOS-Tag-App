import { useState } from 'react';
import AlternativText from '../components/AlternativText';
import Button from '../components/Button';
import Field from '../components/field/Field';
import { useForgotPasswordMutation } from '../generated/graphql';
import TextMessage from '../components/TextMessage';
import { TextMessageType } from '../components/Types';
import Banner from '../components/Banner';
import { useLocation, useNavigate } from "react-router-dom";
import { Location } from '../routes';

export default function ForgotPassword() {
  const [forgotPassword] = useForgotPasswordMutation();
  const [email, setEmail] = useState('johndoe@mail.com');
  const [mailSent, setMailSent] = useState(false);
  const [message, setMessage] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setEmail(event.target.email.value);

    const response = await forgotPassword({
      variables: { userEmail: email },
    });

    const success = response?.data?.forgotPassword?.response;

    if (success) {
      setMailSent(true);
    }
  };

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-full flex justify-center">
      {mailSent ? (
        <div className='flex justify-center m-8'>
          <div className="flex w-2/5 m-8 justify-center mobile:hidden tablet:flex">
          <svg width="450" height="245" viewBox="0 0 450 245" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M412.5 1.125H168.75C148.125 1.125 131.25 18 131.25 38.625V207.375C131.25 228.187 148.125 244.875 168.75 244.875H412.5C433.312 244.875 450 228.187 450 207.375V38.625C450 18 433.312 1.125 412.5 1.125ZM412.5 207.375H168.75V69.9375L290.625 132.375L412.5 69.9375V207.375ZM290.625 100.688L168.75 38.625H412.5L290.625 100.688ZM93.75 207.375C93.75 210.562 94.3125 213.562 94.6875 216.75H18.75C8.4 216.75 0 208.312 0 198C0 187.687 8.4 179.25 18.75 179.25H93.75V207.375ZM56.25 29.25H94.6875C94.3125 32.4375 93.75 35.4375 93.75 38.625V66.75H56.25C45.9375 66.75 37.5 58.3125 37.5 48C37.5 37.6875 45.9375 29.25 56.25 29.25ZM18.75 123C18.75 112.687 27.1875 104.25 37.5 104.25H93.75V141.75H37.5C27.1875 141.75 18.75 133.312 18.75 123Z" fill="#EC3E55" fill-opacity="0.5"/>
          </svg>
          </div>
          <h2 className='tablet:w-2/5 tablet:mt-8 tablet:p-8'>Un email a été envoyé à <span className="text-[#ffce40]">{email}</span> pour modifier votre mot de passe. <br /> <br /> Suivez les indications qu'il contient afin de changer votre mot de passe.</h2>
        </div>
      ) : (
        <div className="w-full flex flex-col">
          <Banner title="Mot de passe oublié ?" returnClick={() => navigate((location as Location)?.state?.from || '/sign-in')} />
          
          <div className="w-full flex">
            <div className="flex w-2/5 justify-center mobile:hidden tablet:flex">
              <svg width="307" height="378" viewBox="0 0 307 378" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M197.714 134.442C198.713 126.549 201.053 119.925 204.733 114.572C208.465 109.033 212.757 104.347 217.609 100.515C222.697 96.5491 227.75 93.0714 232.766 90.0818C237.833 86.9073 242.202 83.7377 245.872 80.5731C249.778 77.2749 252.297 73.591 253.428 69.5214C255.023 63.7869 254.474 58.9512 251.782 55.0143C249.276 51.1288 245.247 48.4145 239.698 46.8716C234.518 45.4315 229.559 45.3481 224.821 46.6214C220.268 47.9461 215.627 49.944 210.899 52.615L194.132 25.833C202.715 20.0488 212.182 16.1044 222.532 14C232.882 11.8956 243.421 12.3349 254.15 15.3179C264.14 18.0952 272.556 22.2287 279.399 27.7186C286.428 33.2598 291.277 40.188 293.947 48.5032C296.618 56.8183 296.435 66.4329 293.401 77.3469C291.498 84.1913 288.413 89.91 284.147 94.5031C279.932 98.9111 275.173 102.769 269.869 106.077C264.565 109.385 259.353 112.719 254.234 116.079C249.167 119.253 244.711 123.096 240.866 127.607C237.072 131.933 234.62 137.528 233.508 144.394L197.714 134.442ZM196.726 206.805C189.696 204.851 184.538 200.826 181.251 194.731C178.015 188.45 177.4 181.703 179.405 174.489C181.463 167.089 185.472 161.628 191.434 158.104C197.447 154.395 203.968 153.518 210.998 155.473C218.027 157.427 223.16 161.544 226.396 167.825C229.868 173.971 230.576 180.744 228.518 188.144C226.513 195.358 222.411 200.794 216.212 204.451C210.251 207.975 203.755 208.76 196.726 206.805Z" fill="#FFE7A0"/>
                <path d="M98.9575 302.907C96.5777 295.315 95.9458 288.319 97.0617 281.919C98.1474 275.329 100.097 269.282 102.912 263.776C105.886 258.051 109.03 252.785 112.345 247.978C115.63 242.981 118.281 238.28 120.299 233.874C122.476 229.248 123.232 224.85 122.565 220.679C121.626 214.802 119.113 210.634 115.025 208.176C111.128 205.688 106.335 204.898 100.648 205.807C95.3389 206.656 90.796 208.646 87.0188 211.777C83.4312 214.878 80.0445 218.627 76.8586 223.025L50.4597 205.662C55.8532 196.828 62.8163 189.299 71.3489 183.074C79.8815 176.85 89.6461 172.859 100.643 171.101C110.881 169.465 120.254 169.717 128.762 171.857C137.46 173.967 144.755 178.246 150.646 184.693C156.537 191.14 160.377 199.956 162.164 211.142C163.285 218.157 162.863 224.641 160.898 230.594C158.903 236.357 156.183 241.847 152.739 247.064C149.295 252.281 145.946 257.482 142.692 262.669C139.407 267.666 136.957 273.016 135.34 278.718C133.694 284.231 133.795 290.34 135.644 297.044L98.9575 302.907ZM128.203 369.105C120.998 370.257 114.632 368.746 109.104 364.574C103.546 360.213 100.177 354.335 98.995 346.941C97.783 339.357 99.153 332.722 103.105 327.035C107.027 321.158 112.59 317.644 119.795 316.493C126.999 315.341 133.38 316.947 138.938 321.308C144.656 325.45 148.12 331.312 149.332 338.896C150.514 346.29 149.049 352.941 144.938 358.848C140.986 364.535 135.407 367.954 128.203 369.105Z" fill="#F69FAB"/>
                <path d="M27.8992 123.153C27.6602 117.633 28.4875 112.826 30.3811 108.731C32.2883 104.503 34.6785 100.794 37.5518 97.6032C40.5712 94.2935 43.6231 91.3222 46.7073 88.6893C49.8051 85.9238 52.4251 83.2434 54.5672 80.6481C56.8556 77.9337 58.1492 75.1175 58.4479 72.1994C58.8689 68.0876 57.928 64.8415 55.6251 62.4612C53.4549 60.0946 50.3802 58.7075 46.401 58.3001C42.6871 57.9198 39.2828 58.4425 36.1882 59.868C33.2262 61.3071 30.283 63.2173 27.3586 65.5985L12.7503 49.2254C17.9495 44.2625 23.9685 40.4558 30.8074 37.8052C37.6463 35.1547 44.9123 34.2232 52.6054 35.0109C59.768 35.7443 66.0124 37.5899 71.3389 40.5478C76.7979 43.5193 80.9274 47.695 83.7274 53.0748C86.5273 58.4546 87.5266 65.0574 86.7254 72.8832C86.2229 77.7908 84.7799 82.0661 82.3965 85.709C80.0266 89.2192 77.2197 92.4166 73.9757 95.3011C70.7317 98.1857 67.554 101.077 64.4426 103.975C61.3448 106.741 58.7436 109.892 56.639 113.43C54.548 116.834 53.5234 120.951 53.565 125.781L27.8992 123.153ZM35.6825 172.804C30.6421 172.288 26.6405 170.136 23.6776 166.348C20.7283 162.427 19.5185 157.88 20.0481 152.707C20.5914 147.401 22.6975 143.194 26.3666 140.085C30.0493 136.843 34.4108 135.48 39.4511 135.996C44.4914 136.512 48.4862 138.731 51.4356 142.652C54.5311 146.453 55.8073 151.007 55.264 156.313C54.7344 161.486 52.5619 165.686 48.7466 168.914C45.0775 172.023 40.7228 173.32 35.6825 172.804Z" fill="#19224F"/>
              </svg>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                  <div className="m-auto formRow2 w-full grid">
                      <div className="formRow2-item-a">
                      <Field editing={true} type="text" name={"email"} placeholder={""} label="Email" mandatory={true}/>
                      </div>
                  </div>
                  <div className="flex flex-col">

                    {message && <TextMessage type={TextMessageType.oups}/>}
                    <div className="flex mobile:justify-center tablet:justify-start">
                    <Button box="fill" type ="general" buttonText="Réinitialiser"/>
                    </div>
                    <div className="mobile:m-8">
                    <AlternativText text="Vous n'avez pas encore de compte ? " linkText="S'inscrire" link="/sign-up"/>
                    </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}





