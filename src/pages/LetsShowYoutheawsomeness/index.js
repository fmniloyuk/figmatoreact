import React from "react";

import { Column, Stack, Img, Text, Row, Button, List } from "components";

const LetsShowYoutheawsomenessPage = () => {
  return (
    <>
      <Column className="font-prompt items-center justify-end mx-[auto] lg:pt-[36px] xl:pt-[45px] 2xl:pt-[51px] 3xl:pt-[61px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Stack className="lg:h-[121px] xl:h-[151px] 2xl:h-[170px] 3xl:h-[204px] w-[43%]">
            <Img
              src="images/img_vector_122X122.png"
              className="absolute xl:h-[122px] 2xl:h-[137px] 3xl:h-[164px] lg:h-[97px] left-[9%] top-[0] xl:w-[121px] 2xl:w-[136px] 3xl:w-[163px] lg:w-[96px]"
              alt="Vector"
            />
            <Text
              className="absolute bottom-[0] rowcoverletter_one"
              as="h4"
              variant="h4"
            >
              The AWESOMNESS!
            </Text>
            <Text
              className="absolute capitalize font-medium font-poppins inset-x-[0] mx-[auto] text-black_900 top-[31%] w-[max-content]"
              variant="body1"
            >
              Let's Show You
            </Text>
          </Stack>
          <Row className="items-center justify-between lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[100%]">
            <Column className="items-center lg:pb-[12px] xl:pb-[15px] 2xl:pb-[17px] 3xl:pb-[21px] w-[40%]">
              <Row className="bg-gradient11  border border-blue_700 border-solid items-start justify-end lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[21px] rounded-bl-[0] rounded-br-[15px] rounded-tl-[0] rounded-tr-[15px] w-[100%]">
                <Column className="justify-start my-[4px] rounded-radius40 w-[92%]">
                  <Text className="language2" variant="body5">
                    V-Guide{" "}
                  </Text>
                  <Text
                    className="font-poppins lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] rowdeliverytime"
                    variant="body10"
                  >
                    The Mega Veterinary Directory Of The Middle East
                  </Text>
                  <Button
                    className="capitalize font-extrabold font-prompt lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center w-[100%]"
                    shape="CircleBorder25"
                    size="lg"
                    variant="OutlineRedA701"
                  >
                    {" "}
                    Dicover V-Guide
                  </Button>
                </Column>
                <Img
                  src="images/img_arrowdown_24X24.svg"
                  className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] arrowright_One1"
                  alt="arrowdown"
                />
              </Row>
              <Column className="items-center justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[93%]">
                <Row className="items-start justify-between py-[4px] w-[100%]">
                  <Column className="items-center justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] w-[17%]">
                    <Text className="columntheproud" variant="body5">
                      V-Blog
                    </Text>
                  </Column>
                  <Img
                    src="images/img_arrowright.svg"
                    className="arrowright"
                    alt="arrowright"
                  />
                </Row>
                <Row className="items-start justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] py-[1px] w-[100%]">
                  <Column className="items-center justify-start 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[7px] xl:mb-[9px] w-[22%]">
                    <Text className="columntheproud" variant="body5">
                      V-Nation{" "}
                    </Text>
                  </Column>
                  <Img
                    src="images/img_arrowright.svg"
                    className="arrowright_One1"
                    alt="arrowright One"
                  />
                </Row>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="listvtube">
                    <Column className="items-center justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] w-[18%]">
                      <Text className="columntheproud" variant="body5">
                        V-Tube
                      </Text>
                    </Column>
                    <Img
                      src="images/img_arrowright.svg"
                      className="arrowright_One1"
                      alt="arrowright Two"
                    />
                  </Row>
                  <Row className="listvtube">
                    <Column className="items-center justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] w-[17%]">
                      <Text className="columntheproud" variant="body5">
                        V-Jobs
                      </Text>
                    </Column>
                    <Img
                      src="images/img_arrowright.svg"
                      className="arrowright_One1"
                      alt="arrowright Three"
                    />
                  </Row>
                </List>
                <Row className="items-start justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] py-[4px] w-[100%]">
                  <Column className="items-center justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] w-[25%]">
                    <Text className="columntheproud" variant="body5">
                      V-College
                    </Text>
                  </Column>
                  <Img
                    src="images/img_arrowright.svg"
                    className="arrowright"
                    alt="arrowright Four"
                  />
                </Row>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center rounded-radius20 w-[57%]"
              style={{ backgroundImage: "url('images/img_video_534X740.png')" }}
            >
              <Column className="bg-gradient10  items-center justify-start lg:p-[184px] xl:p-[230px] 2xl:p-[259px] 3xl:p-[310px] rounded-radius20 w-[100%]">
                <Button
                  className="flex lg:h-[56px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] items-center justify-center rounded-radius50 lg:w-[55px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
                  size="3xlIcn"
                  variant="icbOutlineWhiteA700"
                >
                  <Img
                    src="images/img_arrowright_70X70.svg"
                    className="flex items-center justify-center lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px]"
                    alt="arrowright Five"
                  />
                </Button>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default LetsShowYoutheawsomenessPage;
