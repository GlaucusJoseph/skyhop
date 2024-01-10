import { UseFormRegister, FieldValues } from "react-hook-form";
import { ClockIcon } from "../../assets/svg/ClockIcon";
import { FormValues } from "../../Interfaces";

interface SelectProps<TFormValues extends FieldValues> {
  register: UseFormRegister<TFormValues>;
  name: keyof TFormValues;
  label: string;
  options: Array<{ value: string; label: string }>;
}

const Select: React.FC<SelectProps<FormValues>> = ({
  register,
  name,
  label,
  options,
}) => {
  return (
    <div className="d-flex justify-content-between align-items-center mt-4">
      <div>
        <span className="special-text">{label}</span>
      </div>
      <div className="d-flex align-items-center">
        <select
          id={name}
          className="form-select special-text me-2"
          {...register(name)}
        >
          <option value="" disabled>
            Select Client
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ClockIcon width={"30"} height={"30"} />
      </div>
    </div>
  );
};

export default Select;
