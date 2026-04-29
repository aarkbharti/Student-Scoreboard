function SummaryCards({ students }) {
  const totalStudents = students.length;
  const passedStudents = students.filter((student) => student.marks >= 40).length;
  const averageMarks = totalStudents
    ? Math.round(
        students.reduce((total, student) => total + student.marks, 0) / totalStudents
      )
    : 0;

  return (
    <section className="summary-grid">
      <div className="summary-card">
        <p>Total</p>
        <h3>{totalStudents}</h3>
      </div>
      <div className="summary-card">
        <p>Passed</p>
        <h3>{passedStudents}</h3>
      </div>
      <div className="summary-card">
        <p>Average</p>
        <h3>{averageMarks}</h3>
      </div>
    </section>
  );
}

export default SummaryCards;
