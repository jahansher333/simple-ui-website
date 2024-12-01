import Image from "next/image";
import { CiVolumeHigh } from "react-icons/ci";
import { Button } from "@/components/ui/button"

const SECTION4 = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[80px] mt-[112px]  ">
      <div className="flex flex-col justify-center items-center   gap-[24px] ">
        <h2 className="w-[768px] text-[48px] font-roboto font-bold leading-[57.2px] sm_max:w-[385px] sm_max:text-[32px] sm_max:leading-[41.6px] sm_max:text-center">Explore Courses By Category</h2>
        <p className="w-[768px] text-[18px] font-roboto font-normal leading-[27px] sm_max:w-[385px] sm_max:text-[18px] sm_max:text-center">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-[24px] sm_max:grid-cols-1 sm_max:p-[24px]">
        <div className="flex items-center bg-[#F7F7F7] w-[410.67px] h-[132px] gap-[32px] p-[16px] rounded-[5px]">
          <div className="bg-[#ffffff] w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px]">
            <Image
              src="/pen-tool-2.png"
              alt="pen-tool"
              width={32}
              height={32}
            />
          </div>

          <div className="">
            <p className="w-[246.67px] font-roboto font-semibold text-[20px] leading-[30px]">
              Design & Development
            </p>
            <p className="w-[246.67px] font-roboto font-normal text-[18px] leading-[27px]">
              50+ Courses Available
            </p>
          </div>
        </div>

        <div className="flex items-center bg-[#F7F7F7] w-[410.67px] h-[132px] gap-[32px] p-[16px] rounded-[5px]">
          <div className="bg-[#ffffff] w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px]">
            <CiVolumeHigh className="w-[32px] h-[32px]" />
          </div>

          <div className="">
            <p className="w-[246.67px] font-roboto font-semibold text-[20px] leading-[30px]">
              Marketing
            </p>
            <p className="w-[246.67px] font-roboto font-normal text-[18px] leading-[27px]">
              50+ Courses Available
            </p>
          </div>
        </div>

        <div className="flex items-center bg-[#F7F7F7] w-[410.67px] h-[132px] gap-[32px] p-[16px] rounded-[5px]">
          <div className="bg-[#ffffff] w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px]">
            <Image 
             src="/group.png" 
             alt="pen-tool" 
             width={32} 
             height={32} 
            />
          </div>

          <div className="">
            <p className="w-[246.67px] font-roboto font-semibold text-[20px] leading-[30px]">
              Development
            </p>
            <p className="w-[246.67px] font-roboto font-normal text-[18px] leading-[27px]">
              50+ Courses Available
            </p>
          </div>
        </div>

        <div className="flex items-center bg-[#F7F7F7] w-[410.67px] h-[132px] gap-[32px] p-[16px] rounded-[5px] sm_max:hidden">
          <div className="bg-[#ffffff] w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px]">
            <Image
              src="/microphone.png"
              alt="pen-tool"
              width={32}
              height={32}
            />
          </div>

          <div className="">
            <p className="w-[246.67px] font-roboto font-semibold text-[20px] leading-[30px]">
              Communication
            </p>
            <p className="w-[246.67px] font-roboto font-normal text-[18px] leading-[27px]">
              50+ Courses Available
            </p>
          </div>
        </div>

        <div className="flex items-center bg-[#F7F7F7] w-[410.67px] h-[132px] gap-[32px] p-[16px] rounded-[5px] sm_max:hidden">
          <div className="bg-[#ffffff] w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px]">
            <Image 
            src="/link.png" 
            alt="pen-tool" 
            width={32} 
            height={32} 
            />
          </div>
          <div className="">
            <p className="w-[246.67px] font-roboto font-semibold text-[20px] leading-[30px]">
              Digital Marketing
            </p>
            <p className="w-[246.67px] font-roboto font-normal text-[18px] leading-[27px]">
              50+ Courses Available
            </p>
          </div>
        </div>

        <div className="flex items-center bg-[#F7F7F7] w-[410.67px] h-[132px] gap-[32px] p-[16px] rounded-[5px] sm_max:hidden">
          <div className="bg-[#ffffff] w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px]">
            <Image 
            src="/arrow-2.png" 
            alt="pen-tool" 
            width={32} 
            height={32} 
            />
          </div>
          <div className="">
            <p className="w-[246.67px] font-roboto font-semibold text-[20px] leading-[30px]">
              Self Development
            </p>
            <p className="w-[246.67px] font-roboto font-normal text-[18px] leading-[27px]">
              50+ Courses Available
            </p>
          </div>
        </div>

        <div className="flex items-center bg-[#F7F7F7] w-[410.67px] h-[132px] gap-[32px] p-[16px] rounded-[5px] sm_max:hidden">
          <div className="bg-[#ffffff] w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px]">
            <Image 
            src="/briefcase.png" 
            alt="pen-tool" 
            width={32} 
            height={32} 
            />
          </div>
          <div className="">
            <p className="w-[246.67px] font-roboto font-semibold text-[20px] leading-[30px]">
              Business
            </p>
            <p className="w-[246.67px] font-roboto font-normal text-[18px] leading-[27px]">
              50+ Courses Available
            </p>
          </div>
        </div>

        <div className="flex items-center bg-[#F7F7F7] w-[410.67px] h-[132px] gap-[32px] p-[16px] rounded-[5px] sm_max:hidden">
          <div className="bg-[#ffffff] w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px]">
            <Image 
            src="/book.png" 
            alt="pen-tool" 
            width={32} 
            height={32} 
            />
          </div>
          <div className="">
            <p className="w-[246.67px] font-roboto font-semibold text-[20px] leading-[30px]">
              Finance
            </p>
            <p className="w-[246.67px] font-roboto font-normal text-[18px] leading-[27px]">
              50+ Courses Available
            </p>
          </div>
        </div>

        <div className="flex items-center bg-[#F7F7F7] w-[410.67px] h-[132px] gap-[32px] p-[16px] rounded-[5px] sm_max:hidden">
          <div className="bg-[#ffffff] w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px]">
            <Image 
            src="/book1.png" 
            alt="pen-tool" 
            width={32} 
            height={32} 
            />
          </div>
          <div className="">
            <p className="w-[246.67px] font-roboto font-semibold text-[20px] leading-[30px]">
              Consulting
            </p>
            <p className="w-[246.67px] font-roboto font-normal text-[18px] leading-[27px]">
              50+ Courses Available
            </p>
          </div>
        </div>
       
      </div>
      <div className="">
        <Button variant="outline" className="justify-center items-center w-[155px] h-[48px] text-[16px] leading-[24px]">View All Courses</Button>
        </div>
    </div>
  );
};

export default SECTION4;