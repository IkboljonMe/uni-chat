import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ChatsPage from "./ChatsPage";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={!!user}>
              <ChatsPage />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
