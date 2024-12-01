import Image from "next/image"
const SECTION1 = () =>{
    return(
        <div>
            <div className="flex justify-between item-center text-start sm_max:flex-col sm_max:gap-[64px]">
              <div className="flex flex-col justify-center items-start ml-[80px] gap-[24px]  sm_max:ml-[10px] sm_max:pr-[100px]">
                    <h1 className="w-[500px] text-[56px] font-roboto font-bold leading-[67.2px] sm_max:w-[380px] sm_max:text-[40px] sm_max:leading-[48px]">Learn new skills online with ease</h1>
                    <p className="w-[500px] text-[18px] font-roboto font-normal leading-[27px] sm_max:w-[380px]">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
                <div className="flex gap-[16px] mt-[32px]">
                    <button className="w-[178px] h-[48px] rounded-[5px] border-[1px] border-[#000000] bg-[#000000] text-[#ffff] font-roboto font-normal text-[16px] leading-[24px] ">Start learning now</button>
                    <button className="block w-[164px] h-[48px] rounded-[5px] border-[1px] border-[#000000] bg-[#ffff] text-[#000000] font-roboto font-normal text-[16px] leading-[24px] ">Explore Courses</button>
                </div>
             </div>

                <div>
                <Image src="/Image.png" alt="logo" width={640} height={900} className="sm_max:w-[428px] sm_max:h-[329px]" />
                </div>
            </div>
        </div>
    )
}
export default SECTION1;