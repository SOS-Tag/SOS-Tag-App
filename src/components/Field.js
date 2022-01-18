import './Field.css';
import PhoneInput from 'react-phone-number-input'
import fr from 'react-phone-number-input/locale/fr.json'

const Field = (props) => {

  function handleChange(event) {
    props.onChange(event.target.value);
  }

  return ( 
    <div>
      <label className="Field w-1/2 flex flex-col text-left text-neutral-400">

        {props.label}{(props.mandatory)?"*":""}
        {(props.type === "password") ?
          <input minLength="8" className="FieldInput p-0 w-full border-0 border-b-[2px] border-b-solid border-b-neutral-400 bg-transparent text-neutral-400 transition delay-200 focus:outline-none focus:border-SosTagYellow" type="password" name={props.text} onChange={handleChange} required/> 
        : (props.type === "tel") ?
           <PhoneInput 
            labels={fr}
            defaultCountry="FR"
            international={true}
            placeholder={props.text}
            value={props.value}
            onChange={props.onChange}
           />
          : <input className="FieldInput p-0 w-full border-0 border-b-[2px] border-b-solid border-b-neutral-400 bg-transparent text-neutral-400 transition delay-200 focus:outline-none focus:border-SosTagYellow"type={props.label} value={props.value} name={props.text} onChange={handleChange}/>
        }
        
      </label>

      

    </div>
   );
}

export default Field;