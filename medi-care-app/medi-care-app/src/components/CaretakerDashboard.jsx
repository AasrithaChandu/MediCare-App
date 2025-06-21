import React from "react";

const CaretakerDashboard = ({ setView }) => {
  return (
    <div style={{ padding: 20, fontFamily: "Segoe UI" }}>
      <div style={headerStyle}>
        <span>Caretaker Dashboard - Monitoring Eleanor Thompson</span>
        <button onClick={() => setView("patient")} style={switchBtn}>
          Switch to Patient
        </button>
      </div>

      <div style={boxStyle}>
        <p>📊 85% Adherence | 🔁 5 Current Streak | ❌ 3 Missed | ✅ 4 Taken</p>
      </div>

      <div style={boxStyle}>
        <h3>Today's Status</h3>
        <p>
          Daily Medication Set - <span style={{ color: "red" }}>Pending</span>{" "}
          at 8:00 AM
        </p>
      </div>

      <div style={boxStyle}>
        <h3>Quick Actions</h3>
        <button onClick={() => alert("Reminder sent")}>
          📧 Send Reminder Email
        </button>
        <br />
        <br />
        <button onClick={() => alert("Configure notifications")}>
          🔔 Configure Notifications
        </button>
        <br />
        <br />
        <button onClick={() => alert("View calendar")}>
          📅 View Full Calendar
        </button>
      </div>

      <div style={boxStyle}>
        <h3>Monthly Adherence Progress</h3>
        <p>22 days taken • 3 missed • 5 remaining</p>
        <div style={{ background: "#e5e7eb", height: 10, borderRadius: 5 }}>
          <div
            style={{
              width: "85%",
              height: 10,
              background: "#16a34a",
              borderRadius: 5,
            }}
          ></div>
        </div>
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

export default CaretakerDashboard;
