import {
  UseFormRegister,
  FieldValues,
  DeepMap,
  FieldError,
  Validate,
} from "react-hook-form";

import { FormValues } from "./AuthForm";
export type FieldType = "email" | "password" | "password_2";
interface ValidationConditions {
  [key: string]: {
    condition: Validate<string, FormValues>;
    errorMessage: string;
  };
}

const AuthFormField: React.FC<{
  field_name: string;
  type: string;
  id: FieldType;
  register: UseFormRegister<FormValues>;
  errors: DeepMap<FieldValues, FieldError>;
  validation_conditions: ValidationConditions;
}> = ({ field_name, type, register, errors, id, validation_conditions }) => {
  const { condition, errorMessage } = validation_conditions[id];
  return (
    <div className="flex flex-col w-4/5 mb-3">
      <input
        type={type}
        id={id}
        className={`${
          errors[id] ? "border-red-600" : "border-amber-400"
        } border-b-2 bg-zinc-600 valid:bg-zinc-6010 focus:outline-none focus:border-fuchsia-600`}
        placeholder={field_name}
        {...register(id, {
          required: {
            value: true,
            message: `"${field_name}" field cannot be empty`,
          },
          validate: condition,
        })}
      />
      <p className="text-red-600 text-center">
        {errors[id]?.type === "validate" ? errorMessage : errors[id]?.message}
      </p>
    </div>
  );
};

export default AuthFormField;
