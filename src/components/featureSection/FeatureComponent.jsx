import React from "react";

const FeatureComponent = ({ image, title , children}) => {
  return (
    <div className="border-[1px] border-[#E9EAEB] rounded-[48px] flex items-center justify-start p-2 pl-[10px] pr-[10px] gap-3 relative">
      {image}
      <span className="text-[#207C97] text-[16px] leading-[24px]">{title}</span>
      {children}
    </div>
  );
};

export default FeatureComponent;
