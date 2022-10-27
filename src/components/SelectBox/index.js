import { ErrorMessage } from "../ErrorMessage/index.js";
import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const selectOptions = [
  { value: "option1", label: "Option1" },
  { value: "option2", label: "Option2" },
  { value: "option3", label: "Option3" },
];

const variants = {
  OutlineBlack90020: "bg-white_A700 border border-black_900_20 border-solid",
  OutlineBlack900201_2: "bg-white_A700 border border-black_900_20 border-solid",
  FillGray300: "bg-gray_300",
};
const shapes = { RoundedBorder6: "rounded-radius6" };
const sizes = {
  sm: "px-[3px] py-[4px]",
  md: "lg:p-[4px] xl:p-[5px] 2xl:p-[6px] p-[7px] 3xl:p-[8px]",
  lg: "lg:pb-[12px] xl:pb-[16px] 2xl:pb-[18px] pb-[19px] 3xl:pb-[21px] lg:pt-[10px] xl:pt-[13px] 2xl:pt-[15px] pt-[16px] 3xl:pt-[18px] lg:px-[10px] xl:px-[13px] 2xl:px-[15px] px-[16px] 3xl:px-[18px]",
  xl: "lg:p-[10px] xl:p-[12px] 2xl:p-[14px] p-[15px] 3xl:p-[17px]",
  "2xl":
    "2xl:pb-[10px] pb-[11px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[9px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] pt-[18px] 3xl:pt-[20px] 2xl:px-[10px] px-[11px] 3xl:px-[12px] lg:px-[7px] xl:px-[9px]",
};

const SelectBox = React.forwardRef(
  (
    {
      children,
      placeholder = "Select",
      className,
      options = selectOptions,
      isSearchable = false,
      placeholderClassName = "",
      isMulti = false,
      onChange,
      value,
      errors = [],
      indicator,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    const [selectedVal, setSelectedVal] = React.useState(value);

    const handleChange = (data) => {
      setSelectedVal(data);
      if (isMulti) {
        onChange?.(data?.map((d) => d.value) || []);
      } else {
        onChange?.(data?.value);
      }
    };
    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""} common-select`}
          placeholder={
            <div className={placeholderClassName}>{placeholder}</div>
          }
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          value={selectedVal}
          onChange={handleChange}
          styles={{
            container: (provided) => ({
              ...provided,
              zIndex: 0,
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              "&:hover": {
                border: "0 !important",
              },
            }),
            option: (provided, state) => ({
              ...provided,
              color: state.isSelected && "#fafafa",
              backgroundColor: state.isSelected && "#016dea",
              "&:hover": { backgroundColor: "#016dea", color: "#ffffff" },
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
              margin: "0",
              padding: "0",
              // height: "0",
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: "0",
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              paddingTop: "0px",
              paddingBottom: "0px",
            }),
            clearIndicator: (provided) => ({
              ...provided,
              padding: "0",
            }),
            multiValue: (provided) => ({
              ...provided,
              margin: "0",
            }),
            multiValueLabel: (provided) => ({
              ...provided,
              padding: "0",
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

SelectBox.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  placeholderClassName: PropTypes.string,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder6"]),
  variant: PropTypes.oneOf([
    "OutlineBlack90020",
    "OutlineBlack900201_2",
    "FillGray300",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl"]),
};
SelectBox.defaultProps = {
  placeholder: "Select",
  className: "",
  isSearchable: false,
  placeholderClassName: "",
  isMulti: false,
  value: "",
  shape: "",
  variant: "",
  size: "2xl",
  options: selectOptions,
  onChange: () => {},
};
export { SelectBox };
