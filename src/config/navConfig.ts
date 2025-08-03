// Import SVG files
import HomeIcon from "../assets/Home.svg";
import CardIcon from "../assets/Card.svg";
import PaymentsIcon from "../assets/Payments.svg";
import CreditIcon from "../assets/Credit.svg";
import AccountIcon from "../assets/Account.svg";

export interface NavItem {
  path: string;
  label: string;
  enabled: boolean;
  icon: string;
}

export const navItems: NavItem[] = [
  { path: "/home", label: "Home", enabled: true, icon: HomeIcon },
  { path: "/cards", label: "Cards", enabled: true, icon: CardIcon },
  { path: "/payments", label: "Payments", enabled: true, icon: PaymentsIcon },
  { path: "/credit", label: "Credit", enabled: true, icon: CreditIcon },
  { path: "/settings", label: "Settings", enabled: true, icon: AccountIcon },
];
