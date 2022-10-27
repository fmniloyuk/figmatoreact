import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBlack90020: "bg-white_A700 border border-black_900_20 border-solid",
  OutlineBlack9000c: "bg-gray_101 border border-black_900_0c border-solid",
  OutlineBlack90011: "bg-white_A700 border border-black_900_11 border-solid",
};
const shapes = {
  RoundedBorder6: "rounded-radius6",
  CustomBorderTL10:
    "rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px]",
  RoundedBorder22: "rounded-radius225",
  RoundedBorder17: "rounded-radius175",
};
const sizes = {
  sm: "p-[10px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px]",
  md: "xl:p-[11px] 2xl:p-[12px] p-[13px] 3xl:p-[14px] lg:p-[8px]",
  lg: "lg:p-[10px] xl:p-[12px] 2xl:p-[14px] p-[15px] 3xl:p-[17px]",
  xl: "lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] pb-[8px] 3xl:pb-[9px] lg:pt-[11px] xl:pt-[14px] 2xl:pt-[16px] pt-[17px] 3xl:pt-[19px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] px-[8px] 3xl:px-[9px]",
  "2xl":
    "2xl:pb-[10px] pb-[11px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[9px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] pt-[18px] 3xl:pt-[20px] 2xl:px-[10px] px-[11px] 3xl:px-[12px] lg:px-[7px] xl:px-[9px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder6",
    "CustomBorderTL10",
    "RoundedBorder22",
    "RoundedBorder17",
  ]),
  variant: PropTypes.oneOf([
    "OutlineBlack90020",
    "OutlineBlack9000c",
    "OutlineBlack90011",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder6",
  variant: "OutlineBlack90020",
  size: "lg",
};

export { Input };
