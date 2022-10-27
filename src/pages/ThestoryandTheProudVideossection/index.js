import React from "react";

import { Column, Row, Button, Img, Text } from "components";

const ThestoryandTheProudVideossectionPage = () => {
  return (
    <>
      <Column className="font-prompt items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-start justify-between w-[100%]">
          <Column
            className="bg-cover bg-repeat items-center justify-start rounded-radius20 w-[66%]"
            style={{ backgroundImage: "url('images/img_video.png')" }}
          >
            <Column className="bg-gradient10  items-center justify-start lg:p-[198px] xl:p-[248px] 2xl:p-[279px] 3xl:p-[335px] rounded-radius20 w-[100%]">
              <Button
                className="flex lg:h-[56px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] items-center justify-center rounded-radius50 lg:w-[55px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
                size="3xlIcn"
                variant="icbOutlineWhiteA700"
              >
                <Img
                  src="images/img_arrowright_70X70.svg"
                  className="flex items-center justify-center lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px]"
                  alt="arrowright"
                />
              </Button>
            </Column>
          </Column>
          <Column className="items-center justify-start w-[32%]">
            <Row className="bg-gradient11  border border-blue_700 border-solid items-start justify-end lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[21px] rounded-bl-[0] rounded-br-[15px] rounded-tl-[0] rounded-tr-[15px] w-[100%]">
              <Column className="justify-start lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] pt-[3px] rounded-radius40 w-[93%]">
                <Column className="justify-start w-[84%]">
                  <Text className="language2" variant="body5">
                    The Story{" "}
                  </Text>
                  <Text
                    className="font-poppins lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] rowdeliverytime"
                    variant="body10"
                  >
                    Of a Dream that became a Tangible Truth
                  </Text>
                </Column>
                <Button
                  className="capitalize font-extrabold lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center w-[100%]"
                  shape="CircleBorder25"
                  size="lg"
                  variant="OutlineRedA701"
                >
                  Join Us
                </Button>
              </Column>
              <Img
                src="images/img_arrowdown_24X24.svg"
                className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] lg:w-[19px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[32px]"
                alt="arrowdown"
              />
            </Row>
            <Row className="bg-gray_50_33 items-center justify-between lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[21px] rounded-radius15 w-[100%]">
              <Column className="items-center lg:mb-[13px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[22px] ml-[4px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[33%]">
                <Text className="columntheproud" variant="body5">
                  The Proud
                </Text>
              </Column>
              <Img
                src="images/img_arrowright.svg"
                className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] lg:w-[19px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[32px]"
                alt="arrowright One"
              />
            </Row>
            <Row className="bg-gray_50_33 items-center justify-between lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[21px] rounded-radius15 w-[100%]">
              <Column className="items-center lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] ml-[4px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[54%]">
                <Text className="columntheproud" variant="body5">
                  The Opportunity
                </Text>
              </Column>
              <Img
                src="images/img_arrowright.svg"
                className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] lg:w-[19px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[32px]"
                alt="arrowright Two"
              />
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ThestoryandTheProudVideossectionPage;
