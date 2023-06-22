import React, { createContext, useState } from "react";

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState([
        {
            name: "Muhammad Umer",
            email: "umer@sparkleo.io",
            pNumber: "+923204463996",
        },
        {
            name: "Hamid Muzaffar Khan",
            email: "hamid@sparkleo.io",
            pNumber: "+923204463996",
        },
    ]);

    const addEmployee = (employee) => {
        employee.name = employee.fName + " " +employee.lName;
        const { fName, lName, ...uEmployee } = employee;
        setEmployees((prevEmployees) => [...prevEmployees, uEmployee]);
    };

    const removeEmployee = (index) => {
        setEmployees((prevEmployees) => {
            return prevEmployees.filter((employee, i) => i !== index)
        });
    };

    return (
        <EmployeeContext.Provider value={{ employees, addEmployee, removeEmployee }}>
            {children}
        </EmployeeContext.Provider>
    );
};

export { EmployeeProvider, EmployeeContext };
