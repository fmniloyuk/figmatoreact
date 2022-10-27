import React from "react";

import { Row, Img, Button } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Row className="bg-white_A700 border border-black_900_19 border-solid items-center lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
          <Row className="items-start mb-[1px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[99%]">
            <Img
              src="images/img_group_48X57.png"
              className="Group"
              alt="Group"
            />
            <Button
              className="2xl:ml-[1022px] 2xl:mt-[4px] 3xl:ml-[1226px] 3xl:mt-[5px] flex items-center justify-center lg:ml-[726px] lg:mt-[3px] text-center w-[11%] xl:ml-[909px] xl:mt-[4px]"
              leftIcon={
                <Img
                  src="images/img_search_16X16.svg"
                  className="text-center lg:w-[10px] lg:h-[11px] lg:mr-[6px] xl:w-[13px] xl:h-[14px] xl:mr-[8px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[9px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[11px]"
                  alt="search"
                />
              }
              shape="CircleBorder22"
              size="md"
              variant="OutlineBlue700"
            >
              <div className="bg-transparent capitalize font-prompt font-semibold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                Hey Roy!
              </div>
            </Button>
            <Button
              className="capitalize font-prompt font-semibold lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[7%]"
              shape="RoundedBorder19"
              size="md"
              variant="OutlineBlack90020"
            >
              Join Us
            </Button>
            <Img
              src="images/img_menu.svg"
              className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[34px]"
              alt="menu"
            />
          </Row>
        </Row>
      </header>
    </>
  );
};

export default Header;
