function subject({ schedCode, subjectName, classSchedule }) {
  return (
    <div className="subject-container">
      <div className="subject-info">
        <p><strong>Schedule Code:</strong> {schedCode}</p>
        <p><strong>Subject Name:</strong> {subjectName}</p>
        <p><strong>Class Schedule:</strong> {classSchedule}</p>
      </div>
    </div>
  );
}

export default subject;