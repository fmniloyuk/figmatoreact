import React from "react";

import {
  Column,
  Text,
  SelectBox,
  Img,
  List,
  Line,
  Input,
  Row,
  Switch,
  Stack,
  SeekBar,
  Grid,
  Button,
} from "components";
import Header1 from "components/Header/Header1";
import Footer from "components/Footer/Footer";

const FaisalDirectoryModuleSearchPageVGuidePersonalProfilePage = () => {
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
              placeholder="a Personal Profile in V-Guide"
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
            <Column className="bg-white_A700 border border-black_900_20 border-solid font-poppins items-center justify-start xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[33px] rounded-radius15 w-[100%]">
              <Column className="justify-start my-[1px] w-[100%]">
                <List
                  className="lg:gap-[10px] xl:gap-[13px] 2xl:gap-[15px] 3xl:gap-[18px] grid grid-cols-3 min-h-[auto] w-[75%]"
                  orientation="horizontal"
                >
                  <Column className="justify-start w-[100%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Profile Rank
                    </Text>
                    <SelectBox
                      className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaProduc"
                      placeholder="Choose a Profile Rank"
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
                  <Line className="self-center w-[32%] mt-[4px] justify-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px]" />
                  <Column className="justify-start w-[100%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Profile Activities
                    </Text>
                    <SelectBox
                      className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaProfil"
                      placeholder="Choose a Profile Activity"
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
                  <Line className="self-center w-[32%] mt-[4px] justify-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px]" />
                  <Column className="justify-start mt-[4px] w-[100%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Profile Joining Date
                    </Text>
                    <Input
                      className="placeholder:text-gray_501 SelectDate"
                      wrapClassName="2xl:mt-[9px] 3xl:mt-[11px] flex lg:mt-[6px] w-[100%] xl:mt-[8px]"
                      name="SelectDate"
                      placeholder="Choose a Profile Joining Date"
                      suffix={
                        <Img
                          src="images/img_calendar.svg"
                          className="mr-[2px] lg:w-[10px] lg:h-[11px] lg:ml-[23px] xl:w-[13px] xl:h-[14px] xl:ml-[29px] 2xl:w-[15px] 2xl:h-[16px] 2xl:ml-[33px] 3xl:w-[18px] 3xl:h-[19px] 3xl:ml-[40px] my-[auto]"
                          alt="calendar"
                        />
                      }
                      size="2xl"
                    ></Input>
                  </Column>
                </List>
                <Row className="items-start justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                  <List
                    className="lg:gap-[10px] xl:gap-[13px] 2xl:gap-[15px] 3xl:gap-[18px] grid grid-cols-2 min-h-[auto] mt-[3px] w-[49%]"
                    orientation="horizontal"
                  >
                    <Column className="justify-start mt-[1px] w-[100%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Profile Country
                      </Text>
                      <SelectBox
                        className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaCountr"
                        placeholder="Choose a Profile Country"
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
                    </Column>
                    <Column className="justify-start mb-[1px] w-[100%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Profile City
                      </Text>
                      <SelectBox
                        className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaCity"
                        placeholder="Choose a Profile City"
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
                    </Column>
                  </List>
                  <Column className="items-center justify-start pt-[3px] w-[24%]">
                    <Column className="justify-start pb-[3px] w-[100%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Show Available Results in a Radius Of
                      </Text>
                      <Row className="items-center justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                        <Switch value={true} className="w-[11%]" />
                        <Stack className="lg:h-[26px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] w-[83%]">
                          <Column className="absolute inset-x-[0] justify-start top-[0] w-[100%]">
                            <Text className="columndistance" variant="body12">
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
                  <Column className="justify-start w-[24%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Profile Earnings
                    </Text>
                    <SelectBox
                      className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ProfileInvestm"
                      placeholder="Choose a Profile Earnings"
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
                <Grid className="lg:gap-[10px] xl:gap-[13px] 2xl:gap-[15px] 3xl:gap-[18px] grid grid-cols-4 lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                  <Column className="justify-start w-[100%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Profile Investments
                    </Text>
                    <SelectBox
                      className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ProfileInvestm One"
                      placeholder="Choose a Profile Investments"
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
                      Profile Points
                    </Text>
                    <SelectBox
                      className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaProfil One"
                      placeholder="Choose a Profile Points"
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
                      Profile Likes
                    </Text>
                    <SelectBox
                      className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaProfil Two"
                      placeholder="Choose a Profile Likes"
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
                      Profile Shares
                    </Text>
                    <SelectBox
                      className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaProfil Three"
                      placeholder="Choose a Profile Shares"
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
                      Profile Followers
                    </Text>
                    <SelectBox
                      className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaProfil Four"
                      placeholder="Choose a Profile Followers"
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
                      Profile Members
                    </Text>
                    <SelectBox
                      className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaProfil Five"
                      placeholder="Choose a Profile Members"
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
                      Profile Customers
                    </Text>
                    <SelectBox
                      className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaProfil Six"
                      placeholder="Choose a Profile Customers"
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
                      Profile Endorsements
                    </Text>
                    <SelectBox
                      className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ProfileInvestm Two"
                      placeholder="Choose a Profile Endorsements"
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
                      Profile Rating
                    </Text>
                    <SelectBox
                      className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaProfil Seven"
                      placeholder="Choose a Profile Rating"
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
                      Profile Tags
                    </Text>
                    <SelectBox
                      className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaProfil Eight"
                      placeholder="Choose a Profile Tags"
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
            className="capitalize font-medium 2xl:ml-[104px] 3xl:ml-[125px] lg:ml-[74px] xl:ml-[93px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[20%]"
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
          <Column className="font-poppins items-center justify-start 2xl:ml-[106px] 3xl:ml-[128px] lg:ml-[75px] xl:ml-[94px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[85%]">
            <Grid className="lg:gap-[20px] xl:gap-[25px] 2xl:gap-[28px] 3xl:gap-[34px] grid grid-cols-3 w-[100%]">
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_image_320X410.png')",
                  }}
                >
                  <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="flex items-center justify-center text-center w-[25%]"
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
                      <div className="bg-transparent capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                        Connect
                      </div>
                    </Button>
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne1"
                      alt="GroupFiftyOne"
                    />
                    <Stack className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] mb-[1px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] pl-[1px] w-[22%]">
                      <Img
                        src="images/img_standardsilver.png"
                        className="StandardPlatin"
                        alt="StandardSilver"
                      />
                    </Stack>
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
                            alt="user"
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
                            alt="arrowdown One"
                          />
                        </Button>
                      </Row>
                    </Column>
                    <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="items-center xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[61%]">
                      <Stack className="lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] w-[75%]">
                        <Row className="absolute h-[max-content] inset-y-[0] items-center justify-evenly left-[0] my-[auto] w-[59%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="clock"
                            alt="calendar"
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
                              alt="star"
                            />
                            <Text className="rowstar" variant="body12">
                              5 (3.2K)
                            </Text>
                          </Row>
                        </Column>
                      </Stack>
                      <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] py-[1px] w-[21%]">
                        <Row className="items-start justify-evenly mb-[1px] w-[100%]">
                          <Img
                            src="images/img_globe.svg"
                            className="clock"
                            alt="globe"
                          />
                          <Text className="rowglobe_one" variant="body10">
                            UAE
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
                          alt="overflowmenu"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="pages">
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
                      alt="GroupFiftyOne One"
                    />
                    <Row className="items-center justify-end mb-[1px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
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
                            alt="user One"
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
                            alt="arrowdown Two"
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
                            alt="calendar One"
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
                              alt="star One"
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
                            alt="globe One"
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
                          alt="overflowmenu One"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_1.png')" }}
                >
                  <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Column className="items-end justify-start w-[30%]">
                      <Column className="items-center justify-start w-[85%]">
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
                          <div className="bg-transparent capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
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
                          <div className="bg-transparent capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                            Endorse
                          </div>
                        </Button>
                      </Column>
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
                        variant="GradientBlue700RedA701"
                      >
                        <div className="bg-transparent capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                          Sponsored
                        </div>
                      </Button>
                    </Column>
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne_One"
                      alt="GroupFiftyOne Two"
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
                            alt="user Two"
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
                    <Row className="items-center xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[61%]">
                      <Stack className="lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] w-[75%]">
                        <Row className="absolute h-[max-content] inset-y-[0] items-center justify-evenly left-[0] my-[auto] w-[59%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="clock"
                            alt="calendar Two"
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
                              alt="star Two"
                            />
                            <Text className="rowstar" variant="body12">
                              5 (3.2K)
                            </Text>
                          </Row>
                        </Column>
                      </Stack>
                      <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] py-[1px] w-[21%]">
                        <Row className="items-start justify-evenly mb-[1px] w-[100%]">
                          <Img
                            src="images/img_globe.svg"
                            className="clock"
                            alt="globe Two"
                          />
                          <Text className="rowglobe_one" variant="body10">
                            KSA
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
                          alt="overflowmenu Two"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_image_320X410.png')",
                  }}
                >
                  <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="flex items-center justify-center text-center w-[25%]"
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
                      <div className="bg-transparent capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                        Connect
                      </div>
                    </Button>
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne1"
                      alt="GroupFiftyOne Three"
                    />
                    <Stack className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] mb-[1px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] pl-[1px] w-[22%]">
                      <Img
                        src="images/img_standardsilver.png"
                        className="StandardPlatin"
                        alt="StandardSilver One"
                      />
                    </Stack>
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
                            alt="arrowdown Four"
                          />
                        </Button>
                      </Row>
                    </Column>
                    <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="items-center xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[61%]">
                      <Stack className="lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] w-[75%]">
                        <Row className="absolute h-[max-content] inset-y-[0] items-center justify-evenly left-[0] my-[auto] w-[59%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="clock"
                            alt="calendar Three"
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
                              alt="star Three"
                            />
                            <Text className="rowstar" variant="body12">
                              5 (3.2K)
                            </Text>
                          </Row>
                        </Column>
                      </Stack>
                      <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] py-[1px] w-[21%]">
                        <Row className="items-start justify-evenly mb-[1px] w-[100%]">
                          <Img
                            src="images/img_globe.svg"
                            className="clock"
                            alt="globe Three"
                          />
                          <Text className="rowglobe_one" variant="body10">
                            UAE
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
              <Column className="pages">
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
                      alt="GroupFiftyOne Four"
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
                            alt="user Four"
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
                            alt="arrowdown Five"
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
                            alt="calendar Four"
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
                            alt="globe Four"
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
                          alt="overflowmenu Four"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_1.png')" }}
                >
                  <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Column className="items-end justify-start w-[30%]">
                      <Column className="items-center justify-start w-[85%]">
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
                          <div className="bg-transparent capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
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
                          <div className="bg-transparent capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                            Endorse
                          </div>
                        </Button>
                      </Column>
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
                        variant="GradientBlue700RedA701"
                      >
                        <div className="bg-transparent capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                          Sponsored
                        </div>
                      </Button>
                    </Column>
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne_One"
                      alt="GroupFiftyOne Five"
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
                            alt="user Five"
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
                            alt="arrowdown Six"
                          />
                        </Button>
                      </Row>
                    </Column>
                    <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="items-center xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[61%]">
                      <Stack className="lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] w-[75%]">
                        <Row className="absolute h-[max-content] inset-y-[0] items-center justify-evenly left-[0] my-[auto] w-[59%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="clock"
                            alt="calendar Five"
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
                              alt="star Five"
                            />
                            <Text className="rowstar" variant="body12">
                              5 (3.2K)
                            </Text>
                          </Row>
                        </Column>
                      </Stack>
                      <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] py-[1px] w-[21%]">
                        <Row className="items-start justify-evenly mb-[1px] w-[100%]">
                          <Img
                            src="images/img_globe.svg"
                            className="clock"
                            alt="globe Five"
                          />
                          <Text className="rowglobe_one" variant="body10">
                            KSA
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
                          alt="overflowmenu Five"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_image_320X410.png')",
                  }}
                >
                  <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="flex items-center justify-center text-center w-[25%]"
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
                      <div className="bg-transparent capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                        Connect
                      </div>
                    </Button>
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne1"
                      alt="GroupFiftyOne Six"
                    />
                    <Stack className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] mb-[1px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] pl-[1px] w-[22%]">
                      <Img
                        src="images/img_standardsilver.png"
                        className="StandardPlatin"
                        alt="StandardSilver Two"
                      />
                    </Stack>
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
                            alt="user Six"
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
                            alt="arrowdown Seven"
                          />
                        </Button>
                      </Row>
                    </Column>
                    <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="items-center xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[61%]">
                      <Stack className="lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] w-[75%]">
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
                              alt="star Six"
                            />
                            <Text className="rowstar" variant="body12">
                              5 (3.2K)
                            </Text>
                          </Row>
                        </Column>
                      </Stack>
                      <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] py-[1px] w-[21%]">
                        <Row className="items-start justify-evenly mb-[1px] w-[100%]">
                          <Img
                            src="images/img_globe.svg"
                            className="clock"
                            alt="globe Six"
                          />
                          <Text className="rowglobe_one" variant="body10">
                            UAE
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
                          alt="overflowmenu Six"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="pages">
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
                      alt="GroupFiftyOne Seven"
                    />
                    <Row className="items-center justify-end mb-[1px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                      <Img
                        src="images/img_vendorsilver.png"
                        className="VendorSilver"
                        alt="VendorSilver Two"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorGold"
                        alt="AmbassadorGold Two"
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
                            alt="user Seven"
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
                            alt="arrowdown Eight"
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
                            alt="calendar Seven"
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
                              alt="star Seven"
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
                            alt="globe Seven"
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
                          alt="overflowmenu Seven"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_1.png')" }}
                >
                  <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Column className="items-end justify-start w-[30%]">
                      <Column className="items-center justify-start w-[85%]">
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
                          <div className="bg-transparent capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
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
                          <div className="bg-transparent capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                            Endorse
                          </div>
                        </Button>
                      </Column>
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
                        variant="GradientBlue700RedA701"
                      >
                        <div className="bg-transparent capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                          Sponsored
                        </div>
                      </Button>
                    </Column>
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne_One"
                      alt="GroupFiftyOne Eight"
                    />
                    <Row className="items-center justify-end mb-[2px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                      <Img
                        src="images/img_vendorplatinum.png"
                        className="VendorPlatinum"
                        alt="VendorPlatinum Two"
                      />
                      <Img
                        src="images/img_ambassadorsilv.png"
                        className="AmbassadorSilv"
                        alt="AmbassadorSilv Two"
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
                            alt="user Eight"
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
                            alt="arrowdown Nine"
                          />
                        </Button>
                      </Row>
                    </Column>
                    <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="items-center xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[61%]">
                      <Stack className="lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] w-[75%]">
                        <Row className="absolute h-[max-content] inset-y-[0] items-center justify-evenly left-[0] my-[auto] w-[59%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="clock"
                            alt="calendar Eight"
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
                              alt="star Eight"
                            />
                            <Text className="rowstar" variant="body12">
                              5 (3.2K)
                            </Text>
                          </Row>
                        </Column>
                      </Stack>
                      <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] py-[1px] w-[21%]">
                        <Row className="items-start justify-evenly mb-[1px] w-[100%]">
                          <Img
                            src="images/img_globe.svg"
                            className="clock"
                            alt="globe Eight"
                          />
                          <Text className="rowglobe_one" variant="body10">
                            KSA
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
                          alt="overflowmenu Eight"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_image_320X410.png')",
                  }}
                >
                  <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="flex items-center justify-center text-center w-[25%]"
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
                      <div className="bg-transparent capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                        Connect
                      </div>
                    </Button>
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne1"
                      alt="GroupFiftyOne Nine"
                    />
                    <Stack className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] mb-[1px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] pl-[1px] w-[22%]">
                      <Img
                        src="images/img_standardsilver.png"
                        className="StandardPlatin"
                        alt="StandardSilver Three"
                      />
                    </Stack>
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
                            alt="user Nine"
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
                            alt="arrowdown Ten"
                          />
                        </Button>
                      </Row>
                    </Column>
                    <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="items-center xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[61%]">
                      <Stack className="lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] w-[75%]">
                        <Row className="absolute h-[max-content] inset-y-[0] items-center justify-evenly left-[0] my-[auto] w-[59%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="clock"
                            alt="calendar Nine"
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
                              alt="star Nine"
                            />
                            <Text className="rowstar" variant="body12">
                              5 (3.2K)
                            </Text>
                          </Row>
                        </Column>
                      </Stack>
                      <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] py-[1px] w-[21%]">
                        <Row className="items-start justify-evenly mb-[1px] w-[100%]">
                          <Img
                            src="images/img_globe.svg"
                            className="clock"
                            alt="globe Nine"
                          />
                          <Text className="rowglobe_one" variant="body10">
                            UAE
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
                          alt="overflowmenu Nine"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="pages">
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
                      alt="GroupFiftyOne Ten"
                    />
                    <Row className="items-center justify-end mb-[1px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                      <Img
                        src="images/img_vendorsilver.png"
                        className="VendorSilver"
                        alt="VendorSilver Three"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorGold"
                        alt="AmbassadorGold Three"
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
                            alt="user Ten"
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
                            alt="arrowdown Eleven"
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
                            alt="calendar Ten"
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
                              alt="star Ten"
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
                            alt="globe Ten"
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
                          alt="overflowmenu Ten"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="pages">
                <Column
                  className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_image_1.png')" }}
                >
                  <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Column className="items-end justify-start w-[30%]">
                      <Column className="items-center justify-start w-[85%]">
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
                          <div className="bg-transparent capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
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
                          <div className="bg-transparent capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                            Endorse
                          </div>
                        </Button>
                      </Column>
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
                        variant="GradientBlue700RedA701"
                      >
                        <div className="bg-transparent capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]">
                          Sponsored
                        </div>
                      </Button>
                    </Column>
                    <Img
                      src="images/img_group51.svg"
                      className="GroupFiftyOne_One"
                      alt="GroupFiftyOne Eleven"
                    />
                    <Row className="items-center justify-end mb-[2px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                      <Img
                        src="images/img_vendorplatinum.png"
                        className="VendorPlatinum"
                        alt="VendorPlatinum Three"
                      />
                      <Img
                        src="images/img_ambassadorsilv.png"
                        className="AmbassadorSilv"
                        alt="AmbassadorSilv Three"
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
                            alt="user Eleven"
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
                            alt="arrowdown Twelve"
                          />
                        </Button>
                      </Row>
                    </Column>
                    <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="items-center xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[61%]">
                      <Stack className="lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] w-[75%]">
                        <Row className="absolute h-[max-content] inset-y-[0] items-center justify-evenly left-[0] my-[auto] w-[59%]">
                          <Img
                            src="images/img_calendar_16X16.svg"
                            className="clock"
                            alt="calendar Eleven"
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
                              alt="star Eleven"
                            />
                            <Text className="rowstar" variant="body12">
                              5 (3.2K)
                            </Text>
                          </Row>
                        </Column>
                      </Stack>
                      <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] py-[1px] w-[21%]">
                        <Row className="items-start justify-evenly mb-[1px] w-[100%]">
                          <Img
                            src="images/img_globe.svg"
                            className="clock"
                            alt="globe Eleven"
                          />
                          <Text className="rowglobe_one" variant="body10">
                            KSA
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
                          alt="overflowmenu Eleven"
                        />
                      </Button>
                    </Row>
                  </Column>
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
                style={{ backgroundImage: "url('images/img_adv_3.png')" }}
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

export default FaisalDirectoryModuleSearchPageVGuidePersonalProfilePage;
