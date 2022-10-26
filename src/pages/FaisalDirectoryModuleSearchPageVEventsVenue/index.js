import React from "react";

import {
  Column,
  Text,
  SelectBox,
  Img,
  Row,
  Switch,
  Stack,
  SeekBar,
  Button,
  Line,
  Grid,
  List,
} from "components";
import Header1 from "components/Header/Header1";
import Footer from "components/Footer/Footer";

const FaisalDirectoryModuleSearchPageVEventsVenuePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-prompt items-center justify-start mx-[auto] pt-[2px] w-[100%]">
        <Header1 className="w-[100%]" />
        <Column className="font-poppins justify-start lg:mt-[57px] xl:mt-[72px] 2xl:mt-[81px] 3xl:mt-[97px] overflow-auto w-[100%]">
          <Column className="justify-start 2xl:ml-[104px] 3xl:ml-[125px] lg:ml-[74px] xl:ml-[93px] w-[85%]">
            <Text className="Iamlookingfo" variant="body2">
              I'm Looking For
            </Text>
            <SelectBox
              className="font-normal font-poppins lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
              placeholderClassName="text-gray_501"
              name="searchbox"
              placeholder="a Venue in V-Events"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_arrowdown.svg"
                  className="lg:w-[10px] lg:h-[11px] lg:mr-[10px] xl:w-[13px] xl:h-[14px] xl:mr-[12px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[14px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[17px]"
                  alt="arrow_down"
                />
              }
              shape="RoundedBorder6"
              size="lg"
              variant="OutlineBlack90020"
            ></SelectBox>
          </Column>
          <Column className="font-prompt justify-start 2xl:ml-[104px] 3xl:ml-[125px] lg:ml-[74px] xl:ml-[93px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[25px] w-[85%]">
            <Text
              className="capitalize text-black_900 w-[auto]"
              variant="body2"
            >
              With These Search Criteria
            </Text>
            <Column className="bg-white_A700 border border-black_900_20 border-solid font-poppins items-center justify-end xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[20px] xl:p-[25px] 2xl:p-[28px] 3xl:p-[34px] rounded-radius15 w-[100%]">
              <Column className="items-center justify-start mt-[3px] w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Column className="w-[24%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Venue Type
                    </Text>
                    <SelectBox
                      className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaPostC"
                      placeholder="Choose a Venue Type"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="lg:w-[10px] lg:h-[11px] lg:mr-[8px] xl:w-[13px] xl:h-[14px] xl:mr-[11px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[12px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[14px]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder6"
                      variant="OutlineBlack90020"
                    ></SelectBox>
                  </Column>
                  <Column className="items-center pt-[1px] w-[75%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Column className="w-[66%]">
                        <Row className="items-start w-[64%]">
                          <Text className="VInstructorCo" variant="body10">
                            Venue Country
                          </Text>
                          <Text
                            className="font-bold lg:ml-[137px] xl:ml-[171px] 2xl:ml-[193px] 3xl:ml-[232px] text-black_900 w-[auto]"
                            variant="body10"
                          >
                            Venue City
                          </Text>
                        </Row>
                        <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[100%]">
                          <SelectBox
                            className="font-normal not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[49%]"
                            placeholderClassName="text-gray_501"
                            name="ChooseaCountr"
                            placeholder="Choose a Venue Country"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown.svg"
                                className="lg:w-[10px] lg:h-[11px] lg:mr-[8px] xl:w-[13px] xl:h-[14px] xl:mr-[11px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[12px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[14px]"
                                alt="arrow_down"
                              />
                            }
                            shape="RoundedBorder6"
                            variant="OutlineBlack900201_2"
                          ></SelectBox>
                          <SelectBox
                            className="font-normal not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[49%]"
                            placeholderClassName="text-gray_501"
                            name="ChooseaCity"
                            placeholder="Choose a Venue City"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown.svg"
                                className="lg:w-[10px] lg:h-[11px] lg:mr-[8px] xl:w-[13px] xl:h-[14px] xl:mr-[11px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[12px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[14px]"
                                alt="arrow_down"
                              />
                            }
                            shape="RoundedBorder6"
                            variant="OutlineBlack900201_2"
                          ></SelectBox>
                        </Row>
                      </Column>
                      <Column className="items-center pb-[3px] w-[32%]">
                        <Column className="justify-start w-[100%]">
                          <Text
                            className="font-bold text-black_900 w-[auto]"
                            variant="body10"
                          >
                            Show Available Results in a Radius Of
                          </Text>
                          <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                            <Switch value={true} className="w-[11%]" />
                            <Stack className="lg:h-[26px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] w-[83%]">
                              <Column className="absolute inset-x-[0] justify-start top-[0] w-[100%]">
                                <Text
                                  className="columndistance"
                                  variant="body12"
                                >
                                  5km
                                </Text>
                                <SeekBar
                                  inputValue={[11.89]}
                                  trackColors={["#016dea", "#e8e8e8"]}
                                  thumbClassName="bg-blue_700 shadow-bs9 flex lg:w-[10px] lg:h-[11px] xl:w-[13px] xl:h-[14px] 2xl:w-[15px] 2xl:h-[16px] 3xl:w-[18px] 3xl:h-[19px] justify-center items-center rounded-radius50 outline-none"
                                  className="flex lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[1px] rounded-radius2 w-[100%]"
                                  trackClassName="flex lg:h-[3px] xl:h-[4px] 2xl:h-[4px] 3xl:h-[5px] rounded-radius2 w-[100%]"
                                />{" "}
                              </Column>
                              <Row className="absolute bottom-[0] items-center justify-between w-[100%]">
                                <Text className="One" variant="body13">
                                  1
                                </Text>
                                <Text className="OneHundred" variant="body13">
                                  100
                                </Text>
                              </Row>
                            </Stack>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[25px] w-[100%]">
                  <Column className="w-[24%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Venue Likes
                    </Text>
                    <SelectBox
                      className="font-normal xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaNoof"
                      placeholder="Choose a Venue Likes Range"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="lg:w-[10px] lg:h-[11px] lg:mr-[8px] xl:w-[13px] xl:h-[14px] xl:mr-[11px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[12px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[14px]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder6"
                      variant="OutlineBlack90020"
                    ></SelectBox>
                  </Column>
                  <Column className="mt-[1px] w-[24%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Venue Shares
                    </Text>
                    <SelectBox
                      className="font-normal xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaNoof One"
                      placeholder="Choose a Venue Shares Range"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="lg:w-[10px] lg:h-[11px] lg:mr-[8px] xl:w-[13px] xl:h-[14px] xl:mr-[11px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[12px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[14px]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder6"
                      variant="OutlineBlack90020"
                    ></SelectBox>
                  </Column>
                  <Column className="w-[24%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Venue Ratings
                    </Text>
                    <SelectBox
                      className="font-normal 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaPostR"
                      placeholder="Choose a Venue Rating"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="lg:w-[10px] lg:h-[11px] lg:mr-[8px] xl:w-[13px] xl:h-[14px] xl:mr-[11px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[12px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[14px]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder6"
                      variant="OutlineBlack90020"
                    ></SelectBox>
                  </Column>
                  <Column className="w-[24%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Venue Tags
                    </Text>
                    <SelectBox
                      className="font-normal 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaPostT"
                      placeholder="Choose Venue Tags"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="lg:w-[10px] lg:h-[11px] lg:mr-[8px] xl:w-[13px] xl:h-[14px] xl:mr-[11px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[12px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[14px]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder6"
                      variant="OutlineBlack90020"
                    ></SelectBox>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Column>
          <Button
            className="capitalize font-medium 2xl:ml-[104px] 3xl:ml-[125px] lg:ml-[74px] xl:ml-[93px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[20%]"
            shape="RoundedBorder6"
            size="lg"
            variant="OutlineWhiteA700"
          >
            Search
          </Button>
          <Line className="bg-black_900_20 h-[1px] 2xl:ml-[104px] 3xl:ml-[125px] lg:ml-[74px] xl:ml-[93px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[85%]" />
          <Row className="font-poppins items-center 2xl:ml-[104px] 3xl:ml-[125px] lg:ml-[74px] xl:ml-[93px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] w-[85%]">
            <SelectBox
              className="font-normal not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[23%]"
              placeholderClassName="text-gray_501"
              name="ChooseaGroup"
              placeholder="Choose a Sorting Option"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_arrowdown.svg"
                  className="lg:w-[10px] lg:h-[11px] lg:mr-[8px] xl:w-[13px] xl:h-[14px] xl:mr-[11px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[12px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[14px]"
                  alt="arrow_down"
                />
              }
              shape="RoundedBorder6"
              variant="OutlineBlack90020"
            ></SelectBox>
            <Row className="items-end justify-between lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] w-[76%]">
              <Img
                src="images/img_arrowleft.svg"
                className="arrowleft"
                alt="arrowleft"
              />
              <Row className="items-start mb-[2px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] rounded-radius4 w-[20%]">
                <Button
                  className="capitalize font-semibold xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[43%]"
                  shape="RoundedBorder4"
                  size="sm"
                  variant="OutlineBlack9000f"
                >
                  Showing
                </Button>
                <Text className="showing12of1" variant="body12">
                  12 Of 120 Results
                </Text>
              </Row>
            </Row>
          </Row>
          <Column className="font-prompt items-center justify-start 2xl:ml-[102px] 3xl:ml-[123px] lg:ml-[73px] xl:ml-[91px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[85%]">
            <Grid className="lg:gap-[20px] xl:gap-[25px] 2xl:gap-[28px] 3xl:gap-[34px] grid grid-cols-3 w-[100%]">
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_16.png')" }}
                >
                  <Column className="bg-gradient9  justify-end lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne_Two"
                      alt="GroupFifty"
                    />
                    <Row className="items-center justify-end lg:ml-[206px] xl:ml-[258px] 2xl:ml-[290px] 3xl:ml-[348px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                      <Img
                        src="images/img_vendorplatinum.png"
                        className="VendorSilver"
                        alt="VendorPlatinum"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorSilv"
                        alt="AmbassadorGold"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="rownameoftheve" variant="body7">
                          {"<Name of The Venue>"}
                        </Text>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                          shape="icbCircleBorder15"
                          size="mdIcn"
                          variant="icbOutlineBlue700"
                        >
                          <Img
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu"
                          />
                        </Button>
                      </Row>
                      <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[71%]">
                        <Row className="items-center justify-evenly w-[35%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="clock"
                            alt="calendar"
                          />
                          <Text className="date" variant="body12">
                            15-Oct-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                          <Img
                            src="images/img_thumbsup.svg"
                            className="clock"
                            alt="thumbsup"
                          />
                          <Text className="likes" variant="body12">
                            0
                          </Text>
                        </Row>
                        <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                          <Img
                            src="images/img_star.svg"
                            className="clock"
                            alt="star"
                          />
                          <Text className="ratings" variant="body12">
                            5(20)
                          </Text>
                        </Row>
                        <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
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
                      <Row className="font-poppins items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                      <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                        <Row className="items-center justify-evenly w-[12%]">
                          <Img
                            src="images/img_globe.svg"
                            className="clock"
                            alt="globe"
                          />
                          <Text className="rowuser" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[15%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location"
                          />
                          <Text className="rowbag" variant="body12">
                            Dubai
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-semibold lg:ml-[122px] xl:ml-[153px] 2xl:ml-[172px] 3xl:ml-[206px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[22%]"
                          shape="CircleBorder12"
                          size="sm"
                          variant="GradientBlue700Indigo900"
                        >
                          claimed
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    </Column>
                  </Column>
                  <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                    <Column className="items-center w-[48%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Button
                          className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                          size="lgIcn"
                          variant="icbOutlineBlack900201_2"
                        >
                          <Img
                            src="images/img_grid.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="grid"
                          />
                        </Button>
                        <Column className="w-[70%]">
                          <Text
                            className="font-semibold text-black_900 w-[auto]"
                            variant="body10"
                          >
                            {"<Business Name>"}
                          </Text>
                          <Text className="TitleatCompa" variant="body12">
                            Tagline goes here
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
              <Column className="bg-white_A700 border border-gray_201 border-solid items-center justify-start lg:pb-[14px] xl:pb-[18px] 2xl:pb-[20px] 3xl:pb-[25px] rounded-radius10 shadow-bs6 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_16.png')" }}
                >
                  <Column className="bg-gradient9  justify-end lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne_Two"
                      alt="GroupFifty One"
                    />
                    <Row className="items-center justify-end lg:ml-[206px] xl:ml-[258px] 2xl:ml-[290px] 3xl:ml-[348px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                      <Img
                        src="images/img_vendorplatinum.png"
                        className="VendorSilver"
                        alt="VendorPlatinum One"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorSilv"
                        alt="AmbassadorGold One"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="rownameoftheve_one" variant="body7">
                          {"<Name of The Venue>"}
                        </Text>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                          shape="icbCircleBorder15"
                          size="mdIcn"
                          variant="icbOutlineBlue700"
                        >
                          <Img
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu One"
                          />
                        </Button>
                      </Row>
                      <Row className="font-poppins items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[71%]">
                        <Row className="items-center justify-evenly w-[35%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="clock"
                            alt="calendar One"
                          />
                          <Text className="date" variant="body12">
                            15-Oct-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                          <Img
                            src="images/img_thumbsup.svg"
                            className="clock"
                            alt="thumbsup One"
                          />
                          <Text className="likes" variant="body12">
                            0
                          </Text>
                        </Row>
                        <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                          <Img
                            src="images/img_star.svg"
                            className="clock"
                            alt="star One"
                          />
                          <Text className="ratings" variant="body12">
                            5(20)
                          </Text>
                        </Row>
                        <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
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
                      <Row className="font-poppins items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                      <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                        <Row className="items-center justify-evenly w-[12%]">
                          <Img
                            src="images/img_globe.svg"
                            className="clock"
                            alt="globe One"
                          />
                          <Text className="rowuser" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[15%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location One"
                          />
                          <Text className="rowbag" variant="body12">
                            Dubai
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-semibold lg:ml-[122px] xl:ml-[153px] 2xl:ml-[172px] 3xl:ml-[206px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[22%]"
                          shape="CircleBorder12"
                          size="sm"
                          variant="GradientBlue700Indigo900"
                        >
                          claimed
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    </Column>
                  </Column>
                  <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                    <Column className="items-center w-[48%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Button
                          className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                          size="lgIcn"
                          variant="icbOutlineBlack900201_2"
                        >
                          <Img
                            src="images/img_grid.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="grid One"
                          />
                        </Button>
                        <Column className="w-[70%]">
                          <Text
                            className="font-semibold text-black_900 w-[auto]"
                            variant="body10"
                          >
                            {"<Business Name>"}
                          </Text>
                          <Text className="TitleatCompa" variant="body12">
                            Tagline goes here
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
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_16.png')" }}
                >
                  <Column className="bg-gradient9  justify-end lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne_Two"
                      alt="GroupFifty Two"
                    />
                    <Row className="items-center justify-end lg:ml-[206px] xl:ml-[258px] 2xl:ml-[290px] 3xl:ml-[348px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                      <Img
                        src="images/img_vendorplatinum.png"
                        className="VendorSilver"
                        alt="VendorPlatinum Two"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorSilv"
                        alt="AmbassadorGold Two"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="rownameoftheve" variant="body7">
                          {"<Name of The Venue>"}
                        </Text>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                          shape="icbCircleBorder15"
                          size="mdIcn"
                          variant="icbOutlineBlue700"
                        >
                          <Img
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu Two"
                          />
                        </Button>
                      </Row>
                      <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[71%]">
                        <Row className="items-center justify-evenly w-[35%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="clock"
                            alt="calendar Two"
                          />
                          <Text className="date" variant="body12">
                            15-Oct-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                          <Img
                            src="images/img_thumbsup.svg"
                            className="clock"
                            alt="thumbsup Two"
                          />
                          <Text className="likes" variant="body12">
                            0
                          </Text>
                        </Row>
                        <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                          <Img
                            src="images/img_star.svg"
                            className="clock"
                            alt="star Two"
                          />
                          <Text className="ratings" variant="body12">
                            5(20)
                          </Text>
                        </Row>
                        <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
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
                      <Row className="font-poppins items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                      <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                        <Row className="items-center justify-evenly w-[12%]">
                          <Img
                            src="images/img_globe.svg"
                            className="clock"
                            alt="globe Two"
                          />
                          <Text className="rowuser" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[15%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location Two"
                          />
                          <Text className="rowbag" variant="body12">
                            Dubai
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-semibold lg:ml-[132px] xl:ml-[166px] 2xl:ml-[186px] 3xl:ml-[224px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                          shape="CircleBorder12"
                          size="sm"
                          variant="GradientDeeporangeA400Pink900"
                        >
                          Claim
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    </Column>
                  </Column>
                  <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                    <Column className="items-center w-[48%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Button
                          className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                          size="lgIcn"
                          variant="icbOutlineBlack900201_2"
                        >
                          <Img
                            src="images/img_grid.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="grid Two"
                          />
                        </Button>
                        <Column className="w-[70%]">
                          <Text
                            className="font-semibold text-black_900 w-[auto]"
                            variant="body10"
                          >
                            {"<Business Name>"}
                          </Text>
                          <Text className="TitleatCompa" variant="body12">
                            Tagline goes here
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
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_16.png')" }}
                >
                  <Column className="bg-gradient9  justify-end lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne_Two"
                      alt="GroupFifty Three"
                    />
                    <Row className="items-center justify-end lg:ml-[206px] xl:ml-[258px] 2xl:ml-[290px] 3xl:ml-[348px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                      <Img
                        src="images/img_vendorplatinum.png"
                        className="VendorSilver"
                        alt="VendorPlatinum Three"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorSilv"
                        alt="AmbassadorGold Three"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="rownameoftheve" variant="body7">
                          {"<Name of The Venue>"}
                        </Text>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                          shape="icbCircleBorder15"
                          size="mdIcn"
                          variant="icbOutlineBlue700"
                        >
                          <Img
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu Three"
                          />
                        </Button>
                      </Row>
                      <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[71%]">
                        <Row className="items-center justify-evenly w-[35%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="clock"
                            alt="calendar Three"
                          />
                          <Text className="date" variant="body12">
                            15-Oct-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                          <Img
                            src="images/img_thumbsup.svg"
                            className="clock"
                            alt="thumbsup Three"
                          />
                          <Text className="likes" variant="body12">
                            0
                          </Text>
                        </Row>
                        <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                          <Img
                            src="images/img_star.svg"
                            className="clock"
                            alt="star Three"
                          />
                          <Text className="ratings" variant="body12">
                            5(20)
                          </Text>
                        </Row>
                        <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
                          <Img
                            src="images/img_share.svg"
                            className="clock"
                            alt="share Three"
                          />
                          <Text className="shares1" variant="body12">
                            320
                          </Text>
                        </Row>
                      </Row>
                      <Row className="font-poppins items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                            alt="overflowmenu One Three"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                      <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                        <Row className="items-center justify-evenly w-[12%]">
                          <Img
                            src="images/img_globe.svg"
                            className="clock"
                            alt="globe Three"
                          />
                          <Text className="rowuser" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[15%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location Three"
                          />
                          <Text className="rowbag" variant="body12">
                            Dubai
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-semibold lg:ml-[122px] xl:ml-[153px] 2xl:ml-[172px] 3xl:ml-[206px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[22%]"
                          shape="CircleBorder12"
                          size="sm"
                          variant="GradientBlue700Indigo900"
                        >
                          claimed
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    </Column>
                  </Column>
                  <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                    <Column className="items-center w-[48%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Button
                          className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                          size="lgIcn"
                          variant="icbOutlineBlack900201_2"
                        >
                          <Img
                            src="images/img_grid.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="grid Three"
                          />
                        </Button>
                        <Column className="w-[70%]">
                          <Text
                            className="font-semibold text-black_900 w-[auto]"
                            variant="body10"
                          >
                            {"<Business Name>"}
                          </Text>
                          <Text className="TitleatCompa" variant="body12">
                            Tagline goes here
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
              <Column className="bg-white_A700 border border-gray_201 border-solid items-center justify-start lg:pb-[14px] xl:pb-[18px] 2xl:pb-[20px] 3xl:pb-[25px] rounded-radius10 shadow-bs6 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_16.png')" }}
                >
                  <Column className="bg-gradient9  justify-end lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne_Two"
                      alt="GroupFifty Four"
                    />
                    <Row className="items-center justify-end lg:ml-[206px] xl:ml-[258px] 2xl:ml-[290px] 3xl:ml-[348px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                      <Img
                        src="images/img_vendorplatinum.png"
                        className="VendorSilver"
                        alt="VendorPlatinum Four"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorSilv"
                        alt="AmbassadorGold Four"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="rownameoftheve_one" variant="body7">
                          {"<Name of The Venue>"}
                        </Text>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                          shape="icbCircleBorder15"
                          size="mdIcn"
                          variant="icbOutlineBlue700"
                        >
                          <Img
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu Four"
                          />
                        </Button>
                      </Row>
                      <Row className="font-poppins items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[71%]">
                        <Row className="items-center justify-evenly w-[35%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="clock"
                            alt="calendar Four"
                          />
                          <Text className="date" variant="body12">
                            15-Oct-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                          <Img
                            src="images/img_thumbsup.svg"
                            className="clock"
                            alt="thumbsup Four"
                          />
                          <Text className="likes" variant="body12">
                            0
                          </Text>
                        </Row>
                        <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                          <Img
                            src="images/img_star.svg"
                            className="clock"
                            alt="star Four"
                          />
                          <Text className="ratings" variant="body12">
                            5(20)
                          </Text>
                        </Row>
                        <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
                          <Img
                            src="images/img_share.svg"
                            className="clock"
                            alt="share Four"
                          />
                          <Text className="shares1" variant="body12">
                            320
                          </Text>
                        </Row>
                      </Row>
                      <Row className="font-poppins items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                            alt="overflowmenu One Four"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                      <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                        <Row className="items-center justify-evenly w-[12%]">
                          <Img
                            src="images/img_globe.svg"
                            className="clock"
                            alt="globe Four"
                          />
                          <Text className="rowuser" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[15%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location Four"
                          />
                          <Text className="rowbag" variant="body12">
                            Dubai
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-semibold lg:ml-[122px] xl:ml-[153px] 2xl:ml-[172px] 3xl:ml-[206px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[22%]"
                          shape="CircleBorder12"
                          size="sm"
                          variant="GradientBlue700Indigo900"
                        >
                          claimed
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    </Column>
                  </Column>
                  <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                    <Column className="items-center w-[48%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Button
                          className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                          size="lgIcn"
                          variant="icbOutlineBlack900201_2"
                        >
                          <Img
                            src="images/img_grid.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="grid Four"
                          />
                        </Button>
                        <Column className="w-[70%]">
                          <Text
                            className="font-semibold text-black_900 w-[auto]"
                            variant="body10"
                          >
                            {"<Business Name>"}
                          </Text>
                          <Text className="TitleatCompa" variant="body12">
                            Tagline goes here
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
                  style={{ backgroundImage: "url('images/img_image_16.png')" }}
                >
                  <Column className="bg-gradient9  justify-end lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne_Two"
                      alt="GroupFifty Five"
                    />
                    <Row className="items-center justify-end lg:ml-[206px] xl:ml-[258px] 2xl:ml-[290px] 3xl:ml-[348px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                      <Img
                        src="images/img_vendorplatinum.png"
                        className="VendorSilver"
                        alt="VendorPlatinum Five"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorSilv"
                        alt="AmbassadorGold Five"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="rownameoftheve" variant="body7">
                          {"<Name of The Venue>"}
                        </Text>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                          shape="icbCircleBorder15"
                          size="mdIcn"
                          variant="icbOutlineBlue700"
                        >
                          <Img
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu Five"
                          />
                        </Button>
                      </Row>
                      <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[71%]">
                        <Row className="items-center justify-evenly w-[35%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="clock"
                            alt="calendar Five"
                          />
                          <Text className="date" variant="body12">
                            15-Oct-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                          <Img
                            src="images/img_thumbsup.svg"
                            className="clock"
                            alt="thumbsup Five"
                          />
                          <Text className="likes" variant="body12">
                            0
                          </Text>
                        </Row>
                        <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                          <Img
                            src="images/img_star.svg"
                            className="clock"
                            alt="star Five"
                          />
                          <Text className="ratings" variant="body12">
                            5(20)
                          </Text>
                        </Row>
                        <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
                          <Img
                            src="images/img_share.svg"
                            className="clock"
                            alt="share Five"
                          />
                          <Text className="shares1" variant="body12">
                            320
                          </Text>
                        </Row>
                      </Row>
                      <Row className="font-poppins items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                            alt="overflowmenu One Five"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                      <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                        <Row className="items-center justify-evenly w-[12%]">
                          <Img
                            src="images/img_globe.svg"
                            className="clock"
                            alt="globe Five"
                          />
                          <Text className="rowuser" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[15%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location Five"
                          />
                          <Text className="rowbag" variant="body12">
                            Dubai
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-semibold lg:ml-[132px] xl:ml-[166px] 2xl:ml-[186px] 3xl:ml-[224px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                          shape="CircleBorder12"
                          size="sm"
                          variant="GradientDeeporangeA400Pink900"
                        >
                          Claim
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    </Column>
                  </Column>
                  <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                    <Column className="items-center w-[48%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Button
                          className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                          size="lgIcn"
                          variant="icbOutlineBlack900201_2"
                        >
                          <Img
                            src="images/img_grid.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="grid Five"
                          />
                        </Button>
                        <Column className="w-[70%]">
                          <Text
                            className="font-semibold text-black_900 w-[auto]"
                            variant="body10"
                          >
                            {"<Business Name>"}
                          </Text>
                          <Text className="TitleatCompa" variant="body12">
                            Tagline goes here
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
                  style={{ backgroundImage: "url('images/img_image_16.png')" }}
                >
                  <Column className="bg-gradient9  justify-end lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne_Two"
                      alt="GroupFifty Six"
                    />
                    <Row className="items-center justify-end lg:ml-[206px] xl:ml-[258px] 2xl:ml-[290px] 3xl:ml-[348px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                      <Img
                        src="images/img_vendorplatinum.png"
                        className="VendorSilver"
                        alt="VendorPlatinum Six"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorSilv"
                        alt="AmbassadorGold Six"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="rownameoftheve" variant="body7">
                          {"<Name of The Venue>"}
                        </Text>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                          shape="icbCircleBorder15"
                          size="mdIcn"
                          variant="icbOutlineBlue700"
                        >
                          <Img
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu Six"
                          />
                        </Button>
                      </Row>
                      <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[71%]">
                        <Row className="items-center justify-evenly w-[35%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="clock"
                            alt="calendar Six"
                          />
                          <Text className="date" variant="body12">
                            15-Oct-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                          <Img
                            src="images/img_thumbsup.svg"
                            className="clock"
                            alt="thumbsup Six"
                          />
                          <Text className="likes" variant="body12">
                            0
                          </Text>
                        </Row>
                        <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                          <Img
                            src="images/img_star.svg"
                            className="clock"
                            alt="star Six"
                          />
                          <Text className="ratings" variant="body12">
                            5(20)
                          </Text>
                        </Row>
                        <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
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
                      <Row className="font-poppins items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                            alt="overflowmenu One Six"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                      <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                        <Row className="items-center justify-evenly w-[12%]">
                          <Img
                            src="images/img_globe.svg"
                            className="clock"
                            alt="globe Six"
                          />
                          <Text className="rowuser" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[15%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location Six"
                          />
                          <Text className="rowbag" variant="body12">
                            Dubai
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-semibold lg:ml-[122px] xl:ml-[153px] 2xl:ml-[172px] 3xl:ml-[206px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[22%]"
                          shape="CircleBorder12"
                          size="sm"
                          variant="GradientBlue700Indigo900"
                        >
                          claimed
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    </Column>
                  </Column>
                  <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                    <Column className="items-center w-[48%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Button
                          className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                          size="lgIcn"
                          variant="icbOutlineBlack900201_2"
                        >
                          <Img
                            src="images/img_grid.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="grid Six"
                          />
                        </Button>
                        <Column className="w-[70%]">
                          <Text
                            className="font-semibold text-black_900 w-[auto]"
                            variant="body10"
                          >
                            {"<Business Name>"}
                          </Text>
                          <Text className="TitleatCompa" variant="body12">
                            Tagline goes here
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
              <Column className="bg-white_A700 border border-gray_201 border-solid items-center justify-start lg:pb-[14px] xl:pb-[18px] 2xl:pb-[20px] 3xl:pb-[25px] rounded-radius10 shadow-bs6 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_16.png')" }}
                >
                  <Column className="bg-gradient9  justify-end lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne_Two"
                      alt="GroupFifty Seven"
                    />
                    <Row className="items-center justify-end lg:ml-[206px] xl:ml-[258px] 2xl:ml-[290px] 3xl:ml-[348px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                      <Img
                        src="images/img_vendorplatinum.png"
                        className="VendorSilver"
                        alt="VendorPlatinum Seven"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorSilv"
                        alt="AmbassadorGold Seven"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="rownameoftheve_one" variant="body7">
                          {"<Name of The Venue>"}
                        </Text>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                          shape="icbCircleBorder15"
                          size="mdIcn"
                          variant="icbOutlineBlue700"
                        >
                          <Img
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu Seven"
                          />
                        </Button>
                      </Row>
                      <Row className="font-poppins items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[71%]">
                        <Row className="items-center justify-evenly w-[35%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="clock"
                            alt="calendar Seven"
                          />
                          <Text className="date" variant="body12">
                            15-Oct-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                          <Img
                            src="images/img_thumbsup.svg"
                            className="clock"
                            alt="thumbsup Seven"
                          />
                          <Text className="likes" variant="body12">
                            0
                          </Text>
                        </Row>
                        <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                          <Img
                            src="images/img_star.svg"
                            className="clock"
                            alt="star Seven"
                          />
                          <Text className="ratings" variant="body12">
                            5(20)
                          </Text>
                        </Row>
                        <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
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
                      <Row className="font-poppins items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                            alt="overflowmenu One Seven"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                      <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                        <Row className="items-center justify-evenly w-[12%]">
                          <Img
                            src="images/img_globe.svg"
                            className="clock"
                            alt="globe Seven"
                          />
                          <Text className="rowuser" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[15%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location Seven"
                          />
                          <Text className="rowbag" variant="body12">
                            Dubai
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-semibold lg:ml-[122px] xl:ml-[153px] 2xl:ml-[172px] 3xl:ml-[206px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[22%]"
                          shape="CircleBorder12"
                          size="sm"
                          variant="GradientBlue700Indigo900"
                        >
                          claimed
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    </Column>
                  </Column>
                  <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                    <Column className="items-center w-[48%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Button
                          className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                          size="lgIcn"
                          variant="icbOutlineBlack900201_2"
                        >
                          <Img
                            src="images/img_grid.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="grid Seven"
                          />
                        </Button>
                        <Column className="w-[70%]">
                          <Text
                            className="font-semibold text-black_900 w-[auto]"
                            variant="body10"
                          >
                            {"<Business Name>"}
                          </Text>
                          <Text className="TitleatCompa" variant="body12">
                            Tagline goes here
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
                        alt="arrowdown Eight"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_16.png')" }}
                >
                  <Column className="bg-gradient9  justify-end lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne_Two"
                      alt="GroupFifty Eight"
                    />
                    <Row className="items-center justify-end lg:ml-[206px] xl:ml-[258px] 2xl:ml-[290px] 3xl:ml-[348px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                      <Img
                        src="images/img_vendorplatinum.png"
                        className="VendorSilver"
                        alt="VendorPlatinum Eight"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorSilv"
                        alt="AmbassadorGold Eight"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="rownameoftheve" variant="body7">
                          {"<Name of The Venue>"}
                        </Text>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                          shape="icbCircleBorder15"
                          size="mdIcn"
                          variant="icbOutlineBlue700"
                        >
                          <Img
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu Eight"
                          />
                        </Button>
                      </Row>
                      <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[71%]">
                        <Row className="items-center justify-evenly w-[35%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="clock"
                            alt="calendar Eight"
                          />
                          <Text className="date" variant="body12">
                            15-Oct-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                          <Img
                            src="images/img_thumbsup.svg"
                            className="clock"
                            alt="thumbsup Eight"
                          />
                          <Text className="likes" variant="body12">
                            0
                          </Text>
                        </Row>
                        <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                          <Img
                            src="images/img_star.svg"
                            className="clock"
                            alt="star Eight"
                          />
                          <Text className="ratings" variant="body12">
                            5(20)
                          </Text>
                        </Row>
                        <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
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
                      <Row className="font-poppins items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                            alt="overflowmenu One Eight"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                      <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                        <Row className="items-center justify-evenly w-[12%]">
                          <Img
                            src="images/img_globe.svg"
                            className="clock"
                            alt="globe Eight"
                          />
                          <Text className="rowuser" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[15%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location Eight"
                          />
                          <Text className="rowbag" variant="body12">
                            Dubai
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-semibold lg:ml-[132px] xl:ml-[166px] 2xl:ml-[186px] 3xl:ml-[224px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                          shape="CircleBorder12"
                          size="sm"
                          variant="GradientDeeporangeA400Pink900"
                        >
                          Claim
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    </Column>
                  </Column>
                  <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                    <Column className="items-center w-[48%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Button
                          className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                          size="lgIcn"
                          variant="icbOutlineBlack900201_2"
                        >
                          <Img
                            src="images/img_grid.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="grid Eight"
                          />
                        </Button>
                        <Column className="w-[70%]">
                          <Text
                            className="font-semibold text-black_900 w-[auto]"
                            variant="body10"
                          >
                            {"<Business Name>"}
                          </Text>
                          <Text className="TitleatCompa" variant="body12">
                            Tagline goes here
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
                        alt="arrowdown Nine"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_16.png')" }}
                >
                  <Column className="bg-gradient9  justify-end lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne_Two"
                      alt="GroupFifty Nine"
                    />
                    <Row className="items-center justify-end lg:ml-[206px] xl:ml-[258px] 2xl:ml-[290px] 3xl:ml-[348px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                      <Img
                        src="images/img_vendorplatinum.png"
                        className="VendorSilver"
                        alt="VendorPlatinum Nine"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorSilv"
                        alt="AmbassadorGold Nine"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="rownameoftheve" variant="body7">
                          {"<Name of The Venue>"}
                        </Text>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                          shape="icbCircleBorder15"
                          size="mdIcn"
                          variant="icbOutlineBlue700"
                        >
                          <Img
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu Nine"
                          />
                        </Button>
                      </Row>
                      <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[71%]">
                        <Row className="items-center justify-evenly w-[35%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="clock"
                            alt="calendar Nine"
                          />
                          <Text className="date" variant="body12">
                            15-Oct-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                          <Img
                            src="images/img_thumbsup.svg"
                            className="clock"
                            alt="thumbsup Nine"
                          />
                          <Text className="likes" variant="body12">
                            0
                          </Text>
                        </Row>
                        <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                          <Img
                            src="images/img_star.svg"
                            className="clock"
                            alt="star Nine"
                          />
                          <Text className="ratings" variant="body12">
                            5(20)
                          </Text>
                        </Row>
                        <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
                          <Img
                            src="images/img_share.svg"
                            className="clock"
                            alt="share Nine"
                          />
                          <Text className="shares1" variant="body12">
                            320
                          </Text>
                        </Row>
                      </Row>
                      <Row className="font-poppins items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                            alt="overflowmenu One Nine"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                      <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                        <Row className="items-center justify-evenly w-[12%]">
                          <Img
                            src="images/img_globe.svg"
                            className="clock"
                            alt="globe Nine"
                          />
                          <Text className="rowuser" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[15%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location Nine"
                          />
                          <Text className="rowbag" variant="body12">
                            Dubai
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-semibold lg:ml-[122px] xl:ml-[153px] 2xl:ml-[172px] 3xl:ml-[206px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[22%]"
                          shape="CircleBorder12"
                          size="sm"
                          variant="GradientBlue700Indigo900"
                        >
                          claimed
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    </Column>
                  </Column>
                  <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                    <Column className="items-center w-[48%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Button
                          className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                          size="lgIcn"
                          variant="icbOutlineBlack900201_2"
                        >
                          <Img
                            src="images/img_grid.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="grid Nine"
                          />
                        </Button>
                        <Column className="w-[70%]">
                          <Text
                            className="font-semibold text-black_900 w-[auto]"
                            variant="body10"
                          >
                            {"<Business Name>"}
                          </Text>
                          <Text className="TitleatCompa" variant="body12">
                            Tagline goes here
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
                        alt="arrowdown Ten"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-gray_201 border-solid items-center justify-start lg:pb-[14px] xl:pb-[18px] 2xl:pb-[20px] 3xl:pb-[25px] rounded-radius10 shadow-bs6 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_16.png')" }}
                >
                  <Column className="bg-gradient9  justify-end lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne_Two"
                      alt="GroupFifty Ten"
                    />
                    <Row className="items-center justify-end lg:ml-[206px] xl:ml-[258px] 2xl:ml-[290px] 3xl:ml-[348px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                      <Img
                        src="images/img_vendorplatinum.png"
                        className="VendorSilver"
                        alt="VendorPlatinum Ten"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorSilv"
                        alt="AmbassadorGold Ten"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="rownameoftheve_one" variant="body7">
                          {"<Name of The Venue>"}
                        </Text>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                          shape="icbCircleBorder15"
                          size="mdIcn"
                          variant="icbOutlineBlue700"
                        >
                          <Img
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu Ten"
                          />
                        </Button>
                      </Row>
                      <Row className="font-poppins items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[71%]">
                        <Row className="items-center justify-evenly w-[35%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="clock"
                            alt="calendar Ten"
                          />
                          <Text className="date" variant="body12">
                            15-Oct-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                          <Img
                            src="images/img_thumbsup.svg"
                            className="clock"
                            alt="thumbsup Ten"
                          />
                          <Text className="likes" variant="body12">
                            0
                          </Text>
                        </Row>
                        <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                          <Img
                            src="images/img_star.svg"
                            className="clock"
                            alt="star Ten"
                          />
                          <Text className="ratings" variant="body12">
                            5(20)
                          </Text>
                        </Row>
                        <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
                          <Img
                            src="images/img_share.svg"
                            className="clock"
                            alt="share Ten"
                          />
                          <Text className="shares1" variant="body12">
                            320
                          </Text>
                        </Row>
                      </Row>
                      <Row className="font-poppins items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                            alt="overflowmenu One Ten"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                      <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                        <Row className="items-center justify-evenly w-[12%]">
                          <Img
                            src="images/img_globe.svg"
                            className="clock"
                            alt="globe Ten"
                          />
                          <Text className="rowuser" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[15%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location Ten"
                          />
                          <Text className="rowbag" variant="body12">
                            Dubai
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-semibold lg:ml-[122px] xl:ml-[153px] 2xl:ml-[172px] 3xl:ml-[206px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[22%]"
                          shape="CircleBorder12"
                          size="sm"
                          variant="GradientBlue700Indigo900"
                        >
                          claimed
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    </Column>
                  </Column>
                  <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                    <Column className="items-center w-[48%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Button
                          className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                          size="lgIcn"
                          variant="icbOutlineBlack900201_2"
                        >
                          <Img
                            src="images/img_grid.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="grid Ten"
                          />
                        </Button>
                        <Column className="w-[70%]">
                          <Text
                            className="font-semibold text-black_900 w-[auto]"
                            variant="body10"
                          >
                            {"<Business Name>"}
                          </Text>
                          <Text className="TitleatCompa" variant="body12">
                            Tagline goes here
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
                        alt="arrowdown Eleven"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_16.png')" }}
                >
                  <Column className="bg-gradient9  justify-end lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne_Two"
                      alt="GroupFifty Eleven"
                    />
                    <Row className="items-center justify-end lg:ml-[206px] xl:ml-[258px] 2xl:ml-[290px] 3xl:ml-[348px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                      <Img
                        src="images/img_vendorplatinum.png"
                        className="VendorSilver"
                        alt="VendorPlatinum Eleven"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorSilv"
                        alt="AmbassadorGold Eleven"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="rownameoftheve" variant="body7">
                          {"<Name of The Venue>"}
                        </Text>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                          shape="icbCircleBorder15"
                          size="mdIcn"
                          variant="icbOutlineBlue700"
                        >
                          <Img
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu Eleven"
                          />
                        </Button>
                      </Row>
                      <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[71%]">
                        <Row className="items-center justify-evenly w-[35%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="clock"
                            alt="calendar Eleven"
                          />
                          <Text className="date" variant="body12">
                            15-Oct-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                          <Img
                            src="images/img_thumbsup.svg"
                            className="clock"
                            alt="thumbsup Eleven"
                          />
                          <Text className="likes" variant="body12">
                            0
                          </Text>
                        </Row>
                        <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                          <Img
                            src="images/img_star.svg"
                            className="clock"
                            alt="star Eleven"
                          />
                          <Text className="ratings" variant="body12">
                            5(20)
                          </Text>
                        </Row>
                        <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
                          <Img
                            src="images/img_share.svg"
                            className="clock"
                            alt="share Eleven"
                          />
                          <Text className="shares1" variant="body12">
                            320
                          </Text>
                        </Row>
                      </Row>
                      <Row className="font-poppins items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                            alt="overflowmenu One Eleven"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                      <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                        <Row className="items-center justify-evenly w-[12%]">
                          <Img
                            src="images/img_globe.svg"
                            className="clock"
                            alt="globe Eleven"
                          />
                          <Text className="rowuser" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[15%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location Eleven"
                          />
                          <Text className="rowbag" variant="body12">
                            Dubai
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-semibold lg:ml-[132px] xl:ml-[166px] 2xl:ml-[186px] 3xl:ml-[224px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                          shape="CircleBorder12"
                          size="sm"
                          variant="GradientDeeporangeA400Pink900"
                        >
                          Claim
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    </Column>
                  </Column>
                  <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                    <Column className="items-center w-[48%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Button
                          className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                          size="lgIcn"
                          variant="icbOutlineBlack900201_2"
                        >
                          <Img
                            src="images/img_grid.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px]"
                            alt="grid Eleven"
                          />
                        </Button>
                        <Column className="w-[70%]">
                          <Text
                            className="font-semibold text-black_900 w-[auto]"
                            variant="body10"
                          >
                            {"<Business Name>"}
                          </Text>
                          <Text className="TitleatCompa" variant="body12">
                            Tagline goes here
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
                        alt="arrowdown Twelve"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
            </Grid>
          </Column>
          <Line className="bg-black_900_0c h-[1px] 2xl:ml-[104px] 3xl:ml-[125px] lg:ml-[74px] xl:ml-[93px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[85%]" />
          <Button
            className="2xl:ml-[668px] 2xl:mt-[18px] 3xl:ml-[801px] 3xl:mt-[21px] flex items-center justify-center lg:ml-[474px] lg:mt-[12px] text-center w-[10%] xl:ml-[593px] xl:mt-[16px]"
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
              Load More
            </div>
          </Button>
          <Column className="font-poppins justify-start 2xl:ml-[104px] 3xl:ml-[125px] lg:ml-[74px] xl:ml-[93px] lg:mt-[33px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] w-[96%]">
            <Text className="carouseladvlt" variant="body13">
              Sponsored Ads
            </Text>
            <List
              className="lg:gap-[14px] xl:gap-[18px] 2xl:gap-[20px] 3xl:gap-[25px] grid grid-cols-5 min-h-[auto] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]"
              orientation="horizontal"
            >
              <Stack className="scrollingad">
                <Img src="images/img_call.svg" className="call" alt="call" />
              </Stack>
              <Stack
                className="bg-cover bg-repeat lg:h-[170px] xl:h-[212px] 2xl:h-[239px] 3xl:h-[286px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius15 w-[100%]"
                style={{ backgroundImage: "url('images/img_rectangle98.png')" }}
              >
                <Img
                  src="images/img_call.svg"
                  className="call_One"
                  alt="call One"
                />
              </Stack>
              <Stack
                className="bg-cover bg-repeat lg:h-[170px] xl:h-[212px] 2xl:h-[239px] 3xl:h-[286px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius15 w-[100%]"
                style={{ backgroundImage: "url('images/img_adv.png')" }}
              >
                <Img
                  src="images/img_call.svg"
                  className="call"
                  alt="call Two"
                />
              </Stack>
              <Stack
                className="bg-cover bg-repeat lg:h-[170px] xl:h-[212px] 2xl:h-[239px] 3xl:h-[286px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius15 w-[100%]"
                style={{ backgroundImage: "url('images/img_adv_250X300.png')" }}
              >
                <Img
                  src="images/img_call.svg"
                  className="call"
                  alt="call Three"
                />
              </Stack>
              <Stack
                className="bg-cover bg-repeat lg:h-[170px] xl:h-[212px] 2xl:h-[239px] 3xl:h-[286px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius15 w-[100%]"
                style={{ backgroundImage: "url('images/img_adv_16.png')" }}
              >
                <Img
                  src="images/img_call_22X18.png"
                  className="call"
                  alt="call Four"
                />
              </Stack>
            </List>
          </Column>
          <Footer className="font-poppins lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default FaisalDirectoryModuleSearchPageVEventsVenuePage;
