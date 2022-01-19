import './Field.css';
import PhoneInput from 'react-phone-number-input'
import fr from 'react-phone-number-input/locale/fr.json'

const Field = (props) => {

  function handleChange(event) {
    props.onChange(event.target.value);
  }

  function editingLabel(){
    return (
      <>
        <label className="w-full flex flex-col text-left text-SosTagBlue">
          {props.label}{(props.mandatory)?"*":""}
          {(props.type === "password") ?
            <input minLength="8" className="semiBoldText mt-[6px] mb-[40px] p-0 pb-[8px] w-full border-0 border-b-[2px] border-b-solid border-b-SosTagBlue bg-transparent text-SosTagBlue transition delay-200 focus:outline-none focus:border-SosTagYellow" type="password" name={props.text} onChange={handleChange} required/> 
          : (props.type === "tel") ?
            <PhoneInput 
              labels={fr}
              defaultCountry="FR"
              international={true}
              placeholder={props.text}
              value={props.value}
              onChange={props.onChange}
            />
            : (props.mandatory)?
              <input required className="semiBoldText mt-[6px] mb-[40px] p-0 pb-[8px] w-full border-0 border-b-[2px] border-b-solid border-b-SosTagBlue bg-transparent text-SosTagBlue transition delay-200 focus:outline-none focus:border-SosTagYellow"type={props.label} value={props.value} name={props.text} onChange={handleChange}/>
              :<input className="semiBoldText mt-[6px] mb-[40px] p-0 pb-[8px] w-full border-0 border-b-[2px] border-b-solid border-b-SosTagBlue bg-transparent text-SosTagBlue transition delay-200 focus:outline-none focus:border-SosTagYellow"type={props.label} value={props.value} name={props.text} onChange={handleChange}/>
            
          }
      </label>
    </>
    );
  }

  function nonEditingLabel(){
    return (
      <>
        <label className="w-full flex flex-col text-left text-SosTagBlue">
          {props.label}
          <div className="semiBoldText p-0 mt-[6px] mb-[42px] w-full bg-transparent font-bold text-SosTagBlue">{props.value}</div>
        </label>
      </>
    );
  }

  return ( 
    <>
      {(props.editing)?editingLabel():nonEditingLabel()}
    </> 
    
   );
}

export default Field;