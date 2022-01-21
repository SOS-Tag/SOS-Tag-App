const TextMessage = (props) => {

    let img = '';
    let css='';
    let message ='';

   if(props.type == 'error'){
        css = "TextMessage flex flex-row space-x-4 p-2 w-auto w-90 text-white bg-red-500";
        img= "./assets/icon_error_textmessage.png";
        message = "Aucun QR code associé à ce code d’indentification !";
    }
    if(props.type== 'modif'){
        css = "TextMessage flex flex-row space-x-4 p-2 w-auto w-90 text-white bg-red-300";
        img= "./assets/icon_modif_textmessage.png";
        message = "Les modifications ont été prises en compte et ont été enregistrées !"
    }

   if(props.type== 'oups'){
        css = "TextMessage flex flex-row space-x-4 p-2 w-auto w-90 text-white bg-blue-900";
        img= "./assets/icon_oups_textmessage.png";
        message = "Ceci est un petit problème !"

    }

    return (
        <div className={css} >
            <img src={img} />
            <span className="message">
                {message}
            </span>
        </div>
    )


}
 
export default TextMessage;