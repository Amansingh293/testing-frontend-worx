import React from "react";
import Heading from "./SecondPortionComponents/Heading";
import FirstComponent from "./SecondPortionComponents/FirstComponent";
import SecondComponent from "./SecondPortionComponents/SecondComponent";
import ThirdComponent from "./SecondPortionComponents/ThirdComponent";
import FourthComponent from "./SecondPortionComponents/FourthComponent";
import FifthComponent from "./SecondPortionComponents/FifthComponent";
import SixthComponent from "./SecondPortionComponents/SixthComponent";

const HeroSectionSecondPortion = () => {
  return (
    <div className="flex w-full mt-8 flex-col">
      <Heading />
      <div className="w-full border-[1px] rounded-[24px] border-[#207C9733] mt-16 p-12">
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
        <FifthComponent />
        <SixthComponent/>
      </div>
    </div>
  );
};

export default HeroSectionSecondPortion;
