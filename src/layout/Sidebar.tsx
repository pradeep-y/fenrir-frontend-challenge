import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="h-full p-6 border-r border-gray-200">

      <h1 className="text-2xl font-bold text-teal-600 mb-10">
        FERIR SECURITY  
      </h1>

      <nav className="space-y-3 text-sm">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `block px-4 py-3 rounded-xl ${
              isActive
                ? "bg-teal-50 text-teal-600 font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/scan"
          className={({ isActive }) =>
            `block px-4 py-3 rounded-xl ${
              isActive
                ? "bg-teal-50 text-teal-600 font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          Scans
        </NavLink>
      </nav>
    </div>
  );
}