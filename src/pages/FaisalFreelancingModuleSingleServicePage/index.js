import React from "react";

import {
  Column,
  Stack,
  Text,
  Row,
  Img,
  List,
  Button,
  Line,
  CheckBox,
  Grid,
} from "components";
import Header from "components/Header/Header";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import Footer2 from "components/Footer/Footer2";

const FaisalFreelancingModuleSingleServicePagePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-prompt items-center justify-start mx-[auto] pt-[2px] w-[100%]">
        <Header className="w-[100%]" />
        <Column className="items-center justify-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[32px] w-[100%]">
          <Stack className="lg:h-[3368px] xl:h-[4213px] 2xl:h-[4739px] 3xl:h-[5686px] w-[86%]">
            <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
              <Column className="justify-start w-[100%]">
                <Text
                  className="capitalize text-black_900 w-[auto]"
                  variant="body2"
                >
                  <span className="text-black_900 font-prompt font-extrabold lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[34px]">
                    You will get a modern{" "}
                  </span>
                  <span className="text-black_900 font-prompt font-extrabold lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[34px]">
                    political campaign LOGO
                  </span>
                  <span className="text-black_900 font-prompt font-extrabold lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[34px]">
                    {" "}
                  </span>
                  <span className="text-black_900 font-prompt font-extrabold lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[34px]">
                    design
                  </span>
                </Text>
                <Column className="items-center justify-end lg:mt-[2898px] xl:mt-[3626px] 2xl:mt-[4079px] 3xl:mt-[4894px] lg:pt-[4px] 2xl:pt-[5px] xl:pt-[5px] 3xl:pt-[6px] w-[100%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Text
                      className="capitalize mt-[4px] text-black_900 w-[auto]"
                      variant="body2"
                    >
                      {"<Member Name> Also Offers This"}
                    </Text>
                    <Img
                      src="images/img_arrows.svg"
                      className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] w-[7%]"
                      alt="arrows"
                    />
                  </Row>
                  <List
                    className="font-poppins lg:gap-[20px] xl:gap-[25px] 2xl:gap-[28px] 3xl:gap-[34px] grid grid-cols-3 min-h-[auto] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]"
                    orientation="horizontal"
                  >
                    <Column className="pages">
                      <Column
                        className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_image_14.png')",
                        }}
                      >
                        <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                          <Button
                            className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[13%]"
                            shape="CircleBorder12"
                            size="sm"
                            variant="GradientDeeporangeA400Pink900"
                          >
                            Buy
                          </Button>
                          <Img
                            src="images/img_group51.svg"
                            className="GroupFiftyOne"
                            alt="GroupFifty"
                          />
                          <Row className="items-center justify-end mb-[2px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                            <Img
                              src="images/img_vendorplatinum.png"
                              className="VendorPlatinum"
                              alt="VendorPlatinum"
                            />
                            <Img
                              src="images/img_ambassadorsilv.png"
                              className="AmbassadorSilv"
                              alt="AmbassadorSilv"
                            />
                          </Row>
                        </Column>
                      </Column>
                      <Column className="font-prompt justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[93%]">
                        <Text className="columntitleoftheg" variant="body7">
                          {"<Title of the Gig>"}
                        </Text>
                        <Row className="font-poppins items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[67%]">
                          <Row className="items-center justify-evenly w-[37%]">
                            <Img
                              src="images/img_calendar_16X16.svg"
                              className="clock"
                              alt="calendar"
                            />
                            <Text className="date" variant="body12">
                              15-Oct-2022
                            </Text>
                          </Row>
                          <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[11%]">
                            <Img
                              src="images/img_thumbsup.svg"
                              className="clock"
                              alt="thumbsup"
                            />
                            <Text className="likes" variant="body12">
                              0
                            </Text>
                          </Row>
                          <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[21%]">
                            <Img
                              src="images/img_star.svg"
                              className="clock"
                              alt="star"
                            />
                            <Text className="ratings" variant="body12">
                              5(20)
                            </Text>
                          </Row>
                          <Row className="items-center justify-evenly xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[17%]">
                            <Img
                              src="images/img_share.svg"
                              className="clock"
                              alt="share"
                            />
                            <Text className="shares1" variant="body12">
                              320
                            </Text>
                          </Row>
                        </Row>
                        <Row className="font-poppins items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
                          <Button
                            className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillBlue700"
                          >
                            Tag
                          </Button>
                          <Button
                            className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillBlue700"
                          >
                            Tag
                          </Button>
                          <Button
                            className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillBlue700"
                          >
                            Tag
                          </Button>
                          <Button
                            className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillBlue700"
                          >
                            Tag
                          </Button>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                            shape="icbCircleBorder15"
                            size="mdIcn"
                            variant="icbOutlineBlue700"
                          >
                            <Img
                              src="images/img_overflowmenu.svg"
                              className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                              alt="overflowmenu"
                            />
                          </Button>
                        </Row>
                        <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                        <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] py-[1px] w-[44%]">
                          <Column className="items-center w-[27%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Img
                                src="images/img_volume.svg"
                                className="clock"
                                alt="volume"
                              />
                              <Text
                                className="font-semibold text-bluegray_400 w-[auto]"
                                variant="body12"
                              >
                                500
                              </Text>
                            </Row>
                          </Column>
                          <Row className="items-start justify-center xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] w-[35%]">
                            <Img
                              src="images/img_trophy.svg"
                              className="clock"
                              alt="trophy"
                            />
                            <Text className="status" variant="body12">
                              3 Days
                            </Text>
                          </Row>
                          <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[20%]">
                            <Img
                              src="images/img_checkmark.svg"
                              className="clock"
                              alt="checkmark"
                            />
                            <Text className="soldtimes" variant="body12">
                              15
                            </Text>
                          </Row>
                        </Row>
                        <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                        <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                          <Column className="items-center w-[47%]">
                            <Row className="items-start justify-between w-[100%]">
                              <Button
                                className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                                size="lgIcn"
                                variant="icbOutlineBlack900201_2"
                              >
                                <Img
                                  src="images/img_user_45X45.svg"
                                  className="flex items-center justify-center"
                                  alt="user"
                                />
                              </Button>
                              <Column className="items-center justify-start mt-[3px] w-[69%]">
                                <Text
                                  className="font-semibold text-black_900 w-[auto]"
                                  variant="body10"
                                >
                                  {"<Member Name>"}
                                </Text>
                                <Text className="TitleatCompa" variant="body12">
                                  {"Title at <Company>"}
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                            shape="icbCircleBorder15"
                            size="mdIcn"
                            variant="icbOutlineBlue700"
                          >
                            <Img
                              src="images/img_arrowdown_29X29.svg"
                              className="flex items-center justify-center"
                              alt="arrowdown"
                            />
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="pages">
                      <Column
                        className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_image_14.png')",
                        }}
                      >
                        <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                          <Button
                            className="font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[19%]"
                            shape="CircleBorder12"
                            size="sm"
                            variant="GradientBlue700Indigo900"
                          >
                            Re-buy
                          </Button>
                          <Img
                            src="images/img_group51.svg"
                            className="GroupFiftyOne"
                            alt="GroupFifty One"
                          />
                          <Row className="items-center justify-end mb-[1px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                            <Img
                              src="images/img_vendorgold.png"
                              className="VendorSilver"
                              alt="VendorGold"
                            />
                            <Img
                              src="images/img_ambassadorgold.png"
                              className="AmbassadorGold"
                              alt="AmbassadorGold"
                            />
                          </Row>
                        </Column>
                      </Column>
                      <Column className="font-prompt justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[93%]">
                        <Text className="columntitleoftheg" variant="body7">
                          {"<Title of the Gig>"}
                        </Text>
                        <Row className="font-poppins items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[67%]">
                          <Row className="items-center justify-evenly w-[37%]">
                            <Img
                              src="images/img_calendar_16X16.svg"
                              className="clock"
                              alt="calendar One"
                            />
                            <Text className="date" variant="body12">
                              15-Oct-2022
                            </Text>
                          </Row>
                          <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[11%]">
                            <Img
                              src="images/img_thumbsup.svg"
                              className="clock"
                              alt="thumbsup One"
                            />
                            <Text className="likes" variant="body12">
                              0
                            </Text>
                          </Row>
                          <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[21%]">
                            <Img
                              src="images/img_star.svg"
                              className="clock"
                              alt="star One"
                            />
                            <Text className="ratings" variant="body12">
                              5(20)
                            </Text>
                          </Row>
                          <Row className="items-center justify-evenly xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[17%]">
                            <Img
                              src="images/img_share.svg"
                              className="clock"
                              alt="share One"
                            />
                            <Text className="shares1" variant="body12">
                              320
                            </Text>
                          </Row>
                        </Row>
                        <Row className="font-poppins items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
                          <Button
                            className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillBlue700"
                          >
                            Tag
                          </Button>
                          <Button
                            className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillBlue700"
                          >
                            Tag
                          </Button>
                          <Button
                            className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillBlue700"
                          >
                            Tag
                          </Button>
                          <Button
                            className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillBlue700"
                          >
                            Tag
                          </Button>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                            shape="icbCircleBorder15"
                            size="mdIcn"
                            variant="icbOutlineBlue700"
                          >
                            <Img
                              src="images/img_overflowmenu.svg"
                              className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                              alt="overflowmenu One"
                            />
                          </Button>
                        </Row>
                        <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                        <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] py-[1px] w-[44%]">
                          <Column className="items-center w-[27%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Img
                                src="images/img_volume.svg"
                                className="clock"
                                alt="volume One"
                              />
                              <Text
                                className="font-semibold text-bluegray_400 w-[auto]"
                                variant="body12"
                              >
                                500
                              </Text>
                            </Row>
                          </Column>
                          <Row className="items-start justify-center xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] w-[35%]">
                            <Img
                              src="images/img_trophy.svg"
                              className="clock"
                              alt="trophy One"
                            />
                            <Text className="status" variant="body12">
                              3 Days
                            </Text>
                          </Row>
                          <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[20%]">
                            <Img
                              src="images/img_checkmark.svg"
                              className="clock"
                              alt="checkmark One"
                            />
                            <Text className="soldtimes" variant="body12">
                              15
                            </Text>
                          </Row>
                        </Row>
                        <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                        <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                          <Column className="items-center w-[47%]">
                            <Row className="items-start justify-between w-[100%]">
                              <Button
                                className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                                size="lgIcn"
                                variant="icbOutlineBlack900201_2"
                              >
                                <Img
                                  src="images/img_user_45X45.svg"
                                  className="flex items-center justify-center"
                                  alt="user One"
                                />
                              </Button>
                              <Column className="items-center justify-start mt-[3px] w-[69%]">
                                <Text
                                  className="font-semibold text-black_900 w-[auto]"
                                  variant="body10"
                                >
                                  {"<Member Name>"}
                                </Text>
                                <Text className="TitleatCompa" variant="body12">
                                  {"Title at <Company>"}
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                            shape="icbCircleBorder15"
                            size="mdIcn"
                            variant="icbOutlineBlue700"
                          >
                            <Img
                              src="images/img_arrowdown_29X29.svg"
                              className="flex items-center justify-center"
                              alt="arrowdown One"
                            />
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="pages">
                      <Column
                        className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_image_14.png')",
                        }}
                      >
                        <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                          <Button
                            className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[13%]"
                            shape="CircleBorder12"
                            size="sm"
                            variant="GradientDeeporangeA400Pink900"
                          >
                            Buy
                          </Button>
                          <Img
                            src="images/img_group51.svg"
                            className="GroupFiftyOne"
                            alt="GroupFifty Two"
                          />
                          <Row className="items-center justify-end mb-[2px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                            <Img
                              src="images/img_vendorsilver.png"
                              className="VendorPlatinum"
                              alt="VendorSilver"
                            />
                            <Img
                              src="images/img_ambassadorplat.png"
                              className="AmbassadorGold"
                              alt="AmbassadorPlat"
                            />
                          </Row>
                        </Column>
                      </Column>
                      <Column className="font-prompt justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[93%]">
                        <Text className="columntitleoftheg" variant="body7">
                          {"<Title of the Gig>"}
                        </Text>
                        <Row className="font-poppins items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[67%]">
                          <Row className="items-center justify-evenly w-[37%]">
                            <Img
                              src="images/img_calendar_16X16.svg"
                              className="clock"
                              alt="calendar Two"
                            />
                            <Text className="date" variant="body12">
                              15-Oct-2022
                            </Text>
                          </Row>
                          <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[11%]">
                            <Img
                              src="images/img_thumbsup.svg"
                              className="clock"
                              alt="thumbsup Two"
                            />
                            <Text className="likes" variant="body12">
                              0
                            </Text>
                          </Row>
                          <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[21%]">
                            <Img
                              src="images/img_star.svg"
                              className="clock"
                              alt="star Two"
                            />
                            <Text className="ratings" variant="body12">
                              5(20)
                            </Text>
                          </Row>
                          <Row className="items-center justify-evenly xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[17%]">
                            <Img
                              src="images/img_share.svg"
                              className="clock"
                              alt="share Two"
                            />
                            <Text className="shares1" variant="body12">
                              320
                            </Text>
                          </Row>
                        </Row>
                        <Row className="font-poppins items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
                          <Button
                            className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillBlue700"
                          >
                            Tag
                          </Button>
                          <Button
                            className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillBlue700"
                          >
                            Tag
                          </Button>
                          <Button
                            className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillBlue700"
                          >
                            Tag
                          </Button>
                          <Button
                            className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillBlue700"
                          >
                            Tag
                          </Button>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                            shape="icbCircleBorder15"
                            size="mdIcn"
                            variant="icbOutlineBlue700"
                          >
                            <Img
                              src="images/img_overflowmenu.svg"
                              className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                              alt="overflowmenu Two"
                            />
                          </Button>
                        </Row>
                        <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                        <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] py-[1px] w-[44%]">
                          <Column className="items-center w-[27%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Img
                                src="images/img_volume.svg"
                                className="clock"
                                alt="volume Two"
                              />
                              <Text
                                className="font-semibold text-bluegray_400 w-[auto]"
                                variant="body12"
                              >
                                500
                              </Text>
                            </Row>
                          </Column>
                          <Row className="items-start justify-center xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] w-[35%]">
                            <Img
                              src="images/img_trophy.svg"
                              className="clock"
                              alt="trophy Two"
                            />
                            <Text className="status" variant="body12">
                              3 Days
                            </Text>
                          </Row>
                          <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[20%]">
                            <Img
                              src="images/img_checkmark.svg"
                              className="clock"
                              alt="checkmark Two"
                            />
                            <Text className="soldtimes" variant="body12">
                              15
                            </Text>
                          </Row>
                        </Row>
                        <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                        <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                          <Column className="items-center w-[47%]">
                            <Row className="items-start justify-between w-[100%]">
                              <Button
                                className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                                size="lgIcn"
                                variant="icbOutlineBlack900201_2"
                              >
                                <Img
                                  src="images/img_user_45X45.svg"
                                  className="flex items-center justify-center"
                                  alt="user Two"
                                />
                              </Button>
                              <Column className="items-center justify-start mt-[3px] w-[69%]">
                                <Text
                                  className="font-semibold text-black_900 w-[auto]"
                                  variant="body10"
                                >
                                  {"<Member Name>"}
                                </Text>
                                <Text className="TitleatCompa" variant="body12">
                                  {"Title at <Company>"}
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                            shape="icbCircleBorder15"
                            size="mdIcn"
                            variant="icbOutlineBlue700"
                          >
                            <Img
                              src="images/img_arrowdown_29X29.svg"
                              className="flex items-center justify-center"
                              alt="arrowdown Two"
                            />
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                  </List>
                </Column>
              </Column>
            </Column>
            <Column className="absolute items-center justify-start left-[0] lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] top-[0] w-[66%]">
              <Column className="justify-start w-[100%]">
                <Text
                  className="capitalize text-black_900 w-[auto]"
                  variant="body2"
                >
                  <span className="text-black_900 font-prompt font-extrabold lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[34px]">
                    You will get a modern{" "}
                  </span>
                  <span className="text-black_900 font-prompt font-extrabold lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[34px]">
                    political campaign LOGO
                  </span>
                  <span className="text-black_900 font-prompt font-extrabold lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[34px]">
                    {" "}
                  </span>
                  <span className="text-black_900 font-prompt font-extrabold lg:text-[20px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[34px]">
                    design
                  </span>
                </Text>
                <Column className="justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[50%]">
                  <Text className="column500k" variant="body10">
                    <span className="text-gray_501 font-prompt font-normal not-italic lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                      {"<Category> "}
                    </span>
                    <span className="text-gray_501 font-prompt lg:text-[6px] xl:text-[8px] 2xl:text-[9px] 3xl:text-[11px]">
                      {" "}
                    </span>
                    <span className="text-gray_501 font-fontawesomefree font-normal lg:text-[6px] xl:text-[8px] 2xl:text-[9px] 3xl:text-[11px]">
                      angle-double-right
                    </span>
                    <span className="text-gray_501 font-prompt lg:text-[6px] xl:text-[8px] 2xl:text-[9px] 3xl:text-[11px]">
                      {" "}
                    </span>
                    <span className="text-gray_501 font-prompt font-normal not-italic lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                      {"<Sub-Category> "}
                    </span>
                    <span className="text-gray_501 font-prompt lg:text-[6px] xl:text-[8px] 2xl:text-[9px] 3xl:text-[11px]">
                      {" "}
                    </span>
                    <span className="text-gray_501 font-fontawesomefree font-normal lg:text-[6px] xl:text-[8px] 2xl:text-[9px] 3xl:text-[11px]">
                      angle-double-right
                    </span>
                    <span className="text-gray_501 font-prompt lg:text-[6px] xl:text-[8px] 2xl:text-[9px] 3xl:text-[11px]">
                      {" "}
                    </span>
                    <span className="text-gray_501 font-prompt font-normal not-italic lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                      {"< Branch> "}
                    </span>
                  </Text>
                  <Row className="font-poppins items-center justify-between lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] py-[2px] w-[100%]">
                    <Row className="items-center justify-evenly w-[35%]">
                      <Img
                        src="images/img_iconverifiedi.svg"
                        className="clock"
                        alt="iconverifiedi"
                      />
                      <Text
                        className="font-medium text-bluegray_400 w-[auto]"
                        variant="body10"
                      >
                        <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                          ID :{" "}
                        </span>
                        <span className="text-gray_501 font-poppins font-bold lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                          ASS-PRJ-1,255
                        </span>
                      </Text>
                    </Row>
                    <Row className="items-start justify-evenly w-[53%]">
                      <Img
                        src="images/img_clock.svg"
                        className="clock"
                        alt="clock"
                      />
                      <Text className="rowclock7" variant="body10">
                        <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                          Posted
                        </span>
                        <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                          :
                        </span>
                        <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                          {" "}
                        </span>
                        <span className="text-gray_501 font-poppins font-bold lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                          12-Dec-2022 11:45 PM
                        </span>
                      </Text>
                    </Row>
                  </Row>
                </Column>
              </Column>
              <Line className="bg-bluegray_102 h-[1px] lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] rounded-radius05 w-[100%]" />
              <Column className="items-center justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Stack
                    className="bg-cover bg-repeat lg:h-[334px] xl:h-[418px] 2xl:h-[470px] 3xl:h-[564px] rounded-radius15 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group543.png')",
                    }}
                  >
                    <Img
                      src="images/img_arrows_40X1011.svg"
                      className="absolute lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] top-[0] w-[100%]"
                      alt="arrows One"
                    />
                  </Stack>
                  <Row className="items-center justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                    <Img
                      src="images/img_group543.png"
                      className="RectangleSeven"
                      alt="RectangleSeven"
                    />
                    <Img
                      src="images/img_rectangle8.png"
                      className="RectangleSeven"
                      alt="RectangleEight"
                    />
                    <Img
                      src="images/img_rectangle9.png"
                      className="RectangleSeven"
                      alt="RectangleNine"
                    />
                    <Img
                      src="images/img_rectangle10.png"
                      className="RectangleSeven"
                      alt="RectangleTen"
                    />
                  </Row>
                </Column>
              </Column>
              <Line className="bg-bluegray_102 h-[1px] lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] rounded-radius05 w-[100%]" />
              <Column className="justify-start lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[100%]">
                <Text className="ml-[1px] AllTimeCommun" variant="body7">
                  Service Details
                </Text>
                <Text
                  className="capitalize font-normal font-poppins leading-[140.00%] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] not-italic text-gray_602 w-[100%]"
                  variant="body9"
                >
                  Welcome to my political campaign Logo design gig upwork.com
                  <br />
                  <br />
                  <br />
                  <br />
                  Hello sir,
                  <br />
                  <br />
                  Are you Looking for an Awesome Political logo design for your
                  political campaign? So you are in the right
                  <br />
                  place I am a specialist in any type of high-quality logo
                  design. If you want high-quality work then please
                  <br />
                  work with me.
                </Text>
                <Stack className="font-poppins lg:h-[158px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] w-[43%]">
                  <Stack className="absolute bottom-[0] lg:h-[158px] xl:h-[197px] 2xl:h-[222px] 3xl:h-[266px] w-[100%]">
                    <Text
                      className="absolute capitalize font-normal leading-[140.00%] not-italic text-gray_602 w-[100%]"
                      variant="body9"
                    >
                      <span className="text-black_900 font-poppins lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                        You will get in my service:
                        <br />
                        <br />
                      </span>
                      <span className="text-gray_602 font-poppins lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                        <br /> Unlimited free revision.
                        <br />
                        <br />
                        <br />
                        <br /> Awesome political campaign logo
                        <br />
                        <br />
                        <br />
                        <br /> Transparent Background file format
                        <br />
                        <br />
                        <br />
                        <br /> High-Quality JPG, JPEG or PNG File (300 DPI)
                        <br />
                        <br />
                        <br />
                        <br /> Editable source file forma … <br />
                      </span>
                      <span className="text-blue_801 font-poppins lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                        more
                      </span>
                    </Text>
                    <Column className="absolute h-[max-content] inset-y-[0] items-center justify-start left-[0] my-[auto] w-[4%]">
                      <Img
                        src="images/img_checkmark_14X14.svg"
                        className="lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[17px] xl:w-[11px] 2xl:w-[13px] 3xl:w-[16px] lg:w-[9px]"
                        alt="checkmark Three"
                      />
                      <Img
                        src="images/img_checkmark_14X14.svg"
                        className="lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[17px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] xl:w-[11px] 2xl:w-[13px] 3xl:w-[16px] lg:w-[9px]"
                        alt="checkmark Four"
                      />
                      <Img
                        src="images/img_checkmark_14X14.svg"
                        className="lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[17px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] xl:w-[11px] 2xl:w-[13px] 3xl:w-[16px] lg:w-[9px]"
                        alt="checkmark Five"
                      />
                      <Img
                        src="images/img_checkmark_14X14.svg"
                        className="lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[17px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] xl:w-[11px] 2xl:w-[13px] 3xl:w-[16px] lg:w-[9px]"
                        alt="checkmark Six"
                      />
                    </Column>
                  </Stack>
                  <Img
                    src="images/img_checkmark_14X14.svg"
                    className="absolute bottom-[0] lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[17px] left-[0] xl:w-[11px] 2xl:w-[13px] 3xl:w-[16px] lg:w-[9px]"
                    alt="checkmark Seven"
                  />
                </Stack>
                <Row className="border border-bluegray_102 border-solid items-center lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[40px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] rounded-radius15 w-[100%]">
                  <Column className="lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] w-[29%]">
                    <Text className="AllTimeCommun" variant="body9">
                      Logo Style
                    </Text>
                    <Text
                      className="capitalize font-medium font-poppins lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] text-gray_502 w-[auto]"
                      variant="body9"
                    >
                      Minimalist, Freestyle, Logotype
                    </Text>
                  </Column>
                  <Line className="bg-bluegray_102 lg:h-[53px] xl:h-[66px] 2xl:h-[74px] 3xl:h-[89px] mb-[1px] lg:ml-[101px] xl:ml-[127px] 2xl:ml-[142px] 3xl:ml-[171px] rounded-radius05 w-[1px]" />
                  <Column className="lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[32px] w-[38%]">
                    <Text className="AllTimeCommun" variant="body9">
                      File Format
                    </Text>
                    <Text
                      className="capitalize font-medium font-poppins 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-gray_502 w-[auto]"
                      variant="body9"
                    >
                      AI, EPS, GIF, JPG, PDF, PNG, PSD, SVG, TIFF
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Stack className="lg:h-[412px] xl:h-[516px] 2xl:h-[580px] 3xl:h-[696px] lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[100%]">
                <div className="absolute border border-bluegray_102 border-solid bottom-[0] lg:h-[373px] xl:h-[466px] 2xl:h-[525px] 3xl:h-[629px] rounded-radius15 w-[100%]"></div>
                <Column className="absolute inset-x-[0] items-center justify-start top-[0] w-[100%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columntitleofthec" variant="body7">
                      What’s Included
                    </Text>
                    <Row className="items-start lg:ml-[20px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[64px] w-[86%]">
                      <Text className="rownameoftheve_one" variant="body7">
                        Service Tiers
                      </Text>
                      <Text
                        className="capitalize font-semibold leading-[120.00%] lg:ml-[108px] xl:ml-[135px] 2xl:ml-[152px] 3xl:ml-[182px] mt-[1px] text-black_900 text-center w-[7%]"
                        variant="body7"
                      >
                        Basic
                        <br />
                        $30
                      </Text>
                      <Text
                        className="capitalize font-semibold leading-[120.00%] 2xl:ml-[107px] 3xl:ml-[129px] lg:ml-[76px] xl:ml-[95px] text-black_900 text-center w-[12%]"
                        variant="body7"
                      >
                        Standard
                        <br />
                        $70
                      </Text>
                      <Text
                        className="capitalize font-semibold leading-[120.00%] 3xl:ml-[117px] lg:ml-[69px] xl:ml-[87px] 2xl:ml-[98px] text-black_900 text-center w-[13%]"
                        variant="body7"
                      >
                        Advanced
                        <br />
                        $120
                      </Text>
                    </Row>
                    <Row className="bg-gray_52 font-poppins items-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[40px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                      <Text
                        className="lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[25px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] rowdeliverytime"
                        variant="body9"
                      >
                        Delivery Time
                      </Text>
                      <Text
                        className="lg:ml-[119px] xl:ml-[149px] 2xl:ml-[168px] 3xl:ml-[202px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] rowdeliverytime"
                        variant="body9"
                      >
                        3 days
                      </Text>
                      <Text
                        className="xl:ml-[107px] 2xl:ml-[121px] 3xl:ml-[145px] lg:ml-[86px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] rowdeliverytime"
                        variant="body9"
                      >
                        5 days
                      </Text>
                      <Text
                        className="xl:ml-[120px] 2xl:ml-[135px] 3xl:ml-[162px] lg:ml-[96px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] rowdeliverytime"
                        variant="body9"
                      >
                        7 days
                      </Text>
                    </Row>
                    <Row className="font-poppins items-center lg:ml-[20px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[85%]">
                      <Text
                        className="mb-[1px] rowdeliverytime"
                        variant="body9"
                      >
                        Number of Revisions
                      </Text>
                      <Text
                        className="2xl:ml-[102px] 3xl:ml-[123px] lg:ml-[73px] xl:ml-[91px] rowdeadlines"
                        variant="body9"
                      >
                        Unlimited
                      </Text>
                      <Text
                        className="2xl:ml-[101px] 3xl:ml-[121px] lg:ml-[71px] xl:ml-[89px] rowdeadlines"
                        variant="body9"
                      >
                        Unlimited
                      </Text>
                      <Text
                        className="xl:ml-[102px] 2xl:ml-[115px] 3xl:ml-[138px] lg:ml-[81px] rowdeadlines"
                        variant="body9"
                      >
                        Unlimited
                      </Text>
                    </Row>
                    <Row className="bg-gray_52 font-poppins items-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                      <Text
                        className="lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[25px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] rowdeliverytime"
                        variant="body9"
                      >
                        Number of Initial Concepts
                      </Text>
                      <Text
                        className="capitalize 3xl:ml-[102px] lg:ml-[60px] xl:ml-[76px] 2xl:ml-[85px] rowlogotransparen_one"
                        variant="body9"
                      >
                        3
                      </Text>
                      <Text
                        className="capitalize lg:ml-[115px] xl:ml-[144px] 2xl:ml-[162px] 3xl:ml-[195px] rowlogotransparen_one"
                        variant="body9"
                      >
                        6
                      </Text>
                      <Text
                        className="capitalize lg:ml-[125px] xl:ml-[156px] 2xl:ml-[176px] 3xl:ml-[211px] rowlogotransparen_one"
                        variant="body9"
                      >
                        9
                      </Text>
                    </Row>
                    <Row className="font-poppins items-start lg:ml-[20px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[82%]">
                      <Column className="items-center justify-start mt-[2px] w-[27%]">
                        <Text className="rowdeliverytime" variant="body9">
                          Printable Resolution File
                        </Text>
                      </Column>
                      <Img
                        src="images/img_group69597.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] 2xl:ml-[107px] 3xl:ml-[129px] lg:ml-[76px] xl:ml-[95px] w-[57%]"
                        alt="Group69597"
                      />
                    </Row>
                    <Row className="bg-gray_52 font-poppins items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                      <Text
                        className="lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[25px] rowdeliverytime"
                        variant="body9"
                      >
                        Logo Transparency
                      </Text>
                      <Img
                        src="images/img_group69597.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] 2xl:mr-[110px] 3xl:mr-[132px] lg:mr-[78px] xl:mr-[98px] my-[3px] w-[48%]"
                        alt="Group69598"
                      />
                    </Row>
                    <Row className="font-poppins items-end lg:ml-[20px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[82%]">
                      <Column className="items-center justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[13%]">
                        <Text className="rowdeliverytime" variant="body9">
                          3D Mockup
                        </Text>
                      </Column>
                      <Img
                        src="images/img_checkmark_20X20.svg"
                        className="mb-[3px] lg:ml-[143px] xl:ml-[179px] 2xl:ml-[202px] 3xl:ml-[242px] calendar"
                        alt="checkmark Eight"
                      />
                      <Img
                        src="images/img_checkmark_20X20.svg"
                        className="mb-[3px] lg:ml-[109px] xl:ml-[137px] 2xl:ml-[154px] 3xl:ml-[185px] calendar"
                        alt="checkmark Nine"
                      />
                      <Img
                        src="images/img_checkmark_20X20.svg"
                        className="mb-[3px] lg:ml-[118px] xl:ml-[148px] 2xl:ml-[166px] 3xl:ml-[200px] calendar"
                        alt="checkmark Ten"
                      />
                    </Row>
                    <Row className="bg-gray_52 items-start lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] w-[100%]">
                      <Text
                        className="font-poppins lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] rowstarone_one"
                        variant="body9"
                      >
                        Source Files
                      </Text>
                      <Text
                        className="font-inter lg:ml-[143px] xl:ml-[179px] 2xl:ml-[202px] 3xl:ml-[242px] rowcut"
                        variant="body9"
                      >
                        -
                      </Text>
                      <Text
                        className="font-inter lg:ml-[117px] xl:ml-[146px] 2xl:ml-[164px] 3xl:ml-[197px] rowcut"
                        variant="body9"
                      >
                        -
                      </Text>
                      <Img
                        src="images/img_checkmark_20X20.svg"
                        className="lg:ml-[123px] xl:ml-[154px] 2xl:ml-[173px] 3xl:ml-[208px] calendar"
                        alt="checkmark Eleven"
                      />
                    </Row>
                    <Row className="items-start lg:ml-[20px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[82%]">
                      <Row className="items-center justify-between mt-[2px] w-[45%]">
                        <Text
                          className="font-poppins mb-[1px] rowdeliverytime"
                          variant="body9"
                        >
                          Vector File
                        </Text>
                        <Text
                          className="font-inter mt-[1px] Amazon"
                          variant="body9"
                        >
                          -
                        </Text>
                      </Row>
                      <Img
                        src="images/img_checkmark_20X20.svg"
                        className="lg:ml-[113px] xl:ml-[142px] 2xl:ml-[160px] 3xl:ml-[192px] calendar"
                        alt="checkmark Twelve"
                      />
                      <Img
                        src="images/img_checkmark_20X20.svg"
                        className="lg:ml-[118px] xl:ml-[148px] 2xl:ml-[166px] 3xl:ml-[200px] calendar"
                        alt="checkmark Thirteen"
                      />
                    </Row>
                    <Row className="bg-gray_52 items-start justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] w-[100%]">
                      <Text
                        className="font-poppins lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] my-[1px] rowdeliverytime"
                        variant="body9"
                      >
                        Social Media Kit
                      </Text>
                      <Text className="font-inter rowlocation4" variant="body9">
                        -
                      </Text>
                      <Text className="font-inter rowlocation4" variant="body9">
                        -
                      </Text>
                      <Text
                        className="font-inter 2xl:mr-[112px] 3xl:mr-[134px] lg:mr-[79px] xl:mr-[99px] rowlocation4"
                        variant="body9"
                      >
                        -
                      </Text>
                    </Row>
                    <Row className="items-start lg:ml-[20px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[81%]">
                      <Text
                        className="font-poppins rowdeadlines"
                        variant="body9"
                      >
                        Stationery Design
                      </Text>
                      <Text
                        className="font-inter lg:ml-[113px] xl:ml-[141px] 2xl:ml-[159px] 3xl:ml-[190px] Amazon"
                        variant="body9"
                      >
                        -
                      </Text>
                      <Text
                        className="font-inter lg:ml-[117px] xl:ml-[146px] 2xl:ml-[164px] 3xl:ml-[197px] Amazon"
                        variant="body9"
                      >
                        -
                      </Text>
                      <Text
                        className="font-inter lg:ml-[127px] xl:ml-[159px] 2xl:ml-[179px] 3xl:ml-[214px] Amazon"
                        variant="body9"
                      >
                        -
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Column className="justify-start lg:mt-[21px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                <Text className="columntitleofthec" variant="body7">
                  Get more with Service Add-Ons
                </Text>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[25px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="listicandesignyo">
                    <Row className="items-center justify-between mt-[3px] w-[100%]">
                      <Column className="font-poppins w-[68%]">
                        <CheckBox
                          className="capitalize font-normal not-italic 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[100%]"
                          inputClassName="h-[20px] mr-[5px] w-[20px]"
                          name="Icandesignyo"
                          label="I can design your business cards, letterhead & compliment slips"
                        ></CheckBox>
                        <Text className="columnicandesignyo" variant="body10">
                          Requires no additional time
                        </Text>
                      </Column>
                      <Text className="rowcoverletter_one" variant="body2">
                        +$144
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 border border-bluegray_102 border-solid items-center justify-end lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius15 w-[100%]">
                    <Row className="items-center justify-between mt-[1px] w-[100%]">
                      <Column className="font-poppins w-[42%]">
                        <CheckBox
                          className="capitalize font-normal not-italic 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[100%]"
                          inputClassName="h-[20px] mr-[5px] w-[20px]"
                          name="Icandesignyo One"
                          label="I can design your business cards only"
                        ></CheckBox>
                        <Text
                          className="columnicandesignyo_one"
                          variant="body10"
                        >
                          Requires no additional time
                        </Text>
                      </Column>
                      <Text className="rowcoverletter_one" variant="body2">
                        +$92
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 border border-bluegray_102 border-solid items-center justify-end lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius15 w-[100%]">
                    <Row className="items-center justify-between mt-[1px] w-[100%]">
                      <Column className="font-poppins w-[68%]">
                        <CheckBox
                          className="capitalize font-normal not-italic 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[100%]"
                          inputClassName="h-[20px] mr-[5px] w-[20px]"
                          name="Icandesignyo Two"
                          label="I can design your business cards, letterhead & compliment slips"
                        ></CheckBox>
                        <Text
                          className="columnicandesignyo_one"
                          variant="body10"
                        >
                          Requires no additional time
                        </Text>
                      </Column>
                      <Text className="rowcoverletter_one" variant="body2">
                        +$69
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 border border-bluegray_102 border-solid items-center justify-end lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius15 w-[100%]">
                    <Row className="items-center justify-between mt-[1px] w-[100%]">
                      <Column className="font-poppins w-[29%]">
                        <CheckBox
                          className="capitalize font-normal not-italic 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[100%]"
                          inputClassName="h-[20px] mr-[5px] w-[20px]"
                          name="Icanaddasec"
                          label="I can add a second logo"
                        ></CheckBox>
                        <Text
                          className="columnicandesignyo_one"
                          variant="body10"
                        >
                          Requires no additional time
                        </Text>
                      </Column>
                      <Text className="rowcoverletter_one" variant="body2">
                        +$114
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 border border-bluegray_102 border-solid items-center justify-end lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius15 w-[100%]">
                    <Row className="items-center justify-between mt-[1px] w-[100%]">
                      <Column className="font-poppins w-[38%]">
                        <CheckBox
                          className="capitalize font-normal not-italic 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[100%]"
                          inputClassName="h-[20px] mr-[5px] w-[20px]"
                          name="Icanadd2mor"
                          label="I can add 2 more design concepts"
                        ></CheckBox>
                        <Text
                          className="columnicandesignyo_one"
                          variant="body10"
                        >
                          Requires no additional time
                        </Text>
                      </Column>
                      <Text className="rowcoverletter_one" variant="body2">
                        +$46
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 border border-bluegray_102 border-solid items-center justify-end lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius15 w-[100%]">
                    <Row className="items-center justify-between mt-[1px] w-[100%]">
                      <Column className="font-poppins w-[36%]">
                        <CheckBox
                          className="capitalize font-normal not-italic 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[100%]"
                          inputClassName="h-[20px] mr-[5px] w-[20px]"
                          name="Icanadd1mor"
                          label="I can add 1 more design concept"
                        ></CheckBox>
                        <Text
                          className="columnicandesignyo_one"
                          variant="body10"
                        >
                          Requires no additional time
                        </Text>
                      </Column>
                      <Text className="rowcoverletter_one" variant="body2">
                        +$29
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 border border-bluegray_102 border-solid items-center justify-end lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius15 w-[100%]">
                    <Row className="items-center justify-between mt-[1px] w-[100%]">
                      <Column className="font-poppins w-[41%]">
                        <CheckBox
                          className="capitalize font-normal not-italic 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[100%]"
                          inputClassName="h-[20px] mr-[5px] w-[20px]"
                          name="Icandelivera"
                          label="I can deliver all work in 1 working day"
                        ></CheckBox>
                        <Text
                          className="columnicandesignyo_one"
                          variant="body10"
                        >
                          Additional 3 working days
                        </Text>
                      </Column>
                      <Text className="rowcoverletter_one" variant="body2">
                        +$230
                      </Text>
                    </Row>
                  </Column>
                </List>
              </Column>
              <Line className="bg-bluegray_102 h-[1px] lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] rounded-radius05 w-[100%]" />
              <Column className="justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]">
                <Column className="items-center justify-start w-[95%]">
                  <Row className="items-end justify-between w-[100%]">
                    <Column className="justify-start mb-[3px] w-[39%]">
                      <Row className="items-end w-[60%]">
                        <Img
                          src="images/img_star1.svg"
                          className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] rounded-radius06 lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[32px]"
                          alt="StarOne"
                        />
                        <Text
                          className="mb-[2px] ml-[4px] columnvideocamera_one"
                          variant="body7"
                        >
                          <span className="text-black_900 font-prompt lg:text-[13px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px]">
                            5.0{" "}
                          </span>
                          <span className="text-blue_801 font-prompt lg:text-[13px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px]">
                            (12 reviews)
                          </span>
                        </Text>
                      </Row>
                      <Row className="font-poppins items-start justify-between lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                        <Text
                          className="mt-[2px] rowstarscounter"
                          variant="body9"
                        >
                          5 stars
                        </Text>
                        <div
                          className="lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] overflow-hidden relative w-[66%]"
                          name="Group545"
                        >
                          <div className="w-full h-full absolute bg-undefined"></div>
                          <div
                            className="h-full absolute"
                            style={{ width: "0%" }}
                          ></div>
                        </div>
                        <Text className="rowstarscounter" variant="body9">
                          (10)
                        </Text>
                      </Row>
                      <Row className="font-poppins items-start justify-between ml-[1px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[98%]">
                        <Text
                          className="mt-[2px] rowstarscounter"
                          variant="body9"
                        >
                          4 stars
                        </Text>
                        <div
                          className="lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] overflow-hidden relative w-[68%]"
                          name="Group546"
                        >
                          <div className="w-full h-full absolute bg-blue_700 rounded-[2.5px]"></div>
                          <div
                            className="h-full absolute bg-blue_700  rounded-[2.5px]"
                            style={{ width: "100%" }}
                          ></div>
                        </div>
                        <Text className="rowstarscounter" variant="body9">
                          (2)
                        </Text>
                      </Row>
                      <List
                        className="font-poppins gap-[0] min-h-[auto] ml-[1px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[98%]"
                        orientation="vertical"
                      >
                        <Row className="items-start justify-between lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                          <Text className="starsCounter_Two" variant="body9">
                            3 stars
                          </Text>
                          <Line className="bg-bluegray_101 h-[5px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] rounded-radius251 w-[67%]" />
                          <Text className="rowstarscounter_two" variant="body9">
                            (0)
                          </Text>
                        </Row>
                        <Row className="items-start justify-between lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                          <Text className="starsCounter_Two" variant="body9">
                            4 stars
                          </Text>
                          <Line className="bg-bluegray_101 h-[5px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] rounded-radius251 w-[67%]" />
                          <Text className="rowstarscounter_two" variant="body9">
                            (0)
                          </Text>
                        </Row>
                        <Row className="items-start justify-between lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                          <Text className="starsCounter_Two" variant="body9">
                            1 stars
                          </Text>
                          <Line className="bg-bluegray_101 h-[5px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] rounded-radius251 w-[67%]" />
                          <Text className="rowstarscounter_two" variant="body9">
                            (0)
                          </Text>
                        </Row>
                      </List>
                    </Column>
                    <Column className="font-poppins items-center justify-start lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] rounded-radius06 w-[52%]">
                      <Column className="justify-start w-[100%]">
                        <Text className="XAxis" variant="body9">
                          Rating breakdown
                        </Text>
                        <Grid className="lg:gap-[29px] xl:gap-[36px] 2xl:gap-[40px] 3xl:gap-[49px] grid grid-cols-2 lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                          <Row className="items-start justify-between rounded-radius06 w-[100%]">
                            <Text className="rowavailability" variant="body9">
                              Availability
                            </Text>
                            <Row className="items-start justify-evenly mb-[3px] rounded-radius06 w-[24%]">
                              <Img
                                src="images/img_star1_18X18.svg"
                                className="StarOne_One"
                                alt="StarOne One"
                              />
                              <Text className="rowstarone_one" variant="body9">
                                5.0
                              </Text>
                            </Row>
                          </Row>
                          <Row className="items-start justify-between pb-[3px] rounded-radius06 w-[100%]">
                            <Text className="rowdeadlines" variant="body9">
                              Deadlines
                            </Text>
                            <Row className="items-start justify-evenly rounded-radius06 w-[24%]">
                              <Img
                                src="images/img_star1_1.svg"
                                className="StarOne_One"
                                alt="StarOne Two"
                              />
                              <Text className="rowstarone_one" variant="body9">
                                5.0
                              </Text>
                            </Row>
                          </Row>
                          <Row className="items-start justify-between pb-[3px] rounded-radius06 w-[100%]">
                            <Text className="rowdeadlines" variant="body9">
                              Skill
                            </Text>
                            <Row className="items-start justify-evenly rounded-radius06 w-[24%]">
                              <Img
                                src="images/img_star1_2.svg"
                                className="StarOne_One"
                                alt="StarOne Three"
                              />
                              <Text className="rowstarone_one" variant="body9">
                                5.0
                              </Text>
                            </Row>
                          </Row>
                          <Row className="items-start justify-between rounded-radius06 w-[100%]">
                            <Text className="rowavailability" variant="body9">
                              Co-operation
                            </Text>
                            <Row className="items-start justify-evenly mb-[3px] rounded-radius06 w-[24%]">
                              <Img
                                src="images/img_star1_3.svg"
                                className="StarOne_One"
                                alt="StarOne Four"
                              />
                              <Text className="rowstarone_one" variant="body9">
                                5.0
                              </Text>
                            </Row>
                          </Row>
                          <Row className="items-start justify-between rounded-radius06 w-[100%]">
                            <Text className="rowavailability" variant="body9">
                              Quality
                            </Text>
                            <Row className="items-start justify-evenly mb-[3px] rounded-radius06 w-[24%]">
                              <Img
                                src="images/img_star1_4.svg"
                                className="StarOne_One"
                                alt="StarOne Five"
                              />
                              <Text className="rowstarone_one" variant="body9">
                                5.0
                              </Text>
                            </Row>
                          </Row>
                          <Row className="items-start justify-between pb-[3px] rounded-radius06 w-[100%]">
                            <Text className="rowdeadlines" variant="body9">
                              Communication
                            </Text>
                            <Row className="items-start justify-evenly rounded-radius06 w-[24%]">
                              <Img
                                src="images/img_star1_5.svg"
                                className="StarOne_One"
                                alt="StarOne Six"
                              />
                              <Text className="rowstarone_one" variant="body9">
                                4.9
                              </Text>
                            </Row>
                          </Row>
                        </Grid>
                      </Column>
                    </Column>
                  </Row>
                </Column>
                <List
                  className="font-poppins gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[8px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="listgccsalesdirec">
                    <Column className="justify-start w-[97%]">
                      <Row className="items-end w-[29%]">
                        <Row className="items-start justify-between w-[53%]">
                          <div className="bg-bluegray_101 lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                          <Column className="justify-start mt-[3px] pb-[1px] rounded-radius06 w-[49%]">
                            <Text className="rowdeliverytime" variant="body9">
                              Jaun M.
                            </Text>
                            <Row className="font-inter items-center lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] rounded-radius06 w-[87%]">
                              <Img
                                src="images/img_star1_6.svg"
                                className="StarOne_Seven"
                                alt="StarOne Seven"
                              />
                              <Text className="ml-[2px] Amazon" variant="body9">
                                5.00
                              </Text>
                            </Row>
                          </Column>
                        </Row>
                        <Row className="items-end justify-evenly mb-[1px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[45%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="calendar"
                            alt="calendar Three"
                          />
                          <Text className="rowcalendar" variant="body11">
                            15-Jan-2022
                          </Text>
                        </Row>
                      </Row>
                      <Text
                        className="capitalize font-normal leading-[140.00%] lg:ml-[43px] xl:ml-[54px] 2xl:ml-[60px] 3xl:ml-[73px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic text-black_900 w-[92%]"
                        variant="body10"
                      >
                        Sumon did an amazing job!! Delivered just what I was
                        after in a timely manner with great communication.
                        Highly recommended.
                      </Text>
                    </Column>
                  </Column>
                  <Column className="justify-start lg:my-[10px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] w-[100%]">
                    <Column className="justify-start w-[52%]">
                      <Row className="items-end w-[54%]">
                        <Row className="items-end justify-between w-[52%]">
                          <div className="bg-bluegray_101 lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                          <Column className="justify-start mb-[1px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] pb-[1px] rounded-radius06 w-[48%]">
                            <Text className="rowdeliverytime" variant="body9">
                              Ryan S.
                            </Text>
                            <Row className="font-inter items-center justify-evenly lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius06 w-[93%]">
                              <Img
                                src="images/img_star1_7.svg"
                                className="StarOne_Seven"
                                alt="StarOne Eight"
                              />
                              <Text className="Amazon" variant="body9">
                                5.00
                              </Text>
                            </Row>
                          </Column>
                        </Row>
                        <Row className="items-end justify-evenly mb-[2px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[46%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="calendar"
                            alt="calendar Four"
                          />
                          <Text className="rowcalendar" variant="body11">
                            15-Jan-2022
                          </Text>
                        </Row>
                      </Row>
                      <Text
                        className="lg:ml-[43px] xl:ml-[54px] 2xl:ml-[60px] 3xl:ml-[73px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] rowdeliverytime"
                        variant="body10"
                      >
                        Sumon Mia did great work and was very responsive.
                        <br />
                      </Text>
                    </Column>
                  </Column>
                  <Column className="items-center justify-start 2xl:mr-[102px] 3xl:mr-[123px] lg:mr-[73px] xl:mr-[91px] lg:my-[10px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] w-[87%]">
                    <Column className="justify-start w-[100%]">
                      <Row className="items-end w-[31%]">
                        <Row className="items-start justify-between w-[51%]">
                          <div className="bg-bluegray_101 lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                          <Column className="justify-start mt-[3px] pb-[1px] rounded-radius06 w-[46%]">
                            <Text className="rowdeliverytime" variant="body9">
                              Jon J.
                            </Text>
                            <Row className="font-inter items-center justify-evenly lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] rounded-radius06 w-[100%]">
                              <Img
                                src="images/img_star1_8.svg"
                                className="StarOne_Seven"
                                alt="StarOne Nine"
                              />
                              <Text className="Amazon" variant="body9">
                                5.00
                              </Text>
                            </Row>
                          </Column>
                        </Row>
                        <Row className="items-end justify-evenly mb-[2px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[47%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="calendar"
                            alt="calendar Five"
                          />
                          <Text className="rowcalendar" variant="body11">
                            15-Jan-2022
                          </Text>
                        </Row>
                      </Row>
                      <Text
                        className="capitalize font-normal leading-[140.00%] lg:ml-[43px] xl:ml-[54px] 2xl:ml-[60px] 3xl:ml-[73px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic text-black_900 w-[91%]"
                        variant="body10"
                      >
                        This freelancer provided fabulous work. All of the logos
                        provided in the initial round were great.
                        <br />
                        <br />
                        The hardest part was choosing our top pick because all
                        of them were so nice.
                        <br />
                        <br />
                        <br />
                        <br />
                        Excellent communication also.
                        <br />
                      </Text>
                    </Column>
                  </Column>
                </List>
              </Column>
              <Line className="bg-bluegray_102 h-[1px] lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] rounded-radius05 w-[100%]" />
              <Column className="items-center justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="columntitleofthec" variant="body7">
                      Frequently asked questions
                    </Text>
                    <Img
                      src="images/img_arrows.svg"
                      className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] w-[10%]"
                      alt="arrows Two"
                    />
                  </Row>
                  <Column className="font-poppins items-center justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                    <Accordion preExpanded={[0]} className="w-[100%]">
                      {" "}
                      {[...Array(9)].map((item, index) => (
                        <AccordionItem uuid={index} key={Math.random()}>
                          <Column className="items-center justify-start lg:pb-[10px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] w-[100%]">
                            <Column className="items-center justify-start py-[3px] w-[100%]">
                              <Row className="items-start justify-between w-[100%]">
                                <Text className="rowdeadlines" variant="body9">
                                  Why should you choose me over other sellers?
                                </Text>
                                <Img
                                  src="images/img_plus_15X15.svg"
                                  className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"
                                  alt="plus"
                                />
                              </Row>
                              <Column className="items-center justify-start lg:mb-[12px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[97%]">
                                <Text
                                  className="capitalize columndescription5"
                                  variant="body9"
                                >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Metus vulputate nullam aenean
                                  tortor consequat sed vitae leo. In tempor id
                                  eu, nulla sed nisl. Ornare eget ornare erat
                                  nullam non. Nunc, facilisis sit tincidunt
                                  suspendisse in nunc.
                                  <br />
                                  Sit viverra felis convallis cursus integer
                                  vitae, lacus orci duis. Tincidunt ac risus
                                  nunc id amet, laoreet. Risus mattis nisl
                                  rhoncus integer elit elit placerat justo.
                                  Facilisi amet, in nec, neque, eget massa
                                  eleifend egestas tortor. Ac erat ultricies mi
                                  tempus fermentum aliquet. Fermentum volutpat
                                  turpis feugiat nam diam sit vivamus lectus
                                  diam. Ipsum sit commodo tortor semper. Lacus
                                  venenatis morbi nulla felis, viverra vulputate
                                  cras velit cursus. At lectus eget quam elit
                                  pellentesque leo.
                                </Text>
                              </Column>
                            </Column>
                          </Column>
                          <Line className="self-center w-[100%] h-[1px] bg-bluegray_102 rounded-radius05" />
                        </AccordionItem>
                      ))}
                    </Accordion>
                    <Row className="items-start justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                      <Text className="rowdeadlines" variant="body9">
                        Order placed by mistake
                      </Text>
                      <Img
                        src="images/img_plus_15X15.svg"
                        className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"
                        alt="plus Nine"
                      />
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Column>
            <Column className="absolute font-inter items-center justify-start right-[0] top-[0] w-[32%]">
              <Column className="items-center justify-start 3xl:pb-[1173px] lg:pb-[694px] xl:pb-[869px] 2xl:pb-[977px] w-[100%]">
                <Column className="bg-white_A700 border border-bluegray_102 border-solid items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius15 w-[100%]">
                  <Column className="font-poppins items-center justify-start mt-[1px] w-[98%]">
                    <Row className="items-center justify-between xl:pr-[11px] 2xl:pr-[13px] 3xl:pr-[16px] lg:pr-[9px] w-[100%]">
                      <Row className="items-center justify-evenly w-[8%]">
                        <Img
                          src="images/img_thumbsup.svg"
                          className="clock"
                          alt="thumbsup Three"
                        />
                        <Text className="date" variant="body12">
                          0
                        </Text>
                      </Row>
                      <Row className="items-center justify-center w-[12%]">
                        <Img
                          src="images/img_share.svg"
                          className="clock"
                          alt="share Three"
                        />
                        <Text className="shares" variant="body12">
                          320
                        </Text>
                      </Row>
                      <Row className="items-start justify-center w-[15%]">
                        <Img
                          src="images/img_star.svg"
                          className="clock"
                          alt="star Three"
                        />
                        <Text className="ratings" variant="body12">
                          5(20)
                        </Text>
                      </Row>
                      <Column className="items-center w-[11%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_iconboxes1.svg"
                            className="clock"
                            alt="iconboxesOne"
                          />
                          <Text className="rowuser" variant="body12">
                            130
                          </Text>
                        </Row>
                      </Column>
                      <Column className="items-center py-[1px] w-[8%]">
                        <Row className="items-center justify-between mt-[1px] w-[100%]">
                          <Img
                            src="images/img_mail_15X16.svg"
                            className="mail4"
                            alt="mail"
                          />
                          <Text
                            className="font-medium text-bluegray_400 w-[auto]"
                            variant="body12"
                          >
                            3
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Line className="bg-bluegray_102 h-[1px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] rounded-radius05 w-[100%]" />
                    <Column className="items-center justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] w-[100%]">
                      <Row className="items-center justify-between rounded-radius18 w-[99%]">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          variant="body9"
                        >
                          Select Service Tier
                        </Text>
                        <Button
                          className="capitalize font-normal not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[38%]"
                          shape="RoundedBorder19"
                          size="sm"
                          variant="OutlineBlue7001_2"
                        >
                          Compare Tiers
                        </Button>
                      </Row>
                      <Row className="items-start justify-between lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:pb-[4px] 2xl:pb-[5px] xl:pb-[5px] 3xl:pb-[6px] w-[92%]">
                        <Column className="items-center justify-start w-[13%]">
                          <Column className="border-2 border-blue_700 border-solid lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[26px] items-center justify-start lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[8px] rounded-radius50 lg:w-[14px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[25px]">
                            <div className="bg-blue_700 3xl:h-[10px] lg:h-[6px] xl:h-[7px] 2xl:h-[8px] rounded-radius50 lg:w-[5px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[9px]"></div>
                          </Column>
                          <Text
                            className="font-medium leading-[normal] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] text-blue_700 text-center w-[100%]"
                            variant="body9"
                          >
                            Basic
                            <br />
                            $30
                          </Text>
                        </Column>
                        <Column className="items-center justify-start w-[22%]">
                          <div className="border-2 border-gray_402 border-solid lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[26px] rounded-radius50 lg:w-[14px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[25px]"></div>
                          <Text className="columnellipsefour" variant="body9">
                            Standard
                            <br />
                            $70
                          </Text>
                        </Column>
                        <Column className="items-center justify-start w-[24%]">
                          <div className="border-2 border-gray_402 border-solid lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[26px] rounded-radius50 lg:w-[14px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[25px]"></div>
                          <Text className="columnellipsefour" variant="body9">
                            Advanced
                            <br />
                            $120
                          </Text>
                        </Column>
                      </Row>
                      <Line className="bg-bluegray_102 h-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] rounded-radius05 w-[100%]" />
                    </Column>
                    <Column className="items-center justify-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[32px] w-[95%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Text className="Amazon" variant="body9">
                            Delivery Time
                          </Text>
                          <Text className="mt-[1px] Amazon" variant="body9">
                            3 days
                          </Text>
                        </Row>
                        <Row className="items-center justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                          <Text className="NumberofRevis_One" variant="body9">
                            Number of Revisions
                          </Text>
                          <Text className="mt-[1px] Amazon" variant="body9">
                            Unlimited
                          </Text>
                        </Row>
                        <Row className="items-start justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                          <Text
                            className="font-poppins rowclock_one1"
                            variant="body9"
                          >
                            Number of Initial Concepts
                          </Text>
                          <Text
                            className="font-inter mb-[4px] Amazon"
                            variant="body9"
                          >
                            3
                          </Text>
                        </Row>
                        <Row className="items-start justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                          <Text className="rowcut" variant="body9">
                            Printable Resolution File
                          </Text>
                          <Img
                            src="images/img_checkmark_20X20.svg"
                            className="calendar"
                            alt="checkmark Fourteen"
                          />
                        </Row>
                        <Row className="items-end justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                          <Text
                            className="rowlogotransparen_one"
                            variant="body9"
                          >
                            Logo Transparency
                          </Text>
                          <Img
                            src="images/img_checkmark_20X20.svg"
                            className="mb-[2px] calendar"
                            alt="checkmark Fifteen"
                          />
                        </Row>
                        <Row className="items-end justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                          <Text
                            className="rowlogotransparen_one"
                            variant="body9"
                          >
                            3D Mockup
                          </Text>
                          <Img
                            src="images/img_checkmark_20X20.svg"
                            className="mb-[2px] calendar"
                            alt="checkmark Sixteen"
                          />
                        </Row>
                      </Column>
                    </Column>
                    <Column className="font-inter justify-start lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                      <Line className="bg-bluegray_102 h-[1px] rounded-radius05 w-[100%]" />
                      <Row className="items-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[86%]">
                        <Button
                          className="flex lg:h-[25px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[42px] items-center justify-center lg:w-[24px] xl:w-[30px] 2xl:w-[34px] 3xl:w-[41px]"
                          shape="icbRoundedBorder3"
                          size="mdIcn"
                          variant="icbFillGray52"
                        >
                          <Img
                            src="images/img_clock_36X36.svg"
                            className="flex items-center justify-center lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px]"
                            alt="clock One"
                          />
                        </Button>
                        <Text
                          className="font-medium leading-[154.20%] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[1px] text-black_900 w-[85%]"
                          variant="body9"
                        >
                          <span className="text-black_900 font-poppins lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                            3 days{" "}
                          </span>
                          <span className="text-black_900 font-poppins font-light lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                            delivery{" "}
                          </span>
                          <span className="text-black_900 font-fontawesomefree font-normal lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                            angle-rightangle-right
                          </span>
                          <span className="text-black_900 font-poppins font-light lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                            {" "}
                          </span>
                          <span className="text-black_900 font-fontawesomefree font-normal not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                            —
                          </span>
                          <span className="text-black_900 font-poppins font-light lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                            {" "}
                            11-Dec-2022
                            <br />
                            <br />
                          </span>
                          <span className="text-gray_504 font-poppins font-light lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                            Revisions Are Not Allowed After Delivery
                          </span>
                        </Text>
                      </Row>
                      <Line className="bg-bluegray_102 h-[1px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] w-[100%]" />
                    </Column>
                  </Column>
                  <Button
                    className="capitalize font-medium font-prompt mb-[1px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center text-white_A700 w-[100%]"
                    shape="CircleBorder12"
                    size="xl"
                    variant="OutlineWhiteA7001_2"
                  >
                    Continue $30
                  </Button>
                </Column>
                <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                  <Column className="bg-white_A700 border border-bluegray_102 border-solid items-center justify-start lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius15 w-[100%]">
                    <Row className="items-start mb-[4px] rounded-radius7 w-[98%]">
                      <Column className="bg-gray_52 justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] rounded-radius7 w-[17%]">
                        <Column
                          className="bg-cover bg-repeat lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[45px] items-end justify-end 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] ml-[1px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[8px] lg:w-[26px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[44px]"
                          style={{
                            backgroundImage:
                              "url('images/img_paymentprotect.svg')",
                          }}
                        >
                          <Column
                            className="bg-cover bg-repeat justify-start mr-[1px] mt-[3px] p-[1px] rounded-radius1025 w-[80%]"
                            style={{
                              backgroundImage: "url('images/img_group548.svg')",
                            }}
                          >
                            <Text className="columnsixteen" variant="body9">
                              $
                            </Text>
                          </Column>
                        </Column>
                      </Column>
                      <Column className="font-poppins justify-start xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[79%]">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          variant="body9"
                        >
                          Payment Protection
                        </Text>
                        <Text className="FundtheServic" variant="body10">
                          Fund the Service upfront. Freelancer gets paid once
                          you are satisfied with the work.
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="font-poppins items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                  <Column className="bg-white_A700 border border-bluegray_102 border-solid justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius15 w-[100%]">
                    <Column className="justify-start ml-[2px] mt-[3px] w-[83%]">
                      <Text
                        className="font-medium text-black_900 w-[auto]"
                        variant="body9"
                      >
                        Do You Like This Service?
                      </Text>
                      <Text
                        className="capitalize font-normal 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] not-italic text-gray_502 w-[auto]"
                        variant="body10"
                      >
                        If so, Then Hit Those Like & Share Buttons Now!
                      </Text>
                    </Column>
                    <Line className="bg-bluegray_102 h-[1px] ml-[2px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius05 w-[97%]" />
                    <Row className="items-center justify-between ml-[2px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[96%]">
                      <Row className="items-end justify-between w-[16%]">
                        <Img
                          src="images/img_thumbsup.svg"
                          className="file_One1"
                          alt="thumbsup Four"
                        />
                        <Text
                          className="my-[4px] MemberName_Two"
                          variant="body10"
                        >
                          Like
                        </Text>
                      </Row>
                      <Row className="items-end justify-center w-[20%]">
                        <Img
                          src="images/img_share.svg"
                          className="file_One1"
                          alt="share Four"
                        />
                        <Text
                          className="lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] my-[4px] MemberName_Two"
                          variant="body10"
                        >
                          Share
                        </Text>
                      </Row>
                      <Row className="items-start justify-evenly w-[21%]">
                        <Img
                          src="images/img_megaphone_1.svg"
                          className="file_One1"
                          alt="megaphone"
                        />
                        <Text
                          className="font-medium lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] text-blue_700 w-[auto]"
                          variant="body10"
                        >
                          Report
                        </Text>
                      </Row>
                    </Row>
                  </Column>
                </Column>
                <Column className="font-poppins lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] pages">
                  <Column
                    className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_image_1.png')" }}
                  >
                    <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                      <Column className="items-center justify-start w-[26%]">
                        <Button
                          className="flex items-center justify-center text-center w-[97%]"
                          leftIcon={
                            <Img
                              src="images/img_mail_14X14.svg"
                              className="text-center lg:w-[9px] lg:h-[10px] lg:mr-[3px] xl:w-[11px] xl:h-[12px] xl:mr-[4px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[4px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[5px]"
                              alt="mail"
                            />
                          }
                          shape="CircleBorder12"
                          size="sm"
                          variant="GradientDeeporangeA400Pink900"
                        >
                          <div className="bg-transparent capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                            Message
                          </div>
                        </Button>
                        <Button
                          className="2xl:mt-[4px] 3xl:mt-[5px] flex items-center justify-center lg:mt-[3px] text-center w-[97%] xl:mt-[4px]"
                          leftIcon={
                            <Img
                              src="images/img_megaphone.svg"
                              className="text-center lg:w-[9px] lg:h-[10px] lg:mr-[3px] xl:w-[11px] xl:h-[12px] xl:mr-[4px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[4px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[5px]"
                              alt="megaphone"
                            />
                          }
                          shape="CircleBorder12"
                          size="sm"
                          variant="GradientGray501Bluegray400"
                        >
                          <div className="bg-transparent capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                            Endorse
                          </div>
                        </Button>
                        <Button
                          className="2xl:mt-[4px] 3xl:mt-[5px] flex items-center justify-center lg:mt-[3px] text-center w-[100%] xl:mt-[4px]"
                          leftIcon={
                            <Img
                              src="images/img_cut.svg"
                              className="text-center lg:w-[10px] lg:h-[11px] lg:mr-[3px] xl:w-[13px] xl:h-[14px] xl:mr-[4px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[4px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[5px]"
                              alt="cut"
                            />
                          }
                          shape="CircleBorder12"
                          size="sm"
                          variant="GradientRedA701Blue700"
                        >
                          <div className="bg-transparent capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                            Sponsor
                          </div>
                        </Button>
                      </Column>
                      <Img
                        src="images/img_group51.svg"
                        className="GroupFiftyOne_One"
                        alt="GroupFiftyOne"
                      />
                      <Row className="items-center justify-end mb-[1px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                        <Img
                          src="images/img_vendorsilver.png"
                          className="VendorSilver"
                          alt="VendorSilver One"
                        />
                        <Img
                          src="images/img_ambassadorgold.png"
                          className="AmbassadorGold"
                          alt="AmbassadorGold One"
                        />
                      </Row>
                    </Column>
                  </Column>
                  <Column className="items-center justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[93%]">
                    <Column className="justify-start w-[100%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Row className="items-center w-[100%]">
                          <Button
                            className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                            size="lgIcn"
                            variant="icbOutlineBlack900201_2"
                          >
                            <Img
                              src="images/img_user_45X45.svg"
                              className="flex items-center justify-center"
                              alt="user Three"
                            />
                          </Button>
                          <Column className="3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[46%]">
                            <Text
                              className="font-semibold text-black_900 w-[auto]"
                              variant="body10"
                            >
                              {"<Name of The member>"}
                            </Text>
                            <Text className="TitleatCompa" variant="body12">
                              {"Title at <Company>"}
                            </Text>
                          </Column>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center xl:ml-[102px] 2xl:ml-[115px] 3xl:ml-[138px] lg:ml-[81px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                            shape="icbCircleBorder15"
                            size="mdIcn"
                            variant="icbOutlineBlue700"
                          >
                            <Img
                              src="images/img_arrowdown_29X29.svg"
                              className="flex items-center justify-center"
                              alt="arrowdown Three"
                            />
                          </Button>
                        </Row>
                      </Column>
                      <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                      <Row className="items-center xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[65%]">
                        <Stack className="lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] w-[71%]">
                          <Row className="absolute h-[max-content] inset-y-[0] items-center justify-evenly left-[0] my-[auto] w-[59%]">
                            <Img
                              src="images/img_calendar_16X16.svg"
                              className="clock"
                              alt="calendar Six"
                            />
                            <Text className="date" variant="body10">
                              11-Nov-2022
                            </Text>
                          </Row>
                          <Column className="absolute items-center justify-start pr-[2px] py-[2px] right-[0] w-[41%]">
                            <Row className="items-start justify-evenly my-[2px] w-[100%]">
                              <Img
                                src="images/img_star.svg"
                                className="clock"
                                alt="star Four"
                              />
                              <Text className="rowstar" variant="body12">
                                5 (3.2K)
                              </Text>
                            </Row>
                          </Column>
                        </Stack>
                        <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] pt-[1px] w-[25%]">
                          <Row className="items-start justify-evenly w-[100%]">
                            <Img
                              src="images/img_globe.svg"
                              className="globe"
                              alt="globe"
                            />
                            <Text className="rowglobe" variant="body10">
                              Egypt
                            </Text>
                          </Row>
                        </Column>
                      </Row>
                      <Row className="items-center justify-evenly xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Button
                          className="font-medium 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[16%]"
                          shape="RoundedBorder4"
                          size="sm"
                          variant="FillBlue700"
                        >
                          Personal
                        </Button>
                        <Button
                          className="font-medium 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[17%]"
                          shape="RoundedBorder4"
                          size="sm"
                          variant="FillBlue700"
                        >
                          V-Author
                        </Button>
                        <Button
                          className="font-medium 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[20%]"
                          shape="RoundedBorder4"
                          size="sm"
                          variant="FillBlue700"
                        >
                          V-Employer
                        </Button>
                        <Button
                          className="font-medium 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[15%]"
                          shape="RoundedBorder4"
                          size="sm"
                          variant="FillBlue700"
                        >
                          V-Seller
                        </Button>
                        <Button
                          className="font-medium 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[17%]"
                          shape="RoundedBorder4"
                          size="sm"
                          variant="FillBlue700"
                        >
                          V-Lancer
                        </Button>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                          shape="icbCircleBorder15"
                          size="mdIcn"
                          variant="icbOutlineBlue700"
                        >
                          <Img
                            src="images/img_overflowmenu.svg"
                            className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                            alt="overflowmenu Three"
                          />
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Column className="font-poppins items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                  <Column className="bg-white_A700 border border-black_900_20 border-solid justify-start xl:p-[11px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius15 w-[100%]">
                    <Text className="lgad" variant="body13">
                      Sponsored Ads
                    </Text>
                    <Column
                      className="bg-cover bg-repeat items-center justify-start mb-[1px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] mx-[auto] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius15 w-[98%]"
                      style={{
                        backgroundImage: "url('images/img_group69704.png')",
                      }}
                    >
                      <Img
                        src="images/img_call.svg"
                        className="call10"
                        alt="call"
                      />
                      <Row className="items-start justify-center 3xl:mb-[106px] lg:mb-[62px] xl:mb-[78px] 2xl:mb-[88px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[73px] 3xl:mt-[88px] w-[24%]">
                        <Text className="rowvideo" variant="body9">
                          Video
                        </Text>
                        <Img
                          src="images/img_call.svg"
                          className="call_One2"
                          alt="call One"
                        />
                      </Row>
                    </Column>
                  </Column>
                  <Column className="font-prompt items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                    <Column className="bg-white_A700 border border-black_900_20 border-solid items-center justify-end 3xl:pr-[11px] lg:pr-[6px] xl:pr-[8px] 2xl:pr-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] rounded-radius15 w-[100%]">
                      <Column className="justify-start xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[85%]">
                        <Text
                          className="font-semibold text-black_900 w-[auto]"
                          variant="body9"
                        >
                          Interesting Profiles
                        </Text>
                        <Column className="justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                          <List
                            className="gap-[0] min-h-[auto] w-[84%]"
                            orientation="vertical"
                          >
                            <Column className="listellipsetwentyeight">
                              <Row className="items-start justify-between w-[100%]">
                                <Img
                                  src="images/img_ellipse28.png"
                                  className="lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                                  alt="EllipseTwentyEight"
                                />
                                <Column className="justify-start mt-[1px] w-[78%]">
                                  <Text className="AndrewHalls" variant="body9">
                                    Andrew Halls
                                  </Text>
                                  <Text
                                    className="SalesandMarke"
                                    variant="body12"
                                  >
                                    {"Sales and Marketing at <Company>"}
                                  </Text>
                                  <Button
                                    className="2xl:mt-[4px] 3xl:mt-[5px] flex items-center justify-center lg:mt-[3px] text-center w-[51%] xl:mt-[4px]"
                                    leftIcon={
                                      <Img
                                        src="images/img_airplane.svg"
                                        className="text-center lg:w-[8px] lg:h-[9px] lg:mr-[3px] xl:w-[10px] xl:h-[11px] xl:mr-[4px] 2xl:w-[11px] 2xl:h-[12px] 2xl:mr-[4px] 3xl:w-[13px] 3xl:h-[14px] 3xl:mr-[5px]"
                                        alt="airplane"
                                      />
                                    }
                                    shape="CircleBorder12"
                                    size="sm"
                                    variant="OutlineBlue7001_2"
                                  >
                                    <div className="bg-transparent font-medium font-poppins xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                                      Connect
                                    </div>
                                  </Button>
                                </Column>
                              </Row>
                            </Column>
                            <Column className="items-center justify-start lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] w-[100%]">
                              <Row className="items-start justify-between w-[100%]">
                                <Img
                                  src="images/img_ellipse28_50X50.png"
                                  className="lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                                  alt="EllipseTwentyEight One"
                                />
                                <Column className="justify-start mt-[3px] w-[79%]">
                                  <Text className="AndrewHalls" variant="body9">
                                    Michael Rays
                                  </Text>
                                  <Text
                                    className="UAEdistrictMa"
                                    variant="body12"
                                  >
                                    {"UAE district Manager at <company>"}
                                  </Text>
                                  <Row className="font-poppins items-center justify-between lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                                    <Button
                                      className="flex items-center justify-center text-center w-[49%]"
                                      leftIcon={
                                        <Img
                                          src="images/img_mail_12X12.svg"
                                          className="text-center lg:w-[8px] lg:h-[9px] lg:mr-[3px] xl:w-[10px] xl:h-[11px] xl:mr-[4px] 2xl:w-[11px] 2xl:h-[12px] 2xl:mr-[4px] 3xl:w-[13px] 3xl:h-[14px] 3xl:mr-[5px]"
                                          alt="mail"
                                        />
                                      }
                                      shape="CircleBorder12"
                                      size="sm"
                                      variant="OutlineBlue7001_2"
                                    >
                                      <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                                        Message
                                      </div>
                                    </Button>
                                    <Button
                                      className="flex items-center justify-center text-center w-[47%]"
                                      leftIcon={
                                        <Img
                                          src="images/img_megaphone_20X20.svg"
                                          className="text-center lg:w-[8px] lg:h-[9px] lg:mr-[3px] xl:w-[10px] xl:h-[11px] xl:mr-[4px] 2xl:w-[11px] 2xl:h-[12px] 2xl:mr-[4px] 3xl:w-[13px] 3xl:h-[14px] 3xl:mr-[5px]"
                                          alt="megaphone"
                                        />
                                      }
                                      shape="CircleBorder12"
                                      size="sm"
                                      variant="OutlineBlue7001_2"
                                    >
                                      <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                                        Endorse
                                      </div>
                                    </Button>
                                  </Row>
                                </Column>
                              </Row>
                            </Column>
                            <Column className="items-center justify-start lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] w-[100%]">
                              <Row className="items-start justify-between w-[100%]">
                                <Img
                                  src="images/img_ellipse28_1.png"
                                  className="lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                                  alt="EllipseTwentyEight Two"
                                />
                                <Column className="justify-start mt-[3px] w-[79%]">
                                  <Text className="AndrewHalls" variant="body9">
                                    Joseph Kings
                                  </Text>
                                  <Text className="SalesRepat" variant="body12">
                                    {"Sales Rep. at <company>"}
                                  </Text>
                                  <Row className="font-poppins items-center justify-between lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                                    <Button
                                      className="flex items-center justify-center text-center w-[49%]"
                                      leftIcon={
                                        <Img
                                          src="images/img_mail_12X12.svg"
                                          className="text-center lg:w-[8px] lg:h-[9px] lg:mr-[3px] xl:w-[10px] xl:h-[11px] xl:mr-[4px] 2xl:w-[11px] 2xl:h-[12px] 2xl:mr-[4px] 3xl:w-[13px] 3xl:h-[14px] 3xl:mr-[5px]"
                                          alt="mail"
                                        />
                                      }
                                      shape="CircleBorder12"
                                      size="sm"
                                      variant="OutlineBlue7001_2"
                                    >
                                      <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                                        Message
                                      </div>
                                    </Button>
                                    <Button
                                      className="flex items-center justify-center text-center w-[47%]"
                                      leftIcon={
                                        <Img
                                          src="images/img_megaphone_20X20.svg"
                                          className="text-center lg:w-[8px] lg:h-[9px] lg:mr-[3px] xl:w-[10px] xl:h-[11px] xl:mr-[4px] 2xl:w-[11px] 2xl:h-[12px] 2xl:mr-[4px] 3xl:w-[13px] 3xl:h-[14px] 3xl:mr-[5px]"
                                          alt="megaphone"
                                        />
                                      }
                                      shape="CircleBorder12"
                                      size="sm"
                                      variant="OutlineBlue7001_2"
                                    >
                                      <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                                        Endorse
                                      </div>
                                    </Button>
                                  </Row>
                                </Column>
                              </Row>
                            </Column>
                            <Column className="items-center justify-start lg:mr-[26px] xl:mr-[33px] 2xl:mr-[37px] 3xl:mr-[44px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] w-[86%]">
                              <Row className="items-start justify-between w-[100%]">
                                <Img
                                  src="images/img_ellipse28_2.png"
                                  className="lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                                  alt="EllipseTwentyEight Three"
                                />
                                <Column className="justify-start mt-[1px] w-[76%]">
                                  <Text className="AndrewHalls" variant="body9">
                                    Natalia White
                                  </Text>
                                  <Text
                                    className="SalesandMarke"
                                    variant="body12"
                                  >
                                    {"Project Manager at <company>"}
                                  </Text>
                                  <Button
                                    className="2xl:mt-[4px] 3xl:mt-[5px] flex items-center justify-center lg:mt-[3px] text-center w-[58%] xl:mt-[4px]"
                                    leftIcon={
                                      <Img
                                        src="images/img_airplane.svg"
                                        className="text-center lg:w-[8px] lg:h-[9px] lg:mr-[3px] xl:w-[10px] xl:h-[11px] xl:mr-[4px] 2xl:w-[11px] 2xl:h-[12px] 2xl:mr-[4px] 3xl:w-[13px] 3xl:h-[14px] 3xl:mr-[5px]"
                                        alt="airplane"
                                      />
                                    }
                                    shape="CircleBorder12"
                                    size="sm"
                                    variant="OutlineBlue7001_2"
                                  >
                                    <div className="bg-transparent font-medium font-poppins xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                                      Connect
                                    </div>
                                  </Button>
                                </Column>
                              </Row>
                            </Column>
                            <Column className="items-center justify-start lg:mr-[26px] xl:mr-[33px] 2xl:mr-[37px] 3xl:mr-[44px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] w-[86%]">
                              <Row className="items-start justify-between w-[100%]">
                                <Img
                                  src="images/img_ellipse28_3.png"
                                  className="lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                                  alt="EllipseTwentyEight Four"
                                />
                                <Column className="justify-start mt-[1px] w-[76%]">
                                  <Text className="AndrewHalls" variant="body9">
                                    Peter Jones
                                  </Text>
                                  <Text
                                    className="SalesandMarke"
                                    variant="body12"
                                  >
                                    {"Project Manager at <company>"}
                                  </Text>
                                  <Button
                                    className="2xl:mt-[4px] 3xl:mt-[5px] flex items-center justify-center lg:mt-[3px] text-center w-[58%] xl:mt-[4px]"
                                    leftIcon={
                                      <Img
                                        src="images/img_airplane.svg"
                                        className="text-center lg:w-[8px] lg:h-[9px] lg:mr-[3px] xl:w-[10px] xl:h-[11px] xl:mr-[4px] 2xl:w-[11px] 2xl:h-[12px] 2xl:mr-[4px] 3xl:w-[13px] 3xl:h-[14px] 3xl:mr-[5px]"
                                        alt="airplane"
                                      />
                                    }
                                    shape="CircleBorder12"
                                    size="sm"
                                    variant="OutlineBlue7001_2"
                                  >
                                    <div className="bg-transparent font-medium font-poppins xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                                      Connect
                                    </div>
                                  </Button>
                                </Column>
                              </Row>
                            </Column>
                          </List>
                        </Column>
                      </Column>
                      <Stack className="font-poppins lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] w-[94%]">
                        <Row className="absolute bg-white_A700 inset-x-[30%] items-center justify-center xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius6 w-[40%]">
                          <Text className="showmore" variant="body9">
                            Show More
                          </Text>
                          <Img
                            src="images/img_arrowdown_16X12.svg"
                            className="arrowdown5"
                            alt="arrowdown Four"
                          />
                        </Row>
                        <Line className="absolute bg-black_900_0c h-[1px] top-[2%] w-[100%]" />
                      </Stack>
                    </Column>
                    <Column className="bg-white_A700 border border-black_900_20 border-solid font-poppins justify-end lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:pt-[11px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] xl:px-[11px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[100%]">
                      <Text className="ad300X6001" variant="body13">
                        Sponsored Ads
                      </Text>
                      <Stack className="2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] mx-[auto] w-[85%]">
                        <Img
                          src="images/img_rectangle91.png"
                          className="RectangleNinetyOne"
                          alt="RectangleNinetyOne"
                        />
                        <Column className="absolute justify-end right-[5%] top-[100%] w-[67%]">
                          <Img
                            src="images/img_call.svg"
                            className="call_Two1"
                            alt="call Two"
                          />
                          <Text className="columncall_two" variant="body9">
                            Image 300X600
                          </Text>
                        </Column>
                      </Stack>
                    </Column>
                    <Column className="bg-white_A700 border border-black_900_20 border-solid font-poppins justify-end lg:mt-[468px] xl:mt-[586px] 2xl:mt-[659px] 3xl:mt-[791px] xl:pt-[11px] 2xl:pt-[13px] 3xl:pt-[16px] lg:pt-[9px] xl:px-[11px] 2xl:px-[13px] 3xl:px-[16px] lg:px-[9px] w-[100%]">
                      <Text className="ad20" variant="body13">
                        Sponsored Ads
                      </Text>
                      <Stack className="2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] lg:mt-[492px] xl:mt-[615px] 2xl:mt-[692px] 3xl:mt-[831px] mx-[auto] w-[96%]">
                        <Img
                          src="images/img_rectangle91_280X336.png"
                          className="RectangleNinetyOne_One"
                          alt="RectangleNinetyOne One"
                        />
                        <Img
                          src="images/img_call.svg"
                          className="call_Six"
                          alt="call Three"
                        />
                      </Stack>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Stack>
          <Column className="items-center justify-start lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] pt-[4px] w-[85%]">
            <Row className="items-center justify-between w-[100%]">
              <Text className="mb-[1px] carouseladvlt" as="h6" variant="h6">
                Other Similar Services
              </Text>
              <Img
                src="images/img_arrows.svg"
                className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] mt-[1px] w-[7%]"
                alt="arrows Three"
              />
            </Row>
            <List
              className="font-poppins lg:gap-[20px] xl:gap-[25px] 2xl:gap-[28px] 3xl:gap-[34px] grid grid-cols-3 min-h-[auto] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]"
              orientation="horizontal"
            >
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_14.png')" }}
                >
                  <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[13%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientDeeporangeA400Pink900"
                    >
                      Buy
                    </Button>
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne"
                      alt="GroupFifty Three"
                    />
                    <Row className="items-center justify-end mb-[2px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                      <Img
                        src="images/img_vendorplatinum.png"
                        className="VendorPlatinum"
                        alt="VendorPlatinum One"
                      />
                      <Img
                        src="images/img_ambassadorsilv.png"
                        className="AmbassadorSilv"
                        alt="AmbassadorSilv One"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="font-prompt justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[93%]">
                  <Text className="columntitleoftheg" variant="body7">
                    {"<Title of the Gig>"}
                  </Text>
                  <Row className="font-poppins items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[67%]">
                    <Row className="items-center justify-evenly w-[37%]">
                      <Img
                        src="images/img_calendar_16X16.svg"
                        className="clock"
                        alt="calendar Seven"
                      />
                      <Text className="date" variant="body12">
                        15-Oct-2022
                      </Text>
                    </Row>
                    <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[11%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="clock"
                        alt="thumbsup Five"
                      />
                      <Text className="likes" variant="body12">
                        0
                      </Text>
                    </Row>
                    <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[21%]">
                      <Img
                        src="images/img_star.svg"
                        className="clock"
                        alt="star Five"
                      />
                      <Text className="ratings" variant="body12">
                        5(20)
                      </Text>
                    </Row>
                    <Row className="items-center justify-evenly xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[17%]">
                      <Img
                        src="images/img_share.svg"
                        className="clock"
                        alt="share Six"
                      />
                      <Text className="shares1" variant="body12">
                        320
                      </Text>
                    </Row>
                  </Row>
                  <Row className="font-poppins items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
                    <Button
                      className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillBlue700"
                    >
                      Tag
                    </Button>
                    <Button
                      className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillBlue700"
                    >
                      Tag
                    </Button>
                    <Button
                      className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillBlue700"
                    >
                      Tag
                    </Button>
                    <Button
                      className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillBlue700"
                    >
                      Tag
                    </Button>
                    <Button
                      className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                      shape="icbCircleBorder15"
                      size="mdIcn"
                      variant="icbOutlineBlue700"
                    >
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                        alt="overflowmenu Four"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                  <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] py-[1px] w-[44%]">
                    <Column className="items-center w-[27%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Img
                          src="images/img_volume.svg"
                          className="clock"
                          alt="volume Three"
                        />
                        <Text
                          className="font-semibold text-bluegray_400 w-[auto]"
                          variant="body12"
                        >
                          500
                        </Text>
                      </Row>
                    </Column>
                    <Row className="items-start justify-center xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] w-[35%]">
                      <Img
                        src="images/img_trophy.svg"
                        className="clock"
                        alt="trophy Three"
                      />
                      <Text className="status" variant="body12">
                        3 Days
                      </Text>
                    </Row>
                    <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[20%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="clock"
                        alt="checkmark Seventeen"
                      />
                      <Text className="soldtimes" variant="body12">
                        15
                      </Text>
                    </Row>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                  <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                    <Column className="items-center w-[47%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Button
                          className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                          size="lgIcn"
                          variant="icbOutlineBlack900201_2"
                        >
                          <Img
                            src="images/img_user_45X45.svg"
                            className="flex items-center justify-center"
                            alt="user Four"
                          />
                        </Button>
                        <Column className="items-center justify-start mt-[3px] w-[69%]">
                          <Text
                            className="font-semibold text-black_900 w-[auto]"
                            variant="body10"
                          >
                            {"<Member Name>"}
                          </Text>
                          <Text className="TitleatCompa" variant="body12">
                            {"Title at <Company>"}
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Button
                      className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                      shape="icbCircleBorder15"
                      size="mdIcn"
                      variant="icbOutlineBlue700"
                    >
                      <Img
                        src="images/img_arrowdown_29X29.svg"
                        className="flex items-center justify-center"
                        alt="arrowdown Five"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_14.png')" }}
                >
                  <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[19%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientBlue700Indigo900"
                    >
                      Re-buy
                    </Button>
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne"
                      alt="GroupFifty Four"
                    />
                    <Row className="items-center justify-end mb-[1px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                      <Img
                        src="images/img_vendorgold.png"
                        className="VendorSilver"
                        alt="VendorGold One"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorGold"
                        alt="AmbassadorGold Two"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="font-prompt justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[93%]">
                  <Text className="columntitleoftheg" variant="body7">
                    {"<Title of the Gig>"}
                  </Text>
                  <Row className="font-poppins items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[67%]">
                    <Row className="items-center justify-evenly w-[37%]">
                      <Img
                        src="images/img_calendar_16X16.svg"
                        className="clock"
                        alt="calendar Eight"
                      />
                      <Text className="date" variant="body12">
                        15-Oct-2022
                      </Text>
                    </Row>
                    <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[11%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="clock"
                        alt="thumbsup Six"
                      />
                      <Text className="likes" variant="body12">
                        0
                      </Text>
                    </Row>
                    <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[21%]">
                      <Img
                        src="images/img_star.svg"
                        className="clock"
                        alt="star Six"
                      />
                      <Text className="ratings" variant="body12">
                        5(20)
                      </Text>
                    </Row>
                    <Row className="items-center justify-evenly xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[17%]">
                      <Img
                        src="images/img_share.svg"
                        className="clock"
                        alt="share Seven"
                      />
                      <Text className="shares1" variant="body12">
                        320
                      </Text>
                    </Row>
                  </Row>
                  <Row className="font-poppins items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
                    <Button
                      className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillBlue700"
                    >
                      Tag
                    </Button>
                    <Button
                      className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillBlue700"
                    >
                      Tag
                    </Button>
                    <Button
                      className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillBlue700"
                    >
                      Tag
                    </Button>
                    <Button
                      className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillBlue700"
                    >
                      Tag
                    </Button>
                    <Button
                      className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                      shape="icbCircleBorder15"
                      size="mdIcn"
                      variant="icbOutlineBlue700"
                    >
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                        alt="overflowmenu Five"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                  <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] py-[1px] w-[44%]">
                    <Column className="items-center w-[27%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Img
                          src="images/img_volume.svg"
                          className="clock"
                          alt="volume Four"
                        />
                        <Text
                          className="font-semibold text-bluegray_400 w-[auto]"
                          variant="body12"
                        >
                          500
                        </Text>
                      </Row>
                    </Column>
                    <Row className="items-start justify-center xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] w-[35%]">
                      <Img
                        src="images/img_trophy.svg"
                        className="clock"
                        alt="trophy Four"
                      />
                      <Text className="status" variant="body12">
                        3 Days
                      </Text>
                    </Row>
                    <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[20%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="clock"
                        alt="checkmark Eighteen"
                      />
                      <Text className="soldtimes" variant="body12">
                        15
                      </Text>
                    </Row>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                  <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                    <Column className="items-center w-[47%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Button
                          className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                          size="lgIcn"
                          variant="icbOutlineBlack900201_2"
                        >
                          <Img
                            src="images/img_user_45X45.svg"
                            className="flex items-center justify-center"
                            alt="user Five"
                          />
                        </Button>
                        <Column className="items-center justify-start mt-[3px] w-[69%]">
                          <Text
                            className="font-semibold text-black_900 w-[auto]"
                            variant="body10"
                          >
                            {"<Member Name>"}
                          </Text>
                          <Text className="TitleatCompa" variant="body12">
                            {"Title at <Company>"}
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Button
                      className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                      shape="icbCircleBorder15"
                      size="mdIcn"
                      variant="icbOutlineBlue700"
                    >
                      <Img
                        src="images/img_arrowdown_29X29.svg"
                        className="flex items-center justify-center"
                        alt="arrowdown Six"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_14.png')" }}
                >
                  <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[13%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientDeeporangeA400Pink900"
                    >
                      Buy
                    </Button>
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne"
                      alt="GroupFifty Five"
                    />
                    <Row className="items-center justify-end mb-[2px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                      <Img
                        src="images/img_vendorsilver.png"
                        className="VendorPlatinum"
                        alt="VendorSilver Two"
                      />
                      <Img
                        src="images/img_ambassadorplat.png"
                        className="AmbassadorGold"
                        alt="AmbassadorPlat One"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="font-prompt justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[93%]">
                  <Text className="columntitleoftheg" variant="body7">
                    {"<Title of the Gig>"}
                  </Text>
                  <Row className="font-poppins items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[67%]">
                    <Row className="items-center justify-evenly w-[37%]">
                      <Img
                        src="images/img_calendar_16X16.svg"
                        className="clock"
                        alt="calendar Nine"
                      />
                      <Text className="date" variant="body12">
                        15-Oct-2022
                      </Text>
                    </Row>
                    <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[11%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="clock"
                        alt="thumbsup Seven"
                      />
                      <Text className="likes" variant="body12">
                        0
                      </Text>
                    </Row>
                    <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[21%]">
                      <Img
                        src="images/img_star.svg"
                        className="clock"
                        alt="star Seven"
                      />
                      <Text className="ratings" variant="body12">
                        5(20)
                      </Text>
                    </Row>
                    <Row className="items-center justify-evenly xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[17%]">
                      <Img
                        src="images/img_share.svg"
                        className="clock"
                        alt="share Eight"
                      />
                      <Text className="shares1" variant="body12">
                        320
                      </Text>
                    </Row>
                  </Row>
                  <Row className="font-poppins items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
                    <Button
                      className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillBlue700"
                    >
                      Tag
                    </Button>
                    <Button
                      className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillBlue700"
                    >
                      Tag
                    </Button>
                    <Button
                      className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillBlue700"
                    >
                      Tag
                    </Button>
                    <Button
                      className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillBlue700"
                    >
                      Tag
                    </Button>
                    <Button
                      className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                      shape="icbCircleBorder15"
                      size="mdIcn"
                      variant="icbOutlineBlue700"
                    >
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                        alt="overflowmenu Six"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                  <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] py-[1px] w-[44%]">
                    <Column className="items-center w-[27%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Img
                          src="images/img_volume.svg"
                          className="clock"
                          alt="volume Five"
                        />
                        <Text
                          className="font-semibold text-bluegray_400 w-[auto]"
                          variant="body12"
                        >
                          500
                        </Text>
                      </Row>
                    </Column>
                    <Row className="items-start justify-center xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] w-[35%]">
                      <Img
                        src="images/img_trophy.svg"
                        className="clock"
                        alt="trophy Five"
                      />
                      <Text className="status" variant="body12">
                        3 Days
                      </Text>
                    </Row>
                    <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[20%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="clock"
                        alt="checkmark Nineteen"
                      />
                      <Text className="soldtimes" variant="body12">
                        15
                      </Text>
                    </Row>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                  <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                    <Column className="items-center w-[47%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Button
                          className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                          size="lgIcn"
                          variant="icbOutlineBlack900201_2"
                        >
                          <Img
                            src="images/img_user_45X45.svg"
                            className="flex items-center justify-center"
                            alt="user Six"
                          />
                        </Button>
                        <Column className="items-center justify-start mt-[3px] w-[69%]">
                          <Text
                            className="font-semibold text-black_900 w-[auto]"
                            variant="body10"
                          >
                            {"<Member Name>"}
                          </Text>
                          <Text className="TitleatCompa" variant="body12">
                            {"Title at <Company>"}
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Button
                      className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                      shape="icbCircleBorder15"
                      size="mdIcn"
                      variant="icbOutlineBlue700"
                    >
                      <Img
                        src="images/img_arrowdown_29X29.svg"
                        className="flex items-center justify-center"
                        alt="arrowdown Seven"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
            </List>
          </Column>
          <Footer2 className="font-poppins lg:mt-[54px] xl:mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default FaisalFreelancingModuleSingleServicePagePage;
