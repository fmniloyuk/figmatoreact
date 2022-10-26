import React from "react";

import {
  Column,
  Input,
  Img,
  Text,
  Line,
  Row,
  CheckBox,
  Button,
} from "components";

const IMARNFrontendWebsiteSingleServicePageCheckoutScenerio2FundWalletModalboxAddAnotherCardPage =
  () => {
    return (
      <>
        <Column className="font-poppins items-center justify-start mx-[auto] lg:p-[40px] xl:p-[50px] 2xl:p-[57px] 3xl:p-[68px] w-[100%]">
          <Column className="bg-white_A700 border border-black_900_0c border-solid items-center justify-start xl:mb-[116px] 2xl:mb-[131px] 3xl:mb-[157px] lg:mb-[93px] pb-[1px] pr-[1px] rounded-radius10 w-[43%]">
            <Input
              className="placeholder:text-black_900 modalheader"
              wrapClassName="flex w-[100%]"
              name="modalheader"
              placeholder="Fund Your wallet"
              suffix={
                <Img
                  src="images/img_close.svg"
                  className="lg:w-[10px] lg:h-[11px] lg:ml-[23px] lg:mr-[4px] xl:w-[12px] xl:h-[13px] xl:ml-[29px] xl:mr-[5px] 2xl:w-[14px] 2xl:h-[15px] 2xl:ml-[33px] 2xl:mr-[6px] 3xl:w-[17px] 3xl:h-[18px] 3xl:ml-[40px] 3xl:mr-[8px] my-[auto]"
                  alt="close"
                />
              }
              shape="CustomBorderTL10"
              size="sm"
              variant="OutlineBlack9000c"
            ></Input>
            <Column className="items-center justify-start lg:mb-[19px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[33px] lg:pt-[10px] xl:pt-[13px] 2xl:pt-[15px] 3xl:pt-[18px] w-[93%]">
              <Column className="justify-start pt-[4px] w-[100%]">
                <Column className="items-center justify-start w-[21%]">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    variant="body10"
                  >
                    Registered Card
                  </Text>
                </Column>
                <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                <Row className="items-start justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] pt-[2px] w-[100%]">
                  <Column className="justify-start w-[58%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Card Number
                    </Text>
                    <Input
                      className="placeholder:text-gray_501 Group479"
                      wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[11px]"
                      name="price"
                      placeholder="XXXX XXXX XXXX XXXX"
                    ></Input>
                  </Column>
                  <Column className="justify-start mt-[1px] w-[37%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Expiry Date
                    </Text>
                    <Input
                      className="placeholder:text-gray_501 Group479"
                      wrapClassName="2xl:mt-[9px] 3xl:mt-[11px] lg:mt-[6px] w-[100%] xl:mt-[8px]"
                      name="input"
                      placeholder="MM/YYYY"
                      size="md"
                    ></Input>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                  <Column className="w-[58%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Card Holder’s Name
                    </Text>
                    <Input
                      className="placeholder:text-gray_501 Group479"
                      wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[11px]"
                      type="text"
                      name="input One"
                      placeholder="Card Holder’s Name"
                    ></Input>
                  </Column>
                  <Column className="items-center w-[37%]">
                    <Row className="items-center justify-between w-[96%]">
                      <Text
                        className="font-medium text-black_900 w-[auto]"
                        variant="body10"
                      >
                        CVC/CVV
                      </Text>
                      <Img
                        src="images/img_info.svg"
                        className="clock"
                        alt="info"
                      />
                    </Row>
                    <Input
                      className="placeholder:text-gray_501 Group479"
                      wrapClassName="2xl:mt-[9px] 3xl:mt-[11px] lg:mt-[6px] w-[100%] xl:mt-[8px]"
                      name="input Two"
                      placeholder="MM/YYYY"
                      size="md"
                    ></Input>
                  </Column>
                </Row>
                <Row className="items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] pt-[4px] w-[89%]">
                  <Column className="justify-start w-[65%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Funding Amount
                    </Text>
                    <Input
                      className="placeholder:text-gray_501 SelectDate"
                      wrapClassName="2xl:mt-[9px] 3xl:mt-[11px] flex lg:mt-[6px] w-[100%] xl:mt-[8px]"
                      name="input Three"
                      placeholder="140.00"
                      prefix={
                        <Img
                          src="images/img_volume_16X16.svg"
                          className="ml-[0] lg:w-[10px] lg:h-[11px] lg:mr-[3px] xl:w-[13px] xl:h-[14px] xl:mr-[4px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[4px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[5px] my-[auto]"
                          alt="volume"
                        />
                      }
                    ></Input>
                  </Column>
                  <Column className="items-center justify-start lg:ml-[20px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[44px] w-[29%]">
                    <CheckBox
                      className="font-medium 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[100%]"
                      inputClassName="h-[20px] mr-[5px] w-[20px]"
                      name="SaveasPrimary"
                      label="Save as Primary"
                      variant="OutlineBluegray102"
                    ></CheckBox>
                  </Column>
                </Row>
                <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                <Button
                  className="capitalize font-semibold xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[37%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillBlue700"
                >
                  Proceed
                </Button>
                <Line className="bg-black_900_20 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                <Row className="items-start justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] pt-[2px] w-[100%]">
                  <Column className="justify-start w-[58%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Card Number
                    </Text>
                    <Input
                      className="placeholder:text-gray_501 Group479"
                      wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[11px]"
                      name="price One"
                      placeholder="XXXX XXXX XXXX XXXX"
                    ></Input>
                  </Column>
                  <Column className="justify-start mt-[1px] w-[37%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Expiry Date
                    </Text>
                    <Input
                      className="placeholder:text-gray_501 Group479"
                      wrapClassName="2xl:mt-[9px] 3xl:mt-[11px] lg:mt-[6px] w-[100%] xl:mt-[8px]"
                      name="input Four"
                      placeholder="MM/YYYY"
                      size="md"
                    ></Input>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                  <Column className="w-[58%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      variant="body10"
                    >
                      Card Holder’s Name
                    </Text>
                    <Input
                      className="placeholder:text-gray_501 Group479"
                      wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[11px]"
                      type="text"
                      name="input Five"
                      placeholder="Card Holder’s Name"
                    ></Input>
                  </Column>
                  <Column className="items-center w-[37%]">
                    <Row className="items-center justify-between w-[96%]">
                      <Text
                        className="font-medium text-black_900 w-[auto]"
                        variant="body10"
                      >
                        CVC/CVV
                      </Text>
                      <Img
                        src="images/img_info.svg"
                        className="clock"
                        alt="info One"
                      />
                    </Row>
                    <Input
                      className="placeholder:text-gray_501 Group479"
                      wrapClassName="2xl:mt-[9px] 3xl:mt-[11px] lg:mt-[6px] w-[100%] xl:mt-[8px]"
                      name="input Six"
                      placeholder="MM/YYYY"
                      size="md"
                    ></Input>
                  </Column>
                </Row>
                <Button
                  className="capitalize font-semibold lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[37%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillBlue700"
                >
                  Add Card
                </Button>
              </Column>
            </Column>
          </Column>
        </Column>
      </>
    );
  };

export default IMARNFrontendWebsiteSingleServicePageCheckoutScenerio2FundWalletModalboxAddAnotherCardPage;
