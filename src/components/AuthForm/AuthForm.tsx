import { useForm } from "react-hook-form";
import AuthFormField from "./AuthFormField";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const AuthForm: React.FC<{}> = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const HandlerSubmit = (e: any) => {
    console.log(e);
  };

  const [accountExists, setaccountExists] = useState(false);

  return (
    <form
      onSubmit={handleSubmit(HandlerSubmit)}
      className="border-cyan-600 border-2 flex flex-col w-4/5 m-auto mt-40 items-center p-5"
    >
      <AuthFormField
        field_name="E-mail"
        type="text"
        register={register}
        errors={errors}
      />
      <AuthFormField
        field_name="Password"
        type="password"
        register={register}
        errors={errors}
      />

      {accountExists && (
        <AuthFormField
          field_name="Confirm password"
          type="password"
          register={register}
          errors={errors}
        />
      )}
      <p onClick={() => setaccountExists(!accountExists)}>
        {accountExists ? "Sign in into existing account" : "Create new account"}
      </p>
      <button className="mt-4 border-cyan-600 border-2 pl-4 pr-4">
        {accountExists ? "Sign up " : "Sign in"}
      </button>
    </form>
  );
};

export default AuthForm;
