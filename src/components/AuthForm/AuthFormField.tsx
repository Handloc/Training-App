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
  console.log(errors);

  return (
    <div className="flex flex-col">
      {/* <label htmlFor={field_name}>{field_name}</label> */}
      <input
        type={type}
        className="border-b-2 border-cyan-600"
        placeholder={field_name}
        {...register(field_name, {
          required: {
            value: true,
            message: `You must enter your ${field_name}`,
          },
        })}
      />
      <p className="text-red-600">{errors[field_name]?.message}</p>
    </div>
  );
};

export default AuthFormField;
