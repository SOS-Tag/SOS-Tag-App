import Toggle from "./Toggle";
import QRCode from 'qrcode'

const BlockQR = (props) => {

    const user = props;

    const opts = {
        errorCorrectionLevel: 'H',
        type: 'image/jpeg',
        quality: 0.3,
        margin: 1,
        color: {
            dark: "#19224f",
            light: "#FFFFFF"
        }
    }

    // GENERATION DU QR CODE AU LANCEMENT

    window.onload = function() {
        QRCode.toCanvas(document.getElementById('canvas'), user.id, opts, function (err) {
            if (err) throw err
        })
    }

    return (
        <>
            <div className="w-1/6 bg-white max-h-[30%] text-center rounded-3xl drop-shadow-md mx-[20px] mt-[2%]">
                <canvas className="mx-auto my-[20px] w-1/2" id="canvas"></canvas>
                <h2>Votre ID : {user.id}</h2>
                <div className="w-1/5 mx-auto my-2 drop-shadow-lg">
                    <Toggle isActivated={user.isActivated} color='SosTagYellow' />
                </div>
            </div>
        </>
    );
}

export default BlockQR;