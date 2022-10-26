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
  List,
  Line,
  Grid,
  Button,
} from "components";
import Header1 from "components/Header/Header1";
import Footer from "components/Footer/Footer";

const FaisalDirectoryModuleSearchPageVTubeVideoPage = () => {
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
              placeholder="a Video In V-Tube"
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
            <Column className="bg-white_A700 border border-black_900_20 border-solid font-poppins items-center justify-start xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[20px] xl:p-[25px] 2xl:p-[28px] 3xl:p-[34px] rounded-radius15 w-[100%]">
              <Column className="items-center justify-start w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Column className="w-[24%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Video V-Author
                    </Text>
                    <SelectBox
                      className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaPostC"
                      placeholder="Choose a Video V-Author"
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
                  <Column className="items-center pt-[1px] w-[75%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Column className="w-[66%]">
                        <Row className="items-center w-[70%]">
                          <Text
                            className="font-bold text-black_900 w-[auto]"
                            variant="body10"
                          >
                            V-Author’s Country
                          </Text>
                          <Text className="VAuthorsCity" variant="body10">
                            V-Author’s City
                          </Text>
                        </Row>
                        <Row className="items-center justify-between 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                          <SelectBox
                            className="font-normal not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[49%]"
                            placeholderClassName="text-gray_501"
                            name="ChooseaCountr"
                            placeholder="Choose a V-Author’s Country"
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
                            placeholder="Choose a V-Author’s City"
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
                <Row className="items-start justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                  <Column className="justify-start mt-[4px] w-[24%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Video Publishing Date
                    </Text>
                    <Input
                      className="placeholder:text-gray_501 SelectDate"
                      wrapClassName="2xl:mt-[9px] 3xl:mt-[11px] flex lg:mt-[6px] w-[100%] xl:mt-[8px]"
                      name="SelectDate"
                      placeholder="Choose a Video Publishing Date"
                      suffix={
                        <Img
                          src="images/img_calendar.svg"
                          className="mr-[2px] lg:w-[10px] lg:h-[11px] lg:ml-[18px] xl:w-[13px] xl:h-[14px] xl:ml-[22px] 2xl:w-[15px] 2xl:h-[16px] 2xl:ml-[25px] 3xl:w-[18px] 3xl:h-[19px] 3xl:ml-[30px] my-[auto]"
                          alt="calendar"
                        />
                      }
                      size="2xl"
                    ></Input>
                  </Column>
                  <List
                    className="lg:gap-[11px] xl:gap-[14px] 2xl:gap-[16px] 3xl:gap-[19px] grid grid-cols-2 min-h-[auto] w-[49%]"
                    orientation="horizontal"
                  >
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Video Category
                      </Text>
                      <SelectBox
                        className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaPostC One"
                        placeholder="Choose a Video Cateogry"
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
                    <Line className="self-center w-[49%] mt-[4px] justify-start" />
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Video Sub-Category
                      </Text>
                      <SelectBox
                        className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaPostS"
                        placeholder="Choose a Video Sub-Cateogry"
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
                  </List>
                  <Column className="justify-start mt-[3px] w-[24%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Video Branch
                    </Text>
                    <SelectBox
                      className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaPageB"
                      placeholder="Choose a Video Branch"
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
                </Row>
                <Grid className="lg:gap-[11px] xl:gap-[14px] 2xl:gap-[16px] 3xl:gap-[19px] grid grid-cols-4 lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                  <Column className="justify-start w-[100%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Video Views
                    </Text>
                    <SelectBox
                      className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaGroup"
                      placeholder="Choose a Video Views"
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
                      Video Comments
                    </Text>
                    <SelectBox
                      className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="Chooseanoofv"
                      placeholder="Choose a Video Comments"
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
                      Video Likes
                    </Text>
                    <SelectBox
                      className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaGroup One"
                      placeholder="Choose a Video Likes"
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
                      Video Shares
                    </Text>
                    <SelectBox
                      className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaGroup Two"
                      placeholder="Choose a Video Shares"
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
                      Video Rating
                    </Text>
                    <SelectBox
                      className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaPostR"
                      placeholder="Choose a Video Rating"
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
                      Video Tags
                    </Text>
                    <SelectBox
                      className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaPostT"
                      placeholder="Choose a Video Tags"
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
              name="ChooseaSortin"
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
          <Column className="font-poppins items-center justify-start 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[75px] xl:ml-[94px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[85%]">
            <Grid className="lg:gap-[20px] xl:gap-[25px] 2xl:gap-[28px] 3xl:gap-[34px] grid grid-cols-3 w-[100%]">
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_10.png')" }}
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
                        alt="arrowright"
                      />
                    </Button>
                    <Stack className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] mb-[1px] lg:mt-[52px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] pl-[1px] w-[24%]">
                      <Img
                        src="images/img_standardsilver.png"
                        className="StandardPlatin"
                        alt="StandardSilver"
                      />
                    </Stack>
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
                        alt="calendar"
                      />
                      <Text className="date" variant="body12">
                        15-Oct-2022
                      </Text>
                    </Row>
                    <Row className="items-center justify-center mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="clock"
                        alt="thumbsup"
                      />
                      <Text className="likes" variant="body12">
                        0
                      </Text>
                    </Row>
                    <Row className="items-start justify-center mb-[2px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                      <Img
                        src="images/img_star.svg"
                        className="clock"
                        alt="star"
                      />
                      <Text className="ratings" variant="body12">
                        5(20)
                      </Text>
                    </Row>
                    <Row className="items-center justify-center mb-[2px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                      <Img
                        src="images/img_share.svg"
                        className="clock"
                        alt="share"
                      />
                      <Text className="shares" variant="body12">
                        320
                      </Text>
                    </Row>
                    <Row className="items-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[2px] w-[14%]">
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
                        alt="overflowmenu"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-black_900_0c h-[1px] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[97%]" />
                  <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
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
                        alt="arrowdown Three"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_10.png')" }}
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
                        src="images/img_vendorsilver.png"
                        className="VendorPlatinum"
                        alt="VendorSilver"
                      />
                      <Img
                        src="images/img_ambassadorsilv.png"
                        className="AmbassadorGold"
                        alt="AmbassadorSilv"
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
                        alt="calendar One"
                      />
                      <Text className="date" variant="body12">
                        15-Oct-2022
                      </Text>
                    </Row>
                    <Row className="items-center justify-center mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="clock"
                        alt="thumbsup One"
                      />
                      <Text className="likes" variant="body12">
                        0
                      </Text>
                    </Row>
                    <Row className="items-start justify-center mb-[2px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                      <Img
                        src="images/img_star.svg"
                        className="clock"
                        alt="star One"
                      />
                      <Text className="ratings" variant="body12">
                        5(20)
                      </Text>
                    </Row>
                    <Row className="items-center justify-center mb-[2px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                      <Img
                        src="images/img_share.svg"
                        className="clock"
                        alt="share One"
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
                        alt="overflowmenu One"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-black_900_0c h-[1px] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[97%]" />
                  <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
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
                        alt="arrowdown Four"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_10.png')" }}
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
                        alt="arrowright Two"
                      />
                    </Button>
                    <Row className="items-center justify-end mb-[2px] ml-[auto] lg:mt-[52px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] w-[24%]">
                      <Img
                        src="images/img_vendorplatinum.png"
                        className="VendorPlatinum"
                        alt="VendorPlatinum"
                      />
                      <Img
                        src="images/img_ambassadorplat.png"
                        className="AmbassadorSilv"
                        alt="AmbassadorPlat"
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
                        alt="calendar Two"
                      />
                      <Text className="date" variant="body12">
                        15-Oct-2022
                      </Text>
                    </Row>
                    <Row className="items-center justify-center mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="clock"
                        alt="thumbsup Two"
                      />
                      <Text className="likes" variant="body12">
                        0
                      </Text>
                    </Row>
                    <Row className="items-start justify-center mb-[2px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                      <Img
                        src="images/img_star.svg"
                        className="clock"
                        alt="star Two"
                      />
                      <Text className="ratings" variant="body12">
                        5(20)
                      </Text>
                    </Row>
                    <Row className="items-center justify-center mb-[2px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                      <Img
                        src="images/img_share.svg"
                        className="clock"
                        alt="share Two"
                      />
                      <Text className="shares" variant="body12">
                        320
                      </Text>
                    </Row>
                    <Row className="items-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[2px] w-[14%]">
                      <Img
                        src="images/img_instagram.svg"
                        className="clock"
                        alt="instagram Two"
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
                        alt="overflowmenu Two"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-black_900_0c h-[1px] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[97%]" />
                  <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
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
                        alt="arrowdown Five"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_10.png')" }}
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
                        alt="arrowright Three"
                      />
                    </Button>
                    <Stack className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] mb-[1px] lg:mt-[52px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] pl-[1px] w-[24%]">
                      <Img
                        src="images/img_standardsilver.png"
                        className="StandardPlatin"
                        alt="StandardSilver One"
                      />
                    </Stack>
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
                        alt="calendar Three"
                      />
                      <Text className="date" variant="body12">
                        15-Oct-2022
                      </Text>
                    </Row>
                    <Row className="items-center justify-center mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="clock"
                        alt="thumbsup Three"
                      />
                      <Text className="likes" variant="body12">
                        0
                      </Text>
                    </Row>
                    <Row className="items-start justify-center mb-[2px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                      <Img
                        src="images/img_star.svg"
                        className="clock"
                        alt="star Three"
                      />
                      <Text className="ratings" variant="body12">
                        5(20)
                      </Text>
                    </Row>
                    <Row className="items-center justify-center mb-[2px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                      <Img
                        src="images/img_share.svg"
                        className="clock"
                        alt="share Three"
                      />
                      <Text className="shares" variant="body12">
                        320
                      </Text>
                    </Row>
                    <Row className="items-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[2px] w-[14%]">
                      <Img
                        src="images/img_instagram.svg"
                        className="clock"
                        alt="instagram Three"
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
                        alt="overflowmenu Three"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-black_900_0c h-[1px] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[97%]" />
                  <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
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
                        alt="arrowdown Six"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_10.png')" }}
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
                        alt="arrowright Four"
                      />
                    </Button>
                    <Row className="items-center justify-end mb-[2px] ml-[auto] lg:mt-[52px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] w-[24%]">
                      <Img
                        src="images/img_vendorsilver.png"
                        className="VendorPlatinum"
                        alt="VendorSilver One"
                      />
                      <Img
                        src="images/img_ambassadorsilv.png"
                        className="AmbassadorGold"
                        alt="AmbassadorSilv One"
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
                        alt="calendar Four"
                      />
                      <Text className="date" variant="body12">
                        15-Oct-2022
                      </Text>
                    </Row>
                    <Row className="items-center justify-center mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="clock"
                        alt="thumbsup Four"
                      />
                      <Text className="likes" variant="body12">
                        0
                      </Text>
                    </Row>
                    <Row className="items-start justify-center mb-[2px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                      <Img
                        src="images/img_star.svg"
                        className="clock"
                        alt="star Four"
                      />
                      <Text className="ratings" variant="body12">
                        5(20)
                      </Text>
                    </Row>
                    <Row className="items-center justify-center mb-[2px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                      <Img
                        src="images/img_share.svg"
                        className="clock"
                        alt="share Four"
                      />
                      <Text className="shares" variant="body12">
                        320
                      </Text>
                    </Row>
                    <Row className="items-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[2px] w-[14%]">
                      <Img
                        src="images/img_instagram.svg"
                        className="clock"
                        alt="instagram Four"
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
                        alt="overflowmenu Four"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-black_900_0c h-[1px] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[97%]" />
                  <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
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
                        alt="arrowdown Seven"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_10.png')" }}
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
                        alt="arrowright Five"
                      />
                    </Button>
                    <Row className="items-center justify-end mb-[2px] ml-[auto] lg:mt-[52px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] w-[24%]">
                      <Img
                        src="images/img_vendorplatinum.png"
                        className="VendorPlatinum"
                        alt="VendorPlatinum One"
                      />
                      <Img
                        src="images/img_ambassadorplat.png"
                        className="AmbassadorSilv"
                        alt="AmbassadorPlat One"
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
                        alt="calendar Five"
                      />
                      <Text className="date" variant="body12">
                        15-Oct-2022
                      </Text>
                    </Row>
                    <Row className="items-center justify-center mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="clock"
                        alt="thumbsup Five"
                      />
                      <Text className="likes" variant="body12">
                        0
                      </Text>
                    </Row>
                    <Row className="items-start justify-center mb-[2px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                      <Img
                        src="images/img_star.svg"
                        className="clock"
                        alt="star Five"
                      />
                      <Text className="ratings" variant="body12">
                        5(20)
                      </Text>
                    </Row>
                    <Row className="items-center justify-center mb-[2px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                      <Img
                        src="images/img_share.svg"
                        className="clock"
                        alt="share Five"
                      />
                      <Text className="shares" variant="body12">
                        320
                      </Text>
                    </Row>
                    <Row className="items-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[2px] w-[14%]">
                      <Img
                        src="images/img_instagram.svg"
                        className="clock"
                        alt="instagram Five"
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
                        alt="overflowmenu Five"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-black_900_0c h-[1px] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[97%]" />
                  <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
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
                        alt="arrowdown Eight"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_10.png')" }}
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
                        alt="arrowright Six"
                      />
                    </Button>
                    <Stack className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] mb-[1px] lg:mt-[52px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] pl-[1px] w-[24%]">
                      <Img
                        src="images/img_standardsilver.png"
                        className="StandardPlatin"
                        alt="StandardSilver Two"
                      />
                    </Stack>
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
                        alt="calendar Six"
                      />
                      <Text className="date" variant="body12">
                        15-Oct-2022
                      </Text>
                    </Row>
                    <Row className="items-center justify-center mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="clock"
                        alt="thumbsup Six"
                      />
                      <Text className="likes" variant="body12">
                        0
                      </Text>
                    </Row>
                    <Row className="items-start justify-center mb-[2px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                      <Img
                        src="images/img_star.svg"
                        className="clock"
                        alt="star Six"
                      />
                      <Text className="ratings" variant="body12">
                        5(20)
                      </Text>
                    </Row>
                    <Row className="items-center justify-center mb-[2px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                      <Img
                        src="images/img_share.svg"
                        className="clock"
                        alt="share Six"
                      />
                      <Text className="shares" variant="body12">
                        320
                      </Text>
                    </Row>
                    <Row className="items-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[2px] w-[14%]">
                      <Img
                        src="images/img_instagram.svg"
                        className="clock"
                        alt="instagram Six"
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
                        alt="arrowdown Nine"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_10.png')" }}
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
                        alt="arrowright Seven"
                      />
                    </Button>
                    <Row className="items-center justify-end mb-[2px] ml-[auto] lg:mt-[52px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] w-[24%]">
                      <Img
                        src="images/img_vendorsilver.png"
                        className="VendorPlatinum"
                        alt="VendorSilver Two"
                      />
                      <Img
                        src="images/img_ambassadorsilv.png"
                        className="AmbassadorGold"
                        alt="AmbassadorSilv Two"
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
                        alt="instagram Seven"
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
                        alt="overflowmenu Seven"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-black_900_0c h-[1px] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[97%]" />
                  <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
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
                        alt="arrowdown Ten"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_10.png')" }}
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
                        alt="arrowright Eight"
                      />
                    </Button>
                    <Row className="items-center justify-end mb-[2px] ml-[auto] lg:mt-[52px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] w-[24%]">
                      <Img
                        src="images/img_vendorplatinum.png"
                        className="VendorPlatinum"
                        alt="VendorPlatinum Two"
                      />
                      <Img
                        src="images/img_ambassadorplat.png"
                        className="AmbassadorSilv"
                        alt="AmbassadorPlat Two"
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
                        alt="calendar Eight"
                      />
                      <Text className="date" variant="body12">
                        15-Oct-2022
                      </Text>
                    </Row>
                    <Row className="items-center justify-center mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="clock"
                        alt="thumbsup Eight"
                      />
                      <Text className="likes" variant="body12">
                        0
                      </Text>
                    </Row>
                    <Row className="items-start justify-center mb-[2px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                      <Img
                        src="images/img_star.svg"
                        className="clock"
                        alt="star Eight"
                      />
                      <Text className="ratings" variant="body12">
                        5(20)
                      </Text>
                    </Row>
                    <Row className="items-center justify-center mb-[2px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                      <Img
                        src="images/img_share.svg"
                        className="clock"
                        alt="share Eight"
                      />
                      <Text className="shares" variant="body12">
                        320
                      </Text>
                    </Row>
                    <Row className="items-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[2px] w-[14%]">
                      <Img
                        src="images/img_instagram.svg"
                        className="clock"
                        alt="instagram Eight"
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
                        alt="overflowmenu Eight"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-black_900_0c h-[1px] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[97%]" />
                  <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
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
                        alt="arrowdown Eleven"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_10.png')" }}
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
                        alt="arrowright Nine"
                      />
                    </Button>
                    <Stack className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] mb-[1px] lg:mt-[52px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] pl-[1px] w-[24%]">
                      <Img
                        src="images/img_standardsilver.png"
                        className="StandardPlatin"
                        alt="StandardSilver Three"
                      />
                    </Stack>
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
                        alt="calendar Nine"
                      />
                      <Text className="date" variant="body12">
                        15-Oct-2022
                      </Text>
                    </Row>
                    <Row className="items-center justify-center mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="clock"
                        alt="thumbsup Nine"
                      />
                      <Text className="likes" variant="body12">
                        0
                      </Text>
                    </Row>
                    <Row className="items-start justify-center mb-[2px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                      <Img
                        src="images/img_star.svg"
                        className="clock"
                        alt="star Nine"
                      />
                      <Text className="ratings" variant="body12">
                        5(20)
                      </Text>
                    </Row>
                    <Row className="items-center justify-center mb-[2px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                      <Img
                        src="images/img_share.svg"
                        className="clock"
                        alt="share Nine"
                      />
                      <Text className="shares" variant="body12">
                        320
                      </Text>
                    </Row>
                    <Row className="items-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[2px] w-[14%]">
                      <Img
                        src="images/img_instagram.svg"
                        className="clock"
                        alt="instagram Nine"
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
                        alt="overflowmenu Nine"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-black_900_0c h-[1px] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[97%]" />
                  <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
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
                        alt="arrowdown Twelve"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_10.png')" }}
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
                        alt="arrowright Ten"
                      />
                    </Button>
                    <Row className="items-center justify-end mb-[2px] ml-[auto] lg:mt-[52px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] w-[24%]">
                      <Img
                        src="images/img_vendorsilver.png"
                        className="VendorPlatinum"
                        alt="VendorSilver Three"
                      />
                      <Img
                        src="images/img_ambassadorsilv.png"
                        className="AmbassadorGold"
                        alt="AmbassadorSilv Three"
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
                        alt="calendar Ten"
                      />
                      <Text className="date" variant="body12">
                        15-Oct-2022
                      </Text>
                    </Row>
                    <Row className="items-center justify-center mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="clock"
                        alt="thumbsup Ten"
                      />
                      <Text className="likes" variant="body12">
                        0
                      </Text>
                    </Row>
                    <Row className="items-start justify-center mb-[2px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                      <Img
                        src="images/img_star.svg"
                        className="clock"
                        alt="star Ten"
                      />
                      <Text className="ratings" variant="body12">
                        5(20)
                      </Text>
                    </Row>
                    <Row className="items-center justify-center mb-[2px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                      <Img
                        src="images/img_share.svg"
                        className="clock"
                        alt="share Ten"
                      />
                      <Text className="shares" variant="body12">
                        320
                      </Text>
                    </Row>
                    <Row className="items-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[2px] w-[14%]">
                      <Img
                        src="images/img_instagram.svg"
                        className="clock"
                        alt="instagram Ten"
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
                        alt="overflowmenu Ten"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-black_900_0c h-[1px] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[97%]" />
                  <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
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
                        alt="arrowdown Thirteen"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_10.png')" }}
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
                        alt="arrowright Eleven"
                      />
                    </Button>
                    <Row className="items-center justify-end mb-[2px] ml-[auto] lg:mt-[52px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] w-[24%]">
                      <Img
                        src="images/img_vendorplatinum.png"
                        className="VendorPlatinum"
                        alt="VendorPlatinum Three"
                      />
                      <Img
                        src="images/img_ambassadorplat.png"
                        className="AmbassadorSilv"
                        alt="AmbassadorPlat Three"
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
                        alt="calendar Eleven"
                      />
                      <Text className="date" variant="body12">
                        15-Oct-2022
                      </Text>
                    </Row>
                    <Row className="items-center justify-center mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="clock"
                        alt="thumbsup Eleven"
                      />
                      <Text className="likes" variant="body12">
                        0
                      </Text>
                    </Row>
                    <Row className="items-start justify-center mb-[2px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                      <Img
                        src="images/img_star.svg"
                        className="clock"
                        alt="star Eleven"
                      />
                      <Text className="ratings" variant="body12">
                        5(20)
                      </Text>
                    </Row>
                    <Row className="items-center justify-center mb-[2px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                      <Img
                        src="images/img_share.svg"
                        className="clock"
                        alt="share Eleven"
                      />
                      <Text className="shares" variant="body12">
                        320
                      </Text>
                    </Row>
                    <Row className="items-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[2px] w-[14%]">
                      <Img
                        src="images/img_instagram.svg"
                        className="clock"
                        alt="instagram Eleven"
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
                        alt="overflowmenu Eleven"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-black_900_0c h-[1px] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[97%]" />
                  <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
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
                            alt="user Three"
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
                        alt="arrowdown Fourteen"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
            </Grid>
          </Column>
          <Line className="bg-black_900_0c h-[1px] 2xl:ml-[104px] 3xl:ml-[125px] lg:ml-[74px] xl:ml-[93px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[85%]" />
          <Button
            className="2xl:ml-[649px] 2xl:mt-[18px] 3xl:ml-[778px] 3xl:mt-[21px] flex items-center justify-center lg:ml-[461px] lg:mt-[12px] text-center w-[10%] xl:ml-[576px] xl:mt-[16px]"
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
                style={{ backgroundImage: "url('images/img_adv_8.png')" }}
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

export default FaisalDirectoryModuleSearchPageVTubeVideoPage;
