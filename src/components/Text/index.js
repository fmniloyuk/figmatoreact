import React from "react";
const variantClasses = {
  h1: "font-extrabold 3xl:text-[102px] lg:text-[60px] xl:text-[76px] 2xl:text-[85px] text-[90px]",
  h2: "font-semibold lg:text-[5px] xl:text-[6px] 2xl:text-[7px] text-[8px] 3xl:text-[9px]",
  h3: "font-extrabold lg:text-[47px] xl:text-[59px] 2xl:text-[66px] text-[70px] 3xl:text-[80px]",
  h4: "font-extrabold lg:text-[40px] xl:text-[50px] 2xl:text-[57px] text-[60px] 3xl:text-[68px]",
  h5: "font-extrabold lg:text-[32px] xl:text-[40px] 2xl:text-[45px] text-[48px] 3xl:text-[54px]",
  h6: "lg:text-[27px] xl:text-[33px] 2xl:text-[38px] text-[40px] 3xl:text-[45px]",
  body1:
    "lg:text-[23px] xl:text-[29px] 2xl:text-[33px] text-[35px] 3xl:text-[40px]",
  body2:
    "font-extrabold lg:text-[20px] xl:text-[25px] 2xl:text-[28px] text-[30px] 3xl:text-[34px]",
  body3:
    "font-black lg:text-[20px] xl:text-[25px] 2xl:text-[28px] text-[29.95px] 3xl:text-[34px]",
  body4:
    "font-medium lg:text-[18px] xl:text-[23px] 2xl:text-[25px] text-[27.26px] 3xl:text-[31px]",
  body5:
    "lg:text-[16px] xl:text-[21px] 2xl:text-[23px] text-[25px] 3xl:text-[28px]",
  body6:
    "font-semibold lg:text-[16px] xl:text-[20px] 2xl:text-[22px] text-[24px] 3xl:text-[27px]",
  body7:
    "lg:text-[13px] xl:text-[16px] 2xl:text-[19px] text-[20px] 3xl:text-[22px]",
  body8:
    "font-semibold lg:text-[12px] xl:text-[15px] 2xl:text-[17px] text-[18px] 3xl:text-[20px]",
  body9:
    "lg:text-[10px] xl:text-[13px] 2xl:text-[15px] text-[16px] 3xl:text-[18px]",
  body10:
    "xl:text-[11px] 2xl:text-[13px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
  body11:
    "xl:text-[11px] 2xl:text-[12px] text-[13px] 3xl:text-[14px] lg:text-[8px]",
  body12:
    "xl:text-[10px] 2xl:text-[11px] text-[12px] 3xl:text-[13px] lg:text-[8px]",
  body13:
    "text-[10px] 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
