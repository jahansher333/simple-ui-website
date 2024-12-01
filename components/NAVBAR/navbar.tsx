import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
const NAVBAR = () => {
    return (
        <div>
            <div className="w-full flex justify-between items-center pl-[62px] pr-[64px] bg-[#F7F7F7]  h-[72px] border-[#676767] border-2 border-x-0 sm_max:w-[428px] sm_max:justify-between sm_max:gap-[32px]   ">
                <div className="flex justify-center items-center gap-[8.02px]">
                   <Image src="/Frame 2.svg" alt="logo" width={32.58} height={30.38} />
                   <h1 className="font-inter font-bold text-[25.07px] leading-[30.34px] sm_max:w-[90px]">Ddsgnr</h1>
                </div>
                <div className="hidden sm_max:block">
                <FaBars className="w-[18px] h-[12px] "/>
                </div>
                <div className="flex justify-between items-center list-none gap-[32px] w-[910px] h-[44px] p-[3px] bg-[#ffff] sm_max:hidden">
                
                    <li className="font-roboto font-normal text-[16px] leading-[24px] border-x-0 border-2 border-t-0 border-[#000000] "><Link href="/">Home</Link></li>
                    <li className="font-roboto font-normal text-[16px] leading-[24px]"><Link href="/about">Courses</Link></li>
                    <li className="font-roboto font-normal text-[16px] leading-[24px]"><Link href="/services">Services</Link></li>
                    <li className="font-roboto font-normal text-[16px] leading-[24px]"><Link href="/contact">Achievement</Link></li>
                    <li className="font-roboto font-normal text-[16px] leading-[24px]"><Link href="/contact">About Us</Link></li>
                    <li className="font-roboto font-normal text-[16px] leading-[24px]"><Link href="/contact">Testimonial</Link></li>
                   

                <div className="flex justify-center items-center list-none gap-[16px]">
                    <li className="font-roboto font-normal text-[16px] leading-[24px]"><Link href="/signin"><button className="w-[80px] h-[40px] rounded-[5px] border-[1px] border-[#000000]">Login</button></Link></li>
                    <li className="font-roboto font-normal text-[16px] leading-[24px]"><Link href="/signin"><button className="w-[95px] h-[40px] rounded-[5px] border-[1px] bg-[#000000] border-[#000000] text-[#ffff] ">Sign Up</button></Link></li>
                    
                </div>
           
            </div> 
            
            </div>
        </div>
    )
}

export default NAVBAR

