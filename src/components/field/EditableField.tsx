import './Field.css';
import PhoneInput from 'react-phone-number-input'
import fr from 'react-phone-number-input/locale/fr.json'
import React, { useState } from 'react';
import {fieldOption, fieldType} from '../Types';
import { E164Number } from 'libphonenumber-js/types';

type editableFieldType = {
  label: string,
  mandatory: boolean,
  type: string,
  text?: string,
  option?: Array<fieldOption>,
  placeholder?: string,
}

const EditableField: React.FC<editableFieldType> = ({
  label,
  type,
  mandatory,
  text,
  option,
  placeholder,
}) => {

  let temp: E164Number | undefined;
  const [tel, setTel] = useState(temp);
  const [input, setInput] = useState(temp);
  const css = "semiBoldText mt-[6px] mb-[40px] p-0 pb-[8px] w-full border-0 border-b-[2px] border-b-solid border-b-SosTagBlue bg-transparent text-SosTagBlue transition delay-200 focus:outline-none focus:border-SosTagYellow";


  const telInput = () => {
    return(
      <PhoneInput 
        labels={fr}
        defaultCountry="FR"
        international={true}
        placeholder={text}
        value={tel}
        onChange={setTel}
      />
    )
  }

  function passwordInput(){
    return(
      <input minLength={8} className={css} type="password" name={text} required/> 
    )
  }

  function selectInput(){
    return(
      <select className={css} placeholder={placeholder} name={text}>
        {option && option.map((option, key: number) => {
          return <option key = {key}>{option.name}</option>
        })}
      </select>
    )
  }

  const mandatoryInput = () => {
    return(
      <input required className={css} type={type} placeholder={placeholder} name={text}/>
    )
  }

 const nonMandatoryInput = () => {
    return(
      <input className={css} type={type} placeholder={placeholder} name={text}/>
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
        {label}{(mandatory)?"*":""}
        {editingInput()}
      </label>
    </> 
    
   );
}

export default EditableField;