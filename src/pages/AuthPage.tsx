import AuthForm from "../components/AuthForm/AuthForm";
import Header from "../components/Header/Header";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import HomePage from "./HomePage";

const AuthPage: React.FC<{}> = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <>
      {isAuthenticated ? (
        <HomePage />
      ) : (
        <>
          <Header />
          <AuthForm />
        </>
      )}
    </>
  );
};

export default AuthPage;
