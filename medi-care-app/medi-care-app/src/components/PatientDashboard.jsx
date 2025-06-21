import React from "react";

const PatientDashboard = ({ setView }) => {
  return (
    <div style={{ padding: 20, fontFamily: "Segoe UI" }}>
      <div style={headerStyle}>
        <span>Good Evening! Ready to stay on track?</span>
        <button onClick={() => setView("caretaker")} style={switchBtn}>
          Switch to Caretaker
        </button>
      </div>
      <div style={boxStyle}>
        <h3>Today's Medication</h3>
        <p>
          <strong>Daily Medication Set</strong> - Complete set of daily tablets
        </p>
        <p>Add Proof Photo (Optional)</p>
        <button onClick={() => alert("Take Photo")}>📷 Take Photo</button>
        <br />
        <br />
        <button style={markBtn} onClick={() => alert("Marked as taken!")}>
          ✔ Mark as Taken
        </button>
      </div>
      <div style={boxStyle}>
        <h3>Medication Calendar</h3>
        <p>[Calendar Placeholder]</p>
      </div>
    </div>
  );
};

const headerStyle = {
  background: "#2563eb",
  color: "white",
  padding: 15,
  borderRadius: 10,
  marginBottom: 20,
  display: "flex",
  justifyContent: "space-between",
};

const switchBtn = {
  background: "#e5e7eb",
  border: "none",
  padding: "5px 10px",
  borderRadius: 5,
  cursor: "pointer",
};

const boxStyle = {
  background: "#f1f5f9",
  padding: 15,
  borderRadius: 10,
  marginBottom: 15,
};

const markBtn = {
  backgroundColor: "#16a34a",
  color: "white",
  padding: "10px 15px",
  border: "none",
  borderRadius: 5,
  cursor: "pointer",
};

export default PatientDashboard;
