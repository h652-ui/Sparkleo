import React, { useContext } from 'react';
import { Cross } from '../Logo/Logo';
import { EmployeeContext } from '../../Context/EmployeeContext';

function ECard({ index, name, email, pNumber }) {
  const { removeEmployee } = useContext(EmployeeContext);
  return (
    <div className='w-full h-[30%] bg-black bg-opacity-30 flex justify-around items-center my-3 rounded-xl p-5'>
      <div className='w-[70%] h-[90%] flex flex-col justify-around'>
        <div className='flex justify-center sm:justify-start font-bold text-xl lg:text-2xl'>{name}</div>
        <div className='flex justify-center sm:justify-start font-thin text-xs lg:text-sm'>{email}</div>
        <div className='flex justify-center sm:justify-start font-thin text-xs lg:text-sm'>{pNumber}</div>
      </div>
      <div className='w-[10%] h-full flex justify-center items-center'>
        <button onClick={() => removeEmployee(index)}>
          <Cross />
        </button>
      </div>
    </div>
  );
}

export default ECard;
