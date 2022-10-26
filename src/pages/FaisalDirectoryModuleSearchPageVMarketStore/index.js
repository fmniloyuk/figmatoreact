import React from "react";

import {
  Column,
  Text,
  SelectBox,
  Img,
  Row,
  Stack,
  SeekBar,
  List,
  Input,
  Switch,
  Grid,
  Button,
  Line,
} from "components";
import Header1 from "components/Header/Header1";
import Footer1 from "components/Footer/Footer1";

const FaisalDirectoryModuleSearchPageVMarketStorePage = () => {
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
              placeholder="a Store in V-Market"
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
                      Store V-Seller
                    </Text>
                    <SelectBox
                      className="font-normal xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaPostC"
                      placeholder="Choose a Store V-Seller"
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
                  <Row className="items-start justify-between pt-[4px] w-[75%]">
                    <Column className="justify-start mt-[1px] w-[32%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Store Country
                      </Text>
                      <SelectBox
                        className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaCountr"
                        placeholder="Choose a Store Country"
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
                    <Column className="justify-start w-[32%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Store City
                      </Text>
                      <SelectBox
                        className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaCity"
                        placeholder="Choose a Store City"
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
                    <Column className="justify-start mt-[1px] pb-[3px] w-[32%]">
                      <Text
                        className="font-bold xl:mr-[11px] 2xl:mr-[12px] 3xl:mr-[14px] lg:mr-[8px] text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Show Available Results in a Radius Of
                      </Text>
                      <Stack className="lg:h-[26px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[33px] xl:ml-[41px] 2xl:ml-[46px] 3xl:ml-[56px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[83%]">
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
                    </Column>
                  </Row>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="items-center justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] w-[100%]">
                    <Column className="w-[24%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Store Starting Date
                      </Text>
                      <Input
                        className="placeholder:text-gray_501 SelectDate"
                        wrapClassName="2xl:mt-[9px] 3xl:mt-[11px] flex lg:mt-[6px] w-[100%] xl:mt-[8px]"
                        name="SelectDate"
                        placeholder="Choose a Post Date"
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
                        Store Category
                      </Text>
                      <SelectBox
                        className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaPostC One"
                        placeholder="Choose a Store Cateogry"
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
                    <Stack className="lg:h-[49px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[83px] w-[24%]">
                      <Switch
                        value={true}
                        className="absolute bottom-[19%] left-[0] w-[11%]"
                      />
                      <Column className="absolute justify-start w-[100%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body10"
                        >
                          Store Sub-Category
                        </Text>
                        <SelectBox
                          className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                          placeholderClassName="text-gray_501"
                          name="ChooseaPostS"
                          placeholder="Choose a Store Sub-Cateogry"
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
                    </Stack>
                    <Column className="mt-[1px] w-[24%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Store Branch
                      </Text>
                      <SelectBox
                        className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaPostB"
                        placeholder="Choose a Store Branch"
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
                  <Grid className="lg:gap-[11px] xl:gap-[14px] 2xl:gap-[16px] 3xl:gap-[19px] grid grid-cols-4 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Store Orders
                      </Text>
                      <SelectBox
                        className="font-normal xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaNoof"
                        placeholder="Choose a Store Order"
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
                        Store Products
                      </Text>
                      <SelectBox
                        className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ProfileInvestm"
                        placeholder="Choose a Store Product"
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
                        Store Likes
                      </Text>
                      <SelectBox
                        className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaGroup"
                        placeholder="Choose a Store Like"
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
                        Store Rating
                      </Text>
                      <SelectBox
                        className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaPostR"
                        placeholder="Choose a Store Rating"
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
                        Store Tags
                      </Text>
                      <SelectBox
                        className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaPostT"
                        placeholder="Choose a Store Tags"
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
                </List>
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
          <Column className="font-poppins items-center justify-start 2xl:ml-[104px] 3xl:ml-[125px] lg:ml-[74px] xl:ml-[93px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[85%]">
            <Grid className="lg:gap-[19px] xl:gap-[24px] 2xl:gap-[27px] 3xl:gap-[33px] grid grid-cols-3 w-[100%]">
              <Stack className="lg:h-[400px] xl:h-[500px] 2xl:h-[563px] 3xl:h-[675px] w-[100%]">
                <Column className="absolute bg-white_A700 border border-gray_201 border-solid items-center justify-end left-[0] xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius10 shadow-bs6 w-[100%]">
                  <Column className="justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[220px] xl:mt-[275px] 2xl:mt-[309px] 3xl:mt-[371px] w-[99%]">
                    <Row className="items-center ml-[1px] w-[54%]">
                      <Button
                        className="flex lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] items-center justify-center rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[34px]"
                        size="mdIcn"
                        variant="icbOutlineBlack90033"
                      >
                        <Img
                          src="images/img_location_30X30.svg"
                          className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                          alt="location"
                        />
                      </Button>
                      <Text className="rowlocation2" variant="body9">
                        {"<Name of The Store>"}
                      </Text>
                    </Row>
                    <Row className="items-start ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[83%]">
                      <Row className="items-center justify-evenly w-[30%]">
                        <Img
                          src="images/img_calendar_16X16.svg"
                          className="clock"
                          alt="calendar"
                        />
                        <Text className="date" variant="body12">
                          15-Oct-2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                        <Img
                          src="images/img_thumbsup.svg"
                          className="clock"
                          alt="thumbsup"
                        />
                        <Text className="likes" variant="body12">
                          0
                        </Text>
                      </Row>
                      <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[17%]">
                        <Img
                          src="images/img_star.svg"
                          className="clock"
                          alt="star"
                        />
                        <Text className="ratings" variant="body12">
                          5(20)
                        </Text>
                      </Row>
                      <Row className="items-center justify-center xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                        <Img
                          src="images/img_share.svg"
                          className="clock"
                          alt="share"
                        />
                        <Text className="shares" variant="body12">
                          320
                        </Text>
                      </Row>
                      <Row className="items-center justify-evenly 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[16%]">
                        <Img
                          src="images/img_megaphone_14X19.svg"
                          className="megaphone"
                          alt="megaphone"
                        />
                        <Text className="rowuser" variant="body12">
                          2.5K
                        </Text>
                      </Row>
                    </Row>
                    <Row className="items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                    <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[41%]">
                      <Row className="items-center justify-between mt-[1px] w-[25%]">
                        <Img
                          src="images/img_download.svg"
                          className="download"
                          alt="download"
                        />
                        <Text className="rowuser" variant="body12">
                          25
                        </Text>
                      </Row>
                      <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] mt-[1px] w-[28%]">
                        <Img
                          src="images/img_volume.svg"
                          className="volume_Six"
                          alt="volume"
                        />
                        <Text className="rowvolume1" variant="body12">
                          120K
                        </Text>
                      </Row>
                      <Column className="items-center justify-end xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] py-[1px] w-[28%]">
                        <Row className="items-center mt-[1px] w-[100%]">
                          <Img
                            src="images/img_mail_15X16.svg"
                            className="volume_Six"
                            alt="mail"
                          />
                          <Text className="rowclock" variant="body12">
                            1.2K
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                          alt="arrowdown One"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Stack
                  className="absolute bg-cover bg-repeat lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] top-[0] w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_group51_320X411.png')",
                  }}
                >
                  <Column className="absolute bg-gradient9  items-end justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] right-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Row className="items-center justify-end mb-[2px] lg:mt-[167px] xl:mt-[210px] 2xl:mt-[236px] 3xl:mt-[283px] w-[24%]">
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
                  <Img
                    src="images/img_group51.svg"
                    className="GroupFifty"
                    alt="GroupFifty"
                  />
                </Stack>
              </Stack>
              <Stack className="lg:h-[400px] xl:h-[500px] 2xl:h-[563px] 3xl:h-[675px] w-[100%]">
                <Column className="absolute bg-white_A700 border border-gray_201 border-solid items-center justify-end left-[0] xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius10 shadow-bs6 w-[100%]">
                  <Column className="justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[220px] xl:mt-[275px] 2xl:mt-[309px] 3xl:mt-[371px] w-[99%]">
                    <Row className="items-center ml-[1px] w-[54%]">
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
                      <Text className="rowlocation2" variant="body9">
                        {"<Name of The Store>"}
                      </Text>
                    </Row>
                    <Row className="items-start ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[83%]">
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
                          2.5K
                        </Text>
                      </Row>
                    </Row>
                    <Row className="items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                    <Row className="items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[41%]">
                      <Row className="items-center justify-evenly mt-[1px] w-[25%]">
                        <Img
                          src="images/img_download.svg"
                          className="download"
                          alt="download One"
                        />
                        <Text className="rowuser" variant="body12">
                          25
                        </Text>
                      </Row>
                      <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] mt-[1px] w-[28%]">
                        <Img
                          src="images/img_volume.svg"
                          className="volume_Six"
                          alt="volume One"
                        />
                        <Text className="rowvolume1" variant="body12">
                          120K
                        </Text>
                      </Row>
                      <Column className="items-center justify-end xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] py-[1px] w-[28%]">
                        <Row className="items-center mt-[1px] w-[100%]">
                          <Img
                            src="images/img_mail_15X16.svg"
                            className="volume_Six"
                            alt="mail One"
                          />
                          <Text className="rowclock" variant="body12">
                            1.2K
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                          alt="arrowdown Two"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Stack
                  className="absolute bg-cover bg-repeat lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] top-[0] w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_group51_320X411.png')",
                  }}
                >
                  <Column className="absolute bg-gradient9  items-end justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] right-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Row className="items-center justify-end mb-[1px] lg:mt-[167px] xl:mt-[210px] 2xl:mt-[236px] 3xl:mt-[283px] w-[24%]">
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
                  <Img
                    src="images/img_group51.svg"
                    className="GroupFifty"
                    alt="GroupFifty One"
                  />
                </Stack>
              </Stack>
              <Stack className="lg:h-[400px] xl:h-[500px] 2xl:h-[563px] 3xl:h-[675px] w-[100%]">
                <Column className="absolute bg-white_A700 border border-gray_201 border-solid items-center justify-end left-[0] xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius10 shadow-bs6 w-[100%]">
                  <Column className="justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[220px] xl:mt-[275px] 2xl:mt-[309px] 3xl:mt-[371px] w-[99%]">
                    <Row className="items-center ml-[1px] w-[54%]">
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
                      <Text className="rowlocation2" variant="body9">
                        {"<Name of The Store>"}
                      </Text>
                    </Row>
                    <Row className="items-start ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[83%]">
                      <Row className="items-center justify-evenly w-[30%]">
                        <Img
                          src="images/img_calendar_16X16.svg"
                          className="clock"
                          alt="calendar Two"
                        />
                        <Text className="date" variant="body12">
                          15-Oct-2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                        <Img
                          src="images/img_thumbsup.svg"
                          className="clock"
                          alt="thumbsup Two"
                        />
                        <Text className="likes" variant="body12">
                          0
                        </Text>
                      </Row>
                      <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[17%]">
                        <Img
                          src="images/img_star.svg"
                          className="clock"
                          alt="star Two"
                        />
                        <Text className="ratings" variant="body12">
                          5(20)
                        </Text>
                      </Row>
                      <Row className="items-center justify-center xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                        <Img
                          src="images/img_share.svg"
                          className="clock"
                          alt="share Two"
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
                    <Row className="items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                    <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[41%]">
                      <Row className="items-center justify-evenly mt-[1px] w-[25%]">
                        <Img
                          src="images/img_download.svg"
                          className="download"
                          alt="download Two"
                        />
                        <Text className="rowuser" variant="body12">
                          25
                        </Text>
                      </Row>
                      <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] mt-[1px] w-[28%]">
                        <Img
                          src="images/img_volume.svg"
                          className="volume_Six"
                          alt="volume Two"
                        />
                        <Text className="rowvolume1" variant="body12">
                          120K
                        </Text>
                      </Row>
                      <Column className="items-center justify-end xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] py-[1px] w-[28%]">
                        <Row className="items-center mt-[1px] w-[100%]">
                          <Img
                            src="images/img_mail_15X16.svg"
                            className="volume_Six"
                            alt="mail Two"
                          />
                          <Text className="rowclock" variant="body12">
                            1.2K
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                          alt="arrowdown Three"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Stack
                  className="absolute bg-cover bg-repeat lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] top-[0] w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_group51_320X411.png')",
                  }}
                >
                  <Column className="absolute bg-gradient9  items-end justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] right-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Row className="items-center justify-end mb-[1px] lg:mt-[167px] xl:mt-[210px] 2xl:mt-[236px] 3xl:mt-[283px] w-[24%]">
                      <Img
                        src="images/img_vendorgold.png"
                        className="VendorSilver"
                        alt="VendorGold"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorGold"
                        alt="AmbassadorGold One"
                      />
                    </Row>
                  </Column>
                  <Img
                    src="images/img_group51.svg"
                    className="GroupFifty"
                    alt="GroupFifty Two"
                  />
                </Stack>
              </Stack>
              <Stack className="lg:h-[400px] xl:h-[500px] 2xl:h-[563px] 3xl:h-[675px] w-[100%]">
                <Column className="absolute bg-white_A700 border border-gray_201 border-solid items-center justify-end left-[0] xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius10 shadow-bs6 w-[100%]">
                  <Column className="justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[220px] xl:mt-[275px] 2xl:mt-[309px] 3xl:mt-[371px] w-[99%]">
                    <Row className="items-center ml-[1px] w-[54%]">
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
                      <Text className="rowlocation2" variant="body9">
                        {"<Name of The Store>"}
                      </Text>
                    </Row>
                    <Row className="items-start ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[83%]">
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
                          alt="megaphone Three"
                        />
                        <Text className="rowuser" variant="body12">
                          2.5K
                        </Text>
                      </Row>
                    </Row>
                    <Row className="items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                    <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[41%]">
                      <Row className="items-center justify-between mt-[1px] w-[25%]">
                        <Img
                          src="images/img_download.svg"
                          className="download"
                          alt="download Three"
                        />
                        <Text className="rowuser" variant="body12">
                          25
                        </Text>
                      </Row>
                      <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] mt-[1px] w-[28%]">
                        <Img
                          src="images/img_volume.svg"
                          className="volume_Six"
                          alt="volume Three"
                        />
                        <Text className="rowvolume1" variant="body12">
                          120K
                        </Text>
                      </Row>
                      <Column className="items-center justify-end xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] py-[1px] w-[28%]">
                        <Row className="items-center mt-[1px] w-[100%]">
                          <Img
                            src="images/img_mail_15X16.svg"
                            className="volume_Six"
                            alt="mail Three"
                          />
                          <Text className="rowclock" variant="body12">
                            1.2K
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                          alt="arrowdown Four"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Stack
                  className="absolute bg-cover bg-repeat lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] top-[0] w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_group51_320X411.png')",
                  }}
                >
                  <Column className="absolute bg-gradient9  items-end justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] right-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Row className="items-center justify-end mb-[2px] lg:mt-[167px] xl:mt-[210px] 2xl:mt-[236px] 3xl:mt-[283px] w-[24%]">
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
                  <Img
                    src="images/img_group51.svg"
                    className="GroupFifty"
                    alt="GroupFifty Three"
                  />
                </Stack>
              </Stack>
              <Stack className="lg:h-[400px] xl:h-[500px] 2xl:h-[563px] 3xl:h-[675px] w-[100%]">
                <Column className="absolute bg-white_A700 border border-gray_201 border-solid items-center justify-end left-[0] xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius10 shadow-bs6 w-[100%]">
                  <Column className="justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[220px] xl:mt-[275px] 2xl:mt-[309px] 3xl:mt-[371px] w-[99%]">
                    <Row className="items-center ml-[1px] w-[54%]">
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
                      <Text className="rowlocation2" variant="body9">
                        {"<Name of The Store>"}
                      </Text>
                    </Row>
                    <Row className="items-start ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[83%]">
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
                          alt="megaphone Four"
                        />
                        <Text className="rowuser" variant="body12">
                          2.5K
                        </Text>
                      </Row>
                    </Row>
                    <Row className="items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                    <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[41%]">
                      <Row className="items-center justify-evenly mt-[1px] w-[25%]">
                        <Img
                          src="images/img_download.svg"
                          className="download"
                          alt="download Four"
                        />
                        <Text className="rowuser" variant="body12">
                          25
                        </Text>
                      </Row>
                      <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] mt-[1px] w-[28%]">
                        <Img
                          src="images/img_volume.svg"
                          className="volume_Six"
                          alt="volume Four"
                        />
                        <Text className="rowvolume1" variant="body12">
                          120K
                        </Text>
                      </Row>
                      <Column className="items-center justify-end xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] py-[1px] w-[28%]">
                        <Row className="items-center mt-[1px] w-[100%]">
                          <Img
                            src="images/img_mail_15X16.svg"
                            className="volume_Six"
                            alt="mail Four"
                          />
                          <Text className="rowclock" variant="body12">
                            1.2K
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                          alt="arrowdown Five"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Stack
                  className="absolute bg-cover bg-repeat lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] top-[0] w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_group51_320X411.png')",
                  }}
                >
                  <Column className="absolute bg-gradient9  items-end justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] right-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Row className="items-center justify-end mb-[1px] lg:mt-[167px] xl:mt-[210px] 2xl:mt-[236px] 3xl:mt-[283px] w-[24%]">
                      <Img
                        src="images/img_vendorsilver.png"
                        className="VendorSilver"
                        alt="VendorSilver One"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorGold"
                        alt="AmbassadorGold Two"
                      />
                    </Row>
                  </Column>
                  <Img
                    src="images/img_group51.svg"
                    className="GroupFifty"
                    alt="GroupFifty Four"
                  />
                </Stack>
              </Stack>
              <Stack className="lg:h-[400px] xl:h-[500px] 2xl:h-[563px] 3xl:h-[675px] w-[100%]">
                <Column className="absolute bg-white_A700 border border-gray_201 border-solid items-center justify-end left-[0] xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius10 shadow-bs6 w-[100%]">
                  <Column className="justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[220px] xl:mt-[275px] 2xl:mt-[309px] 3xl:mt-[371px] w-[99%]">
                    <Row className="items-center ml-[1px] w-[54%]">
                      <Button
                        className="flex lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] items-center justify-center rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[34px]"
                        size="mdIcn"
                        variant="icbOutlineBlack90033"
                      >
                        <Img
                          src="images/img_location_30X30.svg"
                          className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                          alt="location Five"
                        />
                      </Button>
                      <Text className="rowlocation2" variant="body9">
                        {"<Name of The Store>"}
                      </Text>
                    </Row>
                    <Row className="items-start ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[83%]">
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
                          alt="megaphone Five"
                        />
                        <Text className="rowuser" variant="body12">
                          2.5K
                        </Text>
                      </Row>
                    </Row>
                    <Row className="items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                    <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[41%]">
                      <Row className="items-center justify-evenly mt-[1px] w-[25%]">
                        <Img
                          src="images/img_download.svg"
                          className="download"
                          alt="download Five"
                        />
                        <Text className="rowuser" variant="body12">
                          25
                        </Text>
                      </Row>
                      <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] mt-[1px] w-[28%]">
                        <Img
                          src="images/img_volume.svg"
                          className="volume_Six"
                          alt="volume Five"
                        />
                        <Text className="rowvolume1" variant="body12">
                          120K
                        </Text>
                      </Row>
                      <Column className="items-center justify-end xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] py-[1px] w-[28%]">
                        <Row className="items-center mt-[1px] w-[100%]">
                          <Img
                            src="images/img_mail_15X16.svg"
                            className="volume_Six"
                            alt="mail Five"
                          />
                          <Text className="rowclock" variant="body12">
                            1.2K
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                          alt="arrowdown Six"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Stack
                  className="absolute bg-cover bg-repeat lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] top-[0] w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_group51_320X411.png')",
                  }}
                >
                  <Column className="absolute bg-gradient9  items-end justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] right-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Row className="items-center justify-end mb-[1px] lg:mt-[167px] xl:mt-[210px] 2xl:mt-[236px] 3xl:mt-[283px] w-[24%]">
                      <Img
                        src="images/img_vendorgold.png"
                        className="VendorSilver"
                        alt="VendorGold One"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorGold"
                        alt="AmbassadorGold Three"
                      />
                    </Row>
                  </Column>
                  <Img
                    src="images/img_group51.svg"
                    className="GroupFifty"
                    alt="GroupFifty Five"
                  />
                </Stack>
              </Stack>
              <Stack className="lg:h-[400px] xl:h-[500px] 2xl:h-[563px] 3xl:h-[675px] w-[100%]">
                <Column className="absolute bg-white_A700 border border-gray_201 border-solid items-center justify-end left-[0] xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius10 shadow-bs6 w-[100%]">
                  <Column className="justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[220px] xl:mt-[275px] 2xl:mt-[309px] 3xl:mt-[371px] w-[99%]">
                    <Row className="items-center ml-[1px] w-[54%]">
                      <Button
                        className="flex lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] items-center justify-center rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[34px]"
                        size="mdIcn"
                        variant="icbOutlineBlack90033"
                      >
                        <Img
                          src="images/img_location_30X30.svg"
                          className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                          alt="location Six"
                        />
                      </Button>
                      <Text className="rowlocation2" variant="body9">
                        {"<Name of The Store>"}
                      </Text>
                    </Row>
                    <Row className="items-start ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[83%]">
                      <Row className="items-center justify-evenly w-[30%]">
                        <Img
                          src="images/img_calendar_16X16.svg"
                          className="clock"
                          alt="calendar Six"
                        />
                        <Text className="date" variant="body12">
                          15-Oct-2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                        <Img
                          src="images/img_thumbsup.svg"
                          className="clock"
                          alt="thumbsup Six"
                        />
                        <Text className="likes" variant="body12">
                          0
                        </Text>
                      </Row>
                      <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[17%]">
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
                      <Row className="items-center justify-evenly 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[16%]">
                        <Img
                          src="images/img_megaphone_14X19.svg"
                          className="megaphone"
                          alt="megaphone Six"
                        />
                        <Text className="rowuser" variant="body12">
                          2.5K
                        </Text>
                      </Row>
                    </Row>
                    <Row className="items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                    <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[41%]">
                      <Row className="items-center justify-between mt-[1px] w-[25%]">
                        <Img
                          src="images/img_download.svg"
                          className="download"
                          alt="download Six"
                        />
                        <Text className="rowuser" variant="body12">
                          25
                        </Text>
                      </Row>
                      <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] mt-[1px] w-[28%]">
                        <Img
                          src="images/img_volume.svg"
                          className="volume_Six"
                          alt="volume Six"
                        />
                        <Text className="rowvolume1" variant="body12">
                          120K
                        </Text>
                      </Row>
                      <Column className="items-center justify-end xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] py-[1px] w-[28%]">
                        <Row className="items-center mt-[1px] w-[100%]">
                          <Img
                            src="images/img_mail_15X16.svg"
                            className="volume_Six"
                            alt="mail Six"
                          />
                          <Text className="rowclock" variant="body12">
                            1.2K
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                          alt="arrowdown Seven"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Stack
                  className="absolute bg-cover bg-repeat lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] top-[0] w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_group51_320X411.png')",
                  }}
                >
                  <Column className="absolute bg-gradient9  items-end justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] right-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Row className="items-center justify-end mb-[2px] lg:mt-[167px] xl:mt-[210px] 2xl:mt-[236px] 3xl:mt-[283px] w-[24%]">
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
                  <Img
                    src="images/img_group51.svg"
                    className="GroupFifty"
                    alt="GroupFifty Six"
                  />
                </Stack>
              </Stack>
              <Stack className="lg:h-[400px] xl:h-[500px] 2xl:h-[563px] 3xl:h-[675px] w-[100%]">
                <Column className="absolute bg-white_A700 border border-gray_201 border-solid items-center justify-end left-[0] xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius10 shadow-bs6 w-[100%]">
                  <Column className="justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[220px] xl:mt-[275px] 2xl:mt-[309px] 3xl:mt-[371px] w-[99%]">
                    <Row className="items-center ml-[1px] w-[54%]">
                      <Button
                        className="flex lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] items-center justify-center rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[34px]"
                        size="mdIcn"
                        variant="icbOutlineBlack90033"
                      >
                        <Img
                          src="images/img_location_30X30.svg"
                          className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                          alt="location Seven"
                        />
                      </Button>
                      <Text className="rowlocation2" variant="body9">
                        {"<Name of The Store>"}
                      </Text>
                    </Row>
                    <Row className="items-start ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[83%]">
                      <Row className="items-center justify-evenly w-[30%]">
                        <Img
                          src="images/img_calendar_16X16.svg"
                          className="clock"
                          alt="calendar Seven"
                        />
                        <Text className="date" variant="body12">
                          15-Oct-2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                        <Img
                          src="images/img_thumbsup.svg"
                          className="clock"
                          alt="thumbsup Seven"
                        />
                        <Text className="likes" variant="body12">
                          0
                        </Text>
                      </Row>
                      <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[17%]">
                        <Img
                          src="images/img_star.svg"
                          className="clock"
                          alt="star Seven"
                        />
                        <Text className="ratings" variant="body12">
                          5(20)
                        </Text>
                      </Row>
                      <Row className="items-center justify-center xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                        <Img
                          src="images/img_share.svg"
                          className="clock"
                          alt="share Seven"
                        />
                        <Text className="shares" variant="body12">
                          320
                        </Text>
                      </Row>
                      <Row className="items-center justify-evenly 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[16%]">
                        <Img
                          src="images/img_megaphone_14X19.svg"
                          className="megaphone"
                          alt="megaphone Seven"
                        />
                        <Text className="rowuser" variant="body12">
                          2.5K
                        </Text>
                      </Row>
                    </Row>
                    <Row className="items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                    <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[41%]">
                      <Row className="items-center justify-evenly mt-[1px] w-[25%]">
                        <Img
                          src="images/img_download.svg"
                          className="download"
                          alt="download Seven"
                        />
                        <Text className="rowuser" variant="body12">
                          25
                        </Text>
                      </Row>
                      <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] mt-[1px] w-[28%]">
                        <Img
                          src="images/img_volume.svg"
                          className="volume_Six"
                          alt="volume Seven"
                        />
                        <Text className="rowvolume1" variant="body12">
                          120K
                        </Text>
                      </Row>
                      <Column className="items-center justify-end xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] py-[1px] w-[28%]">
                        <Row className="items-center mt-[1px] w-[100%]">
                          <Img
                            src="images/img_mail_15X16.svg"
                            className="volume_Six"
                            alt="mail Seven"
                          />
                          <Text className="rowclock" variant="body12">
                            1.2K
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                          alt="arrowdown Eight"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Stack
                  className="absolute bg-cover bg-repeat lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] top-[0] w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_group51_320X411.png')",
                  }}
                >
                  <Column className="absolute bg-gradient9  items-end justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] right-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Row className="items-center justify-end mb-[1px] lg:mt-[167px] xl:mt-[210px] 2xl:mt-[236px] 3xl:mt-[283px] w-[24%]">
                      <Img
                        src="images/img_vendorsilver.png"
                        className="VendorSilver"
                        alt="VendorSilver Two"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorGold"
                        alt="AmbassadorGold Four"
                      />
                    </Row>
                  </Column>
                  <Img
                    src="images/img_group51.svg"
                    className="GroupFifty"
                    alt="GroupFifty Seven"
                  />
                </Stack>
              </Stack>
              <Stack className="lg:h-[400px] xl:h-[500px] 2xl:h-[563px] 3xl:h-[675px] w-[100%]">
                <Column className="absolute bg-white_A700 border border-gray_201 border-solid items-center justify-end left-[0] xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius10 shadow-bs6 w-[100%]">
                  <Column className="justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[220px] xl:mt-[275px] 2xl:mt-[309px] 3xl:mt-[371px] w-[99%]">
                    <Row className="items-center ml-[1px] w-[54%]">
                      <Button
                        className="flex lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] items-center justify-center rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[34px]"
                        size="mdIcn"
                        variant="icbOutlineBlack90033"
                      >
                        <Img
                          src="images/img_location_30X30.svg"
                          className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                          alt="location Eight"
                        />
                      </Button>
                      <Text className="rowlocation2" variant="body9">
                        {"<Name of The Store>"}
                      </Text>
                    </Row>
                    <Row className="items-start ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[83%]">
                      <Row className="items-center justify-evenly w-[30%]">
                        <Img
                          src="images/img_calendar_16X16.svg"
                          className="clock"
                          alt="calendar Eight"
                        />
                        <Text className="date" variant="body12">
                          15-Oct-2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                        <Img
                          src="images/img_thumbsup.svg"
                          className="clock"
                          alt="thumbsup Eight"
                        />
                        <Text className="likes" variant="body12">
                          0
                        </Text>
                      </Row>
                      <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[17%]">
                        <Img
                          src="images/img_star.svg"
                          className="clock"
                          alt="star Eight"
                        />
                        <Text className="ratings" variant="body12">
                          5(20)
                        </Text>
                      </Row>
                      <Row className="items-center justify-center xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                        <Img
                          src="images/img_share.svg"
                          className="clock"
                          alt="share Eight"
                        />
                        <Text className="shares" variant="body12">
                          320
                        </Text>
                      </Row>
                      <Row className="items-center justify-evenly 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[16%]">
                        <Img
                          src="images/img_megaphone_14X19.svg"
                          className="megaphone"
                          alt="megaphone Eight"
                        />
                        <Text className="rowuser" variant="body12">
                          2.5K
                        </Text>
                      </Row>
                    </Row>
                    <Row className="items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                    <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[41%]">
                      <Row className="items-center justify-evenly mt-[1px] w-[25%]">
                        <Img
                          src="images/img_download.svg"
                          className="download"
                          alt="download Eight"
                        />
                        <Text className="rowuser" variant="body12">
                          25
                        </Text>
                      </Row>
                      <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] mt-[1px] w-[28%]">
                        <Img
                          src="images/img_volume.svg"
                          className="volume_Six"
                          alt="volume Eight"
                        />
                        <Text className="rowvolume1" variant="body12">
                          120K
                        </Text>
                      </Row>
                      <Column className="items-center justify-end xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] py-[1px] w-[28%]">
                        <Row className="items-center mt-[1px] w-[100%]">
                          <Img
                            src="images/img_mail_15X16.svg"
                            className="volume_Six"
                            alt="mail Eight"
                          />
                          <Text className="rowclock" variant="body12">
                            1.2K
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                          alt="arrowdown Nine"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Stack
                  className="absolute bg-cover bg-repeat lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] top-[0] w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_group51_320X411.png')",
                  }}
                >
                  <Column className="absolute bg-gradient9  items-end justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] right-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Row className="items-center justify-end mb-[1px] lg:mt-[167px] xl:mt-[210px] 2xl:mt-[236px] 3xl:mt-[283px] w-[24%]">
                      <Img
                        src="images/img_vendorgold.png"
                        className="VendorSilver"
                        alt="VendorGold Two"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorGold"
                        alt="AmbassadorGold Five"
                      />
                    </Row>
                  </Column>
                  <Img
                    src="images/img_group51.svg"
                    className="GroupFifty"
                    alt="GroupFifty Eight"
                  />
                </Stack>
              </Stack>
              <Stack className="lg:h-[400px] xl:h-[500px] 2xl:h-[563px] 3xl:h-[675px] w-[100%]">
                <Column className="absolute bg-white_A700 border border-gray_201 border-solid items-center justify-end left-[0] xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius10 shadow-bs6 w-[100%]">
                  <Column className="justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[220px] xl:mt-[275px] 2xl:mt-[309px] 3xl:mt-[371px] w-[99%]">
                    <Row className="items-center ml-[1px] w-[54%]">
                      <Button
                        className="flex lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] items-center justify-center rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[34px]"
                        size="mdIcn"
                        variant="icbOutlineBlack90033"
                      >
                        <Img
                          src="images/img_location_30X30.svg"
                          className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                          alt="location Nine"
                        />
                      </Button>
                      <Text className="rowlocation2" variant="body9">
                        {"<Name of The Store>"}
                      </Text>
                    </Row>
                    <Row className="items-start ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[83%]">
                      <Row className="items-center justify-evenly w-[30%]">
                        <Img
                          src="images/img_calendar_16X16.svg"
                          className="clock"
                          alt="calendar Nine"
                        />
                        <Text className="date" variant="body12">
                          15-Oct-2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                        <Img
                          src="images/img_thumbsup.svg"
                          className="clock"
                          alt="thumbsup Nine"
                        />
                        <Text className="likes" variant="body12">
                          0
                        </Text>
                      </Row>
                      <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[17%]">
                        <Img
                          src="images/img_star.svg"
                          className="clock"
                          alt="star Nine"
                        />
                        <Text className="ratings" variant="body12">
                          5(20)
                        </Text>
                      </Row>
                      <Row className="items-center justify-center xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                        <Img
                          src="images/img_share.svg"
                          className="clock"
                          alt="share Nine"
                        />
                        <Text className="shares" variant="body12">
                          320
                        </Text>
                      </Row>
                      <Row className="items-center justify-evenly 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[16%]">
                        <Img
                          src="images/img_megaphone_14X19.svg"
                          className="megaphone"
                          alt="megaphone Nine"
                        />
                        <Text className="rowuser" variant="body12">
                          2.5K
                        </Text>
                      </Row>
                    </Row>
                    <Row className="items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                    <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[41%]">
                      <Row className="items-center justify-between mt-[1px] w-[25%]">
                        <Img
                          src="images/img_download.svg"
                          className="download"
                          alt="download Nine"
                        />
                        <Text className="rowuser" variant="body12">
                          25
                        </Text>
                      </Row>
                      <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] mt-[1px] w-[28%]">
                        <Img
                          src="images/img_volume.svg"
                          className="volume_Six"
                          alt="volume Nine"
                        />
                        <Text className="rowvolume1" variant="body12">
                          120K
                        </Text>
                      </Row>
                      <Column className="items-center justify-end xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] py-[1px] w-[28%]">
                        <Row className="items-center mt-[1px] w-[100%]">
                          <Img
                            src="images/img_mail_15X16.svg"
                            className="volume_Six"
                            alt="mail Nine"
                          />
                          <Text className="rowclock" variant="body12">
                            1.2K
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                          alt="arrowdown Ten"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Stack
                  className="absolute bg-cover bg-repeat lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] top-[0] w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_group51_320X411.png')",
                  }}
                >
                  <Column className="absolute bg-gradient9  items-end justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] right-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Row className="items-center justify-end mb-[2px] lg:mt-[167px] xl:mt-[210px] 2xl:mt-[236px] 3xl:mt-[283px] w-[24%]">
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
                  <Img
                    src="images/img_group51.svg"
                    className="GroupFifty"
                    alt="GroupFifty Nine"
                  />
                </Stack>
              </Stack>
              <Stack className="lg:h-[400px] xl:h-[500px] 2xl:h-[563px] 3xl:h-[675px] w-[100%]">
                <Column className="absolute bg-white_A700 border border-gray_201 border-solid items-center justify-end left-[0] xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius10 shadow-bs6 w-[100%]">
                  <Column className="justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[220px] xl:mt-[275px] 2xl:mt-[309px] 3xl:mt-[371px] w-[99%]">
                    <Row className="items-center ml-[1px] w-[54%]">
                      <Button
                        className="flex lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] items-center justify-center rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[34px]"
                        size="mdIcn"
                        variant="icbOutlineBlack90033"
                      >
                        <Img
                          src="images/img_location_30X30.svg"
                          className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                          alt="location Ten"
                        />
                      </Button>
                      <Text className="rowlocation2" variant="body9">
                        {"<Name of The Store>"}
                      </Text>
                    </Row>
                    <Row className="items-start ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[83%]">
                      <Row className="items-center justify-evenly w-[30%]">
                        <Img
                          src="images/img_calendar_16X16.svg"
                          className="clock"
                          alt="calendar Ten"
                        />
                        <Text className="date" variant="body12">
                          15-Oct-2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                        <Img
                          src="images/img_thumbsup.svg"
                          className="clock"
                          alt="thumbsup Ten"
                        />
                        <Text className="likes" variant="body12">
                          0
                        </Text>
                      </Row>
                      <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[17%]">
                        <Img
                          src="images/img_star.svg"
                          className="clock"
                          alt="star Ten"
                        />
                        <Text className="ratings" variant="body12">
                          5(20)
                        </Text>
                      </Row>
                      <Row className="items-center justify-center xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                        <Img
                          src="images/img_share.svg"
                          className="clock"
                          alt="share Ten"
                        />
                        <Text className="shares" variant="body12">
                          320
                        </Text>
                      </Row>
                      <Row className="items-center justify-evenly 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[16%]">
                        <Img
                          src="images/img_megaphone_14X19.svg"
                          className="megaphone"
                          alt="megaphone Ten"
                        />
                        <Text className="rowuser" variant="body12">
                          2.5K
                        </Text>
                      </Row>
                    </Row>
                    <Row className="items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                    <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[41%]">
                      <Row className="items-center justify-evenly mt-[1px] w-[25%]">
                        <Img
                          src="images/img_download.svg"
                          className="download"
                          alt="download Ten"
                        />
                        <Text className="rowuser" variant="body12">
                          25
                        </Text>
                      </Row>
                      <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] mt-[1px] w-[28%]">
                        <Img
                          src="images/img_volume.svg"
                          className="volume_Six"
                          alt="volume Ten"
                        />
                        <Text className="rowvolume1" variant="body12">
                          120K
                        </Text>
                      </Row>
                      <Column className="items-center justify-end xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] py-[1px] w-[28%]">
                        <Row className="items-center mt-[1px] w-[100%]">
                          <Img
                            src="images/img_mail_15X16.svg"
                            className="volume_Six"
                            alt="mail Ten"
                          />
                          <Text className="rowclock" variant="body12">
                            1.2K
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                          alt="arrowdown Eleven"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Stack
                  className="absolute bg-cover bg-repeat lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] top-[0] w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_group51_320X411.png')",
                  }}
                >
                  <Column className="absolute bg-gradient9  items-end justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] right-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Row className="items-center justify-end mb-[1px] lg:mt-[167px] xl:mt-[210px] 2xl:mt-[236px] 3xl:mt-[283px] w-[24%]">
                      <Img
                        src="images/img_vendorsilver.png"
                        className="VendorSilver"
                        alt="VendorSilver Three"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorGold"
                        alt="AmbassadorGold Six"
                      />
                    </Row>
                  </Column>
                  <Img
                    src="images/img_group51.svg"
                    className="GroupFifty"
                    alt="GroupFifty Ten"
                  />
                </Stack>
              </Stack>
              <Stack className="lg:h-[400px] xl:h-[500px] 2xl:h-[563px] 3xl:h-[675px] w-[100%]">
                <Column className="absolute bg-white_A700 border border-gray_201 border-solid items-center justify-end left-[0] xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius10 shadow-bs6 w-[100%]">
                  <Column className="justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[220px] xl:mt-[275px] 2xl:mt-[309px] 3xl:mt-[371px] w-[99%]">
                    <Row className="items-center ml-[1px] w-[54%]">
                      <Button
                        className="flex lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] items-center justify-center rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[34px]"
                        size="mdIcn"
                        variant="icbOutlineBlack90033"
                      >
                        <Img
                          src="images/img_location_30X30.svg"
                          className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                          alt="location Eleven"
                        />
                      </Button>
                      <Text className="rowlocation2" variant="body9">
                        {"<Name of The Store>"}
                      </Text>
                    </Row>
                    <Row className="items-start ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[83%]">
                      <Row className="items-center justify-evenly w-[30%]">
                        <Img
                          src="images/img_calendar_16X16.svg"
                          className="clock"
                          alt="calendar Eleven"
                        />
                        <Text className="date" variant="body12">
                          15-Oct-2022
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                        <Img
                          src="images/img_thumbsup.svg"
                          className="clock"
                          alt="thumbsup Eleven"
                        />
                        <Text className="likes" variant="body12">
                          0
                        </Text>
                      </Row>
                      <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[17%]">
                        <Img
                          src="images/img_star.svg"
                          className="clock"
                          alt="star Eleven"
                        />
                        <Text className="ratings" variant="body12">
                          5(20)
                        </Text>
                      </Row>
                      <Row className="items-center justify-center xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                        <Img
                          src="images/img_share.svg"
                          className="clock"
                          alt="share Eleven"
                        />
                        <Text className="shares" variant="body12">
                          320
                        </Text>
                      </Row>
                      <Row className="items-center justify-evenly 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[16%]">
                        <Img
                          src="images/img_megaphone_14X19.svg"
                          className="megaphone"
                          alt="megaphone Eleven"
                        />
                        <Text className="rowuser" variant="body12">
                          2.5K
                        </Text>
                      </Row>
                    </Row>
                    <Row className="items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                    <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Row className="items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[41%]">
                      <Row className="items-center justify-evenly mt-[1px] w-[25%]">
                        <Img
                          src="images/img_download.svg"
                          className="download"
                          alt="download Eleven"
                        />
                        <Text className="rowuser" variant="body12">
                          25
                        </Text>
                      </Row>
                      <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] mt-[1px] w-[28%]">
                        <Img
                          src="images/img_volume.svg"
                          className="volume_Six"
                          alt="volume Eleven"
                        />
                        <Text className="rowvolume1" variant="body12">
                          120K
                        </Text>
                      </Row>
                      <Column className="items-center justify-end xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] py-[1px] w-[28%]">
                        <Row className="items-center mt-[1px] w-[100%]">
                          <Img
                            src="images/img_mail_15X16.svg"
                            className="volume_Six"
                            alt="mail Eleven"
                          />
                          <Text className="rowclock" variant="body12">
                            1.2K
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                          alt="arrowdown Twelve"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Stack
                  className="absolute bg-cover bg-repeat lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] top-[0] w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_group51_320X411.png')",
                  }}
                >
                  <Column className="absolute bg-gradient9  items-end justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] right-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Row className="items-center justify-end mb-[1px] lg:mt-[167px] xl:mt-[210px] 2xl:mt-[236px] 3xl:mt-[283px] w-[24%]">
                      <Img
                        src="images/img_vendorgold.png"
                        className="VendorSilver"
                        alt="VendorGold Three"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorGold"
                        alt="AmbassadorGold Seven"
                      />
                    </Row>
                  </Column>
                  <Img
                    src="images/img_group51.svg"
                    className="GroupFifty"
                    alt="GroupFifty Eleven"
                  />
                </Stack>
              </Stack>
            </Grid>
          </Column>
          <Line className="bg-black_900_0c h-[1px] xl:ml-[110px] 2xl:ml-[123px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[85%]" />
          <Button
            className="2xl:ml-[649px] 2xl:mt-[18px] 3xl:ml-[779px] 3xl:mt-[21px] flex items-center justify-center lg:ml-[461px] lg:mt-[12px] text-center w-[10%] xl:ml-[577px] xl:mt-[16px]"
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
                style={{ backgroundImage: "url('images/img_adv_11.png')" }}
              >
                <Img
                  src="images/img_call_22X18.png"
                  className="call"
                  alt="call Four"
                />
              </Stack>
            </List>
          </Column>
          <Footer1 className="font-poppins lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default FaisalDirectoryModuleSearchPageVMarketStorePage;
