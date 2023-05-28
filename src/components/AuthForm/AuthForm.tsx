const AuthForm: React.FC<{}> = () => {
  return (
    <form>
      <label htmlFor="e-mail">E-mail</label>
      <input type="text" id="e-mail" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" />
      <button>Sign in</button>
    </form>
  );
};

export default AuthForm;
