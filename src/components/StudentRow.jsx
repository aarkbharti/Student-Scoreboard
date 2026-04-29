import { useState } from "react";

function StudentRow({ student, onUpdateMarks }) {
  const [newMarks, setNewMarks] = useState(student.marks);
  const passed = student.marks >= 40;

  const handleSave = () => {
    const numberMarks = Number(newMarks);

    if (numberMarks < 0 || numberMarks > 100) {
      return;
    }

    onUpdateMarks(student.id, numberMarks);
  };

  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.marks}</td>
      <td>
        <span className={passed ? "status pass" : "status fail"}>
          {passed ? "Pass" : "Fail"}
        </span>
      </td>
      <td>
        <div className="update-group">
          <input
            type="number"
            min="0"
            max="100"
            value={newMarks}
            onChange={(event) => setNewMarks(event.target.value)}
          />
          <button type="button" onClick={handleSave}>
            Save
          </button>
        </div>
      </td>
    </tr>
  );
}

export default StudentRow;
