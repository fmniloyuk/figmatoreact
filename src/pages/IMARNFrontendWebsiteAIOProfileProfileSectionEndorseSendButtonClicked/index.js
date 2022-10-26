import React from "react";

import { Column, Input, Img, Text, Button } from "components";

const IMARNFrontendWebsiteAIOProfileProfileSectionEndorseSendButtonClickedPage =
  () => {
    return (
      <>
        <Column className="items-center justify-start mx-[auto] lg:p-[40px] xl:p-[50px] 2xl:p-[57px] 3xl:p-[68px] w-[100%]">
          <Column className="bg-white_A700 border border-black_900_0c border-solid items-center justify-start lg:mb-[276px] xl:mb-[346px] 2xl:mb-[389px] 3xl:mb-[467px] lg:pb-[102px] xl:pb-[127px] 2xl:pb-[143px] 3xl:pb-[172px] rounded-radius10 w-[43%]">
            <Input
              className="font-poppins placeholder:text-black_900 modalheader"
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
            <Text
              className="2xl:mt-[108px] 3xl:mt-[130px] lg:mt-[77px] xl:mt-[96px] AllTimeCommun"
              variant="body7"
            >
              This Endorsement shall be reviewed & Approved
            </Text>
            <Text
              className="font-poppins lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] Amazon"
              variant="body10"
            >
              Your endorsement has been sent, It will be reviewed shortly.
            </Text>
            <Button
              className="flex lg:h-[41px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] items-center justify-center lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[40px] rounded-radius50 lg:w-[40px] xl:w-[50px] 2xl:w-[57px] 3xl:w-[68px]"
              size="2xlIcn"
              variant="icbOutlineGreenA700"
            >
              <Img
                src="images/img_checkmark_60X60.svg"
                className="flex items-center justify-center lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px]"
                alt="checkmark"
              />
            </Button>
          </Column>
        </Column>
      </>
    );
  };

export default IMARNFrontendWebsiteAIOProfileProfileSectionEndorseSendButtonClickedPage;
