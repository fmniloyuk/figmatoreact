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
  List,
  Grid,
  Line,
} from "components";
import Header1 from "components/Header/Header1";
import Footer from "components/Footer/Footer";

const FaisalDirectoryModuleSearchPageVLanceProjectPage = () => {
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
              placeholder="a Project in V-Lance"
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
              size="xl"
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
                      Project V-Employer
                    </Text>
                    <SelectBox
                      className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaVExpe"
                      placeholder="Choose a Project V-Employer"
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
                        <Row className="items-start w-[72%]">
                          <Text
                            className="font-bold my-[1px] text-black_900 w-[auto]"
                            variant="body10"
                          >
                            V-Employer Country
                          </Text>
                          <Text
                            className="font-bold lg:ml-[107px] xl:ml-[134px] 2xl:ml-[151px] 3xl:ml-[181px] text-black_900 w-[auto]"
                            variant="body10"
                          >
                            V-Employer City
                          </Text>
                        </Row>
                        <Row className="items-center justify-between 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                          <SelectBox
                            className="font-normal not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[49%]"
                            placeholderClassName="text-gray_501"
                            name="ChooseaCountr"
                            placeholder="Choose a V-Employer Country"
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
                            placeholder="Choose a V-Employer City"
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
                <Row className="items-start justify-between lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                  <Column className="justify-start mt-[4px] w-[24%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Project Publishing Date
                    </Text>
                    <Button
                      className="2xl:mt-[9px] 3xl:mt-[11px] flex items-center justify-center lg:mt-[6px] text-center w-[100%] xl:mt-[8px]"
                      rightIcon={
                        <Img
                          src="images/img_calendar.svg"
                          className="text-center lg:w-[10px] lg:h-[11px] lg:ml-[12px] xl:w-[13px] xl:h-[14px] xl:ml-[16px] 2xl:w-[15px] 2xl:h-[16px] 2xl:ml-[18px] 3xl:w-[18px] 3xl:h-[19px] 3xl:ml-[21px]"
                          alt="calendar"
                        />
                      }
                      shape="RoundedBorder4"
                      size="lg"
                      variant="OutlineBlack900201_2"
                    >
                      <div className="bg-transparent font-normal not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501">
                        Choose a Project Publishing Date
                      </div>
                    </Button>
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
                        Project Category
                      </Text>
                      <SelectBox
                        className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaPostC"
                        placeholder="Choose a Project Cateogry"
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
                        Project Sub-Category
                      </Text>
                      <SelectBox
                        className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaPostS"
                        placeholder="Choose a Project Sub-Cateogry"
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
                  <Column className="justify-start mt-[4px] w-[24%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Project Branch
                    </Text>
                    <SelectBox
                      className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaPostB"
                      placeholder="Choose a Project Branch"
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
                <Grid className="lg:gap-[11px] xl:gap-[14px] 2xl:gap-[16px] 3xl:gap-[19px] grid grid-cols-4 lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                  <Column className="justify-start w-[100%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Project Budget
                    </Text>
                    <SelectBox
                      className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaProjec"
                      placeholder="Choose a Project Budget Type"
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
                      Project Budget Range
                    </Text>
                    <SelectBox
                      className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaNoof"
                      placeholder="Choose a Project Budget Range"
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
                      Project Delivery Time
                    </Text>
                    <SelectBox
                      className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaSortin"
                      placeholder="Choose a Project Delivery Time"
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
                      Project Bids
                    </Text>
                    <SelectBox
                      className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaNoof One"
                      placeholder="Choose a Project Bids"
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
                      Project Likes
                    </Text>
                    <SelectBox
                      className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaPostR"
                      placeholder="Choose a Project Likes"
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
                      Project Shares
                    </Text>
                    <SelectBox
                      className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaPostR One"
                      placeholder="Choose a Project Share"
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
                      Project Employer Rating
                    </Text>
                    <SelectBox
                      className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaPostR Two"
                      placeholder="Choose a Project Employer Rating"
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
                      Project Tags
                    </Text>
                    <SelectBox
                      className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaPostT"
                      placeholder="Choose a Project Tags"
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
          <Line className="bg-black_900_20 h-[1px] 2xl:ml-[104px] 3xl:ml-[125px] lg:ml-[74px] xl:ml-[93px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[85%]" />
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
          <Column className="font-poppins items-center justify-start 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[75px] xl:ml-[94px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[85%]">
            <Grid className="lg:gap-[20px] xl:gap-[25px] 2xl:gap-[28px] 3xl:gap-[34px] grid grid-cols-3 w-[100%]">
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_15.png')" }}
                >
                  <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[19%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientBlue700Indigo900"
                    >
                      Applied
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
                        src="images/img_ambassadorplat.png"
                        className="AmbassadorSilv"
                        alt="AmbassadorPlat"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="font-prompt items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[93%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columntitleofthec" variant="body7">
                      Need to create E-Commerce website
                    </Text>
                    <Row className="font-poppins items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[62%]">
                      <Row className="items-center justify-evenly w-[41%]">
                        <Img
                          src="images/img_calendar_16X16.svg"
                          className="clock"
                          alt="calendar One"
                        />
                        <Text className="date" variant="body12">
                          15-Oct-2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[12%]">
                        <Img
                          src="images/img_thumbsup.svg"
                          className="clock"
                          alt="thumbsup"
                        />
                        <Text className="likes" variant="body12">
                          0
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                        <Img
                          src="images/img_share.svg"
                          className="clock"
                          alt="share"
                        />
                        <Text className="shares" variant="body12">
                          320
                        </Text>
                      </Row>
                      <Column className="items-center xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] w-[15%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_user.svg"
                            className="clock"
                            alt="user"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
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
                          alt="overflowmenu"
                        />
                      </Button>
                    </Row>
                    <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-center justify-between pr-[1px] py-[1px] w-[51%]">
                        <Row className="items-center justify-evenly w-[26%]">
                          <Img
                            src="images/img_offer.svg"
                            className="clock"
                            alt="offer"
                          />
                          <Text className="rowuser" variant="body12">
                            1,500
                          </Text>
                        </Row>
                        <Column className="items-center py-[1px] w-[27%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Img
                              src="images/img_file.svg"
                              className="clock"
                              alt="file"
                            />
                            <Text className="rowuser" variant="body12">
                              Fixed
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-start justify-evenly mr-[2px] w-[31%]">
                          <Img
                            src="images/img_trophy.svg"
                            className="clock"
                            alt="trophy"
                          />
                          <Text className="status1" variant="body12">
                            3 Days
                          </Text>
                        </Row>
                      </Row>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[20%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientDeeporangeA400Pink900"
                      >
                        Expired
                      </Button>
                    </Row>
                    <Line className="bg-black_900_20 h-[1px] ml-[4px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
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
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_15.png')" }}
                >
                  <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[16%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientDeeporangeA400Pink900"
                    >
                      Apply
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
                <Column className="font-prompt items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[93%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columntitleofthec" variant="body7">
                      Need to create E-Commerce website
                    </Text>
                    <Row className="font-poppins items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[62%]">
                      <Row className="items-center justify-evenly w-[41%]">
                        <Img
                          src="images/img_calendar_16X16.svg"
                          className="clock"
                          alt="calendar Two"
                        />
                        <Text className="date" variant="body12">
                          15-Oct-2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[12%]">
                        <Img
                          src="images/img_thumbsup.svg"
                          className="clock"
                          alt="thumbsup One"
                        />
                        <Text className="likes" variant="body12">
                          0
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                        <Img
                          src="images/img_share.svg"
                          className="clock"
                          alt="share One"
                        />
                        <Text className="shares" variant="body12">
                          320
                        </Text>
                      </Row>
                      <Column className="items-center xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] w-[15%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_user.svg"
                            className="clock"
                            alt="user One"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
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
                    <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-center justify-between pr-[1px] py-[1px] w-[49%]">
                        <Row className="items-center justify-evenly w-[24%]">
                          <Img
                            src="images/img_offer.svg"
                            className="clock"
                            alt="offer One"
                          />
                          <Text className="rowuser" variant="body12">
                            500
                          </Text>
                        </Row>
                        <Column className="items-center pt-[1px] w-[32%]">
                          <Row className="items-start justify-evenly w-[100%]">
                            <Img
                              src="images/img_file.svg"
                              className="file_One"
                              alt="file One"
                            />
                            <Text className="rowfile_one" variant="body12">
                              Hourly
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-start justify-evenly mr-[2px] w-[32%]">
                          <Img
                            src="images/img_trophy.svg"
                            className="clock"
                            alt="trophy One"
                          />
                          <Text className="status1" variant="body12">
                            3 Days
                          </Text>
                        </Row>
                      </Row>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientBlue700Indigo900"
                      >
                        Hiring
                      </Button>
                    </Row>
                    <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="font-poppins items-start justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Column className="items-center justify-start w-[48%]">
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
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center mt-[4px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
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
              </Column>
              <Column className="bg-white_A700 border border-gray_201 border-solid items-center justify-start lg:pb-[15px] xl:pb-[19px] 2xl:pb-[21px] 3xl:pb-[26px] rounded-radius10 shadow-bs6 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_15.png')" }}
                >
                  <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[19%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientBlue700Indigo900"
                    >
                      Applied
                    </Button>
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne"
                      alt="GroupFifty Two"
                    />
                    <Row className="items-center justify-end mb-[1px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
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
                <Column className="font-prompt items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[93%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columntitleofthec" variant="body7">
                      Need to create E-Commerce website
                    </Text>
                    <Row className="font-poppins items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[62%]">
                      <Row className="items-center justify-evenly w-[41%]">
                        <Img
                          src="images/img_calendar_16X16.svg"
                          className="clock"
                          alt="calendar Three"
                        />
                        <Text className="date" variant="body12">
                          15-Oct-2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[12%]">
                        <Img
                          src="images/img_thumbsup.svg"
                          className="clock"
                          alt="thumbsup Two"
                        />
                        <Text className="likes" variant="body12">
                          0
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                        <Img
                          src="images/img_share.svg"
                          className="clock"
                          alt="share Two"
                        />
                        <Text className="shares" variant="body12">
                          320
                        </Text>
                      </Row>
                      <Column className="items-center xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] w-[15%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_user.svg"
                            className="clock"
                            alt="user Two"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
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
                          alt="overflowmenu Two"
                        />
                      </Button>
                    </Row>
                    <Line className="bg-black_900_20 h-[1px] ml-[4px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                    <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-center justify-between pr-[1px] py-[1px] w-[46%]">
                        <Row className="items-center justify-evenly w-[19%]">
                          <Img
                            src="images/img_offer.svg"
                            className="clock"
                            alt="offer Two"
                          />
                          <Text className="soldtimes" variant="body12">
                            15
                          </Text>
                        </Row>
                        <Column className="items-center pt-[1px] w-[34%]">
                          <Row className="items-start justify-evenly w-[100%]">
                            <Img
                              src="images/img_file.svg"
                              className="file_One"
                              alt="file Two"
                            />
                            <Text className="rowfile_one" variant="body12">
                              Hourly
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-start justify-evenly mr-[2px] w-[34%]">
                          <Img
                            src="images/img_trophy.svg"
                            className="clock"
                            alt="trophy Two"
                          />
                          <Text className="status1" variant="body12">
                            3 Days
                          </Text>
                        </Row>
                      </Row>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientBlue700Indigo900"
                      >
                        Hiring
                      </Button>
                    </Row>
                    <Line className="bg-black_900_20 h-[1px] ml-[4px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[99%]" />
                    <Column className="font-poppins items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-start w-[100%]">
                        <Button
                          className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                          size="lgIcn"
                          variant="icbOutlineBlack900201_2"
                        >
                          <Img
                            src="images/img_user_45X45.svg"
                            className="flex items-center justify-center"
                            alt="user One One"
                          />
                        </Button>
                        <Column className="justify-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] w-[33%]">
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
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:ml-[115px] xl:ml-[144px] 2xl:ml-[162px] 3xl:ml-[194px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
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
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_15.png')" }}
                >
                  <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[19%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientBlue700Indigo900"
                    >
                      Applied
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
                        alt="VendorPlatinum Two"
                      />
                      <Img
                        src="images/img_ambassadorplat.png"
                        className="AmbassadorSilv"
                        alt="AmbassadorPlat One"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="font-prompt items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[93%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columntitleofthec" variant="body7">
                      Need to create E-Commerce website
                    </Text>
                    <Row className="font-poppins items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[62%]">
                      <Row className="items-center justify-evenly w-[41%]">
                        <Img
                          src="images/img_calendar_16X16.svg"
                          className="clock"
                          alt="calendar Four"
                        />
                        <Text className="date" variant="body12">
                          15-Oct-2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[12%]">
                        <Img
                          src="images/img_thumbsup.svg"
                          className="clock"
                          alt="thumbsup Three"
                        />
                        <Text className="likes" variant="body12">
                          0
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                        <Img
                          src="images/img_share.svg"
                          className="clock"
                          alt="share Three"
                        />
                        <Text className="shares" variant="body12">
                          320
                        </Text>
                      </Row>
                      <Column className="items-center xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] w-[15%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_user.svg"
                            className="clock"
                            alt="user Three"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
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
                          alt="overflowmenu Three"
                        />
                      </Button>
                    </Row>
                    <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-center justify-between pr-[1px] py-[1px] w-[51%]">
                        <Row className="items-center justify-evenly w-[26%]">
                          <Img
                            src="images/img_offer.svg"
                            className="clock"
                            alt="offer Three"
                          />
                          <Text className="rowuser" variant="body12">
                            1,500
                          </Text>
                        </Row>
                        <Column className="items-center py-[1px] w-[27%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Img
                              src="images/img_file.svg"
                              className="clock"
                              alt="file Three"
                            />
                            <Text className="rowuser" variant="body12">
                              Fixed
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-start justify-evenly mr-[2px] w-[31%]">
                          <Img
                            src="images/img_trophy.svg"
                            className="clock"
                            alt="trophy Three"
                          />
                          <Text className="status1" variant="body12">
                            3 Days
                          </Text>
                        </Row>
                      </Row>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[20%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientDeeporangeA400Pink900"
                      >
                        Expired
                      </Button>
                    </Row>
                    <Line className="bg-black_900_20 h-[1px] ml-[4px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
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
                              alt="user One Two"
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
                          alt="arrowdown Four"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_15.png')" }}
                >
                  <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[16%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientDeeporangeA400Pink900"
                    >
                      Apply
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
                <Column className="font-prompt items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[93%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columntitleofthec" variant="body7">
                      Need to create E-Commerce website
                    </Text>
                    <Row className="font-poppins items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[62%]">
                      <Row className="items-center justify-evenly w-[41%]">
                        <Img
                          src="images/img_calendar_16X16.svg"
                          className="clock"
                          alt="calendar Five"
                        />
                        <Text className="date" variant="body12">
                          15-Oct-2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[12%]">
                        <Img
                          src="images/img_thumbsup.svg"
                          className="clock"
                          alt="thumbsup Four"
                        />
                        <Text className="likes" variant="body12">
                          0
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                        <Img
                          src="images/img_share.svg"
                          className="clock"
                          alt="share Four"
                        />
                        <Text className="shares" variant="body12">
                          320
                        </Text>
                      </Row>
                      <Column className="items-center xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] w-[15%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_user.svg"
                            className="clock"
                            alt="user Four"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
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
                          alt="overflowmenu Four"
                        />
                      </Button>
                    </Row>
                    <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-center justify-between pr-[1px] py-[1px] w-[49%]">
                        <Row className="items-center justify-evenly w-[24%]">
                          <Img
                            src="images/img_offer.svg"
                            className="clock"
                            alt="offer Four"
                          />
                          <Text className="rowuser" variant="body12">
                            500
                          </Text>
                        </Row>
                        <Column className="items-center pt-[1px] w-[32%]">
                          <Row className="items-start justify-evenly w-[100%]">
                            <Img
                              src="images/img_file.svg"
                              className="file_One"
                              alt="file Four"
                            />
                            <Text className="rowfile_one" variant="body12">
                              Hourly
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-start justify-evenly mr-[2px] w-[32%]">
                          <Img
                            src="images/img_trophy.svg"
                            className="clock"
                            alt="trophy Four"
                          />
                          <Text className="status1" variant="body12">
                            3 Days
                          </Text>
                        </Row>
                      </Row>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientBlue700Indigo900"
                      >
                        Hiring
                      </Button>
                    </Row>
                    <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="font-poppins items-start justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Column className="items-center justify-start w-[48%]">
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
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center mt-[4px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
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
              </Column>
              <Column className="bg-white_A700 border border-gray_201 border-solid items-center justify-start lg:pb-[15px] xl:pb-[19px] 2xl:pb-[21px] 3xl:pb-[26px] rounded-radius10 shadow-bs6 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_15.png')" }}
                >
                  <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[19%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientBlue700Indigo900"
                    >
                      Applied
                    </Button>
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne"
                      alt="GroupFifty Five"
                    />
                    <Row className="items-center justify-end mb-[1px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
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
                <Column className="font-prompt items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[93%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columntitleofthec" variant="body7">
                      Need to create E-Commerce website
                    </Text>
                    <Row className="font-poppins items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[62%]">
                      <Row className="items-center justify-evenly w-[41%]">
                        <Img
                          src="images/img_calendar_16X16.svg"
                          className="clock"
                          alt="calendar Six"
                        />
                        <Text className="date" variant="body12">
                          15-Oct-2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[12%]">
                        <Img
                          src="images/img_thumbsup.svg"
                          className="clock"
                          alt="thumbsup Five"
                        />
                        <Text className="likes" variant="body12">
                          0
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                        <Img
                          src="images/img_share.svg"
                          className="clock"
                          alt="share Five"
                        />
                        <Text className="shares" variant="body12">
                          320
                        </Text>
                      </Row>
                      <Column className="items-center xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] w-[15%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_user.svg"
                            className="clock"
                            alt="user Five"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
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
                          alt="overflowmenu Five"
                        />
                      </Button>
                    </Row>
                    <Line className="bg-black_900_20 h-[1px] ml-[4px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                    <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-center justify-between pr-[1px] py-[1px] w-[46%]">
                        <Row className="items-center justify-evenly w-[19%]">
                          <Img
                            src="images/img_offer.svg"
                            className="clock"
                            alt="offer Five"
                          />
                          <Text className="soldtimes" variant="body12">
                            15
                          </Text>
                        </Row>
                        <Column className="items-center pt-[1px] w-[34%]">
                          <Row className="items-start justify-evenly w-[100%]">
                            <Img
                              src="images/img_file.svg"
                              className="file_One"
                              alt="file Five"
                            />
                            <Text className="rowfile_one" variant="body12">
                              Hourly
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-start justify-evenly mr-[2px] w-[34%]">
                          <Img
                            src="images/img_trophy.svg"
                            className="clock"
                            alt="trophy Five"
                          />
                          <Text className="status1" variant="body12">
                            3 Days
                          </Text>
                        </Row>
                      </Row>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientBlue700Indigo900"
                      >
                        Hiring
                      </Button>
                    </Row>
                    <Line className="bg-black_900_20 h-[1px] ml-[4px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[99%]" />
                    <Column className="font-poppins items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-start w-[100%]">
                        <Button
                          className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                          size="lgIcn"
                          variant="icbOutlineBlack900201_2"
                        >
                          <Img
                            src="images/img_user_45X45.svg"
                            className="flex items-center justify-center"
                            alt="user One Three"
                          />
                        </Button>
                        <Column className="justify-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] w-[33%]">
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
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:ml-[115px] xl:ml-[144px] 2xl:ml-[162px] 3xl:ml-[194px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
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
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_15.png')" }}
                >
                  <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[19%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientBlue700Indigo900"
                    >
                      Applied
                    </Button>
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne"
                      alt="GroupFifty Six"
                    />
                    <Row className="items-center justify-end mb-[2px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                      <Img
                        src="images/img_vendorplatinum.png"
                        className="VendorPlatinum"
                        alt="VendorPlatinum Four"
                      />
                      <Img
                        src="images/img_ambassadorplat.png"
                        className="AmbassadorSilv"
                        alt="AmbassadorPlat Two"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="font-prompt items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[93%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columntitleofthec" variant="body7">
                      Need to create E-Commerce website
                    </Text>
                    <Row className="font-poppins items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[62%]">
                      <Row className="items-center justify-evenly w-[41%]">
                        <Img
                          src="images/img_calendar_16X16.svg"
                          className="clock"
                          alt="calendar Seven"
                        />
                        <Text className="date" variant="body12">
                          15-Oct-2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[12%]">
                        <Img
                          src="images/img_thumbsup.svg"
                          className="clock"
                          alt="thumbsup Six"
                        />
                        <Text className="likes" variant="body12">
                          0
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                        <Img
                          src="images/img_share.svg"
                          className="clock"
                          alt="share Six"
                        />
                        <Text className="shares" variant="body12">
                          320
                        </Text>
                      </Row>
                      <Column className="items-center xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] w-[15%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_user.svg"
                            className="clock"
                            alt="user Six"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
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
                          alt="overflowmenu Six"
                        />
                      </Button>
                    </Row>
                    <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-center justify-between pr-[1px] py-[1px] w-[51%]">
                        <Row className="items-center justify-evenly w-[26%]">
                          <Img
                            src="images/img_offer.svg"
                            className="clock"
                            alt="offer Six"
                          />
                          <Text className="rowuser" variant="body12">
                            1,500
                          </Text>
                        </Row>
                        <Column className="items-center py-[1px] w-[27%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Img
                              src="images/img_file.svg"
                              className="clock"
                              alt="file Six"
                            />
                            <Text className="rowuser" variant="body12">
                              Fixed
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-start justify-evenly mr-[2px] w-[31%]">
                          <Img
                            src="images/img_trophy.svg"
                            className="clock"
                            alt="trophy Six"
                          />
                          <Text className="status1" variant="body12">
                            3 Days
                          </Text>
                        </Row>
                      </Row>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[20%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientDeeporangeA400Pink900"
                      >
                        Expired
                      </Button>
                    </Row>
                    <Line className="bg-black_900_20 h-[1px] ml-[4px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
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
                              alt="user One Four"
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
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_15.png')" }}
                >
                  <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[16%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientDeeporangeA400Pink900"
                    >
                      Apply
                    </Button>
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne"
                      alt="GroupFifty Seven"
                    />
                    <Row className="items-center justify-end mb-[1px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                      <Img
                        src="images/img_vendorgold.png"
                        className="VendorSilver"
                        alt="VendorGold Two"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorGold"
                        alt="AmbassadorGold Four"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="font-prompt items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[93%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columntitleofthec" variant="body7">
                      Need to create E-Commerce website
                    </Text>
                    <Row className="font-poppins items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[62%]">
                      <Row className="items-center justify-evenly w-[41%]">
                        <Img
                          src="images/img_calendar_16X16.svg"
                          className="clock"
                          alt="calendar Eight"
                        />
                        <Text className="date" variant="body12">
                          15-Oct-2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[12%]">
                        <Img
                          src="images/img_thumbsup.svg"
                          className="clock"
                          alt="thumbsup Seven"
                        />
                        <Text className="likes" variant="body12">
                          0
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                        <Img
                          src="images/img_share.svg"
                          className="clock"
                          alt="share Seven"
                        />
                        <Text className="shares" variant="body12">
                          320
                        </Text>
                      </Row>
                      <Column className="items-center xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] w-[15%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_user.svg"
                            className="clock"
                            alt="user Seven"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
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
                          alt="overflowmenu Seven"
                        />
                      </Button>
                    </Row>
                    <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-center justify-between pr-[1px] py-[1px] w-[49%]">
                        <Row className="items-center justify-evenly w-[24%]">
                          <Img
                            src="images/img_offer.svg"
                            className="clock"
                            alt="offer Seven"
                          />
                          <Text className="rowuser" variant="body12">
                            500
                          </Text>
                        </Row>
                        <Column className="items-center pt-[1px] w-[32%]">
                          <Row className="items-start justify-evenly w-[100%]">
                            <Img
                              src="images/img_file.svg"
                              className="file_One"
                              alt="file Seven"
                            />
                            <Text className="rowfile_one" variant="body12">
                              Hourly
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-start justify-evenly mr-[2px] w-[32%]">
                          <Img
                            src="images/img_trophy.svg"
                            className="clock"
                            alt="trophy Seven"
                          />
                          <Text className="status1" variant="body12">
                            3 Days
                          </Text>
                        </Row>
                      </Row>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientBlue700Indigo900"
                      >
                        Hiring
                      </Button>
                    </Row>
                    <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="font-poppins items-start justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Column className="items-center justify-start w-[48%]">
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
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center mt-[4px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
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
              </Column>
              <Column className="bg-white_A700 border border-gray_201 border-solid items-center justify-start lg:pb-[15px] xl:pb-[19px] 2xl:pb-[21px] 3xl:pb-[26px] rounded-radius10 shadow-bs6 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_15.png')" }}
                >
                  <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[19%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientBlue700Indigo900"
                    >
                      Applied
                    </Button>
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne"
                      alt="GroupFifty Eight"
                    />
                    <Row className="items-center justify-end mb-[1px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
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
                <Column className="font-prompt items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[93%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columntitleofthec" variant="body7">
                      Need to create E-Commerce website
                    </Text>
                    <Row className="font-poppins items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[62%]">
                      <Row className="items-center justify-evenly w-[41%]">
                        <Img
                          src="images/img_calendar_16X16.svg"
                          className="clock"
                          alt="calendar Nine"
                        />
                        <Text className="date" variant="body12">
                          15-Oct-2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[12%]">
                        <Img
                          src="images/img_thumbsup.svg"
                          className="clock"
                          alt="thumbsup Eight"
                        />
                        <Text className="likes" variant="body12">
                          0
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                        <Img
                          src="images/img_share.svg"
                          className="clock"
                          alt="share Eight"
                        />
                        <Text className="shares" variant="body12">
                          320
                        </Text>
                      </Row>
                      <Column className="items-center xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] w-[15%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_user.svg"
                            className="clock"
                            alt="user Eight"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
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
                          alt="overflowmenu Eight"
                        />
                      </Button>
                    </Row>
                    <Line className="bg-black_900_20 h-[1px] ml-[4px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                    <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-center justify-between pr-[1px] py-[1px] w-[46%]">
                        <Row className="items-center justify-evenly w-[19%]">
                          <Img
                            src="images/img_offer.svg"
                            className="clock"
                            alt="offer Eight"
                          />
                          <Text className="soldtimes" variant="body12">
                            15
                          </Text>
                        </Row>
                        <Column className="items-center pt-[1px] w-[34%]">
                          <Row className="items-start justify-evenly w-[100%]">
                            <Img
                              src="images/img_file.svg"
                              className="file_One"
                              alt="file Eight"
                            />
                            <Text className="rowfile_one" variant="body12">
                              Hourly
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-start justify-evenly mr-[2px] w-[34%]">
                          <Img
                            src="images/img_trophy.svg"
                            className="clock"
                            alt="trophy Eight"
                          />
                          <Text className="status1" variant="body12">
                            3 Days
                          </Text>
                        </Row>
                      </Row>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientBlue700Indigo900"
                      >
                        Hiring
                      </Button>
                    </Row>
                    <Line className="bg-black_900_20 h-[1px] ml-[4px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[99%]" />
                    <Column className="font-poppins items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-start w-[100%]">
                        <Button
                          className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                          size="lgIcn"
                          variant="icbOutlineBlack900201_2"
                        >
                          <Img
                            src="images/img_user_45X45.svg"
                            className="flex items-center justify-center"
                            alt="user One Five"
                          />
                        </Button>
                        <Column className="justify-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] w-[33%]">
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
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:ml-[115px] xl:ml-[144px] 2xl:ml-[162px] 3xl:ml-[194px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
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
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_15.png')" }}
                >
                  <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[19%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientBlue700Indigo900"
                    >
                      Applied
                    </Button>
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne"
                      alt="GroupFifty Nine"
                    />
                    <Row className="items-center justify-end mb-[2px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                      <Img
                        src="images/img_vendorplatinum.png"
                        className="VendorPlatinum"
                        alt="VendorPlatinum Six"
                      />
                      <Img
                        src="images/img_ambassadorplat.png"
                        className="AmbassadorSilv"
                        alt="AmbassadorPlat Three"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="font-prompt items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[93%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columntitleofthec" variant="body7">
                      Need to create E-Commerce website
                    </Text>
                    <Row className="font-poppins items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[62%]">
                      <Row className="items-center justify-evenly w-[41%]">
                        <Img
                          src="images/img_calendar_16X16.svg"
                          className="clock"
                          alt="calendar Ten"
                        />
                        <Text className="date" variant="body12">
                          15-Oct-2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[12%]">
                        <Img
                          src="images/img_thumbsup.svg"
                          className="clock"
                          alt="thumbsup Nine"
                        />
                        <Text className="likes" variant="body12">
                          0
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                        <Img
                          src="images/img_share.svg"
                          className="clock"
                          alt="share Nine"
                        />
                        <Text className="shares" variant="body12">
                          320
                        </Text>
                      </Row>
                      <Column className="items-center xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] w-[15%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_user.svg"
                            className="clock"
                            alt="user Nine"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
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
                          alt="overflowmenu Nine"
                        />
                      </Button>
                    </Row>
                    <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-center justify-between pr-[1px] py-[1px] w-[51%]">
                        <Row className="items-center justify-evenly w-[26%]">
                          <Img
                            src="images/img_offer.svg"
                            className="clock"
                            alt="offer Nine"
                          />
                          <Text className="rowuser" variant="body12">
                            1,500
                          </Text>
                        </Row>
                        <Column className="items-center py-[1px] w-[27%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Img
                              src="images/img_file.svg"
                              className="clock"
                              alt="file Nine"
                            />
                            <Text className="rowuser" variant="body12">
                              Fixed
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-start justify-evenly mr-[2px] w-[31%]">
                          <Img
                            src="images/img_trophy.svg"
                            className="clock"
                            alt="trophy Nine"
                          />
                          <Text className="status1" variant="body12">
                            3 Days
                          </Text>
                        </Row>
                      </Row>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[20%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientDeeporangeA400Pink900"
                      >
                        Expired
                      </Button>
                    </Row>
                    <Line className="bg-black_900_20 h-[1px] ml-[4px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
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
                              alt="user One Six"
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
                          alt="arrowdown Ten"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_15.png')" }}
                >
                  <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[16%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientDeeporangeA400Pink900"
                    >
                      Apply
                    </Button>
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne"
                      alt="GroupFifty Ten"
                    />
                    <Row className="items-center justify-end mb-[1px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                      <Img
                        src="images/img_vendorgold.png"
                        className="VendorSilver"
                        alt="VendorGold Three"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorGold"
                        alt="AmbassadorGold Six"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="font-prompt items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[93%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columntitleofthec" variant="body7">
                      Need to create E-Commerce website
                    </Text>
                    <Row className="font-poppins items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[62%]">
                      <Row className="items-center justify-evenly w-[41%]">
                        <Img
                          src="images/img_calendar_16X16.svg"
                          className="clock"
                          alt="calendar Eleven"
                        />
                        <Text className="date" variant="body12">
                          15-Oct-2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[12%]">
                        <Img
                          src="images/img_thumbsup.svg"
                          className="clock"
                          alt="thumbsup Ten"
                        />
                        <Text className="likes" variant="body12">
                          0
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                        <Img
                          src="images/img_share.svg"
                          className="clock"
                          alt="share Ten"
                        />
                        <Text className="shares" variant="body12">
                          320
                        </Text>
                      </Row>
                      <Column className="items-center xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] w-[15%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_user.svg"
                            className="clock"
                            alt="user Ten"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
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
                          alt="overflowmenu Ten"
                        />
                      </Button>
                    </Row>
                    <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-center justify-between pr-[1px] py-[1px] w-[49%]">
                        <Row className="items-center justify-evenly w-[24%]">
                          <Img
                            src="images/img_offer.svg"
                            className="clock"
                            alt="offer Ten"
                          />
                          <Text className="rowuser" variant="body12">
                            500
                          </Text>
                        </Row>
                        <Column className="items-center pt-[1px] w-[32%]">
                          <Row className="items-start justify-evenly w-[100%]">
                            <Img
                              src="images/img_file.svg"
                              className="file_One"
                              alt="file Ten"
                            />
                            <Text className="rowfile_one" variant="body12">
                              Hourly
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-start justify-evenly mr-[2px] w-[32%]">
                          <Img
                            src="images/img_trophy.svg"
                            className="clock"
                            alt="trophy Ten"
                          />
                          <Text className="status1" variant="body12">
                            3 Days
                          </Text>
                        </Row>
                      </Row>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientBlue700Indigo900"
                      >
                        Hiring
                      </Button>
                    </Row>
                    <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="font-poppins items-start justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Column className="items-center justify-start w-[48%]">
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
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center mt-[4px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
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
              </Column>
              <Column className="bg-white_A700 border border-gray_201 border-solid items-center justify-start lg:pb-[15px] xl:pb-[19px] 2xl:pb-[21px] 3xl:pb-[26px] rounded-radius10 shadow-bs6 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_15.png')" }}
                >
                  <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[19%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientBlue700Indigo900"
                    >
                      Applied
                    </Button>
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne"
                      alt="GroupFifty Eleven"
                    />
                    <Row className="items-center justify-end mb-[1px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
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
                <Column className="font-prompt items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[93%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columntitleofthec" variant="body7">
                      Need to create E-Commerce website
                    </Text>
                    <Row className="font-poppins items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[62%]">
                      <Row className="items-center justify-evenly w-[41%]">
                        <Img
                          src="images/img_calendar_16X16.svg"
                          className="clock"
                          alt="calendar Twelve"
                        />
                        <Text className="date" variant="body12">
                          15-Oct-2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[12%]">
                        <Img
                          src="images/img_thumbsup.svg"
                          className="clock"
                          alt="thumbsup Eleven"
                        />
                        <Text className="likes" variant="body12">
                          0
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                        <Img
                          src="images/img_share.svg"
                          className="clock"
                          alt="share Eleven"
                        />
                        <Text className="shares" variant="body12">
                          320
                        </Text>
                      </Row>
                      <Column className="items-center xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] w-[15%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_user.svg"
                            className="clock"
                            alt="user Eleven"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
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
                          alt="overflowmenu Eleven"
                        />
                      </Button>
                    </Row>
                    <Line className="bg-black_900_20 h-[1px] ml-[4px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                    <Row className="font-poppins items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-center justify-between pr-[1px] py-[1px] w-[46%]">
                        <Row className="items-center justify-evenly w-[19%]">
                          <Img
                            src="images/img_offer.svg"
                            className="clock"
                            alt="offer Eleven"
                          />
                          <Text className="soldtimes" variant="body12">
                            15
                          </Text>
                        </Row>
                        <Column className="items-center pt-[1px] w-[34%]">
                          <Row className="items-start justify-evenly w-[100%]">
                            <Img
                              src="images/img_file.svg"
                              className="file_One"
                              alt="file Eleven"
                            />
                            <Text className="rowfile_one" variant="body12">
                              Hourly
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-start justify-evenly mr-[2px] w-[34%]">
                          <Img
                            src="images/img_trophy.svg"
                            className="clock"
                            alt="trophy Eleven"
                          />
                          <Text className="status1" variant="body12">
                            3 Days
                          </Text>
                        </Row>
                      </Row>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[18%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientBlue700Indigo900"
                      >
                        Hiring
                      </Button>
                    </Row>
                    <Line className="bg-black_900_20 h-[1px] ml-[4px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[99%]" />
                    <Column className="font-poppins items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-start w-[100%]">
                        <Button
                          className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                          size="lgIcn"
                          variant="icbOutlineBlack900201_2"
                        >
                          <Img
                            src="images/img_user_45X45.svg"
                            className="flex items-center justify-center"
                            alt="user One Seven"
                          />
                        </Button>
                        <Column className="justify-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] w-[33%]">
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
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:ml-[115px] xl:ml-[144px] 2xl:ml-[162px] 3xl:ml-[194px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
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
                style={{ backgroundImage: "url('images/img_adv_14.png')" }}
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

export default FaisalDirectoryModuleSearchPageVLanceProjectPage;
