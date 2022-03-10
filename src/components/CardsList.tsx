import React from "react";
import { Sheet } from "../generated/graphql";
import UserCard from "./UserCard";

type User = {
  id: string,
  name: string,
  firstname: string,
}

type CardListType = {
  users: Array<Sheet>,
  handleSelect: (id: never) => void
}

const CardsList: React.FC<CardListType> = ({
  users,
  handleSelect,
}) => {

  return (
    <div className="grid mobile:grid-cols-1 tablet:grid-cols-[repeat(auto-fill,_minmax(min(220px,_100%),_1fr))] gap-[40px] mobile:mb-[30px]">
      {users.map(user => (
        <UserCard key={`uc-${user._id}`} type="main" id={user._id} lastname={user.lname!} firstname={user.fname!} handleSelect={handleSelect}/>
      ))}
      <UserCard type="add" handleSelect={() => {}} />
    </div>
  );
}

export default CardsList;