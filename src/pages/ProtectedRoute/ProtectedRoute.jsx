import { useEffect } from "react";
import { useAuth } from "../../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenicated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenicated) navigate("/");
  }, [isAuthenicated, navigate]);

  return <div>{isAuthenicated ? children : null}</div>;
};

export default ProtectedRoute;
