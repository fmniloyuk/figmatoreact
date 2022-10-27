import React from "react";

import { Column, Input, Img, Text, Stack, Row, Button } from "components";
import { useNavigate } from "react-router-dom";

const IMARNFrontendWebsiteAIOProfileProfileSectionEndorseButtonClickedanywhereinthesitePage =
  () => {
    const navigate = useNavigate();

    function handleNavigate11() {
      navigate(
        "/imarnfrontendwebsiteaioprofileprofilesectionendorsesendbuttonclicked"
      );
    }

    return (
      <>
        <Column className="font-poppins items-center justify-start mx-[auto] lg:p-[40px] xl:p-[50px] 2xl:p-[57px] 3xl:p-[68px] w-[100%]">
          <Column className="bg-white_A700 border border-black_900_0c border-solid items-center justify-start lg:mb-[276px] xl:mb-[346px] 2xl:mb-[389px] 3xl:mb-[467px] lg:pb-[15px] xl:pb-[19px] 2xl:pb-[21px] 3xl:pb-[26px] rounded-radius10 w-[43%]">
            <Input
              className="placeholder:text-black_900 modalheader"
              wrapClassName="flex w-[100%]"
              name="modalheader"
              placeholder={"Endorse <User>"}
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
            <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[93%]">
              <Text
                className="font-medium text-black_900 w-[auto]"
                variant="body10"
              >
                {
                  "This Endorsement will appear on <user>’s Profile after being Reviewed"
                }
              </Text>
              <Stack className="lg:h-[227px] xl:h-[283px] 2xl:h-[319px] 3xl:h-[382px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                <Column className="absolute bg-white_A700 border border-black_900_20 border-solid bottom-[25%] justify-start lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius10 w-[100%]">
                  <Text
                    className="lg:mb-[50px] xl:mb-[63px] 2xl:mb-[71px] 3xl:mb-[85px] mt-[4px] extraactionso"
                    variant="body10"
                  >
                    Write your endorsement here...
                  </Text>
                </Column>
                <Column className="absolute justify-start w-[100%]">
                  <Column className="justify-start lg:mr-[281px] xl:mr-[352px] 2xl:mr-[396px] 3xl:mr-[475px] w-[26%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Img
                        src="images/img_ellipse15_45X45.png"
                        className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                        alt="EllipseFifteen"
                      />
                      <Column className="pr-[1px] py-[1px] w-[58%]">
                        <Text className="commentbox" variant="body10">
                          {"<user>"}
                        </Text>
                      </Column>
                    </Row>
                    <Text
                      className="font-medium lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] text-bluegray_400 w-[auto]"
                      variant="body12"
                    >
                      *indicates required.
                    </Text>
                    <Text
                      className="font-semibold lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Add Endorsement*
                    </Text>
                  </Column>
                  <Text
                    className="font-medium lg:ml-[347px] xl:ml-[434px] 2xl:ml-[488px] 3xl:ml-[586px] lg:mt-[100px] xl:mt-[125px] 2xl:mt-[141px] 3xl:mt-[169px] text-bluegray_400 w-[auto]"
                    variant="body12"
                  >
                    0/3,000
                  </Text>
                  <Button
                    className="common-pointer capitalize font-semibold lg:ml-[313px] xl:ml-[392px] 2xl:ml-[441px] 3xl:ml-[529px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[17%]"
                    onClick={handleNavigate11}
                    shape="RoundedBorder4"
                    size="lg"
                    variant="FillBlue700"
                  >
                    Send
                  </Button>
                </Column>
              </Stack>
            </Column>
          </Column>
        </Column>
      </>
    );
  };

export default IMARNFrontendWebsiteAIOProfileProfileSectionEndorseButtonClickedanywhereinthesitePage;
