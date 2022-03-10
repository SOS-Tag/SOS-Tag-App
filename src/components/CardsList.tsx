import React from "react";
import { Sheet } from "../generated/graphql";
import UserCard from "./UserCard";

type CardListType = {
  sheets: Array<Sheet>,
  selectAll?: boolean,
  handleSelect: (id: never) => void,
  handleCheckboxList: (id: string) => void,
}

const CardsList: React.FC<CardListType> = ({
  sheets,
  selectAll,
  handleSelect,
  handleCheckboxList,
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
          handleCheckboxList={handleCheckboxList}
          selectAll={selectAll}
        />
      ))}
      <UserCard type="add" handleSelect={() => {}} handleCheckboxList={()=>{}} />
    </div>
  );
}

export default CardsList;
