import React from "react";

const WelcomeScreen = ({ setView }) => {
  return (
    <div style={styles.container}>
      <h1>Welcome to MediCare Companion</h1>
      <p>
        Your trusted partner in medication management. Choose your role to get
        started with personalized features.
      </p>
      <div style={styles.cards}>
        <div style={styles.card}>
          <h3>I'm a Patient</h3>
          <ul>
            <li>Mark medications as taken</li>
            <li>Upload proof photos</li>
            <li>View calendar</li>
          </ul>
          <button style={styles.patientBtn} onClick={() => setView("patient")}>
            Continue as Patient
          </button>
        </div>
        <div style={styles.card}>
          <h3>I'm a Caretaker</h3>
          <ul>
            <li>Monitor compliance</li>
            <li>Notification preferences</li>
            <li>View reports</li>
          </ul>
          <button
            style={styles.caretakerBtn}
            onClick={() => setView("caretaker")}
          >
            Continue as Caretaker
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: 20,
    fontFamily: "Segoe UI, sans-serif",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
    marginTop: 30,
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: 10,
    padding: 20,
    width: 250,
    background: "#f9fafb",
  },
  patientBtn: {
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: 5,
    cursor: "pointer",
  },
  caretakerBtn: {
    backgroundColor: "#16a34a",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: 5,
    cursor: "pointer",
  },
};

export default WelcomeScreen;
