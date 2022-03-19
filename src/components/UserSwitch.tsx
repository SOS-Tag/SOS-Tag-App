import React, { useState } from "react";
import { useEffect } from 'react';


type UserSwitchType = {
    id: number,
    setId: (newId: number) => void,
    cardsNames: Array<string>,
}

// const UserSwitch: React.FC<UserSwitchType> = (user, setUser) => {
const UserSwitch: React.FC<UserSwitchType> = ({ id, setId, cardsNames }) => {

    const [opts, setOpts] = useState([{value:"",name:""}]);

    const css = "semiBoldText mt-[6px] mb-[40px] p-0 pb-[8px] w-full border-0 border-b-[2px] border-b-solid border-b-SosTagBlue bg-transparent text-SosTagBlue transition delay-200 focus:outline-none focus:border-SosTagYellow";

    useEffect(() => {
        setOpts(cardsNames.map(e => {
            return { value: e, name: e }
        }))
    }, [cardsNames]);

    return (
        <>
            <div className="font-bold">
                {/* <Field editing={true} name={"changeSelectedCard"} type="select" label="Selectionner la fiche à modifier" option={opts} mandatory={true} /> */}
                <label className="w-full flex flex-col text-left text-SosTagBlue">
                    Selectionner la fiche à modifier
                    {/* {editingInput()} */}
                </label>
                <select onChange={(e) => {setId(cardsNames.indexOf(e.currentTarget.value))}} className={css} value={String(cardsNames[id])} name="changeSelectedCard" required>
                    {opts.map((option, key: number) => {
                        return <option key={key}>{option.name}</option>
                    })}
                </select>

            </div>
        </>
    );
}

export default UserSwitch;