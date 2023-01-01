const Input = (props) => {
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={props.name}>
        {props.title}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        value={props.value}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        className={props.className}
        onChange={(event) => props.whenChange(event.target.value)}
      />
      <div className={props.errorDiv}>{props.errorMsg}</div>
    </div>
  );
};

export default Input;
