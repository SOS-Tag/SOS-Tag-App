import "./UserDashboard.css"
import Button from "../components/Button"
import Field from "../components/Field";
import { useEffect, useState } from "react";

const Account = () => {

    const [modify, changeModifyField] = useState(false); 
    const [infoPage, changePage] = useState(true); 
    const [textModifyButton, changeTextModifyButton] = useState("Modifier les informations"); 
    const [typeModifyButton, changeTypeModifyButton] = useState("fill"); 

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
        (infoPage) ? changePage(false) : changePage(true); 
        console.log(infoPage); 
    }

    const saveChange = () => {
        alert("[A FAIRE] Les informations de l'utilisateur se mettent à jours !")
    
    }

    return ( 
        <div className="w-full">

            {(infoPage) ?
            <>
            <Banner title="Gestion de votre compte" />
            <div className="flex flex-row">
                <GroupManage modifyClick={modifyInfo} passwordClick={modifyPage} textButton={textModifyButton} typeButton={typeModifyButton} />
                <UserInfo modify={modify} /> 
            </div>
            </>
            :  
            <>
            <Banner title="Modification de votre mot de passe" returnClick={modifyPage}/> 

            <form className="grid grid-cols-5 gap-4">
                <div className="col-start-3 ">
                    <div className="">
                        <Field editing={true} type="password" value="test"  label="Mot de passe actuel" mandatory={true}/> 
                    </div>

                    <div className="">
                        <Field editing={true} type="password" value="test"  label="Nouveau mot de passe" mandatory={true}/> 
                    </div>

                    <div className="">
                        <Field editing={true} type="password" onChange="test" label="Répétez le mot de passe" mandatory={true}/>
                    </div>
                
                <Button box="fill" type ="general" buttonText="Modifier mot de passe" />
                </div>
            </form>
            </>
            }   
        </div>
     ); 
}
 
export default Account;








/////////////////////////////////
/* BANNER - RETURN ET TITLE  */ 
/////////////////////////////////

const Banner = (props) => {
    return ( 
        <div className="flex flex-row mt-10 mb-20">
            <button className="w-2/5" onClick={props.returnClick}>
            <svg className="w-full justify-items-center" width="47" height="34" viewBox="0 0 47 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M47 14.875H8.18227L20.1245 2.99625L17.0909 0L0 17L17.0909 34L20.1032 31.0037L8.18227 19.125H47V14.875Z" 
            fill="#19224F"/>
            </svg>
            </button>
            
            
            <h1 className="w-3/5">{props.title}</h1>
        </div>
    );
}
 
/////////////////////////////////
/* MANAGE ACCOUNT - BUTTONS */ 
/////////////////////////////////
const GroupManage = (props) => {

    return ( 

        <div className="flex flex-col w-2/5 items-center">
            <svg width="132" height="132" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_0_1)">
                <circle cx="66" cy="62" r="62" fill="#F69FAB"/>
                </g>
                <path d="M66 32C70.1109 32 74.0533 33.633 76.9602 36.5398C79.867 39.4467 81.5 43.3891 81.5 47.5C81.5 51.6109 79.867 55.5533 76.9602 58.4602C74.0533 61.367 70.1109 63 66 63C61.8891 63 57.9467 61.367 55.0398 58.4602C52.133 55.5533 50.5 51.6109 50.5 47.5C50.5 43.3891 52.133 39.4467 55.0398 36.5398C57.9467 33.633 61.8891 32 66 32ZM66 70.75C83.1275 70.75 97 77.6862 97 86.25V94H35V86.25C35 77.6862 48.8725 70.75 66 70.75Z" fill="#534F4F"/>
            </svg>

            <div className="flex flex-col ml-10 mr-10 ">
                <Button box={props.typeButton} type="general" buttonText={props.textButton} onClick={props.modifyClick}/>
                <Button box="fill" type="secondaire" buttonText="Changer de mot de passe" onClick={props.passwordClick}/>
                
            </div>
            <p>Supprimer le compte</p>
        </div>
     );
}
 




const UserInfo = (props) => {
    let contenu =""; 

    if (props.modify){
        contenu = 
        <div className="formRow2 w-full grid">
            <div className="formRow2-item-a">
                <Field editing="true" type="text" value="Pascal" label="Prénom"/>
            </div>
            <div className="formRow2-item-b">
                <Field editing="true" type="text" value="RICHARD" label="Nom"/>
            </div>
        </div>

    }else{
        contenu =
        <div className="mb-10">
            <p className="prenom">Pascal</p>
            <p className="nom">Richard</p>    
        </div>
    }





    return ( 

        <div className="UserInfo w-3/5">

            {contenu}

            <div className="formRow2 w-full grid">
                <div className="formRow2-item-a">
                    <Field editing={props.modify} type="text" value="pascal.richard@gmail.com" label="Adresse mail"/>
                </div>
                <div className="formRow2-item-b">
                    <Field editing={props.modify} type="tel" value="0298675645" label="Numéro de téléphone"/>
                </div>
            </div>
            <div className="formRow2 w-full grid">
                <div className="formRow2-item-a">
                    <Field editing={props.modify} type="text" value="7 rue des Fleurs 37000 Tours" label="Adresse postale"/>
                </div>
                <div className="formRow2-item-b">
                    <Field editing={props.modify} type="text" value="7 rue des Fleurs 37000 Tours" label="Adresse de facturation"/>
                </div>
            </div>

        </div>
     );
}
