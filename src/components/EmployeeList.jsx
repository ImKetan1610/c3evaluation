import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { EmployeeDetails } from "./EmployeeDetails";

export const EmployeeList = () => {
  const [employees, setEmployee] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:8080/employee").then(({ data }) => {
      console.log('data:', data)
      setEmployee(data);
    });
  }, []);

  return (
    <div className='list_container' style={{ display:"grid", gridAutoColumns:"6", margin:"10px"}}>
      {/* On clicking this card anywhere, user goes to user details */}
      {employees.map((employee) => (
      <Link to={`/employees/${employee.employee_id}`}>
        <div key={employee.employee_id} className='employee_card' style={{ width:"155px",height:"200px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", margin:"10px"}}>

            
                <img width="140px" height="150px" className='employee_image' src={employee.image} />
                <span className='employee_name' > {employee.employee_name} </span><br />
                <span className='employee_title' > {employee.title} </span>
            
        </div>
      </Link>
      ))}
    </div>
  );
};
