import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  const navigate = useNavigate();
  console.log("Protected", !isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/register");
    }
  }, [isAuthenticated, navigate]);
  return <>{children}</>;
};

export default ProtectedRoute;
