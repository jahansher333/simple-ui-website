import Image from "next/image"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
const SECTION9  = () => {
  return (
    <div className="flex flex-col gap-[80px] p-[80px]">
        <div className="flex flex-col gap-[80px] p-[80px]">
            {/* p&email */}
            <div className="flex justify-between  gap-[24px] sm_max:gap-[12px] sm_max:flex-col sm_max:items-center sm_max:justify-center">
                <div className="flex flex-col justify-center items-center sm_max:p-[70px] sm_max:text-center">
                    <p className="font-semibold font-roboto text-[18px] leading-[27px] sm_max:w-[287px]">Subscribe to our newsletter</p>
                    <p className="font-normal font-roboto text-[16px] leading-[24px] sm_max:w-[287px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="sm_max:justify-center sm_max:items-center">
                    <div className="flex gap-[16px] sm_max:flex-col sm_max:justify-center sm_max:items-center">
                       <input type="email" placeholder="Enter your email" className="w-[265px] h-[48px] rounded-[5px] border-[1px] border-[#000000] p-[12px] gap-[8px] placeholder:text-[16px] placeholder:font-roboto placeholder:font-normal sm_max:w-[380px] sm_max:h-[48px]"/>
                       <button className="w-[112px] h-[48px] rounded-[5px] border-[1px] border-[#000000] gap-[8px] text-[16px] font-roboto font-normal leading-[24px] sm_max:w-[380px] sm_max:h-[48px]">Subscribe</button>
                    </div>
                    <div className="sm_max:w-[310px] flex sm_max:justify-center sm_max:items-center">
                    <p className="font-normal font-roboto text-[12px] leading-[18px] sm_max:text-center">By subscribing you agree to with our  <span className=" border-x-0 border-2 border-t-0">Privacy Policy</span></p>
                </div>
                </div>
            </div>

            <div className="flex gap-[40px] justify-between sm_max:flex-col sm_max:justify-center sm_max:items-center">
            <div className="flex justify-center items-start ps-px    gap-[8.02px] ">
                   <Image src="/Frame 2.svg" alt="logo" width={32.58} height={30.38} />
                   <h1 className="font-inter font-bold text-[25.07px] leading-[30.34px]">Ddsgnr</h1>
            </div>

                <div className="flex flex-col gap-[16px] sm_max:justify-center sm_max:items-center">
                    <p className="font-roboto font-semibold text-[16px] leading-[24px]">Courses</p>
                    <p className="font-roboto font-normal text-[14px] leading-[21px]">Business</p>
                    <p className="font-roboto font-normal text-[14px] leading-[21px]">Development</p>
                    <p className="font-roboto font-normal text-[14px] leading-[21px]">Technology</p>
                    <p className="font-roboto font-normal text-[14px] leading-[21px]">Design</p>
                    <p className="font-roboto font-normal text-[14px] leading-[21px]">Programming</p>
                </div>

                <div className="flex flex-col gap-[16px] sm_max:justify-center sm_max:items-center">
                    <p className="font-roboto font-semibold text-[16px] leading-[24px]">Resources</p>
                    <p className="font-roboto font-normal text-[14px] leading-[21px]">Career</p>
                    <p className="font-roboto font-normal text-[14px] leading-[21px]">Resume</p>
                    <p className="font-roboto font-normal text-[14px] leading-[21px]">Learning</p>
                    <p className="font-roboto font-normal text-[14px] leading-[21px] sm_max:w-[172px] sm_max:text-center">Interview Preparation</p>
                    <p className="font-roboto font-normal text-[14px] leading-[21px]">Jobs</p>
                </div>

                <div className="flex flex-col gap-[16px] sm_max:justify-center sm_max:items-center">
                    <p className="font-roboto font-semibold text-[16px] leading-[24px]">About Us</p>
                    <p className="font-roboto font-normal text-[14px] leading-[21px]">Contact</p>
                    <p className="font-roboto font-normal text-[14px] leading-[21px]">Help/Support</p>
                    <p className="font-roboto font-normal text-[14px] leading-[21px]">FAQ</p>
                    <p className="font-roboto font-normal text-[14px] leading-[21px]  sm_max:w-[172px] sm_max:text-center">Terms and Conditions</p>
                    <p className="font-roboto font-normal text-[14px] leading-[21px]">Partners</p>
                </div>
            </div>
      </div>
      <div className="sm_max:flex sm_max:flex-col sm_max:justify-center sm_max:items-center">
      <div className="w-[1120px] h-[1px] bg-[#000000] justify-center items-center sm_max:w-[380px] ">

      </div>
      <div className="flex justify-between sm_max:flex-col sm_max:justify-center sm_max:items-center sm_max:gap-[24px] ">
        <div className="flex gap-[24px] sm_max:justify-center sm_max:items-center  ">
            <div className="flex sm_max:justify-center sm_max:items-center">
            <p className="font-roboto font-normal text-[14px] leading-[21px] sm_max:w-[195px] sm_max:text-[12px]">2023 Ddsgnr. All right reserved.</p>
            </div>
            
          

       </div>
       <div className="flex gap-[24px]  sm_max:justify-center sm_max:items-center sm_max:gap-[24px] ">
            <p className="font-roboto font-normal text-[14px] leading-[21px]  border-x-0 border-2 border-t-0 sm_max:w-[87px] sm_max:text-[12px]">Privacy Policy</p>
            <p className="font-roboto font-normal text-[14px] leading-[21px]  border-x-0 border-2 border-t-0 sm_max:w-[105px] sm_max:text-[12px]">Terms of Service</p>
            <p className="font-roboto font-normal text-[14px] leading-[21px]  border-x-0 border-2 border-t-0 sm_max:w-[105px] sm_max:text-[12px]">Cookies Settings</p>
          </div>
           
        <div className="flex gap-[12px]  pr-[70px] sm_max:justify-center sm_max:items-center">
            <FaFacebookF className="w-[10px] h-[18px]"/>
            <FaInstagram className="w-[10px] h-[18px]"/>
            <FaTwitter className="w-[10px] h-[18px]"/>
            <RxLinkedinLogo className="w-[10px] h-[18px]"/>
            </div>
      </div>
    </div>
    </div>
  )
}
 
export default SECTION9