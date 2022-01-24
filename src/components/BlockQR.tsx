import Toggle from "./Toggle";
import QRCode, { QRCodeRenderersOptions } from 'qrcode'
import React from "react";

type BlockQRType = {
    id: string,
    isActivated: boolean,
}

const BlockQR: React.FC<BlockQRType> = ({
    id,
    isActivated,
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

    window.onload = function() {

        const canvas = document.getElementById('canvas') as HTMLCanvasElement;

        QRCode.toCanvas(canvas, id, opts, function (err : Error) {
            if (err) throw err
        })
    }

    return (
        <>
            <div className="w-1/6 bg-white max-h-[30%] text-center rounded-3xl drop-shadow-md mx-[20px] mt-[2%]">
                <canvas className="mx-auto my-[20px] w-1/2" id="canvas"></canvas>
                <h2>Votre ID : {id}</h2>
                <div className="w-1/5 mx-auto my-2 drop-shadow-lg">
                    <Toggle isActivated={isActivated} color='SosTagYellow' />
                </div>
            </div>
        </>
    );
}

export default BlockQR;