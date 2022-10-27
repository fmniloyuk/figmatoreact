import React from "react";

import { Column, Row, Stack, Text, Img, Button, Line, List } from "components";
import Header from "components/Header/Header";
import Footer3 from "components/Footer/Footer3";
import { useNavigate } from "react-router-dom";

const FaisalFreelancingModuleSingleServicePageOverviewOrderCancelledPage =
  () => {
    const navigate = useNavigate();

    function handleNavigate156() {
      navigate("/faisalfreelancingmodulesingleprojectpagemessages");
    }
    function handleNavigate157() {
      navigate("/faisalfreelancingmodulesingleprojectpagedelivery");
    }
    function handleNavigate158() {
      navigate("/faisalfreelancingmodulesingleprojectpagemessages");
    }

    return (
      <>
        <Column className="bg-white_A700 font-prompt items-center justify-start mx-[auto] pt-[2px] w-[100%]">
          <Column className="items-center justify-start w-[100%]">
            <Header className="w-[100%]" />
            <Column className="font-poppins items-center justify-start lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
              <Row className="items-start w-[85%]">
                <Column className="items-center justify-start w-[66%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Stack className="bg-white_A700 border border-bluegray_102 border-solid 2xl:h-[102px] 3xl:h-[122px] lg:h-[72px] xl:h-[90px] lg:px-[10px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[17px] rounded-radius15 w-[100%]">
                      <Column className="absolute border border-blue_700 border-solid h-[max-content] inset-[0] justify-center m-[auto] pt-[3px] px-[3px] w-[95%]">
                        <Text className="YourOrderStar" variant="body9">
                          Your Order Started.
                        </Text>
                        <Text className="WenotifiedSe" variant="body10">
                          {"We notified <Seller Name> about your order."}
                        </Text>
                        <Text className="time" variant="body10">
                          <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                            You should receive your delivery by{" "}
                          </span>
                          <span className="text-bluegray_400 font-poppins font-bold lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                            20-Nov-2022 11:38 AM
                          </span>
                        </Text>
                      </Column>
                      <Img
                        src="images/img_close_1.svg"
                        className="close1"
                        alt="close"
                      />
                    </Stack>
                  </Column>
                  <Column className="bg-white_A700 border border-bluegray_102 border-solid justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] rounded-radius15 w-[100%]">
                    <Row className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[2px] w-[75%]">
                      <Button
                        className="font-semibold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center uppercase w-[20%]"
                        size="lg"
                        variant="OutlineBlue7001_2"
                      >
                        Overview
                      </Button>
                      <Button
                        className="font-semibold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 text-center uppercase w-[16%]"
                        size="lg"
                        variant="OutlineWhiteA7001_2"
                      >
                        Details
                      </Button>
                      <Button
                        className="font-semibold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 text-center uppercase w-[26%]"
                        size="lg"
                        variant="OutlineWhiteA7001_2"
                      >
                        Requirements
                      </Button>
                      <Button
                        className="common-pointer font-semibold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 text-center uppercase w-[18%]"
                        onClick={handleNavigate157}
                        size="lg"
                        variant="OutlineWhiteA7001_2"
                      >
                        Delivery
                      </Button>
                      <Button
                        className="common-pointer font-semibold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 text-center uppercase w-[20%]"
                        onClick={handleNavigate158}
                        size="lg"
                        variant="OutlineWhiteA7001_2"
                      >
                        Messages
                      </Button>
                    </Row>
                    <Stack className="lg:h-[1041px] xl:h-[1303px] 2xl:h-[1465px] 3xl:h-[1758px] lg:mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]">
                      <Line className="absolute bg-black_900_0c lg:h-[250px] xl:h-[312px] 2xl:h-[351px] 3xl:h-[421px] left-[5%] top-[3%] w-[1px]" />
                      <Column className="absolute justify-start w-[100%]">
                        <Button
                          className="font-semibold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[13%]"
                          shape="CustomBorderLR40"
                          size="lg"
                          variant="OutlineBlack9000c1_2"
                        >
                          11-Nov-2022
                        </Button>
                        <Row className="items-start justify-evenly lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                          <div className="bg-white_A700 border border-bluegray_102 border-solid lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] w-[2%]"></div>
                          <Column className="justify-start w-[98%]">
                            <Row className="items-center w-[44%]">
                              <Button
                                className="flex lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                                size="xlIcn"
                                variant="icbOutlineBlack900201_2"
                              >
                                <Img
                                  src="images/img_file_50X50.svg"
                                  className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px]"
                                  alt="file"
                                />
                              </Button>
                              <Row className="items-start justify-between lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[82%]">
                                <Text className="commentbox" variant="body10">
                                  You placed the order.
                                </Text>
                                <Text
                                  className="font-medium text-bluegray_400 w-[auto]"
                                  variant="body12"
                                >
                                  11-Nov-2022 11:30 AM
                                </Text>
                              </Row>
                            </Row>
                            <Img
                              src="images/img_line.svg"
                              className="line"
                              alt="line"
                            />
                            <Row className="items-center justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                              <Button
                                className="flex lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                                size="xlIcn"
                                variant="icbOutlineBlack900201_2"
                              >
                                <Img
                                  src="images/img_edit_50X50.svg"
                                  className="flex items-center justify-center lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px]"
                                  alt="edit"
                                />
                              </Button>
                              <Row className="items-start justify-between pt-[4px] w-[92%]">
                                <Row className="items-start justify-between w-[49%]">
                                  <Text
                                    className="font-semibold text-black_900 w-[auto]"
                                    variant="body10"
                                  >
                                    You submitted the requirements
                                  </Text>
                                  <Text className="rowclock7" variant="body12">
                                    11-Nov-2022 11:35 AM
                                  </Text>
                                </Row>
                                <Text
                                  className="font-semibold text-blue_700 w-[auto]"
                                  variant="body10"
                                >
                                  View requirements
                                </Text>
                              </Row>
                            </Row>
                            <Img
                              src="images/img_line.svg"
                              className="line"
                              alt="line One"
                            />
                            <Row className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[41%]">
                              <Button
                                className="flex lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                                size="xlIcn"
                                variant="icbOutlineBlack900201_2"
                              >
                                <Img
                                  src="images/img_location_50X50.svg"
                                  className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px]"
                                  alt="location"
                                />
                              </Button>
                              <Row className="items-center justify-between lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[80%]">
                                <Text
                                  className="font-semibold text-black_900 w-[auto]"
                                  variant="body10"
                                >
                                  You order started.
                                </Text>
                                <Text
                                  className="font-medium text-bluegray_400 w-[auto]"
                                  variant="body12"
                                >
                                  11-Nov-2022 11:38 AM
                                </Text>
                              </Row>
                            </Row>
                            <Img
                              src="images/img_line.svg"
                              className="line"
                              alt="line Two"
                            />
                            <Row className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[53%]">
                              <Button
                                className="flex lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                                size="xlIcn"
                                variant="icbOutlineBlack900201_2"
                              >
                                <Img
                                  src="images/img_clock_50X50.svg"
                                  className="flex items-center justify-center lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px]"
                                  alt="clock"
                                />
                              </Button>
                              <Row className="items-start justify-between lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[85%]">
                                <Text
                                  className="font-semibold text-black_900 w-[auto]"
                                  variant="body10"
                                >
                                  You delivery date was updated.
                                </Text>
                                <Text className="rowclock7" variant="body12">
                                  20-Nov-2022 11:38 AM
                                </Text>
                              </Row>
                            </Row>
                            <Img
                              src="images/img_line.svg"
                              className="line"
                              alt="line Three"
                            />
                            <Row className="items-start justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                              <Column className="bg-white_A700 border border-black_900_20 border-solid lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-end px-[1px] rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]">
                                <Img
                                  src="images/img_image1_35X35.png"
                                  className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  alt="imageOne"
                                />
                              </Column>
                              <Column className="justify-start w-[92%]">
                                <Row className="items-end justify-between w-[100%]">
                                  <Row className="items-start justify-between mb-[1px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[50%]">
                                    <Text
                                      className="commentbox"
                                      variant="body10"
                                    >
                                      <span className="text-black_900 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                        {"<Member Name> "}
                                      </span>
                                      <span className="text-black_900 font-poppins font-medium lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                        Sent a Message
                                      </span>
                                    </Text>
                                    <Text
                                      className="font-medium text-bluegray_400 w-[auto]"
                                      variant="body12"
                                    >
                                      11-Nov-2022 11:38 AM
                                    </Text>
                                  </Row>
                                  <Img
                                    src="images/img_arrowup_24X24.svg"
                                    className="arrowup"
                                    alt="arrowup"
                                  />
                                </Row>
                                <Column className="items-center justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[95%]">
                                  <Text
                                    className="columndescription5"
                                    variant="body10"
                                  >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Amet, sit ullamcorper quam
                                    eget mauris sed. Sit sem urna, eget
                                    ridiculus orci. Gravida amet, etiam quis
                                    sed. Etiam amet mattis metus, fusce tellus
                                    aliquam orci. Suscipit adipiscing blandit
                                    justo, sollicitudin aliquam sit. Neque, in
                                    sit amet varius purus ipsum viverra diam
                                    odio. Donec pulvinar commodo, lacus, sed
                                    nisl sed imperdiet. Scelerisque dolor tortor
                                    ac aliquam pretium mattis. Enim, vitae duis
                                    in eu erat. Quisque bibendum enim amet vitae
                                    dui. In massa egestas aliquam pellentesque.
                                  </Text>
                                </Column>
                              </Column>
                            </Row>
                          </Column>
                        </Row>
                        <Button
                          className="font-semibold lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[13%]"
                          shape="CustomBorderLR40"
                          size="lg"
                          variant="OutlineBlack9000c1_2"
                        >
                          12-Nov-2022
                        </Button>
                        <Row className="items-start justify-end lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] pr-[1px] w-[100%]">
                          <div className="bg-white_A700 border border-bluegray_102 border-solid lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] w-[2%]"></div>
                          <Column className="justify-start w-[98%]">
                            <Line className="bg-white_A700 h-[1px] w-[8%]" />
                            <Row className="items-start justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                              <Column className="bg-white_A700 border border-black_900_20 border-solid lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-end px-[1px] rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]">
                                <Img
                                  src="images/img_image1_35X35.png"
                                  className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  alt="imageOne One"
                                />
                              </Column>
                              <Column className="justify-start w-[92%]">
                                <Row className="items-start justify-between w-[100%]">
                                  <Row className="items-start justify-between mt-[4px] w-[53%]">
                                    <Text
                                      className="font-semibold text-black_900 w-[auto]"
                                      variant="body10"
                                    >
                                      <span className="text-blue_700 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                        {"<Seller Name>"}
                                      </span>
                                      <span className="text-black_900 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                        {" "}
                                      </span>
                                      <span className="text-black_900 font-poppins font-medium lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                        Started a Video Call.
                                      </span>
                                    </Text>
                                    <Text
                                      className="rowclock7"
                                      variant="body12"
                                    >
                                      12-Nov-2022 11:30 AM
                                    </Text>
                                  </Row>
                                  <Img
                                    src="images/img_arrowup_24X24.svg"
                                    className="file_One1"
                                    alt="arrowup One"
                                  />
                                </Row>
                                <Column className="bg-gray_100 border border-black_900_0c border-solid items-center justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius10 w-[46%]">
                                  <Row className="items-start w-[97%]">
                                    <Line className="bg-gray_501 lg:h-[41px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] w-[3px]" />
                                    <Row className="items-center justify-between lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[8px] w-[97%]">
                                      <Button
                                        className="flex lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                                        size="xlIcn"
                                        variant="icbOutlineBlack900201_2"
                                      >
                                        <Img
                                          src="images/img_iconsaxlinear.svg"
                                          className="flex items-center justify-center lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px]"
                                          alt="IconsaxLinear"
                                        />
                                      </Button>
                                      <Column className="items-center w-[80%]">
                                        <Text
                                          className="font-medium text-black_900 w-[auto]"
                                          variant="body10"
                                        >
                                          Meeting ended | Duration: 12 Mins.
                                        </Text>
                                        <Text className="Sharefeedback">
                                          <span className="text-green_700 font-poppins">
                                            Share feedback
                                          </span>
                                          <span className="text-gray_501 font-poppins">
                                            {" "}
                                          </span>
                                          <span className="text-gray_501 font-poppins">
                                            about call quality
                                          </span>
                                        </Text>
                                      </Column>
                                    </Row>
                                  </Row>
                                </Column>
                              </Column>
                            </Row>
                          </Column>
                        </Row>
                        <Img
                          src="images/img_line.svg"
                          className="lineplus"
                          alt="lineplus"
                        />
                        <List
                          className="gap-[0] min-h-[auto] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]"
                          orientation="vertical"
                        >
                          <Row className="items-start justify-end 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] pr-[1px] w-[100%]">
                            <div className="bg-white_A700 border border-bluegray_102 border-solid lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] w-[2%]"></div>
                            <Column className="justify-start w-[98%]">
                              <Line className="bg-white_A700 h-[1px] w-[8%]" />
                              <Row className="items-start justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                                <Column className="bg-white_A700 border border-black_900_20 border-solid lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-end px-[1px] rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]">
                                  <Img
                                    src="images/img_image1_35X35.png"
                                    className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                    alt="imageOne Two"
                                  />
                                </Column>
                                <Column className="justify-start w-[92%]">
                                  <Row className="items-start justify-between w-[100%]">
                                    <Row className="items-start justify-between mt-[4px] w-[42%]">
                                      <Text
                                        className="font-semibold text-black_900 w-[auto]"
                                        variant="body10"
                                      >
                                        <span className="text-blue_700 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                          {"<Seller Name>"}
                                        </span>
                                        <span className="text-black_900 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                          {" "}
                                        </span>
                                        <span className="text-black_900 font-poppins font-medium lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                          Sent a File
                                        </span>
                                      </Text>
                                      <Text
                                        className="rowclock7"
                                        variant="body12"
                                      >
                                        12-Nov-2022 1:30 PM
                                      </Text>
                                    </Row>
                                    <Img
                                      src="images/img_arrowup_24X24.svg"
                                      className="file_One1"
                                      alt="arrowup Two"
                                    />
                                  </Row>
                                  <Column className="bg-gray_100 border border-black_900_0c border-solid items-center justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius10 w-[28%]">
                                    <Row className="items-start w-[95%]">
                                      <Line className="bg-gray_501 lg:h-[41px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] w-[3px]" />
                                      <Row className="items-start justify-between lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[8px] w-[94%]">
                                        <Button
                                          className="flex lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                                          size="xlIcn"
                                          variant="icbOutlineBlack90020"
                                        >
                                          <Img
                                            src="images/img_minimize_50X50.svg"
                                            className="flex items-center justify-center lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px]"
                                            alt="minimize"
                                          />
                                        </Button>
                                        <Column className="justify-start mt-[2px] w-[65%]">
                                          <Text
                                            className="font-medium text-black_900 w-[auto]"
                                            variant="body10"
                                          >
                                            {"<File Name>.ZIP"}
                                          </Text>
                                          <Text className="font-medium xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 underline w-[auto]">
                                            {"<File Size>.2MB"}
                                          </Text>
                                        </Column>
                                      </Row>
                                    </Row>
                                  </Column>
                                </Column>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="items-start justify-end 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] pr-[1px] w-[100%]">
                            <div className="bg-white_A700 border border-bluegray_102 border-solid lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] w-[2%]"></div>
                            <Column className="justify-start w-[98%]">
                              <Line className="bg-white_A700 h-[1px] w-[8%]" />
                              <Row className="items-start justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                                <Column className="bg-white_A700 border border-black_900_20 border-solid lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-end px-[1px] rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]">
                                  <Img
                                    src="images/img_image1_35X35.png"
                                    className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                    alt="imageOne Three"
                                  />
                                </Column>
                                <Column className="items-center justify-start w-[92%]">
                                  <Row className="items-end justify-between w-[100%]">
                                    <Row className="items-start justify-between mb-[1px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[50%]">
                                      <Text
                                        className="commentbox"
                                        variant="body10"
                                      >
                                        <span className="text-black_900 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                          {"<Member Name> "}
                                        </span>
                                        <span className="text-black_900 font-poppins font-medium lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                          raised a dispute
                                        </span>
                                      </Text>
                                      <Text
                                        className="font-medium text-bluegray_400 w-[auto]"
                                        variant="body12"
                                      >
                                        12-Nov-2022 7:11 PM
                                      </Text>
                                    </Row>
                                    <Img
                                      src="images/img_arrowup_24X24.svg"
                                      className="file_One1"
                                      alt="arrowup Three"
                                    />
                                  </Row>
                                  <Column className="bg-gray_100 border border-black_900_0c border-solid items-center justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius10 w-[97%]">
                                    <Row className="items-center w-[99%]">
                                      <Line className="bg-gray_501 lg:h-[41px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] w-[3px]" />
                                      <Row className="items-start justify-between lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[8px] w-[99%]">
                                        <Button
                                          className="flex lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                                          size="xlIcn"
                                          variant="icbOutlineBlack900201_2"
                                        >
                                          <Img
                                            src="images/img_search_50X50.svg"
                                            className="flex items-center justify-center lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px]"
                                            alt="search"
                                          />
                                        </Button>
                                        <Column className="items-center justify-start pr-[4px] py-[4px] w-[91%]">
                                          <Text
                                            className="columndescription_one1"
                                            variant="body10"
                                          >
                                            <span className="text-bluegray_400 font-poppins font-semibold lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                              {"<File Name>.ZIP"}
                                            </span>
                                            <span className="text-bluegray_400 font-poppins font-normal not-italic lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                              {" "}
                                              is sent by the{" "}
                                            </span>
                                            <span className="text-blue_700 font-poppins font-semibold lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                              {"<Seller Name>"}
                                            </span>
                                            <span className="text-bluegray_400 font-poppins font-normal not-italic lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                              {" "}
                                              but the quality of work is not as
                                              promised. I’ve asked for rivision
                                              and deliver the promised quality
                                              which the{" "}
                                            </span>
                                            <span className="text-blue_700 font-poppins font-semibold lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                              {"<Seller Name>"}
                                            </span>
                                            <span className="text-blue_700 font-poppins font-normal not-italic lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                              {" "}
                                            </span>
                                            <span className="text-bluegray_400 font-poppins font-normal not-italic lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                              had to deliver.
                                            </span>
                                          </Text>
                                        </Column>
                                      </Row>
                                    </Row>
                                  </Column>
                                </Column>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="items-start justify-evenly 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] w-[100%]">
                            <div className="bg-white_A700 border border-bluegray_102 border-solid lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] w-[2%]"></div>
                            <Column className="justify-start w-[98%]">
                              <Line className="bg-white_A700 h-[1px] w-[8%]" />
                              <Row className="items-start justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                                <Button
                                  className="flex lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                                  size="lgIcn"
                                  variant="icbOutlineBlack90020"
                                >
                                  <Img
                                    src="images/img_group_48X57.png"
                                    className="flex items-center justify-center"
                                    alt="videothumb"
                                  />
                                </Button>
                                <Column className="justify-start w-[92%]">
                                  <Column className="justify-start w-[100%]">
                                    <Row className="items-center justify-between w-[100%]">
                                      <Row className="items-center w-[25%]">
                                        <Text
                                          className="font-semibold text-black_900 w-[auto]"
                                          variant="body10"
                                        >
                                          VVerse{" "}
                                        </Text>
                                        <Text
                                          className="time_Four"
                                          variant="body12"
                                        >
                                          12-Nov-2022 9:02 PM
                                        </Text>
                                      </Row>
                                      <Img
                                        src="images/img_arrowup_24X24.svg"
                                        className="arrowup"
                                        alt="arrowup Four"
                                      />
                                    </Row>
                                    <Text
                                      className="columnlanguage1"
                                      variant="body10"
                                    >
                                      {"<Member Name> requested a refund."}
                                      <br />
                                      Unhappy with the work and freelancer
                                      agreed to refund all payment
                                    </Text>
                                  </Column>
                                  <Column className="bg-gray_100 border border-black_900_0c border-solid items-center justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius10 w-[90%]">
                                    <Row className="items-center w-[98%]">
                                      <Line className="bg-gray_501 lg:h-[53px] xl:h-[66px] 2xl:h-[74px] 3xl:h-[89px] w-[3px]" />
                                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[8px] pb-[4px] pr-[4px] w-[98%]">
                                        <Text
                                          className="font-semibold text-bluegray_400 w-[auto]"
                                          variant="body10"
                                        >
                                          <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                            Description:{" "}
                                          </span>
                                          <span className="text-bluegray_400 font-poppins font-normal not-italic lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                            (30820820)
                                          </span>
                                          <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                            {" "}
                                          </span>
                                          <span className="text-blue_700 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                            {"<Seller Name>"}
                                          </span>
                                          <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                            {" "}
                                          </span>
                                          <span className="text-gray_501 font-poppins font-normal not-italic lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                            11-Nov-2022 11:38 AM - 12-Nov-2022
                                            7:11 PM
                                          </span>
                                        </Text>
                                        <Text
                                          className="font-semibold xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] text-bluegray_400 w-[auto]"
                                          variant="body10"
                                        >
                                          <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                            Amount Requested:{" "}
                                          </span>
                                          <span className="text-bluegray_400 font-poppins font-normal not-italic lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                            $120.00
                                          </span>
                                        </Text>
                                        <Text className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-blue_700 underline w-[auto]">
                                          View Details
                                        </Text>
                                      </Column>
                                    </Row>
                                  </Column>
                                </Column>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="items-start justify-evenly 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] w-[100%]">
                            <div className="bg-white_A700 border border-bluegray_102 border-solid lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] w-[2%]"></div>
                            <Column className="justify-start w-[98%]">
                              <Line className="bg-white_A700 h-[1px] w-[8%]" />
                              <Row className="items-start justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                                <Column className="bg-white_A700 border border-black_900_20 border-solid lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-end px-[1px] rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]">
                                  <Img
                                    src="images/img_image1_35X35.png"
                                    className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                    alt="imageOne Four"
                                  />
                                </Column>
                                <Column className="justify-start w-[92%]">
                                  <Column className="justify-start w-[100%]">
                                    <Row className="items-start justify-between w-[100%]">
                                      <Row className="items-center mt-[4px] w-[31%]">
                                        <Text
                                          className="font-semibold text-blue_700 w-[auto]"
                                          variant="body10"
                                        >
                                          {"<Seller Name>"}
                                        </Text>
                                        <Text
                                          className="time_Four"
                                          variant="body12"
                                        >
                                          12-Nov-2022 11:11 PM
                                        </Text>
                                      </Row>
                                      <Img
                                        src="images/img_arrowup_24X24.svg"
                                        className="arrowup_Five"
                                        alt="arrowup Five"
                                      />
                                    </Row>
                                    <Column className="items-center justify-start mt-[4px] w-[21%]">
                                      <Text
                                        className="font-semibold text-black_900 w-[auto]"
                                        variant="body10"
                                      >
                                        <span className="text-black_900 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                          {"<Message> "}
                                        </span>
                                        <span className="text-black_900 font-poppins font-normal not-italic lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                          from Seller
                                        </span>
                                      </Text>
                                    </Column>
                                  </Column>
                                  <Column className="bg-gray_100 border border-black_900_0c border-solid items-center justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius10 w-[90%]">
                                    <Row className="items-start w-[98%]">
                                      <Line className="bg-gray_501 lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[84px] w-[3px]" />
                                      <Column className="justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[8px] pr-[2px] py-[2px] w-[98%]">
                                        <Text
                                          className="font-semibold text-bluegray_400 w-[auto]"
                                          variant="body10"
                                        >
                                          <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                            Invoice #:{" "}
                                          </span>
                                          <span className="text-bluegray_400 font-poppins font-normal not-italic lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                            {" "}
                                            492546372
                                          </span>
                                        </Text>
                                        <Text
                                          className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] text-bluegray_400 w-[auto]"
                                          variant="body10"
                                        >
                                          <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                            Description:{" "}
                                          </span>
                                          <span className="text-bluegray_400 font-poppins font-normal not-italic lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                            (30820820)
                                          </span>
                                          <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                            {" "}
                                          </span>
                                          <span className="text-blue_700 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                            {"<Seller Name>"}
                                          </span>
                                          <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                            {" "}
                                          </span>
                                          <span className="text-gray_501 font-poppins font-normal not-italic lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                            11-Nov-2022 11:38 AM - 12-Nov-2022
                                            7:11 PM
                                          </span>
                                        </Text>
                                        <Text
                                          className="font-semibold mb-[3px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] text-bluegray_400 w-[auto]"
                                          variant="body10"
                                        >
                                          <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                            Amount Refunded:{" "}
                                          </span>
                                          <span className="text-bluegray_400 font-poppins font-normal not-italic lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                            $120.00
                                          </span>
                                        </Text>
                                      </Column>
                                    </Row>
                                  </Column>
                                </Column>
                              </Row>
                            </Column>
                          </Row>
                        </List>
                        <Row className="border border-blue_700 border-solid items-start justify-evenly lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                          <div className="bg-white_A700 border border-blue_700 border-solid lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] w-[2%]"></div>
                          <Column className="justify-start w-[98%]">
                            <Img
                              src="images/img_line.svg"
                              className="line_Four"
                              alt="line Four"
                            />
                            <Row className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[76%]">
                              <Column className="bg-white_A700 border border-black_900_20 border-solid lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center px-[1px] rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]">
                                <Img
                                  src="images/img_image1_35X35.png"
                                  className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  alt="imageOne Five"
                                />
                              </Column>
                              <Row className="items-start justify-evenly lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] w-[89%]">
                                <Text
                                  className="font-semibold text-bluegray_400 w-[auto]"
                                  variant="body10"
                                >
                                  <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                    Your Order is cancelled. If you need to
                                    contact{" "}
                                  </span>
                                  <span className="text-blue_700 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                    {"<Seller Name>"}
                                  </span>
                                  <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                                    , Go to{" "}
                                  </span>
                                </Text>
                                <Text
                                  className="common-pointer Messages_One"
                                  variant="body10"
                                  onClick={handleNavigate156}
                                >
                                  Messages
                                </Text>
                              </Row>
                            </Row>
                            <Line className="bg-white_A700 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[8%]" />
                            <Line className="bg-white_A700 h-[1px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[8%]" />
                          </Column>
                        </Row>
                      </Column>
                    </Stack>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[33px] 3xl:pb-[1173px] lg:pb-[694px] xl:pb-[869px] 2xl:pb-[977px] w-[32%]">
                  <Column className="border border-bluegray_102 border-solid items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius15 w-[100%]">
                    <Row className="font-poppins items-end justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] w-[97%]">
                      <Text className="rowsummary" variant="body8">
                        Summary
                      </Text>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                        shape="icbCircleBorder15"
                        size="mdIcn"
                        variant="icbOutlineBlue700"
                      >
                        <Img
                          src="images/img_settings_29X29.svg"
                          className="flex items-center justify-center"
                          alt="settings"
                        />
                      </Button>
                    </Row>
                    <Row className="font-poppins items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]">
                      <Stack className="bg-bluegray_101 lg:h-[55px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] lg:pr-[3px] 2xl:pr-[4px] xl:pr-[4px] 3xl:pr-[5px] rounded-radius10 w-[33%]">
                        <Img
                          src="images/img_group543.png"
                          className="RectangleSeven2"
                          alt="RectangleSeven"
                        />
                      </Stack>
                      <Column className="justify-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] pr-[4px] pt-[4px] w-[64%]">
                        <Text className="columnyouwillgeta" variant="body10">
                          You will get a modern political campaign LOGO design
                        </Text>
                        <Button
                          className="capitalize font-semibold 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[42%]"
                          shape="CircleBorder12"
                          size="sm"
                          variant="OutlineBlue7001_2"
                        >
                          In Progress
                        </Button>
                      </Column>
                    </Row>
                    <Row className="font-poppins items-center justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[98%]">
                      <Text className="rowtheodoreroose" variant="body9">
                        Ordered by
                      </Text>
                      <Text className="BuyerName" variant="body9">
                        {"<Buyer Name>"}
                      </Text>
                    </Row>
                    <Row className="font-poppins items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[98%]">
                      <Text className="rowtheodoreroose" variant="body9">
                        Ordered from
                      </Text>
                      <Text
                        className="font-semibold text-bluegray_400 w-[auto]"
                        variant="body9"
                      >
                        {"<Seller Name>"}
                      </Text>
                    </Row>
                    <Row className="font-poppins items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] w-[98%]">
                      <Text className="OrderValue" variant="body9">
                        Order Value
                      </Text>
                      <Text className="price17" variant="body9">
                        $138.00
                      </Text>
                    </Row>
                    <Row className="font-poppins items-start justify-between lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[25px] w-[98%]">
                      <Text className="rowgeorgeeliot" variant="body9">
                        Starting Date
                      </Text>
                      <Text
                        className="font-semibold text-bluegray_400 w-[auto]"
                        variant="body9"
                      >
                        11-Nov-2022 11:38 AM
                      </Text>
                    </Row>
                    <Row className="font-poppins items-start justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[98%]">
                      <Text className="rowgeorgeeliot" variant="body9">
                        Delivery Date
                      </Text>
                      <Text
                        className="font-semibold text-bluegray_400 w-[auto]"
                        variant="body9"
                      >
                        20-Nov-2022 11:38 AM
                      </Text>
                    </Row>
                    <Row className="font-poppins items-start justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[98%]">
                      <Text className="OrderValue" variant="body9">
                        Order Number
                      </Text>
                      <Text className="price17" variant="body9">
                        ORD-SRV-12,321
                      </Text>
                    </Row>
                    <Button
                      className="capitalize font-medium font-prompt xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[25px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center text-white_A700 w-[98%]"
                      shape="CircleBorder12"
                      size="lg"
                      variant="OutlineWhiteA7001_2"
                    >
                      Order In Progress
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 border border-bluegray_102 border-solid items-center justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] p-[1px] rounded-radius15 w-[100%]">
                    <Column className="items-center justify-start 3xl:mb-[10px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] w-[100%]">
                      <Row className="items-center justify-between w-[90%]">
                        <Row className="items-start justify-between py-[2px] w-[48%]">
                          <Img
                            src="images/img_50356801.svg"
                            className="calendar"
                            alt="50356801"
                          />
                          <Column className="items-center justify-start my-[1px] w-[84%]">
                            <Text className="rowtheodoreroose" variant="body9">
                              Resolution Center
                            </Text>
                            <Text className="Resolveorderi" variant="body10">
                              Resolve order issues.
                            </Text>
                          </Column>
                        </Row>
                        <Img
                          src="images/img_arrowdown_29X29.svg"
                          className="arrowright4"
                          alt="arrowright"
                        />
                      </Row>
                      <div className="bg-white_A700 lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] rounded-bl-[15px] rounded-br-[15px] rounded-tl-[0] rounded-tr-[0] w-[100%]"></div>
                    </Column>
                  </Column>
                  <Column className="items-center justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]">
                    <Column className="bg-white_A700 border border-black_900_20 border-solid justify-start xl:p-[11px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius15 w-[100%]">
                      <Text className="lgad" variant="body13">
                        Sponsored Ads
                      </Text>
                      <Column
                        className="bg-cover bg-repeat items-center justify-start mb-[1px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] mx-[auto] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius15 w-[98%]"
                        style={{
                          backgroundImage: "url('images/img_group69704.png')",
                        }}
                      >
                        <Img
                          src="images/img_call.svg"
                          className="call10"
                          alt="call"
                        />
                        <Row className="items-start justify-center 3xl:mb-[106px] lg:mb-[62px] xl:mb-[78px] 2xl:mb-[88px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[73px] 3xl:mt-[88px] w-[24%]">
                          <Text className="rowvideo" variant="body9">
                            Video
                          </Text>
                          <Img
                            src="images/img_call.svg"
                            className="call_One2"
                            alt="call One"
                          />
                        </Row>
                      </Column>
                    </Column>
                    <Column className="font-prompt items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                      <Column className="bg-white_A700 border border-black_900_20 border-solid items-center justify-end 3xl:pr-[11px] lg:pr-[6px] xl:pr-[8px] 2xl:pr-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] rounded-radius15 w-[100%]">
                        <Column className="justify-start xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[85%]">
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
                                    <Text
                                      className="AndrewHalls"
                                      variant="body9"
                                    >
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
                                    <Text
                                      className="AndrewHalls"
                                      variant="body9"
                                    >
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
                                    <Text
                                      className="AndrewHalls"
                                      variant="body9"
                                    >
                                      Joseph Kings
                                    </Text>
                                    <Text
                                      className="SalesRepat"
                                      variant="body12"
                                    >
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
                                    <Text
                                      className="AndrewHalls"
                                      variant="body9"
                                    >
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
                                    <Text
                                      className="AndrewHalls"
                                      variant="body9"
                                    >
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
                        <Stack className="font-poppins lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] w-[94%]">
                          <Row className="absolute bg-white_A700 inset-x-[30%] items-center justify-center xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius6 w-[40%]">
                            <Text className="showmore" variant="body9">
                              Show More
                            </Text>
                            <Img
                              src="images/img_arrowdown_16X12.svg"
                              className="arrowdown5"
                              alt="arrowdown"
                            />
                          </Row>
                          <Line className="absolute bg-black_900_0c h-[1px] top-[2%] w-[100%]" />
                        </Stack>
                      </Column>
                      <Column className="bg-white_A700 border border-black_900_20 border-solid font-poppins justify-end lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:pt-[11px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] xl:px-[11px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[100%]">
                        <Text className="ad300X6001" variant="body13">
                          Sponsored Ads
                        </Text>
                        <Stack className="2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] mx-[auto] w-[85%]">
                          <Img
                            src="images/img_rectangle91.png"
                            className="RectangleNinetyOne"
                            alt="RectangleNinetyOne"
                          />
                          <Column className="absolute justify-end right-[5%] top-[100%] w-[67%]">
                            <Img
                              src="images/img_call.svg"
                              className="call_Two1"
                              alt="call Two"
                            />
                            <Text className="columncall_two" variant="body9">
                              Image 300X600
                            </Text>
                          </Column>
                        </Stack>
                      </Column>
                      <Column className="bg-white_A700 border border-black_900_20 border-solid font-poppins justify-end lg:mt-[468px] xl:mt-[586px] 2xl:mt-[659px] 3xl:mt-[791px] xl:pt-[11px] 2xl:pt-[13px] 3xl:pt-[16px] lg:pt-[9px] xl:px-[11px] 2xl:px-[13px] 3xl:px-[16px] lg:px-[9px] w-[100%]">
                        <Text className="ad20" variant="body13">
                          Sponsored Ads
                        </Text>
                        <Stack className="2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] lg:mt-[492px] xl:mt-[615px] 2xl:mt-[692px] 3xl:mt-[831px] mx-[auto] w-[96%]">
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
                </Column>
              </Row>
              <Footer3 className="lg:mt-[54px] xl:mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] w-[100%]" />
            </Column>
          </Column>
        </Column>
      </>
    );
  };

export default FaisalFreelancingModuleSingleServicePageOverviewOrderCancelledPage;
