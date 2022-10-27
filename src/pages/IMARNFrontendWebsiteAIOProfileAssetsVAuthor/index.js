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

const IMARNFrontendWebsiteAIOProfileAssetsVAuthorPage = () => {
  const navigate = useNavigate();

  function handleNavigate96() {
    navigate("/imarnfrontendwebsiteaioprofileperformance");
  }
  function handleNavigate97() {
    navigate("/imarnfrontendwebsiteaioprofileassetsvemployer");
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
                      src="images/img_emailphonepay_18.svg"
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
                  className="common-pointer capitalize font-medium ml-[2px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 text-center w-[20%]"
                  onClick={handleNavigate96}
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
              <Text className="VAuthor_One" variant="body10">
                V-Author
              </Text>
              <Text
                className="common-pointer VEmployer_One"
                variant="body10"
                onClick={handleNavigate97}
              >
                V-Employer
              </Text>
              <Text className="VEmployer_One" variant="body10">
                V-Instructor
              </Text>
              <Text className="VEmployer_One" variant="body10">
                V-Vendor
              </Text>
              <Text className="VEmployer_One" variant="body10">
                V-Lancer
              </Text>
              <Text className="VEmployer_One" variant="body10">
                V-Organizer
              </Text>
              <Text className="VEmployer_One" variant="body10">
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
              <Column className="bg-white_A700 border border-black_900_0c border-solid items-center justify-end lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[6px] rounded-radius15 w-[68%]">
                <Column className="items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[97%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <List
                        className="gap-[0] min-h-[auto] w-[100%]"
                        orientation="vertical"
                      >
                        <Row className="listrectangle109">
                          <Column className="bg-white_A700 border border-black_900_26 border-solid items-center lg:p-[14px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[25px] rounded-radius15 w-[21%]">
                            <Text
                              className="TwoHundredThirtyThree"
                              variant="body2"
                            >
                              233
                            </Text>
                            <Text
                              className="capitalize font-bold font-poppins lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] text-gray_501 w-[auto]"
                              variant="body10"
                            >
                              Blog Posts
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 border border-black_900_26 border-solid items-center lg:p-[14px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[25px] rounded-radius15 w-[21%]">
                            <Text
                              className="TwoHundredThirtyThree"
                              variant="body2"
                            >
                              5
                            </Text>
                            <Text className="SocialPages" variant="body10">
                              Social Pages
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 border border-black_900_26 border-solid items-center lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius15 w-[21%]">
                            <Text className="Iamlookingfo" variant="body2">
                              1.1K
                            </Text>
                            <Text className="Followers_One" variant="body10">
                              Followers
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 border border-black_900_26 border-solid items-center lg:p-[14px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[25px] rounded-radius15 w-[21%]">
                            <Text
                              className="TwoHundredThirtyThree"
                              variant="body2"
                            >
                              4
                            </Text>
                            <Text className="SocialPages" variant="body10">
                              Social Groups
                            </Text>
                          </Column>
                        </Row>
                        <Row className="listrectangle109">
                          <Column className="bg-white_A700 border border-black_900_26 border-solid items-center lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius15 w-[21%]">
                            <Text className="Iamlookingfo" variant="body2">
                              10.2K
                            </Text>
                            <Text className="Followers_One" variant="body10">
                              Members
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 border border-black_900_26 border-solid items-center lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius15 w-[21%]">
                            <Text className="Iamlookingfo" variant="body2">
                              3
                            </Text>
                            <Text className="Followers_One" variant="body10">
                              Channels
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 border border-black_900_26 border-solid items-center lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius15 w-[21%]">
                            <Text className="Iamlookingfo" variant="body2">
                              2.3K
                            </Text>
                            <Text className="Subscribers" variant="body10">
                              Subscribers
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 border border-black_900_26 border-solid items-center lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius15 w-[21%]">
                            <Text className="Iamlookingfo" variant="body2">
                              57
                            </Text>
                            <Text className="Subscribers" variant="body10">
                              Videos
                            </Text>
                          </Column>
                        </Row>
                      </List>
                      <Column className="bg-white_A700 border border-black_900_26 border-solid items-center justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius15 w-[21%]">
                        <Text className="Iamlookingfo" variant="body2">
                          256K
                        </Text>
                        <Text className="Subscribers" variant="body10">
                          Views
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="bg-black_900_20 h-[1px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]" />
                  <Column className="items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text
                          className="lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] columntitleofthec"
                          variant="body5"
                        >
                          V-Blog Posts
                        </Text>
                        <Row className="font-poppins items-center justify-evenly xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] rounded-radius4 w-[25%]">
                          <Button
                            className="capitalize font-semibold xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[40%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="OutlineBlack9000f"
                          >
                            Showing
                          </Button>
                          <Text className="XAxis" variant="body12">
                            2 Out Of 223 Results
                          </Text>
                        </Row>
                      </Row>
                      <Row className="items-start justify-between 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:pb-[41px] xl:pb-[52px] 2xl:pb-[59px] 3xl:pb-[70px] w-[100%]">
                        <div className="overflow-x-auto w-[49%]">
                          <Column className="bg-white_A700 border border-gray_201 border-solid justify-end rounded-radius10 shadow-bs5 w-[100%]">
                            <Column
                              className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_image_5.png')",
                              }}
                            >
                              <Column className="bg-gradient9  justify-end lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                                <Img
                                  src="images/img_group51.svg"
                                  className="GroupFiftyOne_Two"
                                  alt="GroupFiftyOne"
                                />
                                <Row className="items-center justify-end lg:ml-[206px] xl:ml-[258px] 2xl:ml-[290px] 3xl:ml-[348px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                                  <Img
                                    src="images/img_vendorgold.png"
                                    className="VendorPlatinum"
                                    alt="VendorGold"
                                  />
                                  <Img
                                    src="images/img_ambassadorsilv.png"
                                    className="AmbassadorGold"
                                    alt="AmbassadorSilv One"
                                  />
                                </Row>
                              </Column>
                            </Column>
                            <Slider
                              autoPlay
                              autoPlayInterval={2000}
                              slidesToShow={9}
                              activeIndex={sliderState}
                              onSlideChanged={(e) => {
                                setsliderState(e?.item);
                              }}
                              activeSlideCSS="scale-[0.25]"
                              magnifiedIndex={1}
                              centerMode
                              ref={sliderRef}
                              className="lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]"
                              items={[...Array(27)].map(() => (
                                <React.Fragment key={Math.random()}>
                                  <Line className="bg-black_900_20 h-[1px] w-[100%]" />
                                </React.Fragment>
                              ))}
                            />
                          </Column>
                        </div>
                        <Column className="bg-white_A700 border border-gray_201 border-solid items-center justify-start lg:pb-[163px] xl:pb-[204px] 2xl:pb-[229px] 3xl:pb-[275px] rounded-radius10 shadow-bs5 w-[49%]">
                          <Column
                            className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_image_5.png')",
                            }}
                          >
                            <Column className="bg-gradient9  justify-end lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                              <Img
                                src="images/img_group51.svg"
                                className="GroupFiftyOne_Two"
                                alt="GroupFiftyOne One"
                              />
                              <Row className="items-center justify-end lg:ml-[206px] xl:ml-[258px] 2xl:ml-[290px] 3xl:ml-[348px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                                <Img
                                  src="images/img_vendorsilver.png"
                                  className="VendorSilver"
                                  alt="VendorSilver"
                                />
                                <Img
                                  src="images/img_ambassadorgold.png"
                                  className="AmbassadorGold"
                                  alt="AmbassadorGold"
                                />
                              </Row>
                            </Column>
                          </Column>
                        </Column>
                      </Row>
                    </Column>
                  </Column>
                  <Column className="font-poppins justify-end lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[40px] pl-[1px] pt-[1px] w-[100%]">
                    <List
                      className="lg:gap-[13px] xl:gap-[16px] 2xl:gap-[19px] 3xl:gap-[22px] grid grid-cols-2 min-h-[auto] lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[44px] w-[100%]"
                      orientation="horizontal"
                    >
                      <Column className="gridfollowed">
                        <Column
                          className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_image_8.png')",
                          }}
                        >
                          <Column className="bg-gradient9  justify-end lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                            <Img
                              src="images/img_group51.svg"
                              className="GroupFiftyOne_Two"
                              alt="GroupFiftyOne Two"
                            />
                            <Row className="items-center justify-end lg:ml-[206px] xl:ml-[258px] 2xl:ml-[290px] 3xl:ml-[348px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                              <Img
                                src="images/img_vendorgold.png"
                                className="VendorPlatinum"
                                alt="VendorGold One"
                              />
                              <Img
                                src="images/img_ambassadorsilv.png"
                                className="AmbassadorGold"
                                alt="AmbassadorSilv Two"
                              />
                            </Row>
                          </Column>
                        </Column>
                        <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                          <Row className="items-end w-[56%]">
                            <Button
                              className="flex lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] items-center justify-center rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[34px]"
                              size="mdIcn"
                              variant="icbOutlineBlack90033"
                            >
                              <Img
                                src="images/img_location_30X30.svg"
                                className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                                alt="location One"
                              />
                            </Button>
                            <Text className="rowlocation1" variant="body9">
                              {"<Name of The Page>"}
                            </Text>
                          </Row>
                          <Row className="items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[83%]">
                            <Row className="items-center justify-evenly w-[30%]">
                              <Img
                                src="images/img_calendar_16X16.svg"
                                className="clock"
                                alt="calendar Three"
                              />
                              <Text className="date" variant="body12">
                                15-Oct-2022
                              </Text>
                            </Row>
                            <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                              <Img
                                src="images/img_thumbsup.svg"
                                className="clock"
                                alt="thumbsup Three"
                              />
                              <Text className="likes" variant="body12">
                                0
                              </Text>
                            </Row>
                            <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[17%]">
                              <Img
                                src="images/img_star.svg"
                                className="clock"
                                alt="star Three"
                              />
                              <Text className="ratings" variant="body12">
                                5(20)
                              </Text>
                            </Row>
                            <Row className="items-center justify-center xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                              <Img
                                src="images/img_share.svg"
                                className="clock"
                                alt="share Three"
                              />
                              <Text className="shares" variant="body12">
                                320
                              </Text>
                            </Row>
                            <Row className="items-center justify-evenly 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[16%]">
                              <Img
                                src="images/img_megaphone_14X19.svg"
                                className="megaphone"
                                alt="megaphone One"
                              />
                              <Text className="rowuser" variant="body12">
                                2.5K
                              </Text>
                            </Row>
                          </Row>
                          <Row className="items-center ml-[2px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                          <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                            <Column className="items-center w-[46%]">
                              <Row className="items-start justify-between w-[100%]">
                                <Stack className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]">
                                  <div className="absolute bg-gray_50 lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] outline outline-[1px] outline-black_900_20 rounded-radius50 top-[2%] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"></div>
                                  <Img
                                    src="images/img_rectangle65.png"
                                    className="absolute bottom-[2%] lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 w-[100%]"
                                    alt="RectangleSixtyFive Three"
                                  />
                                </Stack>
                                <Column className="justify-start mt-[3px] w-[68%]">
                                  <Text
                                    className="font-semibold text-black_900 w-[auto]"
                                    variant="body10"
                                  >
                                    John Kennedy
                                  </Text>
                                  <Text
                                    className="TitleatCompa_Two"
                                    variant="body12"
                                  >
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
                      <Column className="gridfollowed">
                        <Column
                          className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_image_8.png')",
                          }}
                        >
                          <Column className="bg-gradient9  justify-end lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                            <Img
                              src="images/img_group51.svg"
                              className="GroupFiftyOne_Two"
                              alt="GroupFiftyOne Three"
                            />
                            <Row className="items-center justify-end lg:ml-[206px] xl:ml-[258px] 2xl:ml-[290px] 3xl:ml-[348px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                              <Img
                                src="images/img_vendorgold.png"
                                className="VendorPlatinum"
                                alt="VendorGold Two"
                              />
                              <Img
                                src="images/img_ambassadorsilv.png"
                                className="AmbassadorGold"
                                alt="AmbassadorSilv Three"
                              />
                            </Row>
                          </Column>
                        </Column>
                        <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                          <Row className="items-end w-[56%]">
                            <Button
                              className="flex lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] items-center justify-center rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[34px]"
                              size="mdIcn"
                              variant="icbOutlineBlack90033"
                            >
                              <Img
                                src="images/img_location_30X30.svg"
                                className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                                alt="location Two"
                              />
                            </Button>
                            <Text className="rowlocation1" variant="body9">
                              {"<Name of The Page>"}
                            </Text>
                          </Row>
                          <Row className="items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[83%]">
                            <Row className="items-center justify-evenly w-[30%]">
                              <Img
                                src="images/img_calendar_16X16.svg"
                                className="clock"
                                alt="calendar Four"
                              />
                              <Text className="date" variant="body12">
                                15-Oct-2022
                              </Text>
                            </Row>
                            <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                              <Img
                                src="images/img_thumbsup.svg"
                                className="clock"
                                alt="thumbsup Four"
                              />
                              <Text className="likes" variant="body12">
                                0
                              </Text>
                            </Row>
                            <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[17%]">
                              <Img
                                src="images/img_star.svg"
                                className="clock"
                                alt="star Four"
                              />
                              <Text className="ratings" variant="body12">
                                5(20)
                              </Text>
                            </Row>
                            <Row className="items-center justify-center xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                              <Img
                                src="images/img_share.svg"
                                className="clock"
                                alt="share Four"
                              />
                              <Text className="shares" variant="body12">
                                320
                              </Text>
                            </Row>
                            <Row className="items-center justify-evenly 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[16%]">
                              <Img
                                src="images/img_megaphone_14X19.svg"
                                className="megaphone"
                                alt="megaphone Two"
                              />
                              <Text className="rowuser" variant="body12">
                                2.5K
                              </Text>
                            </Row>
                          </Row>
                          <Row className="items-center ml-[2px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                                alt="overflowmenu Three"
                              />
                            </Button>
                          </Row>
                          <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                          <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                            <Column className="items-center w-[46%]">
                              <Row className="items-start justify-between w-[100%]">
                                <Stack className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]">
                                  <div className="absolute bg-gray_50 lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] outline outline-[1px] outline-black_900_20 rounded-radius50 top-[2%] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"></div>
                                  <Img
                                    src="images/img_rectangle65.png"
                                    className="absolute bottom-[2%] lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 w-[100%]"
                                    alt="RectangleSixtyFive Four"
                                  />
                                </Stack>
                                <Column className="justify-start mt-[3px] w-[68%]">
                                  <Text
                                    className="font-semibold text-black_900 w-[auto]"
                                    variant="body10"
                                  >
                                    John Kennedy
                                  </Text>
                                  <Text
                                    className="TitleatCompa_Two"
                                    variant="body12"
                                  >
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
                                alt="arrowdown Three"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                    </List>
                    <Button
                      className="2xl:ml-[347px] 2xl:mr-[309px] 2xl:mt-[19px] 3xl:ml-[417px] 3xl:mr-[371px] 3xl:mt-[22px] flex items-center justify-center lg:ml-[247px] lg:mr-[220px] lg:mt-[13px] text-center w-[18%] xl:ml-[309px] xl:mr-[275px] xl:mt-[16px]"
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
                      <div className="bg-transparent capitalize font-medium lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-gray_501">
                        Show More
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Line className="bg-black_900_20 h-[1px] mt-[3px] w-[97%]" />
                <List
                  className="gap-[0] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[16px] lg:mb-[9px] min-h-[auto] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] w-[97%]"
                  orientation="vertical"
                >
                  <Column className="listline158">
                    <Column className="justify-start w-[100%]">
                      <Row className="font-prompt items-end justify-between w-[100%]">
                        <Text className="columnvideocamera_one" variant="body5">
                          V-Nation Groups
                        </Text>
                        <Row className="font-poppins items-center justify-evenly mb-[1px] rounded-radius4 w-[23%]">
                          <Button
                            className="capitalize font-semibold xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[42%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="OutlineBlack9000f"
                          >
                            Showing
                          </Button>
                          <Text className="XAxis" variant="body12">
                            2 Out Of 4 Results
                          </Text>
                        </Row>
                      </Row>
                      <Row className="font-poppins items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[100%]">
                        <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[49%]">
                          <Column
                            className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_image_9.png')",
                            }}
                          >
                            <Column
                              className="bg-cover bg-repeat items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group2241.png')",
                              }}
                            >
                              <Button
                                className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[17%]"
                                shape="CircleBorder12"
                                size="sm"
                                variant="OutlineBluegray400"
                              >
                                Public
                              </Button>
                              <Button
                                className="capitalize font-semibold lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[14%]"
                                shape="CircleBorder12"
                                size="sm"
                                variant="GradientDeeporangeA400Pink900"
                              >
                                Join
                              </Button>
                              <Img
                                src="images/img_group51.svg"
                                className="GroupFiftyOne_Six"
                                alt="GroupFiftyOne Four"
                              />
                              <Row className="items-center justify-end mb-[2px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                                <Img
                                  src="images/img_vendorgold.png"
                                  className="VendorPlatinum"
                                  alt="VendorGold Three"
                                />
                                <Img
                                  src="images/img_ambassadorsilv.png"
                                  className="AmbassadorGold"
                                  alt="AmbassadorSilv Four"
                                />
                              </Row>
                            </Column>
                          </Column>
                          <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                            <Row className="items-end w-[58%]">
                              <Button
                                className="flex lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] items-center justify-center rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[34px]"
                                size="mdIcn"
                                variant="icbOutlineBlack90033"
                              >
                                <Img
                                  src="images/img_location_30X30.svg"
                                  className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                                  alt="location Three"
                                />
                              </Button>
                              <Text className="rowlocation1" variant="body9">
                                {"<Name of The Group>"}
                              </Text>
                            </Row>
                            <Row className="items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[82%]">
                              <Row className="items-center justify-evenly w-[30%]">
                                <Img
                                  src="images/img_calendar_16X16.svg"
                                  className="clock"
                                  alt="calendar Five"
                                />
                                <Text className="date" variant="body12">
                                  15-Oct-2022
                                </Text>
                              </Row>
                              <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                                <Img
                                  src="images/img_thumbsup.svg"
                                  className="clock"
                                  alt="thumbsup Five"
                                />
                                <Text className="likes" variant="body12">
                                  0
                                </Text>
                              </Row>
                              <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[17%]">
                                <Img
                                  src="images/img_star.svg"
                                  className="clock"
                                  alt="star Five"
                                />
                                <Text className="ratings" variant="body12">
                                  5(20)
                                </Text>
                              </Row>
                              <Row className="items-center justify-center xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                                <Img
                                  src="images/img_share.svg"
                                  className="clock"
                                  alt="share Five"
                                />
                                <Text className="shares" variant="body12">
                                  320
                                </Text>
                              </Row>
                              <Row className="items-center justify-evenly 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[16%]">
                                <Img
                                  src="images/img_megaphone_14X19.svg"
                                  className="megaphone"
                                  alt="megaphone Three"
                                />
                                <Text className="rowuser" variant="body12">
                                  3.4K
                                </Text>
                              </Row>
                            </Row>
                            <Row className="items-center ml-[3px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[80%]">
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
                            <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                              <Column className="items-center w-[46%]">
                                <Row className="items-start justify-between w-[100%]">
                                  <Stack className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]">
                                    <div className="absolute bg-gray_50 lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] outline outline-[1px] outline-black_900_20 rounded-radius50 top-[2%] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"></div>
                                    <Img
                                      src="images/img_rectangle65.png"
                                      className="absolute bottom-[2%] lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 w-[100%]"
                                      alt="RectangleSixtyFive Five"
                                    />
                                  </Stack>
                                  <Column className="justify-start mt-[3px] w-[68%]">
                                    <Text
                                      className="font-semibold text-black_900 w-[auto]"
                                      variant="body10"
                                    >
                                      John Kennedy
                                    </Text>
                                    <Text
                                      className="TitleatCompa_Two"
                                      variant="body12"
                                    >
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
                                  alt="arrowdown Four"
                                />
                              </Button>
                            </Row>
                          </Column>
                        </Column>
                        <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[11px] xl:pb-[14px] 2xl:pb-[16px] 3xl:pb-[19px] rounded-radius10 shadow-bs6 w-[49%]">
                          <Column
                            className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_image_9.png')",
                            }}
                          >
                            <Column
                              className="bg-cover bg-repeat items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group2241.png')",
                              }}
                            >
                              <Column className="items-center justify-start w-[18%]">
                                <Button
                                  className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[100%]"
                                  shape="CircleBorder12"
                                  size="sm"
                                  variant="OutlineBluegray400"
                                >
                                  Private
                                </Button>
                                <Button
                                  className="capitalize font-semibold lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[99%]"
                                  shape="CircleBorder12"
                                  size="sm"
                                  variant="GradientBlue700Indigo900"
                                >
                                  Joined
                                </Button>
                              </Column>
                              <Img
                                src="images/img_group51.svg"
                                className="GroupFiftyOne_Six"
                                alt="GroupFiftyOne One"
                              />
                              <Row className="items-center justify-end mb-[2px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                                <Img
                                  src="images/img_vendorgold.png"
                                  className="VendorPlatinum"
                                  alt="VendorGold One"
                                />
                                <Img
                                  src="images/img_ambassadorsilv.png"
                                  className="AmbassadorGold"
                                  alt="AmbassadorSilv One"
                                />
                              </Row>
                            </Column>
                          </Column>
                          <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                            <Row className="items-end w-[58%]">
                              <Button
                                className="flex lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] items-center justify-center rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[34px]"
                                size="mdIcn"
                                variant="icbOutlineBlack90033"
                              >
                                <Img
                                  src="images/img_location_30X30.svg"
                                  className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                                  alt="location One"
                                />
                              </Button>
                              <Text className="rowlocation1" variant="body9">
                                {"<Name of The Group>"}
                              </Text>
                            </Row>
                            <Row className="items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[82%]">
                              <Row className="items-center justify-evenly w-[30%]">
                                <Img
                                  src="images/img_calendar_16X16.svg"
                                  className="clock"
                                  alt="calendar One"
                                />
                                <Text className="date" variant="body12">
                                  15-Oct-2022
                                </Text>
                              </Row>
                              <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                                <Img
                                  src="images/img_thumbsup.svg"
                                  className="clock"
                                  alt="thumbsup One"
                                />
                                <Text className="likes" variant="body12">
                                  0
                                </Text>
                              </Row>
                              <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[17%]">
                                <Img
                                  src="images/img_star.svg"
                                  className="clock"
                                  alt="star One"
                                />
                                <Text className="ratings" variant="body12">
                                  5(20)
                                </Text>
                              </Row>
                              <Row className="items-center justify-center xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                                <Img
                                  src="images/img_share.svg"
                                  className="clock"
                                  alt="share One"
                                />
                                <Text className="shares" variant="body12">
                                  320
                                </Text>
                              </Row>
                              <Row className="items-center justify-evenly 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[16%]">
                                <Img
                                  src="images/img_megaphone_14X19.svg"
                                  className="megaphone"
                                  alt="megaphone One"
                                />
                                <Text className="rowuser" variant="body12">
                                  3.4K
                                </Text>
                              </Row>
                            </Row>
                            <Row className="items-center ml-[3px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[80%]">
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
                            <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                              <Column className="items-center w-[46%]">
                                <Row className="items-start justify-between w-[100%]">
                                  <Stack className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]">
                                    <div className="absolute bg-gray_50 lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] outline outline-[1px] outline-black_900_20 rounded-radius50 top-[2%] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"></div>
                                    <Img
                                      src="images/img_rectangle65.png"
                                      className="absolute bottom-[2%] lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 w-[100%]"
                                      alt="RectangleSixtyFive One"
                                    />
                                  </Stack>
                                  <Column className="justify-start mt-[3px] w-[68%]">
                                    <Text
                                      className="font-semibold text-black_900 w-[auto]"
                                      variant="body10"
                                    >
                                      John Kennedy
                                    </Text>
                                    <Text
                                      className="TitleatCompa_Two"
                                      variant="body12"
                                    >
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
                      </Row>
                      <Button
                        className="2xl:ml-[348px] 2xl:mt-[19px] 3xl:ml-[418px] 3xl:mt-[22px] flex items-center justify-center lg:ml-[247px] lg:mt-[13px] text-center w-[18%] xl:ml-[310px] xl:mt-[16px]"
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
                  <Line className="self-center w-[100%] h-[1px] bg-black_900_20" />
                  <Column className="listline158">
                    <Column className="justify-start w-[100%]">
                      <Row className="font-prompt items-start justify-between w-[100%]">
                        <Text className="rownameoftheve_one" variant="body5">
                          V-Tube Channels
                        </Text>
                        <Row className="font-poppins items-center rounded-radius4 w-[23%]">
                          <Button
                            className="capitalize font-semibold xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[42%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="OutlineBlack9000f"
                          >
                            Showing
                          </Button>
                          <Text
                            className="lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] XAxis"
                            variant="body12"
                          >
                            2 Out Of 3 Results
                          </Text>
                        </Row>
                      </Row>
                      <Row className="font-poppins items-center justify-between 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                        <Stack className="lg:h-[366px] xl:h-[458px] 2xl:h-[515px] 3xl:h-[618px] w-[49%]">
                          <Column className="absolute bg-white_A700 border border-gray_201 border-solid items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] right-[0] rounded-radius10 shadow-bs6 w-[100%]">
                            <Column className="justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[220px] xl:mt-[275px] 2xl:mt-[309px] 3xl:mt-[371px] w-[100%]">
                              <Row className="items-center w-[63%]">
                                <Button
                                  className="flex lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] items-center justify-center rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[34px]"
                                  size="mdIcn"
                                  variant="icbOutlineBlack90033"
                                >
                                  <Img
                                    src="images/img_location_30X30.svg"
                                    className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                                    alt="location Four"
                                  />
                                </Button>
                                <Text className="rowlocation" variant="body9">
                                  {"<Name of The channel>"}
                                </Text>
                              </Row>
                              <Row className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
                                <Row className="items-center justify-evenly w-[31%]">
                                  <Img
                                    src="images/img_calendar_16X16.svg"
                                    className="clock"
                                    alt="calendar Six"
                                  />
                                  <Text className="date" variant="body12">
                                    15-Oct-2022
                                  </Text>
                                </Row>
                                <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[10%]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="clock"
                                    alt="thumbsup Six"
                                  />
                                  <Text className="likes" variant="body12">
                                    0
                                  </Text>
                                </Row>
                                <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                                  <Img
                                    src="images/img_star.svg"
                                    className="clock"
                                    alt="star Six"
                                  />
                                  <Text className="ratings" variant="body12">
                                    5(20)
                                  </Text>
                                </Row>
                                <Row className="items-center justify-center xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                                  <Img
                                    src="images/img_share.svg"
                                    className="clock"
                                    alt="share Six"
                                  />
                                  <Text className="shares" variant="body12">
                                    320
                                  </Text>
                                </Row>
                                <Row className="items-center justify-evenly 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[13%]">
                                  <Img
                                    src="images/img_user.svg"
                                    className="clock"
                                    alt="user One"
                                  />
                                  <Text className="rowuser" variant="body12">
                                    10K
                                  </Text>
                                </Row>
                              </Row>
                              <Row className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                              <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                                <Column className="items-center w-[46%]">
                                  <Row className="items-start justify-between w-[100%]">
                                    <Stack className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]">
                                      <div className="absolute bg-gray_50 lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] outline outline-[1px] outline-black_900_20 rounded-radius50 top-[2%] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"></div>
                                      <Img
                                        src="images/img_rectangle65.png"
                                        className="absolute bottom-[2%] lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 w-[100%]"
                                        alt="RectangleSixtyFive Six"
                                      />
                                    </Stack>
                                    <Column className="justify-start mt-[3px] w-[68%]">
                                      <Text
                                        className="font-semibold text-black_900 w-[auto]"
                                        variant="body10"
                                      >
                                        John Kennedy
                                      </Text>
                                      <Text
                                        className="TitleatCompa_Two"
                                        variant="body12"
                                      >
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
                          <Column
                            className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] top-[0] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_image.png')",
                            }}
                          >
                            <Column className="bg-gradient9  justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                              <Button
                                className="capitalize font-semibold lg:ml-[205px] xl:ml-[257px] 2xl:ml-[289px] 3xl:ml-[347px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[22%]"
                                shape="CircleBorder12"
                                size="sm"
                                variant="GradientDeeporangeA400Pink900"
                              >
                                Subscribe
                              </Button>
                              <Img
                                src="images/img_group51.svg"
                                className="GroupFiftyOne"
                                alt="GroupFiftyOne Five"
                              />
                              <Row className="items-center justify-end mb-[2px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                                <Img
                                  src="images/img_vendorgold.png"
                                  className="VendorPlatinum"
                                  alt="VendorGold Four"
                                />
                                <Img
                                  src="images/img_ambassadorsilv.png"
                                  className="AmbassadorGold"
                                  alt="AmbassadorSilv Five"
                                />
                              </Row>
                            </Column>
                          </Column>
                        </Stack>
                        <Stack className="lg:h-[366px] xl:h-[458px] 2xl:h-[515px] 3xl:h-[618px] w-[49%]">
                          <Column className="absolute bg-white_A700 border border-gray_201 border-solid items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] right-[0] rounded-radius10 shadow-bs6 w-[100%]">
                            <Column className="justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[220px] xl:mt-[275px] 2xl:mt-[309px] 3xl:mt-[371px] w-[100%]">
                              <Row className="items-center w-[63%]">
                                <Button
                                  className="flex lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] items-center justify-center rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[34px]"
                                  size="mdIcn"
                                  variant="icbOutlineBlack90033"
                                >
                                  <Img
                                    src="images/img_location_30X30.svg"
                                    className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                                    alt="location One One"
                                  />
                                </Button>
                                <Text className="rowlocation" variant="body9">
                                  {"<Name of The channel>"}
                                </Text>
                              </Row>
                              <Row className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
                                <Row className="items-center justify-evenly w-[31%]">
                                  <Img
                                    src="images/img_calendar_16X16.svg"
                                    className="clock"
                                    alt="calendar One One"
                                  />
                                  <Text className="date" variant="body12">
                                    15-Oct-2022
                                  </Text>
                                </Row>
                                <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[10%]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="clock"
                                    alt="thumbsup One One"
                                  />
                                  <Text className="likes" variant="body12">
                                    0
                                  </Text>
                                </Row>
                                <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                                  <Img
                                    src="images/img_star.svg"
                                    className="clock"
                                    alt="star One One"
                                  />
                                  <Text className="ratings" variant="body12">
                                    5(20)
                                  </Text>
                                </Row>
                                <Row className="items-center justify-center xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                                  <Img
                                    src="images/img_share.svg"
                                    className="clock"
                                    alt="share One One"
                                  />
                                  <Text className="shares" variant="body12">
                                    320
                                  </Text>
                                </Row>
                                <Row className="items-center justify-evenly 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[13%]">
                                  <Img
                                    src="images/img_user.svg"
                                    className="clock"
                                    alt="user One One"
                                  />
                                  <Text className="rowuser" variant="body12">
                                    10K
                                  </Text>
                                </Row>
                              </Row>
                              <Row className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                                    alt="overflowmenu One One"
                                  />
                                </Button>
                              </Row>
                              <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                              <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                                <Column className="items-center w-[46%]">
                                  <Row className="items-start justify-between w-[100%]">
                                    <Stack className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]">
                                      <div className="absolute bg-gray_50 lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] outline outline-[1px] outline-black_900_20 rounded-radius50 top-[2%] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"></div>
                                      <Img
                                        src="images/img_rectangle65.png"
                                        className="absolute bottom-[2%] lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 w-[100%]"
                                        alt="RectangleSixtyFive One One"
                                      />
                                    </Stack>
                                    <Column className="justify-start mt-[3px] w-[68%]">
                                      <Text
                                        className="font-semibold text-black_900 w-[auto]"
                                        variant="body10"
                                      >
                                        John Kennedy
                                      </Text>
                                      <Text
                                        className="TitleatCompa_Two"
                                        variant="body12"
                                      >
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
                                    alt="arrowdown One One"
                                  />
                                </Button>
                              </Row>
                            </Column>
                          </Column>
                          <Column
                            className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] top-[0] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_image.png')",
                            }}
                          >
                            <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                              <Button
                                className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[24%]"
                                shape="CircleBorder12"
                                size="sm"
                                variant="GradientBlue700Indigo900"
                              >
                                Subscribed
                              </Button>
                              <Img
                                src="images/img_group51.svg"
                                className="GroupFiftyOne"
                                alt="GroupFiftyOne One One"
                              />
                              <Row className="items-center justify-end mb-[2px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                                <Img
                                  src="images/img_vendorgold.png"
                                  className="VendorPlatinum"
                                  alt="VendorGold One One"
                                />
                                <Img
                                  src="images/img_ambassadorsilv.png"
                                  className="AmbassadorGold"
                                  alt="AmbassadorSilv One One"
                                />
                              </Row>
                            </Column>
                          </Column>
                        </Stack>
                      </Row>
                      <Button
                        className="2xl:ml-[350px] 2xl:mt-[19px] 3xl:ml-[420px] 3xl:mt-[22px] flex items-center justify-center lg:ml-[249px] lg:mt-[13px] text-center w-[18%] xl:ml-[311px] xl:mt-[16px]"
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
                  <Line className="self-center w-[100%] h-[1px] bg-black_900_20" />
                  <Column className="listline158">
                    <Column className="justify-start w-[100%]">
                      <Row className="font-prompt items-start justify-between w-[100%]">
                        <Text className="rownameoftheve_one" variant="body5">
                          V-Tube Videos
                        </Text>
                        <Row className="font-poppins items-center rounded-radius4 w-[24%]">
                          <Button
                            className="capitalize font-semibold xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[40%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="OutlineBlack9000f"
                          >
                            Showing
                          </Button>
                          <Text className="showingresults1" variant="body12">
                            2 Out Of 57 Results
                          </Text>
                        </Row>
                      </Row>
                      <Row className="font-poppins items-center justify-between 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                        <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[49%]">
                          <Column
                            className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_image_10.png')",
                            }}
                          >
                            <Column className="bg-gradient9  items-end justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                              <Button
                                className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[19%]"
                                shape="CircleBorder12"
                                size="sm"
                                variant="GradientDeeporangeA400Pink900"
                              >
                                Watch
                              </Button>
                              <Button
                                className="flex lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center 3xl:mt-[109px] lg:mt-[65px] xl:mt-[81px] 2xl:mt-[91px] rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                                size="xlIcn"
                                variant="icbOutlineWhiteA7001_2"
                              >
                                <Img
                                  src="images/img_arrowright_70X70.svg"
                                  className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                  alt="arrowright One"
                                />
                              </Button>
                              <Row className="items-center justify-end mb-[2px] ml-[auto] lg:mt-[52px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] w-[24%]">
                                <Img
                                  src="images/img_vendorgold.png"
                                  className="VendorPlatinum"
                                  alt="VendorGold Five"
                                />
                                <Img
                                  src="images/img_ambassadorsilv.png"
                                  className="AmbassadorGold"
                                  alt="AmbassadorSilv Six"
                                />
                              </Row>
                            </Column>
                          </Column>
                          <Column className="justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[93%]">
                            <Text className="columnnameofthevi" variant="body7">
                              {"<Name Of The Video>"}
                            </Text>
                            <Row className="items-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] pb-[1px] w-[81%]">
                              <Row className="items-center justify-evenly mb-[2px] w-[31%]">
                                <Img
                                  src="images/img_calendar_16X16.svg"
                                  className="clock"
                                  alt="calendar Seven"
                                />
                                <Text className="date" variant="body12">
                                  15-Oct-2022
                                </Text>
                              </Row>
                              <Row className="items-center justify-center mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                                <Img
                                  src="images/img_thumbsup.svg"
                                  className="clock"
                                  alt="thumbsup Seven"
                                />
                                <Text className="likes" variant="body12">
                                  0
                                </Text>
                              </Row>
                              <Row className="items-start justify-center mb-[2px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                                <Img
                                  src="images/img_star.svg"
                                  className="clock"
                                  alt="star Seven"
                                />
                                <Text className="ratings" variant="body12">
                                  5(20)
                                </Text>
                              </Row>
                              <Row className="items-center justify-center mb-[2px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                                <Img
                                  src="images/img_share.svg"
                                  className="clock"
                                  alt="share Seven"
                                />
                                <Text className="shares" variant="body12">
                                  320
                                </Text>
                              </Row>
                              <Row className="items-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[2px] w-[14%]">
                                <Img
                                  src="images/img_instagram.svg"
                                  className="clock"
                                  alt="instagram One"
                                />
                                <Text className="rowinstagram" variant="body12">
                                  1.2K
                                </Text>
                              </Row>
                            </Row>
                            <Row className="items-center lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                            <Line className="bg-black_900_0c h-[1px] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[97%]" />
                            <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                              <Column className="items-center w-[46%]">
                                <Row className="items-start justify-between w-[100%]">
                                  <Stack className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]">
                                    <div className="absolute bg-gray_50 lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] outline outline-[1px] outline-black_900_20 rounded-radius50 top-[2%] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"></div>
                                    <Img
                                      src="images/img_rectangle65.png"
                                      className="absolute bottom-[2%] lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 w-[100%]"
                                      alt="RectangleSixtyFive Seven"
                                    />
                                  </Stack>
                                  <Column className="justify-start mt-[3px] w-[68%]">
                                    <Text
                                      className="font-semibold text-black_900 w-[auto]"
                                      variant="body10"
                                    >
                                      John Kennedy
                                    </Text>
                                    <Text
                                      className="TitleatCompa_Two"
                                      variant="body12"
                                    >
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
                        <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[49%]">
                          <Column
                            className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_image_10.png')",
                            }}
                          >
                            <Column className="bg-gradient9  justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                              <Button
                                className="capitalize font-semibold lg:ml-[199px] xl:ml-[249px] 2xl:ml-[280px] 3xl:ml-[336px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[23%]"
                                shape="CircleBorder12"
                                size="sm"
                                variant="GradientBlue700Indigo900"
                              >
                                Watched
                              </Button>
                              <Button
                                className="flex lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center lg:ml-[111px] xl:ml-[139px] 2xl:ml-[157px] 3xl:ml-[188px] 3xl:mt-[109px] lg:mt-[65px] xl:mt-[81px] 2xl:mt-[91px] rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                                size="xlIcn"
                                variant="icbOutlineWhiteA7001_2"
                              >
                                <Img
                                  src="images/img_arrowright_70X70.svg"
                                  className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                  alt="arrowright One"
                                />
                              </Button>
                              <Row className="items-center justify-end mb-[2px] ml-[auto] lg:mt-[52px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] w-[24%]">
                                <Img
                                  src="images/img_vendorgold.png"
                                  className="VendorPlatinum"
                                  alt="VendorGold One Two"
                                />
                                <Img
                                  src="images/img_ambassadorsilv.png"
                                  className="AmbassadorGold"
                                  alt="AmbassadorSilv One Two"
                                />
                              </Row>
                            </Column>
                          </Column>
                          <Column className="justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[93%]">
                            <Text className="columnnameofthevi" variant="body7">
                              {"<Name Of The Video>"}
                            </Text>
                            <Row className="items-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] pb-[1px] w-[81%]">
                              <Row className="items-center justify-evenly mb-[2px] w-[31%]">
                                <Img
                                  src="images/img_calendar_16X16.svg"
                                  className="clock"
                                  alt="calendar One Two"
                                />
                                <Text className="date" variant="body12">
                                  15-Oct-2022
                                </Text>
                              </Row>
                              <Row className="items-center justify-center mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                                <Img
                                  src="images/img_thumbsup.svg"
                                  className="clock"
                                  alt="thumbsup One Two"
                                />
                                <Text className="likes" variant="body12">
                                  0
                                </Text>
                              </Row>
                              <Row className="items-start justify-center mb-[2px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                                <Img
                                  src="images/img_star.svg"
                                  className="clock"
                                  alt="star One Two"
                                />
                                <Text className="ratings" variant="body12">
                                  5(20)
                                </Text>
                              </Row>
                              <Row className="items-center justify-center mb-[2px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                                <Img
                                  src="images/img_share.svg"
                                  className="clock"
                                  alt="share One Two"
                                />
                                <Text className="shares" variant="body12">
                                  320
                                </Text>
                              </Row>
                              <Row className="items-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[2px] w-[14%]">
                                <Img
                                  src="images/img_instagram.svg"
                                  className="clock"
                                  alt="instagram One"
                                />
                                <Text className="rowinstagram" variant="body12">
                                  1.2K
                                </Text>
                              </Row>
                            </Row>
                            <Row className="items-center lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                                  alt="overflowmenu One Two"
                                />
                              </Button>
                            </Row>
                            <Line className="bg-black_900_0c h-[1px] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[97%]" />
                            <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                              <Column className="items-center w-[46%]">
                                <Row className="items-start justify-between w-[100%]">
                                  <Stack className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]">
                                    <div className="absolute bg-gray_50 lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] outline outline-[1px] outline-black_900_20 rounded-radius50 top-[2%] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"></div>
                                    <Img
                                      src="images/img_rectangle65.png"
                                      className="absolute bottom-[2%] lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 w-[100%]"
                                      alt="RectangleSixtyFive One Two"
                                    />
                                  </Stack>
                                  <Column className="justify-start mt-[3px] w-[68%]">
                                    <Text
                                      className="font-semibold text-black_900 w-[auto]"
                                      variant="body10"
                                    >
                                      John Kennedy
                                    </Text>
                                    <Text
                                      className="TitleatCompa_Two"
                                      variant="body12"
                                    >
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
                                  alt="arrowdown One Two"
                                />
                              </Button>
                            </Row>
                          </Column>
                        </Column>
                      </Row>
                      <Button
                        className="2xl:ml-[348px] 2xl:mt-[19px] 3xl:ml-[418px] 3xl:mt-[22px] flex items-center justify-center lg:ml-[247px] lg:mt-[13px] text-center w-[18%] xl:ml-[310px] xl:mt-[16px]"
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
                </List>
              </Column>
              <Column className="font-poppins items-center justify-start w-[29%]">
                <Column className="bg-white_A700 border border-black_900_20 border-solid justify-start xl:p-[11px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius15 w-[100%]">
                  <Text className="ad" variant="body13">
                    Sponsored Ads
                  </Text>
                  <Column
                    className="bg-cover bg-repeat items-center justify-start mb-[1px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] mx-[auto] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius15 w-[99%]"
                    style={{
                      backgroundImage: "url('images/img_group69704.png')",
                    }}
                  >
                    <Img
                      src="images/img_call.svg"
                      className="call_Three"
                      alt="call One"
                    />
                    <Row className="items-start justify-center 3xl:mb-[106px] lg:mb-[62px] xl:mb-[78px] 2xl:mb-[88px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[73px] 3xl:mt-[88px] w-[24%]">
                      <Text className="rowvideo" variant="body9">
                        Video
                      </Text>
                      <Img
                        src="images/img_call.svg"
                        className="call_Four"
                        alt="call Two"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="font-prompt items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                  <Column className="bg-white_A700 border border-black_900_20 border-solid items-center justify-end 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] rounded-radius15 w-[100%]">
                    <Column className="justify-start xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[91%]">
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
                    <Stack className="font-poppins lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] w-[100%]">
                      <Row className="absolute bg-white_A700 inset-x-[30%] items-center justify-center xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius6 w-[40%]">
                        <Text className="showmore" variant="body9">
                          Show More
                        </Text>
                        <Img
                          src="images/img_arrowdown_16X12.svg"
                          className="arrowdown5"
                          alt="arrowdown Seven"
                        />
                      </Row>
                      <Line className="absolute bg-black_900_0c h-[1px] top-[2%] w-[100%]" />
                    </Stack>
                  </Column>
                  <Column className="bg-white_A700 border border-black_900_20 border-solid font-poppins justify-end lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:pt-[11px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] xl:px-[11px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[100%]">
                    <Text className="ad300X600" variant="body13">
                      Sponsored Ads
                    </Text>
                    <Stack className="2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] mx-[auto] w-[86%]">
                      <Img
                        src="images/img_rectangle91.png"
                        className="RectangleNinetyOne"
                        alt="RectangleNinetyOne"
                      />
                    </Stack>
                  </Column>
                  <Column className="bg-white_A700 border border-black_900_20 border-solid font-poppins items-end justify-end lg:mt-[468px] xl:mt-[586px] 2xl:mt-[659px] 3xl:mt-[791px] xl:pt-[11px] 2xl:pt-[13px] 3xl:pt-[16px] lg:pt-[9px] xl:px-[11px] 2xl:px-[13px] 3xl:px-[16px] lg:px-[9px] w-[100%]">
                    <Text className="ad10" variant="body13">
                      Sponsored Ads
                    </Text>
                    <Stack className="2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] mr-[4px] lg:mt-[492px] xl:mt-[615px] 2xl:mt-[692px] 3xl:mt-[831px] w-[97%]">
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
            </Row>
          </Column>
        </Column>
        <Column className="items-end lg:mt-[54px] xl:mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] 2xl:pl-[104px] 3xl:pl-[125px] lg:pl-[74px] xl:pl-[93px] w-[100%]">
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
                style={{ backgroundImage: "url('images/img_adv_38.png')" }}
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

export default IMARNFrontendWebsiteAIOProfileAssetsVAuthorPage;
