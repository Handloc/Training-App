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
      className="flex flex-col w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/5 m-auto mt-40 items-center border-2 border-zinc-500 shadow-xl rounded-3xl p-5 bg-zinc-600 text-white"
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
      <p
        onClick={() => setaccountExists(!accountExists)}
        className="text-zinc-300 hover:text-white transition-all cursor-pointer"
      >
        {accountExists ? "Sign in into existing account" : "Create new account"}
      </p>
      <button className="bg-amber-400 hover:bg-fuchsia-600 text-black font-bold mt-4 p-2 pl-8 pr-8 rounded-3xl transition-all">
        {accountExists ? "Sign up " : "Sign in"}
      </button>
    </form>
  );
};

export default AuthForm;
