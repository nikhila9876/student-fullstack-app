import React, { useState } from "react";
import axios from "axios";

function AddStudent({ refresh }) {

  const [student, setStudent] = useState({
    name: "", email: "", course: ""
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const add = () => {
    axios.post("http://localhost:8080/students", student)
      .then(() => {
        setStudent({ name:"", email:"", course:"" });
        refresh();
      });
  };

  return (
    <div>
      <input name="name" onChange={handleChange} value={student.name} placeholder="Name"/>
      <input name="email" onChange={handleChange} value={student.email} placeholder="Email"/>
      <input name="course" onChange={handleChange} value={student.course} placeholder="Course"/>
      <button onClick={add}>Add</button>
    </div>
  );
}

export default AddStudent;