import React from "react";

import {
  Column,
  Stack,
  Text,
  Button,
  Img,
  PagerIndicator,
  Row,
  List,
  Line,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const HomepagePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-prompt items-center justify-start mx-[auto] pt-[2px] w-[100%]">
        <Header className="w-[100%]" />
        <Column className="items-center justify-start w-[100%]">
          <Column
            className="bg-cover bg-repeat items-center justify-start w-[100%]"
            style={{ backgroundImage: "url('images/img_banner.png')" }}
          >
            <Column className="bg-black_900_90 items-center justify-end lg:py-[20px] xl:py-[25px] 2xl:py-[28px] 3xl:py-[34px] w-[100%]">
              <Column className="items-center justify-start lg:mt-[125px] xl:mt-[156px] 2xl:mt-[176px] 3xl:mt-[211px] w-[100%]">
                <Stack className="lg:h-[216px] xl:h-[270px] 2xl:h-[304px] 3xl:h-[364px] w-[100%]">
                  <Column className="absolute justify-start left-[7%] rounded-radius40 w-[56%]">
                    <Text
                      className="capitalize font-prompt text-red_A701 text-shadow-ts w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Welcome To V-Verse{" "}
                    </Text>
                    <Text
                      className="capitalize font-normal font-poppins leading-[140.00%] ml-[3px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[32px] not-italic text-white_A700 w-[69%]"
                      variant="body1"
                    >
                      The First Mega Platform For the Veterinary Industry
                      community in the Middle East
                    </Text>
                    <Button
                      className="capitalize font-extrabold font-prompt lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[13px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px] text-center w-[19%]"
                      shape="CircleBorder25"
                      size="lg"
                      variant="OutlineBlack90020"
                    >
                      Join Us
                    </Button>
                  </Column>
                  <Img
                    src="images/img_navigation.svg"
                    className="absolute lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] inset-y-[42%] w-[100%]"
                    alt="navigation"
                  />
                </Stack>
                <PagerIndicator
                  className="h-[5px] lg:mt-[121px] xl:mt-[152px] 2xl:mt-[171px] 3xl:mt-[205px] w-[max-content]"
                  count={5}
                  activeCss="inline-block cursor-pointer w-[20px] h-[5px] bg-red_A701 rounded-radius2"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer w-[20px] h-[5px] bg-white_A700_66 rounded-radius2"
                  selectedWrapperCss="2xl:mx-[2px] 3xl:mx-[2px] inline-block lg:mx-[1px] xl:mx-[2px]"
                  unselectedWrapperCss="2xl:mx-[2px] 3xl:mx-[2px] inline-block lg:mx-[1px] xl:mx-[2px]"
                />
              </Column>
            </Column>
          </Column>
          <Column className="items-center justify-start lg:mt-[54px] xl:mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] lg:pr-[4px] 2xl:pr-[5px] xl:pr-[5px] 3xl:pr-[6px] lg:pt-[4px] 2xl:pt-[5px] xl:pt-[5px] 3xl:pt-[6px] w-[85%]">
            <Stack className="3xl:h-[108px] lg:h-[64px] xl:h-[80px] 2xl:h-[90px] w-[38%]">
              <Text
                className="absolute capitalize inset-x-[0] mx-[auto] text-gray_200 top-[0] w-[max-content]"
                as="h1"
                variant="h1"
              >
                7 Videos
              </Text>
              <Text
                className="absolute bottom-[0] capitalize text-black_900 w-[auto]"
                variant="body2"
              >
                To Change The Rest Of Your Life
              </Text>
            </Stack>
            <Row className="font-poppins items-start justify-between lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[97%]">
              <Column className="bg-gradient6  items-center justify-start lg:p-[153px] xl:p-[191px] 2xl:p-[215px] 3xl:p-[258px] rounded-radius20 w-[75%]">
                <Button
                  className="flex lg:h-[48px] xl:h-[60px] 2xl:h-[67px] 3xl:h-[81px] items-center justify-center rounded-radius50 lg:w-[47px] xl:w-[59px] 2xl:w-[66px] 3xl:w-[80px]"
                  size="3xlIcn"
                  variant="icbOutlineWhiteA700"
                >
                  <Img
                    src="images/img_arrowright_70X70.svg"
                    className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px]"
                    alt="arrowright"
                  />
                </Button>
              </Column>
              <List
                className="gap-[0] min-h-[auto] mt-[3px] w-[22%]"
                orientation="vertical"
              >
                <Row className="videolist">
                  <Button
                    className="flex lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                    size="lgIcn"
                    variant="icbOutlineBlack90020"
                  >
                    <Img
                      src="images/img_group_48X57.png"
                      className="flex items-center justify-center"
                      alt="videothumb"
                    />
                  </Button>
                  <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[8px] w-[76%]">
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body9"
                    >
                      1-The Why?!
                    </Text>
                    <Row className="items-center w-[30%]">
                      <Img
                        src="images/img_clock.svg"
                        className="clock"
                        alt="clock"
                      />
                      <Text className="rowclock" variant="body12">
                        10 Min.
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Row className="videolist">
                  <Button
                    className="flex lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                    size="lgIcn"
                    variant="icbOutlineBlack90020"
                  >
                    <Img
                      src="images/img_group_48X57.png"
                      className="flex items-center justify-center"
                      alt="videothumb One"
                    />
                  </Button>
                  <Column className="lg:pr-[3px] 2xl:pr-[4px] xl:pr-[4px] 3xl:pr-[5px] lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] w-[76%]">
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body9"
                    >
                      2-The Who?!
                    </Text>
                    <Row className="items-center mr-[auto] mt-[4px] w-[30%]">
                      <Img
                        src="images/img_clock.svg"
                        className="clock"
                        alt="clock One"
                      />
                      <Text className="rowclock" variant="body12">
                        10 Min.
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Row className="videolist">
                  <Button
                    className="flex lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                    size="lgIcn"
                    variant="icbOutlineBlack90020"
                  >
                    <Img
                      src="images/img_group_48X57.png"
                      className="flex items-center justify-center"
                      alt="videothumb Two"
                    />
                  </Button>
                  <Column className="lg:pr-[3px] 2xl:pr-[4px] xl:pr-[4px] 3xl:pr-[5px] lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] w-[76%]">
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body9"
                    >
                      3-The What?!
                    </Text>
                    <Row className="items-center mr-[auto] mt-[4px] w-[30%]">
                      <Img
                        src="images/img_clock.svg"
                        className="clock"
                        alt="clock Two"
                      />
                      <Text className="rowclock" variant="body12">
                        10 Min.
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Row className="videolist">
                  <Button
                    className="flex lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                    size="lgIcn"
                    variant="icbOutlineBlack90020"
                  >
                    <Img
                      src="images/img_group_48X57.png"
                      className="flex items-center justify-center"
                      alt="videothumb Three"
                    />
                  </Button>
                  <Column className="lg:pr-[3px] 2xl:pr-[4px] xl:pr-[4px] 3xl:pr-[5px] lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] w-[76%]">
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body9"
                    >
                      4-The How?!
                    </Text>
                    <Row className="items-center mr-[auto] mt-[4px] w-[30%]">
                      <Img
                        src="images/img_clock.svg"
                        className="clock"
                        alt="clock Three"
                      />
                      <Text className="rowclock" variant="body12">
                        10 Min.
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Row className="videolist">
                  <Button
                    className="flex lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                    size="lgIcn"
                    variant="icbOutlineBlack90020"
                  >
                    <Img
                      src="images/img_group_48X57.png"
                      className="flex items-center justify-center"
                      alt="videothumb Four"
                    />
                  </Button>
                  <Column className="lg:pr-[3px] 2xl:pr-[4px] xl:pr-[4px] 3xl:pr-[5px] lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] w-[76%]">
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body9"
                    >
                      5-The Vs
                    </Text>
                    <Row className="items-center mr-[auto] mt-[4px] w-[30%]">
                      <Img
                        src="images/img_clock.svg"
                        className="clock"
                        alt="clock Four"
                      />
                      <Text className="rowclock" variant="body12">
                        10 Min.
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Row className="videolist">
                  <Button
                    className="flex lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                    size="lgIcn"
                    variant="icbOutlineBlack90020"
                  >
                    <Img
                      src="images/img_group_48X57.png"
                      className="flex items-center justify-center"
                      alt="videothumb Five"
                    />
                  </Button>
                  <Column className="lg:pr-[4px] 2xl:pr-[5px] xl:pr-[5px] 3xl:pr-[6px] lg:pt-[4px] 2xl:pt-[5px] xl:pt-[5px] 3xl:pt-[6px] w-[76%]">
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body9"
                    >
                      6-The Opportunity
                    </Text>
                    <Row className="items-center w-[30%]">
                      <Img
                        src="images/img_clock.svg"
                        className="clock"
                        alt="clock Five"
                      />
                      <Text className="rowclock" variant="body12">
                        10 Min.
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Row className="videolist">
                  <Button
                    className="flex lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                    size="lgIcn"
                    variant="icbOutlineBlack90020"
                  >
                    <Img
                      src="images/img_group_48X57.png"
                      className="flex items-center justify-center"
                      alt="videothumb Six"
                    />
                  </Button>
                  <Column className="pr-[4px] pt-[4px] w-[76%]">
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body9"
                    >
                      7-The Action
                    </Text>
                    <Row className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[29%]">
                      <Img
                        src="images/img_clock.svg"
                        className="clock"
                        alt="clock Six"
                      />
                      <Text className="rowclock" variant="body12">
                        10 Min.
                      </Text>
                    </Row>
                  </Column>
                </Row>
              </List>
            </Row>
          </Column>
          <Column className="items-center justify-start lg:mt-[54px] xl:mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] pb-[1px] w-[99%]">
            <div className="overflow-x-auto w-[99%]">
              <Row className="items-center justify-end overflow-auto pb-[1px] w-[100%]">
                <Stack className="lg:h-[190px] xl:h-[238px] 2xl:h-[267px] 3xl:h-[321px] mb-[1px] w-[31%]">
                  <Row className="absolute items-center justify-between top-[0] w-[100%]">
                    <Column className="bg-white_A700 items-end 3xl:px-[10px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] rounded-radius15 shadow-bs7 w-[100%]">
                      <Stack className="lg:h-[189px] xl:h-[237px] 2xl:h-[266px] 3xl:h-[320px] w-[54%]">
                        <Img
                          src="images/img_vector.svg"
                          className="absolute lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] left-[11%] rounded-radius10 top-[0] w-[70%]"
                          alt="Vector"
                        />
                        <Img
                          src="images/img_image7.png"
                          className="absolute lg:h-[182px] xl:h-[228px] 2xl:h-[256px] 3xl:h-[307px] rounded-radius10 top-[4%] w-[100%]"
                          alt="imageSeven"
                        />
                      </Stack>
                    </Column>
                    <Stack className="lg:h-[190px] xl:h-[238px] 2xl:h-[267px] 3xl:h-[321px] rounded-radius10 w-[53%]">
                      <Img
                        src="images/img_frame7.png"
                        className="absolute lg:h-[141px] xl:h-[176px] 2xl:h-[198px] 3xl:h-[237px] right-[0] rounded-radius10 top-[0] w-[59%]"
                        alt="FrameSeven"
                      />
                      <Img
                        src="images/img_image11.png"
                        className="absolute bottom-[0] lg:h-[172px] xl:h-[215px] 2xl:h-[242px] 3xl:h-[290px] inset-x-[0] rounded-radius10 w-[100%]"
                        alt="imageEleven"
                      />
                    </Stack>
                  </Row>
                  <Column className="absolute bg-black_900_bf h-[max-content] inset-y-[0] justify-end left-[0] my-[auto] xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-bl-[13.53px] rounded-br-[0] rounded-tl-[13.53px] rounded-tr-[0] shadow-bs8 w-[50%]">
                    <Text
                      className="font-poppins ml-[3px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] columnliked"
                      variant="body7"
                    >
                      find every
                    </Text>
                    <Text
                      className="font-poppins ml-[2px] mt-[1px] columnliked"
                      variant="body7"
                    >
                      vet. Profile
                    </Text>
                    <Text
                      className="capitalize font-prompt ml-[3px] mt-[1px] text-red_A701 text-shadow-ts1 w-[auto]"
                      variant="body2"
                    >
                      like a boss
                    </Text>
                    <Button
                      className="capitalize font-bold font-poppins lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[8px] lg:ml-[48px] xl:ml-[60px] 2xl:ml-[67px] 3xl:ml-[81px] 3xl:mt-[104px] lg:mt-[61px] xl:mt-[77px] 2xl:mt-[86px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[65%]"
                      shape="RoundedBorder6"
                      size="sm"
                      variant="FillRedA700cc"
                    >
                      Discover V-guide
                    </Button>
                  </Column>
                </Stack>
                <Stack className="lg:h-[190px] xl:h-[238px] 2xl:h-[267px] 3xl:h-[321px] mb-[1px] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] w-[31%]">
                  <Column className="absolute bg-white_A700 items-end justify-start lg:px-[16px] xl:px-[20px] 2xl:px-[22px] 3xl:px-[27px] rounded-radius15 shadow-bs7 top-[0] w-[100%]">
                    <Stack className="lg:h-[189px] xl:h-[237px] 2xl:h-[266px] 3xl:h-[320px] w-[55%]">
                      <Img
                        src="images/img_frame8.svg"
                        className="absolute lg:h-[128px] xl:h-[161px] 2xl:h-[181px] 3xl:h-[217px] rounded-radius10 top-[0] w-[100%]"
                        alt="FrameEight"
                      />
                      <Stack className="absolute bottom-[0] lg:h-[172px] xl:h-[215px] 2xl:h-[242px] 3xl:h-[290px] right-[1%] rounded-radius10 w-[82%]">
                        <Stack className="absolute bottom-[0] lg:h-[148px] xl:h-[185px] 2xl:h-[208px] 3xl:h-[250px] w-[100%]">
                          <div className="absolute bg-pink_A200_cc xl:h-[118px] 2xl:h-[133px] 3xl:h-[159px] lg:h-[95px] left-[1%] rotate-[90deg] rounded-radius10 top-[12%] w-[63%]"></div>
                          <Img
                            src="images/img_group76.svg"
                            className="absolute lg:h-[148px] xl:h-[185px] 2xl:h-[208px] 3xl:h-[250px] rounded-radius10 w-[100%]"
                            alt="GroupSeventySix"
                          />
                        </Stack>
                        <Img
                          src="images/img_image3.png"
                          className="absolute lg:h-[172px] xl:h-[215px] 2xl:h-[242px] 3xl:h-[290px] right-[2%] rounded-radius10 w-[85%]"
                          alt="imageThree"
                        />
                      </Stack>
                    </Stack>
                  </Column>
                  <Column className="absolute bg-black_900_bf h-[max-content] inset-y-[0] justify-end left-[0] my-[auto] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-bl-[13.53px] rounded-br-[0] rounded-tl-[13.53px] rounded-tr-[0] shadow-bs8 w-[50%]">
                    <Text className="checkour" variant="body7">
                      check our
                    </Text>
                    <Text
                      className="capitalize font-prompt mt-[1px] text-red_A701 text-shadow-ts1 w-[auto]"
                      variant="body2"
                    >
                      awesome
                    </Text>
                    <Text
                      className="font-poppins mt-[3px] columnliked"
                      variant="body7"
                    >
                      v-bloggers
                    </Text>
                    <Button
                      className="capitalize font-bold font-poppins lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:ml-[50px] xl:ml-[63px] 2xl:ml-[71px] 3xl:ml-[85px] 3xl:mt-[106px] lg:mt-[62px] xl:mt-[78px] 2xl:mt-[88px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[62%]"
                      shape="RoundedBorder6"
                      size="sm"
                      variant="FillRedA700cc"
                    >
                      Discover V-Blog
                    </Button>
                  </Column>
                </Stack>
                <Row className="items-center justify-between mb-[1px] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] w-[31%]">
                  <Stack className="lg:h-[190px] xl:h-[238px] 2xl:h-[267px] 3xl:h-[321px] w-[100%]">
                    <Column className="absolute bg-white_A700 items-end justify-start xl:pl-[113px] 2xl:pl-[127px] 3xl:pl-[153px] lg:pl-[90px] rounded-radius15 shadow-bs7 top-[0] w-[100%]">
                      <Stack className="lg:h-[189px] xl:h-[237px] 2xl:h-[266px] 3xl:h-[320px] rounded-radius10 w-[100%]">
                        <Stack className="absolute lg:h-[189px] xl:h-[237px] 2xl:h-[266px] 3xl:h-[320px] w-[100%]">
                          <Stack className="absolute lg:h-[189px] xl:h-[237px] 2xl:h-[266px] 3xl:h-[320px] w-[100%]">
                            <Stack className="absolute lg:h-[189px] xl:h-[237px] 2xl:h-[266px] 3xl:h-[320px] w-[100%]">
                              <Stack className="absolute lg:h-[189px] xl:h-[237px] 2xl:h-[266px] 3xl:h-[320px] w-[100%]">
                                <Column className="absolute items-center justify-start w-[100%]">
                                  <Row className="items-start justify-between w-[100%]">
                                    <Img
                                      src="images/img_rectangle34.svg"
                                      className="lg:h-[117px] xl:h-[146px] 2xl:h-[164px] 3xl:h-[197px] 2xl:mt-[101px] 3xl:mt-[122px] lg:mt-[72px] xl:mt-[90px] rounded-radius10 w-[56%]"
                                      alt="RectangleThirtyFour One"
                                    />
                                    <Img
                                      src="images/img_group20.svg"
                                      className="2xl:h-[110px] 3xl:h-[132px] lg:h-[78px] xl:h-[98px] rounded-radius10 w-[37%]"
                                      alt="GroupTwenty"
                                    />
                                  </Row>
                                </Column>
                                <Img
                                  src="images/img_group20.svg"
                                  className="absolute xl:h-[105px] 2xl:h-[118px] 3xl:h-[141px] lg:h-[84px] right-[5%] rounded-radius10 top-[19%] xl:w-[104px] 2xl:w-[117px] 3xl:w-[140px] lg:w-[83px]"
                                  alt="GroupTwenty One"
                                />
                              </Stack>
                              <Img
                                src="images/img_group20.svg"
                                className="absolute 2xl:h-[110px] 3xl:h-[132px] lg:h-[78px] xl:h-[98px] right-[20%] rounded-radius10 top-[0] w-[38%]"
                                alt="GroupTwenty Two"
                              />
                            </Stack>
                            <Img
                              src="images/img_group20.svg"
                              className="absolute 2xl:h-[110px] 3xl:h-[132px] lg:h-[78px] xl:h-[98px] left-[20%] rounded-radius10 top-[0] w-[38%]"
                              alt="GroupTwenty Three"
                            />
                          </Stack>
                          <Img
                            src="images/img_group20.svg"
                            className="absolute xl:h-[105px] 2xl:h-[118px] 3xl:h-[141px] lg:h-[84px] left-[26%] rounded-radius10 top-[19%] xl:w-[104px] 2xl:w-[117px] 3xl:w-[140px] lg:w-[83px]"
                            alt="GroupTwenty Four"
                          />
                        </Stack>
                        <Img
                          src="images/img_image4.png"
                          className="absolute bottom-[0] lg:h-[152px] xl:h-[190px] 2xl:h-[214px] 3xl:h-[257px] right-[1%] rounded-radius10 w-[71%]"
                          alt="imageFour"
                        />
                      </Stack>
                    </Column>
                    <Column className="absolute bg-black_900_bf h-[max-content] inset-y-[0] justify-end left-[0] my-[auto] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-bl-[15px] rounded-br-[0] rounded-tl-[15px] rounded-tr-[0] shadow-bs8 w-[50%]">
                      <Text
                        className="font-poppins lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[50px] columnliked"
                        variant="body7"
                      >
                        connect with
                      </Text>
                      <Text
                        className="font-poppins mt-[4px] columnliked"
                        variant="body7"
                      >
                        vet. passionate
                      </Text>
                      <Text
                        className="capitalize font-prompt mt-[4px] text-red_A701 text-shadow-ts1 w-[auto]"
                        variant="body2"
                      >
                        friends
                      </Text>
                      <Button
                        className="capitalize font-bold font-poppins lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:ml-[41px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] 3xl:mt-[102px] lg:mt-[60px] xl:mt-[76px] 2xl:mt-[85px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[69%]"
                        shape="RoundedBorder6"
                        size="sm"
                        variant="FillRedA700cc"
                      >
                        Discover V-nation
                      </Button>
                    </Column>
                  </Stack>
                  <Stack className="lg:h-[190px] xl:h-[238px] 2xl:h-[267px] 3xl:h-[321px] w-[100%]">
                    <Column className="absolute bg-white_A700 items-end justify-start lg:pl-[117px] xl:pl-[147px] 2xl:pl-[165px] 3xl:pl-[198px] rounded-radius15 shadow-bs7 top-[0] w-[100%]">
                      <Stack className="lg:h-[189px] xl:h-[237px] 2xl:h-[266px] 3xl:h-[320px] rounded-radius10 w-[100%]">
                        <Stack className="absolute lg:h-[168px] xl:h-[210px] 2xl:h-[236px] 3xl:h-[283px] top-[0] w-[100%]">
                          <Img
                            src="images/img_rectangle34_176X176.png"
                            className="absolute bottom-[0] lg:h-[120px] xl:h-[150px] 2xl:h-[168px] 3xl:h-[202px] left-[0] rounded-radius10 lg:w-[119px] xl:w-[149px] 2xl:w-[167px] 3xl:w-[201px]"
                            alt="RectangleThirtyFour Two"
                          />
                          <Img
                            src="images/img_group20_141X141.png"
                            className="absolute xl:h-[120px] 2xl:h-[135px] 3xl:h-[162px] lg:h-[96px] right-[0] rounded-radius10 top-[0] xl:w-[119px] 2xl:w-[134px] 3xl:w-[161px] lg:w-[95px]"
                            alt="GroupTwenty Five"
                          />
                        </Stack>
                        <Img
                          src="images/img_image6.png"
                          className="absolute bottom-[0] lg:h-[170px] xl:h-[212px] 2xl:h-[239px] 3xl:h-[286px] right-[4%] rounded-radius10 w-[75%]"
                          alt="imageSix"
                        />
                      </Stack>
                    </Column>
                    <Column className="absolute bg-black_900_bf h-[max-content] inset-y-[0] justify-end left-[0] my-[auto] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-bl-[15px] rounded-br-[0] rounded-tl-[15px] rounded-tr-[0] shadow-bs8 w-[50%]">
                      <Text className="checkour" variant="body7">
                        watch the latest
                      </Text>
                      <Text
                        className="capitalize font-prompt lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] text-red_A701 text-shadow-ts1 w-[auto]"
                        variant="body2"
                      >
                        vet. videos
                      </Text>
                      <Button
                        className="capitalize font-bold font-poppins lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:ml-[48px] xl:ml-[61px] 2xl:ml-[68px] 3xl:ml-[82px] 2xl:mt-[110px] 3xl:mt-[132px] lg:mt-[78px] xl:mt-[98px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[64%]"
                        shape="RoundedBorder6"
                        size="sm"
                        variant="FillRedA700cc"
                      >
                        Discover V-Tube
                      </Button>
                    </Column>
                  </Stack>
                </Row>
                <div className="lg:h-[190px] xl:h-[238px] 2xl:h-[267px] 3xl:h-[321px] 3xl:ml-[1150px] lg:ml-[681px] xl:ml-[852px] 2xl:ml-[958px] w-[31%]"></div>
              </Row>
            </div>
            <Row className="items-center justify-between lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]">
              <Stack className="lg:h-[190px] xl:h-[238px] 2xl:h-[267px] 3xl:h-[321px] w-[31%]">
                <Stack className="absolute lg:h-[190px] xl:h-[238px] 2xl:h-[267px] 3xl:h-[321px] w-[100%]">
                  <div className="absolute bg-white_A700 lg:h-[189px] xl:h-[237px] 2xl:h-[266px] 3xl:h-[320px] inset-[0] justify-center m-[auto] rounded-radius15 shadow-bs7 w-[100%]"></div>
                  <Stack className="absolute lg:h-[189px] xl:h-[237px] 2xl:h-[266px] 3xl:h-[320px] inset-y-[0] my-[auto] right-[0] w-[52%]">
                    <Stack className="absolute lg:h-[106px] xl:h-[133px] 2xl:h-[149px] 3xl:h-[179px] left-[0] top-[0] w-[96%]">
                      <Img
                        src="images/img_polygon3.svg"
                        className="absolute bottom-[0] xl:h-[124px] 2xl:h-[140px] 3xl:h-[167px] lg:h-[99px] right-[0] rounded-radius10 xl:w-[123px] 2xl:w-[139px] 3xl:w-[166px] lg:w-[98px]"
                        alt="PolygonThree"
                      />
                      <Img
                        src="images/img_group77.svg"
                        className="absolute xl:h-[114px] 2xl:h-[128px] 3xl:h-[154px] lg:h-[91px] left-[0] rounded-radius10 top-[0] w-[54%]"
                        alt="GroupSeventySeven"
                      />
                    </Stack>
                    <Img
                      src="images/img_image12.png"
                      className="absolute bottom-[0] lg:h-[168px] xl:h-[211px] 2xl:h-[237px] 3xl:h-[284px] inset-x-[0] mx-[auto] rounded-radius10 w-[99%]"
                      alt="imageTwelve"
                    />
                  </Stack>
                </Stack>
                <Column className="absolute bg-black_900_bf h-[max-content] inset-y-[0] justify-end left-[0] my-[auto] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-bl-[13.53px] rounded-br-[0] rounded-tl-[13.53px] rounded-tr-[0] shadow-bs8 w-[50%]">
                  <Text
                    className="font-poppins ml-[1px] lg:mt-[31px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] columnliked"
                    variant="body7"
                  >
                    FIND EVERY
                  </Text>
                  <Text
                    className="font-poppins ml-[1px] mt-[3px] columnliked"
                    variant="body7"
                  >
                    Vet. Product
                  </Text>
                  <Text
                    className="capitalize font-prompt mt-[3px] text-red_A701 text-shadow-ts1 w-[auto]"
                    variant="body2"
                  >
                    ever found
                  </Text>
                  <Button
                    className="capitalize font-bold font-poppins lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:ml-[39px] xl:ml-[49px] 2xl:ml-[55px] 3xl:ml-[66px] 3xl:mt-[101px] lg:mt-[60px] xl:mt-[75px] 2xl:mt-[84px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[71%]"
                    shape="RoundedBorder6"
                    size="sm"
                    variant="FillRedA700cc"
                  >
                    Discover V-Market
                  </Button>
                </Column>
              </Stack>
              <Stack className="lg:h-[190px] xl:h-[238px] 2xl:h-[267px] 3xl:h-[321px] w-[31%]">
                <Stack className="absolute lg:h-[190px] xl:h-[238px] 2xl:h-[267px] 3xl:h-[321px] w-[100%]">
                  <div className="absolute bg-white_A700 lg:h-[189px] xl:h-[237px] 2xl:h-[266px] 3xl:h-[320px] inset-[0] justify-center m-[auto] rounded-radius15 shadow-bs7 w-[100%]"></div>
                  <Column className="absolute items-center justify-start right-[0] w-[74%]">
                    <Stack className="lg:h-[190px] xl:h-[238px] 2xl:h-[267px] 3xl:h-[321px] rounded-radius15 w-[100%]">
                      <Stack className="absolute lg:h-[190px] xl:h-[238px] 2xl:h-[267px] 3xl:h-[321px] w-[100%]">
                        <Stack className="absolute lg:h-[144px] xl:h-[180px] 2xl:h-[203px] 3xl:h-[243px] top-[0] w-[100%]">
                          <Img
                            src="images/img_frame6.svg"
                            className="absolute lg:h-[114px] xl:h-[142px] 2xl:h-[160px] 3xl:h-[191px] right-[16%] rounded-radius15 top-[0] w-[55%]"
                            alt="FrameSix"
                          />
                          <Img
                            src="images/img_polygon17.svg"
                            className="absolute 3xl:h-[106px] lg:h-[63px] xl:h-[78px] 2xl:h-[88px] right-[0] rounded-radius15 top-[0] w-[32%]"
                            alt="PolygonSeventeen"
                          />
                          <Img
                            src="images/img_mail.svg"
                            className="absolute bottom-[23%] lg:h-[47px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] right-[0] rounded-radius15 w-[17%]"
                            alt="mail"
                          />
                          <Img
                            src="images/img_polygon15.svg"
                            className="absolute bottom-[0] lg:h-[110px] xl:h-[138px] 2xl:h-[155px] 3xl:h-[186px] left-[0] rounded-radius15 lg:w-[109px] xl:w-[137px] 2xl:w-[154px] 3xl:w-[185px]"
                            alt="PolygonFifteen"
                          />
                        </Stack>
                        <Img
                          src="images/img_polygon16.svg"
                          className="absolute bottom-[0] lg:h-[109px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] left-[12%] rounded-radius15 w-[48%]"
                          alt="PolygonSixteen"
                        />
                      </Stack>
                      <Img
                        src="images/img_image19.png"
                        className="absolute bottom-[0] lg:h-[164px] xl:h-[206px] 2xl:h-[231px] 3xl:h-[277px] right-[1%] rounded-radius15 w-[65%]"
                        alt="imageNineteen"
                      />
                    </Stack>
                  </Column>
                </Stack>
                <Column className="absolute bg-black_900_bf h-[max-content] inset-y-[0] justify-end left-[0] my-[auto] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-bl-[13.53px] rounded-br-[0] rounded-tl-[13.53px] rounded-tr-[0] shadow-bs8 w-[50%]">
                  <Text className="checkour" variant="body7">
                    get the job
                  </Text>
                  <Text
                    className="capitalize font-prompt leading-[120.00%] mt-[3px] text-red_A701 text-shadow-ts1 w-[100%]"
                    variant="body2"
                  >
                    Perfectly Done
                  </Text>
                  <Button
                    className="capitalize font-bold font-poppins lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:ml-[44px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[75px] lg:mt-[50px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[67%]"
                    shape="RoundedBorder6"
                    size="sm"
                    variant="FillRedA700cc"
                  >
                    Discover V-lance
                  </Button>
                </Column>
              </Stack>
              <Stack className="lg:h-[190px] xl:h-[238px] 2xl:h-[267px] 3xl:h-[321px] mb-[1px] w-[31%]">
                <Column className="absolute bg-white_A700 items-end justify-start lg:pl-[128px] xl:pl-[160px] 2xl:pl-[180px] 3xl:pl-[216px] rounded-radius15 shadow-bs7 top-[0] w-[100%]">
                  <div className="overflow-x-auto w-[100%]">
                    <Row className="items-start justify-between overflow-auto rounded-radius10 w-[100%]">
                      <Stack className="lg:h-[189px] xl:h-[237px] 2xl:h-[266px] 3xl:h-[320px] w-[100%]">
                        <Stack className="absolute 2xl:h-[110px] 3xl:h-[132px] lg:h-[78px] xl:h-[98px] top-[0] w-[100%]">
                          <Stack className="absolute 2xl:h-[110px] 3xl:h-[132px] lg:h-[78px] xl:h-[98px] w-[100%]">
                            <Stack className="absolute 2xl:h-[110px] 3xl:h-[132px] lg:h-[78px] xl:h-[98px] w-[100%]">
                              <Stack className="absolute 2xl:h-[110px] 3xl:h-[132px] lg:h-[78px] xl:h-[98px] w-[100%]">
                                <Img
                                  src="images/img_group20.svg"
                                  className="absolute 2xl:h-[110px] 3xl:h-[132px] lg:h-[78px] xl:h-[98px] right-[0] rounded-radius10 w-[44%]"
                                  alt="GroupTwenty Six"
                                />
                                <Img
                                  src="images/img_rectangle43.svg"
                                  className="absolute lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] left-[0] rounded-radius10 top-[0] w-[68%]"
                                  alt="RectangleFortyThree"
                                />
                              </Stack>
                              <Img
                                src="images/img_rectangle43.svg"
                                className="absolute lg:h-[51px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px] inset-x-[0] mx-[auto] rounded-radius10 top-[0] w-[68%]"
                                alt="RectangleFortyFive"
                              />
                            </Stack>
                            <Img
                              src="images/img_rectangle43.svg"
                              className="absolute lg:h-[40px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] left-[6%] rounded-radius10 top-[0] w-[68%]"
                              alt="RectangleFortyFour"
                            />
                          </Stack>
                          <Img
                            src="images/img_rectangle43.svg"
                            className="absolute 3xl:h-[109px] lg:h-[65px] xl:h-[81px] 2xl:h-[91px] right-[10%] rounded-radius10 top-[0] w-[68%]"
                            alt="RectangleFortySix"
                          />
                        </Stack>
                        <Img
                          src="images/img_group78.png"
                          className="absolute bottom-[2%] lg:h-[101px] xl:h-[126px] 2xl:h-[142px] 3xl:h-[170px] right-[0] rounded-radius10 w-[28%]"
                          alt="GroupSeventyEight"
                        />
                        <Img
                          src="images/img_image17.png"
                          className="absolute bottom-[0] lg:h-[165px] xl:h-[206px] 2xl:h-[232px] 3xl:h-[278px] right-[0] rounded-radius10 w-[86%]"
                          alt="imageSeventeen"
                        />
                      </Stack>
                      <Img
                        src="images/img_group20_141X141.png"
                        className="2xl:h-[106px] 3xl:h-[127px] lg:h-[76px] xl:h-[95px] rounded-radius15 w-[46%]"
                        alt="GroupTwenty Seven"
                      />
                    </Row>
                  </div>
                </Column>
                <Column className="absolute bg-black_900_bf h-[max-content] inset-y-[0] justify-end left-[0] my-[auto] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-bl-[15px] rounded-br-[0] rounded-tl-[15px] rounded-tr-[0] shadow-bs8 w-[50%]">
                  <Text className="checkour" variant="body7">
                    don’t miss any
                  </Text>
                  <Text
                    className="capitalize font-prompt text-red_A701 text-shadow-ts1 w-[auto]"
                    variant="body2"
                  >
                    vet. event
                  </Text>
                  <Button
                    className="capitalize font-bold font-poppins lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:ml-[41px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] 2xl:mt-[108px] 3xl:mt-[130px] lg:mt-[77px] xl:mt-[96px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[69%]"
                    shape="RoundedBorder6"
                    size="sm"
                    variant="FillRedA700cc"
                  >
                    Discover V-events
                  </Button>
                </Column>
              </Stack>
              <Column className="items-center mb-[1px] pt-[1px] w-[2%]">
                <Stack className="lg:h-[189px] xl:h-[237px] 2xl:h-[266px] 3xl:h-[320px] rounded-radius15 w-[100%]">
                  <Img
                    src="images/img_group69836.png"
                    className="absolute lg:h-[189px] xl:h-[237px] 2xl:h-[266px] 3xl:h-[320px] rounded-radius15 w-[100%]"
                    alt="Group69836"
                  />
                </Stack>
              </Column>
            </Row>
          </Column>
          <Column className="items-center justify-start lg:mt-[55px] xl:mt-[69px] 2xl:mt-[78px] 3xl:mt-[93px] w-[100%]">
            <Column className="items-center justify-end lg:pt-[4px] 2xl:pt-[5px] xl:pt-[5px] 3xl:pt-[6px] lg:px-[4px] 2xl:px-[5px] xl:px-[5px] 3xl:px-[6px] w-[100%]">
              <Column className="items-center justify-start w-[27%]">
                <Text
                  className="capitalize text-gray_200 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Members
                </Text>
                <Text
                  className="capitalize text-black_900 w-[auto]"
                  variant="body2"
                >
                  Testimonials
                </Text>
              </Column>
              <Stack className="lg:h-[432px] xl:h-[540px] 2xl:h-[608px] 3xl:h-[729px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[97%]">
                <Column className="absolute bg-gray_501 items-center justify-start right-[0] rounded-radius20 w-[58%]">
                  <Column
                    className="bg-cover bg-repeat items-center justify-start rounded-radius20 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_maskgroup.png')",
                    }}
                  >
                    <Column className="bg-gradient7  items-center justify-end lg:p-[191px] xl:p-[239px] 2xl:p-[269px] 3xl:p-[323px] rounded-radius20 w-[100%]">
                      <Button
                        className="flex lg:h-[48px] xl:h-[60px] 2xl:h-[67px] 3xl:h-[81px] items-center justify-center mt-[1px] rounded-radius50 lg:w-[47px] xl:w-[59px] 2xl:w-[66px] 3xl:w-[80px]"
                        size="3xlIcn"
                        variant="icbOutlineWhiteA700"
                      >
                        <Img
                          src="images/img_arrowright_70X70.svg"
                          className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px]"
                          alt="arrowright One"
                        />
                      </Button>
                    </Column>
                  </Column>
                </Column>
                <Column className="absolute h-[max-content] inset-y-[0] items-center justify-start left-[0] my-[auto] w-[51%]">
                  <Column className="bg-gradient8  justify-end lg:p-[22px] xl:p-[27px] 2xl:p-[31px] 3xl:p-[37px] rounded-radius20 w-[100%]">
                    <Img
                      src="images/img_location.svg"
                      className="lg:h-[45px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[76px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mr-[388px] xl:mr-[485px] 2xl:mr-[546px] 3xl:mr-[655px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[12%]"
                      alt="location"
                    />
                    <Column className="justify-start lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] lg:mr-[14px] xl:mr-[17px] 2xl:mr-[20px] 3xl:mr-[24px] lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[96%]">
                      <Row className="items-center w-[83%]">
                        <Img
                          src="images/img_ellipse18.png"
                          className="lg:h-[149px] xl:h-[186px] 2xl:h-[209px] 3xl:h-[251px] rounded-radius50 lg:w-[148px] xl:w-[185px] 2xl:w-[208px] 3xl:w-[250px]"
                          alt="EllipseEighteen"
                        />
                        <Column className="items-center lg:ml-[20px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] w-[53%]">
                          <Text
                            className="capitalize text-white_A700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Sarah Jones
                          </Text>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[29px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[49px] w-[100%]">
                        <Img
                          src="images/img_calculator.svg"
                          className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] w-[13%]"
                          alt="calculator"
                        />
                        <Img
                          src="images/img_clock_66X80.svg"
                          className="lg:h-[45px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[76px] w-[12%]"
                          alt="clock Seven"
                        />
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Stack>
            </Column>
          </Column>
          <Column className="items-center justify-start lg:mt-[58px] xl:mt-[72px] 2xl:mt-[81px] 3xl:mt-[98px] w-[31%]">
            <Text
              className="capitalize text-gray_200 w-[auto]"
              as="h1"
              variant="h1"
            >
              Proudness
            </Text>
            <Text
              className="capitalize text-black_900 w-[auto]"
              variant="body2"
            >
              In Numbers
            </Text>
          </Column>
          <Column className="bg-white_A700 border border-gray_201 border-solid font-poppins items-center justify-end lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius10 shadow-bs6 w-[42%]">
            <Column className="items-center justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[55%]">
              <Text className="AllTimeCommun" variant="body7">
                All Time Community Performance
              </Text>
              <Text className="price" variant="body12">
                Starting 01-Jan-2023 - Values are in USD
              </Text>
            </Column>
            <Column className="items-center justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[83%]">
              <Row className="items-start justify-between w-[100%]">
                <Column className="justify-start w-[6%]">
                  <Text className="column500k" variant="body12">
                    500K
                  </Text>
                  <Text
                    className="lg:mt-[31px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] column500k"
                    variant="body12"
                  >
                    400K
                  </Text>
                  <Text
                    className="lg:mt-[31px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] column500k"
                    variant="body12"
                  >
                    300K
                  </Text>
                  <Text
                    className="ml-[1px] lg:mt-[31px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] column500k"
                    variant="body12"
                  >
                    200K
                  </Text>
                  <Text
                    className="ml-[3px] lg:mt-[31px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] column500k"
                    variant="body12"
                  >
                    100K
                  </Text>
                  <Text
                    className="lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] column500k"
                    variant="body12"
                  >
                    0
                  </Text>
                </Column>
                <Column className="justify-start lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[92%]">
                  <Line className="bg-black_900_0c h-[1px] w-[100%]" />
                  <Line className="bg-black_900_0c h-[1px] lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[100%]" />
                  <Stack className="lg:h-[159px] xl:h-[199px] 2xl:h-[224px] 3xl:h-[268px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                    <Column className="absolute bottom-[26%] items-center justify-start top-[23%] w-[100%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Line className="bg-black_900_0c h-[1px] w-[100%]" />
                        <Line className="bg-black_900_0c h-[1px] lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[100%]" />
                        <Line className="bg-black_900_20 h-[1px] lg:mt-[39px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] w-[100%]" />
                      </Column>
                    </Column>
                    <Row className="absolute items-end left-[3%] w-[84%]">
                      <div className="bg-blue_700 lg:h-[53px] xl:h-[66px] 2xl:h-[74px] 3xl:h-[89px] lg:mt-[106px] xl:mt-[133px] 2xl:mt-[149px] 3xl:mt-[179px] w-[13%]"></div>
                      <div className="bg-blue_700 lg:h-[116px] xl:h-[145px] 2xl:h-[163px] 3xl:h-[195px] lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[43px] xl:mt-[54px] 2xl:mt-[60px] 3xl:mt-[73px] w-[13%]"></div>
                      <div className="bg-blue_700 lg:h-[159px] xl:h-[199px] 2xl:h-[224px] 3xl:h-[268px] lg:ml-[47px] xl:ml-[59px] 2xl:ml-[66px] 3xl:ml-[80px] w-[13%]"></div>
                      <div className="bg-blue_700 xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] lg:h-[94px] lg:ml-[47px] xl:ml-[59px] 2xl:ml-[66px] 3xl:ml-[80px] 3xl:mt-[109px] lg:mt-[65px] xl:mt-[81px] 2xl:mt-[91px] w-[13%]"></div>
                    </Row>
                  </Stack>
                  <Line className="bg-black_900_0c h-[1px] w-[100%]" />
                  <Row className="items-center lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[25px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[86%]">
                    <Text className="XAxis" variant="body12">
                      Sales
                    </Text>
                    <Text className="Earnings" variant="body12">
                      Earnings
                    </Text>
                    <Text className="Earnings" variant="body12">
                      Investments
                    </Text>
                    <Text className="Earnings" variant="body12">
                      Commissions
                    </Text>
                  </Row>
                </Column>
              </Row>
            </Column>
          </Column>
          <Column className="bg-white_A700 border border-gray_201 border-solid font-poppins items-center justify-center lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius10 shadow-bs6 w-[85%]">
            <Column className="items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[21%]">
              <Text className="AllTimeCommun" variant="body7">
                All Time Community assets
              </Text>
              <Text className="price" variant="body12">
                Starting 01-Jan-2023{" "}
              </Text>
            </Column>
            <Column className="items-center justify-start mb-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
              <Row className="items-start justify-between w-[100%]">
                <Column className="justify-start w-[2%]">
                  <Text className="column500k" variant="body12">
                    2.5K
                  </Text>
                  <Text
                    className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] lg:mt-[31px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] column500k"
                    variant="body12"
                  >
                    2K
                  </Text>
                  <Text
                    className="ml-[3px] lg:mt-[31px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] column500k"
                    variant="body12"
                  >
                    1.5K
                  </Text>
                  <Text
                    className="xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[31px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] column500k"
                    variant="body12"
                  >
                    1K
                  </Text>
                  <Text
                    className="ml-[2px] lg:mt-[31px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] column500k"
                    variant="body12"
                  >
                    500
                  </Text>
                  <Text
                    className="lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] column500k"
                    variant="body12"
                  >
                    0
                  </Text>
                </Column>
                <Column className="items-center justify-start lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[97%]">
                  <Line className="bg-black_900_0c h-[1px] w-[100%]" />
                  <Line className="bg-black_900_0c h-[1px] lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[100%]" />
                  <Stack className="lg:h-[159px] xl:h-[199px] 2xl:h-[224px] 3xl:h-[268px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                    <Column className="absolute bottom-[25%] items-center justify-start top-[23%] w-[100%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Line className="bg-black_900_0c h-[1px] w-[100%]" />
                        <Line className="bg-black_900_0c h-[1px] lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[100%]" />
                        <Line className="bg-black_900_20 h-[1px] lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[100%]" />
                      </Column>
                    </Column>
                    <Img
                      src="images/img_frame69842.svg"
                      className="absolute lg:h-[159px] xl:h-[199px] 2xl:h-[224px] 3xl:h-[268px] left-[1%] right-[2%] w-[97%]"
                      alt="Frame69842"
                    />
                  </Stack>
                  <Line className="bg-black_900_0c h-[1px] w-[100%]" />
                  <Row className="items-start justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[98%]">
                    <Text
                      className="capitalize font-medium leading-[120.00%] rotate-[30deg] text-black_900 w-[5%]"
                      variant="body12"
                    >
                      Personal
                      <br />
                      Profiles
                    </Text>
                    <Text
                      className="capitalize font-medium leading-[120.00%] mt-[3px] rotate-[30deg] text-black_900 w-[5%]"
                      variant="body12"
                    >
                      Business <br />
                      Profiles
                    </Text>
                    <Text className="BlogPosts" variant="body12">
                      Blog Posts
                    </Text>
                    <Text className="BlogPosts" variant="body12">
                      Pages
                    </Text>
                    <Text className="BlogPosts" variant="body12">
                      Groups
                    </Text>
                    <Text className="BlogPosts" variant="body12">
                      Channels
                    </Text>
                    <Text className="BlogPosts" variant="body12">
                      Videos
                    </Text>
                    <Text className="BlogPosts" variant="body12">
                      Vacancies
                    </Text>
                    <Text className="BlogPosts" variant="body12">
                      Courses
                    </Text>
                    <Text className="BlogPosts" variant="body12">
                      Stores
                    </Text>
                    <Text className="BlogPosts" variant="body12">
                      Products
                    </Text>
                    <Text className="BlogPosts" variant="body12">
                      Services
                    </Text>
                    <Text className="BlogPosts" variant="body12">
                      Projects
                    </Text>
                    <Text className="BlogPosts" variant="body12">
                      Events
                    </Text>
                    <Text className="mt-[3px] BlogPosts" variant="body12">
                      Venues
                    </Text>
                    <Text className="BlogPosts" variant="body12">
                      Webinars
                    </Text>
                    <Text className="BlogPosts" variant="body12">
                      Consultations
                    </Text>
                  </Row>
                </Column>
              </Row>
            </Column>
          </Column>
          <Footer className="font-poppins 2xl:mt-[1034px] 3xl:mt-[1240px] lg:mt-[734px] xl:mt-[919px] w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default HomepagePage;
