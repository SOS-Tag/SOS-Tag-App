import React from "react";
import { Sheet } from "../generated/graphql";
import UserCard from "./UserCard";

type CardListType = {
  sheets: Array<Sheet>,
  checkboxList: Array<String>,
  handleCheckboxList: (id: string) => void,
}

const CardsList: React.FC<CardListType> = ({
  sheets,
  checkboxList,
  handleCheckboxList,
}) => {

  let compteur = 0;

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
          checkboxList={checkboxList}
          handleCheckboxList={handleCheckboxList}
          urlId={compteur++}
        />
        
      ))}
      <UserCard type="add" urlId={compteur++} handleCheckboxList={()=>{}} />
    </div>
  );
}

export default CardsList;
