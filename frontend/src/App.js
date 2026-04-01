import React from "react";
import AddStudent from "./AddStudent";
import StudentList from "./StudentList";

function App() {

  const reload = () => window.location.reload();

  return (
    <div>
      <AddStudent refresh={reload}/>
      <StudentList/>
    </div>
  );
}

export default App;