import { Link, useLocation } from "react-router-dom";
import { navItems } from "../../config/navConfig";
import Logo from "../../assets/Logo.svg";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="side-navigation">
      <div className="nav-header">
        <div className="logo-container">
          <img src={Logo} alt="Aspire Logo" className="nav-logo" />
        </div>
        <p className="nav-tagline">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </p>
      </div>
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.path} className="nav-item">
            {item.enabled ? (
              <Link
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                <img
                  src={item.icon}
                  alt={`${item.label} icon`}
                  className="nav-icon"
                />
                <span className="nav-label">{item.label}</span>
              </Link>
            ) : (
              <span className="nav-link disabled">
                <img
                  src={item.icon}
                  alt={`${item.label} icon`}
                  className="nav-icon disabled"
                />
                <span className="nav-label">{item.label}</span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
