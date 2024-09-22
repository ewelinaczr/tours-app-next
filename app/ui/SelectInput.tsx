import React, { Dispatch, SetStateAction } from "react";
import styled from "./SelectInput.module.css";

function SelectInput({
  label,
  options,
  setValue,
}: {
  label: string;
  options: string[];
  setValue: Dispatch<SetStateAction<any>>;
}) {
  const onChange = (event: any) => {
    const value = event.target.value;
    setValue(value);
  };

  return (
    <div className={styled.container}>
      <label htmlFor={`select-${label}`}>{label}</label>
      <select
        id={`select-${label}`}
        className={styled.select}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option className={styled.option} key={`option-${index}`}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
