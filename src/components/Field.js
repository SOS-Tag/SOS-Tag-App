import './Field.css';
import PhoneInput from 'react-phone-number-input'
import fr from 'react-phone-number-input/locale/fr.json'

const Field = (props) => {

  function handleChange(event) {
    props.onChange(event.target.value);
  }

  return ( 
    <div>
      <label className="Field">

        {props.label}{(props.mandatory)?"*":""}
        {(props.type === "password") ?
          <input minLength="8" className="FieldInput" type="password" name={props.text} onChange={handleChange} required/> 
        : (props.type === "tel") ?
           <PhoneInput 
            labels={fr}
            defaultCountry="FR"
            international={true}
            placeholder={props.text}
            value={props.value}
            onChange={props.onChange}
           />
          : <input className="FieldInput"type={props.label} value={props.value} name={props.text} onChange={handleChange}/>
        }
        
      </label>

      

    </div>
   );
}

export default Field;