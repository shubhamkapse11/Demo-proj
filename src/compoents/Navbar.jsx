import { NavLink } from "react-router";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[var(--text-h)] font-semibold border-b-2 border-[var(--accent)] pb-0.5"
      : "text-[var(--text)] hover:text-[var(--text-h)]";

  return (
    <nav className="flex items-center gap-6 px-6 py-4 border-b border-[var(--border)]">
      <span className="text-[var(--text-h)] font-bold tracking-wide">Demo</span>
      <div className="flex gap-4">
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
