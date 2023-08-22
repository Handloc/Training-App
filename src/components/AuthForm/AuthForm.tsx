import { useForm } from "react-hook-form";
import AuthFormField from "./AuthFormField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { RootState } from "../../store";
import { ThunkDispatch } from "redux-thunk";
import { addUser } from "../../store/users-slice";
import { authActions } from "../../store/auth-slice";
import { useNavigate } from "react-router-dom";

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
  const [registerAccount, setRegisterAccount] = useState(false);
  const [accountError, setAccountError] = useState("");
  const navigate = useNavigate();

  const sendData = (userData: FormValues) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    fetch("http://localhost:3000/api/auth", requestOptions)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const getData = (userData: FormValues) => {
    let data: [];
    fetch("http://localhost:3000/api/auth")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        data = responseData.users;
        data.forEach((user: FormValues) => {
          if (userData.email === user.email) {
            emailInDatabase = true;
            targetPassword = user.password;
          }
        });
        if (registerAccount && !emailInDatabase) {
          dispatch(addUser(userData));
          setRegisterAccount(false);
          emailInDatabase = false;
          setAccountError("");
          targetPassword = "";
          reset();
        } else if (registerAccount && emailInDatabase) {
          setAccountError("E-mail address is already taken");
        } else if (!registerAccount && !emailInDatabase) {
          setAccountError("E-mail does not exists");
        } else if (!registerAccount && emailInDatabase) {
          if (userData.password === targetPassword) {
            dispatch(authActions.login(userData.email));
            setAccountError("");
            reset();
            navigate("/home");
          } else {
            setAccountError("Password is incorrect");
          }
        }
      });
  };

  const SubmitHandler = (userData: FormValues) => {
    if (registerAccount) {
      getData(userData);
      sendData(userData);
    } else {
      getData(userData);
    }
  };

  return (
    <form
      data-netlify="true"
      onSubmit={handleSubmit(SubmitHandler)}
      className="flex flex-col w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/5 absolute top-40 left-0 right-0 m-auto items-center border-2 border-zinc-500 shadow-xl rounded-md p-5 bg-[#2e3642] text-white"
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

      <button
        className="bg-[#F05454] hover:bg-[#30475E] hover:shadow-md text-white  mt-4 p-2 pl-8 pr-8 rounded-md transition-all duration-200"
        type="submit"
      >
        {registerAccount ? "Sign up " : "Sign in"}
      </button>
      {accountError && (
        <div className="mt-3 bg-red-200 p-2 border-2  shadow-red-500 border-red-600 rounded-md">
          <p className="text-red-600 font-[500]">{accountError}</p>
        </div>
      )}
    </form>
  );
};

export default AuthForm;
