function studentCard({ name, age, bday, studnum, course }) {
  return (
  <div className="meta-list">
        <p><span>Age</span><strong>{age}</strong></p>
        <p><span>Birthday</span><strong>{bday}</strong></p>
        <p><span>Student #</span><strong>{studnum}</strong></p>
        <p><span>Course</span><strong>{course}</strong></p>
      </div>

  );
}

export default studentCard;