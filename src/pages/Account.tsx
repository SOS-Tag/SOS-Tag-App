import Button from "../components/Button"
import Field from "../components/field/Field";
import React, { MouseEventHandler, ReactElement, useEffect, useState } from "react";
import AlternativText from "../components/AlternativText";

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
    const [postalAddress, setPostalAddress] = useState("33 rue des Camélia");
    const [postalCode, setPostalCode] = useState("13000");
    const [postalCity, setPostalCity] = useState("Marseille");
    const [facturationAddress, setFacturationAddress] = useState("33 rue des Camélia");
    const [facturationCode, setFacturationCode] = useState("13000");
    const [facturationCity, setFacturationCity] = useState("Marseille");
    
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


    return ( 
        <div className="tablet:w-full w-[80vw] mx-auto">

            {(nbPage === 0) ?
            <>
            <Banner title="Gestion de votre compte" />
            <div className="flex tablet:flex-row flex-col">
                <GroupManage modifyClick={modifyInfo} passwordClick={modifyPage} textButton={textModifyButton} typeButton={typeModifyButton} />
                <UserInfo modify={modify} name={name} surname={surname} tel={tel} mail={mail} postalAddress={postalAddress} postalCode={postalCode} postalCity={postalCity} facturationAddress={facturationAddress} facturationCode={facturationCode} facturationCity={facturationCity}/> 
            </div>
            </>
            : (nbPage === 1) ?
            <>
            <Banner title="Modification de votre mot de passe" returnClick={modifyPage}/> 

            <form className="grid tablet:grid-cols-5 tablet:gap-4">
                <div className="tablet:col-start-3 tablet:w-[230px] mb-[30px]">
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
 
export default Account;

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
        <div className="flex flex-row mt-10 mb-20 tablet:gap-0 gap-5">
            <button className="tablet:w-2/5" onClick={returnClick}>
            <svg className="mx-auto justify-items-center" width="47" height="34" viewBox="0 0 47 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M47 14.875H8.18227L20.1245 2.99625L17.0909 0L0 17L17.0909 34L20.1032 31.0037L8.18227 19.125H47V14.875Z" 
            fill="#19224F"/>
            </svg>
            </button>
            <h1 className="tablet:w-3/5">{title}</h1>
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
        <div className="flex tablet:flex-col tablet:w-2/5 items-center flex-row gap-5 tablet:gap-0">
            <svg width="132" height="132" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_0_1)">
                <circle cx="66" cy="62" r="62" fill="#F69FAB"/>
                </g>
                <path d="M66 32C70.1109 32 74.0533 33.633 76.9602 36.5398C79.867 39.4467 81.5 43.3891 81.5 47.5C81.5 51.6109 79.867 55.5533 76.9602 58.4602C74.0533 61.367 70.1109 63 66 63C61.8891 63 57.9467 61.367 55.0398 58.4602C52.133 55.5533 50.5 51.6109 50.5 47.5C50.5 43.3891 52.133 39.4467 55.0398 36.5398C57.9467 33.633 61.8891 32 66 32ZM66 70.75C83.1275 70.75 97 77.6862 97 86.25V94H35V86.25C35 77.6862 48.8725 70.75 66 70.75Z" fill="#534F4F"/>
            </svg>

            <div className="flex flex-col tablet:mx-10 items-center">
                <Button box={typeButton} type="general" buttonText={textButton} onClick={modifyClick}/>
                <Button box="fill" type="secondaire" buttonText="Changer de mot de passe" onClick={passwordClick}/>
                <p>Supprimer le compte</p>
            </div>
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
    
    postalAddress : string,
    postalCode : string,
    postalCity : string,
    facturationAddress: string,
    facturationCode: string, 
    facturationCity : string,
}

const UserInfo: React.FC<UserInfoType> = ({
    modify,
    name, 
    surname,
    mail,
    tel,
    postalAddress,
    postalCode,
    postalCity,
    facturationAddress,
    facturationCode, 
    facturationCity,
}) => {
    let nameAndSurname: ReactElement<any, any>; 

    const postal = postalAddress + " " + postalCode + " " + postalCity;
    const facturation = facturationAddress + " " + facturationCode + " " + facturationCity;

    if (modify){
        nameAndSurname = 
        <div className="formRow2 w-full grid tablet:grid-cols-2">
            <div className="formRow2-item-a">
                <Field editing={true} name={"firstname"} type="text" placeholder={name} label="Prénom" mandatory={true}/>
            </div>
            <div className="formRow2-item-b">
                <Field editing={true} name={"lastname"} type="text" placeholder={surname} label="Nom" mandatory={true}/>
            </div>
        </div>

    }else{
        nameAndSurname =
        <div className="mb-10 tablet:text-left text-center flex tablet:flex-col gap-2 tablet:gap-0">
            <p className="prenom">{name}</p>
            <p className="nom">{surname}</p>    
        </div>
    }

    return ( 

        <form className="UserInfo tablet:w-3/5 mt-10 tablet:mt-0 tablet:pr-[12%]" action="">
            {nameAndSurname}
            <div className="formRow2 w-full grid tablet:grid-cols-2">
                <div className="formRow2-item-a">
                    <Field editing={modify} type="text" name={"mail"} placeholder={mail} label="Adresse mail" mandatory={true}/>
                </div>
                <div className="formRow2-item-b">
                    <Field editing={modify} type="tel" name={"phone"} placeholder={tel} label="Numéro de téléphone" mandatory={true}/>
                </div>
            </div>

            { !modify && <div className="formRow2 w-full grid tablet:grid-cols-2">
                <div className="formRow2-item-a">
                    <Field editing={modify} type="text" name={"adress"} placeholder={postal} label="Adresse postale" mandatory={true}/>
                </div>
                <div className="formRow2-item-b">
                    <Field editing={modify} type="text" name={"bill"} placeholder={facturation} label="Adresse de facturation" mandatory={true}/>
                </div>
            </div>}

            { modify && <div>

                <h2 className="mt-10 mb-5">Adresse postale</h2>

                <div className="formRow2 w-full grid tablet:grid-cols-3">
                    <div className="formRow2-item-a">
                        <Field editing={modify} type="text" name={"postal-adress"} placeholder={postalAddress} label="Adresse" mandatory={true}/>
                    </div>
                    <div className="formRow2-item-b">
                        <Field editing={modify} type="number" name={"postal-code"} placeholder={postalCode} label="Code postal" mandatory={true}/>
                    </div>
                    <div className="formRow2-item-b">
                        <Field editing={modify} type="text" name={"postal-city"} placeholder={postalCity} label="Ville" mandatory={true}/>
                    </div>
                </div>

                <h2 className="mt-10 mb-5">Adresse de facturation</h2>

                <div className="formRow2 w-full grid tablet:grid-cols-3">
                    <div className="formRow2-item-a">
                        <Field editing={modify} type="text" name={"facturation-adress"} placeholder={facturationAddress} label="Adresse" mandatory={true}/>
                    </div>
                    <div className="formRow2-item-b">
                        <Field editing={modify} type="number" name={"facturation-code"} placeholder={facturationCode} label="Code postal" mandatory={true}/>
                    </div>
                    <div className="formRow2-item-b">
                        <Field editing={modify} type="text" name={"facturation-city"} placeholder={facturationCity} label="Ville" mandatory={true}/>
                    </div>
                </div>

            </div>}



            
        </form>
     );
}
