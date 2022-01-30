import './Field.css';
import React from 'react';
import {fieldType} from '../Types';

type nonEditablefieldType = {
  label: string,
  value: string | number | readonly string[] | undefined,
}


const NonEditableField: React.FC<nonEditablefieldType> = ({
  label,
  value,
  }) => {

  return ( 
    <label className="w-full flex flex-col text-left text-SosTagBlue">
      {label}
      <div className="semiBoldText p-0 mt-[6px] mb-[42px] w-full bg-transparent font-bold text-SosTagBlue">{value}</div>
    </label>
   );
}

export default NonEditableField;