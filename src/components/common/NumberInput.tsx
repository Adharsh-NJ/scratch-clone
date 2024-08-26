import React, { InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const NumberInput: React.FC<InputProps> = (props) => {
  return (
    <div>
      <span>{props.label}</span>
      <input
        value={props.value}
        type="number"
        onChange={props.onChange}
        placeholder="X"
        className="mx-2 w-14 pl-2 border rounded p-1 text-black"
      />
    </div>
  );
};

export default NumberInput;
