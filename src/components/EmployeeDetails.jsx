import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export const EmployeeDetails = () => {
    const { employee_id } = useParams()
    const [one, setOne] = useState({})
    useEffect(()=>{
        async function getData() {
            var data = await fetch(`http://localhost:8080/employee/${employee_id}`)
            var res = await data.json();
            setOne(res)
        }
        getData();
    },[])

    return (
      <div className="user_details">
        <img className="user_image" src={one.image} />
        <h4 className="user_name">Employee Name: { one.employee_name }</h4>
        <span className="user_salary">${one.salary}</span>
        <span className="tasks">
          <li className="task">{one.tasks}</li>
        </span>
        Status: <b className="status">{one.status}</b>
        Title: <b className="title">{one.title}</b>
         <button className="fire">Fire Employee</button> 
          <button className="promote">promote</button>
      </div>
    );
  };