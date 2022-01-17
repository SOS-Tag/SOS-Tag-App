import './Field.css';

const Field = (props) => {

  function handleChange(event) {
    props.onChange(event.target.value);
    console.log(event.target.value);
  }

  return ( 
    <div>
      <label className="Field">
        {props.label}{(props.mandatory)?"*":""}
        <input className="FieldInput"type={props.label} value={props.value} name={props.text} onChange={handleChange} />
      </label>
    </div>
   );
}

export default Field;