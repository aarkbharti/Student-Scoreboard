import { useState } from "react";
import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
import SummaryCards from "./components/SummaryCards";
import StudentTable from "./components/StudentTable";

const startingStudents = [
  { id: 1, name: "Aman", marks: 78 },
  { id: 2, name: "Riya", marks: 45 },
  { id: 3, name: "Karan", marks: 90 },
  { id: 4, name: "Neha", marks: 32 },
];

function App() {
  const [students, setStudents] = useState(startingStudents);

  const addStudent = (name, marks) => {
    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      marks: Number(marks),
    };

    setStudents((currentStudents) => [...currentStudents, newStudent]);
  };

  const updateMarks = (id, newMarks) => {
    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === id ? { ...student, marks: Number(newMarks) } : student
      )
    );
  };

  return (
    <main className="page">
      <div className="wrapper">
        <Header />
        <StudentForm onAddStudent={addStudent} />
        <SummaryCards students={students} />
        <StudentTable students={students} onUpdateMarks={updateMarks} />
      </div>
    </main>
  );
}

export default App;
