import React from "react";
import Field from "./field/Field"

type UserSwitchType = {
    // user: number,
    // users: number,
    // setUser: (newUser: number) => void,
}

// const UserSwitch: React.FC<UserSwitchType> = (user, setUser) => {
const UserSwitch: React.FC<UserSwitchType> = () => {
    const changeUser = () => {
        return true
    }

    const opts = [
        {
            value: "Richard Ferrand",
            name: "Richard Ferrand"
        },
        {
            value: "A-",
            name: "A-"
        },
        {
            value: "B+",
            name: "B+"
        },
        {
            value: "B-",
            name: "B-"
        },
        {
            value: "O+",
            name: "O+"
        },
        {
            value: "O-",
            name: "O-"
        },
        {
            value: "AB+",
            name: "AB+"
        },
        {
            value: "AB-",
            name: "AB-"
        },
    ];
    return (
        <>
            <div className="font-bold">
                <Field editing={true} name={"changeUser"} type="select" label="Selectionner la fiche à modifier" option={opts} mandatory={true} />
            </div>
            {/* {users.filter()} */}
        </>
    );
}

export default UserSwitch;