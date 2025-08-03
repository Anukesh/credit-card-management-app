import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Cards from "./pages/Cards/Cards";
import Payments from "./pages/Payments/Payments";
import Credit from "./pages/Credit/Credit";
import Settings from "./pages/Settings/Settings";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Redirect root to cards by default */}
            <Route index element={<Navigate to="/cards" replace />} />

            {/* All routes are now enabled */}
            <Route path="/home" element={<Home />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/credit" element={<Credit />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
