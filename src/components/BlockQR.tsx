import Toggle from "./Toggle";
import QRCode, { QRCodeRenderersOptions } from 'qrcode'
import React from "react";

type BlockQRType = {
    // id: string,
    // isActivated: boolean,
}

const BlockQR: React.FC<BlockQRType> = ({
    // id,
    // isActivated,
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

    return (
        <>
            <div className="BlockQR">
                {/* <canvas className="mx-auto my-[20px] w-1/2" id="canvas"></canvas> */}
                <img className='w-1/2 mx-auto py-10' src="https://www.pluginforthat.com/wp-content/uploads/2019/10/doqrcode.jpg"></img>
                <h2>Votre ID : {}</h2>
                <div className="w-1/5 mx-auto my-2 drop-shadow-lg">
                    <Toggle type="main"/>
                </div>
            </div>
        </>
    );
}

export default BlockQR;