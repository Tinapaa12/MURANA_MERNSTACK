function studentCard({ name, age, bday, studnum, course }) {
  return (
    <article className="card">
      <div className="card-header">
        <span className="tag">quirky scholar</span>
        <span className="spark">✦</span>
      </div>

      <h2>{name}</h2>

      <div className="meta-list">
        <p><span>Age</span><strong>{age}</strong></p>
        <p><span>Birthday</span><strong>{bday}</strong></p>
        <p><span>Student #</span><strong>{studnum}</strong></p>
        <p><span>Course</span><strong>{course}</strong></p>
      </div>
    </article>
  );
}

export default studentCard;