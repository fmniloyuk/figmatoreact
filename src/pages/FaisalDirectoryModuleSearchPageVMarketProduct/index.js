import React from "react";

import {
  Column,
  Text,
  SelectBox,
  Img,
  Row,
  Button,
  List,
  Switch,
  Stack,
  SeekBar,
  Grid,
  Line,
} from "components";
import Header1 from "components/Header/Header1";
import Footer from "components/Footer/Footer";

const FaisalDirectoryModuleSearchPageVMarketProductPage = () => {
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
              placeholder="a Product in V-Market"
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
              <Column className="items-center justify-start mt-[1px] w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Column className="items-center w-[24%]">
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Product V-Seller
                      </Text>
                      <SelectBox
                        className="font-normal xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaVExpe"
                        placeholder="Choose a Product V-Seller"
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
                    <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Product Publishing Date
                      </Text>
                      <Button
                        className="2xl:mt-[9px] 3xl:mt-[11px] flex items-center justify-center lg:mt-[6px] text-center w-[100%] xl:mt-[8px]"
                        rightIcon={
                          <Img
                            src="images/img_calendar.svg"
                            className="text-center lg:w-[10px] lg:h-[11px] lg:ml-[8px] xl:w-[13px] xl:h-[14px] xl:ml-[11px] 2xl:w-[15px] 2xl:h-[16px] 2xl:ml-[12px] 3xl:w-[18px] 3xl:h-[19px] 3xl:ml-[14px]"
                            alt="calendar"
                          />
                        }
                        shape="RoundedBorder4"
                        size="lg"
                        variant="OutlineBlack900201_2"
                      >
                        <div className="bg-transparent font-normal not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501">
                          Choose a Product Publishing Date
                        </div>
                      </Button>
                    </Column>
                  </Column>
                  <Column className="w-[49%]">
                    <Row className="items-start ml-[2px] w-[67%]">
                      <Text
                        className="font-bold my-[1px] text-black_900 w-[auto]"
                        variant="body10"
                      >
                        V-Seller Country
                      </Text>
                      <Text
                        className="font-bold lg:ml-[126px] xl:ml-[158px] 2xl:ml-[178px] 3xl:ml-[213px] text-black_900 w-[auto]"
                        variant="body10"
                      >
                        V-Seller City
                      </Text>
                    </Row>
                    <List
                      className="lg:gap-[11px] xl:gap-[14px] 2xl:gap-[16px] 3xl:gap-[19px] grid grid-cols-2 min-h-[auto] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]"
                      orientation="horizontal"
                    >
                      <Column className="items-center justify-start w-[100%]">
                        <SelectBox
                          className="font-normal not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                          placeholderClassName="text-gray_501"
                          name="ChooseaCountr"
                          placeholder="Choose a V-Seller Country"
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
                        <Column className="items-center justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] w-[100%]">
                          <Column className="justify-start w-[100%]">
                            <Text
                              className="font-bold text-black_900 w-[auto]"
                              variant="body10"
                            >
                              Product Category
                            </Text>
                            <SelectBox
                              className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                              placeholderClassName="text-gray_501"
                              name="ChooseaPostC"
                              placeholder="Choose a Product Cateogry"
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
                      <Column className="items-center justify-start w-[100%]">
                        <SelectBox
                          className="font-normal not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[99%]"
                          placeholderClassName="text-gray_501"
                          name="ChooseaCity"
                          placeholder="Choose a V-Seller City"
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
                        <Column className="items-center justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] w-[99%]">
                          <Column className="justify-start w-[100%]">
                            <Text
                              className="font-bold text-black_900 w-[auto]"
                              variant="body10"
                            >
                              Product Sub-Category
                            </Text>
                            <SelectBox
                              className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                              placeholderClassName="text-gray_501"
                              name="ChooseaPostS"
                              placeholder="Choose a Product Sub-Cateogry"
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
                    </List>
                  </Column>
                  <Column className="items-center w-[24%]">
                    <Column className="items-center justify-start pb-[3px] w-[100%]">
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
                    <Column className="justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] w-[100%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body10"
                      >
                        Product Branch
                      </Text>
                      <SelectBox
                        className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                        placeholderClassName="text-gray_501"
                        name="ChooseaPostB"
                        placeholder="Choose a Product Branch"
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
                  </Column>
                </Row>
                <Grid className="lg:gap-[11px] xl:gap-[14px] 2xl:gap-[16px] 3xl:gap-[19px] grid grid-cols-4 lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                  <Column className="justify-start w-[100%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Product Attributes
                    </Text>
                    <SelectBox
                      className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaPostC One"
                      placeholder="Choose a Product Attributes"
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
                      Product Store
                    </Text>
                    <SelectBox
                      className="font-normal xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaPostS One"
                      placeholder="Choose a Product Store"
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
                      Product Orders
                    </Text>
                    <SelectBox
                      className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaGroup"
                      placeholder="Choose a Product Orders"
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
                      Product Likes
                    </Text>
                    <SelectBox
                      className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaNoof"
                      placeholder="Choose a Product Likes"
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
                      Product Shares
                    </Text>
                    <SelectBox
                      className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaNoof One"
                      placeholder="Choose a Product Shares"
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
                      Product Ratings
                    </Text>
                    <SelectBox
                      className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaPostR"
                      placeholder="Choose a Product Rating"
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
                      Product Tags
                    </Text>
                    <SelectBox
                      className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                      placeholderClassName="text-gray_501"
                      name="ChooseaPostT"
                      placeholder="Choose a Product Tags"
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
              name="aProductinV"
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
          <Column className="font-poppins items-center justify-start 2xl:ml-[108px] 3xl:ml-[130px] lg:ml-[77px] xl:ml-[96px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[85%]">
            <Grid className="lg:gap-[20px] xl:gap-[25px] 2xl:gap-[28px] 3xl:gap-[34px] grid grid-cols-3 w-[100%]">
              <Column className="pages">
                <Stack className="lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] w-[100%]">
                  <Img
                    src="images/img_image29.png"
                    className="imageTwentyNine"
                    alt="imageTwentyNine"
                  />
                  <Column className="absolute bg-gradient9  items-end justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[14%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientDeeporangeA400Pink900"
                    >
                      Buy
                    </Button>
                    <Row className="items-center justify-end mb-[1px] ml-[auto] lg:mt-[151px] xl:mt-[189px] 2xl:mt-[213px] 3xl:mt-[256px] w-[24%]">
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
                </Stack>
                <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                  <Row className="items-center w-[60%]">
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
                      {"<Name of The Product>"}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[67%]">
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
                        alt="overflowmenu"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                  <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
                    <Row className="items-center justify-between w-[30%]">
                      <Column className="items-center w-[57%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_volume.svg"
                            className="clock"
                            alt="volume"
                          />
                          <Text
                            className="font-bold text-bluegray_400 w-[auto]"
                            variant="body12"
                          >
                            <span className="text-red_A701 font-poppins font-normal line-through not-italic lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                              49
                            </span>
                            <span className="text-bluegray_400 font-poppins font-normal not-italic lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                              {" "}
                              -{" "}
                            </span>
                            <span className="text-green_A700 font-poppins font-normal not-italic lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                              39
                            </span>
                          </Text>
                        </Row>
                      </Column>
                      <Column className="items-center w-[30%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_iconboxes1.svg"
                            className="clock"
                            alt="iconboxesOne"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between w-[46%]">
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[49%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="OutlineGreenA700"
                      >
                        Discount
                      </Button>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[45%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientTeal800GreenA700"
                      >
                        In Stock
                      </Button>
                    </Row>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                        alt="arrowdown One"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Stack className="lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] w-[100%]">
                  <Img
                    src="images/img_image29.png"
                    className="imageTwentyNine"
                    alt="imageTwentyNine One"
                  />
                  <Column className="absolute bg-gradient9  items-end justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[20%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientBlue700Indigo900"
                    >
                      Re-buy
                    </Button>
                    <Row className="items-center justify-end mb-[2px] ml-[auto] lg:mt-[151px] xl:mt-[189px] 2xl:mt-[213px] 3xl:mt-[256px] w-[24%]">
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
                </Stack>
                <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[94%]">
                  <Row className="items-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] w-[59%]">
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
                    <Text className="rowlocation_one_four" variant="body9">
                      {"<Name of The Product>"}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[66%]">
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
                  <Row className="items-center ml-[4px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[79%]">
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
                  <Line className="bg-black_900_20 h-[1px] ml-[4px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                  <Row className="items-center justify-between lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[98%]">
                    <Row className="items-center justify-between w-[24%]">
                      <Column className="items-center w-[41%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_volume.svg"
                            className="clock"
                            alt="volume One"
                          />
                          <Text className="rowuser" variant="body12">
                            50
                          </Text>
                        </Row>
                      </Column>
                      <Column className="items-center w-[38%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_iconboxes1.svg"
                            className="clock"
                            alt="iconboxesOne One"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between w-[52%]">
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[40%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="OutlineBlue7001_2"
                      >
                        Regular
                      </Button>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[55%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientDeeporangeA400Pink900"
                      >
                        Out of Stock
                      </Button>
                    </Row>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] ml-[4px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                  <Row className="items-center justify-between lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
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
                        alt="arrowdown Two"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Stack className="lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] w-[100%]">
                  <Img
                    src="images/img_image29.png"
                    className="imageTwentyNine"
                    alt="imageTwentyNine Two"
                  />
                  <Column className="absolute bg-gradient9  items-end justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[14%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientDeeporangeA400Pink900"
                    >
                      Buy
                    </Button>
                    <Row className="items-center justify-end mb-[1px] ml-[auto] lg:mt-[151px] xl:mt-[189px] 2xl:mt-[213px] 3xl:mt-[256px] w-[24%]">
                      <Img
                        src="images/img_vendorsilver.png"
                        className="VendorSilver"
                        alt="VendorSilver"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorGold"
                        alt="AmbassadorGold One"
                      />
                    </Row>
                  </Column>
                </Stack>
                <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                  <Row className="items-start w-[60%]">
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
                    <Text className="rowlocation_one_four" variant="body9">
                      {"<Name of The Product>"}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[67%]">
                    <Row className="items-center justify-evenly w-[37%]">
                      <Img
                        src="images/img_calendar_16X16.svg"
                        className="clock"
                        alt="calendar Three"
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
                        alt="overflowmenu Two"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                  <Row className="items-center justify-between ml-[1px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
                    <Row className="items-center justify-between w-[25%]">
                      <Row className="items-center justify-evenly w-[52%]">
                        <Img
                          src="images/img_volume.svg"
                          className="clock"
                          alt="volume Two"
                        />
                        <Text className="rowuser" variant="body12">
                          1,000
                        </Text>
                      </Row>
                      <Column className="items-center w-[35%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_iconboxes1.svg"
                            className="clock"
                            alt="iconboxesOne Two"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between w-[47%]">
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[34%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="OutlineGreenA7001_2"
                      >
                        Offer
                      </Button>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[60%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientDeeporangeA400Pink900"
                      >
                        Out of Stock
                      </Button>
                    </Row>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                <Stack className="lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] w-[100%]">
                  <Img
                    src="images/img_image29.png"
                    className="imageTwentyNine"
                    alt="imageTwentyNine Three"
                  />
                  <Column className="absolute bg-gradient9  items-end justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[14%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientDeeporangeA400Pink900"
                    >
                      Buy
                    </Button>
                    <Row className="items-center justify-end mb-[1px] ml-[auto] lg:mt-[151px] xl:mt-[189px] 2xl:mt-[213px] 3xl:mt-[256px] w-[24%]">
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
                </Stack>
                <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                  <Row className="items-center w-[60%]">
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
                      {"<Name of The Product>"}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[67%]">
                    <Row className="items-center justify-evenly w-[37%]">
                      <Img
                        src="images/img_calendar_16X16.svg"
                        className="clock"
                        alt="calendar Four"
                      />
                      <Text className="date" variant="body12">
                        15-Oct-2022
                      </Text>
                    </Row>
                    <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[11%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="clock"
                        alt="thumbsup Three"
                      />
                      <Text className="likes" variant="body12">
                        0
                      </Text>
                    </Row>
                    <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[21%]">
                      <Img
                        src="images/img_star.svg"
                        className="clock"
                        alt="star Three"
                      />
                      <Text className="ratings" variant="body12">
                        5(20)
                      </Text>
                    </Row>
                    <Row className="items-center justify-evenly xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[17%]">
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
                        alt="overflowmenu Three"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                  <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
                    <Row className="items-center justify-between w-[30%]">
                      <Column className="items-center w-[57%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_volume.svg"
                            className="clock"
                            alt="volume Three"
                          />
                          <Text
                            className="font-bold text-bluegray_400 w-[auto]"
                            variant="body12"
                          >
                            <span className="text-red_A701 font-poppins font-normal line-through not-italic lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                              49
                            </span>
                            <span className="text-bluegray_400 font-poppins font-normal not-italic lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                              {" "}
                              -{" "}
                            </span>
                            <span className="text-green_A700 font-poppins font-normal not-italic lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                              39
                            </span>
                          </Text>
                        </Row>
                      </Column>
                      <Column className="items-center w-[30%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_iconboxes1.svg"
                            className="clock"
                            alt="iconboxesOne Three"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between w-[46%]">
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[49%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="OutlineGreenA700"
                      >
                        Discount
                      </Button>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[45%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientTeal800GreenA700"
                      >
                        In Stock
                      </Button>
                    </Row>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                        alt="arrowdown Four"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Stack className="lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] w-[100%]">
                  <Img
                    src="images/img_image29.png"
                    className="imageTwentyNine"
                    alt="imageTwentyNine Four"
                  />
                  <Column className="absolute bg-gradient9  items-end justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[20%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientBlue700Indigo900"
                    >
                      Re-buy
                    </Button>
                    <Row className="items-center justify-end mb-[2px] ml-[auto] lg:mt-[151px] xl:mt-[189px] 2xl:mt-[213px] 3xl:mt-[256px] w-[24%]">
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
                </Stack>
                <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[94%]">
                  <Row className="items-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] w-[59%]">
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
                    <Text className="rowlocation_one_four" variant="body9">
                      {"<Name of The Product>"}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[66%]">
                    <Row className="items-center justify-evenly w-[37%]">
                      <Img
                        src="images/img_calendar_16X16.svg"
                        className="clock"
                        alt="calendar Five"
                      />
                      <Text className="date" variant="body12">
                        15-Oct-2022
                      </Text>
                    </Row>
                    <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[11%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="clock"
                        alt="thumbsup Four"
                      />
                      <Text className="likes" variant="body12">
                        0
                      </Text>
                    </Row>
                    <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[21%]">
                      <Img
                        src="images/img_star.svg"
                        className="clock"
                        alt="star Four"
                      />
                      <Text className="ratings" variant="body12">
                        5(20)
                      </Text>
                    </Row>
                    <Row className="items-center justify-evenly xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[17%]">
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
                  <Row className="items-center ml-[4px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[79%]">
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
                  <Line className="bg-black_900_20 h-[1px] ml-[4px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                  <Row className="items-center justify-between lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[98%]">
                    <Row className="items-center justify-between w-[24%]">
                      <Column className="items-center w-[41%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_volume.svg"
                            className="clock"
                            alt="volume Four"
                          />
                          <Text className="rowuser" variant="body12">
                            50
                          </Text>
                        </Row>
                      </Column>
                      <Column className="items-center w-[38%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_iconboxes1.svg"
                            className="clock"
                            alt="iconboxesOne Four"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between w-[52%]">
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[40%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="OutlineBlue7001_2"
                      >
                        Regular
                      </Button>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[55%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientDeeporangeA400Pink900"
                      >
                        Out of Stock
                      </Button>
                    </Row>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] ml-[4px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                  <Row className="items-center justify-between lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
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
                        alt="arrowdown Five"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Stack className="lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] w-[100%]">
                  <Img
                    src="images/img_image29.png"
                    className="imageTwentyNine"
                    alt="imageTwentyNine Five"
                  />
                  <Column className="absolute bg-gradient9  items-end justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[14%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientDeeporangeA400Pink900"
                    >
                      Buy
                    </Button>
                    <Row className="items-center justify-end mb-[1px] ml-[auto] lg:mt-[151px] xl:mt-[189px] 2xl:mt-[213px] 3xl:mt-[256px] w-[24%]">
                      <Img
                        src="images/img_vendorsilver.png"
                        className="VendorSilver"
                        alt="VendorSilver One"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorGold"
                        alt="AmbassadorGold Three"
                      />
                    </Row>
                  </Column>
                </Stack>
                <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                  <Row className="items-start w-[60%]">
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
                    <Text className="rowlocation_one_four" variant="body9">
                      {"<Name of The Product>"}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[67%]">
                    <Row className="items-center justify-evenly w-[37%]">
                      <Img
                        src="images/img_calendar_16X16.svg"
                        className="clock"
                        alt="calendar Six"
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
                        alt="share Five"
                      />
                      <Text className="shares1" variant="body12">
                        320
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
                  <Row className="items-center justify-between ml-[1px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
                    <Row className="items-center justify-between w-[25%]">
                      <Row className="items-center justify-evenly w-[52%]">
                        <Img
                          src="images/img_volume.svg"
                          className="clock"
                          alt="volume Five"
                        />
                        <Text className="rowuser" variant="body12">
                          1,000
                        </Text>
                      </Row>
                      <Column className="items-center w-[35%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_iconboxes1.svg"
                            className="clock"
                            alt="iconboxesOne Five"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between w-[47%]">
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[34%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="OutlineGreenA7001_2"
                      >
                        Offer
                      </Button>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[60%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientDeeporangeA400Pink900"
                      >
                        Out of Stock
                      </Button>
                    </Row>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                        alt="arrowdown Six"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Stack className="lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] w-[100%]">
                  <Img
                    src="images/img_image29.png"
                    className="imageTwentyNine"
                    alt="imageTwentyNine Six"
                  />
                  <Column className="absolute bg-gradient9  items-end justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[14%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientDeeporangeA400Pink900"
                    >
                      Buy
                    </Button>
                    <Row className="items-center justify-end mb-[1px] ml-[auto] lg:mt-[151px] xl:mt-[189px] 2xl:mt-[213px] 3xl:mt-[256px] w-[24%]">
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
                </Stack>
                <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                  <Row className="items-center w-[60%]">
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
                      {"<Name of The Product>"}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[67%]">
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
                        alt="share Six"
                      />
                      <Text className="shares1" variant="body12">
                        320
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
                        alt="overflowmenu Six"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                  <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
                    <Row className="items-center justify-between w-[30%]">
                      <Column className="items-center w-[57%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_volume.svg"
                            className="clock"
                            alt="volume Six"
                          />
                          <Text
                            className="font-bold text-bluegray_400 w-[auto]"
                            variant="body12"
                          >
                            <span className="text-red_A701 font-poppins font-normal line-through not-italic lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                              49
                            </span>
                            <span className="text-bluegray_400 font-poppins font-normal not-italic lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                              {" "}
                              -{" "}
                            </span>
                            <span className="text-green_A700 font-poppins font-normal not-italic lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                              39
                            </span>
                          </Text>
                        </Row>
                      </Column>
                      <Column className="items-center w-[30%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_iconboxes1.svg"
                            className="clock"
                            alt="iconboxesOne Six"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between w-[46%]">
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[49%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="OutlineGreenA700"
                      >
                        Discount
                      </Button>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[45%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientTeal800GreenA700"
                      >
                        In Stock
                      </Button>
                    </Row>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                        alt="arrowdown Seven"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Stack className="lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] w-[100%]">
                  <Img
                    src="images/img_image29.png"
                    className="imageTwentyNine"
                    alt="imageTwentyNine Seven"
                  />
                  <Column className="absolute bg-gradient9  items-end justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[20%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientBlue700Indigo900"
                    >
                      Re-buy
                    </Button>
                    <Row className="items-center justify-end mb-[2px] ml-[auto] lg:mt-[151px] xl:mt-[189px] 2xl:mt-[213px] 3xl:mt-[256px] w-[24%]">
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
                </Stack>
                <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[94%]">
                  <Row className="items-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] w-[59%]">
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
                    <Text className="rowlocation_one_four" variant="body9">
                      {"<Name of The Product>"}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[66%]">
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
                        alt="share Seven"
                      />
                      <Text className="shares1" variant="body12">
                        320
                      </Text>
                    </Row>
                  </Row>
                  <Row className="items-center ml-[4px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[79%]">
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
                  <Line className="bg-black_900_20 h-[1px] ml-[4px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                  <Row className="items-center justify-between lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[98%]">
                    <Row className="items-center justify-between w-[24%]">
                      <Column className="items-center w-[41%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_volume.svg"
                            className="clock"
                            alt="volume Seven"
                          />
                          <Text className="rowuser" variant="body12">
                            50
                          </Text>
                        </Row>
                      </Column>
                      <Column className="items-center w-[38%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_iconboxes1.svg"
                            className="clock"
                            alt="iconboxesOne Seven"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between w-[52%]">
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[40%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="OutlineBlue7001_2"
                      >
                        Regular
                      </Button>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[55%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientDeeporangeA400Pink900"
                      >
                        Out of Stock
                      </Button>
                    </Row>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] ml-[4px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                  <Row className="items-center justify-between lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
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
                        alt="arrowdown Eight"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Stack className="lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] w-[100%]">
                  <Img
                    src="images/img_image29.png"
                    className="imageTwentyNine"
                    alt="imageTwentyNine Eight"
                  />
                  <Column className="absolute bg-gradient9  items-end justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[14%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientDeeporangeA400Pink900"
                    >
                      Buy
                    </Button>
                    <Row className="items-center justify-end mb-[1px] ml-[auto] lg:mt-[151px] xl:mt-[189px] 2xl:mt-[213px] 3xl:mt-[256px] w-[24%]">
                      <Img
                        src="images/img_vendorsilver.png"
                        className="VendorSilver"
                        alt="VendorSilver Two"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorGold"
                        alt="AmbassadorGold Five"
                      />
                    </Row>
                  </Column>
                </Stack>
                <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                  <Row className="items-start w-[60%]">
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
                    <Text className="rowlocation_one_four" variant="body9">
                      {"<Name of The Product>"}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[67%]">
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
                        alt="thumbsup Eight"
                      />
                      <Text className="likes" variant="body12">
                        0
                      </Text>
                    </Row>
                    <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[21%]">
                      <Img
                        src="images/img_star.svg"
                        className="clock"
                        alt="star Eight"
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
                        alt="overflowmenu Eight"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                  <Row className="items-center justify-between ml-[1px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
                    <Row className="items-center justify-between w-[25%]">
                      <Row className="items-center justify-evenly w-[52%]">
                        <Img
                          src="images/img_volume.svg"
                          className="clock"
                          alt="volume Eight"
                        />
                        <Text className="rowuser" variant="body12">
                          1,000
                        </Text>
                      </Row>
                      <Column className="items-center w-[35%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_iconboxes1.svg"
                            className="clock"
                            alt="iconboxesOne Eight"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between w-[47%]">
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[34%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="OutlineGreenA7001_2"
                      >
                        Offer
                      </Button>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[60%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientDeeporangeA400Pink900"
                      >
                        Out of Stock
                      </Button>
                    </Row>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                        alt="arrowdown Nine"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Stack className="lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] w-[100%]">
                  <Img
                    src="images/img_image29.png"
                    className="imageTwentyNine"
                    alt="imageTwentyNine Nine"
                  />
                  <Column className="absolute bg-gradient9  items-end justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[14%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientDeeporangeA400Pink900"
                    >
                      Buy
                    </Button>
                    <Row className="items-center justify-end mb-[1px] ml-[auto] lg:mt-[151px] xl:mt-[189px] 2xl:mt-[213px] 3xl:mt-[256px] w-[24%]">
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
                </Stack>
                <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                  <Row className="items-center w-[60%]">
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
                      {"<Name of The Product>"}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[67%]">
                    <Row className="items-center justify-evenly w-[37%]">
                      <Img
                        src="images/img_calendar_16X16.svg"
                        className="clock"
                        alt="calendar Ten"
                      />
                      <Text className="date" variant="body12">
                        15-Oct-2022
                      </Text>
                    </Row>
                    <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[11%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="clock"
                        alt="thumbsup Nine"
                      />
                      <Text className="likes" variant="body12">
                        0
                      </Text>
                    </Row>
                    <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[21%]">
                      <Img
                        src="images/img_star.svg"
                        className="clock"
                        alt="star Nine"
                      />
                      <Text className="ratings" variant="body12">
                        5(20)
                      </Text>
                    </Row>
                    <Row className="items-center justify-evenly xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[17%]">
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
                        alt="overflowmenu Nine"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                  <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
                    <Row className="items-center justify-between w-[30%]">
                      <Column className="items-center w-[57%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_volume.svg"
                            className="clock"
                            alt="volume Nine"
                          />
                          <Text
                            className="font-bold text-bluegray_400 w-[auto]"
                            variant="body12"
                          >
                            <span className="text-red_A701 font-poppins font-normal line-through not-italic lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                              49
                            </span>
                            <span className="text-bluegray_400 font-poppins font-normal not-italic lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                              {" "}
                              -{" "}
                            </span>
                            <span className="text-green_A700 font-poppins font-normal not-italic lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                              39
                            </span>
                          </Text>
                        </Row>
                      </Column>
                      <Column className="items-center w-[30%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_iconboxes1.svg"
                            className="clock"
                            alt="iconboxesOne Nine"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between w-[46%]">
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[49%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="OutlineGreenA700"
                      >
                        Discount
                      </Button>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[45%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientTeal800GreenA700"
                      >
                        In Stock
                      </Button>
                    </Row>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                        alt="arrowdown Ten"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="pages">
                <Stack className="lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] w-[100%]">
                  <Img
                    src="images/img_image29.png"
                    className="imageTwentyNine"
                    alt="imageTwentyNine Ten"
                  />
                  <Column className="absolute bg-gradient9  items-end justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[20%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientBlue700Indigo900"
                    >
                      Re-buy
                    </Button>
                    <Row className="items-center justify-end mb-[2px] ml-[auto] lg:mt-[151px] xl:mt-[189px] 2xl:mt-[213px] 3xl:mt-[256px] w-[24%]">
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
                </Stack>
                <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[94%]">
                  <Row className="items-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] w-[59%]">
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
                    <Text className="rowlocation_one_four" variant="body9">
                      {"<Name of The Product>"}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[66%]">
                    <Row className="items-center justify-evenly w-[37%]">
                      <Img
                        src="images/img_calendar_16X16.svg"
                        className="clock"
                        alt="calendar Eleven"
                      />
                      <Text className="date" variant="body12">
                        15-Oct-2022
                      </Text>
                    </Row>
                    <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[11%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="clock"
                        alt="thumbsup Ten"
                      />
                      <Text className="likes" variant="body12">
                        0
                      </Text>
                    </Row>
                    <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[21%]">
                      <Img
                        src="images/img_star.svg"
                        className="clock"
                        alt="star Ten"
                      />
                      <Text className="ratings" variant="body12">
                        5(20)
                      </Text>
                    </Row>
                    <Row className="items-center justify-evenly xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[17%]">
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
                  <Row className="items-center ml-[4px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[79%]">
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
                  <Line className="bg-black_900_20 h-[1px] ml-[4px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                  <Row className="items-center justify-between lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[98%]">
                    <Row className="items-center justify-between w-[24%]">
                      <Column className="items-center w-[41%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_volume.svg"
                            className="clock"
                            alt="volume Ten"
                          />
                          <Text className="rowuser" variant="body12">
                            50
                          </Text>
                        </Row>
                      </Column>
                      <Column className="items-center w-[38%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_iconboxes1.svg"
                            className="clock"
                            alt="iconboxesOne Ten"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between w-[52%]">
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[40%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="OutlineBlue7001_2"
                      >
                        Regular
                      </Button>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[55%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientDeeporangeA400Pink900"
                      >
                        Out of Stock
                      </Button>
                    </Row>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] ml-[4px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
                  <Row className="items-center justify-between lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
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
                            alt="user Seven"
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
                <Stack className="lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] w-[100%]">
                  <Img
                    src="images/img_image29.png"
                    className="imageTwentyNine"
                    alt="imageTwentyNine Eleven"
                  />
                  <Column className="absolute bg-gradient9  items-end justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                    <Button
                      className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[14%]"
                      shape="CircleBorder12"
                      size="sm"
                      variant="GradientDeeporangeA400Pink900"
                    >
                      Buy
                    </Button>
                    <Row className="items-center justify-end mb-[1px] ml-[auto] lg:mt-[151px] xl:mt-[189px] 2xl:mt-[213px] 3xl:mt-[256px] w-[24%]">
                      <Img
                        src="images/img_vendorsilver.png"
                        className="VendorSilver"
                        alt="VendorSilver Three"
                      />
                      <Img
                        src="images/img_ambassadorgold.png"
                        className="AmbassadorGold"
                        alt="AmbassadorGold Seven"
                      />
                    </Row>
                  </Column>
                </Stack>
                <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                  <Row className="items-start w-[60%]">
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
                    <Text className="rowlocation_one_four" variant="body9">
                      {"<Name of The Product>"}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[67%]">
                    <Row className="items-center justify-evenly w-[37%]">
                      <Img
                        src="images/img_calendar_16X16.svg"
                        className="clock"
                        alt="calendar Twelve"
                      />
                      <Text className="date" variant="body12">
                        15-Oct-2022
                      </Text>
                    </Row>
                    <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[11%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="clock"
                        alt="thumbsup Eleven"
                      />
                      <Text className="likes" variant="body12">
                        0
                      </Text>
                    </Row>
                    <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[21%]">
                      <Img
                        src="images/img_star.svg"
                        className="clock"
                        alt="star Eleven"
                      />
                      <Text className="ratings" variant="body12">
                        5(20)
                      </Text>
                    </Row>
                    <Row className="items-center justify-evenly xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[17%]">
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
                        alt="overflowmenu Eleven"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                  <Row className="items-center justify-between ml-[1px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
                    <Row className="items-center justify-between w-[25%]">
                      <Row className="items-center justify-evenly w-[52%]">
                        <Img
                          src="images/img_volume.svg"
                          className="clock"
                          alt="volume Eleven"
                        />
                        <Text className="rowuser" variant="body12">
                          1,000
                        </Text>
                      </Row>
                      <Column className="items-center w-[35%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Img
                            src="images/img_iconboxes1.svg"
                            className="clock"
                            alt="iconboxesOne Eleven"
                          />
                          <Text className="rowuser" variant="body12">
                            25
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between w-[47%]">
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[34%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="OutlineGreenA7001_2"
                      >
                        Offer
                      </Button>
                      <Button
                        className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[60%]"
                        shape="CircleBorder12"
                        size="sm"
                        variant="GradientDeeporangeA400Pink900"
                      >
                        Out of Stock
                      </Button>
                    </Row>
                  </Row>
                  <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                style={{ backgroundImage: "url('images/img_adv_12.png')" }}
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

export default FaisalDirectoryModuleSearchPageVMarketProductPage;
