import React from "react";

import { Column, Stack, Img, Text, Row, Button, List } from "components";

const YouThinkWeAreDonePage = () => {
  return (
    <>
      <Column className="font-prompt justify-start mx-[auto] w-[100%]">
        <Stack className="lg:h-[107px] xl:h-[134px] 2xl:h-[150px] 3xl:h-[180px] lg:ml-[283px] xl:ml-[354px] 2xl:ml-[398px] 3xl:ml-[478px] w-[40%]">
          <Img
            src="images/img_vector_122X122.png"
            className="absolute xl:h-[122px] 2xl:h-[137px] 3xl:h-[164px] lg:h-[97px] left-[0] top-[0] xl:w-[121px] 2xl:w-[136px] 3xl:w-[163px] lg:w-[96px]"
            alt="Vector"
          />
          <Text
            className="absolute font-poppins right-[3%] top-[29%] XAxis"
            variant="body1"
          >
            You Think We Are Done?!
          </Text>
          <Text
            className="absolute bottom-[0] right-[0] rowcoverletter_one"
            as="h4"
            variant="h4"
          >
            Check This Out
          </Text>
        </Stack>
        <Column className="items-center lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[100%]">
          <Column className="items-center justify-start w-[100%]">
            <Row className="items-center justify-between w-[100%]">
              <Column
                className="bg-cover bg-repeat items-center rounded-radius20 w-[57%]"
                style={{
                  backgroundImage: "url('images/img_video_534X740.png')",
                }}
              >
                <Column className="bg-gradient10  items-center justify-end lg:p-[189px] xl:p-[237px] 2xl:p-[266px] 3xl:p-[320px] rounded-radius20 w-[100%]">
                  <Button
                    className="flex lg:h-[56px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] items-center justify-center mt-[1px] rounded-radius50 lg:w-[55px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
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
              <Column className="items-center w-[40%]">
                <Row className="bg-gradient11  border border-blue_700 border-solid items-start justify-end lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[21px] rounded-bl-[0] rounded-br-[15px] rounded-tl-[0] rounded-tr-[15px] w-[100%]">
                  <Column className="justify-start my-[4px] rounded-radius40 w-[92%]">
                    <Text className="language2" variant="body5">
                      V-Market
                    </Text>
                    <Text
                      className="font-poppins lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] rowdeliverytime"
                      variant="body10"
                    >
                      The Mega Veterinary E-Com. Marketplace Of The Middle East
                    </Text>
                    <Button
                      className="capitalize font-extrabold font-prompt lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center w-[100%]"
                      shape="CircleBorder25"
                      size="lg"
                      variant="OutlineRedA701"
                    >
                      {" "}
                      Dicover V-Market
                    </Button>
                  </Column>
                  <Img
                    src="images/img_arrowdown_24X24.svg"
                    className="lg:h-[20px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] lg:w-[19px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[32px]"
                    alt="arrowdown"
                  />
                </Row>
                <Column className="items-center justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[93%]">
                  <List
                    className="gap-[0] min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="listvtube">
                      <Column className="items-center justify-start 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[7px] xl:mb-[9px] w-[21%]">
                        <Text className="columntheproud" variant="body5">
                          V-Lance
                        </Text>
                      </Column>
                      <Img
                        src="images/img_arrowright.svg"
                        className="arrowright_One1"
                        alt="arrowright One"
                      />
                    </Row>
                    <Row className="listvtube">
                      <Column className="items-center justify-start 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[7px] xl:mb-[9px] w-[22%]">
                        <Text className="columntheproud" variant="body5">
                          V-Events
                        </Text>
                      </Column>
                      <Img
                        src="images/img_arrowright.svg"
                        className="arrowright_One1"
                        alt="arrowright Two"
                      />
                    </Row>
                  </List>
                  <Row className="items-start justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] py-[4px] w-[100%]">
                    <Column className="items-center justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] w-[25%]">
                      <Text className="columntheproud" variant="body5">
                        V-Experts
                      </Text>
                    </Column>
                    <Img
                      src="images/img_arrowright.svg"
                      className="arrowright"
                      alt="arrowright Three"
                    />
                  </Row>
                  <Row className="items-start justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] py-[4px] w-[100%]">
                    <Column className="items-center justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] w-[31%]">
                      <Text className="columntheproud" variant="body5">
                        V-Marketing
                      </Text>
                    </Column>
                    <Img
                      src="images/img_arrowright.svg"
                      className="arrowright"
                      alt="arrowright Four"
                    />
                  </Row>
                  <Row className="items-start justify-between lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] py-[4px] w-[100%]">
                    <Column className="items-center justify-start mb-[4px] w-[25%]">
                      <Text className="columntheproud" variant="body5">
                        V-Agency
                      </Text>
                    </Column>
                    <Img
                      src="images/img_arrowright.svg"
                      className="arrowright"
                      alt="arrowright Five"
                    />
                  </Row>
                </Column>
              </Column>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default YouThinkWeAreDonePage;
