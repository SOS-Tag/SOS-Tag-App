import './Field.css';
import React from 'react';

type nonEditablefieldType = {
  label: string,
  value: string | number | readonly string[] | undefined,
  css?: string,
  defaultCss?: string,
}

const NonEditableField: React.FC<nonEditablefieldType> = ({
  label,
  value,
  css = 'p-0 mt-[6px] mb-[42px] w-full',
  defaultCss = 'semiBoldText bg-transparent font-bold text-SosTagBlue',
  }) => {

  return ( 
    <label className="w-full flex flex-col text-left text-SosTagBlue">
      {label}
      <div className={`${css} ${defaultCss}`}>{value}</div>
    </label>
   );
}

export default NonEditableField;
