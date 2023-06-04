import {
  UseFormRegister,
  FieldValues,
  DeepMap,
  FieldError,
} from "react-hook-form";

import { FormValues } from "./AuthForm";
export type FieldType = "email" | "password" | "password_2";

const AuthFormField: React.FC<{
  field_name: string;
  type: string;
  id: FieldType;
  register: UseFormRegister<FormValues>;
  errors: DeepMap<FieldValues, FieldError>;
}> = ({ field_name, type, register, errors, id }) => {
  return (
    <div className="flex flex-col w-4/5 mb-3">
      <input
        type={type}
        id={id}
        className={`${
          errors[id]?.message ? "border-red-600" : "border-amber-400"
        } border-b-2 bg-zinc-600 valid:bg-zinc-600 focus:outline-none focus:border-fuchsia-600`}
        placeholder={field_name}
        {...register(id, {
          required: {
            value: true,
            message: `${field_name} field cannot be empty`,
          },
        })}
      />
      <p className="text-red-600 text-center">{errors[id]?.message}</p>
    </div>
  );
};

export default AuthFormField;
