import Toggle from "./Toggle";
import QRCode, { QRCodeRenderersOptions } from 'qrcode'
import React from "react";

type BlockQRType = {
    id:string|null|undefined,
}

const BlockQR: React.FC<BlockQRType> = ({
    id,
}) => {

    const opts = {
        errorCorrectionLevel: 'H',
        type: 'image/jpeg',
        quality: 0.3,
        margin: 1,
        color: {
            dark: "#19224f",
            light: "#FFFFFF"
        }
    } as QRCodeRenderersOptions

    // GENERATION DU QR CODE AU LANCEMENT
    // const canvas = document.getElementById('canvas') as HTMLCanvasElement;

    // QRCode.toCanvas(canvas, id, opts, function (err : Error) {
    //     if (err) throw err
    // })

    fetch(`https://sostag-qr-service.herokuapp.com/${id}`)
        .then(res => {
            // document.getElementById("qr-container")?.appendChild(res.);
            console.log(res)
        })


    return (
        <>
            <div className="">
                {/* <canvas className="mx-auto my-[20px] w-1/2" id="canvas"></canvas> */}
                <div className="hidden desktop:block">
                    <h2>Votre QR Code :</h2>
                    <div id="qr-container" className='w-1/2 mx-auto py-10'></div>
                    {/* <canvas className="w-1/2 mx-auto py-10"></canvas> */}
                    <img className='w-1/2 mx-auto py-10' src={`https://sostag-qr-service.herokuapp.com/${id}`}></img>
                    <h2>Votre ID : {id}</h2>
                    <br/>
                </div>
                <span>Activer / Désactiver le QR Code :</span>
                <div className="w-1/5 mx-auto my-2 drop-shadow-lg">
                    <Toggle type="main"/>
                </div>
            </div>
        </>
    );
}

export default BlockQR;