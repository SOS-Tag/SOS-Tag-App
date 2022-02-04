const TextMessage = (props) => {

    let img = '';
    let css='';
    let message ='';

    if(props.message){
        css = "bg-red-500";
        img= "./assets/icon_error_textmessage.png";
        message = props.message;
    }

    else{
        if(props.type == 'error'){
            css = "bg-red-500";
            img= "./assets/icon_error_textmessage.png";
            message = "Aucun QR code associé à ce code d’indentification !";
        }
        if(props.type== 'modif'){
            css = "bg-red-300";
            img= "./assets/icon_modif_textmessage.png";
            message = "Les modifications ont été prises en compte et ont été enregistrées !"
        }
    
       if(props.type== 'oups'){
            css = "bg-blue-900";
            img= "./assets/icon_oups_textmessage.png";
            message = "Ceci est un petit problème !"
    
        }
    }

   

    return (
        <div className={"TextMessage flex flex-initial flex-row space-x-4 p-2 w-fit text-white "+ css} >
                <img src={img} />
                <span className="message">
                    {message}
                </span>
            
        </div>
    )


}
 
export default TextMessage;