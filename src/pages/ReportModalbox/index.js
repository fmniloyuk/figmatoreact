import React from "react";

import { Column, Input, Img, Text, SelectBox, Row, Button } from "components";

const ReportModalboxPage = () => {
  return (
    <>
      <Column className="font-poppins items-center justify-start mx-[auto] lg:p-[40px] xl:p-[50px] 2xl:p-[57px] 3xl:p-[68px] w-[100%]">
        <Column className="bg-white_A700 border border-black_900_0c border-solid items-center justify-start lg:mb-[228px] xl:mb-[286px] 2xl:mb-[322px] 3xl:mb-[386px] lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 w-[43%]">
          <Input
            className="placeholder:text-black_900 modalheader"
            wrapClassName="flex w-[100%]"
            name="modalheader"
            placeholder="What Do You Want To Report Us About?"
            suffix={
              <Img
                src="images/img_close.svg"
                className="lg:w-[10px] lg:h-[11px] lg:ml-[23px] lg:mr-[4px] xl:w-[12px] xl:h-[13px] xl:ml-[29px] xl:mr-[5px] 2xl:w-[14px] 2xl:h-[15px] 2xl:ml-[33px] 2xl:mr-[6px] 3xl:w-[17px] 3xl:h-[18px] 3xl:ml-[40px] 3xl:mr-[8px] my-[auto]"
                alt="close"
              />
            }
            shape="CustomBorderTL10"
            size="xl"
            variant="OutlineBlack9000c"
          ></Input>
          <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[93%]">
            <Column className="justify-start w-[100%]">
              <Text
                className="font-semibold text-black_900 w-[auto]"
                variant="body10"
              >
                Report Topic
              </Text>
              <SelectBox
                className="font-normal lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_501 w-[100%]"
                placeholderClassName="text-gray_501"
                name="ChooseaProfil"
                placeholder="Select What Do You Want to Report About"
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
                variant="OutlineBlack90020"
              ></SelectBox>
            </Column>
            <Column className="justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
              <Text
                className="font-semibold text-black_900 w-[auto]"
                variant="body10"
              >
                Reported Topic ID
              </Text>
              <Input
                className="placeholder:text-gray_501 Group479"
                wrapClassName="2xl:mt-[4px] 3xl:mt-[5px] lg:mt-[3px] w-[100%] xl:mt-[4px]"
                name="price"
                placeholder="ID #XXXXXXXX"
              ></Input>
            </Column>
            <Column className="items-center justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] pt-[4px] w-[100%]">
              <Column className="justify-start 3xl:pb-[118px] lg:pb-[70px] xl:pb-[88px] 2xl:pb-[99px] w-[100%]">
                <Text
                  className="font-semibold text-black_900 w-[auto]"
                  variant="body10"
                >
                  Report Details
                </Text>
                <Column className="items-center justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                  <Input
                    className="placeholder:text-gray_501 Group479"
                    wrapClassName="w-[100%]"
                    name="ChooseaProfil One"
                    placeholder="Please Tell us about Your Concerns"
                  ></Input>
                </Column>
              </Column>
              <Row className="items-center justify-between lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] py-[2px] w-[100%]">
                <Row className="items-center justify-evenly my-[3px] w-[12%]">
                  <Img
                    src="images/img_attach.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] w-[20%]"
                    alt="attach"
                  />
                  <Text className="date" variant="body10">
                    Attach
                  </Text>
                </Row>
                <Text
                  className="font-medium text-bluegray_400 w-[auto]"
                  variant="body12"
                >
                  0/5,000
                </Text>
              </Row>
            </Column>
            <Button
              className="capitalize font-semibold lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[35%]"
              shape="RoundedBorder4"
              size="lg"
              variant="FillBlue700"
            >
              Submit
            </Button>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default ReportModalboxPage;
