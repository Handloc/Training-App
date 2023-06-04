import {
  UseFormRegister,
  FieldValues,
  DeepMap,
  FieldError,
} from "react-hook-form";

const AuthFormField: React.FC<{
  field_name: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  errors: DeepMap<FieldValues, FieldError>;
}> = ({ field_name, type, register, errors }) => {
  return (
    <div className="flex flex-col w-4/5 mb-3">
      <input
        type={type}
        className={`${
          errors[field_name]?.message ? "border-red-600" : "border-amber-400"
        } border-b-2 bg-zinc-600 valid:bg-zinc-600 focus:outline-none focus:border-fuchsia-600`}
        placeholder={field_name}
        {...register(field_name, {
          required: {
            value: true,
            message: `${field_name} field cannot be empty`,
          },
        })}
      />
      <p className="text-red-600 text-center">{errors[field_name]?.message}</p>
    </div>
  );
};

export default AuthFormField;
