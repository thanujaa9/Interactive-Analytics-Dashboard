
import {
  LayoutDashboard,
  BarChart3,
  Users,
  ShoppingCart,
  Settings,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Analytics", icon: BarChart3 },
  { name: "Customers", icon: Users },
  { name: "Orders", icon: ShoppingCart },
  { name: "Settings", icon: Settings },
];

function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <h2 className="logo">
        Insight<span>Hub.</span>
      </h2>

      <p className="menu-heading">MENU</p>

      <nav className="sidebar-menu">
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
  );
}

export default Sidebar;
