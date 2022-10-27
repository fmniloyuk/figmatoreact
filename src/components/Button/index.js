import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder4: "rounded-radius4",
  CircleBorder25: "rounded-radius25",
  RoundedBorder6: "rounded-radius677",
  CircleBorder12: "rounded-radius12",
  CircleBorder22: "rounded-radius22",
  RoundedBorder14: "rounded-radius145",
  RoundedBorder19: "rounded-radius195",
  CircleBorder17: "rounded-radius17",
  CustomBorderLR40:
    "rounded-bl-[0] rounded-br-[40px] rounded-tl-[0] rounded-tr-[40px]",
  icbCircleBorder15: "rounded-radius15",
  icbCircleBorder35: "rounded-radius35",
  icbCircleBorder25: "rounded-radius25",
  icbRoundedBorder22: "rounded-radius225",
  icbCircleBorder30: "rounded-radius30",
  icbCircleBorder11: "rounded-radius11",
  icbCircleBorder20: "rounded-radius20",
  icbRoundedBorder3: "rounded-radius3",
  icbRoundedBorder37: "rounded-radius375",
  icbRoundedBorder6: "rounded-radius6",
};
const variants = {
  FillBlue700: "bg-blue_700 text-white_A700",
  OutlineBlack90020: "bg-gradient  shadow-bs text-white_A700",
  FillRedA700cc: "bg-red_A700_cc text-white_A700",
  OutlineWhiteA700:
    "bg-blue_700 border border-solid border-white_A700 text-white_A700",
  OutlineBlack9000f:
    "bg-gray_203 border border-black_900_0f border-solid text-black_900",
  GradientDeeporangeA400Pink900: "bg-gradient  text-white_A700",
  GradientBlue700Indigo900: "bg-gradient4  text-white_A700",
  FillWhiteA700: "bg-white_A700",
  OutlineBlack90033: "bg-blue_700 shadow-bs2 text-white_A700",
  OutlineBlue700:
    "bg-gradient4  border border-blue_700 border-solid text-white_A700",
  GradientGray501Bluegray400: "bg-gradient3  text-white_A700",
  GradientRedA701Blue700: "bg-gradient2  text-white_A700",
  GradientBlue700RedA701: "bg-gradient1  text-white_A700",
  OutlineRedA701:
    "bg-white_A700 border border-red_A701 border-solid shadow-bs text-red_A701",
  OutlineBluegray400:
    "bg-bluegray_400 border border-bluegray_400 border-solid text-white_A700",
  OutlineGreenA700:
    "bg-white_A700 border border-green_A700 border-solid text-green_A700",
  GradientTeal800GreenA700: "bg-gradient5  text-white_A700",
  OutlineBlue7001_2:
    "bg-white_A700 border border-blue_700 border-solid text-blue_700",
  OutlineGreenA7001_2: "border border-green_A700 border-solid text-green_A700",
  OutlineBlack900201_2: "bg-gray_100 border border-black_900_20 border-solid",
  OutlineGray501: "border border-gray_501 border-solid text-gray_501",
  OutlineBluegray4001_2:
    "bg-white_A700 border border-bluegray_400 border-solid text-bluegray_400",
  OutlineRedA7011_2: "border border-red_A701 border-solid",
  OutlineBlack9000c:
    "bg-gray_101 border border-black_900_0c border-solid text-bluegray_400",
  OutlineGreen700: "border border-green_700 border-solid text-green_700",
  OutlineWhiteA7001_2:
    "bg-bluegray_400 border border-solid border-white_A700 shadow-bs",
  FillBluegray400: "bg-bluegray_400 text-white_A700",
  FillRedA7007f: "bg-red_A700_7f text-white_A700",
  OutlineBlack9000c1_2:
    "bg-gray_100 border border-black_900_0c border-solid text-bluegray_400",
  icbOutlineBlue700: "border border-blue_700 border-solid",
  icbOutlineWhiteA700:
    "bg-blue_700_b2 border-bw5 border-solid border-white_A700 shadow-bs4",
  icbOutlineBlack90020: "bg-gray_100 border border-black_900_20 border-solid",
  icbOutlineBlack90033:
    "bg-white_A700 outline outline-[1px] outline-black_900_33",
  icbOutlineBlack900201_2:
    "bg-red_A700_19 border border-black_900_20 border-solid",
  icbOutlineWhiteA7001_2:
    "bg-blue_700_cc border-bw143 border-solid border-white_A700 shadow-bs1",
  icbOutlineGreenA700: "border border-green_A700 border-solid",
  icbFillBlue700: "bg-blue_700",
  icbFillRedA701: "bg-red_A701",
  icbOutlineBlue7001_2: "bg-gray_101 border border-blue_700 border-solid",
  icbOutlineBlack900: "bg-blue_700_cc shadow-bs1",
  icbOutlineBlack90026: "bg-gray_501 border border-black_900_26 border-solid",
  icbFillGray101: "bg-gray_101",
  icbOutlineBlack900331_2: "bg-blue_700_cc shadow-bs2",
  icbFillRed800: "bg-red_800",
  icbOutlineBlack9000c:
    "bg-white_A700 outline outline-[1px] outline-black_900_0c",
  icbOutlineBlack9000c1_2:
    "bg-gray_50 outline outline-[1px] outline-black_900_0c",
  icbOutlineBlack900261_2: "bg-bluegray_100 shadow-bs3",
  icbFillGray52: "bg-gray_52",
  icbOutlineBluegray400:
    "bg-white_A700 border border-bluegray_400 border-solid",
  icbFillBluegray101: "bg-bluegray_101",
};
const sizes = {
  sm: "lg:p-[4px] xl:p-[5px] 2xl:p-[6px] p-[7px] 3xl:p-[8px]",
  md: "p-[10px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px]",
  lg: "lg:p-[10px] xl:p-[12px] 2xl:p-[14px] p-[15px] 3xl:p-[17px]",
  xl: "lg:p-[13px] xl:p-[16px] 2xl:p-[19px] p-[20px] 3xl:p-[22px]",
  smIcn: "p-[3px]",
  mdIcn: "lg:p-[4px] 2xl:p-[5px] xl:p-[5px] p-[6px]",
  lgIcn: "p-[10px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px]",
  xlIcn: "lg:p-[10px] xl:p-[12px] 2xl:p-[14px] p-[15px] 3xl:p-[17px]",
  "2xlIcn": "lg:p-[12px] xl:p-[15px] 2xl:p-[17px] p-[18px] 3xl:p-[20px]",
  "3xlIcn": "lg:p-[15px] xl:p-[19px] 2xl:p-[21px] p-[23px] 3xl:p-[26px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder4",
    "CircleBorder25",
    "RoundedBorder6",
    "CircleBorder12",
    "CircleBorder22",
    "RoundedBorder14",
    "RoundedBorder19",
    "CircleBorder17",
    "CustomBorderLR40",
    "icbCircleBorder15",
    "icbCircleBorder35",
    "icbCircleBorder25",
    "icbRoundedBorder22",
    "icbCircleBorder30",
    "icbCircleBorder11",
    "icbCircleBorder20",
    "icbRoundedBorder3",
    "icbRoundedBorder37",
    "icbRoundedBorder6",
  ]),
  variant: PropTypes.oneOf([
    "FillBlue700",
    "OutlineBlack90020",
    "FillRedA700cc",
    "OutlineWhiteA700",
    "OutlineBlack9000f",
    "GradientDeeporangeA400Pink900",
    "GradientBlue700Indigo900",
    "FillWhiteA700",
    "OutlineBlack90033",
    "OutlineBlue700",
    "GradientGray501Bluegray400",
    "GradientRedA701Blue700",
    "GradientBlue700RedA701",
    "OutlineRedA701",
    "OutlineBluegray400",
    "OutlineGreenA700",
    "GradientTeal800GreenA700",
    "OutlineBlue7001_2",
    "OutlineGreenA7001_2",
    "OutlineBlack900201_2",
    "OutlineGray501",
    "OutlineBluegray4001_2",
    "OutlineRedA7011_2",
    "OutlineBlack9000c",
    "OutlineGreen700",
    "OutlineWhiteA7001_2",
    "FillBluegray400",
    "FillRedA7007f",
    "OutlineBlack9000c1_2",
    "icbOutlineBlue700",
    "icbOutlineWhiteA700",
    "icbOutlineBlack90020",
    "icbOutlineBlack90033",
    "icbOutlineBlack900201_2",
    "icbOutlineWhiteA7001_2",
    "icbOutlineGreenA700",
    "icbFillBlue700",
    "icbFillRedA701",
    "icbOutlineBlue7001_2",
    "icbOutlineBlack900",
    "icbOutlineBlack90026",
    "icbFillGray101",
    "icbOutlineBlack900331_2",
    "icbFillRed800",
    "icbOutlineBlack9000c",
    "icbOutlineBlack9000c1_2",
    "icbOutlineBlack900261_2",
    "icbFillGray52",
    "icbOutlineBluegray400",
    "icbFillBluegray101",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
    "2xlIcn",
    "3xlIcn",
  ]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
