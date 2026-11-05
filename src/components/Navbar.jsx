
import { Menu, Bell, Search } from "lucide-react";

function Navbar() {
  return (
    <header className="topbar">
      <button className="icon-button" aria-label="Menu">
        <Menu size={21} />
      </button>

      <div className="search-box">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search anything..."
        />
      </div>

      <button className="icon-button" aria-label="Notifications">
        <Bell size={20} />
      </button>
    </header>
  );
}

export default Navbar;
