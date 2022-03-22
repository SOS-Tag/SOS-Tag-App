import React from "react";
import Toggle from "./Toggle";
import { useUpdateCurrentUserSheetMutation } from "../generated/graphql";

type BlockQRType = {
    id: string | null | undefined,
    sheetEnabled?: boolean | null,
}

const BlockQR: React.FC<BlockQRType> = ({
    id,
    sheetEnabled,
}) => {
    const [updateSheet] = useUpdateCurrentUserSheetMutation();

    const handleToggleChange = (state: boolean) => {
        updateSheet({
            variables: {
              updateCurrentUserSheetInput: {
                id,
                changes: {
                  enabled: state,
                }
              },
            }
          });
    };

    return (
        <>
            <div className="">
                <div className="hidden desktop:block">
                    <h2>Votre QR Code :</h2>
                    <img
                        className="mx-auto py-6 px-6"
                        src={`https://qr.sostag.tech/${id}`}
                        alt="QR Code"
                        style={{ maxWidth: "12rem" }}
                    />
                    <h2>Votre ID : {id}</h2>
                    <br/>
                </div>
                <span>(Dés)activer le QR Code :</span>
                <div className="flex justify-center my-2 drop-shadow-lg">
                    <Toggle type="main" state={sheetEnabled || false} setState={handleToggleChange}/>
                </div>
            </div>
        </>
    );
}

export default BlockQR;