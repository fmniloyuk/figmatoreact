import React from "react";

import { Column, Row, Button, Text, Line, Img, Stack, List } from "components";
import Header from "components/Header/Header";
import Footer3 from "components/Footer/Footer3";
import { useNavigate } from "react-router-dom";

const FaisalFreelancingModuleSingleProjectPageDetailsOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate29() {
    navigate("/faisalfreelancingmodulesingleservicepageovervieworderplaced");
  }
  function handleNavigate30() {
    navigate("/faisalfreelancingmodulesingleprojectpagerequirementsone");
  }

  return (
    <>
      <Column className="bg-white_A700 font-prompt items-center justify-start mx-[auto] pt-[2px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="font-poppins items-center justify-start lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
            <Row className="items-start w-[85%]">
              <Column className="bg-white_A700 border border-bluegray_102 border-solid justify-start lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius15 w-[66%]">
                <Row className="items-center ml-[1px] mt-[1px] w-[77%]">
                  <Button
                    className="common-pointer font-semibold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 text-center uppercase w-[20%]"
                    onClick={handleNavigate29}
                    size="lg"
                    variant="OutlineWhiteA7001_2"
                  >
                    Overview
                  </Button>
                  <Button
                    className="font-semibold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center uppercase w-[16%]"
                    size="lg"
                    variant="OutlineBlue7001_2"
                  >
                    Details
                  </Button>
                  <Button
                    className="common-pointer font-semibold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 text-center uppercase w-[26%]"
                    onClick={handleNavigate30}
                    size="lg"
                    variant="OutlineWhiteA7001_2"
                  >
                    Requirements
                  </Button>
                  <Button
                    className="font-semibold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 text-center uppercase w-[18%]"
                    size="lg"
                    variant="OutlineWhiteA7001_2"
                  >
                    Delivery
                  </Button>
                  <Button
                    className="font-semibold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 text-center uppercase w-[20%]"
                    size="lg"
                    variant="OutlineWhiteA7001_2"
                  >
                    Messages
                  </Button>
                </Row>
                <Column className="font-prompt items-center justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]">
                  <Column className="justify-start w-[100%]">
                    <Column className="items-center justify-start pt-[1px] w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="columntitleofthec" variant="body7">
                          {"<Title of the Service>..."}
                        </Text>
                        <Text className="uppercase commentbox" variant="body10">
                          Total Price
                        </Text>
                      </Row>
                      <Row className="items-end justify-between mt-[4px] w-[100%]">
                        <Text
                          className="capitalize font-poppins TitleatCompa"
                          variant="body9"
                        >
                          <span className="text-bluegray_400 lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                            Ordered from{" "}
                          </span>
                          <span className="text-blue_700 font-semibold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                            {"<Seller Name> "}
                          </span>
                          <span className="text-bluegray_400 lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                            {" "}
                          </span>
                          <span className="text-gray_501 lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                            |
                          </span>
                          <span className="text-bluegray_400 lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                            {" "}
                            Delivery Date{" "}
                          </span>
                          <span className="text-bluegray_400 font-bold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                            20-Nov-2022 11:38 AM
                          </span>
                        </Text>
                        <Text
                          className="font-prompt mb-[2px] text-black_900 uppercase w-[auto]"
                          variant="body6"
                        >
                          $138.00
                        </Text>
                      </Row>
                    </Column>
                    <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Column className="font-poppins items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[36%]">
                      <Text className="column500k" variant="body9">
                        <span className="text-bluegray_400 font-poppins lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                          Ordered Number #
                        </span>
                        <span className="text-bluegray_400 font-poppins font-bold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                          ORD-SRV-12,321
                        </span>
                      </Text>
                    </Column>
                    <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                    <Column className="font-poppins justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Column className="items-center justify-start pr-[3px] py-[3px] w-[100%]">
                        <Text className="columndescription2" variant="body9">
                          {
                            "<Project Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, sit ullamcorper quam eget mauris sed. Sit sem urna, eget ridiculus orci. Gravida amet, etiam quis sed. Etiam amet mattis metus, fusce tellus aliquam orci. Suscipit adipiscing blandit justo, sollicitudin aliquam sit. Neque, in sit amet varius purus ipsum viverra diam odio. Donec pulvinar commodo, lacus, sed nisl sed imperdiet. Scelerisque dolor tortor ac aliquam pretium mattis. Enim, vitae duis in eu erat. Quisque bibendum enim amet vitae dui. In massa egestas aliquam pellentesque."
                          }
                        </Text>
                      </Column>
                      <Column className="items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[46%]">
                        <Text className="rowtheodoreroose" variant="body9">
                          {"<Title Message from <Buyer Name> in 7 days>"}
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 border border-black_900_20 border-solid font-poppins items-center justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius15 w-[100%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Row className="items-start justify-between w-[34%]">
                        <Img
                          src="images/img_file_50X50.svg"
                          className="file_One1"
                          alt="file"
                        />
                        <Text className="rowjosephmills_one" variant="body10">
                          Your Order
                        </Text>
                        <Text className="mt-[4px] rowuser" variant="body10">
                          11-Nov-2022 11:38 AM
                        </Text>
                      </Row>
                      <Text className="rowdownloadinvoic">
                        Download Invoice
                      </Text>
                    </Row>
                    <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                      <Column className="border border-black_900_20 border-solid items-center justify-start 3xl:pb-[11px] lg:pb-[6px] xl:pb-[8px] 2xl:pb-[9px] w-[100%]">
                        <Row className="items-start py-[2px] w-[100%]">
                          <Column className="items-center justify-start my-[1px] w-[4%]">
                            <Text
                              className="font-semibold text-black_900 w-[auto]"
                              variant="body10"
                            >
                              Item
                            </Text>
                          </Column>
                          <Text
                            className="font-semibold lg:ml-[316px] xl:ml-[396px] 2xl:ml-[446px] 3xl:ml-[535px] my-[1px] text-black_900 w-[auto]"
                            variant="body10"
                          >
                            QTY.
                          </Text>
                          <Text className="Duration_One" variant="body10">
                            Duration
                          </Text>
                          <Text className="Duration_One" variant="body10">
                            Price
                          </Text>
                        </Row>
                      </Column>
                      <Row className="items-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] pt-[2px] w-[100%]">
                        <Column className="items-center justify-start mt-[1px] w-[45%]">
                          <Text
                            className="font-semibold text-bluegray_400 w-[auto]"
                            variant="body10"
                          >
                            <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                              {"<"}
                            </span>
                            <span className="text-bluegray_400 font-poppins font-medium lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                              Title of the Service offered by the{" "}
                            </span>
                            <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                              {"<Seller Name>"}
                            </span>
                            <span className="text-bluegray_400 font-poppins font-medium lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                              {">"}
                            </span>
                          </Text>
                        </Column>
                        <Text
                          className="font-semibold lg:ml-[106px] xl:ml-[133px] 2xl:ml-[149px] 3xl:ml-[179px] text-bluegray_400 w-[auto]"
                          variant="body10"
                        >
                          1
                        </Text>
                        <Text
                          className="lg:ml-[58px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[98px] price17"
                          variant="body10"
                        >
                          9 days
                        </Text>
                        <Text
                          className="lg:ml-[48px] xl:ml-[61px] 2xl:ml-[68px] 3xl:ml-[82px] price17"
                          variant="body10"
                        >
                          $120.00
                        </Text>
                      </Row>
                      <Column className="border border-black_900_20 border-solid items-center justify-end lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:pt-[10px] xl:pt-[12px] 2xl:pt-[14px] 3xl:pt-[17px] w-[100%]">
                        <Row className="items-center justify-between py-[3px] w-[100%]">
                          <Column className="items-center mb-[1px] w-[9%]">
                            <Text className="columnsubtotal" variant="body10">
                              SubTotal
                            </Text>
                          </Column>
                          <Text className="th" variant="body10">
                            $120.00
                          </Text>
                        </Row>
                        <Row className="items-center justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] py-[3px] w-[100%]">
                          <Column className="items-center mb-[1px] w-[11%]">
                            <Text className="columnsubtotal" variant="body10">
                              Service Fee
                            </Text>
                          </Column>
                          <Text className="th" variant="body10">
                            $12.00
                          </Text>
                        </Row>
                        <Row className="items-start justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] pb-[3px] w-[100%]">
                          <Column className="items-center justify-start w-[8%]">
                            <Text className="columnsubtotal" variant="body10">
                              Vat (5%)
                            </Text>
                          </Column>
                          <Text className="th25" variant="body10">
                            $6.00
                          </Text>
                        </Row>
                        <Row className="items-center justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] py-[3px] w-[100%]">
                          <Column className="items-center mb-[1px] w-[6%]">
                            <Text className="columnsubtotal" variant="body10">
                              Total
                            </Text>
                          </Column>
                          <Text className="th" variant="body10">
                            $138.00
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Text
                  className="lg:mb-[555px] xl:mb-[694px] 2xl:mb-[781px] 3xl:mb-[937px] lg:ml-[46px] xl:ml-[57px] 2xl:ml-[64px] 3xl:ml-[77px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rowuser"
                  variant="body10"
                >
                  <span className="text-bluegray_400 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                    If something appears to be missing or incorrect, please
                    contact our{" "}
                  </span>
                  <span className="text-blue_700 font-poppins lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                    Customer Support Specialist
                  </span>
                </Text>
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

export default FaisalFreelancingModuleSingleProjectPageDetailsOnePage;
