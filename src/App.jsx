import StudentCard from "./components/studentCard.jsx";
import Subject from "./components/subject.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-shell">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <StudentCard
          name="Darrelle"
          age={20}
          bday="2005-01-01"
          studnum="12345"
          course="Bachelor of Information Technology"
        />
        <Subject
          schedCode="IT 301"
          subjectName="Web Development"
          classSchedule="Monday · 10:00 AM - 1:00 PM"
        />
      </div>
    </div>
  );
}

export default App;