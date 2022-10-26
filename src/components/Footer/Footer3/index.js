import React from "react";

import { Column, Text, Row, Stack, Img, Line, Button } from "components";

const Footer3 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="mt-[3px] overflow-auto overflow-x-auto w-[100%]">
          <Column className="justify-start w-[100%]">
            <Column className="justify-start 2xl:ml-[102px] 3xl:ml-[123px] lg:ml-[73px] xl:ml-[91px] w-[93%]">
              <Text className="carouseladvlt2" variant="body13">
                Sponsored Ads
              </Text>
              <Row className="items-center justify-end 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                <Stack
                  className="bg-cover bg-repeat lg:h-[170px] xl:h-[212px] 2xl:h-[239px] 3xl:h-[286px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius15 w-[19%]"
                  style={{
                    backgroundImage: "url('images/img_rectangle99.png')",
                  }}
                >
                  <Img
                    src="images/img_call.svg"
                    className="call"
                    alt="call Four"
                  />
                </Stack>
                <Stack
                  className="bg-cover bg-repeat lg:h-[170px] xl:h-[212px] 2xl:h-[239px] 3xl:h-[286px] lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[25px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius15 w-[19%]"
                  style={{
                    backgroundImage: "url('images/img_rectangle98.png')",
                  }}
                >
                  <Img
                    src="images/img_call.svg"
                    className="call_One"
                    alt="call Five"
                  />
                </Stack>
                <Stack
                  className="bg-cover bg-repeat lg:h-[170px] xl:h-[212px] 2xl:h-[239px] 3xl:h-[286px] lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius15 w-[19%]"
                  style={{ backgroundImage: "url('images/img_adv.png')" }}
                >
                  <Img
                    src="images/img_call.svg"
                    className="call"
                    alt="call Six"
                  />
                </Stack>
                <Stack
                  className="bg-cover bg-repeat lg:h-[170px] xl:h-[212px] 2xl:h-[239px] 3xl:h-[286px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius15 w-[19%]"
                  style={{
                    backgroundImage: "url('images/img_adv_250X300.png')",
                  }}
                >
                  <Img
                    src="images/img_call.svg"
                    className="call"
                    alt="call Seven"
                  />
                </Stack>
                <Stack
                  className="bg-cover bg-repeat lg:h-[170px] xl:h-[212px] 2xl:h-[239px] 3xl:h-[286px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius15 w-[19%]"
                  style={{ backgroundImage: "url('images/img_adv_54.png')" }}
                >
                  <Img
                    src="images/img_call_22X18.png"
                    className="call"
                    alt="call Eight"
                  />
                </Stack>
              </Row>
            </Column>
            <Stack
              className="bg-cover bg-repeat 2xl:h-[1035px] 3xl:h-[1241px] lg:h-[735px] xl:h-[920px] lg:mr-[27px] xl:mr-[34px] 2xl:mr-[39px] 3xl:mr-[46px] lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] lg:px-[10px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[17px] w-[97%]"
              style={{ backgroundImage: "url('images/img_group889.png')" }}
            >
              <Stack className="absolute 2xl:h-[1001px] 3xl:h-[1201px] lg:h-[712px] xl:h-[890px] inset-[0] justify-center m-[auto] w-[96%]">
                <Column className="absolute bottom-[0] items-center justify-start w-[100%]">
                  <Line className="bg-white_A700_63 h-[1px] w-[100%]" />
                  <Row className="items-start justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                    <Text className="rowcopyright2021" variant="body9">
                      Copyright © 2022 V-Verse.
                    </Text>
                    <Row className="items-start justify-center w-[13%]">
                      <Text className="Builtwith1" variant="body9">
                        Built with
                      </Text>
                      <Img
                        src="images/img_favorite_16X16.svg"
                        className="favorite1"
                        alt="favorite"
                      />
                      <Text className="ByAreaH1" variant="body9">
                        By Area-H
                      </Text>
                    </Row>
                    <Text className="rowcopyright2021" variant="body9">
                      Terms & Conditions - Privacy Policy
                    </Text>
                  </Row>
                </Column>
                <Column className="absolute items-end justify-start top-[0] w-[100%]">
                  <Button
                    className="flex items-center justify-center VendorPlatinum"
                    shape="icbRoundedBorder6"
                    size="mdIcn"
                    variant="icbOutlineBlack900261_2"
                  >
                    <Img
                      src="images/img_arrowup.svg"
                      className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px]"
                      alt="arrowup"
                    />
                  </Button>
                  <Column className="items-center justify-start lg:mt-[54px] xl:mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] w-[100%]">
                    <Row className="items-start w-[100%]">
                      <Column className="justify-start mt-[1px] w-[7%]">
                        <Text className="TheVs1" variant="body7">
                          The Vs
                        </Text>
                        <Text className="Home1" variant="body9">
                          Home
                        </Text>
                        <Text className="Home1" variant="body9">
                          V-Guide
                        </Text>
                        <Text className="VBlog3" variant="body9">
                          V-Blog
                        </Text>
                        <Text className="VNation1" variant="body9">
                          V-Nation
                        </Text>
                        <Text className="VTube1" variant="body9">
                          V-Tube
                        </Text>
                        <Text className="VTube1" variant="body9">
                          V-jobs
                        </Text>
                        <Text className="VBlog3" variant="body9">
                          V-college
                        </Text>
                        <Text className="Vmarket1" variant="body9">
                          V-market
                        </Text>
                        <Text className="VTube1" variant="body9">
                          V-Lance
                        </Text>
                        <Text className="Home1" variant="body9">
                          V-Events{" "}
                        </Text>
                        <Text className="Home1" variant="body9">
                          V-Webinars
                        </Text>
                        <Text className="VBlog3" variant="body9">
                          V-Experts
                        </Text>
                        <Text className="VMarketing1" variant="body9">
                          V-Marketing
                        </Text>
                        <Text className="Home1" variant="body9">
                          V-Agency{" "}
                        </Text>
                        <Text className="Vmarket1" variant="body9">
                          V-Hub
                        </Text>
                      </Column>
                      <Column className="justify-start xl:ml-[115px] 2xl:ml-[129px] 3xl:ml-[155px] lg:ml-[92px] mt-[1px] pb-[1px] pr-[1px] w-[10%]">
                        <Text className="TheVs1" variant="body7">
                          The Members
                        </Text>
                        <Column className="justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[94%]">
                          <Text className="navitems1" variant="body9">
                            Personal Profiles
                          </Text>
                          <Text className="VTube1" variant="body9">
                            Business Profiles{" "}
                          </Text>
                          <Text className="VTube1" variant="body9">
                            V-Authors
                          </Text>
                          <Text className="VBlog3" variant="body9">
                            V-Employers
                          </Text>
                          <Text className="Vmarket1" variant="body9">
                            V-Instructors
                          </Text>
                          <Text className="Home1" variant="body9">
                            V-Sellers
                          </Text>
                          <Text className="VTube1" variant="body9">
                            V-Lancers
                          </Text>
                          <Text className="VOrganizers" variant="body9">
                            V-Organizers
                          </Text>
                          <Text className="Home1" variant="body9">
                            V-Speakers
                          </Text>
                          <Text className="VMarketing1" variant="body9">
                            V-Hosts
                          </Text>
                          <Text className="VBlog3" variant="body9">
                            V-Experts{" "}
                          </Text>
                          <Text className="Vmarket1" variant="body9">
                            V-Customers
                          </Text>
                        </Column>
                      </Column>
                      <Column className="justify-start 3xl:ml-[109px] lg:ml-[65px] xl:ml-[81px] 2xl:ml-[91px] mt-[1px] w-[8%]">
                        <Text className="TheVs1" variant="body7">
                          The Assets
                        </Text>
                        <Text className="VTube1" variant="body9">
                          Blog Posts{" "}
                        </Text>
                        <Text className="Home1" variant="body9">
                          Social Pages
                        </Text>
                        <Text className="Home1" variant="body9">
                          Social Groups{" "}
                        </Text>
                        <Text className="VOrganizers" variant="body9">
                          Channels{" "}
                        </Text>
                        <Text className="language_Seven" variant="body9">
                          Videos{" "}
                        </Text>
                        <Text className="language_Eight1" variant="body9">
                          Jobs{" "}
                        </Text>
                        <Text className="language_Eight1" variant="body9">
                          Courses
                        </Text>
                        <Text className="language_Eight1" variant="body9">
                          Stores
                        </Text>
                        <Text className="language_Seven" variant="body9">
                          Products
                        </Text>
                        <Text className="language_Seven" variant="body9">
                          Services
                        </Text>
                        <Text className="Projects1" variant="body9">
                          Projects
                        </Text>
                        <Text className="VBlog3" variant="body9">
                          Events{" "}
                        </Text>
                        <Text className="language_Eight1" variant="body9">
                          Venues
                        </Text>
                        <Text className="language_Seven" variant="body9">
                          Webinars
                        </Text>
                        <Text className="language_Eight1" variant="body9">
                          Consultations
                        </Text>
                      </Column>
                      <Column className="items-center justify-start xl:ml-[107px] 2xl:ml-[121px] 3xl:ml-[145px] lg:ml-[86px] w-[14%]">
                        <Column className="justify-start pr-[1px] py-[1px] w-[100%]">
                          <Column className="justify-start w-[56%]">
                            <Text className="TheVs1" variant="body7">
                              The Ranks
                            </Text>
                            <Text className="VMarketing1" variant="body9">
                              Standards
                            </Text>
                            <Text className="VTube1" variant="body9">
                              Vendors
                            </Text>
                            <Text className="VTube1" variant="body9">
                              Ambassadors
                            </Text>
                          </Column>
                          <Column className="justify-start mb-[4px] lg:mt-[44px] xl:mt-[55px] 2xl:mt-[61px] 3xl:mt-[74px] w-[82%]">
                            <Text className="TheVs1" variant="body7">
                              The Opportunity
                            </Text>
                            <Text className="VNation1" variant="body9">
                              For Members
                            </Text>
                            <Text className="VTube1" variant="body9">
                              For Vendors
                            </Text>
                            <Text className="VTube1" variant="body9">
                              For Ambassadors
                            </Text>
                          </Column>
                        </Column>
                      </Column>
                      <Column className="items-center justify-start lg:ml-[26px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[44px] mt-[3px] w-[34%]">
                        <Column className="justify-start w-[100%]">
                          <Text className="TheVs1" variant="body7">
                            Instagram Feed
                          </Text>
                          <Row className="items-center justify-evenly xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                            <Img
                              src="images/img_rectangle95.png"
                              className="RectangleNinetyFive"
                              alt="RectangleNinetyFive"
                            />
                            <Img
                              src="images/img_rectangle96.png"
                              className="RectangleNinetyFive"
                              alt="RectangleNinetySix"
                            />
                            <Img
                              src="images/img_rectangle99.png"
                              className="RectangleNinetyFive"
                              alt="RectangleNinetyNine"
                            />
                          </Row>
                          <Row className="items-center justify-evenly mt-[1px] w-[100%]">
                            <Img
                              src="images/img_rectangle97.png"
                              className="RectangleNinetyFive"
                              alt="RectangleNinetySeven"
                            />
                            <Img
                              src="images/img_rectangle98.png"
                              className="RectangleNinetyFive"
                              alt="RectangleNinetyEight"
                            />
                            <Img
                              src="images/img_rectangle100.png"
                              className="RectangleNinetyFive"
                              alt="Rectangle100"
                            />
                          </Row>
                          <Row className="items-center justify-evenly mt-[1px] w-[100%]">
                            <Img
                              src="images/img_rectangle101.png"
                              className="RectangleNinetyFive"
                              alt="Rectangle101"
                            />
                            <Img
                              src="images/img_rectangle102.png"
                              className="RectangleNinetyFive"
                              alt="Rectangle102"
                            />
                            <Img
                              src="images/img_rectangle103.png"
                              className="RectangleNinetyFive"
                              alt="Rectangle103"
                            />
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Line className="bg-white_A700_63 h-[1px] lg:mt-[21px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
                  </Column>
                </Column>
                <Column className="absolute bottom-[7%] items-center justify-start left-[0] w-[23%]">
                  <Column className="justify-start w-[100%]">
                    <Img
                      src="images/img_logo.png"
                      className="Logo1"
                      alt="Logo"
                    />
                    <Text className="columnlogo1" variant="body9">
                      V-Verse, The First of it's Kind Worldwide, Mega New
                      Eco-System For the Veterinary Industry Global Community
                    </Text>
                    <Line className="bg-white_A700_60 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[89%]" />
                    <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[98%]">
                      <Button
                        className="flex items-center justify-center text-center w-[47%]"
                        leftIcon={
                          <Img
                            src="images/img_search_16X16.svg"
                            className="text-center lg:w-[10px] lg:h-[11px] lg:mr-[6px] xl:w-[13px] xl:h-[14px] xl:mr-[8px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[9px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[11px]"
                            alt="search"
                          />
                        }
                        shape="CircleBorder22"
                        size="md"
                        variant="OutlineBlue700"
                      >
                        <div className="bg-transparent capitalize font-prompt font-semibold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                          Hey Roy!
                        </div>
                      </Button>
                      <Button
                        className="capitalize font-prompt font-semibold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[47%]"
                        shape="RoundedBorder19"
                        size="md"
                        variant="OutlineBlack90020"
                      >
                        Join Us
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Stack className="absolute bottom-[8%] lg:h-[128px] xl:h-[161px] 2xl:h-[181px] 3xl:h-[217px] right-[0] w-[60%]">
                  <Column className="absolute justify-start left-[0] top-[1%] w-[35%]">
                    <Text className="TheVs1" variant="body7">
                      Let's Talk
                    </Text>
                    <Column className="justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] pt-[1px] w-[100%]">
                      <Row className="items-start w-[62%]">
                        <Img
                          src="images/img_mail_16X16.svg"
                          className="clock"
                          alt="mail"
                        />
                        <Text className="rowmail1" variant="body9">
                          info@myvverse.com
                        </Text>
                      </Row>
                      <Row className="items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[51%]">
                        <Img
                          src="images/img_call.svg"
                          className="globe"
                          alt="call Nine"
                        />
                        <Text className="rowcall_five" variant="body9">
                          +971 52 7956665
                        </Text>
                      </Row>
                      <Row className="items-start xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]">
                        <Img
                          src="images/img_mail_16X16.svg"
                          className="One18"
                          alt="location"
                        />
                        <Text className="rowlocation_twelve" variant="body9">
                          Virtually Managed From Dubai-UAE
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                  <Column className="absolute justify-start pr-[3px] pt-[3px] w-[100%]">
                    <Column className="justify-start w-[95%]">
                      <Row className="items-end justify-between w-[100%]">
                        <Line className="bg-white_A700_60 h-[1px] xl:mt-[121px] 2xl:mt-[136px] 3xl:mt-[163px] lg:mt-[96px] w-[37%]" />
                        <Column className="justify-start w-[18%]">
                          <Text className="TheVs1" variant="body7">
                            Coming Soon
                          </Text>
                          <Img
                            src="images/img_image36.png"
                            className="imageThirtySix1"
                            alt="imageThirtySix"
                          />
                          <Img
                            src="images/img_image37.png"
                            className="imageThirtySeven"
                            alt="imageThirtySeven"
                          />
                        </Column>
                      </Row>
                      <Img
                        src="images/img_mail_16X16.svg"
                        className="facebookfinst"
                        alt="facebookfinst"
                      />
                    </Column>
                  </Column>
                </Stack>
              </Stack>
            </Stack>
          </Column>
        </div>
      </footer>
    </>
  );
};

export default Footer3;
