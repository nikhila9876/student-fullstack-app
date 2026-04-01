import React, { useEffect, useState } from "react";
import axios from "axios";

function StudentList() {

  const [students, setStudents] = useState([]);

  const fetchData = () => {
    axios.get("http://localhost:8080/students")
      .then(res => setStudents(res.data));
  };

  useEffect(() => { fetchData(); }, []);

  const del = (id) => {
    axios.delete(`http://localhost:8080/students/${id}`)
      .then(fetchData);
  };

  return (
    <table border="1">
      <tbody>
        {students.map(s => (
          <tr key={s.id}>
            <td>{s.name}</td>
            <td>{s.email}</td>
            <td>{s.course}</td>
            <td><button onClick={() => del(s.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;