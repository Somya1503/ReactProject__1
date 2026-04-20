import React, { useEffect, useState } from "react";

function AttendanceTracker() {
  const [students, setStudents] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showLowAttendance, setShowLowAttendance] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        const updatedStudents = data.map((student) => {
          const attendance = Math.floor(Math.random() * 101);

          return {
            id: student.id,
            name: student.name,
            attendance,
            status: attendance >= 75 ? "Present" : "Absent",
          };
        });

        setStudents(updatedStudents);
      } catch (err) {
        setError("Failed to fetch students");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  let filteredStudents = students;

  if (filterType === "Present") {
    filteredStudents = filteredStudents.filter(
      (student) => student.status === "Present"
    );
  }

  if (filterType === "Absent") {
    filteredStudents = filteredStudents.filter(
      (student) => student.status === "Absent"
    );
  }

  if (showLowAttendance) {
    filteredStudents = filteredStudents.filter(
      (student) => student.attendance < 75
    );
  }

  filteredStudents = [...filteredStudents].sort(
    (a, b) => b.attendance - a.attendance
  );

  if (loading) return <p>Loading students...</p>;
  if (error) return <p>{error}</p>;
  if (filteredStudents.length === 0) return <p>No students found.</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>Attendance Tracker</h1>

      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => setFilterType("All")}>All</button>
        <button onClick={() => setFilterType("Present")} style={{ marginLeft: "10px" }}>
          Present
        </button>
        <button onClick={() => setFilterType("Absent")} style={{ marginLeft: "10px" }}>
          Absent
        </button>
      </div>

      <label style={{ display: "block", marginBottom: "15px" }}>
        <input
          type="checkbox"
          checked={showLowAttendance}
          onChange={() => setShowLowAttendance(!showLowAttendance)}
        />
        {" "}Show &lt; 75% attendance
      </label>

      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        width="100%"
        style={{ borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Attendance %</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr
              key={student.id}
              onClick={() => setSelectedStudent(student.id)}
              style={{
                backgroundColor:
                  selectedStudent === student.id ? "#dbeafe" : "white",
                cursor: "pointer",
              }}
            >
              <td>{student.name}</td>
              <td style={{ color: student.attendance >= 75 ? "green" : "red" }}>
                {student.attendance}%
              </td>
              <td>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "12px",
                    color: "white",
                    backgroundColor:
                      student.attendance >= 75 ? "green" : "red",
                  }}
                >
                  {student.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceTracker;