import React from "react";

import { Column, Row, Img, Text, Stack, Button, Line } from "components";
import Header from "components/Header/Header";
import Footer5 from "components/Footer/Footer5";

const ImranVideoNetworkModuleVTubeMainPagePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-prompt items-center justify-start mx-[auto] pt-[2px] w-[100%]">
        <Header className="w-[100%]" />
        <Column className="items-center justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
          <Column className="justify-start w-[85%]">
            <Row className="bg-white_A700 border border-black_900_0c border-solid items-center xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius10 shadow-bs14 w-[100%]">
              <Row className="items-center lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] w-[10%]">
                <Img
                  src="images/img_group_48X57.png"
                  className="lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[27%]"
                  alt="Group One"
                />
                <Column className="bg-gradient4  items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] rounded-radius576 w-[68%]">
                  <Row className="items-start w-[99%]">
                    <Text
                      className="xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      T
                    </Text>
                    <Text
                      className="lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      u
                    </Text>
                    <Text className="text-white_A700 w-[auto]" variant="body3">
                      b
                    </Text>
                    <Text
                      className="lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      e
                    </Text>
                  </Row>
                </Column>
              </Row>
              <Stack className="bg-white_A700 border border-black_900_20 border-solid lg:h-[32px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[53px] lg:ml-[168px] xl:ml-[210px] 2xl:ml-[237px] 3xl:ml-[284px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[9px] rounded-radius6 w-[39%]">
                <Img
                  src="images/img_search_24X23.svg"
                  className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] inset-y-[0] my-[auto] right-[1%] w-[5%]"
                  alt="search"
                />
              </Stack>
              <Img
                src="images/img_floatingicon.svg"
                className="lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] lg:ml-[163px] xl:ml-[205px] 2xl:ml-[230px] 3xl:ml-[276px] w-[3%]"
                alt="floatingicon"
              />
              <Column className="items-center lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] w-[3%]">
                <Stack className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] w-[100%]">
                  <Img
                    src="images/img_notification.svg"
                    className="absolute bottom-[0] left-[0] file_One1"
                    alt="notification"
                  />
                  <Text
                    className="absolute bg-red_A701 capitalize flex font-semibold items-center lg:px-[4px] 2xl:px-[5px] xl:px-[5px] 3xl:px-[6px] right-[0] rounded-radius50 text-white_A700 top-[0] w-[20px]"
                    variant="body13"
                  >
                    6
                  </Text>
                </Stack>
              </Column>
              <Column className="bg-gray_401 border border-bluegray_400 border-solid items-center rounded-radius50 AmbassadorGold">
                <Stack className="VendorPlatinum">
                  <Img
                    src="images/img_rectangle66.png"
                    className="absolute lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] rounded-radius50 w-[100%]"
                    alt="RectangleSixtySix"
                  />
                  <Button
                    className="absolute flex lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center rounded-radius50 w-[100%]"
                    size="mdIcn"
                    variant="icbOutlineBluegray400"
                  >
                    <Img
                      src="images/img_user_40X40.svg"
                      className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px]"
                      alt="user"
                    />
                  </Button>
                </Stack>
              </Column>
            </Row>
            <Column className="bg-white_A700 font-poppins justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] p-[1px] w-[100%]">
              <Row className="items-center xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[73%]">
                <Button
                  className="capitalize font-semibold xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center text-white_A700 w-[6%]"
                  shape="CircleBorder17"
                  size="md"
                  variant="OutlineBlack900201_2"
                >
                  All
                </Button>
                <Button
                  className="capitalize font-semibold lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-bluegray_400 text-center w-[7%]"
                  shape="CircleBorder17"
                  size="md"
                  variant="OutlineBlack900201_2"
                >
                  Live
                </Button>
                <Button
                  className="capitalize font-semibold lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-bluegray_400 text-center w-[12%]"
                  shape="CircleBorder17"
                  size="md"
                  variant="OutlineBlack900201_2"
                >
                  Adventure
                </Button>
                <Button
                  className="capitalize font-semibold lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-bluegray_400 text-center w-[10%]"
                  shape="CircleBorder17"
                  size="sm"
                  variant="OutlineBlack900201_2"
                >
                  Lifestyle
                </Button>
                <Button
                  className="capitalize font-semibold lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-bluegray_400 text-center w-[11%]"
                  shape="CircleBorder17"
                  size="md"
                  variant="OutlineBlack900201_2"
                >
                  Business
                </Button>
                <Button
                  className="capitalize font-semibold lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-bluegray_400 text-center w-[12%]"
                  shape="CircleBorder17"
                  size="md"
                  variant="OutlineBlack900201_2"
                >
                  Influencer
                </Button>
                <Button
                  className="capitalize font-semibold lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-bluegray_400 text-center w-[19%]"
                  shape="CircleBorder17"
                  size="sm"
                  variant="OutlineBlack900201_2"
                >
                  Recently Uploaded
                </Button>
                <Button
                  className="capitalize font-semibold lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-bluegray_400 text-center w-[11%]"
                  shape="CircleBorder17"
                  size="sm"
                  variant="OutlineBlack900201_2"
                >
                  Trending
                </Button>
              </Row>
            </Column>
            <Column className="bg-white_A700 border border-gray_201 border-solid font-poppins items-center justify-start ml-[1px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:pb-[45px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[76px] rounded-radius10 shadow-bs6 w-[32%]">
              <Column
                className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                style={{ backgroundImage: "url('images/img_image_24.png')" }}
              >
                <Column className="bg-gradient9  items-center justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                  <Button
                    className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[19%]"
                    shape="CircleBorder12"
                    size="sm"
                    variant="GradientDeeporangeA400Pink900"
                  >
                    Watch
                  </Button>
                  <Button
                    className="flex lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center xl:mb-[101px] 2xl:mb-[114px] 3xl:mb-[137px] lg:mb-[81px] 3xl:mt-[109px] lg:mt-[65px] xl:mt-[81px] 2xl:mt-[91px] rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                    size="xlIcn"
                    variant="icbOutlineWhiteA7001_2"
                  >
                    <Img
                      src="images/img_arrowright_70X70.svg"
                      className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                      alt="arrowright"
                    />
                  </Button>
                </Column>
              </Column>
              <Column className="items-center justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] pb-[1px] w-[93%]">
                <Column className="justify-start w-[100%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Text className="rownameoftheve_one" variant="body7">
                      {"<Name Of The Video>"}
                    </Text>
                    <Img
                      src="images/img_overflowmenu_1.svg"
                      className="file_One1"
                      alt="overflowmenu"
                    />
                  </Row>
                  <Row className="items-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] py-[1px] w-[94%]">
                    <Row className="items-center justify-evenly my-[1px] w-[27%]">
                      <Img
                        src="images/img_calendar_16X16.svg"
                        className="clock"
                        alt="calendar"
                      />
                      <Text className="date" variant="body12">
                        15-Oct-2022
                      </Text>
                    </Row>
                    <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] my-[1px] w-[8%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="clock"
                        alt="thumbsup"
                      />
                      <Text className="likes" variant="body12">
                        0
                      </Text>
                    </Row>
                    <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] my-[1px] w-[15%]">
                      <Img
                        src="images/img_star.svg"
                        className="clock"
                        alt="star"
                      />
                      <Text className="ratings" variant="body12">
                        5(20)
                      </Text>
                    </Row>
                    <Row className="items-center justify-center xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] my-[1px] w-[12%]">
                      <Img
                        src="images/img_share.svg"
                        className="clock"
                        alt="share"
                      />
                      <Text className="shares" variant="body12">
                        320
                      </Text>
                    </Row>
                    <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] my-[1px] w-[11%]">
                      <Img
                        src="images/img_clock_20X20.svg"
                        className="clock"
                        alt="clock"
                      />
                      <Text className="rowbag" variant="body12">
                        100
                      </Text>
                    </Row>
                    <Row className="items-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[1px] w-[12%]">
                      <Img
                        src="images/img_instagram.svg"
                        className="clock"
                        alt="instagram"
                      />
                      <Text className="rowinstagram" variant="body12">
                        1.2K
                      </Text>
                    </Row>
                  </Row>
                  <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                  <Column className="items-center justify-start ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[54%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Button
                        className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                        size="lgIcn"
                        variant="icbOutlineBlack900201_2"
                      >
                        <Img
                          src="images/img_iconuser.svg"
                          className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px]"
                          alt="iconuser"
                        />
                      </Button>
                      <Column className="justify-start mt-[3px] w-[73%]">
                        <Text
                          className="font-semibold text-black_900 w-[auto]"
                          variant="body10"
                        >
                          {"<Channel Name>"}
                        </Text>
                        <Row className="items-start justify-between lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] py-[1px] w-[100%]">
                          <Column className="items-center justify-start w-[28%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Img
                                src="images/img_videocamera_2.svg"
                                className="imageThirtyTwo1"
                                alt="videocamera"
                              />
                              <Text className="rowuser" variant="body12">
                                100
                              </Text>
                            </Row>
                          </Column>
                          <Row className="items-center justify-center mt-[1px] w-[26%]">
                            <Img
                              src="images/img_user.svg"
                              className="clock"
                              alt="user One"
                            />
                            <Text className="rowbag" variant="body12">
                              10K
                            </Text>
                          </Row>
                          <Row className="items-start mt-[1px] w-[32%]">
                            <Img
                              src="images/img_instagram.svg"
                              className="clock"
                              alt="instagram One"
                            />
                            <Text className="rowinstagram" variant="body12">
                              145K
                            </Text>
                          </Row>
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Column>
          <Line className="bg-black_900_20 h-[1px] lg:mt-[1204px] xl:mt-[1506px] 2xl:mt-[1694px] 3xl:mt-[2033px] w-[100%]" />
          <Footer5 className="font-poppins lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default ImranVideoNetworkModuleVTubeMainPagePage;
