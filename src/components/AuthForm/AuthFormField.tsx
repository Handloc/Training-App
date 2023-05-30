import { useForm } from "react-hook-form";

const AuthFormField: React.FC<{ field_name: string; type: string }> = ({
  field_name,
  type,
}) => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <label htmlFor={field_name}>{field_name}</label>
      <input
        type={type}
        {...register(field_name, {
          required: { value: true, message: `${field_name} field is required` },
        })}
      />
      <p>{errors.field_name?.message?.toString()}</p>
    </div>
  );
};

export default AuthFormField;
