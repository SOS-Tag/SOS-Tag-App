import Button from "../components/Button"
import Field from "../components/field/Field";
import React, { MouseEventHandler, ReactElement, useEffect, useState } from "react";
import AlternativText from "../components/AlternativText";
import { withAuth } from "../guards/auth";

// TEST
import { useLocation, useNavigate } from 'react-router-dom';
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { setAccessToken } from '../utils/access-token';

type AccountType = {}

const Account: React.FC<AccountType> = ({}) => {

    const [modify, changeModifyField] = useState(false); 
    const [nbPage, changePage] = useState(0); 
    const [textModifyButton, changeTextModifyButton] = useState("Modifier les informations"); 
    const [typeModifyButton, changeTypeModifyButton] = useState("fill"); 

    
    const [name, setName] = useState("Pascal");
    const [surname, setSurname] = useState("RICHARD");
    const [mail, setMail] = useState("pascal.richard@gmail.com");
    const [tel, setTel] = useState("0675463524");
    const [address, setAddress] = useState("---");
    const [zipCode, setZipCode] = useState("---");
    const [city, setCity] = useState("---");

    const [passwordInit, setPasswordInit] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");


    const modifyInfo = () => {
        if (modify) { 
            saveChange();
            changeTextModifyButton("Modifier les informations"); 
            changeTypeModifyButton("fill"); 
            changeModifyField(false);             
        }
        else{
            changeTextModifyButton("Enregistrer"); 
            changeTypeModifyButton("stroke"); 
            changeModifyField(true); 
        }
    }

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

    const saveChange = () => {
      alert("[A FAIRE] Les informations de l'utilisateur se mettent à jours !")
    }

    const handleValidation = () => {
        checkForm(); 
        changePage(2); 
    }

    const checkForm = () => {
        alert("Vérifier les mots de passe indiqués !")
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
      data?.currentUser?.response?.city && setAddress(data?.currentUser?.response?.city)
    }
    },[]);
    
    return ( 
        <div className="w-full">

            {(nbPage === 0) ?
            <>
            <Banner title="Gestion de votre compte" />
            <div className="flex flex-row">
                <GroupManage modifyClick={modifyInfo} passwordClick={modifyPage} textButton={textModifyButton} typeButton={typeModifyButton} />
                <UserInfo modify={modify} name={name} surname={surname} tel={tel} mail={mail} postale={address} facturation={address} /> 
            </div>

            <input value={name} onChange={e => setName(e.target.value)}/>
            <input readOnly value={name}/>
            </>
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

/////////////////////////////////
/* BANNER - RETURN ET TITLE  */ 
/////////////////////////////////

type BannerType = {
    returnClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    title: string;
}

const Banner: React.FC<BannerType> = ({
    returnClick,
    title,
}) => {
    return ( 
        <div className="flex flex-row mt-10 mb-20">
            <button className="w-2/5" onClick={returnClick}>
            <svg className="w-full justify-items-center" width="47" height="34" viewBox="0 0 47 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M47 14.875H8.18227L20.1245 2.99625L17.0909 0L0 17L17.0909 34L20.1032 31.0037L8.18227 19.125H47V14.875Z" 
            fill="#19224F"/>
            </svg>
            </button>
            <h1 className="w-3/5">{title}</h1>
        </div>
    );
}

/////////////////////////////////
/* MANAGE ACCOUNT - BUTTONS */ 
///////////////////////////////// 

type GroupManageType = {
    typeButton : string,
    textButton : string,
    modifyClick : () => void,
    passwordClick : () => void,
}

const GroupManage: React.FC<GroupManageType> = ({
    typeButton,
    textButton,
    modifyClick,
    passwordClick
}) => {

    return ( 
        <div className="flex flex-col w-2/5 items-center">
            <svg width="132" height="132" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_0_1)">
                <circle cx="66" cy="62" r="62" fill="#F69FAB"/>
                </g>
                <path d="M66 32C70.1109 32 74.0533 33.633 76.9602 36.5398C79.867 39.4467 81.5 43.3891 81.5 47.5C81.5 51.6109 79.867 55.5533 76.9602 58.4602C74.0533 61.367 70.1109 63 66 63C61.8891 63 57.9467 61.367 55.0398 58.4602C52.133 55.5533 50.5 51.6109 50.5 47.5C50.5 43.3891 52.133 39.4467 55.0398 36.5398C57.9467 33.633 61.8891 32 66 32ZM66 70.75C83.1275 70.75 97 77.6862 97 86.25V94H35V86.25C35 77.6862 48.8725 70.75 66 70.75Z" fill="#534F4F"/>
            </svg>

            <div className="flex flex-col ml-10 mr-10 ">
                <Button box={typeButton} type="general"  buttonText={textButton} onClick={modifyClick}/>
                <Button box="fill" type="secondaire" buttonText="Changer de mot de passe" onClick={passwordClick}/>
            </div>
            <p>Supprimer le compte</p>
        </div>
     );
}

/////////////////////////////////
/* INFOS ACCOUNT */ 
/////////////////////////////////

type UserInfoType = {
    modify : boolean,
    name : string, 
    surname : string,
    mail : string,
    tel : string,
    postale : string,
    facturation : string,
}

const UserInfo: React.FC<UserInfoType> = ({
    modify,
    name, 
    surname,
    mail,
    tel,
    postale, 
    facturation,
}) => {
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

    return ( 

      <>
        <form id="userInfo" className="UserInfo w-3/5" >
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
                    <Field editing={modify} type="text" name={"adress"} placeholder={postale} label="Adresse postale" mandatory={false}/>
                </div>
                <div className="formRow2-item-b">
                    <Field editing={modify} type="text" name={"bill"} placeholder={facturation} label="Adresse de facturation" mandatory={false}/>
                </div>
            </div>
        </form>

        
        
      </>
     );
}
