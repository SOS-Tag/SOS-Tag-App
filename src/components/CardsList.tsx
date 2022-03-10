import React from "react";
import { Sheet } from "../generated/graphql";
import UserCard from "./UserCard";

type CardListType = {
  sheets: Array<Sheet>,
  handleSelect: (id: never) => void
}

const CardsList: React.FC<CardListType> = ({
  sheets,
  handleSelect,
}) => {

  return (
    <div className="grid mobile:grid-cols-1 tablet:grid-cols-[repeat(auto-fill,_minmax(min(220px,_100%),_1fr))] gap-[40px] mobile:mb-[30px]">
      {sheets.map(s => (
        <UserCard
          key={`uc-${s._id}`}
          type="main"
          id={s._id}
          enabled={s.enabled!}
          lastname={s.lname!}
          firstname={s.fname!}
          handleSelect={handleSelect}
        />
      ))}
      <UserCard type="add" handleSelect={() => {}} />
    </div>
  );
}

export default CardsList;
