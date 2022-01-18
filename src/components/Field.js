import './Field.css';
import PhoneInput from 'react-phone-number-input'
import fr from 'react-phone-number-input/locale/fr.json'

const Field = (props) => {

  function handleChange(event) {
    props.onChange(event.target.value);
  }

  function editingLabel(){
    return (
      <div>
        <label className="w-1/2 flex flex-col text-left text-neutral-400">
          {props.label}{(props.mandatory)?"*":""}
          {(props.type === "password") ?
            <input minLength="8" className="semiBoldText mt-[6px] p-0 w-full border-0 border-b-[2px] border-b-solid border-b-neutral-400 bg-transparent text-neutral-400 transition delay-200 focus:outline-none focus:border-SosTagYellow" type="password" name={props.text} onChange={handleChange} required/> 
          : (props.type === "tel") ?
            <PhoneInput 
              labels={fr}
              defaultCountry="FR"
              international={true}
              placeholder={props.text}
              value={props.value}
              onChange={props.onChange}
            />
            : <input className="semiBoldText mt-[6px] p-0 w-full border-0 border-b-[2px] border-b-solid border-b-neutral-400 bg-transparent text-neutral-400 transition delay-200 focus:outline-none focus:border-SosTagYellow"type={props.label} value={props.value} name={props.text} onChange={handleChange}/>
          }
      </label>
    </div>
    );
  }

  function nonEditingLabel(){
    return (
      <div>
        <label className="w-1/2 flex flex-col text-left text-neutral-400">
          {props.label}
          <div className="semiBoldText p-0 mt-[6px] mb-[2px] w-full bg-transparent font-bold text-SosTagBlue">{props.value}</div>
      </label>
    </div>
    );
  }

  return ( 
    <div>
      {(props.editing)?editingLabel():nonEditingLabel()}
    </div> 
    
   );
}

export default Field;