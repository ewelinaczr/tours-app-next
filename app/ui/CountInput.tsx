"use client";
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import styled from "./CountInput.module.css";

function CountInput({
  label,
  boundries,
  step,
  value,
  setValue,
}: {
  label: string;
  boundries: number[];
  step: number;
  value: number;
  setValue: Dispatch<SetStateAction<any>>;
}) {
  return (
    <div className={styled.container}>
      <label htmlFor={`count-${label}`}>{label}</label>
      <div className={styled.counter}>
        <Image
          className={styled.icon}
          width={10}
          height={10}
          src={"/add.svg"}
          alt="Add item"
          onClick={() => {
            if (value < boundries[1]) {
              setValue(step);
            }
          }}
        />
        <input
          className={styled.input}
          id={`count-${label}`}
          name={`${label}`}
          readOnly
          value={value}
        ></input>
        <Image
          className={styled.icon}
          width={10}
          height={10}
          src="/delete.svg"
          alt="Delete item"
          onClick={() => {
            if (value > boundries[0]) {
              setValue(-step);
            }
          }}
        />
      </div>
    </div>
  );
}

export default CountInput;
