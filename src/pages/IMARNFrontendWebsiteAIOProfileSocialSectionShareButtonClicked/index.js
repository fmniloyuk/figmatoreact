import React from "react";

import {
  Column,
  Input,
  Img,
  Row,
  Button,
  Text,
  List,
  Line,
  Stack,
} from "components";

const IMARNFrontendWebsiteAIOProfileSocialSectionShareButtonClickedPage =
  () => {
    function handleNavigate193() {
      window.location.href = "https://www.facebook.com/login/";
    }

    return (
      <>
        <Column className="font-poppins items-center justify-start mx-[auto] lg:p-[40px] xl:p-[50px] 2xl:p-[57px] 3xl:p-[68px] w-[100%]">
          <Column className="bg-white_A700 border border-black_900_0c border-solid items-center justify-start lg:mb-[194px] xl:mb-[243px] 2xl:mb-[273px] 3xl:mb-[328px] lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 w-[43%]">
            <Input
              className="placeholder:text-black_900 modalheader"
              wrapClassName="flex w-[100%]"
              name="modalheader"
              placeholder="Share On"
              prefix={
                <Img
                  src="images/img_share_24X24.svg"
                  className="lg:w-[16px] lg:h-[17px] lg:ml-[4px] lg:mr-[3px] xl:w-[20px] xl:h-[21px] xl:ml-[5px] xl:mr-[4px] 2xl:w-[22px] 2xl:h-[23px] 2xl:ml-[6px] 2xl:mr-[4px] 3xl:w-[27px] 3xl:h-[28px] 3xl:ml-[8px] 3xl:mr-[5px] my-[auto]"
                  alt="share"
                />
              }
              suffix={
                <Img
                  src="images/img_close.svg"
                  className="mr-[2px] lg:w-[10px] lg:h-[11px] lg:ml-[23px] xl:w-[12px] xl:h-[13px] xl:ml-[29px] 2xl:w-[14px] 2xl:h-[15px] 2xl:ml-[33px] 3xl:w-[17px] 3xl:h-[18px] 3xl:ml-[40px] my-[auto]"
                  alt="close"
                />
              }
              shape="CustomBorderTL10"
              size="md"
              variant="OutlineBlack9000c"
            ></Input>
            <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
              <Row className="items-start justify-between w-[100%]">
                <Column className="items-center justify-start w-[12%]">
                  <Button
                    className="common-pointer flex items-center justify-center rounded-radius50 VendorPlatinum"
                    onClick={handleNavigate193}
                    size="lgIcn"
                    variant="icbOutlineBlue7001_2"
                  >
                    <Img
                      src="images/img_arrowdown_29X29.svg"
                      className="flex items-center justify-center"
                      alt="facebook"
                    />
                  </Button>
                  <Text className="facebook" variant="body10">
                    Facebook
                  </Text>
                </Column>
                <Column className="items-center justify-start w-[13%]">
                  <Button
                    className="flex items-center justify-center rounded-radius50 VendorPlatinum"
                    size="lgIcn"
                    variant="icbOutlineBlue7001_2"
                  >
                    <Img
                      src="images/img_arrowdown_29X29.svg"
                      className="flex items-center justify-center"
                      alt="instagram"
                    />
                  </Button>
                  <Text
                    className="capitalize font-medium rowsummary"
                    variant="body10"
                  >
                    Instagram
                  </Text>
                </Column>
                <List
                  className="lg:gap-[39px] xl:gap-[49px] 2xl:gap-[56px] 3xl:gap-[67px] grid grid-cols-2 min-h-[auto] w-[30%]"
                  orientation="horizontal"
                >
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="flex items-center justify-center rounded-radius50 VendorPlatinum"
                      size="lgIcn"
                      variant="icbOutlineBlue7001_2"
                    >
                      <Img
                        src="images/img_arrowdown_29X29.svg"
                        className="flex items-center justify-center lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[17px]"
                        alt="twitter"
                      />
                    </Button>
                    <Text className="facebook" variant="body10">
                      Twitter
                    </Text>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="flex items-center justify-center rounded-radius50 VendorPlatinum"
                      size="lgIcn"
                      variant="icbOutlineBlue7001_2"
                    >
                      <Img
                        src="images/img_arrowdown_29X29.svg"
                        className="flex items-center justify-center"
                        alt="linkedin"
                      />
                    </Button>
                    <Text className="facebook" variant="body10">
                      Linkedin
                    </Text>
                  </Column>
                </List>
                <Column className="items-center justify-start w-[13%]">
                  <Button
                    className="flex items-center justify-center rounded-radius50 VendorPlatinum"
                    size="lgIcn"
                    variant="icbOutlineBlue7001_2"
                  >
                    <Img
                      src="images/img_arrowdown_29X29.svg"
                      className="flex items-center justify-center"
                      alt="whatsapp"
                    />
                  </Button>
                  <Text
                    className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] XAxis"
                    variant="body10"
                  >
                    WhatsApp
                  </Text>
                </Column>
              </Row>
              <Line className="bg-black_900_14 h-[1px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]" />
              <Column className="bg-white_A700 border border-black_900_20 border-solid justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius10 w-[100%]">
                <Text
                  className="lg:mb-[50px] xl:mb-[63px] 2xl:mb-[71px] 3xl:mb-[85px] shares1"
                  variant="body10"
                >
                  What's going on? #Hashtag.. @Mention..
                </Text>
              </Column>
              <Text
                className="lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] columnskillsetone"
                variant="body10"
              >
                Share the post on
              </Text>
              <Stack className="lg:h-[142px] xl:h-[178px] 2xl:h-[200px] 3xl:h-[239px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                <Button
                  className="absolute flex items-center justify-center left-[0] ml-[2px] text-center w-[24%]"
                  leftIcon={
                    <Img
                      src="images/img_menu_24X24.svg"
                      className="text-center right-[1%] absolute lg:w-[16px] lg:h-[17px] lg:mr-[3px] xl:w-[20px] xl:h-[21px] xl:mr-[4px] 2xl:w-[22px] 2xl:h-[23px] 2xl:mr-[4px] 3xl:w-[27px] 3xl:h-[28px] 3xl:mr-[5px]"
                      alt="menu"
                    />
                  }
                  shape="CircleBorder12"
                  size="xl"
                  variant="OutlineBlue7001_2"
                >
                  <div className="bg-transparent capitalize font-medium left-[0] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] top-[0]">
                    Timeline
                  </div>
                </Button>
                <Button
                  className="2xl:ml-[148px] 3xl:ml-[178px] absolute flex items-center justify-center left-[28%] lg:ml-[105px] text-center w-[24%] xl:ml-[132px]"
                  leftIcon={
                    <Img
                      src="images/img_reply.svg"
                      className="text-center right-[1%] absolute lg:w-[10px] lg:mr-[5px] xl:w-[13px] xl:mr-[6px] 2xl:w-[15px] 2xl:mr-[7px] 3xl:w-[18px] 3xl:mr-[9px]"
                      alt="reply"
                    />
                  }
                  shape="CircleBorder12"
                  size="xl"
                  variant="OutlineBluegray4001_2"
                >
                  <div className="bg-transparent capitalize font-medium left-[0] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] top-[0]">
                    Page
                  </div>
                </Button>
                <Column className="absolute justify-start w-[100%]">
                  <Button
                    className="2xl:ml-[295px] 3xl:ml-[354px] flex items-center justify-center lg:ml-[209px] text-center w-[24%] xl:ml-[262px]"
                    leftIcon={
                      <Img
                        src="images/img_user_24X24.svg"
                        className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[5px] xl:w-[20px] xl:h-[21px] xl:mr-[6px] 2xl:w-[22px] 2xl:h-[23px] 2xl:mr-[7px] 3xl:w-[27px] 3xl:h-[28px] 3xl:mr-[9px]"
                        alt="user"
                      />
                    }
                    shape="CircleBorder12"
                    size="xl"
                    variant="OutlineBluegray4001_2"
                  >
                    <div className="bg-transparent capitalize font-medium xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px]">
                      Group
                    </div>
                  </Button>
                  <Row className="bg-gray_51 border border-black_900_20 border-solid items-center justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius10 w-[100%]">
                    <Row className="items-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] w-[27%]">
                      <Img
                        src="images/img_ellipse15_45X45.png"
                        className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                        alt="EllipseFifteen"
                      />
                      <div className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] mt-[3px] overflow-x-auto w-[88%]">
                        <Column className="justify-start w-[100%]">
                          <Text
                            className="font-semibold text-black_900 w-[auto]"
                            variant="body10"
                          >
                            Sam Russel
                          </Text>
                          <Text className="date1" variant="body12">
                            15-Oct-2022 11:30 AM
                          </Text>
                        </Column>
                      </div>
                    </Row>
                    <Img
                      src="images/img_maximize.svg"
                      className="lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] calendar"
                      alt="maximize"
                    />
                  </Row>
                  <Button
                    className="capitalize font-semibold lg:ml-[309px] xl:ml-[387px] 2xl:ml-[435px] 3xl:ml-[522px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[18%]"
                    shape="RoundedBorder4"
                    size="lg"
                    variant="FillBlue700"
                  >
                    Share
                  </Button>
                </Column>
              </Stack>
            </Column>
          </Column>
        </Column>
      </>
    );
  };

export default IMARNFrontendWebsiteAIOProfileSocialSectionShareButtonClickedPage;
