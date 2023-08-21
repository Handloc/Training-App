import AuthForm from "../components/AuthForm/AuthForm";
import Header from "../components/Header/Header";

const AuthPage: React.FC<{}> = () => {
  return (
    <>
      <Header />
      <AuthForm />
    </>
  );
};

export default AuthPage;
