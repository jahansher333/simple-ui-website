import Image from "next/image"
const SECTION2 = () => {
    return (
        <div className="flex justify-between item-center bg-[#F7F7F7]  h-[228px] sm_max:flex-col sm_max:gap-[24px] sm_max:p-[20px] sm_max:justify-center sm_max:items-start ">
              <div className="flex justify-center items-center sm_max:justify-start">
                   <h5 className="w-[320px] font-roboto font-bold text-[24px] leading-[33.6px] sm_max:w-[327px] sm_max:text-[18px] sm_max:leading-[27px]">Trusted by 2000+ companies worldwide.</h5>
              </div>

              <div className="flex justify-center items-center gap-[32px]">
                <Image src="/Airbnb Logo.png" alt="logo" width={123.8} height={38.52} className="sm_max:w-[107.1px] sm_max:[33.34px]"/>
                <Image src="/Airbnb Logo1.png" alt="logo" width={123.8} height={38.52} className="sm_max:w-[107.1px] sm_max:[33.34px]"/>
                <Image src="/Airbnb Logo2.png" alt="logo" width={123.8} height={38.52} className="sm_max:w-[107.1px] sm_max:[33.34px]"/>
                <Image src="/Airbnb Logo3.png" alt="logo" width={123.8} height={38.52} className="sm_max:w-[107.1px] sm_max:[33.34px]"/>
                <Image src="/Airbnb Logo4.png" alt="logo" width={123.8} height={38.52} className="sm_max:hidden"/>
                <Image src="/Airbnb Logo5.png" alt="logo" width={123.8} height={38.52} className="sm_max:hidden"/>
              </div>
        </div>
    )
}

export default SECTION2;