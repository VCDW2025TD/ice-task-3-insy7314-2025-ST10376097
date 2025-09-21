import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Logout from "./pages/Logout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
