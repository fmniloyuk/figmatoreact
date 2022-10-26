import React from "react";

import {
  Column,
  Stack,
  Row,
  Img,
  Text,
  Line,
  List,
  Button,
  Slider,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const IMARNFrontendWebsiteAIOProfileAssetsVLancerPage = () => {
  const navigate = useNavigate();

  function handleNavigate161() {
    navigate("/imarnfrontendwebsiteaioprofileassetsvinstructor");
  }
  function handleNavigate162() {
    navigate("/imarnfrontendwebsiteaioprofileassetsvvendor");
  }
  function handleNavigate163() {
    navigate("/imarnfrontendwebsiteaioprofileassetsvorganizer");
  }
  function handleNavigate164() {
    navigate("/imarnfrontendwebsiteaioprofileassetsvhost");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center justify-start mx-[auto] overflow-auto pt-[2px] w-[100%]">
        <Stack className="lg:h-[493px] xl:h-[616px] 2xl:h-[693px] 3xl:h-[832px] w-[100%]">
          <Stack className="absolute bottom-[0] lg:h-[433px] xl:h-[542px] 2xl:h-[609px] 3xl:h-[731px] w-[100%]">
            <div className="absolute bg-gradient2  lg:h-[305px] xl:h-[382px] 2xl:h-[429px] 3xl:h-[515px] top-[0] w-[100%]"></div>
            <Column className="absolute bg-white_A700 border border-black_900_0c border-solid bottom-[0] inset-x-[0] items-center justify-start mx-[auto] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius15 shadow-bs10 w-[85%]">
              <Column className="items-center justify-start lg:mb-[13px] xl:mb-[16px] 2xl:mb-[19px] 3xl:mb-[22px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] w-[99%]">
                <Row className="items-center justify-between w-[99%]">
                  <Column className="items-center w-[23%]">
                    <Stack className="lg:h-[191px] xl:h-[239px] 2xl:h-[268px] 3xl:h-[322px] w-[100%]">
                      <Column className="absolute bg-blue_700 lg:h-[191px] xl:h-[239px] 2xl:h-[268px] 3xl:h-[322px] items-center justify-start left-[1%] px-[2px] rounded-radius1405 top-[0] lg:w-[190px] xl:w-[238px] 2xl:w-[267px] 3xl:w-[321px]">
                        <Stack className="lg:h-[187px] xl:h-[233px] 2xl:h-[263px] 3xl:h-[315px] my-[1px] rounded-radius1405 lg:w-[186px] xl:w-[232px] 2xl:w-[262px] 3xl:w-[314px]">
                          <Img
                            src="images/img_rectangle65.png"
                            className="RectangleSixtyFive"
                            alt="RectangleSixtyFive"
                          />
                        </Stack>
                      </Column>
                      <Img
                        src="images/img_checkmark_24X24.svg"
                        className="checkmark"
                        alt="checkmark"
                      />
                    </Stack>
                    <Img
                      src="images/img_emailphonepay_22.svg"
                      className="emailphonepay"
                      alt="emailphonepay"
                    />
                  </Column>
                  <Column className="items-center mb-[1px] w-[75%]">
                    <Row className="items-end justify-between w-[100%]">
                      <Column className="justify-start mb-[3px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[31%]">
                        <Text className="JohnKennedy" as="h6" variant="h6">
                          John Kennedy
                        </Text>
                        <Text className="price" variant="body9">
                          {"<Title> at <Company>"}
                        </Text>
                        <Img
                          src="images/img_actionbtns.svg"
                          className="actionbtns"
                          alt="actionbtns"
                        />
                      </Column>
                      <Row className="items-center justify-between w-[32%]">
                        <Img
                          src="images/img_vendorgold2.png"
                          className="VendorGoldTwo"
                          alt="VendorGoldTwo"
                        />
                        <Line className="bg-black_900_20 xl:h-[106px] 2xl:h-[120px] 3xl:h-[143px] lg:h-[85px] mt-[1px] w-[1px]" />
                        <Img
                          src="images/img_ambassadorsilv.png"
                          className="VendorGoldTwo"
                          alt="AmbassadorSilv"
                        />
                      </Row>
                    </Row>
                    <Line className="bg-black_900_14 h-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]" />
                    <Row className="items-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Column className="items-center justify-start w-[73%]">
                        <List
                          className="gap-[0] min-h-[auto] w-[100%]"
                          orientation="vertical"
                        >
                          <Row className="videolist">
                            <Column className="bg-white_A700 border border-blue_700 border-solid items-center p-[4px] rounded-radius15 w-[15%]">
                              <Img
                                src="images/img_cursor.svg"
                                className="calendar"
                                alt="cursor"
                              />
                              <Column className="items-center justify-start 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] mt-[2px] w-[48%]">
                                <Text className="test_68K" variant="body7">
                                  6.8K
                                </Text>
                                <Text className="Sales" variant="body12">
                                  Sales
                                </Text>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 border border-blue_700 border-solid items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius15 w-[15%]">
                              <Img
                                src="images/img_volume.svg"
                                className="calendar"
                                alt="volume"
                              />
                              <Column className="items-center justify-start xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] mt-[2px] w-[48%]">
                                <Text className="test_68K" variant="body7">
                                  10K
                                </Text>
                                <Text className="Earned" variant="body12">
                                  Earned
                                </Text>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 border border-blue_700 border-solid lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius15 w-[15%]">
                              <Column className="justify-start lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[9px] mt-[1px] pb-[3px] w-[79%]">
                                <Img
                                  src="images/img_volume.svg"
                                  className="calendar"
                                  alt="volume One"
                                />
                                <Column className="items-center justify-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[2px] w-[73%]">
                                  <Text className="test_68K" variant="body7">
                                    5.5K
                                  </Text>
                                  <Text className="Earned" variant="body12">
                                    Invested
                                  </Text>
                                </Column>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 border border-blue_700 border-solid items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius15 w-[15%]">
                              <Img
                                src="images/img_minimize.svg"
                                className="minimize"
                                alt="minimize"
                              />
                              <Column className="items-center justify-start xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] mt-[2px] w-[41%]">
                                <Text className="test_68K" variant="body7">
                                  3K
                                </Text>
                                <Text className="Pages" variant="body12">
                                  Points
                                </Text>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 border border-blue_700 border-solid items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius15 w-[15%]">
                              <Img
                                src="images/img_star.svg"
                                className="calendar"
                                alt="star"
                              />
                              <Column className="items-center justify-start 3xl:mb-[10px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] mt-[4px] w-[73%]">
                                <Text className="test_68K" variant="body7">
                                  5(1.2K)
                                </Text>
                                <Text className="Channels" variant="body12">
                                  Rating
                                </Text>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 border border-blue_700 border-solid items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius15 w-[15%]">
                              <Img
                                src="images/img_thumbsup_20X20.svg"
                                className="minimize"
                                alt="thumbsup"
                              />
                              <Column className="items-center justify-start xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] mt-[1px] w-[46%]">
                                <Text className="test_68K" variant="body7">
                                  7.2K
                                </Text>
                                <Text className="Likes" variant="body12">
                                  Likes
                                </Text>
                              </Column>
                            </Column>
                          </Row>
                          <Row className="videolist">
                            <Column className="bg-white_A700 border border-blue_700 border-solid lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius15 w-[15%]">
                              <Column className="justify-start 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] mt-[1px] w-[73%]">
                                <Img
                                  src="images/img_share.svg"
                                  className="calendar"
                                  alt="share"
                                />
                                <Column className="items-center justify-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] mt-[2px] w-[64%]">
                                  <Text className="test_68K" variant="body7">
                                    1.1K
                                  </Text>
                                  <Text className="Earned" variant="body12">
                                    Shares
                                  </Text>
                                </Column>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 border border-blue_700 border-solid lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius15 w-[15%]">
                              <Img
                                src="images/img_settings_20X20.svg"
                                className="settings"
                                alt="settings"
                              />
                              <Column className="items-center justify-start 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] mt-[2px] w-[86%]">
                                <Text className="test_68K" variant="body7">
                                  312
                                </Text>
                                <Text className="Sales" variant="body12">
                                  Connections
                                </Text>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 border border-blue_700 border-solid items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius15 w-[15%]">
                              <Img
                                src="images/img_user.svg"
                                className="minimize"
                                alt="user"
                              />
                              <Column className="items-center justify-start 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] mt-[2px] w-[63%]">
                                <Text className="test_68K" variant="body7">
                                  5.6K
                                </Text>
                                <Text className="Earned" variant="body12">
                                  Followers
                                </Text>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 border border-blue_700 border-solid lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[6px] rounded-radius15 w-[15%]">
                              <Column className="justify-start 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[83%]">
                                <Img
                                  src="images/img_user_16X26.svg"
                                  className="user_One"
                                  alt="user One"
                                />
                                <Column className="items-center justify-start lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[79%]">
                                  <Text className="test_68K" variant="body7">
                                    10.2K
                                  </Text>
                                  <Text className="Earned" variant="body12">
                                    Members
                                  </Text>
                                </Column>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 border border-blue_700 border-solid lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[6px] rounded-radius15 w-[15%]">
                              <Column className="justify-start 3xl:mb-[10px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] mt-[1px] w-[88%]">
                                <Img
                                  src="images/img_file_20X20.svg"
                                  className="calendar"
                                  alt="file"
                                />
                                <Text className="SevenHundred" variant="body7">
                                  700
                                </Text>
                                <Text className="Customers" variant="body12">
                                  Customers
                                </Text>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 border border-blue_700 border-solid items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius15 w-[15%]">
                              <Column className="justify-start 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] mt-[1px] w-[99%]">
                                <Img
                                  src="images/img_megaphone_20X20.svg"
                                  className="calendar"
                                  alt="megaphone"
                                />
                                <Text className="FortyFour" variant="body7">
                                  44
                                </Text>
                                <Text className="Endorsements" variant="body12">
                                  Endorsements
                                </Text>
                              </Column>
                            </Column>
                          </Row>
                        </List>
                      </Column>
                      <Line className="bg-black_900_14 xl:h-[122px] 2xl:h-[137px] 3xl:h-[164px] lg:h-[97px] lg:ml-[33px] xl:ml-[41px] 2xl:ml-[46px] 3xl:ml-[56px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] w-[1px]" />
                      <Column className="justify-start lg:ml-[17px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[18%]">
                        <Column className="justify-start pb-[2px] w-[36%]">
                          <Stack className="line_Four">
                            <Img
                              src="images/img_ticket.svg"
                              className="ticket"
                              alt="ticket"
                            />
                            <Text className="Gender" variant="body12">
                              Gender
                            </Text>
                          </Stack>
                          <Row className="items-center mt-[2px] w-[93%]">
                            <Img
                              src="images/img_gender.svg"
                              className="clock"
                              alt="gender One"
                            />
                            <Text className="rowgender_one" variant="body10">
                              Male
                            </Text>
                          </Row>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] pt-[1px] w-[36%]">
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
                        <Row className="items-center justify-evenly lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] w-[100%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location"
                          />
                          <Text className="date" variant="body10">
                            United Arab Emirates
                          </Text>
                        </Row>
                        <Column className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] py-[2px] w-[39%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Img
                              src="images/img_clock_16X16.svg"
                              className="clock"
                              alt="clock"
                            />
                            <Text className="date" variant="body10">
                              1:00PM
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] w-[62%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="clock"
                            alt="calendar"
                          />
                          <Text className="likes" variant="body10">
                            11-Nov-2022
                          </Text>
                        </Row>
                        <Column className="items-center justify-end lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] py-[1px] w-[84%]">
                          <Row className="items-center justify-evenly mt-[1px] w-[100%]">
                            <Img
                              src="images/img_instagram.svg"
                              className="clock"
                              alt="instagram"
                            />
                            <Text className="date" variant="body10">
                              11-Nov-22 9:45PM
                            </Text>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                </Row>
                <Column className="items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                  <Column className="items-center justify-start w-[99%]">
                    <Line className="bg-black_900_14 h-[1px] w-[100%]" />
                    <Row className="items-center justify-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[67%]">
                      <Button
                        className="flex items-center justify-center text-center w-[24%]"
                        leftIcon={
                          <Img
                            src="images/img_settings.svg"
                            className="text-center lg:w-[13px] lg:h-[14px] lg:mr-[3px] xl:w-[16px] xl:h-[17px] xl:mr-[4px] 2xl:w-[19px] 2xl:h-[20px] 2xl:mr-[4px] 3xl:w-[22px] 3xl:h-[23px] 3xl:mr-[5px]"
                            alt="settings"
                          />
                        }
                        shape="CircleBorder22"
                        size="lg"
                        variant="OutlineBlue700"
                      >
                        <div className="bg-transparent capitalize font-normal not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px]">
                          Connect
                        </div>
                      </Button>
                      <Button
                        className="2xl:ml-[19px] 3xl:ml-[22px] flex items-center justify-center lg:ml-[13px] text-center w-[23%] xl:ml-[16px]"
                        leftIcon={
                          <Img
                            src="images/img_mail_14X14.svg"
                            className="text-center lg:w-[10px] lg:h-[11px] lg:mr-[3px] xl:w-[13px] xl:h-[14px] xl:mr-[4px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[4px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[5px]"
                            alt="mail"
                          />
                        }
                        shape="CircleBorder22"
                        size="md"
                        variant="GradientDeeporangeA400Pink900"
                      >
                        <div className="bg-transparent capitalize font-normal not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px]">
                          Message
                        </div>
                      </Button>
                      <Button
                        className="2xl:ml-[19px] 3xl:ml-[22px] flex items-center justify-center lg:ml-[13px] text-center w-[23%] xl:ml-[16px]"
                        leftIcon={
                          <Img
                            src="images/img_megaphone.svg"
                            className="text-center lg:w-[13px] lg:h-[14px] lg:mr-[3px] xl:w-[16px] xl:h-[17px] xl:mr-[4px] 2xl:w-[19px] 2xl:h-[20px] 2xl:mr-[4px] 3xl:w-[22px] 3xl:h-[23px] 3xl:mr-[5px]"
                            alt="megaphone"
                          />
                        }
                        shape="CircleBorder22"
                        size="lg"
                        variant="GradientGray501Bluegray400"
                      >
                        <div className="bg-transparent capitalize font-normal not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px]">
                          Endorse
                        </div>
                      </Button>
                      <Button
                        className="2xl:ml-[19px] 3xl:ml-[22px] flex items-center justify-center lg:ml-[13px] text-center w-[23%] xl:ml-[16px]"
                        leftIcon={
                          <Img
                            src="images/img_cut.svg"
                            className="text-center lg:w-[13px] lg:h-[14px] lg:mr-[3px] xl:w-[16px] xl:h-[17px] xl:mr-[4px] 2xl:w-[19px] 2xl:h-[20px] 2xl:mr-[4px] 3xl:w-[22px] 3xl:h-[23px] 3xl:mr-[5px]"
                            alt="cut"
                          />
                        }
                        shape="CircleBorder22"
                        size="md"
                        variant="GradientRedA701Blue700"
                      >
                        <div className="bg-transparent capitalize font-normal not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px]">
                          Sponsor
                        </div>
                      </Button>
                    </Row>
                    <Line className="bg-black_900_14 h-[1px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]" />
                  </Column>
                  <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[99%]">
                    <Button
                      className="capitalize font-semibold xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[7%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillBlue700"
                    >
                      Personal
                    </Button>
                    <Button
                      className="capitalize font-semibold xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[9%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillBlue700"
                    >
                      V-Customer
                    </Button>
                    <Button
                      className="capitalize font-semibold xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[7%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillBlue700"
                    >
                      V-Author
                    </Button>
                    <Button
                      className="capitalize font-semibold xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[9%]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillBlue700"
                    >
                      V-Employer
                    </Button>
                    <Button
                      className="capitalize font-semibold xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[9%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillBlue700"
                    >
                      V-Instructor
                    </Button>
                    <Button
                      className="capitalize font-semibold xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[6%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillBlue700"
                    >
                      V-Seller
                    </Button>
                    <Button
                      className="capitalize font-semibold xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[7%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillBlue700"
                    >
                      V-Lancer
                    </Button>
                    <Button
                      className="capitalize font-semibold xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[9%]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillBlue700"
                    >
                      V-Organizer
                    </Button>
                    <Button
                      className="capitalize font-semibold xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[8%]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillBlue700"
                    >
                      V-Speaker
                    </Button>
                    <Button
                      className="capitalize font-semibold xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[6%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillBlue700"
                    >
                      V-Host
                    </Button>
                    <Button
                      className="capitalize font-semibold xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[7%]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillBlue700"
                    >
                      V-Expert
                    </Button>
                    <Button
                      className="capitalize font-semibold xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[8%]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillBlue700"
                    >
                      V-Sponsor
                    </Button>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Stack>
          <Header className="absolute font-prompt top-[0] w-[100%]" />
        </Stack>
        <Column className="bg-white_A700 border border-black_900_0c border-solid justify-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius10 shadow-bs11 w-[85%]">
          <Text className="profilesprogr1" variant="body9">
            Profile is 70% Complete.
          </Text>
          <Column className="bg-bluegray_50 justify-start lg:mb-[4px] 2xl:mb-[5px] xl:mb-[5px] 3xl:mb-[6px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] rounded-radius8 w-[100%]">
            <Text className="progressbar1" variant="body13">
              70%
            </Text>
          </Column>
        </Column>
        <Column className="items-center justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[85%]">
          <Column className="items-center justify-start w-[100%]">
            <Column className="justify-start w-[100%]">
              <Row className="items-center ml-[1px] w-[63%]">
                <Button
                  className="capitalize font-medium lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 text-center w-[15%]"
                  shape="CircleBorder12"
                  size="lg"
                  variant="FillWhiteA700"
                >
                  General
                </Button>
                <Button
                  className="capitalize font-medium ml-[2px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 text-center w-[15%]"
                  shape="CircleBorder12"
                  size="lg"
                  variant="FillWhiteA700"
                >
                  Resume
                </Button>
                <Button
                  className="capitalize font-medium ml-[2px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 text-center w-[13%]"
                  shape="CircleBorder12"
                  size="lg"
                  variant="FillWhiteA700"
                >
                  Social
                </Button>
                <Button
                  className="capitalize font-medium ml-[2px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 text-center w-[20%]"
                  shape="CircleBorder12"
                  size="lg"
                  variant="FillWhiteA700"
                >
                  Performance
                </Button>
                <Button
                  className="capitalize font-medium ml-[2px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[14%]"
                  shape="CircleBorder12"
                  size="lg"
                  variant="GradientDeeporangeA400Pink900"
                >
                  Assets
                </Button>
                <Button
                  className="capitalize font-medium ml-[2px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 text-center w-[21%]"
                  shape="CircleBorder12"
                  size="lg"
                  variant="FillWhiteA700"
                >
                  Sponsorships
                </Button>
              </Row>
              <Line className="bg-black_900_14 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
            </Column>
            <Row className="bg-white_A700 border border-black_900_0c border-solid items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius15 shadow-bs12 w-[73%]">
              <Text
                className="font-bold text-black_900 w-[auto]"
                variant="body9"
              >
                As a
              </Text>
              <Img
                src="images/img_arrowright_17X27.svg"
                className="arrowright3"
                alt="arrowright"
              />
              <Text className="VEmployer_One" variant="body10">
                V-Author
              </Text>
              <Text className="VEmployer_One" variant="body10">
                V-Employer
              </Text>
              <Text
                className="common-pointer VEmployer_One"
                variant="body10"
                onClick={handleNavigate161}
              >
                V-Instructor
              </Text>
              <Text
                className="common-pointer VEmployer_One"
                variant="body10"
                onClick={handleNavigate162}
              >
                V-Vendor
              </Text>
              <Text className="VAuthor_One" variant="body10">
                V-Lancer
              </Text>
              <Text
                className="common-pointer VEmployer_One"
                variant="body10"
                onClick={handleNavigate163}
              >
                V-Organizer
              </Text>
              <Text
                className="common-pointer VEmployer_One"
                variant="body10"
                onClick={handleNavigate164}
              >
                V-Host
              </Text>
              <Text className="VEmployer_One" variant="body10">
                V-Speaker
              </Text>
              <Text className="VEmployer_One" variant="body10">
                V-Expert
              </Text>
            </Row>
            <Row className="font-prompt items-start justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
              <Column className="bg-white_A700 border border-black_900_0c border-solid justify-start lg:pl-[12px] xl:pl-[16px] 2xl:pl-[18px] 3xl:pl-[21px] lg:py-[12px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] rounded-radius15 w-[68%]">
                <Stack className="2xl:h-[1043px] 3xl:h-[1252px] lg:h-[741px] xl:h-[927px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    slidesToShow={4}
                    activeIndex={sliderState}
                    onSlideChanged={(e) => {
                      setsliderState(e?.item);
                    }}
                    activeSlideCSS="scale-[0.45] absolute"
                    magnifiedIndex={1}
                    centerMode
                    ref={sliderRef}
                    className="absolute bottom-[0] w-[100%]"
                    items={[...Array(12)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <Line className="bg-black_900_20 h-[1px] w-[100%]" />
                      </React.Fragment>
                    ))}
                  />
                  <Column className="absolute items-center justify-start left-[0] xl:pb-[110px] 2xl:pb-[123px] 3xl:pb-[148px] lg:pb-[88px] top-[0] w-[66%]">
                    <List
                      className="gap-[0] min-h-[auto] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="listrectangle109">
                        <Column className="bg-white_A700 border border-black_900_26 border-solid items-center lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius15 w-[21%]">
                          <Text className="Iamlookingfo" variant="body2">
                            109
                          </Text>
                          <Text className="Subscribers" variant="body10">
                            Services
                          </Text>
                        </Column>
                        <Column className="bg-white_A700 border border-black_900_26 border-solid items-center lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius15 w-[21%]">
                          <Text
                            className="mt-[4px] Iamlookingfo"
                            variant="body2"
                          >
                            65
                          </Text>
                          <Text
                            className="capitalize font-bold font-poppins my-[2px] text-gray_501 w-[auto]"
                            variant="body10"
                          >
                            Ongoing Services
                          </Text>
                        </Column>
                        <Column className="bg-white_A700 border border-black_900_26 border-solid items-center lg:p-[14px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[25px] rounded-radius15 w-[21%]">
                          <Text
                            className="TwoHundredThirtyThree"
                            variant="body2"
                          >
                            121
                          </Text>
                          <Text className="SocialPages" variant="body10">
                            Projects Hires
                          </Text>
                        </Column>
                        <Column className="bg-white_A700 border border-black_900_26 border-solid items-center lg:p-[14px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[25px] rounded-radius15 w-[21%]">
                          <Text
                            className="TwoHundredThirtyThree"
                            variant="body2"
                          >
                            101
                          </Text>
                          <Text className="SocialPages" variant="body10">
                            Ongoing Projects
                          </Text>
                        </Column>
                      </Row>
                      <Row className="listrectangle109">
                        <Column className="bg-white_A700 border border-black_900_26 border-solid items-center lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius15 w-[21%]">
                          <Text className="Iamlookingfo" variant="body2">
                            1.1K
                          </Text>
                          <Text className="Followers_One" variant="body10">
                            Orders
                          </Text>
                        </Column>
                        <Column className="bg-white_A700 border border-black_900_26 border-solid items-center lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius15 w-[21%]">
                          <Text className="Iamlookingfo" variant="body2">
                            3.9K
                          </Text>
                          <Text className="Subscribers" variant="body10">
                            Hours Billed
                          </Text>
                        </Column>
                        <Column className="bg-white_A700 border border-black_900_26 border-solid items-center lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius15 w-[21%]">
                          <Text
                            className="flex items-center Iamlookingfo"
                            variant="body2"
                          >
                            21
                          </Text>
                          <Text className="Refunds" variant="body10">
                            Refunds
                          </Text>
                        </Column>
                        <Column className="bg-white_A700 border border-black_900_26 border-solid items-center lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius15 w-[21%]">
                          <Text className="Iamlookingfo" variant="body2">
                            100%
                          </Text>
                          <Text className="Followers_One" variant="body10">
                            Sucess Rate
                          </Text>
                        </Column>
                      </Row>
                    </List>
                  </Column>
                </Stack>
                <Stack className="lg:h-[411px] xl:h-[514px] 2xl:h-[578px] 3xl:h-[693px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[98%]">
                  <Line className="absolute bg-black_900_20 bottom-[34%] h-[1px] inset-x-[0] w-[100%]" />
                  <Column className="absolute items-center justify-start w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Row className="font-prompt items-start justify-between w-[100%]">
                        <Text className="rowvcollegecours" variant="body5">
                          Employers
                        </Text>
                        <Row className="font-poppins items-center justify-evenly rounded-radius4 w-[23%]">
                          <Button
                            className="capitalize font-normal not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[40%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="OutlineBlack9000f"
                          >
                            Showing
                          </Button>
                          <Text className="carouseladvlt" variant="body12">
                            2 Out Of 5 Results
                          </Text>
                        </Row>
                      </Row>
                      <List
                        className="font-poppins lg:gap-[13px] xl:gap-[16px] 2xl:gap-[19px] 3xl:gap-[22px] grid grid-cols-2 min-h-[auto] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]"
                        orientation="horizontal"
                      >
                        <Column className="pages">
                          <Column
                            className="bg-cover bg-repeat items-center justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_image_2.png')",
                            }}
                          >
                            <Column className="justify-start xl:mb-[110px] 2xl:mb-[123px] 3xl:mb-[148px] lg:mb-[88px] w-[100%]">
                              <Button
                                className="2xl:ml-[279px] 3xl:ml-[335px] flex items-center justify-center lg:ml-[198px] text-center w-[24%] xl:ml-[248px]"
                                leftIcon={
                                  <Img
                                    src="images/img_settings.svg"
                                    className="text-center lg:w-[9px] lg:h-[10px] lg:mr-[3px] xl:w-[11px] xl:h-[12px] xl:mr-[4px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[4px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[5px]"
                                    alt="settings"
                                  />
                                }
                                shape="CircleBorder12"
                                size="sm"
                                variant="OutlineBlue700"
                              >
                                <div className="bg-transparent capitalize font-normal not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                                  Connect
                                </div>
                              </Button>
                              <Img
                                src="images/img_group51.svg"
                                className="GroupFiftyOne1"
                                alt="GroupFiftyOne"
                              />
                            </Column>
                          </Column>
                          <Column className="items-center justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[92%]">
                            <Column className="items-center justify-start w-[100%]">
                              <Row className="items-center justify-between w-[98%]">
                                <Column className="items-center w-[89%]">
                                  <Row className="items-center w-[100%]">
                                    <Button
                                      className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                                      size="mdIcn"
                                      variant="icbOutlineBlack9000c"
                                    >
                                      <Img
                                        src="images/img_lock.svg"
                                        className="flex items-center justify-center lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px]"
                                        alt="lock"
                                      />
                                    </Button>
                                    <Column className="3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[42%]">
                                      <Text className="Amazon" variant="body10">
                                        Amazon
                                      </Text>
                                      <Text
                                        className="font-bold lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] text-bluegray_400 w-[auto]"
                                        variant="body12"
                                      >
                                        Work Hard, Have Fun,
                                      </Text>
                                    </Column>
                                    <Img
                                      src="images/img_ambassadorsilv.png"
                                      className="3xl:ml-[109px] lg:ml-[65px] xl:ml-[81px] 2xl:ml-[91px] VendorPlatinum"
                                      alt="AmbassadorSilv Three"
                                    />
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
                                    alt="arrowdown Three"
                                  />
                                </Button>
                              </Row>
                              <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                              <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[97%]">
                                <Stack className="lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] w-[48%]">
                                  <Row className="absolute h-[max-content] inset-y-[0] items-center justify-evenly left-[0] my-[auto] w-[63%]">
                                    <Img
                                      src="images/img_calendar_16X16.svg"
                                      className="clock"
                                      alt="calendar Three"
                                    />
                                    <Text
                                      className="rowcalendar1"
                                      variant="body10"
                                    >
                                      11-Nov-2022
                                    </Text>
                                  </Row>
                                  <Column className="absolute items-center justify-start pr-[1px] py-[1px] right-[0] w-[41%]">
                                    <Row className="items-start justify-evenly my-[3px] w-[100%]">
                                      <Img
                                        src="images/img_star.svg"
                                        className="clock"
                                        alt="star Three"
                                      />
                                      <Text
                                        className="rowstar_three"
                                        variant="body12"
                                      >
                                        5 (3.2K)
                                      </Text>
                                    </Row>
                                  </Column>
                                </Stack>
                                <Column className="items-center pb-[2px] w-[49%]">
                                  <Row className="items-start justify-evenly w-[100%]">
                                    <Img
                                      src="images/img_location_16X16.svg"
                                      className="mt-[2px] clock"
                                      alt="location One"
                                    />
                                    <Text
                                      className="rowcalendar1"
                                      variant="body10"
                                    >
                                      United Arab Emirates
                                    </Text>
                                  </Row>
                                </Column>
                              </Row>
                              <Row className="items-center justify-evenly lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                                <Button
                                  className="font-bold 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[17%]"
                                  shape="RoundedBorder4"
                                  size="sm"
                                  variant="FillBlue700"
                                >
                                  Business
                                </Button>
                                <Button
                                  className="font-bold 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[18%]"
                                  shape="RoundedBorder4"
                                  size="sm"
                                  variant="FillBlue700"
                                >
                                  V-Author
                                </Button>
                                <Button
                                  className="font-bold 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[21%]"
                                  shape="RoundedBorder4"
                                  size="sm"
                                  variant="FillBlue700"
                                >
                                  V-Employer
                                </Button>
                                <Button
                                  className="font-bold 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[16%]"
                                  shape="RoundedBorder4"
                                  size="sm"
                                  variant="FillBlue700"
                                >
                                  V-Seller
                                </Button>
                                <Button
                                  className="font-bold 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[17%]"
                                  shape="RoundedBorder4"
                                  size="sm"
                                  variant="FillBlue700"
                                >
                                  V-Lancer
                                </Button>
                                <div className="border border-blue_700 border-solid lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"></div>
                              </Row>
                            </Column>
                          </Column>
                        </Column>
                        <Column className="mb-[4px] pages">
                          <Column
                            className="bg-cover bg-repeat items-center justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_image_22.png')",
                            }}
                          >
                            <Column className="justify-start xl:mb-[110px] 2xl:mb-[123px] 3xl:mb-[148px] lg:mb-[88px] w-[100%]">
                              <Column className="items-center justify-start lg:ml-[196px] xl:ml-[245px] 2xl:ml-[276px] 3xl:ml-[331px] w-[25%]">
                                <Button
                                  className="flex items-center justify-center text-center w-[100%]"
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
                                  <div className="bg-transparent capitalize font-normal not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                                    Message
                                  </div>
                                </Button>
                                <Button
                                  className="2xl:mt-[4px] 3xl:mt-[5px] flex items-center justify-center lg:mt-[3px] text-center w-[100%] xl:mt-[4px]"
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
                                  <div className="bg-transparent capitalize font-normal not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                                    Endorse
                                  </div>
                                </Button>
                              </Column>
                              <Img
                                src="images/img_group51.svg"
                                className="lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] lg:mt-[48px] xl:mt-[60px] 2xl:mt-[67px] 3xl:mt-[81px] w-[100%]"
                                alt="GroupFiftyOne One"
                              />
                            </Column>
                          </Column>
                          <Column className="items-center justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[92%]">
                            <Column className="items-center justify-start w-[100%]">
                              <Column className="items-center justify-start w-[99%]">
                                <Row className="items-center w-[100%]">
                                  <Img
                                    src="images/img_ellipse15_5.png"
                                    className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                                    alt="EllipseFifteen"
                                  />
                                  <Column className="3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[31%]">
                                    <Text className="Amazon" variant="body10">
                                      Amira Ali
                                    </Text>
                                    <Text
                                      className="font-bold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] text-bluegray_400 w-[auto]"
                                      variant="body12"
                                    >
                                      Tagline goes here
                                    </Text>
                                  </Column>
                                  <Img
                                    src="images/img_ambassadorplat.png"
                                    className="xl:ml-[100px] 2xl:ml-[113px] 3xl:ml-[136px] lg:ml-[80px] VendorPlatinum"
                                    alt="AmbassadorPlat"
                                  />
                                  <Button
                                    className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                                    shape="icbCircleBorder15"
                                    size="mdIcn"
                                    variant="icbOutlineBlue700"
                                  >
                                    <Img
                                      src="images/img_arrowdown_29X29.svg"
                                      className="flex items-center justify-center"
                                      alt="arrowdown Four"
                                    />
                                  </Button>
                                </Row>
                              </Column>
                              <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                              <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[97%]">
                                <Stack className="lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] w-[48%]">
                                  <Row className="absolute h-[max-content] inset-y-[0] items-center justify-evenly left-[0] my-[auto] w-[63%]">
                                    <Img
                                      src="images/img_calendar_16X16.svg"
                                      className="clock"
                                      alt="calendar Four"
                                    />
                                    <Text
                                      className="rowcalendar1"
                                      variant="body10"
                                    >
                                      11-Nov-2022
                                    </Text>
                                  </Row>
                                  <Column className="absolute items-center justify-start pr-[1px] py-[1px] right-[0] w-[41%]">
                                    <Row className="items-start justify-evenly my-[3px] w-[100%]">
                                      <Img
                                        src="images/img_star.svg"
                                        className="clock"
                                        alt="star Four"
                                      />
                                      <Text
                                        className="rowstar_three"
                                        variant="body12"
                                      >
                                        5 (3.2K)
                                      </Text>
                                    </Row>
                                  </Column>
                                </Stack>
                                <Column className="items-center pb-[2px] w-[49%]">
                                  <Row className="items-start justify-evenly w-[100%]">
                                    <Img
                                      src="images/img_location_16X16.svg"
                                      className="mt-[2px] clock"
                                      alt="location Two"
                                    />
                                    <Text
                                      className="rowcalendar1"
                                      variant="body10"
                                    >
                                      United Arab Emirates
                                    </Text>
                                  </Row>
                                </Column>
                              </Row>
                              <Row className="items-center justify-evenly xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                                <Button
                                  className="font-bold 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[17%]"
                                  shape="RoundedBorder4"
                                  size="sm"
                                  variant="FillBlue700"
                                >
                                  Personal
                                </Button>
                                <Button
                                  className="font-bold 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[18%]"
                                  shape="RoundedBorder4"
                                  size="sm"
                                  variant="FillBlue700"
                                >
                                  V-Author
                                </Button>
                                <Button
                                  className="font-bold 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[21%]"
                                  shape="RoundedBorder4"
                                  size="sm"
                                  variant="FillBlue700"
                                >
                                  V-Employer
                                </Button>
                                <Button
                                  className="font-bold 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[16%]"
                                  shape="RoundedBorder4"
                                  size="sm"
                                  variant="FillBlue700"
                                >
                                  V-Seller
                                </Button>
                                <Button
                                  className="font-bold 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[17%]"
                                  shape="RoundedBorder4"
                                  size="sm"
                                  variant="FillBlue700"
                                >
                                  V-Lancer
                                </Button>
                                <div className="border border-blue_700 border-solid lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] rounded-radius50 lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"></div>
                              </Row>
                            </Column>
                          </Column>
                        </Column>
                      </List>
                      <Button
                        className="2xl:ml-[348px] 2xl:mt-[24px] 3xl:ml-[418px] 3xl:mt-[29px] flex items-center justify-center lg:ml-[247px] lg:mt-[17px] text-center w-[19%] xl:ml-[310px] xl:mt-[22px]"
                        rightIcon={
                          <Img
                            src="images/img_arrowdown_16X12.svg"
                            className="text-center lg:w-[8px] lg:ml-[6px] xl:w-[10px] xl:ml-[7px] 2xl:w-[11px] 2xl:ml-[8px] 3xl:w-[13px] 3xl:ml-[10px]"
                            alt="arrow_down"
                          />
                        }
                        shape="RoundedBorder4"
                        size="lg"
                        variant="FillWhiteA700"
                      >
                        <div className="bg-transparent capitalize font-bold font-poppins lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_501">
                          Show More
                        </div>
                      </Button>
                    </Column>
                  </Column>
                </Stack>
                <Column className="items-center justify-start 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[98%]">
                  <Line className="bg-black_900_20 h-[1px] w-[100%]" />
                  <Column className="items-center justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Row className="font-prompt items-start justify-between w-[100%]">
                        <Text className="rownameoftheve_one" variant="body5">
                          Portfolio
                        </Text>
                        <Row className="font-poppins items-center justify-evenly rounded-radius4 w-[23%]">
                          <Button
                            className="capitalize font-semibold xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[42%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="OutlineBlack9000f"
                          >
                            Showing
                          </Button>
                          <Text className="XAxis" variant="body12">
                            2 Out Of 5 Results
                          </Text>
                        </Row>
                      </Row>
                      <List
                        className="font-poppins lg:gap-[18px] xl:gap-[22px] 2xl:gap-[25px] 3xl:gap-[30px] grid grid-cols-4 min-h-[auto] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]"
                        orientation="horizontal"
                      >
                        <Column className="justify-start rounded-radius15 w-[100%]">
                          <Stack className="bg-bluegray_101 border border-black_900_20 border-solid lg:h-[129px] xl:h-[161px] 2xl:h-[182px] 3xl:h-[218px] px-[1px] rounded-radius15 lg:w-[128px] xl:w-[160px] 2xl:w-[181px] 3xl:w-[217px]">
                            <Img
                              src="images/img_rectangle97.png"
                              className="Rectangle104"
                              alt="Rectangle103"
                            />
                          </Stack>
                          <Text className="ProfilePhotos" variant="body10">
                            {"<Album Name>"}
                          </Text>
                          <Text className="Duration0002" variant="body12">
                            10 Photos 5 Videos
                          </Text>
                        </Column>
                        <Column className="justify-start rounded-radius15 w-[100%]">
                          <Stack className="bg-bluegray_101 border border-black_900_20 border-solid lg:h-[129px] xl:h-[161px] 2xl:h-[182px] 3xl:h-[218px] px-[1px] rounded-radius15 lg:w-[128px] xl:w-[160px] 2xl:w-[181px] 3xl:w-[217px]">
                            <Img
                              src="images/img_rectangle103_8.png"
                              className="Rectangle104"
                              alt="Rectangle103 One"
                            />
                          </Stack>
                          <Text className="ProfilePhotos" variant="body10">
                            {"<Album Name>"}
                          </Text>
                          <Text className="Duration0002" variant="body12">
                            12 Photos 2 Videos
                          </Text>
                        </Column>
                        <Column className="justify-start rounded-radius15 w-[100%]">
                          <Stack className="bg-bluegray_101 border border-black_900_20 border-solid lg:h-[129px] xl:h-[161px] 2xl:h-[182px] 3xl:h-[218px] px-[1px] rounded-radius15 lg:w-[128px] xl:w-[160px] 2xl:w-[181px] 3xl:w-[217px]">
                            <Img
                              src="images/img_rectangle97.png"
                              className="Rectangle104"
                              alt="Rectangle103 Two"
                            />
                          </Stack>
                          <Text className="ProfilePhotos" variant="body10">
                            {"<Album Name>"}
                          </Text>
                          <Text className="Duration0002" variant="body12">
                            10 Photos 5 Videos
                          </Text>
                        </Column>
                        <Column className="justify-start rounded-radius15 w-[100%]">
                          <Stack className="bg-bluegray_101 border border-black_900_20 border-solid lg:h-[129px] xl:h-[161px] 2xl:h-[182px] 3xl:h-[218px] px-[1px] rounded-radius15 lg:w-[128px] xl:w-[160px] 2xl:w-[181px] 3xl:w-[217px]">
                            <Img
                              src="images/img_rectangle103_8.png"
                              className="Rectangle104"
                              alt="Rectangle103 Three"
                            />
                          </Stack>
                          <Text className="ProfilePhotos" variant="body10">
                            {"<Album Name>"}
                          </Text>
                          <Text className="Duration0002" variant="body12">
                            12 Photos 2 Videos
                          </Text>
                        </Column>
                      </List>
                      <Button
                        className="2xl:ml-[348px] 2xl:mt-[32px] 3xl:ml-[418px] 3xl:mt-[38px] flex items-center justify-center lg:ml-[247px] lg:mt-[23px] text-center w-[18%] xl:ml-[310px] xl:mt-[28px]"
                        rightIcon={
                          <Img
                            src="images/img_arrowdown_16X12.svg"
                            className="text-center lg:w-[8px] lg:ml-[6px] xl:w-[10px] xl:ml-[7px] 2xl:w-[11px] 2xl:ml-[8px] 3xl:w-[13px] 3xl:ml-[10px]"
                            alt="arrow_down"
                          />
                        }
                        shape="RoundedBorder4"
                        size="lg"
                        variant="FillWhiteA700"
                      >
                        <div className="bg-transparent capitalize font-medium font-poppins lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_501">
                          Show More
                        </div>
                      </Button>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="font-poppins items-center justify-start lg:pb-[394px] xl:pb-[493px] 2xl:pb-[554px] 3xl:pb-[665px] w-[29%]">
                <Column className="bg-white_A700 border border-black_900_20 border-solid items-end justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius15 w-[100%]">
                  <Text className="carouseladvlt" variant="body13">
                    Sponsored Ads
                  </Text>
                  <Column
                    className="bg-cover bg-repeat items-center justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius15 w-[97%]"
                    style={{
                      backgroundImage: "url('images/img_group69704.png')",
                    }}
                  >
                    <Img
                      src="images/img_call.svg"
                      className="call_Three"
                      alt="call Two"
                    />
                    <Row className="items-start justify-center 3xl:mb-[106px] lg:mb-[62px] xl:mb-[78px] 2xl:mb-[88px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[73px] 3xl:mt-[88px] w-[24%]">
                      <Text className="rowvideo" variant="body9">
                        Video
                      </Text>
                      <Img
                        src="images/img_call.svg"
                        className="call_Four"
                        alt="call Three"
                      />
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Row>
          </Column>
        </Column>
        <Column className="items-end lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] 2xl:pl-[104px] 3xl:pl-[125px] lg:pl-[74px] xl:pl-[93px] w-[100%]">
          <Column className="justify-start w-[100%]">
            <Text className="carouseladvlt" variant="body13">
              Sponsored Ads
            </Text>
            <List
              className="lg:gap-[14px] xl:gap-[18px] 2xl:gap-[20px] 3xl:gap-[25px] grid grid-cols-5 min-h-[auto] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]"
              orientation="horizontal"
            >
              <Stack className="scrollingad">
                <Img
                  src="images/img_call.svg"
                  className="call"
                  alt="call Four"
                />
              </Stack>
              <Stack
                className="bg-cover bg-repeat lg:h-[170px] xl:h-[212px] 2xl:h-[239px] 3xl:h-[286px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius15 w-[100%]"
                style={{ backgroundImage: "url('images/img_rectangle98.png')" }}
              >
                <Img
                  src="images/img_call.svg"
                  className="call_One"
                  alt="call Five"
                />
              </Stack>
              <Stack
                className="bg-cover bg-repeat lg:h-[170px] xl:h-[212px] 2xl:h-[239px] 3xl:h-[286px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius15 w-[100%]"
                style={{ backgroundImage: "url('images/img_adv.png')" }}
              >
                <Img
                  src="images/img_call.svg"
                  className="call"
                  alt="call Six"
                />
              </Stack>
              <Stack
                className="bg-cover bg-repeat lg:h-[170px] xl:h-[212px] 2xl:h-[239px] 3xl:h-[286px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius15 w-[100%]"
                style={{ backgroundImage: "url('images/img_adv_250X300.png')" }}
              >
                <Img
                  src="images/img_call.svg"
                  className="call"
                  alt="call Seven"
                />
              </Stack>
              <Stack
                className="bg-cover bg-repeat lg:h-[170px] xl:h-[212px] 2xl:h-[239px] 3xl:h-[286px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius15 w-[100%]"
                style={{ backgroundImage: "url('images/img_adv_42.png')" }}
              >
                <Img
                  src="images/img_call_22X18.png"
                  className="call"
                  alt="call Eight"
                />
              </Stack>
            </List>
          </Column>
        </Column>
        <Footer className="lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[100%]" />
      </Column>
    </>
  );
};

export default IMARNFrontendWebsiteAIOProfileAssetsVLancerPage;
