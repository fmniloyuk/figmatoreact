import React from "react";

import { Column } from "components";
import Header from "components/Header/Header";
import Footer2 from "components/Footer/Footer2";

const VLanceMainPagePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-prompt items-center justify-start mx-[auto] pt-[2px] w-[100%]">
        <Header className="w-[100%]" />
        <Footer2 className="font-poppins lg:mt-[3911px] xl:mt-[4893px] 2xl:mt-[5504px] 3xl:mt-[6604px] w-[100%]" />
      </Column>
    </>
  );
};

export default VLanceMainPagePage;
