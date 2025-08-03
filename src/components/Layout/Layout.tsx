import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Navigation />
      <main className="main-content">
        <div className="content-area">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
