
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="app-container">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-content">
        <Navbar />

        {activePage === "Dashboard" ? (
          <Dashboard />
        ) : (
          <section className="dashboard-content">
            <h1>{activePage}</h1>
            <p>This section is under development.</p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
