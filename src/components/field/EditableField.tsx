import './Field.css';
import PhoneInput from 'react-phone-number-input'
import fr from 'react-phone-number-input/locale/fr.json'
import React, { useState } from 'react';
import {fieldOption} from '../Types';
import { E164Number } from 'libphonenumber-js/types';

type editableFieldType = {
  label: string,
  mandatory: boolean,
  name: string,
  type: string,
  text?: string,
  option?: Array<fieldOption>,
  placeholder?: string,
  onChange?: (e: any) => void,
}



const EditableField: React.FC<editableFieldType> = ({
  label,
  type,
  name,
  mandatory,
  text,
  option,
  placeholder='',
  onChange,
}) => {


  let temp: E164Number | undefined;
  temp = placeholder as E164Number | undefined;
  const [tel, setTel] = useState(temp);
  const [input, setInput] = useState(temp);
  const [value,setValue] = useState(placeholder);
  const css = "semiBoldText mt-[6px] mb-[40px] p-0 pb-[8px] w-full border-0 border-b-[2px] border-b-solid border-b-SosTagBlue bg-transparent text-SosTagBlue transition delay-200 focus:outline-none focus:border-SosTagYellow";

  function handleValue(event: any){
    setValue(event.target.value);
    onChange && onChange(event);
  }

  const telInput = () => {
    return(
      <PhoneInput 
        labels={fr}
        defaultCountry="FR"
        international={true}
        placeholder={text}
        value={tel}
        onChange={(e: any) => {
          setTel(e);
          onChange && onChange(e)
        }}
        name={name}
      />
    )
  }

  function passwordInput(){
    return(
      <input onChange={handleValue} value={value} name={name} minLength={8} className={css} type="password" required/> 
    )
  }

  function selectInput(){
    return(
      <select className={css} placeholder={placeholder} name={name} >
        {option && option.map((option, key: number) => {
          return <option key = {key}>{option.name}</option>
        })}
      </select>
    )
  }

  const mandatoryInput = () => {
    return(
      <input onChange={handleValue} value={value} required className={css} type={type} name={name} />
    )
  }

 const nonMandatoryInput = () => {
    return(
      <input onChange={handleValue} value={value} className={css} type={type} name={name} />
    )
  }

  function editingInput(){
    if(type === "password" || type === "tel" || type === "select"){
      if(type === "password"){
        return passwordInput();
      }
      if(type === "tel"){
        return telInput();
      }
      if(type === "select"){
        return selectInput();
      }
    }
    else{
      if(mandatory){
        return mandatoryInput();
      }
      else{
        return nonMandatoryInput();
      }
    }
  }

  return ( 
    <>
      <label className="w-full flex flex-col text-left text-SosTagBlue">
        {label}{(mandatory)?" *":""}
        {editingInput()}
      </label>
    </> 
    
   );
}

export default EditableField;