import React, { useEffect, useState } from "react";
import "./StudentDirectory.css";

function StudentDirectory() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data.students);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

  if (loading) return <div className="loading">Loading students...</div>;

  return (
    <div className="student-directory">
      <div className="directory-header">
        <h2>🎓 Student Directory</h2>
      </div>
      
      <ul className="student-list">
        {students.map((student) => (
          <li key={student.id} className="student-card">
            <div className="student-info">
              <div className="student-avatar">
                {student.name.charAt(0).toUpperCase()}
              </div>
              <div className="student-details">
                <h3>{student.name}</h3>
                <div className="student-meta">
                  <span>Age {student.age}</span>
                  <span>Grade {student.grade}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentDirectory;