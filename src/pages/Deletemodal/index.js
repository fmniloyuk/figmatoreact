import React from "react";

import { Column, Input, Img, Text, Button } from "components";

const DeletemodalPage = () => {
  return (
    <>
      <Column className="font-poppins items-center justify-start mx-[auto] lg:p-[40px] xl:p-[50px] 2xl:p-[57px] 3xl:p-[68px] w-[100%]">
        <Column className="bg-white_A700 border border-black_900_0c border-solid justify-start lg:mb-[474px] xl:mb-[593px] 2xl:mb-[668px] 3xl:mb-[801px] lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] rounded-radius10 w-[43%]">
          <Input
            className="placeholder:text-black_900 modalheader"
            wrapClassName="flex w-[100%]"
            name="modalheader"
            placeholder="Delete Post"
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
            className="font-medium lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] text-black_900 w-[auto]"
            variant="body10"
          >
            Are you sure that you want to delete this post ?
          </Text>
          <Button
            className="capitalize font-semibold lg:ml-[321px] xl:ml-[401px] 2xl:ml-[451px] 3xl:ml-[542px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[18%]"
            shape="RoundedBorder4"
            size="lg"
            variant="FillBlue700"
          >
            Delete
          </Button>
        </Column>
      </Column>
    </>
  );
};

export default DeletemodalPage;
