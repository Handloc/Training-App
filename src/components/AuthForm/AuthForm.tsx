import AuthFormField from "./AuthFormField";

const AuthForm: React.FC<{}> = () => {
  return (
    <form>
      <AuthFormField field_name="e-mail" type="text" />
      <AuthFormField field_name="password" type="password" />
      <button>Sign in</button>
    </form>
  );
};

export default AuthForm;
