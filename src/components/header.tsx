import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-14">
      <nav className="h-full bg-gray-200 px-2">
        <ul className="flex items-center gap-3 h-full">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
