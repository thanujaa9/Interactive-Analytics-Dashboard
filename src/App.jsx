
import { useState } from "react";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  ShoppingCart,
  Settings,
  Menu,
  Bell,
  Search,
} from "lucide-react";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Analytics", icon: BarChart3 },
    { name: "Customers", icon: Users },
    { name: "Orders", icon: ShoppingCart },
    { name: "Settings", icon: Settings },
  ];

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2 className="logo">Insight<span>Hub.</span></h2>

        <p className="menu-heading">MENU</p>

        <nav>
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                className={`menu-item ${
                  activePage === item.name ? "active" : ""
                }`}
                onClick={() => setActivePage(item.name)}
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <button className="icon-button">
            <Menu size={21} />
          </button>

          <div className="search-box">
            <Search size={18} />
            <input placeholder="Search anything..." />
          </div>

          <button className="icon-button">
            <Bell size={20} />
          </button>
        </header>

        <section className="dashboard-content">
          <div className="page-heading">
            <div>
              <h1>{activePage}</h1>
              <p>Welcome back! Here's what's happening today.</p>
            </div>

            <span className="date-label">November 2026</span>
          </div>

          <div className="welcome-panel">
            <h2>Welcome to InsightHub</h2>
            <p>
              Your business analytics, all in one place.
              Track performance and understand your data.
            </p>
          </div>

          <h3 className="section-heading">Overview</h3>

          <div className="empty-cards">
            <div className="placeholder-card">Revenue</div>
            <div className="placeholder-card">Users</div>
            <div className="placeholder-card">Orders</div>
            <div className="placeholder-card">Growth</div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
