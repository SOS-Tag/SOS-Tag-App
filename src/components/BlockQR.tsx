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
                    <h2>Votre QR Code :</h2>
                    <img className='mx-auto py-6 px-6' src={`https://qr.sostag.tech/${id}`}></img>
                    <h2>Votre ID : {id}</h2>
                    <br/>
                </div>
                <span>(Dés)activer le QR Code :</span>
                <div className="flex justify-center my-2 drop-shadow-lg">
                    <Toggle type="main"/>
                </div>
            </div>
        </>
    );
}

export default BlockQR;