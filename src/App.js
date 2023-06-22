import './App.css';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import Employees from './Components/Employees/Employees';
import { EmployeeProvider } from "./Context/EmployeeContext";

function App() {
  return (
    <div className="App font-poppins w-full h-full">
      <Header />
      <EmployeeProvider>
        <Form />
        <Employees />
      </EmployeeProvider>
    </div>
  );
}

export default App;
