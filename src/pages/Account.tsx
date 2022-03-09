import Button from "../components/Button"
import Field from "../components/field/Field";
import React, { MouseEventHandler, ReactElement, useEffect, useState } from "react";
import AlternativText from "../components/AlternativText";
import { withAuth } from "../guards/auth";

// TEST
import { useLocation, useNavigate } from 'react-router-dom';
import { useLogoutMutation, useMeQuery, useUpdateCurrentUserMutation } from "../generated/graphql";
import { setAccessToken } from '../utils/access-token';
import Banner from "../components/Banner";

type AccountType = {}

const Account: React.FC<AccountType> = ({}) => {

    const [modify, changeModifyField] = useState(false); 
    const [nbPage, changePage] = useState(0); 
    const [textModifyButton, changeTextModifyButton] = useState("Modifier les informations"); 
    const [typeModifyButton, changeTypeModifyButton] = useState("fill"); 
    const [isLoading, setIsLoading] = useState(false);
    
    const [name, setName] = useState("Pascal");
    const [surname, setSurname] = useState("RICHARD");
    const [mail, setMail] = useState("pascal.richard@gmail.com");
    const [tel, setTel] = useState("0675463524");
    const [address, setAddress] = useState("---");
    const [zipCode, setZipCode] = useState("---");
    const [city, setCity] = useState("---");
    const [nationality, setNationality] = useState("");
    const [updateUser] = useUpdateCurrentUserMutation();

    const [passwordInit, setPasswordInit] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const modifyPage = () => {
        console.log(nbPage);
        if (nbPage === 0) {
            console.log("yes");
            changePage(1)
        }
        else if (nbPage === 1) {
            console.log("yesss");
            changePage(0); 
        }
        else {
            console.log("yaas");
            changePage(0);
        } 
    }

    const SaveChange = async (
        new_fname: string,
        new_lname: string,
        new_address: string,
        new_zipCode: string,
        new_city: string,
        new_phone: string,
        new_email: string,
        new_nationality: string,
    ) => {
        setIsLoading(true);

        console.log("nouvelle adresse : " + new_address);

        const response = await updateUser({
          variables: { updateCurrentUserInput: {
            fname: new_fname,
            lname: new_lname,
            address: new_address,
            zipCode: new_zipCode,
            city: new_city,
            email: new_email,
            phone: new_phone,
            nationality: new_nationality,
          } },
        });
    
        setIsLoading(false);

        console.log(response);

    }

    const handleValidation = () => {
        checkForm(); 
        changePage(2); 
    }

    const checkForm = () => {
        alert("Vérifier les mots de passe indiqués !")
    }

    let nameAndSurname: ReactElement<any, any>; 

    if (modify){
        nameAndSurname = 
        <div className="formRow2 w-full grid">
            <div className="formRow2-item-a">
                <Field editing={true} name={"firstname"} type="text" placeholder={name} label="Prénom" mandatory={false}/>
            </div>
            <div className="formRow2-item-b">
                <Field editing={true} name={"lastname"} type="text" placeholder={surname} label="Nom" mandatory={false}/>
            </div>
        </div>

    }else{
        nameAndSurname =
        <div className="mb-10">
            <p className="prenom">{name}</p>
            <p className="nom">{surname}</p>    
        </div>
    }

    // TEST 

    const location = useLocation()
    const navigate = useNavigate();
    const { client, data, loading } = useMeQuery({
        fetchPolicy: 'network-only'
    });

    useEffect(() => {
      //console.log("currentUser Account : "+ data?.currentUser?.response?.email);
      if(loading === false){
      data?.currentUser?.response?.fname && setName(data?.currentUser?.response?.fname)
      data?.currentUser?.response?.lname && setSurname(data?.currentUser?.response?.lname)
      data?.currentUser?.response?.email && setMail(data?.currentUser?.response?.email)
      data?.currentUser?.response?.phone && setTel(data?.currentUser?.response?.phone)
      data?.currentUser?.response?.address && setAddress(data?.currentUser?.response?.address)
      data?.currentUser?.response?.zipCode && setZipCode(data?.currentUser?.response?.zipCode)
      data?.currentUser?.response?.city && setCity(data?.currentUser?.response?.city)
      data?.currentUser?.response?.nationality && setNationality(data?.currentUser?.response?.nationality)
    }
    },[data]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(modify);
        if(modify){
            console.log("modification terminée")
            // setName(e.target.firstname.value)
            // setSurname(e.target.lastname.value)
            // setMail(e.target.mail.value)
            // setTel(e.target.phone.value)
            // setAddress(e.target.adress.value)
            // setCity(e.target.city.value)
            // setZipCode(e.target.zipCode.value)
            changeTextModifyButton("Modifier les informations"); 
            changeTypeModifyButton("fill"); 
            console.log(address);
            SaveChange(
              e.target.firstname.value, 
              e.target.lastname.value,
              e.target.adress.value,
              e.target.zipCode.value,
              e.target.city.value,
              e.target.mail.value,
              e.target.phone.value,
              ""
            );
            changeModifyField(false); 
        }
        else{
            console.log("en modification");
            changeTextModifyButton("Enregistrer"); 
            changeTypeModifyButton("stroke"); 
            changeModifyField(true);  
        }
    }
    
    return ( 
        <div className="w-full">
            {/* FORMULAIRE INFO */}
            {(nbPage === 0) ? 
            <>
                <Banner title="Gestion de votre compte" />
                <div className="flex flex-row">
                    {/* BOUTONS */}
                    <div className="flex flex-col w-2/5 items-center">
                        <svg width="132" height="132" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_0_1)">
                            <circle cx="66" cy="62" r="62" fill="#F69FAB"/>
                            </g>
                            <path d="M66 32C70.1109 32 74.0533 33.633 76.9602 36.5398C79.867 39.4467 81.5 43.3891 81.5 47.5C81.5 51.6109 79.867 55.5533 76.9602 58.4602C74.0533 61.367 70.1109 63 66 63C61.8891 63 57.9467 61.367 55.0398 58.4602C52.133 55.5533 50.5 51.6109 50.5 47.5C50.5 43.3891 52.133 39.4467 55.0398 36.5398C57.9467 33.633 61.8891 32 66 32ZM66 70.75C83.1275 70.75 97 77.6862 97 86.25V94H35V86.25C35 77.6862 48.8725 70.75 66 70.75Z" fill="#534F4F"/>
                        </svg>

                        <div className="flex flex-col ml-10 mr-10 ">
                            <Button box={typeModifyButton} type="general" form="userInfo" buttonText={textModifyButton}/>
                            <Button box="fill" type="secondaire" buttonText="Changer de mot de passe" onClick={modifyPage}/>
                        </div>
                        <p>Supprimer le compte</p>
                    </div>
                    {/* FORMULAIRE */}
                    <form id="userInfo" className="UserInfo w-3/5" onSubmit={handleSubmit} >
                        {nameAndSurname}
                        <div className="formRow2 w-full grid">
                            <div className="formRow2-item-a">
                                <Field editing={modify} type="text" name={"mail"} placeholder={mail} label="Adresse mail" mandatory={false}/>
                            </div>
                            <div className="formRow2-item-b">
                                <Field editing={modify} type="tel" name={"phone"} placeholder={tel} label="Numéro de téléphone" mandatory={false}/>
                            </div>
                        </div>
                        <div className="formRow2 w-full grid">
                            <div className="formRow2-item-a">
                                <Field editing={modify} type="text" name={"adress"} placeholder={address} label="Adresse postale" mandatory={false}/>
                            </div>
                            <div className="formRow2-item-b">
                                <Field editing={modify} type="text" name={"city"} placeholder={city} label="Ville" mandatory={false}/>
                            </div>
                            <div className="formRow2-item-b">
                                <Field editing={modify} type="text" name={"zipCode"} placeholder={zipCode} label="ZIP" mandatory={false}/>
                            </div>
                        </div>
                    </form>
                </div>
            </>
            // FORMULAIRE PASSWORD
            : (nbPage === 1) ?
            <>
            <Banner title="Modification de votre mot de passe" returnClick={modifyPage}/> 

            <form className="grid grid-cols-5 gap-4">
                <div className="col-start-3 ">
                    <div>
                        <Field editing={true} name={"password1"} type="password" label="Mot de passe actuel" mandatory={true}/> 
                    </div>

                    <div>
                        <Field editing={true} name={"password2"} type="password" label="Nouveau mot de passe" mandatory={true}/> 
                    </div>

                    <div >
                        <Field editing={true} name={"password3"} type="password" label="Répétez le mot de passe" mandatory={true}/>
                    </div>
                
                <Button onClick={handleValidation} box="fill" type ="general" buttonText="Modifier mot de passe" />
                </div>
            </form>
            </>
            : <Banner title="Mot de passe modifié !" returnClick={modifyPage}/> 
            }
        </div>
     ); 
}
 
export default withAuth(Account);

