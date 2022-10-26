import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBluegray1021_2:
    "bg-white_A700 border border-bluegray_102 border-solid",
  OutlineBluegray102: "bg-white_A700 border border-bluegray_102 border-solid",
};
const shapes = { RoundedBorder2: "rounded-radius2" };
const sizes = { sm: "pt-[2px]" };

const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      errors = [],
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${shapes[shape] || ""} ${
              variants[variant] || ""
            } ${sizes[size] || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            {...restProps}
          />
          {label}
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

CheckBox.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder2"]),
  variant: PropTypes.oneOf(["OutlineBluegray1021_2", "OutlineBluegray102"]),
  size: PropTypes.oneOf(["sm"]),
};
CheckBox.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  shape: "RoundedBorder2",
  variant: "OutlineBluegray1021_2",
  size: "sm",
};

export { CheckBox };
