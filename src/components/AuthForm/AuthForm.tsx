import { useForm } from "react-hook-form";
import AuthFormField from "./AuthFormField";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { ThunkDispatch } from "redux-thunk";
import { addUser } from "../../store/users-slice";
import { authActions } from "../../store/auth-slice";

export type FormValues = {
  email: string;
  password: string;
  password_2: string;
};

const AuthForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      password_2: "",
    },
  });

  let emailInDatabase = false;
  let targetPassword = "";
  const dispatch = useDispatch<ThunkDispatch<RootState, undefined, any>>();
  const usersList = useSelector((state: RootState) => state.users.users);
  const [registerAccount, setRegisterAccount] = useState(false);
  const [accountError, setAccountError] = useState("");

  const HandlerSubmit = async (formData: FormValues) => {
    usersList.map((user) => {
      if (formData.email === user.email) {
        emailInDatabase = true;
        targetPassword = user.password;
      }
    });

    if (registerAccount && !emailInDatabase) {
      dispatch(addUser(formData));
      dispatch(authActions.login());
      emailInDatabase = false;
      setAccountError("");
      targetPassword = "";
      reset();
    } else if (registerAccount && emailInDatabase) {
      setAccountError("E-mail address is already taken!");
    } else if (!registerAccount && !emailInDatabase) {
      setAccountError("E-mail does not exists");
    } else if (!registerAccount && emailInDatabase) {
      if (formData.password === targetPassword) {
        dispatch(authActions.login());
      } else {
        setAccountError("Password is incorrect");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(HandlerSubmit)}
      className="flex flex-col w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/5 m-auto mt-40 items-center border-2 border-zinc-500 shadow-xl rounded-3xl p-5 bg-zinc-600 text-white"
    >
      <AuthFormField
        field_name="E-mail"
        id="email"
        type="text"
        register={register}
        errors={errors}
        validation_conditions={{
          email: {
            condition: (value) =>
              /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value),
            errorMessage: "Invalid email adress",
          },
        }}
      />

      <AuthFormField
        field_name="Password"
        id="password"
        type="password"
        register={register}
        errors={errors}
        validation_conditions={{
          password: {
            condition: (value) =>
              /^(?=.*[A-Z])(?=.*[\W_])(?=.{8,})/.test(value),
            errorMessage:
              "Password must contains at least one uppercase letter, at least one special character and be at least 8 characters long",
          },
        }}
      />

      {registerAccount && (
        <AuthFormField
          field_name="Confirm password"
          id="password_2"
          type="password"
          register={register}
          errors={errors}
          validation_conditions={{
            password_2: {
              condition: (value, formValues) => value === formValues.password,
              errorMessage: "Passwords does not match",
            },
          }}
        />
      )}
      <p
        onClick={() => {
          setRegisterAccount(!registerAccount);
          setAccountError("");
          reset();
        }}
        className="text-zinc-400 hover:text-white transition-all cursor-pointer"
      >
        {registerAccount
          ? "Sign in into existing account"
          : "Create new account"}
      </p>

      <button className="bg-amber-400 hover:bg-fuchsia-600 text-black font-bold mt-4 p-2 pl-8 pr-8 rounded-3xl transition-all">
        {registerAccount ? "Sign up " : "Sign in"}
      </button>
      {accountError && (
        <div className="mt-3 bg-red-300 p-2 border-2 border-red-600 rounded-xl">
          <p className="text-red-600 font-bold">{accountError}</p>
        </div>
      )}
    </form>
  );
};

export default AuthForm;
