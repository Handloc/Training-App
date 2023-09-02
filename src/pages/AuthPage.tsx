import AuthForm from "../components/AuthForm/AuthForm";
import Header from "../components/Header/Header";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AuthPage: React.FC<{}> = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      {!isAuthenticated && (
        <>
          <Header />
          <AuthForm />
        </>
      )}
    </>
  );
};

export default AuthPage;
