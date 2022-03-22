import './Field.css';
import React from 'react';
import {fieldType} from '../Types';
import NonEditableField from './NonEditableField';
import EditableField from './EditableField';

const Field: React.FC<fieldType> = ({
  label,
  mandatory = false,
  name,
  type,
  text = "",
  option = [],
  placeholder = "",
  css,
  defaultCss,
  editing,
  onChange,
}) => {

  function editingLabel(){
    return(
      <EditableField
        name={name}
        label={label}
        type={type}
        mandatory={mandatory}
        text={text}
        placeholder={placeholder}
        option={option}
        onChange={onChange}
        {...(!!css && { css })}
        {...(!!defaultCss && { defaultCss })}
      />
    )
  }

  function nonEditingLabel(){
    return (
      <NonEditableField
        value={placeholder}
        label={label}
        {...(!!css && css)}
        {...(!!defaultCss && defaultCss)}
      />
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
