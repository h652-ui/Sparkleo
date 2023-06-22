import React, { useState, useContext } from "react";
import Field from "./Field";
import { EmployeeContext } from "../../Context/EmployeeContext";

const fields = [
  {
    id: "fName",
    label: "First Name",
    req: true,
    type: "text",
  },
  {
    id: "lName",
    label: "Last Name",
    req: true,
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    req: true,
    type: "email",
  },
  {
    id: "pNumber",
    label: "Phone",
    req: true,
    type: "text",
  },
];

function Form() {
  const [info, setInfo] = useState({
    fName: "",
    lName: "",
    email: "",
    pNumber: "",
  });

  const { addEmployee } = useContext(EmployeeContext);

  const clearAllFields = () => {
    setInfo({
      fName: "",
      lName: "",
      email: "",
      pNumber: "",
    });
  };

  const validateEmail = (email) => {
    // Simple email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone) => {
    // Check if the phone number starts with "+92" and is 11 digits long
    return phone.startsWith("+92") && phone.length === 13;
  };

  const handleAddEmployee = () => {
    const { fName, lName, email, pNumber } = info;
    console.log(info)
    // Check if all required fields are filled
    if (!fName || !lName || !email || !pNumber) {
      alert("Please fill in all the required fields.");
      return;
    }

    // Validate email
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate phone number
    if (!validatePhoneNumber(pNumber)) {
      alert("Please enter a valid phone number starting with '+92' and is 11 digits long.");
      return;
    }

    // If all validations pass, add the employee using the addEmployee function from the context
    addEmployee(info);

    // Clear all fields after adding the employee
    clearAllFields();
  };

  return (
    <>
      <div className="w-full h-1/2 lg:h-full flex justify-center items-center">
        <div className="w-1/2 h-[70%] border-2 border-mColor">
          <div className="w-full h-[15%] bg-mColor flex justify-start items-center pl-4 text-white">
            New Employee
          </div>
          <div className="w-full h-[85%] flex justify-center items-center">
            <div className="w-[90%] h-[80%] flex flex-col justify-around ">
              {fields.map((field) => (
                <Field
                  key={field.id}
                  id={field.id}
                  label={field.label}
                  required={field.req}
                  type={field.type}
                  info={info}
                  setInfo={setInfo}
                />
              ))}
              <div className="w-full h-[15%] flex justify-end text-xs lg:text-base">
                <div className="w-1/2 lg:w-[20%] mx-2 rounded-md lg:rounded-full flex justify-center items-center">
                  <button onClick={clearAllFields}>CLEAR ALL</button>
                </div>
                <div className="w-1/2 lg:w-[20%] mx-2 rounded-md lg:rounded-full bg-mColor text-white flex justify-center items-center">
                  <button onClick={handleAddEmployee}>ADD</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
