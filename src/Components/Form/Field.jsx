import React from "react";

function Field({ id, label, required, type, info, setInfo }) {
  const changeFunc = (event) => {
    const { name, value } = event.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div className="w-full h-[15%] text-xs lg:text-base flex flex-col lg:flex-row items-center justify-around">
      <div className="w-full lg:w-[20%] text-center lg:text-start">
        <label id={id} className={`${required ? "required" : ""}`}>
          {label}
        </label>
      </div>
      <div className="w-full lg:w-[70%] lg:h-full border-2 border-mColor px-1 box-border">
        <input
          className="w-full lg:h-full field-input"
          type={type}
          required={required}
          name={id}
          value={info[id]}
          onChange={changeFunc}
        />
      </div>
    </div>
  );
}

export default Field;
