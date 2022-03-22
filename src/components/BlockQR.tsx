import Toggle from "./Toggle";
import React from "react";

type BlockQRType = {
    id:string|null|undefined,
}

const BlockQR: React.FC<BlockQRType> = ({
    id,
}) => {

    return (
        <>
            <div className="">
                <div className="hidden desktop:block">
                    <h2>Votre QR Code :</h2>
                    <img className='w-1/2 mx-auto py-10' src={`https://qr.sostag.tech/${id}`}></img>
                    <h2>Votre ID : {id}</h2>
                    <br/>
                </div>
                <span>Activer / Désactiver le QR Code :</span>
                <div className="mx-auto my-2 drop-shadow-lg">
                    <Toggle type="main"/>
                </div>
            </div>
        </>
    );
}

export default BlockQR;