import React from "react";
import UserCard from "./UserCard";

type User = {
  id: string,
  name: string,
  firstname: string,
}

type CardListType = {
  users: Array<User>,
  handleSelect: (id: never) => void
}

const CardsList: React.FC<CardListType> = ({
  users,
  handleSelect,
}) => {

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(min(220px,_100%),_1fr))] gap-[40px]">
      {users.map(user => (
        <UserCard key={`uc-${user.id}`} id={user.id} type={user.id === "1" ? "main" : "child"} lastname={user.name} firstname={user.firstname} handleSelect={handleSelect}/>
      ))}
      <UserCard type="add" handleSelect={() => {}} />
    </div>
  );
}

export default CardsList;