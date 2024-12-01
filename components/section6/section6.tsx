import React from "react";
import Image from "next/image";
import { PiStarDuotone } from "react-icons/pi";
import { Button } from "@/components/ui/button";
function section6() {
  return (
   <div>
    <div>
      <div className="flex flex-col justify-center items-center sm_max:text-center sm_max:gap-[32px] mt-[112px]">
        <h1 className="font-roboto font-bold text-[37px] leading-[67.2px] sm_max:w[119px] sm_max:text-[32px] sm_max:leading-[41.6px]">Courses</h1>
        <p className="font-roboto font-normal text-[18px] leading-[27px] sm_max:w-[349px]">Your Ultimate Guide to learning</p>
      </div>

      <div className="flex justify-center items-center gap-[16px] pt-[40px]">
        <p className="font-roboto font-normal text-[16px] leading-[24px] gap-[8px] border-x-0 border-2 border-t-0">Popular</p>
        <p className="font-roboto font-normal text-[16px] leading-[24px] gap-[8px]">Recommended</p>
        <p className="font-roboto font-normal text-[16px] leading-[24px] gap-[8px]">Best  Price</p>
      </div>
    </div>
    <div className="grid grid-cols-3 justify-center items-center gap-[80px] pt-[40px]  pr-[30px] sm_max:grid-cols-1 sm_max:p-[24px]">
      <div className="w-[416px] h-[534px] bg-[#F7F7F7] rounded-[5px] gap-[24px] sm_max:w-[380px]">
        <div>
          <Image src="/Image1.png" alt="logo" width={416} height={300} className="w-[380px] h-[300px] sm_max:rounded-[5px]"  />
        </div>

        <div className="flex flex-col gap-[24px] mt-[14px]">
          <div className="flex gap-[8px] justify-between pl-[15px] pr-[15px] ">
            <p className="text-[14px] font-roboto font-semibold leading-[21px]">
              Design
            </p>
            <p className="flex justify-center items-center gap-[8px] text-[14px] font-semibold leading-[21px] font-roboto">
              <PiStarDuotone />
              5.0
            </p>
          </div>
          <div className="flex flex-col gap-[8px] pl-[15px] pr-[15px]">
            <h5 className="font-bold font-roboto text-[24px] leading-[33.6px] ">
              UX/UI Design 201
            </h5>
            <p className="w-[382px] font-normal font-roboto text-[16px] leading-[24px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
          </div>

          <div className="flex items-center gap-[16px] pl-[15px] pr-[15px]">
            <Button
              variant="outline"
              className="justify-center items-center w-[117px] h-[40px] font-roboto font-normal text-[16px] leading-[24px]"
            >
              Enroll Now
            </Button>
            <p className="font-medium font-roboto text-[16px] leading-[33.6px]">
              $400
            </p>
          </div>
        </div>
      </div>

      {/* div2 */}

      <div className="w-[416px] h-[534px] bg-[#F7F7F7] rounded-[5px] gap-[24px] sm_max:w-[380px]">
        <div>
          <Image src="/Image2.png" alt="logo" width={416} height={300} className="w-[380px] h-[300px] sm_max:rounded-[5px]" />
        </div>

        <div className="flex flex-col gap-[24px] mt-[14px]">
          <div className="flex gap-[8px] justify-between pl-[15px] pr-[15px] ">
            <p className="text-[14px] font-roboto font-semibold leading-[21px]">
            Programmimg
            </p>
            <p className="flex justify-center items-center gap-[8px] text-[14px] font-semibold leading-[21px] font-roboto">
              <PiStarDuotone />
              5.0
            </p>
          </div>
          <div className="flex flex-col gap-[8px] pl-[15px] pr-[15px]">
            <h5 className="font-bold font-roboto text-[24px] leading-[33.6px] ">
               Introduction to Python
            </h5>
            <p className="w-[382px] font-normal font-roboto text-[16px] leading-[24px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
          </div>

          <div className="flex items-center gap-[16px] pl-[15px] pr-[15px]">
            <Button
              variant="outline"
              className="justify-center items-center w-[117px] h-[40px] font-roboto font-normal text-[16px] leading-[24px]"
            >
              Enroll Now
            </Button>
            <p className="font-medium font-roboto text-[16px] leading-[33.6px]">
              $400
            </p>
          </div>
        </div>
      </div>

      {/* div3 */}
      <div className="w-[416px] h-[534px] bg-[#F7F7F7] rounded-[5px] gap-[24px] sm_max:w-[380px]">
        <div>
          <Image src="/Image3.png" alt="logo" width={416} height={300} className="w-[380px] h-[300px] sm_max:rounded-[5px]" />
        </div>

        <div className="flex flex-col gap-[24px] mt-[14px]">
          <div className="flex gap-[8px] justify-between pl-[15px] pr-[15px] ">
            <p className="text-[14px] font-roboto font-semibold leading-[21px]">
              Business
            </p>
            <p className="flex justify-center items-center gap-[8px] text-[14px] font-semibold leading-[21px] font-roboto">
              <PiStarDuotone />
              5.0
            </p>
          </div>
          <div className="flex flex-col gap-[8px] pl-[15px] pr-[15px]">
            <h5 className="font-bold font-roboto text-[24px] leading-[33.6px] ">
            Data Analysis for Beginners
            </h5>
            <p className="w-[382px] font-normal font-roboto text-[16px] leading-[24px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
          </div>

          <div className="flex items-center gap-[16px] pl-[15px] pr-[15px]">
            <Button
              variant="outline"
              className="justify-center items-center w-[117px] h-[40px] font-roboto font-normal text-[16px] leading-[24px]"
            >
              Enroll Now
            </Button>
            <p className="font-medium font-roboto text-[16px] leading-[33.6px]">
              $400
            </p>
          </div>
        </div>
      </div>

      {/* div4 */}

      <div className="w-[416px] h-[534px] bg-[#F7F7F7] rounded-[5px] gap-[24px] sm_max:hidden">
        <div>
          <Image src="/Image4.png" alt="logo" width={416} height={300} />
        </div>

        <div className="flex flex-col gap-[24px] mt-[14px]">
          <div className="flex gap-[8px] justify-between pl-[15px] pr-[15px] ">
            <p className="text-[14px] font-roboto font-semibold leading-[21px]">
            Art
            </p>
            <p className="flex justify-center items-center gap-[8px] text-[14px] font-semibold leading-[21px] font-roboto">
              <PiStarDuotone />
              5.0
            </p>
          </div>
          <div className="flex flex-col gap-[8px] pl-[15px] pr-[15px]">
            <h5 className="font-bold font-roboto text-[24px] leading-[33.6px] ">
              Art Specialization
            </h5>
            <p className="w-[382px] font-normal font-roboto text-[16px] leading-[24px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
          </div>

          <div className="flex items-center gap-[16px] pl-[15px] pr-[15px]">
            <Button
              variant="outline"
              className="justify-center items-center w-[117px] h-[40px] font-roboto font-normal text-[16px] leading-[24px]"
            >
              Enroll Now
            </Button>
            <p className="font-medium font-roboto text-[16px] leading-[33.6px]">
              $400
            </p>
          </div>
        </div>
      </div>

      {/* div5 */}

      <div className="w-[416px] h-[534px] bg-[#F7F7F7] rounded-[5px] gap-[24px] sm_max:hidden">
        <div>
          <Image src="/Image5.png" alt="logo" width={416} height={300} />
        </div>

        <div className="flex flex-col gap-[24px] mt-[14px]">
          <div className="flex gap-[8px] justify-between pl-[15px] pr-[15px] ">
            <p className="text-[14px] font-roboto font-semibold leading-[21px]">
            Law
            </p>
            <p className="flex justify-center items-center gap-[8px] text-[14px] font-semibold leading-[21px] font-roboto">
              <PiStarDuotone />
              5.0
            </p>
          </div>
          <div className="flex flex-col gap-[8px] pl-[15px] pr-[15px]">
            <h5 className="font-bold font-roboto text-[24px] leading-[33.6px] ">
            Rule of Law
            </h5>
            <p className="w-[382px] font-normal font-roboto text-[16px] leading-[24px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
          </div>

          <div className="flex items-center gap-[16px] pl-[15px] pr-[15px]">
            <Button
              variant="outline"
              className="justify-center items-center w-[117px] h-[40px] font-roboto font-normal text-[16px] leading-[24px]"
            >
              Enroll Now
            </Button>
            <p className="font-medium font-roboto text-[16px] leading-[33.6px]">
              $400
            </p>
          </div>
        </div>
      </div>

      {/* div6 */}

      <div className="w-[416px] h-[534px] bg-[#F7F7F7] rounded-[5px] gap-[24px] sm_max:hidden">
        <div>
          <Image src="/Image6.png" alt="logo" width={416} height={300} />
        </div>

        <div className="flex flex-col gap-[24px] mt-[14px]">
          <div className="flex gap-[8px] justify-between pl-[15px] pr-[15px] ">
            <p className="text-[14px] font-roboto font-semibold leading-[21px]">
            Tech
            </p>
            <p className="flex justify-center items-center gap-[8px] text-[14px] font-semibold leading-[21px] font-roboto">
              <PiStarDuotone />
              5.0
            </p>
          </div>
          <div className="flex flex-col gap-[8px] pl-[15px] pr-[15px]">
            <h5 className="font-bold font-roboto text-[24px] leading-[33.6px] ">
            Introduction to webflow
            </h5>
            <p className="w-[382px] font-normal font-roboto text-[16px] leading-[24px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
          </div>

          <div className="flex items-center gap-[16px] pl-[15px] pr-[15px]">
            <Button
              variant="outline"
              className="justify-center items-center w-[117px] h-[40px] font-roboto font-normal text-[16px] leading-[24px]"
            >
              Enroll Now
            </Button>
            <p className="font-medium font-roboto text-[16px] leading-[33.6px]">
              $400
            </p>
          </div>
        </div>
      </div>
     </div>
        <div className="flex justify-center items-center p-[60px]">
         <Button variant="outline" className="justify-center items-center w-[155px] h-[48px] text-[16px] leading-[24px]">View All Courses</Button>
        </div>
   </div>
  );
}

export default section6;
