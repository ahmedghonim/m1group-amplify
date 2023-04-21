import { type FieldProps, Field, ErrorMessage } from "formik";
import React, { type FC, useState } from "react";
import View from "~/assets/svg/eye.svg";
import Hide from "~/assets/svg/cross-eye.svg";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  isForm?: boolean;
  type?: string;
  placeholder?: string;
  value?: any;
  label?: string;
  error?: boolean;
  StartComponent?: React.FC;
  EndComponent?: React.FC;
  isSearching?: boolean;
  ref?: any;
}
const Input: FC<InputProps> = ({ name, isForm = true, ...props }) => {
  return isForm ? (
    <Field name={name}>
      {({ field, form: { errors, touched } }: FieldProps) => {
        return (
          <div className="w-full">
            <CustomInput
              {...props}
              {...field}
              name={name}
              error={Boolean(Boolean(touched[name]) && errors[name])}
            />
            <div className="text-error-100 text-sm text-start">
              <ErrorMessage name={name} />
            </div>
          </div>
        );
      }}
    </Field>
  ) : (
    <CustomInput {...props} name={name} />
  );
};
export default Input;

const CustomInput: React.FC<InputProps> = ({
  EndComponent,
  StartComponent,
  error = false,
  isSearching,
  name,
  type = "text",
  placeholder,
  label = null,

  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const PasswordEye = () => (
    <button
      onClick={handleShowPassword}
      className="absolute bottom-[12px] z-10 block items-center justify-end px-[4px] focus:outline-none ltr:right-1 rtl:left-1"
    >
      {!showPassword ? (
        <View className="relative top-1 stroke-[#777E91]" />
      ) : (
        <Hide className="relative top-1 fill-[#777E91]" />
      )}
    </button>
  );

  const End = () => (
    <div
      className="absolute bottom-[10px] z-10 block items-center  justify-end px-[4px]  focus:outline-none ltr:right-1 rtl:left-1"
      id="end"
    >
      {EndComponent != null && <EndComponent />}
    </div>
  );

  const Start = () => (
    <div
      className="absolute  top-[9px] z-10 block items-center  justify-end px-[4px]  focus:outline-none ltr:left-1 rtl:right-1"
      id="start"
    >
      {StartComponent != null && <StartComponent />}
    </div>
  );
  const { className = "", required, ...otherProps } = props;
  return (
    <div className="relative w-full justify-between">
      {Boolean(label) && (
        <label
          htmlFor={name}
          className={
            "mb-2 block w-full text-sm font-normal text-dark-200 text-start dark:text-whit"
          }
        >
          {label}
          {required === true && <span className="text-red-500"> *</span>}
        </label>
      )}
      <Start />

      <End />
      <input
        onKeyDown={(evt) =>
          type === "number" &&
          ["e", "E", "+", "-"].includes(evt.key) &&
          evt.preventDefault()
        }
        required={required}
        name={name}
        id={name}
        placeholder={placeholder ?? ""}
        type={type === "password" && showPassword ? "text" : type}
        className={`border-dark-300 h-10 w-full rounded-md border 
         ${error ? "border-error-100" : ""} bg-transparent indent-4  ${
          type === "password" ? "pe-10" : ""
        } placeholder:text-dark-300 ${
          otherProps.disabled === true ? "cursor-not-allowed opacity-60" : ""
        } ${className}`}
        {...otherProps}
      />

      {type === "password" && <PasswordEye />}
    </div>
  );
};
