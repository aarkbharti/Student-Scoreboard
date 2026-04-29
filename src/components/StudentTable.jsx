import StudentRow from "./StudentRow";

function StudentTable({ students, onUpdateMarks }) {
  return (
    <section className="card">
      <h2>Student Records</h2>

      {students.length === 0 ? (
        <p className="empty-message">No students added yet.</p>
      ) : (
        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Marks</th>
                <th>Status</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <StudentRow
                  key={student.id}
                  student={student}
                  onUpdateMarks={onUpdateMarks}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default StudentTable;
