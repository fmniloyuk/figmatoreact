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
  Input,
  Grid,
  Button,
  Line,
  List,
} from "components";
import Header1 from "components/Header/Header1";
import Footer from "components/Footer/Footer";

const FaisalDirectoryModuleSearchPageVEventsEventPage = () => {
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
              placeholder="an Event in V-Events"
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
            <Column className="bg-white_A700 border border-black_900_20 border-solid font-poppins items-center justify-start xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[32px] rounded-radius15 w-[100%]">
              <Column className="justify-start my-[2px] w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Column className="w-[24%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Event V-Organizer
                      </Text>
                      <SelectBox
                        className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaVExpe"
                        placeholder="Choose an Event V-Organizer"
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
                              Event Country
                            </Text>
                            <Text
                              className="lg:ml-[139px] xl:ml-[174px] 2xl:ml-[196px] 3xl:ml-[235px] Total"
                              variant="body10"
                            >
                              Event City
                            </Text>
                          </Row>
                          <Row className="items-center justify-between 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                            <SelectBox
                              className="font-normal not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[49%]"
                              placeholderClassName="text-gray_501"
                              name="ChooseaCountr"
                              placeholder="Choose an Event Country"
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
                              placeholder="Choose an Event City"
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
                        Event Date
                      </Text>
                      <Input
                        className="placeholder:text-gray_501 SelectDate"
                        wrapClassName="2xl:mt-[10px] 3xl:mt-[12px] flex lg:mt-[7px] w-[100%] xl:mt-[9px]"
                        name="SelectDate"
                        placeholder="Choose an Event Date"
                        suffix={
                          <Img
                            src="images/img_calendar.svg"
                            className="mr-[2px] lg:w-[10px] lg:h-[11px] lg:ml-[23px] xl:w-[13px] xl:h-[14px] xl:ml-[29px] 2xl:w-[15px] 2xl:h-[16px] 2xl:ml-[33px] 3xl:w-[18px] 3xl:h-[19px] 3xl:ml-[40px] my-[auto]"
                            alt="calendar"
                          />
                        }
                      ></Input>
                    </Column>
                    <Column className="w-[24%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Event Venue
                      </Text>
                      <SelectBox
                        className="font-normal xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaPostC"
                        placeholder="Choose an Event Venue"
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
                        size="xl"
                        variant="OutlineBlack90020"
                      ></SelectBox>
                    </Column>
                    <Column className="w-[24%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Event Category
                      </Text>
                      <SelectBox
                        className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaPostC One"
                        placeholder="Choose an Event Cateogry"
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
                        Event Sub-Category
                      </Text>
                      <SelectBox
                        className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaPostS"
                        placeholder="Choose an Event Sub-Cateogry"
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
                  <Grid className="lg:gap-[12px] xl:gap-[16px] 2xl:gap-[18px] 3xl:gap-[21px] grid grid-cols-4 lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Event Branch
                      </Text>
                      <SelectBox
                        className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaPostB"
                        placeholder="Choose an Event Branch"
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
                        size="xl"
                        variant="OutlineBlack90020"
                      ></SelectBox>
                    </Column>
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Event Status
                      </Text>
                      <SelectBox
                        className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseanEvent"
                        placeholder="Choose an Event Status"
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
                        size="xl"
                        variant="OutlineBlack90020"
                      ></SelectBox>
                    </Column>
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Event Price Type
                      </Text>
                      <SelectBox
                        className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaGroup"
                        placeholder="Choose an Event Type"
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
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Event Ticket Value
                      </Text>
                      <SelectBox
                        className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseanEvent One"
                        placeholder="Choose an Event Ticket Value"
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
                        size="xl"
                        variant="OutlineBlack90020"
                      ></SelectBox>
                    </Column>
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Event Attendess
                      </Text>
                      <SelectBox
                        className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaNoof"
                        placeholder="Choose an Event Attendess"
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
                        size="xl"
                        variant="OutlineBlack90020"
                      ></SelectBox>
                    </Column>
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Event Likes
                      </Text>
                      <SelectBox
                        className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaNoof One"
                        placeholder="Choose an Event Likes"
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
                        size="xl"
                        variant="OutlineBlack90020"
                      ></SelectBox>
                    </Column>
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Event Shares
                      </Text>
                      <SelectBox
                        className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaNoof Two"
                        placeholder="Choose an Event Shares"
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
                        size="xl"
                        variant="OutlineBlack90020"
                      ></SelectBox>
                    </Column>
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Event Ratings
                      </Text>
                      <SelectBox
                        className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaPostR"
                        placeholder="Choose an Event Rating"
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
                  </Grid>
                </Column>
                <Column className="justify-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[24%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body10"
                  >
                    Event Tags
                  </Text>
                  <SelectBox
                    className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                    placeholderClassName="text-gray_501"
                    name="ChooseaPostT"
                    placeholder="Choose an Event Tags"
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
              name="ChooseaGroup One"
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
          <Column className="items-center justify-start 2xl:ml-[102px] 3xl:ml-[123px] lg:ml-[73px] xl:ml-[91px] lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[44px] xl:pb-[102px] 2xl:pb-[115px] 3xl:pb-[138px] lg:pb-[81px] w-[86%]">
            <Grid className="lg:gap-[20px] xl:gap-[25px] 2xl:gap-[28px] 3xl:gap-[34px] grid grid-cols-3 w-[100%]">
              <Column className="listhire">
                <Column className="bg-white_A700 border border-gray_201 border-solid items-center justify-start rounded-radius10 shadow-bs6 w-[100%]">
                  <Stack
                    className="bg-cover bg-repeat lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_image_16.png')",
                    }}
                  >
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFifty6"
                      alt="GroupFifty"
                    />
                  </Stack>
                  <Column className="items-center justify-end lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[91%]">
                    <Column className="justify-end w-[100%]">
                      <Column className="font-poppins items-center justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] w-[99%]">
                        <Row className="items-start w-[100%]">
                          <Img
                            src="images/img_ellipse15.png"
                            className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                            alt="EllipseFifteen"
                          />
                          <Column className="justify-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] w-[29%]">
                            <Text
                              className="font-semibold text-black_900 w-[auto]"
                              variant="body10"
                            >
                              Amr Ibrahim
                            </Text>
                            <Text className="TitleatCompa" variant="body12">
                              Tagline goes here
                            </Text>
                          </Column>
                          <Img
                            src="images/img_vendorplatinum.png"
                            className="VendorPlatinum1"
                            alt="VendorPlatinum"
                          />
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
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
                      <Text className="columndictummiquis1" variant="body7">
                        Dictum mi quis sed nibh nam faucibus et pellentesque.
                        Arcu.
                      </Text>
                      <Row className="font-poppins items-center ml-[1px] mr-[auto] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[79%]">
                        <Row className="items-end justify-evenly mb-[1px] w-[37%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="calendar"
                            alt="calendar"
                          />
                          <Text className="rowcalendar" variant="body11">
                            15-Jan-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-between 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[60%]">
                          <Row className="items-start justify-evenly mb-[1px] w-[19%]">
                            <Img
                              src="images/img_clock_20X20.svg"
                              className="calendar"
                              alt="clock"
                            />
                            <Text className="rowclock1" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-start justify-center mb-[1px] w-[22%]">
                            <Img
                              src="images/img_thumbsup_20X20.svg"
                              className="calendar"
                              alt="thumbsup"
                            />
                            <Text className="rowthumbsup" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-center mt-[1px] w-[36%]">
                            <Img
                              src="images/img_star.svg"
                              className="calendar"
                              alt="star"
                            />
                            <Text className="rowstar1" variant="body11">
                              5(20)
                            </Text>
                          </Row>
                        </Row>
                      </Row>
                      <Row className="font-poppins items-center ml-[2px] mr-[auto] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[81%]">
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
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                      <Row className="font-poppins items-end mr-[auto] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[39%]">
                        <Row className="items-start justify-evenly mb-[4px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[29%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location"
                          />
                          <Text className="rowlocation4" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[61%]"
                          shape="RoundedBorder14"
                          size="sm"
                          variant="OutlineGray501"
                        >
                          Abudhabi
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="listhire">
                <Column className="bg-white_A700 border border-gray_201 border-solid items-center justify-start rounded-radius10 shadow-bs6 w-[100%]">
                  <Stack
                    className="bg-cover bg-repeat lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_image_20.png')",
                    }}
                  >
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFifty6"
                      alt="GroupFifty One"
                    />
                  </Stack>
                  <Column className="items-center justify-end lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[91%]">
                    <Column className="justify-end w-[100%]">
                      <Column className="font-poppins items-center justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] w-[99%]">
                        <Row className="items-start w-[100%]">
                          <Img
                            src="images/img_ellipse15.png"
                            className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                            alt="EllipseFifteen One"
                          />
                          <Column className="justify-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] w-[29%]">
                            <Text
                              className="font-semibold text-black_900 w-[auto]"
                              variant="body10"
                            >
                              Amr Ibrahim
                            </Text>
                            <Text className="TitleatCompa" variant="body12">
                              Tagline goes here
                            </Text>
                          </Column>
                          <Img
                            src="images/img_vendorplatinum.png"
                            className="VendorPlatinum1"
                            alt="VendorPlatinum One"
                          />
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
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
                      <Text className="columndictummiquis1" variant="body7">
                        Dictum mi quis sed nibh nam faucibus et pellentesque.
                        Arcu.
                      </Text>
                      <Row className="font-poppins items-center ml-[1px] mr-[auto] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[79%]">
                        <Row className="items-end justify-evenly mb-[1px] w-[37%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="calendar"
                            alt="calendar One"
                          />
                          <Text className="rowcalendar" variant="body11">
                            15-Jan-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-between 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[60%]">
                          <Row className="items-start justify-evenly mb-[1px] w-[19%]">
                            <Img
                              src="images/img_clock_20X20.svg"
                              className="calendar"
                              alt="clock One"
                            />
                            <Text className="rowclock1" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-start justify-center mb-[1px] w-[22%]">
                            <Img
                              src="images/img_thumbsup_20X20.svg"
                              className="calendar"
                              alt="thumbsup One"
                            />
                            <Text className="rowthumbsup" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-center mt-[1px] w-[36%]">
                            <Img
                              src="images/img_star.svg"
                              className="calendar"
                              alt="star One"
                            />
                            <Text className="rowstar1" variant="body11">
                              5(20)
                            </Text>
                          </Row>
                        </Row>
                      </Row>
                      <Row className="font-poppins items-center ml-[2px] mr-[auto] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[81%]">
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
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu One"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                      <Row className="font-poppins items-end mr-[auto] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[39%]">
                        <Row className="items-start justify-evenly mb-[4px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[29%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location One"
                          />
                          <Text className="rowlocation4" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[61%]"
                          shape="RoundedBorder14"
                          size="sm"
                          variant="OutlineGray501"
                        >
                          Abudhabi
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="listhire">
                <Column className="bg-white_A700 border border-gray_201 border-solid items-center justify-start rounded-radius10 shadow-bs6 w-[100%]">
                  <Stack className="lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] w-[100%]">
                    <Img
                      src="images/img_rectangle36.png"
                      className="RectangleThirtySix"
                      alt="RectangleThirtySix"
                    />
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFifty_Two"
                      alt="GroupFifty Two"
                    />
                  </Stack>
                  <Column className="items-center justify-end lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[91%]">
                    <Column className="justify-end w-[100%]">
                      <Column className="font-poppins items-center justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] w-[99%]">
                        <Row className="items-start w-[100%]">
                          <Img
                            src="images/img_ellipse15.png"
                            className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                            alt="EllipseFifteen Two"
                          />
                          <Column className="justify-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] w-[29%]">
                            <Text
                              className="font-semibold text-black_900 w-[auto]"
                              variant="body10"
                            >
                              Amr Ibrahim
                            </Text>
                            <Text className="TitleatCompa" variant="body12">
                              Tagline goes here
                            </Text>
                          </Column>
                          <Img
                            src="images/img_vendorplatinum.png"
                            className="VendorPlatinum1"
                            alt="VendorPlatinum Two"
                          />
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
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
                      <Text className="columndictummiquis1" variant="body7">
                        Dictum mi quis sed nibh nam faucibus et pellentesque.
                        Arcu.
                      </Text>
                      <Row className="font-poppins items-center ml-[1px] mr-[auto] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[79%]">
                        <Row className="items-end justify-evenly mb-[1px] w-[37%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="calendar"
                            alt="calendar Two"
                          />
                          <Text className="rowcalendar" variant="body11">
                            15-Jan-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-between 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[60%]">
                          <Row className="items-start justify-evenly mb-[1px] w-[19%]">
                            <Img
                              src="images/img_clock_20X20.svg"
                              className="calendar"
                              alt="clock Two"
                            />
                            <Text className="rowclock1" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-start justify-center mb-[1px] w-[22%]">
                            <Img
                              src="images/img_thumbsup_20X20.svg"
                              className="calendar"
                              alt="thumbsup Two"
                            />
                            <Text className="rowthumbsup" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-center mt-[1px] w-[36%]">
                            <Img
                              src="images/img_star.svg"
                              className="calendar"
                              alt="star Two"
                            />
                            <Text className="rowstar1" variant="body11">
                              5(20)
                            </Text>
                          </Row>
                        </Row>
                      </Row>
                      <Row className="font-poppins items-center ml-[2px] mr-[auto] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[81%]">
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
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu Two"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                      <Row className="font-poppins items-end mr-[auto] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[39%]">
                        <Row className="items-start justify-evenly mb-[4px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[29%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location Two"
                          />
                          <Text className="rowlocation4" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[61%]"
                          shape="RoundedBorder14"
                          size="sm"
                          variant="OutlineGray501"
                        >
                          Abudhabi
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="listhire">
                <Column className="bg-white_A700 border border-gray_201 border-solid items-center justify-start rounded-radius10 shadow-bs6 w-[100%]">
                  <Stack
                    className="bg-cover bg-repeat lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_image_16.png')",
                    }}
                  >
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFifty6"
                      alt="GroupFifty Three"
                    />
                  </Stack>
                  <Column className="items-center justify-end lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[91%]">
                    <Column className="justify-end w-[100%]">
                      <Column className="font-poppins items-center justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] w-[99%]">
                        <Row className="items-start w-[100%]">
                          <Img
                            src="images/img_ellipse15.png"
                            className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                            alt="EllipseFifteen Three"
                          />
                          <Column className="justify-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] w-[29%]">
                            <Text
                              className="font-semibold text-black_900 w-[auto]"
                              variant="body10"
                            >
                              Amr Ibrahim
                            </Text>
                            <Text className="TitleatCompa" variant="body12">
                              Tagline goes here
                            </Text>
                          </Column>
                          <Img
                            src="images/img_vendorplatinum.png"
                            className="VendorPlatinum1"
                            alt="VendorPlatinum Three"
                          />
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
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
                      <Text className="columndictummiquis1" variant="body7">
                        Dictum mi quis sed nibh nam faucibus et pellentesque.
                        Arcu.
                      </Text>
                      <Row className="font-poppins items-center ml-[1px] mr-[auto] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[79%]">
                        <Row className="items-end justify-evenly mb-[1px] w-[37%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="calendar"
                            alt="calendar Three"
                          />
                          <Text className="rowcalendar" variant="body11">
                            15-Jan-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-between 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[60%]">
                          <Row className="items-start justify-evenly mb-[1px] w-[19%]">
                            <Img
                              src="images/img_clock_20X20.svg"
                              className="calendar"
                              alt="clock Three"
                            />
                            <Text className="rowclock1" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-start justify-center mb-[1px] w-[22%]">
                            <Img
                              src="images/img_thumbsup_20X20.svg"
                              className="calendar"
                              alt="thumbsup Three"
                            />
                            <Text className="rowthumbsup" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-center mt-[1px] w-[36%]">
                            <Img
                              src="images/img_star.svg"
                              className="calendar"
                              alt="star Three"
                            />
                            <Text className="rowstar1" variant="body11">
                              5(20)
                            </Text>
                          </Row>
                        </Row>
                      </Row>
                      <Row className="font-poppins items-center ml-[2px] mr-[auto] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[81%]">
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
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu Three"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                      <Row className="font-poppins items-end mr-[auto] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[39%]">
                        <Row className="items-start justify-evenly mb-[4px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[29%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location Three"
                          />
                          <Text className="rowlocation4" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[61%]"
                          shape="RoundedBorder14"
                          size="sm"
                          variant="OutlineGray501"
                        >
                          Abudhabi
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="listhire">
                <Column className="bg-white_A700 border border-gray_201 border-solid items-center justify-start rounded-radius10 shadow-bs6 w-[100%]">
                  <Stack
                    className="bg-cover bg-repeat lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_image_20.png')",
                    }}
                  >
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFifty6"
                      alt="GroupFifty Four"
                    />
                  </Stack>
                  <Column className="items-center justify-end lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[91%]">
                    <Column className="justify-end w-[100%]">
                      <Column className="font-poppins items-center justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] w-[99%]">
                        <Row className="items-start w-[100%]">
                          <Img
                            src="images/img_ellipse15.png"
                            className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                            alt="EllipseFifteen Four"
                          />
                          <Column className="justify-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] w-[29%]">
                            <Text
                              className="font-semibold text-black_900 w-[auto]"
                              variant="body10"
                            >
                              Amr Ibrahim
                            </Text>
                            <Text className="TitleatCompa" variant="body12">
                              Tagline goes here
                            </Text>
                          </Column>
                          <Img
                            src="images/img_vendorplatinum.png"
                            className="VendorPlatinum1"
                            alt="VendorPlatinum Four"
                          />
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
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
                      <Text className="columndictummiquis1" variant="body7">
                        Dictum mi quis sed nibh nam faucibus et pellentesque.
                        Arcu.
                      </Text>
                      <Row className="font-poppins items-center ml-[1px] mr-[auto] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[79%]">
                        <Row className="items-end justify-evenly mb-[1px] w-[37%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="calendar"
                            alt="calendar Four"
                          />
                          <Text className="rowcalendar" variant="body11">
                            15-Jan-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-between 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[60%]">
                          <Row className="items-start justify-evenly mb-[1px] w-[19%]">
                            <Img
                              src="images/img_clock_20X20.svg"
                              className="calendar"
                              alt="clock Four"
                            />
                            <Text className="rowclock1" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-start justify-center mb-[1px] w-[22%]">
                            <Img
                              src="images/img_thumbsup_20X20.svg"
                              className="calendar"
                              alt="thumbsup Four"
                            />
                            <Text className="rowthumbsup" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-center mt-[1px] w-[36%]">
                            <Img
                              src="images/img_star.svg"
                              className="calendar"
                              alt="star Four"
                            />
                            <Text className="rowstar1" variant="body11">
                              5(20)
                            </Text>
                          </Row>
                        </Row>
                      </Row>
                      <Row className="font-poppins items-center ml-[2px] mr-[auto] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[81%]">
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
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu Four"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                      <Row className="font-poppins items-end mr-[auto] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[39%]">
                        <Row className="items-start justify-evenly mb-[4px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[29%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location Four"
                          />
                          <Text className="rowlocation4" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[61%]"
                          shape="RoundedBorder14"
                          size="sm"
                          variant="OutlineGray501"
                        >
                          Abudhabi
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="listhire">
                <Column className="bg-white_A700 border border-gray_201 border-solid items-center justify-start rounded-radius10 shadow-bs6 w-[100%]">
                  <Stack className="lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] w-[100%]">
                    <Img
                      src="images/img_rectangle36.png"
                      className="RectangleThirtySix"
                      alt="RectangleThirtySix One"
                    />
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFifty_Two"
                      alt="GroupFifty Five"
                    />
                  </Stack>
                  <Column className="items-center justify-end lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[91%]">
                    <Column className="justify-end w-[100%]">
                      <Column className="font-poppins items-center justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] w-[99%]">
                        <Row className="items-start w-[100%]">
                          <Img
                            src="images/img_ellipse15.png"
                            className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                            alt="EllipseFifteen Five"
                          />
                          <Column className="justify-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] w-[29%]">
                            <Text
                              className="font-semibold text-black_900 w-[auto]"
                              variant="body10"
                            >
                              Amr Ibrahim
                            </Text>
                            <Text className="TitleatCompa" variant="body12">
                              Tagline goes here
                            </Text>
                          </Column>
                          <Img
                            src="images/img_vendorplatinum.png"
                            className="VendorPlatinum1"
                            alt="VendorPlatinum Five"
                          />
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
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
                      <Text className="columndictummiquis1" variant="body7">
                        Dictum mi quis sed nibh nam faucibus et pellentesque.
                        Arcu.
                      </Text>
                      <Row className="font-poppins items-center ml-[1px] mr-[auto] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[79%]">
                        <Row className="items-end justify-evenly mb-[1px] w-[37%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="calendar"
                            alt="calendar Five"
                          />
                          <Text className="rowcalendar" variant="body11">
                            15-Jan-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-between 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[60%]">
                          <Row className="items-start justify-evenly mb-[1px] w-[19%]">
                            <Img
                              src="images/img_clock_20X20.svg"
                              className="calendar"
                              alt="clock Five"
                            />
                            <Text className="rowclock1" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-start justify-center mb-[1px] w-[22%]">
                            <Img
                              src="images/img_thumbsup_20X20.svg"
                              className="calendar"
                              alt="thumbsup Five"
                            />
                            <Text className="rowthumbsup" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-center mt-[1px] w-[36%]">
                            <Img
                              src="images/img_star.svg"
                              className="calendar"
                              alt="star Five"
                            />
                            <Text className="rowstar1" variant="body11">
                              5(20)
                            </Text>
                          </Row>
                        </Row>
                      </Row>
                      <Row className="font-poppins items-center ml-[2px] mr-[auto] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[81%]">
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
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu Five"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                      <Row className="font-poppins items-end mr-[auto] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[39%]">
                        <Row className="items-start justify-evenly mb-[4px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[29%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location Five"
                          />
                          <Text className="rowlocation4" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[61%]"
                          shape="RoundedBorder14"
                          size="sm"
                          variant="OutlineGray501"
                        >
                          Abudhabi
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="listhire">
                <Column className="bg-white_A700 border border-gray_201 border-solid items-center justify-start rounded-radius10 shadow-bs6 w-[100%]">
                  <Stack
                    className="bg-cover bg-repeat lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_image_16.png')",
                    }}
                  >
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFifty6"
                      alt="GroupFifty Six"
                    />
                  </Stack>
                  <Column className="items-center justify-end lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[91%]">
                    <Column className="justify-end w-[100%]">
                      <Column className="font-poppins items-center justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] w-[99%]">
                        <Row className="items-start w-[100%]">
                          <Img
                            src="images/img_ellipse15.png"
                            className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                            alt="EllipseFifteen Six"
                          />
                          <Column className="justify-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] w-[29%]">
                            <Text
                              className="font-semibold text-black_900 w-[auto]"
                              variant="body10"
                            >
                              Amr Ibrahim
                            </Text>
                            <Text className="TitleatCompa" variant="body12">
                              Tagline goes here
                            </Text>
                          </Column>
                          <Img
                            src="images/img_vendorplatinum.png"
                            className="VendorPlatinum1"
                            alt="VendorPlatinum Six"
                          />
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
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
                      <Text className="columndictummiquis1" variant="body7">
                        Dictum mi quis sed nibh nam faucibus et pellentesque.
                        Arcu.
                      </Text>
                      <Row className="font-poppins items-center ml-[1px] mr-[auto] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[79%]">
                        <Row className="items-end justify-evenly mb-[1px] w-[37%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="calendar"
                            alt="calendar Six"
                          />
                          <Text className="rowcalendar" variant="body11">
                            15-Jan-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-between 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[60%]">
                          <Row className="items-start justify-evenly mb-[1px] w-[19%]">
                            <Img
                              src="images/img_clock_20X20.svg"
                              className="calendar"
                              alt="clock Six"
                            />
                            <Text className="rowclock1" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-start justify-center mb-[1px] w-[22%]">
                            <Img
                              src="images/img_thumbsup_20X20.svg"
                              className="calendar"
                              alt="thumbsup Six"
                            />
                            <Text className="rowthumbsup" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-center mt-[1px] w-[36%]">
                            <Img
                              src="images/img_star.svg"
                              className="calendar"
                              alt="star Six"
                            />
                            <Text className="rowstar1" variant="body11">
                              5(20)
                            </Text>
                          </Row>
                        </Row>
                      </Row>
                      <Row className="font-poppins items-center ml-[2px] mr-[auto] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[81%]">
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
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu Six"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                      <Row className="font-poppins items-end mr-[auto] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[39%]">
                        <Row className="items-start justify-evenly mb-[4px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[29%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location Six"
                          />
                          <Text className="rowlocation4" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[61%]"
                          shape="RoundedBorder14"
                          size="sm"
                          variant="OutlineGray501"
                        >
                          Abudhabi
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="listhire">
                <Column className="bg-white_A700 border border-gray_201 border-solid items-center justify-start rounded-radius10 shadow-bs6 w-[100%]">
                  <Stack
                    className="bg-cover bg-repeat lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_image_20.png')",
                    }}
                  >
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFifty6"
                      alt="GroupFifty Seven"
                    />
                  </Stack>
                  <Column className="items-center justify-end lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[91%]">
                    <Column className="justify-end w-[100%]">
                      <Column className="font-poppins items-center justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] w-[99%]">
                        <Row className="items-start w-[100%]">
                          <Img
                            src="images/img_ellipse15.png"
                            className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                            alt="EllipseFifteen Seven"
                          />
                          <Column className="justify-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] w-[29%]">
                            <Text
                              className="font-semibold text-black_900 w-[auto]"
                              variant="body10"
                            >
                              Amr Ibrahim
                            </Text>
                            <Text className="TitleatCompa" variant="body12">
                              Tagline goes here
                            </Text>
                          </Column>
                          <Img
                            src="images/img_vendorplatinum.png"
                            className="VendorPlatinum1"
                            alt="VendorPlatinum Seven"
                          />
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
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
                      <Text className="columndictummiquis1" variant="body7">
                        Dictum mi quis sed nibh nam faucibus et pellentesque.
                        Arcu.
                      </Text>
                      <Row className="font-poppins items-center ml-[1px] mr-[auto] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[79%]">
                        <Row className="items-end justify-evenly mb-[1px] w-[37%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="calendar"
                            alt="calendar Seven"
                          />
                          <Text className="rowcalendar" variant="body11">
                            15-Jan-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-between 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[60%]">
                          <Row className="items-start justify-evenly mb-[1px] w-[19%]">
                            <Img
                              src="images/img_clock_20X20.svg"
                              className="calendar"
                              alt="clock Seven"
                            />
                            <Text className="rowclock1" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-start justify-center mb-[1px] w-[22%]">
                            <Img
                              src="images/img_thumbsup_20X20.svg"
                              className="calendar"
                              alt="thumbsup Seven"
                            />
                            <Text className="rowthumbsup" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-center mt-[1px] w-[36%]">
                            <Img
                              src="images/img_star.svg"
                              className="calendar"
                              alt="star Seven"
                            />
                            <Text className="rowstar1" variant="body11">
                              5(20)
                            </Text>
                          </Row>
                        </Row>
                      </Row>
                      <Row className="font-poppins items-center ml-[2px] mr-[auto] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[81%]">
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
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu Seven"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                      <Row className="font-poppins items-end mr-[auto] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[39%]">
                        <Row className="items-start justify-evenly mb-[4px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[29%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location Seven"
                          />
                          <Text className="rowlocation4" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[61%]"
                          shape="RoundedBorder14"
                          size="sm"
                          variant="OutlineGray501"
                        >
                          Abudhabi
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="listhire">
                <Column className="bg-white_A700 border border-gray_201 border-solid items-center justify-start rounded-radius10 shadow-bs6 w-[100%]">
                  <Stack className="lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] w-[100%]">
                    <Img
                      src="images/img_rectangle36.png"
                      className="RectangleThirtySix"
                      alt="RectangleThirtySix Two"
                    />
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFifty_Two"
                      alt="GroupFifty Eight"
                    />
                  </Stack>
                  <Column className="items-center justify-end lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[91%]">
                    <Column className="justify-end w-[100%]">
                      <Column className="font-poppins items-center justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] w-[99%]">
                        <Row className="items-start w-[100%]">
                          <Img
                            src="images/img_ellipse15.png"
                            className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                            alt="EllipseFifteen Eight"
                          />
                          <Column className="justify-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] w-[29%]">
                            <Text
                              className="font-semibold text-black_900 w-[auto]"
                              variant="body10"
                            >
                              Amr Ibrahim
                            </Text>
                            <Text className="TitleatCompa" variant="body12">
                              Tagline goes here
                            </Text>
                          </Column>
                          <Img
                            src="images/img_vendorplatinum.png"
                            className="VendorPlatinum1"
                            alt="VendorPlatinum Eight"
                          />
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
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
                      <Text className="columndictummiquis1" variant="body7">
                        Dictum mi quis sed nibh nam faucibus et pellentesque.
                        Arcu.
                      </Text>
                      <Row className="font-poppins items-center ml-[1px] mr-[auto] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[79%]">
                        <Row className="items-end justify-evenly mb-[1px] w-[37%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="calendar"
                            alt="calendar Eight"
                          />
                          <Text className="rowcalendar" variant="body11">
                            15-Jan-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-between 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[60%]">
                          <Row className="items-start justify-evenly mb-[1px] w-[19%]">
                            <Img
                              src="images/img_clock_20X20.svg"
                              className="calendar"
                              alt="clock Eight"
                            />
                            <Text className="rowclock1" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-start justify-center mb-[1px] w-[22%]">
                            <Img
                              src="images/img_thumbsup_20X20.svg"
                              className="calendar"
                              alt="thumbsup Eight"
                            />
                            <Text className="rowthumbsup" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-center mt-[1px] w-[36%]">
                            <Img
                              src="images/img_star.svg"
                              className="calendar"
                              alt="star Eight"
                            />
                            <Text className="rowstar1" variant="body11">
                              5(20)
                            </Text>
                          </Row>
                        </Row>
                      </Row>
                      <Row className="font-poppins items-center ml-[2px] mr-[auto] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[81%]">
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
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu Eight"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                      <Row className="font-poppins items-end mr-[auto] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[39%]">
                        <Row className="items-start justify-evenly mb-[4px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[29%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location Eight"
                          />
                          <Text className="rowlocation4" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[61%]"
                          shape="RoundedBorder14"
                          size="sm"
                          variant="OutlineGray501"
                        >
                          Abudhabi
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="listhire">
                <Column className="bg-white_A700 border border-gray_201 border-solid items-center justify-start rounded-radius10 shadow-bs6 w-[100%]">
                  <Stack
                    className="bg-cover bg-repeat lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_image_16.png')",
                    }}
                  >
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFifty6"
                      alt="GroupFifty Nine"
                    />
                  </Stack>
                  <Column className="items-center justify-end lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[91%]">
                    <Column className="justify-end w-[100%]">
                      <Column className="font-poppins items-center justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] w-[99%]">
                        <Row className="items-start w-[100%]">
                          <Img
                            src="images/img_ellipse15.png"
                            className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                            alt="EllipseFifteen Nine"
                          />
                          <Column className="justify-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] w-[29%]">
                            <Text
                              className="font-semibold text-black_900 w-[auto]"
                              variant="body10"
                            >
                              Amr Ibrahim
                            </Text>
                            <Text className="TitleatCompa" variant="body12">
                              Tagline goes here
                            </Text>
                          </Column>
                          <Img
                            src="images/img_vendorplatinum.png"
                            className="VendorPlatinum1"
                            alt="VendorPlatinum Nine"
                          />
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
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
                      <Text className="columndictummiquis1" variant="body7">
                        Dictum mi quis sed nibh nam faucibus et pellentesque.
                        Arcu.
                      </Text>
                      <Row className="font-poppins items-center ml-[1px] mr-[auto] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[79%]">
                        <Row className="items-end justify-evenly mb-[1px] w-[37%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="calendar"
                            alt="calendar Nine"
                          />
                          <Text className="rowcalendar" variant="body11">
                            15-Jan-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-between 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[60%]">
                          <Row className="items-start justify-evenly mb-[1px] w-[19%]">
                            <Img
                              src="images/img_clock_20X20.svg"
                              className="calendar"
                              alt="clock Nine"
                            />
                            <Text className="rowclock1" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-start justify-center mb-[1px] w-[22%]">
                            <Img
                              src="images/img_thumbsup_20X20.svg"
                              className="calendar"
                              alt="thumbsup Nine"
                            />
                            <Text className="rowthumbsup" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-center mt-[1px] w-[36%]">
                            <Img
                              src="images/img_star.svg"
                              className="calendar"
                              alt="star Nine"
                            />
                            <Text className="rowstar1" variant="body11">
                              5(20)
                            </Text>
                          </Row>
                        </Row>
                      </Row>
                      <Row className="font-poppins items-center ml-[2px] mr-[auto] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[81%]">
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
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu Nine"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                      <Row className="font-poppins items-end mr-[auto] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[39%]">
                        <Row className="items-start justify-evenly mb-[4px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[29%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location Nine"
                          />
                          <Text className="rowlocation4" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[61%]"
                          shape="RoundedBorder14"
                          size="sm"
                          variant="OutlineGray501"
                        >
                          Abudhabi
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="listhire">
                <Column className="bg-white_A700 border border-gray_201 border-solid items-center justify-start rounded-radius10 shadow-bs6 w-[100%]">
                  <Stack
                    className="bg-cover bg-repeat lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_image_20.png')",
                    }}
                  >
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFifty6"
                      alt="GroupFifty Ten"
                    />
                  </Stack>
                  <Column className="items-center justify-end lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[91%]">
                    <Column className="justify-end w-[100%]">
                      <Column className="font-poppins items-center justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] w-[99%]">
                        <Row className="items-start w-[100%]">
                          <Img
                            src="images/img_ellipse15.png"
                            className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                            alt="EllipseFifteen Ten"
                          />
                          <Column className="justify-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] w-[29%]">
                            <Text
                              className="font-semibold text-black_900 w-[auto]"
                              variant="body10"
                            >
                              Amr Ibrahim
                            </Text>
                            <Text className="TitleatCompa" variant="body12">
                              Tagline goes here
                            </Text>
                          </Column>
                          <Img
                            src="images/img_vendorplatinum.png"
                            className="VendorPlatinum1"
                            alt="VendorPlatinum Ten"
                          />
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
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
                      <Text className="columndictummiquis1" variant="body7">
                        Dictum mi quis sed nibh nam faucibus et pellentesque.
                        Arcu.
                      </Text>
                      <Row className="font-poppins items-center ml-[1px] mr-[auto] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[79%]">
                        <Row className="items-end justify-evenly mb-[1px] w-[37%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="calendar"
                            alt="calendar Ten"
                          />
                          <Text className="rowcalendar" variant="body11">
                            15-Jan-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-between 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[60%]">
                          <Row className="items-start justify-evenly mb-[1px] w-[19%]">
                            <Img
                              src="images/img_clock_20X20.svg"
                              className="calendar"
                              alt="clock Ten"
                            />
                            <Text className="rowclock1" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-start justify-center mb-[1px] w-[22%]">
                            <Img
                              src="images/img_thumbsup_20X20.svg"
                              className="calendar"
                              alt="thumbsup Ten"
                            />
                            <Text className="rowthumbsup" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-center mt-[1px] w-[36%]">
                            <Img
                              src="images/img_star.svg"
                              className="calendar"
                              alt="star Ten"
                            />
                            <Text className="rowstar1" variant="body11">
                              5(20)
                            </Text>
                          </Row>
                        </Row>
                      </Row>
                      <Row className="font-poppins items-center ml-[2px] mr-[auto] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[81%]">
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
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu Ten"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                      <Row className="font-poppins items-end mr-[auto] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[39%]">
                        <Row className="items-start justify-evenly mb-[4px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[29%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location Ten"
                          />
                          <Text className="rowlocation4" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[61%]"
                          shape="RoundedBorder14"
                          size="sm"
                          variant="OutlineGray501"
                        >
                          Abudhabi
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="listhire">
                <Column className="bg-white_A700 border border-gray_201 border-solid items-center justify-start rounded-radius10 shadow-bs6 w-[100%]">
                  <Stack className="lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] w-[100%]">
                    <Img
                      src="images/img_rectangle36.png"
                      className="RectangleThirtySix"
                      alt="RectangleThirtySix Three"
                    />
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFifty_Two"
                      alt="GroupFifty Eleven"
                    />
                  </Stack>
                  <Column className="items-center justify-end lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[91%]">
                    <Column className="justify-end w-[100%]">
                      <Column className="font-poppins items-center justify-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] w-[99%]">
                        <Row className="items-start w-[100%]">
                          <Img
                            src="images/img_ellipse15.png"
                            className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                            alt="EllipseFifteen Eleven"
                          />
                          <Column className="justify-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] w-[29%]">
                            <Text
                              className="font-semibold text-black_900 w-[auto]"
                              variant="body10"
                            >
                              Amr Ibrahim
                            </Text>
                            <Text className="TitleatCompa" variant="body12">
                              Tagline goes here
                            </Text>
                          </Column>
                          <Img
                            src="images/img_vendorplatinum.png"
                            className="VendorPlatinum1"
                            alt="VendorPlatinum Eleven"
                          />
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                            shape="icbCircleBorder15"
                            size="mdIcn"
                            variant="icbOutlineBlue700"
                          >
                            <Img
                              src="images/img_arrowdown_29X29.svg"
                              className="flex items-center justify-center"
                              alt="arrowdown Thirteen"
                            />
                          </Button>
                        </Row>
                      </Column>
                      <Text className="columndictummiquis1" variant="body7">
                        Dictum mi quis sed nibh nam faucibus et pellentesque.
                        Arcu.
                      </Text>
                      <Row className="font-poppins items-center ml-[1px] mr-[auto] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[79%]">
                        <Row className="items-end justify-evenly mb-[1px] w-[37%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="calendar"
                            alt="calendar Eleven"
                          />
                          <Text className="rowcalendar" variant="body11">
                            15-Jan-2022
                          </Text>
                        </Row>
                        <Row className="items-center justify-between 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[60%]">
                          <Row className="items-start justify-evenly mb-[1px] w-[19%]">
                            <Img
                              src="images/img_clock_20X20.svg"
                              className="calendar"
                              alt="clock Eleven"
                            />
                            <Text className="rowclock1" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-start justify-center mb-[1px] w-[22%]">
                            <Img
                              src="images/img_thumbsup_20X20.svg"
                              className="calendar"
                              alt="thumbsup Eleven"
                            />
                            <Text className="rowthumbsup" variant="body11">
                              0
                            </Text>
                          </Row>
                          <Row className="items-center mt-[1px] w-[36%]">
                            <Img
                              src="images/img_star.svg"
                              className="calendar"
                              alt="star Eleven"
                            />
                            <Text className="rowstar1" variant="body11">
                              5(20)
                            </Text>
                          </Row>
                        </Row>
                      </Row>
                      <Row className="font-poppins items-center ml-[2px] mr-[auto] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[81%]">
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
                            src="images/img_arrowdown_29X29.svg"
                            className="flex items-center justify-center"
                            alt="overflowmenu Eleven"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-black_900_0c h-[1px] ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                      <Row className="font-poppins items-end mr-[auto] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[39%]">
                        <Row className="items-start justify-evenly mb-[4px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[29%]">
                          <Img
                            src="images/img_location_16X16.svg"
                            className="clock"
                            alt="location Eleven"
                          />
                          <Text className="rowlocation4" variant="body12">
                            UAE
                          </Text>
                        </Row>
                        <Button
                          className="capitalize font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[61%]"
                          shape="RoundedBorder14"
                          size="sm"
                          variant="OutlineGray501"
                        >
                          Abudhabi
                        </Button>
                      </Row>
                    </Column>
                  </Column>
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
          <Column className="font-poppins justify-start 2xl:ml-[104px] 3xl:ml-[125px] lg:ml-[74px] xl:ml-[93px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[96%]">
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
                style={{ backgroundImage: "url('images/img_adv_15.png')" }}
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

export default FaisalDirectoryModuleSearchPageVEventsEventPage;
