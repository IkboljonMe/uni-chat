import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ChatsPage from "./ChatsPage";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";
import Login from "./Login";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={user}>
              <ChatsPage />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
