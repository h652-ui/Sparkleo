import React, { useContext } from "react";
import ECard from "./ECard";
import { EmployeeContext } from "../../Context/EmployeeContext";

function Employees() {
  const { employees } = useContext(EmployeeContext);
  return (
    <div className="w-full h-1/2 lg:h-full bg-mColor flex justify-center items-center text-white">
      {employees.length > 0 ? (
        <div className="w-full md:w-[70%] lg:w-[40%] h-[80%] flex flex-col justify-around">
          <div className="w-full h-[5%] flex text-2xl lg:text-3xl font-bold p-2">
            Current Employees
          </div>
          <div className="w-full h-[80%] overflow-y-auto">
            {employees.map((employee, index) => (
              <ECard
                key={index}
                index={index}
                name={employee.name}
                email={employee.email}
                pNumber={employee.pNumber}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-1/2">No Current Employees</div>
      )}
    </div>
  );
}

export default Employees;
