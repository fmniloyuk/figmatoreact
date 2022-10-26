import React from "react";

import {
  Column,
  Stack,
  Row,
  Img,
  Text,
  Button,
  Line,
  Input,
  List,
} from "components";
import Header from "components/Header/Header";
import Footer5 from "components/Footer/Footer5";

const ImranVideoNetworkModuleVTubeSinglePagePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center justify-start mx-[auto] pt-[2px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Stack className="3xl:h-[1073px] lg:h-[636px] xl:h-[795px] 2xl:h-[894px] w-[100%]">
            <Column className="absolute bottom-[0] items-center justify-start w-[100%]">
              <Column className="bg-black_900 items-center justify-start pt-[3px] w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Column
                    className="bg-cover bg-repeat items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group7820.png')",
                    }}
                  >
                    <Column className="items-center justify-start lg:mt-[523px] xl:mt-[654px] 2xl:mt-[736px] 3xl:mt-[883px] w-[98%]">
                      <div
                        className="lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] overflow-hidden relative w-[100%]"
                        name="playerslider"
                      >
                        <div className="w-full h-full absolute bg-undefined rounded-[2.5px]"></div>
                        <div
                          className="h-full absolute bg-blue_700  rounded-[2px]"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <Row className="items-center justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                        <Row className="items-start justify-between w-[11%]">
                          <Img
                            src="images/img_iconplay1.svg"
                            className="file_One1"
                            alt="iconplayOne"
                          />
                          <Img
                            src="images/img_rewind.svg"
                            className="file_One1"
                            alt="rewind"
                          />
                          <Img
                            src="images/img_volume_24X24.svg"
                            className="file_One1"
                            alt="volume"
                          />
                          <Text className="mt-[4px] rowvideo1" variant="body12">
                            1:04 / 12:40{" "}
                          </Text>
                        </Row>
                        <Row className="items-center justify-between w-[11%]">
                          <Img
                            src="images/img_volume_1.svg"
                            className="file_One1"
                            alt="volume One"
                          />
                          <Img
                            src="images/img_settings_24X24.svg"
                            className="file_One1"
                            alt="settings"
                          />
                          <Img
                            src="images/img_computer.svg"
                            className="file_One1"
                            alt="computer"
                          />
                          <Img
                            src="images/img_icondefault.svg"
                            className="file_One1"
                            alt="icondefault"
                          />
                          <Img
                            src="images/img_qrcode.svg"
                            className="file_One1"
                            alt="qrcode"
                          />
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Column>
            <Header className="absolute font-prompt top-[0] w-[100%]" />
          </Stack>
          <Row className="font-prompt items-center justify-between lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[97%]">
            <Column className="items-center w-[70%]">
              <Row className="border border-black_900_20 border-solid items-end justify-between py-[1px] w-[100%]">
                <Column className="justify-start xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] w-[55%]">
                  <Text className="columntitleofthec" variant="body7">
                    M2 MacBook Air vs M1 MacBook Air - Which One to Get?
                  </Text>
                  <Row className="font-poppins items-center xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[79%]">
                    <Row className="items-center justify-evenly w-[40%]">
                      <Img
                        src="images/img_calendar_16X16.svg"
                        className="clock"
                        alt="calendar"
                      />
                      <Text className="date" variant="body12">
                        Date 10-Oct-2022 10:30 AM
                      </Text>
                    </Row>
                    <Row className="items-start justify-between xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] py-[1px] w-[57%]">
                      <Row className="items-center justify-evenly my-[1px] w-[12%]">
                        <Img
                          src="images/img_thumbsup.svg"
                          className="clock"
                          alt="thumbsup"
                        />
                        <Text className="date" variant="body12">
                          0
                        </Text>
                      </Row>
                      <Row className="items-start justify-center my-[1px] w-[21%]">
                        <Img
                          src="images/img_star.svg"
                          className="clock"
                          alt="star"
                        />
                        <Text className="ratings" variant="body12">
                          5(20)
                        </Text>
                      </Row>
                      <Row className="items-center justify-center my-[1px] w-[17%]">
                        <Img
                          src="images/img_share.svg"
                          className="clock"
                          alt="share"
                        />
                        <Text className="shares" variant="body12">
                          320
                        </Text>
                      </Row>
                      <Row className="items-center justify-center my-[1px] w-[16%]">
                        <Img
                          src="images/img_clock_20X20.svg"
                          className="clock"
                          alt="clock"
                        />
                        <Text className="rowbag" variant="body12">
                          100
                        </Text>
                      </Row>
                      <Row className="items-start mt-[1px] w-[17%]">
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
                  </Row>
                </Column>
                <Row className="font-poppins items-center justify-between xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[18%]">
                  <Row className="items-center justify-evenly w-[32%]">
                    <Img
                      src="images/img_thumbsup_24X24.svg"
                      className="file_One1"
                      alt="thumbsup One"
                    />
                    <Text className="like" variant="body10">
                      6.9K
                    </Text>
                  </Row>
                  <Column className="items-center w-[38%]">
                    <Row className="items-end justify-evenly w-[100%]">
                      <Img
                        src="images/img_share_16X16.svg"
                        className="file_One1"
                        alt="share One"
                      />
                      <Text className="my-[4px] like" variant="body10">
                        Share
                      </Text>
                    </Row>
                  </Column>
                  <Img
                    src="images/img_overflowmenu_1.svg"
                    className="file_One1"
                    alt="overflowmenu"
                  />
                </Row>
              </Row>
              <Row className="font-poppins items-start justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                <Row className="items-start lg:pr-[47px] xl:pr-[59px] 2xl:pr-[66px] 3xl:pr-[80px] w-[59%]">
                  <Button
                    className="flex lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[33px] xl:w-[42px] 2xl:w-[47px] 3xl:w-[57px]"
                    size="lgIcn"
                    variant="icbFillBluegray101"
                  >
                    <Img
                      src="images/img_info_50X50.svg"
                      className="flex items-center justify-center lg:h-[21px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px]"
                      alt="info"
                    />
                  </Button>
                  <Column className="justify-start 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[89%]">
                    <Column className="justify-start w-[26%]">
                      <Text className="columntitleofthec" variant="body10">
                        {"<Channel Name>"}
                      </Text>
                      <Text className="points" variant="body12">
                        100K Subscribers
                      </Text>
                    </Column>
                    <Text
                      className="font-medium leading-[120.00%] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-bluegray_400 w-[100%]"
                      variant="body10"
                    >
                      {
                        "<Description of the video> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros ridiculus etiam eu elit dictumst tincidunt. "
                      }
                    </Text>
                    <Text
                      className="font-bold lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] text-bluegray_400 uppercase w-[auto]"
                      variant="body12"
                    >
                      Show More
                    </Text>
                  </Column>
                </Row>
                <Column className="items-center justify-start w-[13%]">
                  <Button
                    className="font-medium xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center uppercase w-[100%]"
                    shape="RoundedBorder4"
                    size="lg"
                    variant="OutlineBlack90020"
                  >
                    Subscribe
                  </Button>
                </Column>
              </Row>
              <Line className="bg-black_900_20 h-[1px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]" />
              <Column className="font-poppins justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                <Column className="bg-gray_101 border border-black_900_0a border-solid items-center justify-start lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius15 w-[100%]">
                  <Row className="items-center rounded-radius15 w-[99%]">
                    <Stack className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]">
                      <Img
                        src="images/img_ellipse15_45X45.png"
                        className="absolute lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 w-[100%]"
                        alt="EllipseFifteen"
                      />
                      <Img
                        src="images/img_rectangle65_40X40.png"
                        className="absolute lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 w-[100%]"
                        alt="RectangleSixtySix"
                      />
                    </Stack>
                    <Input
                      className="placeholder:text-gray_501 Group479"
                      wrapClassName="2xl:ml-[14px] 3xl:ml-[17px] lg:ml-[10px] w-[94%] xl:ml-[12px]"
                      name="Group693"
                      placeholder="Write a comment and press enter to post"
                      shape="RoundedBorder22"
                      variant="OutlineBlack90011"
                    ></Input>
                  </Row>
                </Column>
                <Row className="items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] pl-[1px] pt-[1px] w-[95%]">
                  <Img
                    src="images/img_ellipse15_4.png"
                    className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                    alt="EllipseFifteen One"
                  />
                  <Column className="bg-white_A700 border border-black_900_11 border-solid items-center justify-start lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] rounded-radius15 w-[94%]">
                    <Column className="justify-start mb-[4px] w-[99%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="rowjosephmills" variant="body10">
                          Joseph Mills
                        </Text>
                        <Img
                          src="images/img_overflowmenu_24X24.svg"
                          className="file_One1"
                          alt="overflowmenu One"
                        />
                      </Row>
                      <Text className="rowfile_one" variant="body10">
                        Sollicitudin viverra proin quam at convallis in vel.
                        Iaculis.
                      </Text>
                      <Row className="items-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[98%]">
                        <Text className="test_4h" variant="body12">
                          4h
                        </Text>
                        <Text className="Like_One" variant="body12">
                          Like
                        </Text>
                        <Text className="Reply" variant="body12">
                          Reply
                        </Text>
                        <Row className="items-start mb-[1px] lg:ml-[442px] xl:ml-[553px] 2xl:ml-[622px] 3xl:ml-[746px] w-[13%]">
                          <Button
                            className="flex items-center justify-center imageThirtyTwo1"
                            shape="icbCircleBorder11"
                            size="smIcn"
                            variant="icbFillBlue700"
                          >
                            <Img
                              src="images/img_thumbsup_22X22.svg"
                              className="flex items-center justify-center lg:h-[8px] xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px]"
                              alt="thumbsup Two"
                            />
                          </Button>
                          <Button
                            className="flex items-center justify-center imageThirtyTwo1"
                            shape="icbCircleBorder11"
                            size="smIcn"
                            variant="icbFillRedA701"
                          >
                            <Img
                              src="images/img_favorite.svg"
                              className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px]"
                              alt="favorite"
                            />
                          </Button>
                          <Img
                            src="images/img_image32.png"
                            className="imageThirtyTwo1"
                            alt="imageThirtyTwo"
                          />
                          <Img
                            src="images/img_image33.png"
                            className="imageThirtyTwo1"
                            alt="imageThirtyThree"
                          />
                          <Img
                            src="images/img_image34.png"
                            className="imageThirtyTwo1"
                            alt="imageThirtyFour"
                          />
                          <Img
                            src="images/img_image35.png"
                            className="imageThirtyTwo1"
                            alt="imageThirtyFive"
                          />
                          <Text className="rowthumbsup_two" variant="body13">
                            71
                          </Text>
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Column className="items-center justify-start lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[65px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[6%]">
                  <Row className="items-start justify-evenly pl-[1px] py-[1px] w-[100%]">
                    <Img
                      src="images/img_cornerdownrig.svg"
                      className="clock_One1"
                      alt="cornerdownrig"
                    />
                    <Text className="replyfrompost1" variant="body12">
                      1 Reply
                    </Text>
                  </Row>
                </Column>
                <Row className="items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] pl-[1px] pt-[1px] w-[95%]">
                  <Img
                    src="images/img_ellipse16.png"
                    className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                    alt="EllipseFifteen Two"
                  />
                  <Column className="bg-white_A700 border border-black_900_11 border-solid items-center justify-start lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] rounded-radius15 w-[94%]">
                    <Column className="justify-start mb-[4px] w-[99%]">
                      <Row className="items-end justify-between w-[100%]">
                        <Text className="rowjensenv" variant="body10">
                          Jensen V.
                        </Text>
                        <Img
                          src="images/img_overflowmenu_24X24.svg"
                          className="file_One1"
                          alt="overflowmenu Two"
                        />
                      </Row>
                      <Text className="rowfile_one" variant="body10">
                        Ipsum tristique consequat aliquam id nisl id sit nunc.
                      </Text>
                      <Row className="items-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[98%]">
                        <Text className="time_One" variant="body12">
                          15mins
                        </Text>
                        <Text className="Like_Two" variant="body12">
                          Like
                        </Text>
                        <Text className="Reply" variant="body12">
                          Reply
                        </Text>
                        <Row className="items-start mb-[1px] lg:ml-[427px] xl:ml-[534px] 2xl:ml-[601px] 3xl:ml-[721px] w-[13%]">
                          <Button
                            className="flex items-center justify-center imageThirtyTwo1"
                            shape="icbCircleBorder11"
                            size="smIcn"
                            variant="icbFillBlue700"
                          >
                            <Img
                              src="images/img_thumbsup_22X22.svg"
                              className="flex items-center justify-center lg:h-[8px] xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px]"
                              alt="thumbsup Three"
                            />
                          </Button>
                          <Button
                            className="flex items-center justify-center imageThirtyTwo1"
                            shape="icbCircleBorder11"
                            size="smIcn"
                            variant="icbFillRedA701"
                          >
                            <Img
                              src="images/img_favorite.svg"
                              className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px]"
                              alt="favorite One"
                            />
                          </Button>
                          <Img
                            src="images/img_image32.png"
                            className="imageThirtyTwo1"
                            alt="imageThirtyTwo One"
                          />
                          <Img
                            src="images/img_image33.png"
                            className="imageThirtyTwo1"
                            alt="imageThirtyThree One"
                          />
                          <Img
                            src="images/img_image34.png"
                            className="imageThirtyTwo1"
                            alt="imageThirtyFour One"
                          />
                          <Img
                            src="images/img_image35.png"
                            className="imageThirtyTwo1"
                            alt="imageThirtyFive One"
                          />
                          <Text className="rowthumbsup_two" variant="body13">
                            71
                          </Text>
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Column className="items-center justify-start lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[65px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[6%]">
                  <Row className="items-start justify-evenly pl-[1px] py-[1px] w-[100%]">
                    <Img
                      src="images/img_cornerdownrig.svg"
                      className="clock_One1"
                      alt="cornerdownrig One"
                    />
                    <Text className="replyfrompost1" variant="body12">
                      1 Reply
                    </Text>
                  </Row>
                </Column>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[95%]"
                  orientation="vertical"
                >
                  <Row className="items-start justify-between lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] pl-[1px] pt-[1px] w-[100%]">
                    <Img
                      src="images/img_ellipse15_45X45.png"
                      className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                      alt="EllipseFifteen Three"
                    />
                    <Column className="bg-white_A700 border border-black_900_11 border-solid items-center justify-start 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] rounded-radius15 w-[94%]">
                      <Column className="justify-start mb-[4px] w-[99%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Text
                            className="font-semibold text-black_900 w-[auto]"
                            variant="body10"
                          >
                            Sam Russel
                          </Text>
                          <Img
                            src="images/img_overflowmenu_24X24.svg"
                            className="file_One1"
                            alt="overflowmenu Three"
                          />
                        </Row>
                        <Text className="rowfile_one" variant="body10">
                          Nunc a cursus volutpat tincidunt vel lobortis neque.
                        </Text>
                        <Row className="items-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[98%]">
                          <Text className="time_One" variant="body12">
                            15mins
                          </Text>
                          <Text className="Like_Two" variant="body12">
                            Like
                          </Text>
                          <Text className="Reply" variant="body12">
                            Reply
                          </Text>
                          <Row className="items-start mb-[1px] lg:ml-[427px] xl:ml-[534px] 2xl:ml-[601px] 3xl:ml-[721px] w-[13%]">
                            <Button
                              className="flex items-center justify-center imageThirtyTwo1"
                              shape="icbCircleBorder11"
                              size="smIcn"
                              variant="icbFillBlue700"
                            >
                              <Img
                                src="images/img_thumbsup_22X22.svg"
                                className="flex items-center justify-center lg:h-[8px] xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px]"
                                alt="thumbsup Four"
                              />
                            </Button>
                            <Button
                              className="flex items-center justify-center imageThirtyTwo1"
                              shape="icbCircleBorder11"
                              size="smIcn"
                              variant="icbFillRedA701"
                            >
                              <Img
                                src="images/img_favorite.svg"
                                className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px]"
                                alt="favorite Two"
                              />
                            </Button>
                            <Img
                              src="images/img_image32.png"
                              className="imageThirtyTwo1"
                              alt="imageThirtyTwo Two"
                            />
                            <Img
                              src="images/img_image33.png"
                              className="imageThirtyTwo1"
                              alt="imageThirtyThree Two"
                            />
                            <Img
                              src="images/img_image34.png"
                              className="imageThirtyTwo1"
                              alt="imageThirtyFour Two"
                            />
                            <Img
                              src="images/img_image35.png"
                              className="imageThirtyTwo1"
                              alt="imageThirtyFive Two"
                            />
                            <Text className="rowthumbsup_two" variant="body13">
                              71
                            </Text>
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                  <Column className="items-center justify-start lg:ml-[55px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] lg:mr-[187px] xl:mr-[234px] 2xl:mr-[263px] 3xl:mr-[316px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] w-[63%]">
                    <Row className="items-start justify-between pl-[1px] pt-[1px] w-[100%]">
                      <Img
                        src="images/img_ellipse15_40X40.png"
                        className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                        alt="EllipseFifteen Four"
                      />
                      <Column className="bg-white_A700 border border-black_900_11 border-solid items-center justify-start 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] rounded-radius15 w-[90%]">
                        <Column className="justify-start mb-[4px] w-[99%]">
                          <Row className="items-center justify-between w-[100%]">
                            <Text
                              className="font-semibold text-black_900 w-[auto]"
                              variant="body10"
                            >
                              John \`Russel
                            </Text>
                            <Img
                              src="images/img_overflowmenu_24X24.svg"
                              className="file_One1"
                              alt="overflowmenu Four"
                            />
                          </Row>
                          <Text className="rowfile_one" variant="body10">
                            Orci, sapien, fermentum ornare quam magna. Ipsum.
                          </Text>
                          <Row className="items-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[96%]">
                            <Text className="time_One" variant="body12">
                              5mins
                            </Text>
                            <Text className="Like_Seven" variant="body12">
                              Like
                            </Text>
                            <Text className="Reply" variant="body12">
                              Reply
                            </Text>
                            <Row className="items-start mb-[1px] lg:ml-[183px] xl:ml-[229px] 2xl:ml-[258px] 3xl:ml-[309px] w-[21%]">
                              <Button
                                className="flex items-center justify-center imageThirtyTwo1"
                                shape="icbCircleBorder11"
                                size="smIcn"
                                variant="icbFillBlue700"
                              >
                                <Img
                                  src="images/img_thumbsup_22X22.svg"
                                  className="flex items-center justify-center lg:h-[8px] xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px]"
                                  alt="thumbsup Five"
                                />
                              </Button>
                              <Button
                                className="flex items-center justify-center imageThirtyTwo1"
                                shape="icbCircleBorder11"
                                size="smIcn"
                                variant="icbFillRedA701"
                              >
                                <Img
                                  src="images/img_favorite.svg"
                                  className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px]"
                                  alt="favorite Three"
                                />
                              </Button>
                              <Img
                                src="images/img_image32.png"
                                className="imageThirtyTwo1"
                                alt="imageThirtyTwo Three"
                              />
                              <Img
                                src="images/img_image33.png"
                                className="imageThirtyTwo1"
                                alt="imageThirtyThree Three"
                              />
                              <Img
                                src="images/img_image34.png"
                                className="imageThirtyTwo1"
                                alt="imageThirtyFour Three"
                              />
                              <Img
                                src="images/img_image35.png"
                                className="imageThirtyTwo1"
                                alt="imageThirtyFive Three"
                              />
                              <Text className="emoticons" variant="body13">
                                11
                              </Text>
                            </Row>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="items-center justify-start lg:ml-[55px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] lg:mr-[187px] xl:mr-[234px] 2xl:mr-[263px] 3xl:mr-[316px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] w-[63%]">
                    <Row className="items-start justify-between pl-[1px] pt-[1px] w-[100%]">
                      <Img
                        src="images/img_ellipse15_40X40.png"
                        className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                        alt="EllipseFifteen Five"
                      />
                      <Column className="bg-white_A700 border border-black_900_11 border-solid items-center justify-start 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] rounded-radius15 w-[90%]">
                        <Column className="justify-start mb-[4px] w-[99%]">
                          <Row className="items-center justify-between w-[100%]">
                            <Text
                              className="font-semibold text-black_900 w-[auto]"
                              variant="body10"
                            >
                              John \`Russel
                            </Text>
                            <Img
                              src="images/img_overflowmenu_24X24.svg"
                              className="file_One1"
                              alt="overflowmenu Five"
                            />
                          </Row>
                          <Text className="rowfile_one" variant="body10">
                            Orci, sapien, fermentum ornare quam magna. Ipsum.
                          </Text>
                          <Row className="items-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[96%]">
                            <Text className="time_One" variant="body12">
                              5mins
                            </Text>
                            <Text className="Like_Seven" variant="body12">
                              Like
                            </Text>
                            <Text className="Reply" variant="body12">
                              Reply
                            </Text>
                            <Row className="items-start mb-[1px] lg:ml-[203px] xl:ml-[255px] 2xl:ml-[286px] 3xl:ml-[344px] w-[15%]">
                              <Button
                                className="flex items-center justify-center imageThirtyTwo1"
                                shape="icbCircleBorder11"
                                size="smIcn"
                                variant="icbFillBlue700"
                              >
                                <Img
                                  src="images/img_thumbsup_22X22.svg"
                                  className="flex items-center justify-center lg:h-[8px] xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px]"
                                  alt="thumbsup Six"
                                />
                              </Button>
                              <Button
                                className="flex items-center justify-center imageThirtyTwo1"
                                shape="icbCircleBorder11"
                                size="smIcn"
                                variant="icbFillRedA701"
                              >
                                <Img
                                  src="images/img_favorite.svg"
                                  className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px]"
                                  alt="favorite Four"
                                />
                              </Button>
                              <Img
                                src="images/img_image33.png"
                                className="imageThirtyTwo1"
                                alt="imageThirtyThree Four"
                              />
                              <Img
                                src="images/img_image34.png"
                                className="imageThirtyTwo1"
                                alt="imageThirtyFour Four"
                              />
                              <Text className="emoticons1" variant="body13">
                                7
                              </Text>
                            </Row>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                </List>
                <Column className="items-center justify-start lg:ml-[55px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[60%]">
                  <Row className="items-start justify-between pl-[1px] pt-[1px] w-[100%]">
                    <Img
                      src="images/img_ellipse15_40X40.png"
                      className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                      alt="EllipseFifteen Six"
                    />
                    <Column className="bg-white_A700 border border-black_900_11 border-solid items-center justify-start 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] rounded-radius15 w-[90%]">
                      <Column className="justify-start mb-[4px] w-[99%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Text
                            className="font-semibold text-black_900 w-[auto]"
                            variant="body10"
                          >
                            John \`Russel
                          </Text>
                          <Img
                            src="images/img_overflowmenu_24X24.svg"
                            className="file_One1"
                            alt="overflowmenu Six"
                          />
                        </Row>
                        <Text className="rowfile_one" variant="body10">
                          Orci, sapien, fermentum ornare quam magna. Ipsum.
                        </Text>
                        <Row className="items-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[96%]">
                          <Text className="time_One" variant="body12">
                            5mins
                          </Text>
                          <Text className="Like_Seven" variant="body12">
                            Like
                          </Text>
                          <Text className="Reply" variant="body12">
                            Reply
                          </Text>
                          <Row className="items-start mb-[1px] lg:ml-[226px] xl:ml-[283px] 2xl:ml-[319px] 3xl:ml-[383px] w-[9%]">
                            <Img
                              src="images/img_image34.png"
                              className="imageThirtyTwo1"
                              alt="imageThirtyFour Five"
                            />
                            <Img
                              src="images/img_image35.png"
                              className="imageThirtyTwo1"
                              alt="imageThirtyFive Four"
                            />
                            <Text className="emoticons" variant="body13">
                              11
                            </Text>
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                </Column>
                <Column className="items-center justify-start lg:ml-[55px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[60%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Img
                      src="images/img_rectangle65_40X40.png"
                      className="lg:h-[32px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[53px] rounded-radius50 lg:w-[31px] xl:w-[38px] 2xl:w-[43px] 3xl:w-[52px]"
                      alt="RectangleSixtySix One"
                    />
                    <Column className="items-center justify-start w-[90%]">
                      <Input
                        className="placeholder:text-gray_501 Group479"
                        wrapClassName="w-[100%]"
                        name="Group700"
                        placeholder="Write a Reply & Press Enter to Post"
                        shape="RoundedBorder22"
                        variant="OutlineBlack90011"
                      ></Input>
                      <Row className="items-center justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                        <Text className="extraactionso" variant="body12">
                          5,000 Characters
                        </Text>
                        <Img
                          src="images/img_frame69723_5.svg"
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] w-[31%]"
                          alt="Frame69723"
                        />
                      </Row>
                    </Column>
                  </Row>
                </Column>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[95%]"
                  orientation="vertical"
                >
                  <Row className="listellipsefifteen_four">
                    <Img
                      src="images/img_ellipse15_4.png"
                      className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                      alt="EllipseFifteen Seven"
                    />
                    <Column className="bg-white_A700 border border-black_900_11 border-solid items-center justify-start 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] rounded-radius15 w-[94%]">
                      <Column className="justify-start mb-[4px] w-[99%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Text className="rowjosephmills" variant="body10">
                            Joseph Mills
                          </Text>
                          <Img
                            src="images/img_overflowmenu_24X24.svg"
                            className="file_One1"
                            alt="overflowmenu Seven"
                          />
                        </Row>
                        <Text className="rowfile_one" variant="body10">
                          Sollicitudin viverra proin quam at convallis in vel.
                          Iaculis.
                        </Text>
                        <Row className="items-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[98%]">
                          <Text className="test_4h" variant="body12">
                            4h
                          </Text>
                          <Text className="Like_One" variant="body12">
                            Like
                          </Text>
                          <Text className="Reply" variant="body12">
                            Reply
                          </Text>
                          <Row className="items-start mb-[1px] lg:ml-[442px] xl:ml-[553px] 2xl:ml-[622px] 3xl:ml-[746px] w-[13%]">
                            <Button
                              className="flex items-center justify-center imageThirtyTwo1"
                              shape="icbCircleBorder11"
                              size="smIcn"
                              variant="icbFillBlue700"
                            >
                              <Img
                                src="images/img_thumbsup_22X22.svg"
                                className="flex items-center justify-center lg:h-[8px] xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px]"
                                alt="thumbsup Seven"
                              />
                            </Button>
                            <Button
                              className="flex items-center justify-center imageThirtyTwo1"
                              shape="icbCircleBorder11"
                              size="smIcn"
                              variant="icbFillRedA701"
                            >
                              <Img
                                src="images/img_favorite.svg"
                                className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px]"
                                alt="favorite Five"
                              />
                            </Button>
                            <Img
                              src="images/img_image32.png"
                              className="imageThirtyTwo1"
                              alt="imageThirtyTwo Four"
                            />
                            <Img
                              src="images/img_image33.png"
                              className="imageThirtyTwo1"
                              alt="imageThirtyThree Five"
                            />
                            <Img
                              src="images/img_image34.png"
                              className="imageThirtyTwo1"
                              alt="imageThirtyFour Six"
                            />
                            <Img
                              src="images/img_image35.png"
                              className="imageThirtyTwo1"
                              alt="imageThirtyFive Five"
                            />
                            <Text className="rowthumbsup_two" variant="body13">
                              71
                            </Text>
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                  <Row className="listellipsefifteen_four">
                    <Img
                      src="images/img_ellipse15_45X45.png"
                      className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                      alt="EllipseFifteen Eight"
                    />
                    <Column className="bg-white_A700 border border-black_900_11 border-solid items-center justify-start 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] rounded-radius15 w-[94%]">
                      <Column className="justify-start mb-[4px] w-[99%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Text
                            className="font-semibold text-black_900 w-[auto]"
                            variant="body10"
                          >
                            Sam Russel
                          </Text>
                          <Img
                            src="images/img_overflowmenu_24X24.svg"
                            className="file_One1"
                            alt="overflowmenu Eight"
                          />
                        </Row>
                        <Text className="rowfile_one" variant="body10">
                          Nunc a cursus volutpat tincidunt vel lobortis neque.
                        </Text>
                        <Row className="items-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[98%]">
                          <Text className="time_One" variant="body12">
                            15mins
                          </Text>
                          <Text className="Like_Two" variant="body12">
                            Like
                          </Text>
                          <Text className="Reply" variant="body12">
                            Reply
                          </Text>
                          <Row className="items-start mb-[1px] lg:ml-[427px] xl:ml-[534px] 2xl:ml-[601px] 3xl:ml-[721px] w-[13%]">
                            <Button
                              className="flex items-center justify-center imageThirtyTwo1"
                              shape="icbCircleBorder11"
                              size="smIcn"
                              variant="icbFillBlue700"
                            >
                              <Img
                                src="images/img_thumbsup_22X22.svg"
                                className="flex items-center justify-center lg:h-[8px] xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px]"
                                alt="thumbsup Eight"
                              />
                            </Button>
                            <Button
                              className="flex items-center justify-center imageThirtyTwo1"
                              shape="icbCircleBorder11"
                              size="smIcn"
                              variant="icbFillRedA701"
                            >
                              <Img
                                src="images/img_favorite.svg"
                                className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px]"
                                alt="favorite Six"
                              />
                            </Button>
                            <Img
                              src="images/img_image32.png"
                              className="imageThirtyTwo1"
                              alt="imageThirtyTwo Five"
                            />
                            <Img
                              src="images/img_image33.png"
                              className="imageThirtyTwo1"
                              alt="imageThirtyThree Six"
                            />
                            <Img
                              src="images/img_image34.png"
                              className="imageThirtyTwo1"
                              alt="imageThirtyFour Seven"
                            />
                            <Img
                              src="images/img_image35.png"
                              className="imageThirtyTwo1"
                              alt="imageThirtyFive Six"
                            />
                            <Text className="rowthumbsup_two" variant="body13">
                              71
                            </Text>
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                </List>
                <Column className="items-center justify-start lg:ml-[287px] xl:ml-[359px] 2xl:ml-[404px] 3xl:ml-[484px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[17%]">
                  <Button
                    className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[100%]"
                    shape="CircleBorder17"
                    size="md"
                    variant="OutlineBlack9000c"
                  >
                    View more comments
                  </Button>
                </Column>
              </Column>
            </Column>
            <Column className="font-poppins items-center mt-[2px] w-[28%]">
              <Column className="bg-white_A700 border border-black_900_20 border-solid justify-start 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius15 w-[98%]">
                <Text
                  className="lg:ml-[200px] xl:ml-[250px] 2xl:ml-[282px] 3xl:ml-[338px] rowstarone_one"
                  variant="body13"
                >
                  Sponsored Ads
                </Text>
                <Column
                  className="bg-cover bg-repeat items-center justify-start mb-[4px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius15 w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_group69704.png')",
                  }}
                >
                  <Img
                    src="images/img_call.svg"
                    className="call10"
                    alt="call"
                  />
                  <Row className="items-center justify-center 3xl:mb-[106px] lg:mb-[62px] xl:mb-[78px] 2xl:mb-[88px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[73px] 3xl:mt-[88px] w-[23%]">
                    <Text className="rowvideo1" variant="body9">
                      Video
                    </Text>
                    <Img
                      src="images/img_call.svg"
                      className="lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[32%]"
                      alt="call One"
                    />
                  </Row>
                </Column>
              </Column>
              <Stack className="lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[98%]">
                <Stack className="absolute lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] left-[0] w-[100%]">
                  <div className="absolute bg-white_A700 border border-black_900_20 border-solid lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] right-[0] w-[100%]"></div>
                  <div className="absolute inset-[0] justify-center m-[auto] overflow-x-auto w-[97%]">
                    <Row className="items-center justify-between overflow-auto w-[100%]">
                      <Column className="bg-blue_700 border border-black_900_20 border-solid items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius17 w-[15%]">
                        <Text className="columnliked" variant="body10">
                          All
                        </Text>
                      </Column>
                      <Button
                        className="capitalize font-semibold xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-bluegray_400 text-center w-[18%]"
                        shape="CircleBorder17"
                        size="md"
                        variant="OutlineBlack900201_2"
                      >
                        Live
                      </Button>
                      <Button
                        className="capitalize font-semibold xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-bluegray_400 text-center w-[30%]"
                        shape="CircleBorder17"
                        size="md"
                        variant="OutlineBlack900201_2"
                      >
                        Adventure
                      </Button>
                      <Row className="bg-gray_100 border border-black_900_20 border-solid items-center justify-between lg:pl-[5px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[9px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[9px] rounded-radius17 w-[25%]">
                        <Text
                          className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] rowgeorgeeliot"
                          variant="body10"
                        >
                          Lifestyle
                        </Text>
                        <Text className="rowtheodoreroose" variant="body10">
                          Business
                        </Text>
                      </Row>
                      <Img
                        src="images/img_arrowdown_24X24.svg"
                        className="clock"
                        alt="arrowright"
                      />
                      <Column className="bg-gray_100 border border-black_900_20 border-solid rounded-radius7 w-[16%]">
                        <div className="bg-gray_100 border border-black_900_20 border-solid lg:h-[24px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] rounded-radius45 w-[14%]"></div>
                      </Column>
                    </Row>
                  </div>
                </Stack>
                <Img
                  src="images/img_arrowleft_16X16.svg"
                  className="absolute inset-y-[0] left-[0] my-[auto] clock"
                  alt="arrowleft"
                />
              </Stack>
              <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[98%]">
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="items-center justify-between lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                    <Column className="bg-black_900 items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius10 w-[42%]">
                      <Img
                        src="images/img_play.svg"
                        className="play"
                        alt="play"
                      />
                      <Text className="video" as="h2" variant="h2">
                        02:30:45
                      </Text>
                    </Column>
                    <Column className="items-center w-[54%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Text className="titleactions" variant="body12">
                            Lorem ipsum dolor sit amet, consectetur...
                          </Text>
                          <Img
                            src="images/img_overflowmenu_1.svg"
                            className="file_One1"
                            alt="overflowmenu Nine"
                          />
                        </Row>
                        <Column className="justify-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[87%]">
                          <Column className="items-center justify-start w-[56%]">
                            <Text className="date" variant="body12">
                              {"<Channel name>"}
                            </Text>
                          </Column>
                          <Row className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[78%]">
                            <Img
                              src="images/img_calendar_16X16.svg"
                              className="clock"
                              alt="calendar One"
                            />
                            <Text className="likes" variant="body12">
                              15-Oct-2022 11:30 AM
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[61%]">
                          <Column className="items-center py-[1px] w-[35%]">
                            <Row className="items-start mt-[1px] w-[100%]">
                              <Img
                                src="images/img_instagram.svg"
                                className="clock"
                                alt="instagram One"
                              />
                              <Text className="rowinstagram" variant="body12">
                                3.2K
                              </Text>
                            </Row>
                          </Column>
                          <Row className="items-center justify-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[8px] w-[22%]">
                            <Img
                              src="images/img_thumbsup.svg"
                              className="clock"
                              alt="thumbsup Nine"
                            />
                            <Text className="likes" variant="body12">
                              0
                            </Text>
                          </Row>
                          <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[30%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Img
                                src="images/img_clock_20X20.svg"
                                className="clock"
                                alt="clock One"
                              />
                              <Text className="rowuser" variant="body12">
                                100
                              </Text>
                            </Row>
                          </Column>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                    <Column className="bg-black_900 items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius10 w-[42%]">
                      <Img
                        src="images/img_play.svg"
                        className="play"
                        alt="play One"
                      />
                      <Text className="video" as="h2" variant="h2">
                        02:30:45
                      </Text>
                    </Column>
                    <Column className="items-center w-[54%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Text className="titleactions" variant="body12">
                            Lorem ipsum dolor sit amet, consectetur...
                          </Text>
                          <Img
                            src="images/img_overflowmenu_1.svg"
                            className="file_One1"
                            alt="overflowmenu Ten"
                          />
                        </Row>
                        <Column className="justify-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[87%]">
                          <Column className="items-center justify-start w-[56%]">
                            <Text className="date" variant="body12">
                              {"<Channel name>"}
                            </Text>
                          </Column>
                          <Row className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[78%]">
                            <Img
                              src="images/img_calendar_16X16.svg"
                              className="clock"
                              alt="calendar Two"
                            />
                            <Text className="likes" variant="body12">
                              15-Oct-2022 11:30 AM
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[61%]">
                          <Column className="items-center py-[1px] w-[35%]">
                            <Row className="items-start mt-[1px] w-[100%]">
                              <Img
                                src="images/img_instagram.svg"
                                className="clock"
                                alt="instagram Two"
                              />
                              <Text className="rowinstagram" variant="body12">
                                3.2K
                              </Text>
                            </Row>
                          </Column>
                          <Row className="items-center justify-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[8px] w-[22%]">
                            <Img
                              src="images/img_thumbsup.svg"
                              className="clock"
                              alt="thumbsup Ten"
                            />
                            <Text className="likes" variant="body12">
                              0
                            </Text>
                          </Row>
                          <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[30%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Img
                                src="images/img_clock_20X20.svg"
                                className="clock"
                                alt="clock Two"
                              />
                              <Text className="rowuser" variant="body12">
                                100
                              </Text>
                            </Row>
                          </Column>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                    <Column className="bg-black_900 items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius10 w-[42%]">
                      <Img
                        src="images/img_play.svg"
                        className="play"
                        alt="play Two"
                      />
                      <Text className="video" as="h2" variant="h2">
                        02:30:45
                      </Text>
                    </Column>
                    <Column className="items-center w-[54%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Text className="titleactions" variant="body12">
                            Lorem ipsum dolor sit amet, consectetur...
                          </Text>
                          <Img
                            src="images/img_overflowmenu_1.svg"
                            className="file_One1"
                            alt="overflowmenu Eleven"
                          />
                        </Row>
                        <Column className="justify-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[87%]">
                          <Column className="items-center justify-start w-[56%]">
                            <Text className="date" variant="body12">
                              {"<Channel name>"}
                            </Text>
                          </Column>
                          <Row className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[78%]">
                            <Img
                              src="images/img_calendar_16X16.svg"
                              className="clock"
                              alt="calendar Three"
                            />
                            <Text className="likes" variant="body12">
                              15-Oct-2022 11:30 AM
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[61%]">
                          <Column className="items-center py-[1px] w-[35%]">
                            <Row className="items-start mt-[1px] w-[100%]">
                              <Img
                                src="images/img_instagram.svg"
                                className="clock"
                                alt="instagram Three"
                              />
                              <Text className="rowinstagram" variant="body12">
                                3.2K
                              </Text>
                            </Row>
                          </Column>
                          <Row className="items-center justify-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[8px] w-[22%]">
                            <Img
                              src="images/img_thumbsup.svg"
                              className="clock"
                              alt="thumbsup Eleven"
                            />
                            <Text className="likes" variant="body12">
                              0
                            </Text>
                          </Row>
                          <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[30%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Img
                                src="images/img_clock_20X20.svg"
                                className="clock"
                                alt="clock Three"
                              />
                              <Text className="rowuser" variant="body12">
                                100
                              </Text>
                            </Row>
                          </Column>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                    <Column className="bg-black_900 items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius10 w-[42%]">
                      <Img
                        src="images/img_play.svg"
                        className="play"
                        alt="play Three"
                      />
                      <Text className="video" as="h2" variant="h2">
                        02:30:45
                      </Text>
                    </Column>
                    <Column className="items-center w-[54%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Text className="titleactions" variant="body12">
                            Lorem ipsum dolor sit amet, consectetur...
                          </Text>
                          <Img
                            src="images/img_overflowmenu_1.svg"
                            className="file_One1"
                            alt="overflowmenu Twelve"
                          />
                        </Row>
                        <Column className="justify-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[87%]">
                          <Column className="items-center justify-start w-[56%]">
                            <Text className="date" variant="body12">
                              {"<Channel name>"}
                            </Text>
                          </Column>
                          <Row className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[78%]">
                            <Img
                              src="images/img_calendar_16X16.svg"
                              className="clock"
                              alt="calendar Four"
                            />
                            <Text className="likes" variant="body12">
                              15-Oct-2022 11:30 AM
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[61%]">
                          <Column className="items-center py-[1px] w-[35%]">
                            <Row className="items-start mt-[1px] w-[100%]">
                              <Img
                                src="images/img_instagram.svg"
                                className="clock"
                                alt="instagram Four"
                              />
                              <Text className="rowinstagram" variant="body12">
                                3.2K
                              </Text>
                            </Row>
                          </Column>
                          <Row className="items-center justify-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[8px] w-[22%]">
                            <Img
                              src="images/img_thumbsup.svg"
                              className="clock"
                              alt="thumbsup Twelve"
                            />
                            <Text className="likes" variant="body12">
                              0
                            </Text>
                          </Row>
                          <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[30%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Img
                                src="images/img_clock_20X20.svg"
                                className="clock"
                                alt="clock Four"
                              />
                              <Text className="rowuser" variant="body12">
                                100
                              </Text>
                            </Row>
                          </Column>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                    <Column className="bg-black_900 items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius10 w-[42%]">
                      <Img
                        src="images/img_play.svg"
                        className="play"
                        alt="play Four"
                      />
                      <Text className="video" as="h2" variant="h2">
                        02:30:45
                      </Text>
                    </Column>
                    <Column className="items-center w-[54%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Text className="titleactions" variant="body12">
                            Lorem ipsum dolor sit amet, consectetur...
                          </Text>
                          <Img
                            src="images/img_overflowmenu_1.svg"
                            className="file_One1"
                            alt="overflowmenu Thirteen"
                          />
                        </Row>
                        <Column className="justify-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[87%]">
                          <Column className="items-center justify-start w-[56%]">
                            <Text className="date" variant="body12">
                              {"<Channel name>"}
                            </Text>
                          </Column>
                          <Row className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[78%]">
                            <Img
                              src="images/img_calendar_16X16.svg"
                              className="clock"
                              alt="calendar Five"
                            />
                            <Text className="likes" variant="body12">
                              15-Oct-2022 11:30 AM
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[61%]">
                          <Column className="items-center py-[1px] w-[35%]">
                            <Row className="items-start mt-[1px] w-[100%]">
                              <Img
                                src="images/img_instagram.svg"
                                className="clock"
                                alt="instagram Five"
                              />
                              <Text className="rowinstagram" variant="body12">
                                3.2K
                              </Text>
                            </Row>
                          </Column>
                          <Row className="items-center justify-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[8px] w-[22%]">
                            <Img
                              src="images/img_thumbsup.svg"
                              className="clock"
                              alt="thumbsup Thirteen"
                            />
                            <Text className="likes" variant="body12">
                              0
                            </Text>
                          </Row>
                          <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[30%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Img
                                src="images/img_clock_20X20.svg"
                                className="clock"
                                alt="clock Five"
                              />
                              <Text className="rowuser" variant="body12">
                                100
                              </Text>
                            </Row>
                          </Column>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                    <Column className="bg-black_900 items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius10 w-[42%]">
                      <Img
                        src="images/img_play.svg"
                        className="play"
                        alt="play Five"
                      />
                      <Text className="video" as="h2" variant="h2">
                        02:30:45
                      </Text>
                    </Column>
                    <Column className="items-center w-[54%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Text className="titleactions" variant="body12">
                            Lorem ipsum dolor sit amet, consectetur...
                          </Text>
                          <Img
                            src="images/img_overflowmenu_1.svg"
                            className="file_One1"
                            alt="overflowmenu Fourteen"
                          />
                        </Row>
                        <Column className="justify-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[87%]">
                          <Column className="items-center justify-start w-[56%]">
                            <Text className="date" variant="body12">
                              {"<Channel name>"}
                            </Text>
                          </Column>
                          <Row className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[78%]">
                            <Img
                              src="images/img_calendar_16X16.svg"
                              className="clock"
                              alt="calendar Six"
                            />
                            <Text className="likes" variant="body12">
                              15-Oct-2022 11:30 AM
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[61%]">
                          <Column className="items-center py-[1px] w-[35%]">
                            <Row className="items-start mt-[1px] w-[100%]">
                              <Img
                                src="images/img_instagram.svg"
                                className="clock"
                                alt="instagram Six"
                              />
                              <Text className="rowinstagram" variant="body12">
                                3.2K
                              </Text>
                            </Row>
                          </Column>
                          <Row className="items-center justify-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[8px] w-[22%]">
                            <Img
                              src="images/img_thumbsup.svg"
                              className="clock"
                              alt="thumbsup Fourteen"
                            />
                            <Text className="likes" variant="body12">
                              0
                            </Text>
                          </Row>
                          <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[30%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Img
                                src="images/img_clock_20X20.svg"
                                className="clock"
                                alt="clock Six"
                              />
                              <Text className="rowuser" variant="body12">
                                100
                              </Text>
                            </Row>
                          </Column>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                    <Column className="bg-black_900 items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius10 w-[42%]">
                      <Img
                        src="images/img_play.svg"
                        className="play"
                        alt="play Six"
                      />
                      <Text className="video" as="h2" variant="h2">
                        02:30:45
                      </Text>
                    </Column>
                    <Column className="items-center w-[54%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Text className="titleactions" variant="body12">
                            Lorem ipsum dolor sit amet, consectetur...
                          </Text>
                          <Img
                            src="images/img_overflowmenu_1.svg"
                            className="file_One1"
                            alt="overflowmenu Fifteen"
                          />
                        </Row>
                        <Column className="justify-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[87%]">
                          <Column className="items-center justify-start w-[56%]">
                            <Text className="date" variant="body12">
                              {"<Channel name>"}
                            </Text>
                          </Column>
                          <Row className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[78%]">
                            <Img
                              src="images/img_calendar_16X16.svg"
                              className="clock"
                              alt="calendar Seven"
                            />
                            <Text className="likes" variant="body12">
                              15-Oct-2022 11:30 AM
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[61%]">
                          <Column className="items-center py-[1px] w-[35%]">
                            <Row className="items-start mt-[1px] w-[100%]">
                              <Img
                                src="images/img_instagram.svg"
                                className="clock"
                                alt="instagram Seven"
                              />
                              <Text className="rowinstagram" variant="body12">
                                3.2K
                              </Text>
                            </Row>
                          </Column>
                          <Row className="items-center justify-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[8px] w-[22%]">
                            <Img
                              src="images/img_thumbsup.svg"
                              className="clock"
                              alt="thumbsup Fifteen"
                            />
                            <Text className="likes" variant="body12">
                              0
                            </Text>
                          </Row>
                          <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[30%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Img
                                src="images/img_clock_20X20.svg"
                                className="clock"
                                alt="clock Seven"
                              />
                              <Text className="rowuser" variant="body12">
                                100
                              </Text>
                            </Row>
                          </Column>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                    <Column className="bg-black_900 items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius10 w-[42%]">
                      <Img
                        src="images/img_play.svg"
                        className="play"
                        alt="play Seven"
                      />
                      <Text className="video" as="h2" variant="h2">
                        02:30:45
                      </Text>
                    </Column>
                    <Column className="items-center w-[54%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Text className="titleactions" variant="body12">
                            Lorem ipsum dolor sit amet, consectetur...
                          </Text>
                          <Img
                            src="images/img_overflowmenu_1.svg"
                            className="file_One1"
                            alt="overflowmenu Sixteen"
                          />
                        </Row>
                        <Column className="justify-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[87%]">
                          <Column className="items-center justify-start w-[56%]">
                            <Text className="date" variant="body12">
                              {"<Channel name>"}
                            </Text>
                          </Column>
                          <Row className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[78%]">
                            <Img
                              src="images/img_calendar_16X16.svg"
                              className="clock"
                              alt="calendar Eight"
                            />
                            <Text className="likes" variant="body12">
                              15-Oct-2022 11:30 AM
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[61%]">
                          <Column className="items-center py-[1px] w-[35%]">
                            <Row className="items-start mt-[1px] w-[100%]">
                              <Img
                                src="images/img_instagram.svg"
                                className="clock"
                                alt="instagram Eight"
                              />
                              <Text className="rowinstagram" variant="body12">
                                3.2K
                              </Text>
                            </Row>
                          </Column>
                          <Row className="items-center justify-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[8px] w-[22%]">
                            <Img
                              src="images/img_thumbsup.svg"
                              className="clock"
                              alt="thumbsup Sixteen"
                            />
                            <Text className="likes" variant="body12">
                              0
                            </Text>
                          </Row>
                          <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[30%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Img
                                src="images/img_clock_20X20.svg"
                                className="clock"
                                alt="clock Eight"
                              />
                              <Text className="rowuser" variant="body12">
                                100
                              </Text>
                            </Row>
                          </Column>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                    <Column className="bg-black_900 items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius10 w-[42%]">
                      <Img
                        src="images/img_play.svg"
                        className="play"
                        alt="play Eight"
                      />
                      <Text className="video" as="h2" variant="h2">
                        02:30:45
                      </Text>
                    </Column>
                    <Column className="items-center w-[54%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Text className="titleactions" variant="body12">
                            Lorem ipsum dolor sit amet, consectetur...
                          </Text>
                          <Img
                            src="images/img_overflowmenu_1.svg"
                            className="file_One1"
                            alt="overflowmenu Seventeen"
                          />
                        </Row>
                        <Column className="justify-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[87%]">
                          <Column className="items-center justify-start w-[56%]">
                            <Text className="date" variant="body12">
                              {"<Channel name>"}
                            </Text>
                          </Column>
                          <Row className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[78%]">
                            <Img
                              src="images/img_calendar_16X16.svg"
                              className="clock"
                              alt="calendar Nine"
                            />
                            <Text className="likes" variant="body12">
                              15-Oct-2022 11:30 AM
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[61%]">
                          <Column className="items-center py-[1px] w-[35%]">
                            <Row className="items-start mt-[1px] w-[100%]">
                              <Img
                                src="images/img_instagram.svg"
                                className="clock"
                                alt="instagram Nine"
                              />
                              <Text className="rowinstagram" variant="body12">
                                3.2K
                              </Text>
                            </Row>
                          </Column>
                          <Row className="items-center justify-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[8px] w-[22%]">
                            <Img
                              src="images/img_thumbsup.svg"
                              className="clock"
                              alt="thumbsup Seventeen"
                            />
                            <Text className="likes" variant="body12">
                              0
                            </Text>
                          </Row>
                          <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[30%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Img
                                src="images/img_clock_20X20.svg"
                                className="clock"
                                alt="clock Nine"
                              />
                              <Text className="rowuser" variant="body12">
                                100
                              </Text>
                            </Row>
                          </Column>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                    <Column className="bg-black_900 items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius10 w-[42%]">
                      <Img
                        src="images/img_play.svg"
                        className="play"
                        alt="play Nine"
                      />
                      <Text className="video" as="h2" variant="h2">
                        02:30:45
                      </Text>
                    </Column>
                    <Column className="items-center w-[54%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Text className="titleactions" variant="body12">
                            Lorem ipsum dolor sit amet, consectetur...
                          </Text>
                          <Img
                            src="images/img_overflowmenu_1.svg"
                            className="file_One1"
                            alt="overflowmenu Eighteen"
                          />
                        </Row>
                        <Column className="justify-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[87%]">
                          <Column className="items-center justify-start w-[56%]">
                            <Text className="date" variant="body12">
                              {"<Channel name>"}
                            </Text>
                          </Column>
                          <Row className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[78%]">
                            <Img
                              src="images/img_calendar_16X16.svg"
                              className="clock"
                              alt="calendar Ten"
                            />
                            <Text className="likes" variant="body12">
                              15-Oct-2022 11:30 AM
                            </Text>
                          </Row>
                        </Column>
                        <Row className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[61%]">
                          <Column className="items-center py-[1px] w-[35%]">
                            <Row className="items-start mt-[1px] w-[100%]">
                              <Img
                                src="images/img_instagram.svg"
                                className="clock"
                                alt="instagram Ten"
                              />
                              <Text className="rowinstagram" variant="body12">
                                3.2K
                              </Text>
                            </Row>
                          </Column>
                          <Row className="items-center justify-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[8px] w-[22%]">
                            <Img
                              src="images/img_thumbsup.svg"
                              className="clock"
                              alt="thumbsup Eighteen"
                            />
                            <Text className="likes" variant="body12">
                              0
                            </Text>
                          </Row>
                          <Column className="items-center 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[30%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Img
                                src="images/img_clock_20X20.svg"
                                className="clock"
                                alt="clock Ten"
                              />
                              <Text className="rowuser" variant="body12">
                                100
                              </Text>
                            </Row>
                          </Column>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                </List>
                <Column className="items-center justify-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[27%]">
                  <Button
                    className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[100%]"
                    shape="CircleBorder17"
                    size="md"
                    variant="OutlineBlack9000c"
                  >
                    Show More
                  </Button>
                </Column>
              </Column>
            </Column>
          </Row>
          <Line className="bg-black_900_20 h-[1px] 3xl:mt-[101px] lg:mt-[60px] xl:mt-[75px] 2xl:mt-[84px] w-[100%]" />
          <Footer5 className="font-poppins lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default ImranVideoNetworkModuleVTubeSinglePagePage;
