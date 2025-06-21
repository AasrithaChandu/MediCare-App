import React, { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import PatientDashboard from "./components/PatientDashboard";
import CaretakerDashboard from "./components/CaretakerDashboard";

const App = () => {
  const [view, setView] = useState("welcome");

  return (
    <>
      {view === "welcome" && <WelcomeScreen setView={setView} />}
      {view === "patient" && <PatientDashboard setView={setView} />}
      {view === "caretaker" && <CaretakerDashboard setView={setView} />}
    </>
  );
};

export default App;
