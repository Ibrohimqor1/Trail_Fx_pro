import { useState } from "react";
import "../FormInput/formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput_inp">
      <label className="formInput_inp__label" >{label}</label>
      <input className="formInput_inp__input"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className="formInput_inp__span" >{errorMessage}</span>
    </div>
  );
};

export default FormInput;   