import { NavLink } from "react-router";

const NavItem = ({ icon: Icon, label, href, active, closeSidebar }) => (
  <NavLink
    to={href}
    onClick={closeSidebar} 
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
       ${
         isActive || active
           ? "bg-primary text-white"
           : "text-gray-600 hover:bg-primary/90 hover:text-white"
       }`
    }
  >
    <Icon className="text-xl" />
    <span className="font-medium">{label}</span>
  </NavLink>
);

export default NavItem;
