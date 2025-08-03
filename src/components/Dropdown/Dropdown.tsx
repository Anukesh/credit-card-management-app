import { useState } from "react";
import "./Dropdown.css";
import arrowIcon from "../../assets/down-arrow.svg";

interface DropdownProps {
  title: string;
  icon?: string;
  children: React.ReactNode;
}

export function Dropdown({ title, icon, children }: DropdownProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleExpanded}>
        <div className="dropdown-title">
          {icon && <img src={icon} alt={title} className="dropdown-icon" />}
          <span>{title}</span>
        </div>
        <div className={`dropdown-arrow ${isExpanded ? "expanded" : ""}`}>
          <img src={arrowIcon} alt="arrow icon" />
        </div>
      </div>

      <div className={`dropdown-content ${isExpanded ? "expanded" : ""}`}>
        {children}
      </div>
    </div>
  );
}
