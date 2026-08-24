function studentCard({ name, age, bday, studnum, course }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <div className="meta-list">
        <p>Age: {age}</p>
        <p>Birthday: {bday}</p>
        <p>Student Number: {studnum}</p>
        <p>Course: {course}</p>
      </div>
    </div>
  );
}

export default studentCard;