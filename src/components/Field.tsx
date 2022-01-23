import './Field.css';
import PhoneInput from 'react-phone-number-input'
import fr from 'react-phone-number-input/locale/fr.json'
import React from 'react';
import {fieldType} from './Types';

const Field: React.FC<fieldType> = ({
  label,
  type,
  mandatory,
  value,
  text,
  option,
  editing,
  name, 
  onChange,
  }) => {

  function editingLabel(){
    return (
      <>
        <label className="w-full flex flex-col text-left text-SosTagBlue">
          {label}{(mandatory)?"*":""}
          {(type === "password") ?
            <input minLength={8} className="semiBoldText mt-[6px] mb-[40px] p-0 pb-[8px] w-full border-0 border-b-[2px] border-b-solid border-b-SosTagBlue bg-transparent text-SosTagBlue transition delay-200 focus:outline-none focus:border-SosTagYellow" type="password" name={text} required/> 
          : (type === "tel") ?
          ''
            // <PhoneInput 
            //   labels={fr}
            //   defaultCountry="FR"
            //   international={true}
            //   placeholder={text}
            //   value={phoneValue}
            //   onChange={onChange}
            // />
            : (type === "select") ?
              <select className="semiBoldText mt-[6px] mb-[40px] p-0 pb-[8px] w-full border-0 border-b-[2px] border-b-solid border-b-SosTagBlue bg-transparent text-SosTagBlue transition delay-200 focus:outline-none focus:border-SosTagYellow" value={value} name={text}>
                {option && option.map((option, key: number) => {
                  return <option key = {key}>{option.value}</option>
              })}
              </select>
              : (mandatory) ?
                <input required className="semiBoldText mt-[6px] mb-[40px] p-0 pb-[8px] w-full border-0 border-b-[2px] border-b-solid border-b-SosTagBlue bg-transparent text-SosTagBlue transition delay-200 focus:outline-none focus:border-SosTagYellow"type={type} value={value} name={text}/>
                :<input className="semiBoldText mt-[6px] mb-[40px] p-0 pb-[8px] w-full border-0 border-b-[2px] border-b-solid border-b-SosTagBlue bg-transparent text-SosTagBlue transition delay-200 focus:outline-none focus:border-SosTagYellow"type={type} value={value} name={text}/>
            
          }
      </label>
    </>
    );
  }

  function nonEditingLabel(){
    return (
      <>
        <label className="w-full flex flex-col text-left text-SosTagBlue">
          {label}
          <div className="semiBoldText p-0 mt-[6px] mb-[42px] w-full bg-transparent font-bold text-SosTagBlue">{value}</div>
        </label>
      </>
    );
  }

  return ( 
    <>
      {(editing)?editingLabel():nonEditingLabel()}
    </> 
    
   );
}

export default Field;