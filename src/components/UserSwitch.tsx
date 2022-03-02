import React from "react";

type UserSwitchType = {
    user: number,
    // users: number,
    setUser: (newUser: number) => void,
}

const UserSwitch: React.FC<UserSwitchType> = (user, setUser) => {
    return (
        <>
           {/* {users.filter()} */}
        </>
    );
}

export default UserSwitch;