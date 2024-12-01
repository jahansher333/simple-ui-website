import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
const HEADER = () => {
    return (
        <div className="sm_max:hidden">
        <header className="flex justify-between  pl-[62px] pr-[64px] h-[54px] bg-[#F7F7F7]  ">
            <div className="flex gap-[16px] justify-center items-center ">
            <h1 className="text-[14px] font-normal font-roboto leading-[21px] sm_max:hidden">Phone Number: 956 742 455 678</h1>
              <div className="w-[30px] h-[3px] rotate-90 bg-[#676767] m-3">

              </div>
            <h1 className="text-[14px] font-normal font-roboto leading-[21px]">Email:info@ddsgnr.com</h1>
            </div>

            <div className="flex gap-[12px] justify-center items-center">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <RxLinkedinLogo />
            </div>
        </header>
        {/* <hr /> */}
        
        </div>
    );
};

export default HEADER;