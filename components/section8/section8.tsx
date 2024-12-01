// import { Card, CardContent } from "@/components/ui/card";

import * as React from "react";
import { FaStar } from "react-icons/fa6";
import Image from "next/image"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const SECTION8 = () => {
  return (
    <div className=" w-full   pt-[112px] gap-[80px] bg-[#F5F5F5] flex flex-col sm_max:w-[428px]">
      <div className="flex flex-col gap-[24px] pl-[60px]">
        <h2 className="block sm_max:hidden w-[1152px] font-bold font-roboto text-[48px] leading-[57.6px] gap-[24px]">
        Customer testimonials
        </h2>
        <h2 className="hidden sm_max:block sm_max:w-[340px] sm_max:font-bold sm_max:font-roboto sm_max:text-[32px] sm_max:leading-[41.6px] ">
        What Our Student Say
        </h2>
        <p className="w-[560px] font-normal font-roboto text-[18px] leading-[27px] sm_max:w-[361px] sm_max:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="flex  justify-center items-center gap-[48px] px-[60px] ">
        <div className="flex flex-col w-[416px] h-[294.89px] border-[1px] p-[32px] border-[#000000] gap-[24px]">
          <div className="flex gap-[4px]">
            <FaStar className="text-[#FFC107] w-[20px] h-[18.89px]"/>
            <FaStar className="text-[#FFC107] w-[20px] h-[18.89px]"/>
            <FaStar className="text-[#FFC107] w-[20px] h-[18.89px]"/>
            <FaStar className="text-[#FFC107] w-[20px] h-[18.89px]"/>
            <FaStar className="text-[#FFC107] w-[20px] h-[18.89px]"/>
          </div>
          <div className="">
            <p className="w-[298.67px] font-roboto font-normal text-[18px] leading-[27px]">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.&quot;
            </p>
            <div className="flex gap-[20px]">
              <Image src="/Avatar Image.png" alt="" width={56} height={56} className="rounded-full"/>
              <div className="flex flex-col justify-center ">
                <p className="font-roboto font-semibold text-[16px] leading-[24px]">James Nduku</p>
                <p className="font-roboto font-normal text-[16px] leading-[24px]">Software Developer</p>
              </div>
              
            </div>
          </div>
        </div>

        {/* div2 */}

        <div className="flex flex-col w-[416px] h-[294.89px] border-[1px] p-[32px] border-[#000000] gap-[24px] sm_max:hidden">
          <div className="flex gap-[4px]">
            <FaStar className="text-[#FFC107] w-[20px] h-[18.89px]"/>
            <FaStar className="text-[#FFC107] w-[20px] h-[18.89px]"/>
            <FaStar className="text-[#FFC107] w-[20px] h-[18.89px]"/>
            <FaStar className="text-[#FFC107] w-[20px] h-[18.89px]"/>
            <FaStar className="text-[#FFC107] w-[20px] h-[18.89px]"/>
          </div>
          <div>
            <p className="w-[298.67px] font-roboto font-normal text-[18px] leading-[27px] ">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.&quot;
            </p>
            <div className="flex gap-[20px]">
              <Image src="/Avatar Image1.png" alt="" width={56} height={56} className="rounded-full"/>
              <div className="flex flex-col justify-center ">
                <p className="font-roboto font-semibold text-[16px] leading-[24px]">Erick Kipkemboi</p>
                <p className="font-roboto font-normal text-[16px] leading-[24px]">Scrum Master</p>
              </div>
              
            </div>
          </div>
        </div>

        {/* div3 */}

        <div className="flex flex-col w-[416px] h-[294.89px] border-[1px] p-[32px] border-[#000000] gap-[24px] sm_max:hidden">
          <div className="flex gap-[4px]">
            <FaStar className="text-[#FFC107] w-[20px] h-[18.89px]"/>
            <FaStar className="text-[#FFC107] w-[20px] h-[18.89px]"/>
            <FaStar className="text-[#FFC107] w-[20px] h-[18.89px]"/>
            <FaStar className="text-[#FFC107] w-[20px] h-[18.89px]"/>
            <FaStar className="text-[#FFC107] w-[20px] h-[18.89px]"/>
          </div>
          <div>
            <p className="w-[298.67px] font-roboto font-normal text-[18px] leading-[27px]">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.&quot;
            </p>
            <div className="flex gap-[20px] ">
              <Image src="/Avatar Image2.png" alt="" width={56} height={56} className="rounded-full"/>
              <div>
                <p className="font-roboto font-semibold text-[16px] leading-[24px]">Stephen Kerubo</p>
                <p className="font-roboto font-normal text-[16px] leading-[24px]">UI/UX Designer</p>
              </div>
            
            </div>
          </div>
        </div>
        
      </div>
      <div className="flex items-center justify-between gap-[24px] pb-[70px] px-[60px]">
        <div className="flex gap-[8px]">
          <div className="w-[8px] h-[8px] bg-[#8D8D8D] rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-[#8D8D8D] rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-[#8D8D8D] rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-[#8D8D8D] rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-[#8D8D8D] rounded-full"></div>
        </div>
        <div className="flex gap-[15px] ">
        <FaArrowLeft className="w-[48px] h-[48px] rounded-full border-[1px] border-[#000000] p-[12px]  "/>
        <FaArrowRight className="w-[48px] h-[48px] rounded-full border-[1px] border-[#000000] p-[12px] "/>
        </div>
        
      </div>
    </div>
  );
};

export default SECTION8;
