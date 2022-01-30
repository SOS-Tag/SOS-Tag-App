import './Field.css';
import PhoneInput from 'react-phone-number-input'
import fr from 'react-phone-number-input/locale/fr.json'
import React from 'react';
import {fieldType} from '../Types';
import NonEditableField from './NonEditableField';
import EditableField from './EditableField';

const Field: React.FC<fieldType> = ({
  label,
  mandatory,
  type,
  text = "",
  option = [],
  placeholder = "",
  editing,
}) => {

  function editingLabel(){
    return(
      <EditableField label={label} type={type} mandatory={mandatory} text={text} placeholder={placeholder} option={option} />
    )
  }

  function nonEditingLabel(){
    return (
      <>
        <NonEditableField value={placeholder} label={label}/>
      </>
    );
  }

  return ( 
    <>
      {(editing)?
        editingLabel()
        :nonEditingLabel()}
    </> 
    
   );
}

export default Field;