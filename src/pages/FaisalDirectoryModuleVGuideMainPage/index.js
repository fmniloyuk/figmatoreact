import React from "react";

import {
  Column,
  Text,
  SelectBox,
  Img,
  List,
  Row,
  Button,
  Line,
  Stack,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const FaisalDirectoryModuleVGuideMainPagePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-prompt items-center justify-start mx-[auto] pt-[2px] w-[100%]">
        <Header className="w-[100%]" />
        <Column className="justify-start lg:mt-[57px] xl:mt-[72px] 2xl:mt-[81px] 3xl:mt-[97px] overflow-auto w-[100%]">
          <Column className="justify-start 2xl:ml-[104px] 3xl:ml-[125px] lg:ml-[74px] xl:ml-[93px] w-[85%]">
            <Text className="Iamlookingfo" variant="body2">
              I'm Looking For
            </Text>
            <SelectBox
              className="font-normal font-poppins lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
              placeholderClassName="text-gray_501"
              name="Group69725"
              placeholder="Choose a Search Item"
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
          <Column className="justify-start 2xl:ml-[104px] 3xl:ml-[125px] lg:ml-[74px] xl:ml-[93px] lg:mt-[33px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] pr-[2px] pt-[2px] w-[56%]">
            <Text className="Iamlookingfo" variant="body2">
              Welcome To V-Guide!
            </Text>
            <Text
              className="font-medium font-poppins lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] text-bluegray_400 w-[auto]"
              variant="body9"
            >
              The Mega Directory Of The Veterinary Industry
            </Text>
          </Column>
          <Column className="items-center justify-start 2xl:ml-[104px] 3xl:ml-[125px] lg:ml-[74px] xl:ml-[93px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[85%]">
            <Column className="justify-start w-[100%]">
              <List
                className="gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <Row className="listrectangle109">
                  <Column className="bg-white_A700 border border-gray_201 border-solid lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[23%]">
                    <Img
                      src="images/img_rectangle109.png"
                      className="Rectangle109"
                      alt="Rectangle109"
                    />
                    <Text className="Item1" variant="body7">
                      Personal Profiles
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border border-gray_201 border-solid lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[23%]">
                    <Img
                      src="images/img_rectangle109_200X300.png"
                      className="Rectangle109"
                      alt="Rectangle109 One"
                    />
                    <Text className="Item1" variant="body7">
                      Business Profiles
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border border-gray_201 border-solid lg:pb-[11px] xl:pb-[14px] 2xl:pb-[16px] 3xl:pb-[19px] rounded-radius10 shadow-bs6 w-[23%]">
                    <Img
                      src="images/img_rectangle109_1.png"
                      className="Rectangle109"
                      alt="Rectangle109 Two"
                    />
                    <Text className="Item13" variant="body7">
                      Blog Posts
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border border-gray_201 border-solid lg:pb-[11px] xl:pb-[14px] 2xl:pb-[16px] 3xl:pb-[19px] rounded-radius10 shadow-bs6 w-[23%]">
                    <Img
                      src="images/img_rectangle109_2.png"
                      className="Rectangle109"
                      alt="Rectangle109 Three"
                    />
                    <Text className="Item13" variant="body7">
                      Social Pages
                    </Text>
                  </Column>
                </Row>
                <Row className="listrectangle109">
                  <Column className="bg-white_A700 border border-gray_201 border-solid lg:pb-[11px] xl:pb-[14px] 2xl:pb-[16px] 3xl:pb-[19px] rounded-radius10 shadow-bs6 w-[23%]">
                    <Img
                      src="images/img_rectangle109_3.png"
                      className="Rectangle109"
                      alt="Rectangle109 One"
                    />
                    <Text className="Item13" variant="body7">
                      Social Groups
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border border-gray_201 border-solid lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[23%]">
                    <Column
                      className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group146.png')",
                      }}
                    >
                      <Column className="bg-black_900_7f items-center justify-end lg:p-[52px] xl:p-[65px] 2xl:p-[73px] 3xl:p-[88px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                        <Button
                          className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center mt-[1px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                          size="lgIcn"
                          variant="icbOutlineWhiteA7001_2"
                        >
                          <Img
                            src="images/img_arrowright_70X70.svg"
                            className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px]"
                            alt="arrowright"
                          />
                        </Button>
                      </Column>
                    </Column>
                    <Text className="Item1" variant="body7">
                      Video Channels
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border border-gray_201 border-solid lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[23%]">
                    <Img
                      src="images/img_rectangle109_4.png"
                      className="Rectangle109"
                      alt="Rectangle109 One One"
                    />
                    <Text className="Item1" variant="body7">
                      Jobs
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border border-gray_201 border-solid lg:pb-[12px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[21px] rounded-radius10 shadow-bs6 w-[23%]">
                    <Img
                      src="images/img_rectangle109_5.png"
                      className="Rectangle109"
                      alt="Rectangle109 Two One"
                    />
                    <Text className="Item7" variant="body7">
                      Courses
                    </Text>
                  </Column>
                </Row>
                <Row className="listrectangle109">
                  <Column className="bg-white_A700 border border-gray_201 border-solid lg:pb-[12px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[21px] rounded-radius10 shadow-bs6 w-[23%]">
                    <Img
                      src="images/img_rectangle109_6.png"
                      className="Rectangle109"
                      alt="Rectangle109 Two"
                    />
                    <Text className="Item7" variant="body7">
                      Stores
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border border-gray_201 border-solid lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[23%]">
                    <Img
                      src="images/img_rectangle109_7.png"
                      className="Rectangle109"
                      alt="Rectangle109 One Two"
                    />
                    <Text className="Item1" variant="body7">
                      Products
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border border-gray_201 border-solid lg:pb-[12px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[21px] rounded-radius10 shadow-bs6 w-[23%]">
                    <Img
                      src="images/img_rectangle109_8.png"
                      className="Rectangle109"
                      alt="Rectangle109 Two Two"
                    />
                    <Text className="Item7" variant="body7">
                      Events
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border border-gray_201 border-solid lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[23%]">
                    <Img
                      src="images/img_rectangle109_9.png"
                      className="Rectangle109"
                      alt="Rectangle109 Three One"
                    />
                    <Text className="Item1" variant="body7">
                      Webinars
                    </Text>
                  </Column>
                </Row>
              </List>
              <Column className="bg-white_A700 border border-gray_201 border-solid justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[23%]">
                <Img
                  src="images/img_rectangle109_10.png"
                  className="Rectangle109"
                  alt="Rectangle109 Three"
                />
                <Text className="Item1" variant="body7">
                  Consultations
                </Text>
              </Column>
            </Column>
          </Column>
          <List
            className="gap-[0] min-h-[auto] lg:mt-[33px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] w-[100%]"
            orientation="vertical"
          >
            <Column className="listline158">
              <Line className="bg-black_900_20 h-[1px] w-[100%]" />
              <Column className="items-center justify-end lg:mt-[33px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[56px] lg:pt-[4px] 2xl:pt-[5px] xl:pt-[5px] 3xl:pt-[6px] w-[85%]">
                <Column className="items-end justify-start w-[100%]">
                  <Row className="items-end justify-end ml-[auto] w-[72%]">
                    <Stack className="3xl:h-[103px] lg:h-[61px] xl:h-[77px] 2xl:h-[86px] w-[60%]">
                      <Text className="HandPicked" as="h1" variant="h1">
                        Hand Picked
                      </Text>
                      <Text className="DiscoverTopCo" variant="body2">
                        Discover Top Countries
                      </Text>
                    </Stack>
                    <Img
                      src="images/img_arrows.svg"
                      className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] mb-[2px] lg:ml-[197px] xl:ml-[246px] 2xl:ml-[277px] 3xl:ml-[332px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[53px] w-[9%]"
                      alt="arrows"
                    />
                  </Row>
                  <Row className="items-center justify-between lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                    <Column
                      className="bg-cover bg-repeat items-center rounded-radius10 w-[23%]"
                      style={{
                        backgroundImage: "url('images/img_cardwithhover.png')",
                      }}
                    >
                      <Column className="bg-black_900_7f items-center justify-end lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius10 w-[100%]">
                        <Row className="font-poppins items-start justify-center 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[28%]">
                          <Img
                            src="images/img_edit.svg"
                            className="edit"
                            alt="edit"
                          />
                          <Text className="editlisting" variant="body12">
                            3 Listings
                          </Text>
                        </Row>
                        <Text
                          className="lg:mt-[207px] xl:mt-[259px] 2xl:mt-[291px] 3xl:mt-[349px] price4"
                          variant="body2"
                        >
                          Egypt
                        </Text>
                      </Column>
                    </Column>
                    <Column
                      className="bg-cover bg-repeat items-center rounded-radius10 w-[23%]"
                      style={{
                        backgroundImage:
                          "url('images/img_cardwithhover_400X300.png')",
                      }}
                    >
                      <Column className="bg-black_900_7f items-center justify-end lg:p-[15px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[26px] rounded-radius10 w-[100%]">
                        <Row className="font-poppins items-start justify-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[29%]">
                          <Img
                            src="images/img_edit.svg"
                            className="edit"
                            alt="edit One"
                          />
                          <Text className="editlisting" variant="body12">
                            3 Listings
                          </Text>
                        </Row>
                        <Text className="columnedit_one" variant="body2">
                          KSA
                        </Text>
                      </Column>
                    </Column>
                    <Column
                      className="bg-cover bg-repeat items-center rounded-radius10 w-[23%]"
                      style={{
                        backgroundImage:
                          "url('images/img_cardwithhover_1.png')",
                      }}
                    >
                      <Column className="bg-black_900_7f items-center justify-end lg:p-[15px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[26px] rounded-radius10 w-[100%]">
                        <Row className="font-poppins items-start justify-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[29%]">
                          <Img
                            src="images/img_edit.svg"
                            className="edit"
                            alt="edit Two"
                          />
                          <Text className="editlisting" variant="body12">
                            3 Listings
                          </Text>
                        </Row>
                        <Text className="columnedit_one" variant="body2">
                          Sudan
                        </Text>
                      </Column>
                    </Column>
                    <Column
                      className="bg-cover bg-repeat items-center rounded-radius10 w-[23%]"
                      style={{
                        backgroundImage:
                          "url('images/img_cardwithhover_2.png')",
                      }}
                    >
                      <Column className="bg-black_900_7f items-center justify-end lg:p-[15px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[26px] rounded-radius10 w-[100%]">
                        <Row className="font-poppins items-start justify-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[29%]">
                          <Img
                            src="images/img_edit.svg"
                            className="edit"
                            alt="edit Three"
                          />
                          <Text className="editlisting" variant="body12">
                            3 Listings
                          </Text>
                        </Row>
                        <Text className="columnedit_one" variant="body2">
                          UAE
                        </Text>
                      </Column>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </Column>
            <Column className="listline158">
              <Line className="bg-black_900_20 h-[1px] w-[100%]" />
              <Column className="items-center justify-end lg:mt-[33px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[56px] lg:pt-[4px] 2xl:pt-[5px] xl:pt-[5px] 3xl:pt-[6px] w-[85%]">
                <Column className="items-end justify-start w-[100%]">
                  <Row className="items-end justify-end ml-[auto] w-[72%]">
                    <Stack className="3xl:h-[103px] lg:h-[61px] xl:h-[77px] 2xl:h-[86px] w-[60%]">
                      <Text className="HandPicked" as="h1" variant="h1">
                        Hand Picked
                      </Text>
                      <Text className="DiscoverTopCo" variant="body2">
                        Discover Top Cities
                      </Text>
                    </Stack>
                    <Img
                      src="images/img_arrows.svg"
                      className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] mb-[2px] lg:ml-[197px] xl:ml-[246px] 2xl:ml-[277px] 3xl:ml-[332px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[53px] w-[9%]"
                      alt="arrows One"
                    />
                  </Row>
                  <Row className="items-center justify-between lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                    <Column
                      className="bg-cover bg-repeat items-center rounded-radius10 w-[23%]"
                      style={{
                        backgroundImage:
                          "url('images/img_cardwithhover_3.png')",
                      }}
                    >
                      <Column className="bg-black_900_7f items-center justify-end lg:p-[15px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[26px] rounded-radius10 w-[100%]">
                        <Row className="font-poppins items-start justify-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[29%]">
                          <Img
                            src="images/img_edit.svg"
                            className="edit"
                            alt="edit One"
                          />
                          <Text className="editlisting" variant="body12">
                            3 Listings
                          </Text>
                        </Row>
                        <Text className="columnedit_one" variant="body2">
                          Cairo
                        </Text>
                      </Column>
                    </Column>
                    <Column
                      className="bg-cover bg-repeat items-center rounded-radius10 w-[23%]"
                      style={{
                        backgroundImage:
                          "url('images/img_cardwithhover_4.png')",
                      }}
                    >
                      <Column className="bg-black_900_7f items-center justify-end lg:p-[15px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[26px] rounded-radius10 w-[100%]">
                        <Row className="font-poppins items-start justify-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[29%]">
                          <Img
                            src="images/img_edit.svg"
                            className="edit"
                            alt="edit One One"
                          />
                          <Text className="editlisting" variant="body12">
                            3 Listings
                          </Text>
                        </Row>
                        <Text className="columnedit_one" variant="body2">
                          Jeddah
                        </Text>
                      </Column>
                    </Column>
                    <Column
                      className="bg-cover bg-repeat items-center rounded-radius10 w-[23%]"
                      style={{
                        backgroundImage:
                          "url('images/img_cardwithhover_5.png')",
                      }}
                    >
                      <Column className="bg-black_900_7f items-center justify-end lg:p-[15px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[26px] rounded-radius10 w-[100%]">
                        <Row className="font-poppins items-start justify-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[29%]">
                          <Img
                            src="images/img_edit.svg"
                            className="edit"
                            alt="edit Two One"
                          />
                          <Text className="editlisting" variant="body12">
                            3 Listings
                          </Text>
                        </Row>
                        <Text className="columnedit_one" variant="body2">
                          Khartoum
                        </Text>
                      </Column>
                    </Column>
                    <Column
                      className="bg-cover bg-repeat items-center rounded-radius10 w-[23%]"
                      style={{
                        backgroundImage:
                          "url('images/img_cardwithhover_6.png')",
                      }}
                    >
                      <Column className="bg-black_900_7f items-center justify-end lg:p-[15px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[26px] rounded-radius10 w-[100%]">
                        <Row className="font-poppins items-start justify-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[29%]">
                          <Img
                            src="images/img_edit.svg"
                            className="edit"
                            alt="edit Three One"
                          />
                          <Text className="editlisting" variant="body12">
                            3 Listings
                          </Text>
                        </Row>
                        <Text className="columnedit_one" variant="body2">
                          Abu Dhabi
                        </Text>
                      </Column>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </Column>
          </List>
          <Column className="items-center justify-start lg:mt-[33px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] w-[100%]">
            <Line className="bg-black_900_20 h-[1px] w-[100%]" />
            <Column className="items-center justify-end lg:mt-[33px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[56px] lg:pt-[4px] 2xl:pt-[5px] xl:pt-[5px] 3xl:pt-[6px] w-[86%]">
              <Stack className="3xl:h-[103px] lg:h-[61px] xl:h-[77px] 2xl:h-[86px] w-[43%]">
                <Text className="HandPicked" as="h1" variant="h1">
                  Hand Picked
                </Text>
                <Text className="MembersProfile" variant="body2">
                  Members Profiles
                </Text>
              </Stack>
              <Column className="font-poppins items-center justify-start lg:mt-[34px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] w-[100%]">
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="listpersonal_profiles">
                    <Row className="items-end justify-between w-[100%]">
                      <Button
                        className="capitalize font-medium lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[14%]"
                        shape="CircleBorder25"
                        size="lg"
                        variant="OutlineBlack90033"
                      >
                        Personal Profiles
                      </Button>
                      <Img
                        src="images/img_arrows.svg"
                        className="arrows_Two"
                        alt="arrows Two"
                      />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[32%]">
                        <Column
                          className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          style={{
                            backgroundImage:
                              "url('images/img_image_320X410.png')",
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
                                  <Text
                                    className="TitleatCompa"
                                    variant="body12"
                                  >
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
                            <Row className="items-center xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[65%]">
                              <Stack className="lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] w-[71%]">
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
                                  alt="overflowmenu"
                                />
                              </Button>
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[32%]">
                        <Column
                          className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_image_1.png')",
                          }}
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
                                  <Text
                                    className="TitleatCompa"
                                    variant="body12"
                                  >
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
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[32%]">
                        <Column
                          className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_image_1.png')",
                          }}
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
                                  <Text
                                    className="TitleatCompa"
                                    variant="body12"
                                  >
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
                              <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] pt-[1px] w-[25%]">
                                <Row className="items-start justify-evenly w-[100%]">
                                  <Img
                                    src="images/img_globe.svg"
                                    className="globe"
                                    alt="globe Two"
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
                                  alt="overflowmenu Two"
                                />
                              </Button>
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                    </Row>
                    <Button
                      className="capitalize font-medium lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[13%]"
                      shape="CircleBorder22"
                      size="lg"
                      variant="OutlineRedA701"
                    >
                      Discover All
                    </Button>
                  </Column>
                  <Column className="listpersonal_profiles">
                    <Row className="items-end justify-between w-[100%]">
                      <Button
                        className="capitalize font-medium lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[14%]"
                        shape="CircleBorder25"
                        size="lg"
                        variant="OutlineBlack90033"
                      >
                        Business Profiles
                      </Button>
                      <Img
                        src="images/img_arrows.svg"
                        className="arrows_Two"
                        alt="arrows Three"
                      />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[32%]">
                        <Column
                          className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_image_2.png')",
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
                              alt="GroupFiftyOne One"
                            />
                            <Row className="items-end justify-between mb-[1px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[93%]">
                              <Button
                                className="font-medium mb-[1px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[11%]"
                                shape="RoundedBorder4"
                                size="sm"
                                variant="FillBlue700"
                              >
                                Farm
                              </Button>
                              <Row className="items-center justify-between w-[24%]">
                                <Img
                                  src="images/img_vendorsilver.png"
                                  className="VendorSilver"
                                  alt="VendorSilver One"
                                />
                                <Img
                                  src="images/img_ambassadorgold.png"
                                  className="VendorPlatinum"
                                  alt="AmbassadorGold One"
                                />
                              </Row>
                            </Row>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[93%]">
                          <Column className="justify-start w-[100%]">
                            <Row className="items-center justify-between w-[100%]">
                              <Column className="items-center w-[62%]">
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
                                  <Column className="w-[76%]">
                                    <Text
                                      className="font-semibold text-black_900 w-[auto]"
                                      variant="body10"
                                    >
                                      {"<Name Of The Business>"}
                                    </Text>
                                    <Text
                                      className="TitleatCompa"
                                      variant="body12"
                                    >
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
                            <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                            <Row className="items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[66%]">
                              <Row className="items-center justify-evenly w-[41%]">
                                <Img
                                  src="images/img_calendar_16X16.svg"
                                  className="clock"
                                  alt="calendar One"
                                />
                                <Text className="date" variant="body10">
                                  11-Nov-2022
                                </Text>
                              </Row>
                              <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] pr-[2px] py-[2px] w-[28%]">
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
                              <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] pt-[1px] w-[24%]">
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
                            <Row className="items-center justify-evenly lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                              <Button
                                className="font-medium 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[16%]"
                                shape="RoundedBorder4"
                                size="sm"
                                variant="FillBlue700"
                              >
                                Business
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
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[32%]">
                        <Column
                          className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_image_2.png')",
                          }}
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
                              alt="GroupFiftyOne One One"
                            />
                            <Row className="items-end justify-between mb-[1px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[93%]">
                              <Button
                                className="font-medium mb-[1px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[29%]"
                                shape="RoundedBorder4"
                                size="sm"
                                variant="FillBlue700"
                              >
                                Pharma Company
                              </Button>
                              <Stack className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] pl-[1px] w-[24%]">
                                <Img
                                  src="images/img_standardgold.png"
                                  className="StandardPlatin"
                                  alt="StandardGold"
                                />
                              </Stack>
                            </Row>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[93%]">
                          <Column className="justify-start w-[100%]">
                            <Row className="items-center justify-between w-[100%]">
                              <Column className="items-center w-[62%]">
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
                                  <Column className="w-[76%]">
                                    <Text
                                      className="font-semibold text-black_900 w-[auto]"
                                      variant="body10"
                                    >
                                      {"<Name Of The Business>"}
                                    </Text>
                                    <Text
                                      className="TitleatCompa"
                                      variant="body12"
                                    >
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
                                  alt="arrowdown One One"
                                />
                              </Button>
                            </Row>
                            <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                            <Row className="items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[69%]">
                              <Row className="items-center justify-evenly w-[40%]">
                                <Img
                                  src="images/img_calendar_16X16.svg"
                                  className="clock"
                                  alt="calendar One One"
                                />
                                <Text className="date" variant="body10">
                                  11-Nov-2022
                                </Text>
                              </Row>
                              <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] pr-[2px] py-[2px] w-[27%]">
                                <Row className="items-start justify-evenly my-[2px] w-[100%]">
                                  <Img
                                    src="images/img_star.svg"
                                    className="clock"
                                    alt="star One One"
                                  />
                                  <Text className="rowstar" variant="body12">
                                    5 (3.2K)
                                  </Text>
                                </Row>
                              </Column>
                              <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] py-[1px] w-[27%]">
                                <Row className="items-start justify-evenly mb-[1px] w-[100%]">
                                  <Img
                                    src="images/img_globe.svg"
                                    className="clock"
                                    alt="globe One One"
                                  />
                                  <Text
                                    className="rowglobe_one"
                                    variant="body10"
                                  >
                                    Jordan
                                  </Text>
                                </Row>
                              </Column>
                            </Row>
                            <Row className="items-center justify-evenly lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                              <Button
                                className="font-medium 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[16%]"
                                shape="RoundedBorder4"
                                size="sm"
                                variant="FillBlue700"
                              >
                                Business
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
                                  alt="overflowmenu One One"
                                />
                              </Button>
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[32%]">
                        <Column
                          className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_image_2.png')",
                          }}
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
                              alt="GroupFiftyOne Two One"
                            />
                            <Row className="items-end justify-between mb-[2px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[93%]">
                              <Button
                                className="font-medium xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[12%]"
                                shape="RoundedBorder4"
                                size="sm"
                                variant="FillBlue700"
                              >
                                Clinic
                              </Button>
                              <Row className="items-center justify-between w-[24%]">
                                <Img
                                  src="images/img_vendorplatinum.png"
                                  className="VendorPlatinum"
                                  alt="VendorPlatinum One"
                                />
                                <Img
                                  src="images/img_ambassadorsilv.png"
                                  className="VendorPlatinum"
                                  alt="AmbassadorSilv One"
                                />
                              </Row>
                            </Row>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[93%]">
                          <Column className="justify-start w-[100%]">
                            <Row className="items-center justify-between w-[100%]">
                              <Column className="items-center w-[62%]">
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
                                  <Column className="w-[76%]">
                                    <Text
                                      className="font-semibold text-black_900 w-[auto]"
                                      variant="body10"
                                    >
                                      {"<Name Of The Business>"}
                                    </Text>
                                    <Text
                                      className="TitleatCompa"
                                      variant="body12"
                                    >
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
                                  alt="arrowdown Two One"
                                />
                              </Button>
                            </Row>
                            <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                            <Row className="items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[67%]">
                              <Row className="items-center justify-evenly w-[41%]">
                                <Img
                                  src="images/img_calendar_16X16.svg"
                                  className="clock"
                                  alt="calendar Two One"
                                />
                                <Text className="date" variant="body10">
                                  11-Nov-2022
                                </Text>
                              </Row>
                              <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] pr-[2px] py-[2px] w-[28%]">
                                <Row className="items-start justify-evenly my-[2px] w-[100%]">
                                  <Img
                                    src="images/img_star.svg"
                                    className="clock"
                                    alt="star Two One"
                                  />
                                  <Text className="rowstar" variant="body12">
                                    5 (3.2K)
                                  </Text>
                                </Row>
                              </Column>
                              <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] py-[1px] w-[25%]">
                                <Row className="items-start justify-evenly mb-[1px] w-[100%]">
                                  <Img
                                    src="images/img_globe.svg"
                                    className="clock"
                                    alt="globe Two One"
                                  />
                                  <Text
                                    className="rowglobe_one"
                                    variant="body10"
                                  >
                                    Oman
                                  </Text>
                                </Row>
                              </Column>
                            </Row>
                            <Row className="items-center justify-evenly lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                              <Button
                                className="font-medium 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[16%]"
                                shape="RoundedBorder4"
                                size="sm"
                                variant="FillBlue700"
                              >
                                Business
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
                                  alt="overflowmenu Two One"
                                />
                              </Button>
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                    </Row>
                    <Button
                      className="capitalize font-medium lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[13%]"
                      shape="CircleBorder22"
                      size="lg"
                      variant="OutlineRedA701"
                    >
                      Discover All
                    </Button>
                  </Column>
                </List>
                <Stack className="font-prompt 3xl:h-[103px] lg:h-[61px] xl:h-[77px] 2xl:h-[86px] lg:mt-[31px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] w-[43%]">
                  <Text className="HandPicked" as="h1" variant="h1">
                    Hand Picked
                  </Text>
                  <Text className="DiscoverTopCo" variant="body2">
                    V-Blog Posts
                  </Text>
                </Stack>
                <Column className="font-poppins items-center justify-start lg:mt-[34px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] w-[100%]">
                  <Row className="items-end justify-between w-[100%]">
                    <Button
                      className="capitalize font-medium lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                      shape="CircleBorder25"
                      size="lg"
                      variant="OutlineBlack90033"
                    >
                      Blog Posts
                    </Button>
                    <Img
                      src="images/img_arrows.svg"
                      className="arrows_Two"
                      alt="arrows Four"
                    />
                  </Row>
                  <List
                    className="lg:gap-[20px] xl:gap-[25px] 2xl:gap-[28px] 3xl:gap-[34px] grid grid-cols-3 min-h-[auto] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]"
                    orientation="horizontal"
                  >
                    <Column className="personalprofil">
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
                            alt="GroupFiftyOne Two"
                          />
                          <Stack className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] lg:ml-[206px] xl:ml-[258px] 2xl:ml-[290px] 3xl:ml-[348px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] pl-[1px] w-[22%]">
                            <Img
                              src="images/img_standardplatin.png"
                              className="StandardPlatin"
                              alt="StandardPlatin"
                            />
                          </Stack>
                        </Column>
                      </Column>
                      <Column className="justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[93%]">
                        <Text className="columndictummiquis" variant="body7">
                          Dictum mi quis sed nibh nam faucibus et pellentesque.
                          Arcu.
                        </Text>
                        <Row className="items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[67%]">
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
                              alt="share"
                            />
                            <Text className="shares1" variant="body12">
                              320
                            </Text>
                          </Row>
                        </Row>
                        <Row className="items-center ml-[1px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[80%]">
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
                        <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
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
                              alt="arrowdown Three"
                            />
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="personalprofil">
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
                            alt="GroupFiftyOne Three"
                          />
                          <Row className="items-center justify-end lg:ml-[206px] xl:ml-[258px] 2xl:ml-[290px] 3xl:ml-[348px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
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
                      <Column className="justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[93%]">
                        <Text className="columndictummiquis" variant="body7">
                          Dictum mi quis sed nibh nam faucibus et pellentesque.
                          Arcu.
                        </Text>
                        <Row className="items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[67%]">
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
                              alt="share One"
                            />
                            <Text className="shares1" variant="body12">
                              320
                            </Text>
                          </Row>
                        </Row>
                        <Row className="items-center ml-[1px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[80%]">
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
                        <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
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
                    <Column className="personalprofil">
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
                            alt="GroupFiftyOne Four"
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
                              alt="AmbassadorGold Three"
                            />
                          </Row>
                        </Column>
                      </Column>
                      <Column className="justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[93%]">
                        <Text className="columndictummiquis" variant="body7">
                          Dictum mi quis sed nibh nam faucibus et pellentesque.
                          Arcu.
                        </Text>
                        <Row className="items-center ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[67%]">
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
                              alt="share Two"
                            />
                            <Text className="shares1" variant="body12">
                              320
                            </Text>
                          </Row>
                        </Row>
                        <Row className="items-center ml-[1px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[80%]">
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
                        <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
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
                              alt="arrowdown Five"
                            />
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                  </List>
                  <Button
                    className="capitalize font-medium lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[13%]"
                    shape="CircleBorder22"
                    size="lg"
                    variant="OutlineRedA701"
                  >
                    Discover All
                  </Button>
                </Column>
                <Stack className="font-prompt 3xl:h-[103px] lg:h-[61px] xl:h-[77px] 2xl:h-[86px] lg:mt-[31px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] w-[43%]">
                  <Text className="HandPicked" as="h1" variant="h1">
                    Hand Picked
                  </Text>
                  <Text className="DiscoverTopCo" variant="body2">
                    V-Nation Pages & Groups
                  </Text>
                </Stack>
                <List
                  className="font-poppins gap-[0] min-h-[auto] lg:mt-[34px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="listpersonal_profiles">
                    <Row className="items-end justify-between w-[100%]">
                      <Button
                        className="capitalize font-medium lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[8%]"
                        shape="CircleBorder25"
                        size="lg"
                        variant="OutlineBlack90033"
                      >
                        Pages
                      </Button>
                      <Img
                        src="images/img_arrows.svg"
                        className="arrows_Two"
                        alt="arrows Five"
                      />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[16px] xl:pb-[21px] 2xl:pb-[23px] 3xl:pb-[28px] rounded-radius10 shadow-bs5 w-[32%]">
                        <Column
                          className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_image_8.png')",
                          }}
                        >
                          <Column className="bg-gradient9  items-end justify-start xl:py-[11px] 2xl:py-[13px] 3xl:py-[16px] lg:py-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                            <Column className="items-center justify-start w-[21%]">
                              <Button
                                className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[100%]"
                                shape="CircleBorder12"
                                size="sm"
                                variant="FillBlue700"
                              >
                                Followed
                              </Button>
                            </Column>
                            <Img
                              src="images/img_group51.svg"
                              className="GroupFiftyOne"
                              alt="GroupFiftyOne Five"
                            />
                            <Row className="items-center justify-end mb-[2px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                              <Img
                                src="images/img_vendorsilver.png"
                                className="VendorPlatinum"
                                alt="VendorSilver Three"
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
                                alt="location"
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
                                alt="megaphone"
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
                                alt="overflowmenu Five"
                              />
                            </Button>
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
                                  <Text
                                    className="TitleatCompa"
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
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[16px] xl:pb-[21px] 2xl:pb-[23px] 3xl:pb-[28px] rounded-radius10 shadow-bs5 w-[32%]">
                        <Column
                          className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_image_8.png')",
                          }}
                        >
                          <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                            <Column className="items-center justify-start w-[17%]">
                              <Button
                                className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[100%]"
                                shape="CircleBorder12"
                                size="sm"
                                variant="GradientDeeporangeA400Pink900"
                              >
                                Follow
                              </Button>
                            </Column>
                            <Img
                              src="images/img_group51.svg"
                              className="GroupFiftyOne"
                              alt="GroupFiftyOne One Two"
                            />
                            <Stack className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] mb-[1px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] pl-[1px] w-[22%]">
                              <Img
                                src="images/img_standardgold.png"
                                className="StandardPlatin"
                                alt="StandardGold One"
                              />
                            </Stack>
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
                                alt="calendar One Two"
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
                                alt="star One Two"
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
                                alt="overflowmenu One Two"
                              />
                            </Button>
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
                                    alt="user One One"
                                  />
                                </Button>
                                <Column className="items-center justify-start mt-[3px] w-[69%]">
                                  <Text
                                    className="font-semibold text-black_900 w-[auto]"
                                    variant="body10"
                                  >
                                    {"<Member Name>"}
                                  </Text>
                                  <Text
                                    className="TitleatCompa"
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
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[16px] xl:pb-[21px] 2xl:pb-[23px] 3xl:pb-[28px] rounded-radius10 shadow-bs5 w-[32%]">
                        <Column
                          className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_image_8.png')",
                          }}
                        >
                          <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                            <Column className="items-center justify-start w-[17%]">
                              <Button
                                className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[100%]"
                                shape="CircleBorder12"
                                size="sm"
                                variant="GradientDeeporangeA400Pink900"
                              >
                                Follow
                              </Button>
                            </Column>
                            <Img
                              src="images/img_group51.svg"
                              className="GroupFiftyOne"
                              alt="GroupFiftyOne Two Two"
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
                                alt="AmbassadorGold Four"
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
                                alt="calendar Two Two"
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
                                alt="star Two Two"
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
                                alt="overflowmenu Two Two"
                              />
                            </Button>
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
                                  <Text
                                    className="TitleatCompa"
                                    variant="body12"
                                  >
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
                                alt="arrowdown Two Two"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Button
                      className="capitalize font-medium lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[13%]"
                      shape="CircleBorder22"
                      size="lg"
                      variant="OutlineRedA701"
                    >
                      Discover All
                    </Button>
                  </Column>
                  <Column className="listpersonal_profiles">
                    <Row className="items-end justify-between w-[100%]">
                      <Button
                        className="capitalize font-medium lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[8%]"
                        shape="CircleBorder25"
                        size="lg"
                        variant="OutlineBlack90033"
                      >
                        Groups
                      </Button>
                      <Img
                        src="images/img_arrows.svg"
                        className="arrows_Two"
                        alt="arrows Six"
                      />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[32%]">
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
                              alt="GroupFiftyOne Six"
                            />
                            <Row className="items-center justify-end mb-[2px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                              <Img
                                src="images/img_vendorplatinum.png"
                                className="VendorPlatinum"
                                alt="VendorPlatinum Four"
                              />
                              <Img
                                src="images/img_ambassadorsilv.png"
                                className="AmbassadorSilv"
                                alt="AmbassadorSilv Three"
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
                                alt="overflowmenu Six"
                              />
                            </Button>
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
                                  <Text
                                    className="TitleatCompa"
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
                                alt="arrowdown Seven"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[11px] xl:pb-[14px] 2xl:pb-[16px] 3xl:pb-[19px] rounded-radius10 shadow-bs6 w-[32%]">
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
                              alt="GroupFiftyOne One Three"
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
                                alt="AmbassadorGold Five"
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
                                alt="location One One"
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
                                alt="calendar One Three"
                              />
                              <Text className="date" variant="body12">
                                15-Oct-2022
                              </Text>
                            </Row>
                            <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                              <Img
                                src="images/img_thumbsup.svg"
                                className="clock"
                                alt="thumbsup One One"
                              />
                              <Text className="likes" variant="body12">
                                0
                              </Text>
                            </Row>
                            <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[17%]">
                              <Img
                                src="images/img_star.svg"
                                className="clock"
                                alt="star One Three"
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
                            <Row className="items-center justify-evenly 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[16%]">
                              <Img
                                src="images/img_megaphone_14X19.svg"
                                className="megaphone"
                                alt="megaphone One One"
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
                                alt="overflowmenu One Three"
                              />
                            </Button>
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
                                  <Text
                                    className="TitleatCompa"
                                    variant="body12"
                                  >
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
                                alt="arrowdown One Three"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[11px] xl:pb-[14px] 2xl:pb-[16px] 3xl:pb-[19px] rounded-radius10 shadow-bs6 w-[32%]">
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
                            <Column className="justify-start w-[18%]">
                              <Button
                                className="capitalize font-semibold ml-[4px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[94%]"
                                shape="CircleBorder12"
                                size="sm"
                                variant="OutlineBluegray400"
                              >
                                Public
                              </Button>
                              <Button
                                className="capitalize font-semibold lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[100%]"
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
                              alt="GroupFiftyOne Two Three"
                            />
                            <Stack className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] mb-[1px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] pl-[1px] w-[22%]">
                              <Img
                                src="images/img_standardgold.png"
                                className="StandardPlatin"
                                alt="StandardGold Two"
                              />
                            </Stack>
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
                                alt="location Two One"
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
                                alt="calendar Two Three"
                              />
                              <Text className="date" variant="body12">
                                15-Oct-2022
                              </Text>
                            </Row>
                            <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                              <Img
                                src="images/img_thumbsup.svg"
                                className="clock"
                                alt="thumbsup Two One"
                              />
                              <Text className="likes" variant="body12">
                                0
                              </Text>
                            </Row>
                            <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[17%]">
                              <Img
                                src="images/img_star.svg"
                                className="clock"
                                alt="star Two Three"
                              />
                              <Text className="ratings" variant="body12">
                                5(20)
                              </Text>
                            </Row>
                            <Row className="items-center justify-center xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                              <Img
                                src="images/img_share.svg"
                                className="clock"
                                alt="share Two One"
                              />
                              <Text className="shares" variant="body12">
                                320
                              </Text>
                            </Row>
                            <Row className="items-center justify-evenly 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[16%]">
                              <Img
                                src="images/img_megaphone_14X19.svg"
                                className="megaphone"
                                alt="megaphone Two One"
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
                                alt="overflowmenu Two Three"
                              />
                            </Button>
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
                                  <Text
                                    className="TitleatCompa"
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
                                alt="arrowdown Two Three"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Button
                      className="capitalize font-medium lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[13%]"
                      shape="CircleBorder22"
                      size="lg"
                      variant="OutlineRedA701"
                    >
                      Discover All
                    </Button>
                  </Column>
                </List>
                <Stack className="font-prompt 3xl:h-[103px] lg:h-[61px] xl:h-[77px] 2xl:h-[86px] lg:mt-[31px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] w-[43%]">
                  <Text className="HandPicked" as="h1" variant="h1">
                    Hand Picked
                  </Text>
                  <Text className="MembersProfile" variant="body2">
                    V-Tube Channels & Videos
                  </Text>
                </Stack>
                <List
                  className="font-poppins gap-[0] min-h-[auto] lg:mt-[34px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="listpersonal_profiles">
                    <Row className="items-end justify-between w-[100%]">
                      <Button
                        className="capitalize font-medium lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                        shape="CircleBorder25"
                        size="lg"
                        variant="OutlineBlack90033"
                      >
                        Channels
                      </Button>
                      <Img
                        src="images/img_arrows.svg"
                        className="arrows_Two"
                        alt="arrows Seven"
                      />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                      <Stack className="lg:h-[366px] xl:h-[458px] 2xl:h-[515px] 3xl:h-[618px] w-[32%]">
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
                                  alt="location Two"
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
                                  alt="calendar Seven"
                                />
                                <Text className="date" variant="body12">
                                  15-Oct-2022
                                </Text>
                              </Row>
                              <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[10%]">
                                <Img
                                  src="images/img_thumbsup.svg"
                                  className="clock"
                                  alt="thumbsup Five"
                                />
                                <Text className="likes" variant="body12">
                                  0
                                </Text>
                              </Row>
                              <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
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
                                  alt="share Five"
                                />
                                <Text className="shares" variant="body12">
                                  320
                                </Text>
                              </Row>
                              <Row className="items-center justify-evenly 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[13%]">
                                <Img
                                  src="images/img_user.svg"
                                  className="clock"
                                  alt="user Five"
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
                                  alt="overflowmenu Seven"
                                />
                              </Button>
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
                                      alt="user One Three"
                                    />
                                  </Button>
                                  <Column className="items-center justify-start mt-[3px] w-[69%]">
                                    <Text
                                      className="font-semibold text-black_900 w-[auto]"
                                      variant="body10"
                                    >
                                      {"<Member Name>"}
                                    </Text>
                                    <Text
                                      className="TitleatCompa"
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
                                  alt="arrowdown Eight"
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
                              alt="GroupFiftyOne Seven"
                            />
                            <Row className="items-center justify-end mb-[2px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                              <Img
                                src="images/img_vendorplatinum.png"
                                className="VendorPlatinum"
                                alt="VendorPlatinum Five"
                              />
                              <Img
                                src="images/img_ambassadorsilv.png"
                                className="AmbassadorSilv"
                                alt="AmbassadorSilv Four"
                              />
                            </Row>
                          </Column>
                        </Column>
                      </Stack>
                      <Stack className="lg:h-[366px] xl:h-[458px] 2xl:h-[515px] 3xl:h-[618px] w-[32%]">
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
                                  alt="location One Two"
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
                                  alt="calendar One Four"
                                />
                                <Text className="date" variant="body12">
                                  15-Oct-2022
                                </Text>
                              </Row>
                              <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[10%]">
                                <Img
                                  src="images/img_thumbsup.svg"
                                  className="clock"
                                  alt="thumbsup One Two"
                                />
                                <Text className="likes" variant="body12">
                                  0
                                </Text>
                              </Row>
                              <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                                <Img
                                  src="images/img_star.svg"
                                  className="clock"
                                  alt="star One Four"
                                />
                                <Text className="ratings" variant="body12">
                                  5(20)
                                </Text>
                              </Row>
                              <Row className="items-center justify-center xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                                <Img
                                  src="images/img_share.svg"
                                  className="clock"
                                  alt="share One Two"
                                />
                                <Text className="shares" variant="body12">
                                  320
                                </Text>
                              </Row>
                              <Row className="items-center justify-evenly 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[13%]">
                                <Img
                                  src="images/img_user.svg"
                                  className="clock"
                                  alt="user Two One"
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
                                  alt="overflowmenu One Four"
                                />
                              </Button>
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
                                    <Text
                                      className="TitleatCompa"
                                      variant="body12"
                                    >
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
                                  alt="arrowdown One Four"
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
                              alt="GroupFiftyOne One Four"
                            />
                            <Row className="items-center justify-end mb-[1px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                              <Img
                                src="images/img_vendorsilver.png"
                                className="VendorSilver"
                                alt="VendorSilver Four"
                              />
                              <Img
                                src="images/img_ambassadorgold.png"
                                className="AmbassadorGold"
                                alt="AmbassadorGold Six"
                              />
                            </Row>
                          </Column>
                        </Column>
                      </Stack>
                      <Stack className="lg:h-[366px] xl:h-[458px] 2xl:h-[515px] 3xl:h-[618px] w-[32%]">
                        <Column className="absolute bg-white_A700 border border-gray_201 border-solid items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] right-[0] rounded-radius10 shadow-bs6 w-[100%]">
                          <Column className="justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[220px] xl:mt-[275px] 2xl:mt-[309px] 3xl:mt-[371px] w-[100%]">
                            <Column className="items-center justify-start w-[80%]">
                              <Column className="justify-start w-[100%]">
                                <Row className="items-center w-[78%]">
                                  <Button
                                    className="flex lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] items-center justify-center rounded-radius50 lg:w-[20px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[34px]"
                                    size="mdIcn"
                                    variant="icbOutlineBlack90033"
                                  >
                                    <Img
                                      src="images/img_location_30X30.svg"
                                      className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                                      alt="location Two Two"
                                    />
                                  </Button>
                                  <Text className="rowlocation" variant="body9">
                                    {"<Name of The channel>"}
                                  </Text>
                                </Row>
                                <Row className="items-center justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                                  <Row className="items-center justify-evenly w-[31%]">
                                    <Img
                                      src="images/img_calendar_16X16.svg"
                                      className="clock"
                                      alt="calendar Two Four"
                                    />
                                    <Text className="date" variant="body12">
                                      15-Oct-2022
                                    </Text>
                                  </Row>
                                  <Row className="items-center justify-center w-[10%]">
                                    <Img
                                      src="images/img_thumbsup.svg"
                                      className="clock"
                                      alt="thumbsup Two Two"
                                    />
                                    <Text className="likes" variant="body12">
                                      0
                                    </Text>
                                  </Row>
                                  <Row className="items-start justify-center w-[18%]">
                                    <Img
                                      src="images/img_star.svg"
                                      className="clock"
                                      alt="star Two Four"
                                    />
                                    <Text className="ratings" variant="body12">
                                      5(20)
                                    </Text>
                                  </Row>
                                  <Row className="items-center justify-center w-[14%]">
                                    <Img
                                      src="images/img_share.svg"
                                      className="clock"
                                      alt="share Two Two"
                                    />
                                    <Text className="shares" variant="body12">
                                      320
                                    </Text>
                                  </Row>
                                  <Row className="items-center justify-evenly w-[13%]">
                                    <Img
                                      src="images/img_user.svg"
                                      className="clock"
                                      alt="user Three"
                                    />
                                    <Text className="rowuser" variant="body12">
                                      10K
                                    </Text>
                                  </Row>
                                </Row>
                              </Column>
                            </Column>
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
                                  alt="overflowmenu Two Four"
                                />
                              </Button>
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
                                    <Text
                                      className="TitleatCompa"
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
                                  alt="arrowdown Two Four"
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
                              alt="GroupFiftyOne Two Four"
                            />
                            <Stack className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] mb-[1px] lg:ml-[206px] xl:ml-[258px] 2xl:ml-[290px] 3xl:ml-[348px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] pl-[1px] w-[22%]">
                              <Img
                                src="images/img_standardplatin.png"
                                className="StandardPlatin"
                                alt="StandardPlatin One"
                              />
                            </Stack>
                          </Column>
                        </Column>
                      </Stack>
                    </Row>
                    <Button
                      className="capitalize font-medium lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[13%]"
                      shape="CircleBorder22"
                      size="lg"
                      variant="OutlineRedA701"
                    >
                      Discover All
                    </Button>
                  </Column>
                  <Column className="listpersonal_profiles">
                    <Row className="items-end justify-between w-[100%]">
                      <Button
                        className="capitalize font-medium lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[8%]"
                        shape="CircleBorder25"
                        size="lg"
                        variant="OutlineBlack90033"
                      >
                        Videos
                      </Button>
                      <Img
                        src="images/img_arrows.svg"
                        className="arrows_Two"
                        alt="arrows Eight"
                      />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[32%]">
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
                                alt="overflowmenu Eight"
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
                                  <Text
                                    className="TitleatCompa"
                                    variant="body12"
                                  >
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
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[32%]">
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
                                src="images/img_vendorsilver.png"
                                className="VendorPlatinum"
                                alt="VendorSilver Five"
                              />
                              <Img
                                src="images/img_ambassadorsilv.png"
                                className="AmbassadorGold"
                                alt="AmbassadorSilv Five"
                              />
                            </Row>
                          </Column>
                        </Column>
                        <Column className="justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[93%]">
                          <Text className="columnnameofthevi" variant="body7">
                            {"<Name Of The Video>"}
                          </Text>
                          <Row className="items-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] pb-[1px] w-[81%]">
                            <Row className="items-center justify-evenly mb-[2px] w-[31%]">
                              <Img
                                src="images/img_calendar_16X16.svg"
                                className="clock"
                                alt="calendar One Five"
                              />
                              <Text className="date" variant="body12">
                                15-Oct-2022
                              </Text>
                            </Row>
                            <Row className="items-center justify-center mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                              <Img
                                src="images/img_thumbsup.svg"
                                className="clock"
                                alt="thumbsup One Three"
                              />
                              <Text className="likes" variant="body12">
                                0
                              </Text>
                            </Row>
                            <Row className="items-start justify-center mb-[2px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                              <Img
                                src="images/img_star.svg"
                                className="clock"
                                alt="star One Five"
                              />
                              <Text className="ratings" variant="body12">
                                5(20)
                              </Text>
                            </Row>
                            <Row className="items-center justify-center mb-[2px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                              <Img
                                src="images/img_share.svg"
                                className="clock"
                                alt="share One Three"
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
                                alt="overflowmenu One Five"
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
                                    alt="grid One One"
                                  />
                                </Button>
                                <Column className="w-[70%]">
                                  <Text
                                    className="font-semibold text-black_900 w-[auto]"
                                    variant="body10"
                                  >
                                    {"<Business Name>"}
                                  </Text>
                                  <Text
                                    className="TitleatCompa"
                                    variant="body12"
                                  >
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
                                alt="arrowdown One Five"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[32%]">
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
                                alt="arrowright Two"
                              />
                            </Button>
                            <Row className="items-center justify-end mb-[2px] ml-[auto] lg:mt-[52px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] w-[24%]">
                              <Img
                                src="images/img_vendorplatinum.png"
                                className="VendorPlatinum"
                                alt="VendorPlatinum Six"
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
                                alt="calendar Two Five"
                              />
                              <Text className="date" variant="body12">
                                15-Oct-2022
                              </Text>
                            </Row>
                            <Row className="items-center justify-center mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                              <Img
                                src="images/img_thumbsup.svg"
                                className="clock"
                                alt="thumbsup Two Three"
                              />
                              <Text className="likes" variant="body12">
                                0
                              </Text>
                            </Row>
                            <Row className="items-start justify-center mb-[2px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                              <Img
                                src="images/img_star.svg"
                                className="clock"
                                alt="star Two Five"
                              />
                              <Text className="ratings" variant="body12">
                                5(20)
                              </Text>
                            </Row>
                            <Row className="items-center justify-center mb-[2px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                              <Img
                                src="images/img_share.svg"
                                className="clock"
                                alt="share Two Three"
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
                                alt="overflowmenu Two Five"
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
                                  <Text
                                    className="TitleatCompa"
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
                                alt="arrowdown Two Five"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Button
                      className="capitalize font-medium lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[13%]"
                      shape="CircleBorder22"
                      size="lg"
                      variant="OutlineRedA701"
                    >
                      Discover All
                    </Button>
                  </Column>
                </List>
                <Stack className="font-prompt 3xl:h-[103px] lg:h-[61px] xl:h-[77px] 2xl:h-[86px] lg:mt-[31px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] w-[43%]">
                  <Text className="HandPicked" as="h1" variant="h1">
                    Hand Picked
                  </Text>
                  <Text className="MembersProfile" variant="body2">
                    V-Jobs Vacancies
                  </Text>
                </Stack>
                <Column className="font-poppins items-center justify-start lg:mt-[34px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] w-[100%]">
                  <Row className="items-end justify-between w-[100%]">
                    <Button
                      className="capitalize font-medium lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[11%]"
                      shape="CircleBorder25"
                      size="lg"
                      variant="OutlineBlack90033"
                    >
                      Vacancies
                    </Button>
                    <Img
                      src="images/img_arrows.svg"
                      className="arrows_Two"
                      alt="arrows Nine"
                    />
                  </Row>
                  <List
                    className="lg:gap-[20px] xl:gap-[25px] 2xl:gap-[28px] 3xl:gap-[34px] grid grid-cols-3 min-h-[auto] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]"
                    orientation="horizontal"
                  >
                    <Column className="pages">
                      <Column
                        className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_image_13.png')",
                        }}
                      >
                        <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                          <Column className="items-center justify-start w-[19%]">
                            <Button
                              className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[100%]"
                              shape="CircleBorder12"
                              size="sm"
                              variant="FillBlue700"
                            >
                              Applied
                            </Button>
                          </Column>
                          <Img
                            src="images/img_group51.svg"
                            className="GroupFiftyOne"
                            alt="GroupFiftyOne Eight"
                          />
                          <Row className="items-center justify-end mb-[2px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                            <Img
                              src="images/img_vendorplatinum.png"
                              className="VendorPlatinum"
                              alt="VendorPlatinum Seven"
                            />
                            <Img
                              src="images/img_ambassadorsilv.png"
                              className="AmbassadorSilv"
                              alt="AmbassadorSilv Six"
                            />
                          </Row>
                        </Column>
                      </Column>
                      <Column className="font-prompt justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[93%]">
                        <Text className="columntitleofthej" variant="body7">
                          {"<Title Of The Job>"}
                        </Text>
                        <Row className="font-poppins items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[62%]">
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
                              alt="overflowmenu Nine"
                            />
                          </Button>
                        </Row>
                        <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                        <Row className="font-poppins items-start justify-between ml-[2px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
                          <Row className="items-center justify-between mt-[3px] w-[56%]">
                            <Row className="items-center justify-evenly w-[21%]">
                              <Img
                                src="images/img_globe.svg"
                                className="clock"
                                alt="globe Two"
                              />
                              <Text className="rowuser" variant="body12">
                                UAE
                              </Text>
                            </Row>
                            <Row className="items-center justify-center w-[32%]">
                              <Img
                                src="images/img_bag.svg"
                                className="clock"
                                alt="bag"
                              />
                              <Text className="rowbag" variant="body12">
                                Finance
                              </Text>
                            </Row>
                            <Row className="items-start justify-evenly w-[33%]">
                              <Img
                                src="images/img_volume.svg"
                                className="clock"
                                alt="volume"
                              />
                              <Text className="rowvolume" variant="body12">
                                3K/Mon.
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
                        <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                              alt="arrowdown Ten"
                            />
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="pages">
                      <Column
                        className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_image_13.png')",
                        }}
                      >
                        <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                          <Column className="items-center justify-start w-[19%]">
                            <Button
                              className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[100%]"
                              shape="CircleBorder12"
                              size="sm"
                              variant="FillBlue700"
                            >
                              Applied
                            </Button>
                          </Column>
                          <Img
                            src="images/img_group51.svg"
                            className="GroupFiftyOne"
                            alt="GroupFiftyOne Nine"
                          />
                          <Row className="items-center justify-end mb-[2px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                            <Img
                              src="images/img_vendorsilver.png"
                              className="VendorPlatinum"
                              alt="VendorSilver Six"
                            />
                            <Img
                              src="images/img_ambassadorsilv.png"
                              className="AmbassadorGold"
                              alt="AmbassadorSilv Seven"
                            />
                          </Row>
                        </Column>
                      </Column>
                      <Column className="font-prompt justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[93%]">
                        <Text className="columntitleofthej" variant="body7">
                          {"<Title Of The Job>"}
                        </Text>
                        <Row className="font-poppins items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[62%]">
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
                        <Row className="font-poppins items-center ml-[2px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                        <Row className="font-poppins items-start justify-between ml-[2px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
                          <Row className="items-center justify-between mt-[3px] w-[56%]">
                            <Row className="items-center justify-evenly w-[21%]">
                              <Img
                                src="images/img_globe.svg"
                                className="clock"
                                alt="globe Three"
                              />
                              <Text className="rowuser" variant="body12">
                                UAE
                              </Text>
                            </Row>
                            <Row className="items-center justify-center w-[32%]">
                              <Img
                                src="images/img_bag.svg"
                                className="clock"
                                alt="bag One"
                              />
                              <Text className="rowbag" variant="body12">
                                Finance
                              </Text>
                            </Row>
                            <Row className="items-start justify-evenly w-[33%]">
                              <Img
                                src="images/img_volume.svg"
                                className="clock"
                                alt="volume One"
                              />
                              <Text className="rowvolume" variant="body12">
                                3K/Mon.
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
                        <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                              alt="arrowdown Eleven"
                            />
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="pages">
                      <Column
                        className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_image_13.png')",
                        }}
                      >
                        <Column className="bg-gradient9  justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                          <Column className="items-center justify-start lg:ml-[218px] xl:ml-[272px] 2xl:ml-[306px] 3xl:ml-[368px] w-[16%]">
                            <Button
                              className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[100%]"
                              shape="CircleBorder12"
                              size="sm"
                              variant="GradientDeeporangeA400Pink900"
                            >
                              Apply
                            </Button>
                          </Column>
                          <Img
                            src="images/img_group51.svg"
                            className="GroupFiftyOne"
                            alt="GroupFiftyOne Ten"
                          />
                          <Stack className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] mb-[1px] lg:ml-[206px] xl:ml-[258px] 2xl:ml-[290px] 3xl:ml-[348px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] pl-[1px] w-[22%]">
                            <Img
                              src="images/img_standardplatin.png"
                              className="StandardPlatin"
                              alt="StandardPlatin Two"
                            />
                          </Stack>
                        </Column>
                      </Column>
                      <Column className="font-prompt justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[93%]">
                        <Text className="columntitleofthej" variant="body7">
                          {"<Title Of The Job>"}
                        </Text>
                        <Row className="font-poppins items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[62%]">
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
                        <Row className="font-poppins items-center ml-[2px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[80%]">
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
                        <Row className="font-poppins items-start justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                          <Row className="items-center justify-between mt-[4px] w-[56%]">
                            <Row className="items-center justify-evenly w-[21%]">
                              <Img
                                src="images/img_globe.svg"
                                className="clock"
                                alt="globe Four"
                              />
                              <Text className="rowuser" variant="body12">
                                UAE
                              </Text>
                            </Row>
                            <Row className="items-center justify-center w-[32%]">
                              <Img
                                src="images/img_bag.svg"
                                className="clock"
                                alt="bag Two"
                              />
                              <Text className="rowbag" variant="body12">
                                Finance
                              </Text>
                            </Row>
                            <Row className="items-start justify-evenly w-[33%]">
                              <Img
                                src="images/img_volume.svg"
                                className="clock"
                                alt="volume Two"
                              />
                              <Text className="rowvolume" variant="body12">
                                3K/Mon.
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
                        <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                              alt="arrowdown Twelve"
                            />
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                  </List>
                  <Button
                    className="capitalize font-medium lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[13%]"
                    shape="CircleBorder22"
                    size="lg"
                    variant="OutlineRedA701"
                  >
                    Discover All
                  </Button>
                </Column>
                <Stack className="font-prompt 3xl:h-[103px] lg:h-[61px] xl:h-[77px] 2xl:h-[86px] lg:mt-[31px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] w-[43%]">
                  <Text className="HandPicked" as="h1" variant="h1">
                    Hand Picked
                  </Text>
                  <Text className="DiscoverTopCo" variant="body2">
                    V-College Courses
                  </Text>
                </Stack>
                <Column className="font-poppins items-center justify-start lg:mt-[34px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] w-[100%]">
                  <Row className="items-end justify-between w-[100%]">
                    <Button
                      className="capitalize font-medium lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[9%]"
                      shape="CircleBorder25"
                      size="lg"
                      variant="OutlineBlack90033"
                    >
                      Courses
                    </Button>
                    <Img
                      src="images/img_arrows.svg"
                      className="arrows_Two"
                      alt="arrows Ten"
                    />
                  </Row>
                  <List
                    className="lg:gap-[20px] xl:gap-[25px] 2xl:gap-[28px] 3xl:gap-[34px] grid grid-cols-3 min-h-[auto] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]"
                    orientation="horizontal"
                  >
                    <Column className="pages">
                      <Column
                        className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                        style={{
                          backgroundImage:
                            "url('images/img_group51_320X410.png')",
                        }}
                      >
                        <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                          <Button
                            className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[16%]"
                            shape="CircleBorder12"
                            size="sm"
                            variant="GradientDeeporangeA400Pink900"
                          >
                            Enroll
                          </Button>
                          <Img
                            src="images/img_group51.svg"
                            className="GroupFiftyOne"
                            alt="GroupFiftyOne Eleven"
                          />
                          <Row className="items-center justify-end mb-[2px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                            <Img
                              src="images/img_vendorsilver.png"
                              className="VendorPlatinum"
                              alt="VendorSilver Seven"
                            />
                            <Img
                              src="images/img_ambassadorplat.png"
                              className="AmbassadorGold"
                              alt="AmbassadorPlat One"
                            />
                          </Row>
                        </Column>
                      </Column>
                      <Column className="justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[93%]">
                        <Text className="columntitleofthec" variant="body7">
                          {"<Title Of The Course>"}
                        </Text>
                        <Row className="items-center lg:mt-[16px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] w-[81%]">
                          <Row className="items-center justify-evenly w-[31%]">
                            <Img
                              src="images/img_calendar_16X16.svg"
                              className="clock"
                              alt="calendar Twelve"
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
                          <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
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
                              alt="share Ten"
                            />
                            <Text className="shares" variant="body12">
                              320
                            </Text>
                          </Row>
                          <Row className="items-center justify-evenly 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[14%]">
                            <Img
                              src="images/img_user.svg"
                              className="clock"
                              alt="user Ten"
                            />
                            <Text className="rowuser" variant="body12">
                              1.2K
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
                              alt="overflowmenu Twelve"
                            />
                          </Button>
                        </Row>
                        <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                        <Row className="items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] w-[44%]">
                          <Row className="items-center justify-end pr-[1px] py-[1px] w-[44%]">
                            <Img
                              src="images/img_clock_16X16.svg"
                              className="clock3"
                              alt="clock"
                            />
                            <Text className="rowbag" variant="body12">
                              01H 30M
                            </Text>
                          </Row>
                          <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[21%]">
                            <Img
                              src="images/img_bookmark.svg"
                              className="clock"
                              alt="bookmark"
                            />
                            <Text className="lectures" variant="body12">
                              10
                            </Text>
                          </Row>
                          <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[23%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Img
                                src="images/img_volume.svg"
                                className="clock"
                                alt="volume Three"
                              />
                              <Text className="rowuser" variant="body12">
                                50
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
                              alt="arrowdown Thirteen"
                            />
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="pages">
                      <Column
                        className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                        style={{
                          backgroundImage:
                            "url('images/img_group51_320X410.png')",
                        }}
                      >
                        <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                          <Button
                            className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[20%]"
                            shape="CircleBorder12"
                            size="sm"
                            variant="GradientBlue700Indigo900"
                          >
                            Enrolled
                          </Button>
                          <Img
                            src="images/img_group51.svg"
                            className="GroupFiftyOne"
                            alt="GroupFiftyOne Twelve"
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
                              alt="AmbassadorGold Seven"
                            />
                          </Row>
                        </Column>
                      </Column>
                      <Column className="justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[93%]">
                        <Text className="columntitleofthec" variant="body7">
                          {"<Title Of The Course>"}
                        </Text>
                        <Row className="items-center lg:mt-[16px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] w-[81%]">
                          <Row className="items-center justify-evenly w-[31%]">
                            <Img
                              src="images/img_calendar_16X16.svg"
                              className="clock"
                              alt="calendar Thirteen"
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
                          <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
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
                              alt="share Eleven"
                            />
                            <Text className="shares" variant="body12">
                              320
                            </Text>
                          </Row>
                          <Row className="items-center justify-evenly 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[14%]">
                            <Img
                              src="images/img_user.svg"
                              className="clock"
                              alt="user Eleven"
                            />
                            <Text className="rowuser" variant="body12">
                              1.2K
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
                              alt="overflowmenu Thirteen"
                            />
                          </Button>
                        </Row>
                        <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                        <Row className="items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] w-[44%]">
                          <Row className="items-center justify-end pr-[1px] py-[1px] w-[44%]">
                            <Img
                              src="images/img_clock_16X16.svg"
                              className="clock3"
                              alt="clock One"
                            />
                            <Text className="rowbag" variant="body12">
                              01H 30M
                            </Text>
                          </Row>
                          <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[21%]">
                            <Img
                              src="images/img_bookmark.svg"
                              className="clock"
                              alt="bookmark One"
                            />
                            <Text className="lectures" variant="body12">
                              10
                            </Text>
                          </Row>
                          <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[23%]">
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
                              alt="arrowdown Fourteen"
                            />
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="pages">
                      <Column
                        className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                        style={{
                          backgroundImage:
                            "url('images/img_group51_320X410.png')",
                        }}
                      >
                        <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                          <Button
                            className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[16%]"
                            shape="CircleBorder12"
                            size="sm"
                            variant="GradientDeeporangeA400Pink900"
                          >
                            Enroll
                          </Button>
                          <Img
                            src="images/img_group51.svg"
                            className="GroupFiftyOne"
                            alt="GroupFiftyOne Thirteen"
                          />
                          <Row className="items-center justify-end mb-[2px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                            <Img
                              src="images/img_vendorplatinum.png"
                              className="VendorPlatinum"
                              alt="VendorPlatinum Eight"
                            />
                            <Img
                              src="images/img_ambassadorsilv.png"
                              className="AmbassadorSilv"
                              alt="AmbassadorSilv Eight"
                            />
                          </Row>
                        </Column>
                      </Column>
                      <Column className="justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[93%]">
                        <Text className="columntitleofthec" variant="body7">
                          {"<Title Of The Course>"}
                        </Text>
                        <Row className="items-center lg:mt-[16px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] w-[81%]">
                          <Row className="items-center justify-evenly w-[31%]">
                            <Img
                              src="images/img_calendar_16X16.svg"
                              className="clock"
                              alt="calendar Fourteen"
                            />
                            <Text className="date" variant="body12">
                              15-Oct-2022
                            </Text>
                          </Row>
                          <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                            <Img
                              src="images/img_thumbsup.svg"
                              className="clock"
                              alt="thumbsup Twelve"
                            />
                            <Text className="likes" variant="body12">
                              0
                            </Text>
                          </Row>
                          <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
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
                              alt="share Twelve"
                            />
                            <Text className="shares" variant="body12">
                              320
                            </Text>
                          </Row>
                          <Row className="items-center justify-evenly 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[14%]">
                            <Img
                              src="images/img_user.svg"
                              className="clock"
                              alt="user Twelve"
                            />
                            <Text className="rowuser" variant="body12">
                              1.2K
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
                              alt="overflowmenu Fourteen"
                            />
                          </Button>
                        </Row>
                        <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                        <Row className="items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] w-[44%]">
                          <Row className="items-center justify-end pr-[1px] py-[1px] w-[44%]">
                            <Img
                              src="images/img_clock_16X16.svg"
                              className="clock3"
                              alt="clock Two"
                            />
                            <Text className="rowbag" variant="body12">
                              01H 30M
                            </Text>
                          </Row>
                          <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[21%]">
                            <Img
                              src="images/img_bookmark.svg"
                              className="clock"
                              alt="bookmark Two"
                            />
                            <Text className="lectures" variant="body12">
                              10
                            </Text>
                          </Row>
                          <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[23%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Img
                                src="images/img_volume.svg"
                                className="clock"
                                alt="volume Five"
                              />
                              <Text className="rowuser" variant="body12">
                                50
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
                                  alt="user One Five"
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
                              alt="arrowdown Fifteen"
                            />
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                  </List>
                  <Button
                    className="capitalize font-medium lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[13%]"
                    shape="CircleBorder22"
                    size="lg"
                    variant="OutlineRedA701"
                  >
                    Discover All
                  </Button>
                </Column>
                <Stack className="font-prompt 3xl:h-[103px] lg:h-[61px] xl:h-[77px] 2xl:h-[86px] lg:mt-[31px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] w-[43%]">
                  <Text className="HandPicked" as="h1" variant="h1">
                    Hand Picked
                  </Text>
                  <Text className="MembersProfile" variant="body2">
                    V-Market Stores & Products
                  </Text>
                </Stack>
                <List
                  className="font-poppins gap-[0] min-h-[auto] lg:mt-[34px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="listpersonal_profiles">
                    <Row className="items-end justify-between w-[100%]">
                      <Button
                        className="capitalize font-medium lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[8%]"
                        shape="CircleBorder25"
                        size="lg"
                        variant="OutlineBlack90033"
                      >
                        Stores
                      </Button>
                      <Img
                        src="images/img_arrows.svg"
                        className="arrows_Two"
                        alt="arrows Eleven"
                      />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                      <Stack className="lg:h-[400px] xl:h-[500px] 2xl:h-[563px] 3xl:h-[675px] w-[32%]">
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
                                  alt="calendar Fifteen"
                                />
                                <Text className="date" variant="body12">
                                  15-Oct-2022
                                </Text>
                              </Row>
                              <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                                <Img
                                  src="images/img_thumbsup.svg"
                                  className="clock"
                                  alt="thumbsup Thirteen"
                                />
                                <Text className="likes" variant="body12">
                                  0
                                </Text>
                              </Row>
                              <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[17%]">
                                <Img
                                  src="images/img_star.svg"
                                  className="clock"
                                  alt="star Twelve"
                                />
                                <Text className="ratings" variant="body12">
                                  5(20)
                                </Text>
                              </Row>
                              <Row className="items-center justify-center xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                                <Img
                                  src="images/img_share.svg"
                                  className="clock"
                                  alt="share Thirteen"
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
                                  alt="overflowmenu Fifteen"
                                />
                              </Button>
                            </Row>
                            <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                            <Row className="items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] pr-[1px] w-[41%]">
                              <Row className="items-center justify-evenly mt-[1px] w-[25%]">
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
                                    <Text
                                      className="TitleatCompa"
                                      variant="body12"
                                    >
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
                                  alt="arrowdown Sixteen"
                                />
                              </Button>
                            </Row>
                          </Column>
                        </Column>
                        <Stack
                          className="absolute bg-cover bg-repeat lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] top-[0] w-[100%]"
                          style={{
                            backgroundImage:
                              "url('images/img_group51_320X411.png')",
                          }}
                        >
                          <Column className="absolute bg-gradient9  items-end justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] right-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                            <Row className="items-center justify-end mb-[2px] lg:mt-[167px] xl:mt-[210px] 2xl:mt-[236px] 3xl:mt-[283px] w-[24%]">
                              <Img
                                src="images/img_vendorplatinum.png"
                                className="VendorPlatinum"
                                alt="VendorPlatinum Nine"
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
                            alt="GroupFifty"
                          />
                        </Stack>
                      </Stack>
                      <Stack className="lg:h-[400px] xl:h-[500px] 2xl:h-[563px] 3xl:h-[675px] w-[32%]">
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
                                  alt="location One Three"
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
                                  alt="calendar One Six"
                                />
                                <Text className="date" variant="body12">
                                  15-Oct-2022
                                </Text>
                              </Row>
                              <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                                <Img
                                  src="images/img_thumbsup.svg"
                                  className="clock"
                                  alt="thumbsup One Four"
                                />
                                <Text className="likes" variant="body12">
                                  0
                                </Text>
                              </Row>
                              <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[17%]">
                                <Img
                                  src="images/img_star.svg"
                                  className="clock"
                                  alt="star One Six"
                                />
                                <Text className="ratings" variant="body12">
                                  5(20)
                                </Text>
                              </Row>
                              <Row className="items-center justify-center xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                                <Img
                                  src="images/img_share.svg"
                                  className="clock"
                                  alt="share One Four"
                                />
                                <Text className="shares" variant="body12">
                                  320
                                </Text>
                              </Row>
                              <Row className="items-center justify-evenly 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[16%]">
                                <Img
                                  src="images/img_megaphone_14X19.svg"
                                  className="megaphone"
                                  alt="megaphone One Two"
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
                                  alt="overflowmenu One Six"
                                />
                              </Button>
                            </Row>
                            <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                            <Row className="items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] pr-[1px] w-[41%]">
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
                                      alt="user Thirteen"
                                    />
                                  </Button>
                                  <Column className="items-center justify-start mt-[3px] w-[69%]">
                                    <Text
                                      className="font-semibold text-black_900 w-[auto]"
                                      variant="body10"
                                    >
                                      {"<Member Name>"}
                                    </Text>
                                    <Text
                                      className="TitleatCompa"
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
                                  alt="arrowdown One Six"
                                />
                              </Button>
                            </Row>
                          </Column>
                        </Column>
                        <Stack
                          className="absolute bg-cover bg-repeat lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] top-[0] w-[100%]"
                          style={{
                            backgroundImage:
                              "url('images/img_group51_320X411.png')",
                          }}
                        >
                          <Column className="absolute bg-gradient9  items-end justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] right-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                            <Row className="items-center justify-end mb-[1px] lg:mt-[167px] xl:mt-[210px] 2xl:mt-[236px] 3xl:mt-[283px] w-[24%]">
                              <Img
                                src="images/img_vendorsilver.png"
                                className="VendorSilver"
                                alt="VendorSilver Eight"
                              />
                              <Img
                                src="images/img_ambassadorgold.png"
                                className="AmbassadorGold"
                                alt="AmbassadorGold Eight"
                              />
                            </Row>
                          </Column>
                          <Img
                            src="images/img_group51.svg"
                            className="GroupFifty"
                            alt="GroupFifty One Fourteen"
                          />
                        </Stack>
                      </Stack>
                      <Stack className="lg:h-[400px] xl:h-[500px] 2xl:h-[563px] 3xl:h-[675px] w-[32%]">
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
                                  alt="location Two Three"
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
                                  alt="calendar Two Six"
                                />
                                <Text className="date" variant="body12">
                                  15-Oct-2022
                                </Text>
                              </Row>
                              <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[9%]">
                                <Img
                                  src="images/img_thumbsup.svg"
                                  className="clock"
                                  alt="thumbsup Two Four"
                                />
                                <Text className="likes" variant="body12">
                                  0
                                </Text>
                              </Row>
                              <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[17%]">
                                <Img
                                  src="images/img_star.svg"
                                  className="clock"
                                  alt="star Two Six"
                                />
                                <Text className="ratings" variant="body12">
                                  5(20)
                                </Text>
                              </Row>
                              <Row className="items-center justify-center xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[14%]">
                                <Img
                                  src="images/img_share.svg"
                                  className="clock"
                                  alt="share Two Four"
                                />
                                <Text className="shares" variant="body12">
                                  320
                                </Text>
                              </Row>
                              <Row className="items-center justify-evenly 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[16%]">
                                <Img
                                  src="images/img_megaphone_14X19.svg"
                                  className="megaphone"
                                  alt="megaphone Two Two"
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
                                  alt="overflowmenu Two Six"
                                />
                              </Button>
                            </Row>
                            <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                            <Row className="items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] pr-[1px] w-[41%]">
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
                                      alt="grid One Two"
                                    />
                                  </Button>
                                  <Column className="w-[70%]">
                                    <Text
                                      className="font-semibold text-black_900 w-[auto]"
                                      variant="body10"
                                    >
                                      {"<Business Name>"}
                                    </Text>
                                    <Text
                                      className="TitleatCompa"
                                      variant="body12"
                                    >
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
                                  alt="arrowdown Two Six"
                                />
                              </Button>
                            </Row>
                          </Column>
                        </Column>
                        <Stack
                          className="absolute bg-cover bg-repeat lg:h-[217px] xl:h-[272px] 2xl:h-[305px] 3xl:h-[366px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] top-[0] w-[100%]"
                          style={{
                            backgroundImage:
                              "url('images/img_group51_320X411.png')",
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
                    </Row>
                    <Button
                      className="capitalize font-medium lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[13%]"
                      shape="CircleBorder22"
                      size="lg"
                      variant="OutlineRedA701"
                    >
                      Discover All
                    </Button>
                  </Column>
                  <Column className="listpersonal_profiles">
                    <Row className="items-end justify-between w-[100%]">
                      <Button
                        className="capitalize font-medium lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[9%]"
                        shape="CircleBorder25"
                        size="lg"
                        variant="OutlineBlack90033"
                      >
                        Products
                      </Button>
                      <Img
                        src="images/img_arrows.svg"
                        className="arrows_Two"
                        alt="arrows Twelve"
                      />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[32%]">
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
                                alt="VendorGold Three"
                              />
                              <Img
                                src="images/img_ambassadorgold.png"
                                className="AmbassadorGold"
                                alt="AmbassadorGold Nine"
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
                                alt="location Four"
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
                                alt="calendar Sixteen"
                              />
                              <Text className="date" variant="body12">
                                15-Oct-2022
                              </Text>
                            </Row>
                            <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[11%]">
                              <Img
                                src="images/img_thumbsup.svg"
                                className="clock"
                                alt="thumbsup Fourteen"
                              />
                              <Text className="likes" variant="body12">
                                0
                              </Text>
                            </Row>
                            <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[21%]">
                              <Img
                                src="images/img_star.svg"
                                className="clock"
                                alt="star Thirteen"
                              />
                              <Text className="ratings" variant="body12">
                                5(20)
                              </Text>
                            </Row>
                            <Row className="items-center justify-evenly xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[17%]">
                              <Img
                                src="images/img_share.svg"
                                className="clock"
                                alt="share Fourteen"
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
                                alt="overflowmenu Sixteen"
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
                                    alt="volume Seven"
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
                                    alt="user Fourteen"
                                  />
                                </Button>
                                <Column className="items-center justify-start mt-[3px] w-[69%]">
                                  <Text
                                    className="font-semibold text-black_900 w-[auto]"
                                    variant="body10"
                                  >
                                    {"<Member Name>"}
                                  </Text>
                                  <Text
                                    className="TitleatCompa"
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
                                alt="arrowdown Seventeen"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[32%]">
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
                                alt="VendorPlatinum Ten"
                              />
                              <Img
                                src="images/img_ambassadorsilv.png"
                                className="AmbassadorSilv"
                                alt="AmbassadorSilv Nine"
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
                                alt="location One Four"
                              />
                            </Button>
                            <Text
                              className="rowlocation_one_four"
                              variant="body9"
                            >
                              {"<Name of The Product>"}
                            </Text>
                          </Row>
                          <Row className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[66%]">
                            <Row className="items-center justify-evenly w-[37%]">
                              <Img
                                src="images/img_calendar_16X16.svg"
                                className="clock"
                                alt="calendar One Seven"
                              />
                              <Text className="date" variant="body12">
                                15-Oct-2022
                              </Text>
                            </Row>
                            <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[11%]">
                              <Img
                                src="images/img_thumbsup.svg"
                                className="clock"
                                alt="thumbsup One Five"
                              />
                              <Text className="likes" variant="body12">
                                0
                              </Text>
                            </Row>
                            <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[21%]">
                              <Img
                                src="images/img_star.svg"
                                className="clock"
                                alt="star One Seven"
                              />
                              <Text className="ratings" variant="body12">
                                5(20)
                              </Text>
                            </Row>
                            <Row className="items-center justify-evenly xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[17%]">
                              <Img
                                src="images/img_share.svg"
                                className="clock"
                                alt="share One Five"
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
                                alt="overflowmenu One Seven"
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
                                    alt="volume One One"
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
                                  <Text
                                    className="TitleatCompa"
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
                                alt="arrowdown One Seven"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[32%]">
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
                                alt="VendorSilver Nine"
                              />
                              <Img
                                src="images/img_ambassadorgold.png"
                                className="AmbassadorGold"
                                alt="AmbassadorGold One One"
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
                                alt="location Two Four"
                              />
                            </Button>
                            <Text
                              className="rowlocation_one_four"
                              variant="body9"
                            >
                              {"<Name of The Product>"}
                            </Text>
                          </Row>
                          <Row className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[67%]">
                            <Row className="items-center justify-evenly w-[37%]">
                              <Img
                                src="images/img_calendar_16X16.svg"
                                className="clock"
                                alt="calendar Two Seven"
                              />
                              <Text className="date" variant="body12">
                                15-Oct-2022
                              </Text>
                            </Row>
                            <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[11%]">
                              <Img
                                src="images/img_thumbsup.svg"
                                className="clock"
                                alt="thumbsup Two Five"
                              />
                              <Text className="likes" variant="body12">
                                0
                              </Text>
                            </Row>
                            <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[21%]">
                              <Img
                                src="images/img_star.svg"
                                className="clock"
                                alt="star Two Seven"
                              />
                              <Text className="ratings" variant="body12">
                                5(20)
                              </Text>
                            </Row>
                            <Row className="items-center justify-evenly xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[17%]">
                              <Img
                                src="images/img_share.svg"
                                className="clock"
                                alt="share Two Five"
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
                                alt="overflowmenu Two Seven"
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
                                  alt="volume Two One"
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
                                  <Text
                                    className="TitleatCompa"
                                    variant="body12"
                                  >
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
                                alt="arrowdown Two Seven"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Button
                      className="capitalize font-medium lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[13%]"
                      shape="CircleBorder22"
                      size="lg"
                      variant="OutlineRedA701"
                    >
                      Discover All
                    </Button>
                  </Column>
                </List>
                <Stack className="font-prompt 3xl:h-[103px] lg:h-[61px] xl:h-[77px] 2xl:h-[86px] lg:mt-[31px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] w-[43%]">
                  <Text className="HandPicked" as="h1" variant="h1">
                    Hand Picked
                  </Text>
                  <Text className="DiscoverTopCo" variant="body2">
                    V-Lance Services & Projects
                  </Text>
                </Stack>
                <List
                  className="font-poppins gap-[0] min-h-[auto] lg:mt-[34px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="listpersonal_profiles">
                    <Row className="items-end justify-between w-[100%]">
                      <Button
                        className="capitalize font-medium lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[9%]"
                        shape="CircleBorder25"
                        size="lg"
                        variant="OutlineBlack90033"
                      >
                        Services
                      </Button>
                      <Img
                        src="images/img_arrows.svg"
                        className="arrows_Two"
                        alt="arrows Thirteen"
                      />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[32%]">
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
                              alt="GroupFifty One"
                            />
                            <Row className="items-center justify-end mb-[2px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                              <Img
                                src="images/img_vendorplatinum.png"
                                className="VendorPlatinum"
                                alt="VendorPlatinum Eleven"
                              />
                              <Img
                                src="images/img_ambassadorsilv.png"
                                className="AmbassadorSilv"
                                alt="AmbassadorSilv Ten"
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
                                alt="calendar Seventeen"
                              />
                              <Text className="date" variant="body12">
                                15-Oct-2022
                              </Text>
                            </Row>
                            <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[11%]">
                              <Img
                                src="images/img_thumbsup.svg"
                                className="clock"
                                alt="thumbsup Fifteen"
                              />
                              <Text className="likes" variant="body12">
                                0
                              </Text>
                            </Row>
                            <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[21%]">
                              <Img
                                src="images/img_star.svg"
                                className="clock"
                                alt="star Fourteen"
                              />
                              <Text className="ratings" variant="body12">
                                5(20)
                              </Text>
                            </Row>
                            <Row className="items-center justify-evenly xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[17%]">
                              <Img
                                src="images/img_share.svg"
                                className="clock"
                                alt="share Fifteen"
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
                                alt="overflowmenu Seventeen"
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
                                  alt="volume Eight"
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
                                    alt="user Fifteen"
                                  />
                                </Button>
                                <Column className="items-center justify-start mt-[3px] w-[69%]">
                                  <Text
                                    className="font-semibold text-black_900 w-[auto]"
                                    variant="body10"
                                  >
                                    {"<Member Name>"}
                                  </Text>
                                  <Text
                                    className="TitleatCompa"
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
                                alt="arrowdown Eighteen"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[32%]">
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
                              alt="GroupFifty One Fifteen"
                            />
                            <Row className="items-center justify-end mb-[1px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                              <Img
                                src="images/img_vendorgold.png"
                                className="VendorSilver"
                                alt="VendorGold Four"
                              />
                              <Img
                                src="images/img_ambassadorgold.png"
                                className="AmbassadorGold"
                                alt="AmbassadorGold Ten"
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
                                alt="calendar One Eight"
                              />
                              <Text className="date" variant="body12">
                                15-Oct-2022
                              </Text>
                            </Row>
                            <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[11%]">
                              <Img
                                src="images/img_thumbsup.svg"
                                className="clock"
                                alt="thumbsup One Six"
                              />
                              <Text className="likes" variant="body12">
                                0
                              </Text>
                            </Row>
                            <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[21%]">
                              <Img
                                src="images/img_star.svg"
                                className="clock"
                                alt="star One Eight"
                              />
                              <Text className="ratings" variant="body12">
                                5(20)
                              </Text>
                            </Row>
                            <Row className="items-center justify-evenly xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[17%]">
                              <Img
                                src="images/img_share.svg"
                                className="clock"
                                alt="share One Six"
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
                                alt="overflowmenu One Eight"
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
                                  alt="volume One Two"
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
                                    alt="user One Seven"
                                  />
                                </Button>
                                <Column className="items-center justify-start mt-[3px] w-[69%]">
                                  <Text
                                    className="font-semibold text-black_900 w-[auto]"
                                    variant="body10"
                                  >
                                    {"<Member Name>"}
                                  </Text>
                                  <Text
                                    className="TitleatCompa"
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
                                alt="arrowdown One Eight"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[32%]">
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
                              alt="GroupFifty Two One"
                            />
                            <Row className="items-center justify-end mb-[2px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                              <Img
                                src="images/img_vendorsilver.png"
                                className="VendorPlatinum"
                                alt="VendorSilver Ten"
                              />
                              <Img
                                src="images/img_ambassadorplat.png"
                                className="AmbassadorGold"
                                alt="AmbassadorPlat Three"
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
                                alt="calendar Two Eight"
                              />
                              <Text className="date" variant="body12">
                                15-Oct-2022
                              </Text>
                            </Row>
                            <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[11%]">
                              <Img
                                src="images/img_thumbsup.svg"
                                className="clock"
                                alt="thumbsup Two Six"
                              />
                              <Text className="likes" variant="body12">
                                0
                              </Text>
                            </Row>
                            <Row className="items-start justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[21%]">
                              <Img
                                src="images/img_star.svg"
                                className="clock"
                                alt="star Two Eight"
                              />
                              <Text className="ratings" variant="body12">
                                5(20)
                              </Text>
                            </Row>
                            <Row className="items-center justify-evenly xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[17%]">
                              <Img
                                src="images/img_share.svg"
                                className="clock"
                                alt="share Two Six"
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
                                alt="overflowmenu Two Eight"
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
                                  alt="volume Two Two"
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
                                    alt="grid Twelve"
                                  />
                                </Button>
                                <Column className="w-[70%]">
                                  <Text
                                    className="font-semibold text-black_900 w-[auto]"
                                    variant="body10"
                                  >
                                    {"<Business Name>"}
                                  </Text>
                                  <Text
                                    className="TitleatCompa"
                                    variant="body12"
                                  >
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
                                alt="arrowdown Two Eight"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Button
                      className="capitalize font-medium lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[13%]"
                      shape="CircleBorder22"
                      size="lg"
                      variant="OutlineRedA701"
                    >
                      Discover All
                    </Button>
                  </Column>
                  <Column className="listpersonal_profiles">
                    <Row className="items-end justify-between w-[100%]">
                      <Button
                        className="capitalize font-medium lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[9%]"
                        shape="CircleBorder25"
                        size="lg"
                        variant="OutlineBlack90033"
                      >
                        Projects
                      </Button>
                      <Img
                        src="images/img_arrows.svg"
                        className="arrows_Two"
                        alt="arrows Fourteen"
                      />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[32%]">
                        <Column
                          className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_image_15.png')",
                          }}
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
                            <Row className="items-center justify-end mb-[2px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                              <Img
                                src="images/img_vendorplatinum.png"
                                className="VendorPlatinum"
                                alt="VendorPlatinum Twelve"
                              />
                              <Img
                                src="images/img_ambassadorplat.png"
                                className="AmbassadorSilv"
                                alt="AmbassadorPlat Four"
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
                                  alt="calendar Eighteen"
                                />
                                <Text className="date" variant="body12">
                                  15-Oct-2022
                                </Text>
                              </Row>
                              <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[12%]">
                                <Img
                                  src="images/img_thumbsup.svg"
                                  className="clock"
                                  alt="thumbsup Sixteen"
                                />
                                <Text className="likes" variant="body12">
                                  0
                                </Text>
                              </Row>
                              <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                                <Img
                                  src="images/img_share.svg"
                                  className="clock"
                                  alt="share Sixteen"
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
                                    alt="user Sixteen"
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
                                  alt="overflowmenu Eighteen"
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
                                    alt="offer One"
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
                                    alt="trophy One"
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
                                      alt="user One Eight"
                                    />
                                  </Button>
                                  <Column className="items-center justify-start mt-[3px] w-[69%]">
                                    <Text
                                      className="font-semibold text-black_900 w-[auto]"
                                      variant="body10"
                                    >
                                      {"<Member Name>"}
                                    </Text>
                                    <Text
                                      className="TitleatCompa"
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
                                  alt="arrowdown Nineteen"
                                />
                              </Button>
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[32%]">
                        <Column
                          className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_image_15.png')",
                          }}
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
                              alt="GroupFifty One Sixteen"
                            />
                            <Row className="items-center justify-end mb-[1px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                              <Img
                                src="images/img_vendorgold.png"
                                className="VendorSilver"
                                alt="VendorGold Five"
                              />
                              <Img
                                src="images/img_ambassadorgold.png"
                                className="AmbassadorGold"
                                alt="AmbassadorGold Eleven"
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
                                  alt="calendar One Nine"
                                />
                                <Text className="date" variant="body12">
                                  15-Oct-2022
                                </Text>
                              </Row>
                              <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[12%]">
                                <Img
                                  src="images/img_thumbsup.svg"
                                  className="clock"
                                  alt="thumbsup One Seven"
                                />
                                <Text className="likes" variant="body12">
                                  0
                                </Text>
                              </Row>
                              <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                                <Img
                                  src="images/img_share.svg"
                                  className="clock"
                                  alt="share One Seven"
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
                                    alt="user Two Two"
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
                                  alt="overflowmenu One Nine"
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
                                    <Text
                                      className="rowfile_one"
                                      variant="body12"
                                    >
                                      Hourly
                                    </Text>
                                  </Row>
                                </Column>
                                <Row className="items-start justify-evenly mr-[2px] w-[32%]">
                                  <Img
                                    src="images/img_trophy.svg"
                                    className="clock"
                                    alt="trophy One One"
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
                                      alt="grid Thirteen"
                                    />
                                  </Button>
                                  <Column className="w-[70%]">
                                    <Text
                                      className="font-semibold text-black_900 w-[auto]"
                                      variant="body10"
                                    >
                                      {"<Business Name>"}
                                    </Text>
                                    <Text
                                      className="TitleatCompa"
                                      variant="body12"
                                    >
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
                                  alt="arrowdown One Nine"
                                />
                              </Button>
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[15px] xl:pb-[19px] 2xl:pb-[21px] 3xl:pb-[26px] rounded-radius10 shadow-bs6 w-[32%]">
                        <Column
                          className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_image_15.png')",
                          }}
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
                              alt="GroupFifty Two Two"
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
                                alt="AmbassadorGold One Two"
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
                                  alt="calendar Two Nine"
                                />
                                <Text className="date" variant="body12">
                                  15-Oct-2022
                                </Text>
                              </Row>
                              <Row className="items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[12%]">
                                <Img
                                  src="images/img_thumbsup.svg"
                                  className="clock"
                                  alt="thumbsup Two Seven"
                                />
                                <Text className="likes" variant="body12">
                                  0
                                </Text>
                              </Row>
                              <Row className="items-center justify-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[18%]">
                                <Img
                                  src="images/img_share.svg"
                                  className="clock"
                                  alt="share Two Seven"
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
                                    alt="user Three One"
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
                                  alt="overflowmenu Two Nine"
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
                                    <Text
                                      className="rowfile_one"
                                      variant="body12"
                                    >
                                      Hourly
                                    </Text>
                                  </Row>
                                </Column>
                                <Row className="items-start justify-evenly mr-[2px] w-[34%]">
                                  <Img
                                    src="images/img_trophy.svg"
                                    className="clock"
                                    alt="trophy Two One"
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
                                    alt="user Four One"
                                  />
                                </Button>
                                <Column className="justify-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] w-[33%]">
                                  <Text
                                    className="font-semibold text-black_900 w-[auto]"
                                    variant="body10"
                                  >
                                    {"<Member Name>"}
                                  </Text>
                                  <Text
                                    className="TitleatCompa"
                                    variant="body12"
                                  >
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
                                    alt="arrowdown Two Nine"
                                  />
                                </Button>
                              </Row>
                            </Column>
                          </Column>
                        </Column>
                      </Column>
                    </Row>
                    <Button
                      className="capitalize font-medium lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[13%]"
                      shape="CircleBorder22"
                      size="lg"
                      variant="OutlineRedA701"
                    >
                      Discover All
                    </Button>
                  </Column>
                </List>
                <Stack className="font-prompt 3xl:h-[103px] lg:h-[61px] xl:h-[77px] 2xl:h-[86px] lg:mt-[31px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] w-[43%]">
                  <Text className="HandPicked" as="h1" variant="h1">
                    Hand Picked
                  </Text>
                  <Text
                    className="absolute bottom-[10%] capitalize inset-x-[0] mx-[auto] text-black_900 w-[max-content]"
                    variant="body2"
                  >
                    V-Events Events & Venues
                  </Text>
                </Stack>
                <List
                  className="font-poppins gap-[0] min-h-[auto] lg:mt-[34px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="listpersonal_profiles">
                    <Row className="items-end justify-between w-[100%]">
                      <Button
                        className="capitalize font-medium lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[8%]"
                        shape="CircleBorder25"
                        size="lg"
                        variant="OutlineBlack90033"
                      >
                        Events
                      </Button>
                      <Img
                        src="images/img_arrows.svg"
                        className="arrows_Two"
                        alt="arrows Fifteen"
                      />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[32%]">
                        <Column
                          className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group51_1.png')",
                          }}
                        >
                          <Column className="bg-gradient9  justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                            <Button
                              className="capitalize font-semibold lg:ml-[207px] xl:ml-[260px] 2xl:ml-[292px] 3xl:ml-[351px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[21%]"
                              shape="CircleBorder12"
                              size="sm"
                              variant="GradientGray501Bluegray400"
                            >
                              Attended
                            </Button>
                            <Img
                              src="images/img_group51.svg"
                              className="GroupFiftyOne"
                              alt="GroupFifty Three"
                            />
                            <Row className="items-center justify-end mb-[1px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                              <Img
                                src="images/img_vendorplatinum.png"
                                className="VendorSilver"
                                alt="VendorPlatinum Thirteen"
                              />
                              <Img
                                src="images/img_ambassadorgold.png"
                                className="AmbassadorSilv"
                                alt="AmbassadorGold Twelve"
                              />
                            </Row>
                          </Column>
                        </Column>
                        <Column className="font-prompt items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] pt-[4px] w-[93%]">
                          <Column className="justify-start w-[100%]">
                            <Text className="columntitleofthec" variant="body7">
                              Nisl purus vitae leo id vitae. Consectetur
                              tincidunt fames amet.
                            </Text>
                            <Row className="font-poppins items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[71%]">
                              <Row className="items-center justify-evenly w-[35%]">
                                <Img
                                  src="images/img_calendar_16X16.svg"
                                  className="clock"
                                  alt="calendar Nineteen"
                                />
                                <Text className="date" variant="body12">
                                  15-Oct-2022
                                </Text>
                              </Row>
                              <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                                <Img
                                  src="images/img_thumbsup.svg"
                                  className="clock"
                                  alt="thumbsup Seventeen"
                                />
                                <Text className="likes" variant="body12">
                                  0
                                </Text>
                              </Row>
                              <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                                <Img
                                  src="images/img_star.svg"
                                  className="clock"
                                  alt="star Fifteen"
                                />
                                <Text className="ratings" variant="body12">
                                  5(20)
                                </Text>
                              </Row>
                              <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
                                <Img
                                  src="images/img_share.svg"
                                  className="clock"
                                  alt="share Seventeen"
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
                                  alt="overflowmenu Nineteen"
                                />
                              </Button>
                            </Row>
                            <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                            <Column className="font-poppins items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                              <Column className="justify-start w-[100%]">
                                <Row className="items-center w-[39%]">
                                  <Img
                                    src="images/img_clock_16X16.svg"
                                    className="clock"
                                    alt="clock Three"
                                  />
                                  <Text className="rowbag" variant="body12">
                                    12-Mar-2022 04:15 PM
                                  </Text>
                                </Row>
                                <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[100%]">
                                  <Row className="items-center justify-between w-[55%]">
                                    <Row className="items-start justify-evenly w-[30%]">
                                      <Img
                                        src="images/img_trophy.svg"
                                        className="clock"
                                        alt="trophy Two"
                                      />
                                      <Text
                                        className="status1"
                                        variant="body12"
                                      >
                                        Expired
                                      </Text>
                                    </Row>
                                    <Row className="items-center justify-center w-[21%]">
                                      <Img
                                        src="images/img_globe.svg"
                                        className="clock"
                                        alt="globe Five"
                                      />
                                      <Text className="rowbag" variant="body12">
                                        UAE
                                      </Text>
                                    </Row>
                                    <Column className="items-center w-[14%]">
                                      <Row className="items-center justify-evenly w-[100%]">
                                        <Img
                                          src="images/img_volume.svg"
                                          className="clock"
                                          alt="volume Nine"
                                        />
                                        <Text
                                          className="rowuser"
                                          variant="body12"
                                        >
                                          0
                                        </Text>
                                      </Row>
                                    </Column>
                                    <Row className="items-center justify-evenly w-[19%]">
                                      <Img
                                        src="images/img_file_16X16.svg"
                                        className="clock"
                                        alt="file One"
                                      />
                                      <Text
                                        className="rowuser"
                                        variant="body12"
                                      >
                                        120
                                      </Text>
                                    </Row>
                                  </Row>
                                  <Button
                                    className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[15%]"
                                    shape="CircleBorder12"
                                    size="sm"
                                    variant="GradientTeal800GreenA700"
                                  >
                                    Free
                                  </Button>
                                </Row>
                              </Column>
                            </Column>
                            <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                          </Column>
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
                                    alt="user Seventeen"
                                  />
                                </Button>
                                <Column className="items-center justify-start mt-[3px] w-[69%]">
                                  <Text
                                    className="font-semibold text-black_900 w-[auto]"
                                    variant="body10"
                                  >
                                    {"<Member Name>"}
                                  </Text>
                                  <Text
                                    className="TitleatCompa"
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
                                alt="arrowdown Twenty"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[12px] xl:pb-[15px] 2xl:pb-[17px] 3xl:pb-[20px] rounded-radius10 shadow-bs6 w-[32%]">
                        <Column
                          className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group51_1.png')",
                          }}
                        >
                          <Column className="bg-gradient9  justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                            <Button
                              className="capitalize font-semibold lg:ml-[207px] xl:ml-[260px] 2xl:ml-[292px] 3xl:ml-[351px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[21%]"
                              shape="CircleBorder12"
                              size="sm"
                              variant="GradientBlue700Indigo900"
                            >
                              Reserved
                            </Button>
                            <Img
                              src="images/img_group51.svg"
                              className="GroupFiftyOne"
                              alt="GroupFifty One Seventeen"
                            />
                            <Row className="items-center justify-end mb-[1px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                              <Img
                                src="images/img_vendorplatinum.png"
                                className="VendorSilver"
                                alt="VendorPlatinum One One"
                              />
                              <Img
                                src="images/img_ambassadorgold.png"
                                className="AmbassadorSilv"
                                alt="AmbassadorGold One Three"
                              />
                            </Row>
                          </Column>
                        </Column>
                        <Column className="font-prompt items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] pt-[4px] w-[93%]">
                          <Column className="justify-start w-[100%]">
                            <Text
                              className="columnmattisetiamsa"
                              variant="body7"
                            >
                              Mattis etiam sapien amet orci mi amet auctor
                              egestas. Faucibus duis.
                            </Text>
                            <Row className="font-poppins items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[71%]">
                              <Row className="items-center justify-evenly w-[35%]">
                                <Img
                                  src="images/img_calendar_16X16.svg"
                                  className="clock"
                                  alt="calendar One Ten"
                                />
                                <Text className="date" variant="body12">
                                  15-Oct-2022
                                </Text>
                              </Row>
                              <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                                <Img
                                  src="images/img_thumbsup.svg"
                                  className="clock"
                                  alt="thumbsup One Eight"
                                />
                                <Text className="likes" variant="body12">
                                  0
                                </Text>
                              </Row>
                              <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                                <Img
                                  src="images/img_star.svg"
                                  className="clock"
                                  alt="star One Nine"
                                />
                                <Text className="ratings" variant="body12">
                                  5(20)
                                </Text>
                              </Row>
                              <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
                                <Img
                                  src="images/img_share.svg"
                                  className="clock"
                                  alt="share One Eight"
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
                            <Column className="font-poppins items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                              <Column className="justify-start w-[100%]">
                                <Row className="items-center w-[40%]">
                                  <Img
                                    src="images/img_clock_16X16.svg"
                                    className="clock"
                                    alt="clock One"
                                  />
                                  <Text className="rowbag" variant="body12">
                                    12-Dec-2022 04:15 PM
                                  </Text>
                                </Row>
                                <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                                  <Row className="items-center justify-between w-[59%]">
                                    <Column className="items-center w-[30%]">
                                      <Row className="items-start justify-evenly w-[100%]">
                                        <Img
                                          src="images/img_trophy.svg"
                                          className="clock"
                                          alt="trophy One Two"
                                        />
                                        <Text
                                          className="status1"
                                          variant="body12"
                                        >
                                          Coming
                                        </Text>
                                      </Row>
                                    </Column>
                                    <Row className="items-center justify-center w-[20%]">
                                      <Img
                                        src="images/img_globe.svg"
                                        className="clock"
                                        alt="globe One Two"
                                      />
                                      <Text className="rowbag" variant="body12">
                                        UAE
                                      </Text>
                                    </Row>
                                    <Column className="items-center w-[18%]">
                                      <Row className="items-center justify-evenly w-[100%]">
                                        <Img
                                          src="images/img_volume.svg"
                                          className="clock"
                                          alt="volume One Three"
                                        />
                                        <Text
                                          className="rowuser"
                                          variant="body12"
                                        >
                                          100
                                        </Text>
                                      </Row>
                                    </Column>
                                    <Row className="items-center justify-evenly w-[18%]">
                                      <Img
                                        src="images/img_file_16X16.svg"
                                        className="clock"
                                        alt="file One One"
                                      />
                                      <Text
                                        className="rowuser"
                                        variant="body12"
                                      >
                                        100
                                      </Text>
                                    </Row>
                                  </Row>
                                  <Button
                                    className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[15%]"
                                    shape="CircleBorder12"
                                    size="sm"
                                    variant="GradientBlue700Indigo900"
                                  >
                                    Paid
                                  </Button>
                                </Row>
                              </Column>
                            </Column>
                            <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                                    alt="grid Fourteen"
                                  />
                                </Button>
                                <Column className="w-[70%]">
                                  <Text
                                    className="font-semibold text-black_900 w-[auto]"
                                    variant="body10"
                                  >
                                    {"<Business Name>"}
                                  </Text>
                                  <Text
                                    className="TitleatCompa"
                                    variant="body12"
                                  >
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
                                alt="arrowdown One Ten"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[12px] xl:pb-[15px] 2xl:pb-[17px] 3xl:pb-[20px] rounded-radius10 shadow-bs6 w-[32%]">
                        <Column
                          className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group51_1.png')",
                          }}
                        >
                          <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                            <Button
                              className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[19%]"
                              shape="CircleBorder12"
                              size="sm"
                              variant="GradientDeeporangeA400Pink900"
                            >
                              Reserve
                            </Button>
                            <Img
                              src="images/img_group51.svg"
                              className="GroupFiftyOne"
                              alt="GroupFifty Two Three"
                            />
                            <Row className="items-center justify-end mb-[1px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
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
                        <Column className="font-prompt items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] pt-[4px] w-[93%]">
                          <Column className="justify-start w-[100%]">
                            <Text
                              className="columnmattisetiamsa"
                              variant="body7"
                            >
                              Mattis etiam sapien amet orci mi amet auctor
                              egestas. Faucibus duis.
                            </Text>
                            <Row className="font-poppins items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[71%]">
                              <Row className="items-center justify-evenly w-[35%]">
                                <Img
                                  src="images/img_calendar_16X16.svg"
                                  className="clock"
                                  alt="calendar Two Ten"
                                />
                                <Text className="date" variant="body12">
                                  15-Oct-2022
                                </Text>
                              </Row>
                              <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                                <Img
                                  src="images/img_thumbsup.svg"
                                  className="clock"
                                  alt="thumbsup Two Eight"
                                />
                                <Text className="likes" variant="body12">
                                  0
                                </Text>
                              </Row>
                              <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                                <Img
                                  src="images/img_star.svg"
                                  className="clock"
                                  alt="star Two Nine"
                                />
                                <Text className="ratings" variant="body12">
                                  5(20)
                                </Text>
                              </Row>
                              <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
                                <Img
                                  src="images/img_share.svg"
                                  className="clock"
                                  alt="share Two Eight"
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
                                  alt="overflowmenu Two Ten"
                                />
                              </Button>
                            </Row>
                            <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                            <Column className="font-poppins items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                              <Column className="justify-start w-[100%]">
                                <Row className="items-center w-[40%]">
                                  <Img
                                    src="images/img_clock_16X16.svg"
                                    className="clock"
                                    alt="clock Two"
                                  />
                                  <Text className="rowbag" variant="body12">
                                    12-Dec-2022 04:15 PM
                                  </Text>
                                </Row>
                                <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                                  <Row className="items-center justify-between w-[59%]">
                                    <Column className="items-center w-[30%]">
                                      <Row className="items-start justify-evenly w-[100%]">
                                        <Img
                                          src="images/img_trophy.svg"
                                          className="clock"
                                          alt="trophy Two Two"
                                        />
                                        <Text
                                          className="status1"
                                          variant="body12"
                                        >
                                          Coming
                                        </Text>
                                      </Row>
                                    </Column>
                                    <Row className="items-center justify-center w-[20%]">
                                      <Img
                                        src="images/img_globe.svg"
                                        className="clock"
                                        alt="globe Two Two"
                                      />
                                      <Text className="rowbag" variant="body12">
                                        UAE
                                      </Text>
                                    </Row>
                                    <Column className="items-center w-[18%]">
                                      <Row className="items-center justify-evenly w-[100%]">
                                        <Img
                                          src="images/img_volume.svg"
                                          className="clock"
                                          alt="volume Two Three"
                                        />
                                        <Text
                                          className="rowuser"
                                          variant="body12"
                                        >
                                          100
                                        </Text>
                                      </Row>
                                    </Column>
                                    <Row className="items-center justify-evenly w-[18%]">
                                      <Img
                                        src="images/img_file_16X16.svg"
                                        className="clock"
                                        alt="file Two One"
                                      />
                                      <Text
                                        className="rowuser"
                                        variant="body12"
                                      >
                                        100
                                      </Text>
                                    </Row>
                                  </Row>
                                  <Button
                                    className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[15%]"
                                    shape="CircleBorder12"
                                    size="sm"
                                    variant="GradientBlue700Indigo900"
                                  >
                                    Paid
                                  </Button>
                                </Row>
                              </Column>
                            </Column>
                            <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                          </Column>
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
                                    alt="user One Nine"
                                  />
                                </Button>
                                <Column className="items-center justify-start mt-[3px] w-[69%]">
                                  <Text
                                    className="font-semibold text-black_900 w-[auto]"
                                    variant="body10"
                                  >
                                    {"<Member Name>"}
                                  </Text>
                                  <Text
                                    className="TitleatCompa"
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
                                alt="arrowdown Two Ten"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Button
                      className="capitalize font-medium lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[13%]"
                      shape="CircleBorder22"
                      size="lg"
                      variant="OutlineRedA701"
                    >
                      Discover All
                    </Button>
                  </Column>
                  <Column className="listpersonal_profiles">
                    <Row className="items-end justify-between w-[100%]">
                      <Button
                        className="capitalize font-medium lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[9%]"
                        shape="CircleBorder25"
                        size="lg"
                        variant="OutlineBlack90033"
                      >
                        Venues
                      </Button>
                      <Img
                        src="images/img_arrows.svg"
                        className="arrows_Two"
                        alt="arrows Sixteen"
                      />
                    </Row>
                    <Row className="font-prompt items-center justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[32%]">
                        <Column
                          className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_image_16.png')",
                          }}
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
                                alt="VendorPlatinum Fourteen"
                              />
                              <Img
                                src="images/img_ambassadorgold.png"
                                className="AmbassadorSilv"
                                alt="AmbassadorGold Thirteen"
                              />
                            </Row>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                          <Column className="items-center justify-start w-[100%]">
                            <Column className="justify-start w-[100%]">
                              <Row className="items-start justify-between w-[100%]">
                                <Text
                                  className="rownameoftheve"
                                  variant="body7"
                                >
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
                                    alt="overflowmenu Twenty"
                                  />
                                </Button>
                              </Row>
                              <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[71%]">
                                <Row className="items-center justify-evenly w-[35%]">
                                  <Img
                                    src="images/img_calendar_16X16.svg"
                                    className="clock"
                                    alt="calendar Twenty"
                                  />
                                  <Text className="date" variant="body12">
                                    15-Oct-2022
                                  </Text>
                                </Row>
                                <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="clock"
                                    alt="thumbsup Eighteen"
                                  />
                                  <Text className="likes" variant="body12">
                                    0
                                  </Text>
                                </Row>
                                <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                                  <Img
                                    src="images/img_star.svg"
                                    className="clock"
                                    alt="star Sixteen"
                                  />
                                  <Text className="ratings" variant="body12">
                                    5(20)
                                  </Text>
                                </Row>
                                <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
                                  <Img
                                    src="images/img_share.svg"
                                    className="clock"
                                    alt="share Eighteen"
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
                                    alt="location Five"
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
                                    alt="grid Fifteen"
                                  />
                                </Button>
                                <Column className="w-[70%]">
                                  <Text
                                    className="font-semibold text-black_900 w-[auto]"
                                    variant="body10"
                                  >
                                    {"<Business Name>"}
                                  </Text>
                                  <Text
                                    className="TitleatCompa"
                                    variant="body12"
                                  >
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
                                alt="arrowdown TwentyOne"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[14px] xl:pb-[18px] 2xl:pb-[20px] 3xl:pb-[25px] rounded-radius10 shadow-bs6 w-[32%]">
                        <Column
                          className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_image_16.png')",
                          }}
                        >
                          <Column className="bg-gradient9  justify-end lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                            <Img
                              src="images/img_group51.svg"
                              className="GroupFiftyOne_Two"
                              alt="GroupFifty One Eighteen"
                            />
                            <Row className="items-center justify-end lg:ml-[206px] xl:ml-[258px] 2xl:ml-[290px] 3xl:ml-[348px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                              <Img
                                src="images/img_vendorplatinum.png"
                                className="VendorSilver"
                                alt="VendorPlatinum One Two"
                              />
                              <Img
                                src="images/img_ambassadorgold.png"
                                className="AmbassadorSilv"
                                alt="AmbassadorGold One Four"
                              />
                            </Row>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                          <Column className="items-center justify-start w-[100%]">
                            <Column className="justify-start w-[100%]">
                              <Row className="items-start justify-between w-[100%]">
                                <Text
                                  className="rownameoftheve_one"
                                  variant="body7"
                                >
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
                                    alt="overflowmenu Two Eleven"
                                  />
                                </Button>
                              </Row>
                              <Row className="font-poppins items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[71%]">
                                <Row className="items-center justify-evenly w-[35%]">
                                  <Img
                                    src="images/img_calendar_16X16.svg"
                                    className="clock"
                                    alt="calendar One Eleven"
                                  />
                                  <Text className="date" variant="body12">
                                    15-Oct-2022
                                  </Text>
                                </Row>
                                <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="clock"
                                    alt="thumbsup One Nine"
                                  />
                                  <Text className="likes" variant="body12">
                                    0
                                  </Text>
                                </Row>
                                <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                                  <Img
                                    src="images/img_star.svg"
                                    className="clock"
                                    alt="star One Ten"
                                  />
                                  <Text className="ratings" variant="body12">
                                    5(20)
                                  </Text>
                                </Row>
                                <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
                                  <Img
                                    src="images/img_share.svg"
                                    className="clock"
                                    alt="share One Nine"
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
                                    alt="overflowmenu Three"
                                  />
                                </Button>
                              </Row>
                              <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                              <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                                <Row className="items-center justify-evenly w-[12%]">
                                  <Img
                                    src="images/img_globe.svg"
                                    className="clock"
                                    alt="globe One Three"
                                  />
                                  <Text className="rowuser" variant="body12">
                                    UAE
                                  </Text>
                                </Row>
                                <Row className="items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[15%]">
                                  <Img
                                    src="images/img_location_16X16.svg"
                                    className="clock"
                                    alt="location One Five"
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
                                    alt="grid One Three"
                                  />
                                </Button>
                                <Column className="w-[70%]">
                                  <Text
                                    className="font-semibold text-black_900 w-[auto]"
                                    variant="body10"
                                  >
                                    {"<Business Name>"}
                                  </Text>
                                  <Text
                                    className="TitleatCompa"
                                    variant="body12"
                                  >
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
                                alt="arrowdown One Eleven"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 border border-gray_201 border-solid items-center lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 shadow-bs6 w-[32%]">
                        <Column
                          className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_image_16.png')",
                          }}
                        >
                          <Column className="bg-gradient9  justify-end lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                            <Img
                              src="images/img_group51.svg"
                              className="GroupFiftyOne_Two"
                              alt="GroupFifty Two Four"
                            />
                            <Row className="items-center justify-end lg:ml-[206px] xl:ml-[258px] 2xl:ml-[290px] 3xl:ml-[348px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[17px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                              <Img
                                src="images/img_vendorplatinum.png"
                                className="VendorSilver"
                                alt="VendorPlatinum Two One"
                              />
                              <Img
                                src="images/img_ambassadorgold.png"
                                className="AmbassadorSilv"
                                alt="AmbassadorGold Two One"
                              />
                            </Row>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                          <Column className="items-center justify-start w-[100%]">
                            <Column className="justify-start w-[100%]">
                              <Row className="items-start justify-between w-[100%]">
                                <Text
                                  className="rownameoftheve"
                                  variant="body7"
                                >
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
                              <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[71%]">
                                <Row className="items-center justify-evenly w-[35%]">
                                  <Img
                                    src="images/img_calendar_16X16.svg"
                                    className="clock"
                                    alt="calendar Two Eleven"
                                  />
                                  <Text className="date" variant="body12">
                                    15-Oct-2022
                                  </Text>
                                </Row>
                                <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="clock"
                                    alt="thumbsup Two Nine"
                                  />
                                  <Text className="likes" variant="body12">
                                    0
                                  </Text>
                                </Row>
                                <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                                  <Img
                                    src="images/img_star.svg"
                                    className="clock"
                                    alt="star Two Ten"
                                  />
                                  <Text className="ratings" variant="body12">
                                    5(20)
                                  </Text>
                                </Row>
                                <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
                                  <Img
                                    src="images/img_share.svg"
                                    className="clock"
                                    alt="share Two Nine"
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
                                    alt="overflowmenu Five"
                                  />
                                </Button>
                              </Row>
                              <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                              <Row className="font-poppins items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                                <Row className="items-center justify-evenly w-[12%]">
                                  <Img
                                    src="images/img_globe.svg"
                                    className="clock"
                                    alt="globe Two Three"
                                  />
                                  <Text className="rowuser" variant="body12">
                                    UAE
                                  </Text>
                                </Row>
                                <Row className="items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[15%]">
                                  <Img
                                    src="images/img_location_16X16.svg"
                                    className="clock"
                                    alt="location Two Five"
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
                                    alt="grid Two One"
                                  />
                                </Button>
                                <Column className="w-[70%]">
                                  <Text
                                    className="font-semibold text-black_900 w-[auto]"
                                    variant="body10"
                                  >
                                    {"<Business Name>"}
                                  </Text>
                                  <Text
                                    className="TitleatCompa"
                                    variant="body12"
                                  >
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
                                alt="arrowdown Two Eleven"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Button
                      className="capitalize font-medium lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[13%]"
                      shape="CircleBorder22"
                      size="lg"
                      variant="OutlineRedA701"
                    >
                      Discover All
                    </Button>
                  </Column>
                </List>
                <Stack className="font-prompt 3xl:h-[103px] lg:h-[61px] xl:h-[77px] 2xl:h-[86px] lg:mt-[31px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] w-[43%]">
                  <Text className="HandPicked" as="h1" variant="h1">
                    Hand Picked
                  </Text>
                  <Text className="MembersProfile" variant="body2">
                    V-Webinars Webinars
                  </Text>
                </Stack>
                <Column className="font-poppins items-center justify-start lg:mt-[34px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] w-[100%]">
                  <Row className="items-end justify-between w-[100%]">
                    <Button
                      className="capitalize font-medium lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[10%]"
                      shape="CircleBorder25"
                      size="lg"
                      variant="OutlineBlack90033"
                    >
                      Webinars
                    </Button>
                    <Img
                      src="images/img_arrows.svg"
                      className="arrows_Two"
                      alt="arrows Seventeen"
                    />
                  </Row>
                  <List
                    className="lg:gap-[20px] xl:gap-[25px] 2xl:gap-[28px] 3xl:gap-[34px] grid grid-cols-3 min-h-[auto] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]"
                    orientation="horizontal"
                  >
                    <Column className="pages">
                      <Column
                        className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group51_1.png')",
                        }}
                      >
                        <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                          <Button
                            className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[19%]"
                            shape="CircleBorder12"
                            size="sm"
                            variant="GradientDeeporangeA400Pink900"
                          >
                            Reserve
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
                              alt="VendorPlatinum Fifteen"
                            />
                            <Img
                              src="images/img_ambassadorgold.png"
                              className="AmbassadorSilv"
                              alt="AmbassadorGold Fourteen"
                            />
                          </Row>
                        </Column>
                      </Column>
                      <Column className="font-prompt items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] pt-[4px] w-[93%]">
                        <Column className="justify-start w-[100%]">
                          <Text className="columntitleofthec" variant="body7">
                            Nisl purus vitae leo id vitae. Consectetur tincidunt
                            fames amet.
                          </Text>
                          <Row className="font-poppins items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[71%]">
                            <Row className="items-center justify-evenly w-[35%]">
                              <Img
                                src="images/img_calendar_16X16.svg"
                                className="clock"
                                alt="calendar TwentyOne"
                              />
                              <Text className="date" variant="body12">
                                15-Oct-2022
                              </Text>
                            </Row>
                            <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                              <Img
                                src="images/img_thumbsup.svg"
                                className="clock"
                                alt="thumbsup Nineteen"
                              />
                              <Text className="likes" variant="body12">
                                0
                              </Text>
                            </Row>
                            <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                              <Img
                                src="images/img_star.svg"
                                className="clock"
                                alt="star Seventeen"
                              />
                              <Text className="ratings" variant="body12">
                                5(20)
                              </Text>
                            </Row>
                            <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
                              <Img
                                src="images/img_share.svg"
                                className="clock"
                                alt="share Nineteen"
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
                                alt="overflowmenu TwentyOne"
                              />
                            </Button>
                          </Row>
                          <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                          <Column className="font-poppins items-center justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                            <Column className="justify-start w-[100%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Row className="items-center justify-between lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[60%]">
                                  <Row className="items-center justify-evenly w-[65%]">
                                    <Img
                                      src="images/img_clock_16X16.svg"
                                      className="clock"
                                      alt="clock Four"
                                    />
                                    <Text className="rowuser" variant="body12">
                                      12-Nov-2022 04:15 PM
                                    </Text>
                                  </Row>
                                  <Column className="items-center w-[29%]">
                                    <Row className="items-start justify-evenly w-[100%]">
                                      <Img
                                        src="images/img_trophy.svg"
                                        className="clock"
                                        alt="trophy Three"
                                      />
                                      <Text
                                        className="status1"
                                        variant="body12"
                                      >
                                        Coming
                                      </Text>
                                    </Row>
                                  </Column>
                                </Row>
                                <Button
                                  className="capitalize font-semibold mb-[1px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[15%]"
                                  shape="CircleBorder12"
                                  size="sm"
                                  variant="GradientTeal800GreenA700"
                                >
                                  Free
                                </Button>
                              </Row>
                              <Row className="items-center ml-[1px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[61%]">
                                <Column className="items-center w-[13%]">
                                  <Row className="items-center justify-evenly w-[100%]">
                                    <Img
                                      src="images/img_volume.svg"
                                      className="clock"
                                      alt="volume Ten"
                                    />
                                    <Text className="rowuser" variant="body12">
                                      0
                                    </Text>
                                  </Row>
                                </Column>
                                <Row className="items-center justify-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[17%]">
                                  <Img
                                    src="images/img_file_16X16.svg"
                                    className="clock"
                                    alt="file Two"
                                  />
                                  <Text className="rowbag" variant="body12">
                                    100
                                  </Text>
                                </Row>
                                <Row className="items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] pr-[1px] py-[1px] w-[30%]">
                                  <Img
                                    src="images/img_clock_16X16.svg"
                                    className="clock3"
                                    alt="clock One One"
                                  />
                                  <Text className="rowbag" variant="body12">
                                    01H 30M
                                  </Text>
                                </Row>
                                <Row className="items-center justify-evenly lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[19%]">
                                  <Img
                                    src="images/img_location_16X16.svg"
                                    className="clock"
                                    alt="location Six"
                                  />
                                  <Text className="rowuser" variant="body12">
                                    UAE
                                  </Text>
                                </Row>
                              </Row>
                            </Column>
                          </Column>
                          <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                        </Column>
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
                                  alt="user Eighteen"
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
                              alt="arrowdown TwentyTwo"
                            />
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="pages">
                      <Column
                        className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group51_1.png')",
                        }}
                      >
                        <Column className="bg-gradient9  justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                          <Button
                            className="capitalize font-semibold lg:ml-[207px] xl:ml-[260px] 2xl:ml-[292px] 3xl:ml-[351px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[21%]"
                            shape="CircleBorder12"
                            size="sm"
                            variant="GradientGray501Bluegray400"
                          >
                            Attended
                          </Button>
                          <Img
                            src="images/img_group51.svg"
                            className="GroupFiftyOne"
                            alt="GroupFifty Six"
                          />
                          <Row className="items-center justify-end mb-[1px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                            <Img
                              src="images/img_vendorplatinum.png"
                              className="VendorSilver"
                              alt="VendorPlatinum Sixteen"
                            />
                            <Img
                              src="images/img_ambassadorgold.png"
                              className="AmbassadorSilv"
                              alt="AmbassadorGold Fifteen"
                            />
                          </Row>
                        </Column>
                      </Column>
                      <Column className="font-prompt items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] pt-[4px] w-[93%]">
                        <Column className="justify-start w-[100%]">
                          <Text className="columntitleofthec" variant="body7">
                            Nisl purus vitae leo id vitae. Consectetur tincidunt
                            fames amet.
                          </Text>
                          <Row className="font-poppins items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[71%]">
                            <Row className="items-center justify-evenly w-[35%]">
                              <Img
                                src="images/img_calendar_16X16.svg"
                                className="clock"
                                alt="calendar TwentyTwo"
                              />
                              <Text className="date" variant="body12">
                                15-Oct-2022
                              </Text>
                            </Row>
                            <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                              <Img
                                src="images/img_thumbsup.svg"
                                className="clock"
                                alt="thumbsup Twenty"
                              />
                              <Text className="likes" variant="body12">
                                0
                              </Text>
                            </Row>
                            <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                              <Img
                                src="images/img_star.svg"
                                className="clock"
                                alt="star Eighteen"
                              />
                              <Text className="ratings" variant="body12">
                                5(20)
                              </Text>
                            </Row>
                            <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
                              <Img
                                src="images/img_share.svg"
                                className="clock"
                                alt="share Twenty"
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
                                alt="overflowmenu TwentyTwo"
                              />
                            </Button>
                          </Row>
                          <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                          <Column className="font-poppins items-center justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[99%]">
                            <Column className="justify-start w-[100%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Row className="items-center justify-between 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[59%]">
                                  <Row className="items-center justify-evenly w-[67%]">
                                    <Img
                                      src="images/img_clock_16X16.svg"
                                      className="clock"
                                      alt="clock Five"
                                    />
                                    <Text className="rowuser" variant="body12">
                                      12-Mar-2022 04:15 PM
                                    </Text>
                                  </Row>
                                  <Row className="items-start justify-evenly w-[28%]">
                                    <Img
                                      src="images/img_trophy.svg"
                                      className="clock"
                                      alt="trophy Four"
                                    />
                                    <Text className="status1" variant="body12">
                                      Expired
                                    </Text>
                                  </Row>
                                </Row>
                                <Button
                                  className="capitalize font-semibold mb-[2px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[15%]"
                                  shape="CircleBorder12"
                                  size="sm"
                                  variant="GradientBlue700Indigo900"
                                >
                                  Paid
                                </Button>
                              </Row>
                              <Row className="items-center ml-[1px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[61%]">
                                <Row className="items-center justify-evenly w-[14%]">
                                  <Img
                                    src="images/img_volume.svg"
                                    className="clock"
                                    alt="volume Eleven"
                                  />
                                  <Text className="soldtimes" variant="body12">
                                    10
                                  </Text>
                                </Row>
                                <Row className="items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[17%]">
                                  <Img
                                    src="images/img_file_16X16.svg"
                                    className="clock"
                                    alt="file Three"
                                  />
                                  <Text className="rowbag" variant="body12">
                                    100
                                  </Text>
                                </Row>
                                <Row className="items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] pr-[1px] py-[1px] w-[30%]">
                                  <Img
                                    src="images/img_clock_16X16.svg"
                                    className="clock3"
                                    alt="clock One Two"
                                  />
                                  <Text className="rowbag" variant="body12">
                                    01H 30M
                                  </Text>
                                </Row>
                                <Row className="items-center justify-evenly lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[19%]">
                                  <Img
                                    src="images/img_location_16X16.svg"
                                    className="clock"
                                    alt="location Seven"
                                  />
                                  <Text className="rowuser" variant="body12">
                                    UAE
                                  </Text>
                                </Row>
                              </Row>
                            </Column>
                          </Column>
                          <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
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
                                  alt="grid Sixteen"
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
                              alt="arrowdown TwentyThree"
                            />
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="pages">
                      <Column
                        className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group51_1.png')",
                        }}
                      >
                        <Column className="bg-gradient9  justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                          <Button
                            className="capitalize font-semibold lg:ml-[207px] xl:ml-[260px] 2xl:ml-[292px] 3xl:ml-[351px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[21%]"
                            shape="CircleBorder12"
                            size="sm"
                            variant="GradientBlue700Indigo900"
                          >
                            Reserved
                          </Button>
                          <Img
                            src="images/img_group51.svg"
                            className="GroupFiftyOne"
                            alt="GroupFifty Seven"
                          />
                          <Row className="items-center justify-end mb-[1px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                            <Img
                              src="images/img_vendorplatinum.png"
                              className="VendorSilver"
                              alt="VendorPlatinum Seventeen"
                            />
                            <Img
                              src="images/img_ambassadorgold.png"
                              className="AmbassadorSilv"
                              alt="AmbassadorGold Sixteen"
                            />
                          </Row>
                        </Column>
                      </Column>
                      <Column className="font-prompt items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] pt-[4px] w-[93%]">
                        <Column className="items-center justify-start w-[100%]">
                          <Column className="justify-start w-[100%]">
                            <Text className="columntitleofthec" variant="body7">
                              Nisl purus vitae leo id vitae. Consectetur
                              tincidunt fames amet.
                            </Text>
                            <Row className="font-poppins items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[71%]">
                              <Row className="items-center justify-evenly w-[35%]">
                                <Img
                                  src="images/img_calendar_16X16.svg"
                                  className="clock"
                                  alt="calendar TwentyThree"
                                />
                                <Text className="date" variant="body12">
                                  15-Oct-2022
                                </Text>
                              </Row>
                              <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                                <Img
                                  src="images/img_thumbsup.svg"
                                  className="clock"
                                  alt="thumbsup TwentyOne"
                                />
                                <Text className="likes" variant="body12">
                                  0
                                </Text>
                              </Row>
                              <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                                <Img
                                  src="images/img_star.svg"
                                  className="clock"
                                  alt="star Nineteen"
                                />
                                <Text className="ratings" variant="body12">
                                  5(20)
                                </Text>
                              </Row>
                              <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
                                <Img
                                  src="images/img_share.svg"
                                  className="clock"
                                  alt="share TwentyOne"
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
                                  alt="overflowmenu TwentyThree"
                                />
                              </Button>
                            </Row>
                            <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                            <Row className="font-poppins items-end justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[100%]">
                              <Row className="items-center justify-between 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[35%]">
                                <Row className="items-center justify-evenly w-[33%]">
                                  <Img
                                    src="images/img_signal.svg"
                                    className="clock"
                                    alt="signal"
                                  />
                                  <Text className="rowuser" variant="body12">
                                    Live
                                  </Text>
                                </Row>
                                <Row className="items-start justify-evenly w-[59%]">
                                  <Img
                                    src="images/img_trophy.svg"
                                    className="clock"
                                    alt="trophy Five"
                                  />
                                  <Text className="status1" variant="body12">
                                    Evergreen
                                  </Text>
                                </Row>
                              </Row>
                              <Button
                                className="capitalize font-semibold mb-[2px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[15%]"
                                shape="CircleBorder12"
                                size="sm"
                                variant="GradientTeal800GreenA700"
                              >
                                Free
                              </Button>
                            </Row>
                            <Row className="font-poppins items-center ml-[1px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[61%]">
                              <Column className="items-center w-[13%]">
                                <Row className="items-center justify-evenly w-[100%]">
                                  <Img
                                    src="images/img_volume.svg"
                                    className="clock"
                                    alt="volume Twelve"
                                  />
                                  <Text className="rowuser" variant="body12">
                                    0
                                  </Text>
                                </Row>
                              </Column>
                              <Row className="items-center justify-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[17%]">
                                <Img
                                  src="images/img_file_16X16.svg"
                                  className="clock"
                                  alt="file Four"
                                />
                                <Text className="rowbag" variant="body12">
                                  100
                                </Text>
                              </Row>
                              <Row className="items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] pr-[1px] py-[1px] w-[30%]">
                                <Img
                                  src="images/img_clock_16X16.svg"
                                  className="clock3"
                                  alt="clock Six"
                                />
                                <Text className="rowbag" variant="body12">
                                  01H 30M
                                </Text>
                              </Row>
                              <Row className="items-center justify-evenly lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[19%]">
                                <Img
                                  src="images/img_location_16X16.svg"
                                  className="clock"
                                  alt="location Eight"
                                />
                                <Text className="rowuser" variant="body12">
                                  UAE
                                </Text>
                              </Row>
                            </Row>
                            <Line className="bg-black_900_0c h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                          </Column>
                        </Column>
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
                                  alt="user Nineteen"
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
                              alt="arrowdown TwentyFour"
                            />
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                  </List>
                  <Button
                    className="capitalize font-medium lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[13%]"
                    shape="CircleBorder22"
                    size="lg"
                    variant="OutlineRedA701"
                  >
                    Discover All
                  </Button>
                </Column>
                <Stack className="font-prompt 3xl:h-[103px] lg:h-[61px] xl:h-[77px] 2xl:h-[86px] lg:mt-[31px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] w-[43%]">
                  <Text className="HandPicked" as="h1" variant="h1">
                    Hand Picked
                  </Text>
                  <Text className="DiscoverTopCo" variant="body2">
                    V-Experts Consultations
                  </Text>
                </Stack>
                <Column className="font-poppins items-center justify-start lg:mt-[34px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] w-[100%]">
                  <Row className="items-end justify-between w-[100%]">
                    <Button
                      className="capitalize font-medium lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[13%]"
                      shape="CircleBorder25"
                      size="lg"
                      variant="OutlineBlack90033"
                    >
                      Consultations
                    </Button>
                    <Img
                      src="images/img_arrows.svg"
                      className="arrows_Two"
                      alt="arrows Eighteen"
                    />
                  </Row>
                  <List
                    className="lg:gap-[20px] xl:gap-[25px] 2xl:gap-[28px] 3xl:gap-[34px] grid grid-cols-3 min-h-[auto] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]"
                    orientation="horizontal"
                  >
                    <Column className="pages">
                      <Column
                        className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_image_18.png')",
                        }}
                      >
                        <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                          <Button
                            className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[15%]"
                            shape="CircleBorder12"
                            size="sm"
                            variant="GradientDeeporangeA400Pink900"
                          >
                            Book
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
                              alt="VendorPlatinum Eighteen"
                            />
                            <Img
                              src="images/img_ambassadorgold.png"
                              className="AmbassadorSilv"
                              alt="AmbassadorGold Seventeen"
                            />
                          </Row>
                        </Column>
                      </Column>
                      <Column className="font-prompt items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] pt-[1px] w-[93%]">
                        <Column className="justify-start w-[100%]">
                          <Text className="columntitleofthec" variant="body7">
                            {"< Title Of The Consultation>"}
                          </Text>
                          <Row className="font-poppins items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[71%]">
                            <Row className="items-center justify-evenly w-[35%]">
                              <Img
                                src="images/img_calendar_16X16.svg"
                                className="clock"
                                alt="calendar TwentyFour"
                              />
                              <Text className="date" variant="body12">
                                15-Oct-2022
                              </Text>
                            </Row>
                            <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                              <Img
                                src="images/img_thumbsup.svg"
                                className="clock"
                                alt="thumbsup TwentyTwo"
                              />
                              <Text className="likes" variant="body12">
                                0
                              </Text>
                            </Row>
                            <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                              <Img
                                src="images/img_star.svg"
                                className="clock"
                                alt="star Twenty"
                              />
                              <Text className="ratings" variant="body12">
                                5(20)
                              </Text>
                            </Row>
                            <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
                              <Img
                                src="images/img_share.svg"
                                className="clock"
                                alt="share TwentyTwo"
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
                                alt="overflowmenu TwentyFour"
                              />
                            </Button>
                          </Row>
                          <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                          <Row className="font-poppins items-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[44%]">
                            <Row className="items-center justify-evenly w-[20%]">
                              <Img
                                src="images/img_volume.svg"
                                className="clock"
                                alt="volume Thirteen"
                              />
                              <Text className="soldtimes" variant="body12">
                                10
                              </Text>
                            </Row>
                            <Row className="items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] pr-[1px] py-[1px] w-[42%]">
                              <Img
                                src="images/img_clock_16X16.svg"
                                className="clock3"
                                alt="clock Seven"
                              />
                              <Text className="rowbag" variant="body12">
                                01H 30M
                              </Text>
                            </Row>
                            <Row className="items-center justify-evenly lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] mt-[1px] w-[20%]">
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
                        </Column>
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
                                  alt="user Twenty"
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
                              alt="arrowdown TwentyFive"
                            />
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="pages">
                      <Column
                        className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_image_18.png')",
                        }}
                      >
                        <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                          <Button
                            className="font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[20%]"
                            shape="CircleBorder12"
                            size="sm"
                            variant="GradientBlue700Indigo900"
                          >
                            Re-book
                          </Button>
                          <Img
                            src="images/img_group51.svg"
                            className="GroupFiftyOne"
                            alt="GroupFifty Nine"
                          />
                          <Row className="items-center justify-end mb-[1px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                            <Img
                              src="images/img_vendorplatinum.png"
                              className="VendorSilver"
                              alt="VendorPlatinum Nineteen"
                            />
                            <Img
                              src="images/img_ambassadorgold.png"
                              className="AmbassadorSilv"
                              alt="AmbassadorGold Eighteen"
                            />
                          </Row>
                        </Column>
                      </Column>
                      <Column className="font-prompt items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] pt-[1px] w-[93%]">
                        <Column className="justify-start w-[100%]">
                          <Text className="columntitleofthec" variant="body7">
                            {"< Title Of The Consultation>"}
                          </Text>
                          <Row className="font-poppins items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[71%]">
                            <Row className="items-center justify-evenly w-[35%]">
                              <Img
                                src="images/img_calendar_16X16.svg"
                                className="clock"
                                alt="calendar TwentyFive"
                              />
                              <Text className="date" variant="body12">
                                15-Oct-2022
                              </Text>
                            </Row>
                            <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                              <Img
                                src="images/img_thumbsup.svg"
                                className="clock"
                                alt="thumbsup TwentyThree"
                              />
                              <Text className="likes" variant="body12">
                                0
                              </Text>
                            </Row>
                            <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                              <Img
                                src="images/img_star.svg"
                                className="clock"
                                alt="star TwentyOne"
                              />
                              <Text className="ratings" variant="body12">
                                5(20)
                              </Text>
                            </Row>
                            <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
                              <Img
                                src="images/img_share.svg"
                                className="clock"
                                alt="share TwentyThree"
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
                                alt="overflowmenu TwentyFive"
                              />
                            </Button>
                          </Row>
                          <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                          <Row className="font-poppins items-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[44%]">
                            <Row className="items-center justify-evenly w-[20%]">
                              <Img
                                src="images/img_volume.svg"
                                className="clock"
                                alt="volume Fourteen"
                              />
                              <Text className="soldtimes" variant="body12">
                                15
                              </Text>
                            </Row>
                            <Row className="items-center justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] pr-[1px] py-[1px] w-[42%]">
                              <Img
                                src="images/img_clock_16X16.svg"
                                className="clock3"
                                alt="clock Eight"
                              />
                              <Text className="rowbag" variant="body12">
                                01H 30M
                              </Text>
                            </Row>
                            <Row className="items-center justify-evenly lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] mt-[1px] w-[20%]">
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
                        </Column>
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
                                  alt="user TwentyOne"
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
                              alt="arrowdown TwentySix"
                            />
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="pages">
                      <Column
                        className="bg-cover bg-repeat items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_image_18.png')",
                        }}
                      >
                        <Column className="bg-gradient9  items-end justify-start lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]">
                          <Button
                            className="capitalize font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[15%]"
                            shape="CircleBorder12"
                            size="sm"
                            variant="GradientDeeporangeA400Pink900"
                          >
                            Book
                          </Button>
                          <Img
                            src="images/img_group51.svg"
                            className="GroupFiftyOne"
                            alt="GroupFifty Ten"
                          />
                          <Row className="items-center justify-end mb-[1px] ml-[auto] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] w-[22%]">
                            <Img
                              src="images/img_vendorplatinum.png"
                              className="VendorSilver"
                              alt="VendorPlatinum Twenty"
                            />
                            <Img
                              src="images/img_ambassadorgold.png"
                              className="AmbassadorSilv"
                              alt="AmbassadorGold Nineteen"
                            />
                          </Row>
                        </Column>
                      </Column>
                      <Column className="font-prompt items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] pt-[1px] w-[93%]">
                        <Column className="justify-start w-[100%]">
                          <Text className="columntitleofthec" variant="body7">
                            {"< Title Of The Consultation>"}
                          </Text>
                          <Row className="font-poppins items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[71%]">
                            <Row className="items-center justify-evenly w-[35%]">
                              <Img
                                src="images/img_calendar_16X16.svg"
                                className="clock"
                                alt="calendar TwentySix"
                              />
                              <Text className="date" variant="body12">
                                15-Oct-2022
                              </Text>
                            </Row>
                            <Row className="items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[11%]">
                              <Img
                                src="images/img_thumbsup.svg"
                                className="clock"
                                alt="thumbsup TwentyFour"
                              />
                              <Text className="likes" variant="body12">
                                0
                              </Text>
                            </Row>
                            <Row className="items-start justify-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[20%]">
                              <Img
                                src="images/img_star.svg"
                                className="clock"
                                alt="star TwentyTwo"
                              />
                              <Text className="ratings" variant="body12">
                                5(20)
                              </Text>
                            </Row>
                            <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[16%]">
                              <Img
                                src="images/img_share.svg"
                                className="clock"
                                alt="share TwentyFour"
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
                                alt="overflowmenu TwentySix"
                              />
                            </Button>
                          </Row>
                          <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                          <Row className="font-poppins items-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[44%]">
                            <Column className="items-center justify-start w-[22%]">
                              <Row className="items-center justify-evenly w-[100%]">
                                <Img
                                  src="images/img_volume.svg"
                                  className="clock"
                                  alt="volume Fifteen"
                                />
                                <Text className="rowuser" variant="body12">
                                  20
                                </Text>
                              </Row>
                            </Column>
                            <Row className="items-center justify-center xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] pr-[1px] py-[1px] w-[42%]">
                              <Img
                                src="images/img_clock_16X16.svg"
                                className="clock3"
                                alt="clock Nine"
                              />
                              <Text className="rowbag" variant="body12">
                                01H 30M
                              </Text>
                            </Row>
                            <Row className="items-center justify-evenly lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] mt-[1px] w-[20%]">
                              <Img
                                src="images/img_checkmark.svg"
                                className="clock"
                                alt="checkmark Three"
                              />
                              <Text className="soldtimes" variant="body12">
                                15
                              </Text>
                            </Row>
                          </Row>
                          <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                        </Column>
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
                                  alt="user TwentyTwo"
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
                              alt="arrowdown TwentySeven"
                            />
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                  </List>
                  <Button
                    className="capitalize font-medium lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[13%]"
                    shape="CircleBorder22"
                    size="lg"
                    variant="OutlineRedA701"
                  >
                    Discover All
                  </Button>
                </Column>
              </Column>
            </Column>
          </Column>
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
                style={{ backgroundImage: "url('images/img_adv_2.png')" }}
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

export default FaisalDirectoryModuleVGuideMainPagePage;
