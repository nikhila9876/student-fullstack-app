import React, { useEffect, useState } from "react";
import axios from "axios";

function StudentList() {

  const [students, setStudents] = useState([]);

  const fetchData = () => {
    axios.get(process.env.REACT_APP_API_URL + "/students")
      .then(res => setStudents(res.data));
  };

  useEffect(() => { fetchData(); }, []);

  const del = (id) => {
   axios.delete(process.env.REACT_APP_API_URL + "/students/" + id)
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