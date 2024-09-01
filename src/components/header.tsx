import { Link, useNavigate } from "react-router-dom";
import { usePathname } from "../hooks/use-pathname";

function Header() {
  const { updatePathname } = usePathname();
  const navigate = useNavigate();

  const handleLinkClick = (path: string) => {
    updatePathname(path); // Update the target pathname in context
    navigate(path); // Perform the navigation
  };

  return (
    <header className="h-14">
      <nav className="h-full bg-gray-200 px-2">
        <ul className="flex items-center gap-3 h-full">
          <li>
            <Link
              to="/"
              onClick={() => handleLinkClick("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => handleLinkClick("/contact")}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => handleLinkClick("/about")}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
