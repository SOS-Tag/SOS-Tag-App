import Toggle from "./Toggle";
import QRCode from 'qrcode'

const BlockQR = () => {

    // MODIFIER ICI L'ID + APPEL A LA BDD
    QRCode.toCanvas(document.getElementById('canvas'), 'text', { errorCorrectionLevel: 'H' }, function (err) {
        if (err) throw err
    })

    return (
        <>
            <div className="w-1/6 bg-white max-h-[30%] text-center rounded-3xl drop-shadow-md mx-[20px] mt-[2%]">
                <canvas className="mx-auto my-[20px] w-1/2" id="canvas"></canvas>
                <h2>Votre ID : AB-CD-EF</h2>
                <div className="w-1/5 mx-auto my-2 drop-shadow-lg">
                    <Toggle />
                </div>
            </div>
        </>
    );
}

export default BlockQR;