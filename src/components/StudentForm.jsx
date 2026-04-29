import { useState } from "react";

function StudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || marks === "") {
      return;
    }

    const numberMarks = Number(marks);

    if (numberMarks < 0 || numberMarks > 100) {
      return;
    }

    onAddStudent(name, numberMarks);
    setName("");
    setMarks("");
  };

  return (
    <section className="card">
      <h2>Add New Student</h2>
      <form className="student-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="number"
          placeholder="Marks"
          min="0"
          max="100"
          value={marks}
          onChange={(event) => setMarks(event.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>
    </section>
  );
}

export default StudentForm;
