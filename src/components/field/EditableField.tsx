import './Field.css';
import PhoneInput from 'react-phone-number-input'
import fr from 'react-phone-number-input/locale/fr.json'
import React, { useState } from 'react';
import {fieldOption} from '../Types';
import { E164Number } from 'libphonenumber-js/types';

type editableFieldType = {
  label: string,
  mandatory?: boolean,
  name: string,
  type: string,
  text?: string,
  option?: Array<fieldOption>,
  placeholder?: string,
  css?: string,
  defaultCss?: string,
  onChange?: (e: any) => void,
}



const EditableField: React.FC<editableFieldType> = ({
  label,
  type,
  name,
  mandatory = false,
  text,
  option,
  placeholder='',
  css = "mt-[6px] mb-[40px] p-0 pb-[8px] w-full",
  defaultCss = "semiBoldText border-0 border-b-[2px] border-b-solid border-b-SosTagBlue bg-transparent text-SosTagBlue transition delay-200 focus:outline-none focus:border-SosTagYellow",
  onChange,
}) => {

  console.log('NOOOO', (!!css && css))

  let temp: E164Number | undefined;
  temp = placeholder as E164Number | undefined;
  const [tel, setTel] = useState(temp);
  const [input, setInput] = useState(temp);
  const [value,setValue] = useState(placeholder);

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
        className={`${css} ${defaultCss}`}
      />
    )
  }

  function dateInput(){
    const date = value.split('/');
    const formattedValue = date.length === 3 ? `${date[2]}-${date[1]}-${date[0]}` : value;
    return(
      <input onChange={handleValue} value={formattedValue} name={name} className={`${css} ${defaultCss}`} type="date" required/> 
    )
  }

  function passwordInput(){
    return(
      <input onChange={handleValue} value={value} name={name} minLength={8} className={`${css} ${defaultCss}`} type="password" required/> 
    )
  }

  function selectInput(){
    return(
      <select className={`${css} ${defaultCss}`} placeholder={placeholder} name={name} onChange={handleValue} value={value}>
        {option && option.map((option, key: number) => {
          return <option key={key} value={option.value}>{option.name}</option>
        })}
      </select>
    )
  }

  const mandatoryInput = () => {
    return(
      <input onChange={handleValue} value={value} required className={`${css} ${defaultCss}`} type={type} name={name} />
    )
  }

 const nonMandatoryInput = () => {
    return(
      <input onChange={handleValue} value={value} className={`${css} ${defaultCss}`} type={type} name={name} />
    )
  }

  function editingInput(){
    if(type === "password" || type === "tel" || type === "select" || type === "date"){
      if(type === "password"){
        return passwordInput();
      }
      if(type === "tel"){
        return telInput();
      }
      if(type === "select"){
        return selectInput();
      }
      if(type === "date"){
        return dateInput();
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