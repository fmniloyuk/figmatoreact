import React from "react";

import { Column, Row, Stack, Text, Grid } from "components";

const ItemsPage = () => {
  return (
    <>
      <Column className="items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-between w-[100%]">
          <aside className="w-[23%]">
            <div className="">
              <Column className="items-center justify-start w-[100%]">
                <Column className="bg-white_A700 border border-dashed border-gray_501 items-center justify-end lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] rounded-radius15 w-[100%]">
                  <Stack className="3xl:h-[116px] lg:h-[69px] xl:h-[86px] 2xl:h-[97px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[41%]">
                    <Text
                      className="absolute capitalize font-prompt inset-x-[0] mx-[auto] text-black_900 top-[0] w-[max-content]"
                      as="h3"
                      variant="h3"
                    >
                      65
                    </Text>
                    <Text
                      className="absolute bottom-[0] Channels"
                      variant="body5"
                    >
                      Profiles
                    </Text>
                  </Stack>
                </Column>
                <Column className="bg-white_A700 border border-dashed border-gray_501 items-center justify-end lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[40px] lg:p-[33px] xl:p-[41px] 2xl:p-[46px] 3xl:p-[56px] rounded-radius15 w-[100%]">
                  <Column className="items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[55%]">
                    <Text className="Iamlookingfo" as="h3" variant="h3">
                      65
                    </Text>
                    <Text className="Channels" variant="body5">
                      Channels
                    </Text>
                  </Column>
                </Column>
                <Column className="bg-white_A700 border border-dashed border-gray_501 items-center justify-end lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[40px] lg:p-[33px] xl:p-[41px] 2xl:p-[46px] 3xl:p-[56px] rounded-radius15 w-[100%]">
                  <Column className="items-center justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[38%]">
                    <Text className="Iamlookingfo" as="h3" variant="h3">
                      65
                    </Text>
                    <Text className="Channels" variant="body5">
                      Stores
                    </Text>
                  </Column>
                </Column>
                <Column className="bg-white_A700 border border-dashed border-gray_501 items-center justify-end lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[40px] lg:p-[33px] xl:p-[41px] 2xl:p-[46px] 3xl:p-[56px] rounded-radius15 w-[100%]">
                  <Column className="items-center justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[38%]">
                    <Text className="Iamlookingfo" as="h3" variant="h3">
                      65
                    </Text>
                    <Text className="Channels" variant="body5">
                      Events
                    </Text>
                  </Column>
                </Column>
              </Column>
            </div>
          </aside>
          <Column className="items-center w-[74%]">
            <Grid className="lg:gap-[23px] xl:gap-[29px] 2xl:gap-[33px] 3xl:gap-[40px] grid grid-cols-3 w-[100%]">
              <Column className="bg-white_A700 border border-dashed border-gray_501 items-center justify-end lg:p-[30px] xl:p-[38px] 2xl:p-[43px] 3xl:p-[52px] rounded-radius15 w-[100%]">
                <Column className="items-center justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] w-[56%]">
                  <Text className="Iamlookingfo" as="h3" variant="h3">
                    65
                  </Text>
                  <Text className="Channels" variant="body5">
                    Blog Posts
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-dashed border-gray_501 items-center justify-end lg:p-[30px] xl:p-[37px] 2xl:p-[42px] 3xl:p-[50px] rounded-radius15 w-[100%]">
                <Column className="items-center justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] w-[37%]">
                  <Text className="Iamlookingfo" as="h3" variant="h3">
                    65
                  </Text>
                  <Text className="Pages" variant="body5">
                    Pages
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-dashed border-gray_501 items-center justify-end lg:p-[30px] xl:p-[38px] 2xl:p-[43px] 3xl:p-[52px] rounded-radius15 w-[100%]">
                <Column className="items-center justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] w-[40%]">
                  <Text className="Iamlookingfo" as="h3" variant="h3">
                    65
                  </Text>
                  <Text className="Pages" variant="body5">
                    Groups
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-dashed border-gray_501 items-center justify-end lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] rounded-radius15 w-[100%]">
                <Column className="items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[39%]">
                  <Text className="Iamlookingfo" as="h3" variant="h3">
                    65
                  </Text>
                  <Text className="Channels" variant="body5">
                    Videos
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-dashed border-gray_501 items-center justify-end lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] rounded-radius15 w-[100%]">
                <Column className="items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[61%]">
                  <Text className="Iamlookingfo" as="h3" variant="h3">
                    65
                  </Text>
                  <Text className="Channels" variant="body5">
                    Vacancies
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-dashed border-gray_501 items-center justify-end lg:p-[34px] xl:p-[43px] 2xl:p-[49px] 3xl:p-[58px] rounded-radius15 w-[100%]">
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[48%]">
                  <Text className="Iamlookingfo" as="h3" variant="h3">
                    65
                  </Text>
                  <Text className="Channels" variant="body5">
                    Courses
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-dashed border-gray_501 items-center justify-end lg:p-[33px] xl:p-[41px] 2xl:p-[46px] 3xl:p-[56px] rounded-radius15 w-[100%]">
                <Column className="items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[50%]">
                  <Text className="Iamlookingfo" as="h3" variant="h3">
                    65
                  </Text>
                  <Text className="Channels" variant="body5">
                    Products
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-dashed border-gray_501 items-center justify-end lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] rounded-radius15 w-[100%]">
                <Column className="items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[48%]">
                  <Text className="Iamlookingfo" as="h3" variant="h3">
                    65
                  </Text>
                  <Text className="Channels" variant="body5">
                    Services
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-dashed border-gray_501 items-center justify-end lg:p-[30px] xl:p-[38px] 2xl:p-[43px] 3xl:p-[52px] rounded-radius15 w-[100%]">
                <Column className="items-center justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] w-[43%]">
                  <Text className="Iamlookingfo" as="h3" variant="h3">
                    65
                  </Text>
                  <Text className="Channels" variant="body5">
                    Projects
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-dashed border-gray_501 items-center justify-end lg:p-[33px] xl:p-[41px] 2xl:p-[46px] 3xl:p-[56px] rounded-radius15 w-[100%]">
                <Column className="2xl:h-[103px] 3xl:h-[124px] lg:h-[74px] xl:h-[92px] items-center justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] 2xl:w-[102px] 3xl:w-[123px] lg:w-[73px] xl:w-[91px]">
                  <Text className="Iamlookingfo" as="h3" variant="h3">
                    65
                  </Text>
                  <Text className="Channels" variant="body5">
                    Venues
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-dashed border-gray_501 items-center justify-end lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] rounded-radius15 w-[100%]">
                <Column className="items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[55%]">
                  <Text className="Iamlookingfo" as="h3" variant="h3">
                    65
                  </Text>
                  <Text className="Channels" variant="body5">
                    Webinars
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-dashed border-gray_501 items-center justify-end lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] rounded-radius15 w-[100%]">
                <Column className="items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[81%]">
                  <Text className="Iamlookingfo" as="h3" variant="h3">
                    65
                  </Text>
                  <Text className="Channels" variant="body5">
                    Consultations
                  </Text>
                </Column>
              </Column>
            </Grid>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ItemsPage;
