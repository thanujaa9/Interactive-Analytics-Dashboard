
function Dashboard() {
  return (
    <section className="dashboard-content">
      <div className="page-heading">
        <div>
          <h1>Dashboard</h1>
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
  );
}

export default Dashboard;
