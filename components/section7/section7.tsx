import React from 'react'
import Image from "next/image"
function section7() {
  return (
    <div className='flex flex-col gap-[80px] mt-[112px] bg-[#F7F7F7] pt-[86px] sm_max:w-[428px]'>
       <div className='flex flex-col justify-center items-center'>
            <h2 className='font-roboto font-bold text-[48px] leading-[57.6px] sm_max:w-[363px] sm_max:text-[32px] sm_max:-[41.6] sm_max:text-center'>Our team</h2>
            <p className='font-roboto font-normal text-[18px] leading-[27px] sm_max:w-[363px] sm_max:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
       </div>

       <div className='grid grid-cols-3 gap-[64px] justify-around sm_max:grid-cols-1'>
          <div className='flex flex-col justify-center items-center gap-[24px]'>
            <Image src="/Images1.png" alt='' width={80} height={80}/>
            <div className='flex flex-col justify-center items-center'>
            <p className='font-roboto font-semibold text-[20px] leading-[30px]'>James Nduku</p>
            <p className='font-roboto font-normal text-[18px] leading-[27px]'>Marketing Coordinator</p>
            </div>
            

            <div className='flex gap-[14px]'>
              <Image src="/Vector.png" alt="linkedin" width={18} height={18}/>
              <Image src="/Vector1.png" alt="linkedin" width={18} height={18}/>
              <Image src="/Vector2.png" alt="linkedin" width={18} height={18}/>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center gap-[24px]'>
            <Image src="/Images2.png" alt='' width={80} height={80}/>
           
            <div className='flex flex-col justify-center items-center'>
            <p className='font-roboto font-semibold text-[20px] leading-[30px]'>Joseph Munyambu</p>
            <p className='font-roboto font-normal text-[18px] leading-[27px]'>Nursing Assistant</p>
            </div>
            <div className='flex gap-[14px]'>
              <Image src="/Vector.png" alt="linkedin" width={18} height={18}/>
              <Image src="/Vector1.png" alt="linkedin" width={18} height={18}/>
              <Image src="/Vector2.png" alt="linkedin" width={18} height={18}/>
            </div>
          </div>

          <div  className='flex flex-col justify-center items-center gap-[24px]'>
            <Image src="/Images3.png" alt='' width={80} height={80}/>

            <div className='flex flex-col justify-center items-center'>
            <p className='font-roboto font-semibold text-[20px] leading-[30px]'>Joseph Ngumbau</p>
            <p className='font-roboto font-normal text-[18px] leading-[27px]'>Medical Assistant</p>
            </div>
            

            <div className='flex gap-[14px]'>
              <Image src="/Vector.png" alt="linkedin" width={18} height={18}/>
              <Image src="/Vector1.png" alt="linkedin" width={18} height={18}/>
              <Image src="/Vector2.png" alt="linkedin" width={18} height={18}/>
            </div>
          </div>

          <div  className='flex flex-col justify-center items-center gap-[24px]'>
            <Image src="/Images4.png" alt='' width={80} height={80}/>

            <div className='flex flex-col justify-center items-center'>
            <p className='font-roboto font-semibold text-[20px] leading-[30px]'>Erick Kipkemboi</p>
            <p className='font-roboto font-normal text-[18px] leading-[27px]'>Web Designer</p>
            </div>
           

            <div className='flex gap-[14px]'>
              <Image src="/Vector.png" alt="linkedin" width={18} height={18}/>
              <Image src="/Vector1.png" alt="linkedin" width={18} height={18}/>
              <Image src="/Vector2.png" alt="linkedin" width={18} height={18}/>
            </div>
          </div>

          <div  className='flex flex-col justify-center items-center gap-[24px]'>
            <Image src="/Images5.png" alt='' width={80} height={80}/>

            <div className='flex flex-col justify-center items-center'>
            <p className='font-roboto font-semibold text-[20px] leading-[30px]'>Stephen Kerubo</p>
            <p className='font-roboto font-normal text-[18px] leading-[27px]'>President of Sales</p>
            </div>
            

            <div className='flex gap-[14px]'>
              <Image src="/Vector.png" alt="linkedin" width={18} height={18}/>
              <Image src="/Vector1.png" alt="linkedin" width={18} height={18}/>
              <Image src="/Vector2.png" alt="linkedin" width={18} height={18}/>
            </div>
          </div>

          <div  className='flex flex-col justify-center items-center gap-[24px]'>
            <Image src="/Images6.png" alt='' width={80} height={80}/>

            <div className='flex flex-col justify-center items-center'>
            <p className='font-roboto font-semibold text-[20px] leading-[30px]'>John Leboo</p>
            <p className='font-roboto font-normal text-[18px] leading-[27px]'>Dog Trainer</p>
            </div>
            

            <div className='flex gap-[14px]'>
              <Image src="/Vector.png" alt="linkedin" width={18} height={18}/>
              <Image src="/Vector1.png" alt="linkedin" width={18} height={18}/>
              <Image src="/Vector2.png" alt="linkedin" width={18} height={18}/>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
             <button className="hidden sm_max:block w-[89px] h-[40px] text-16px font-roboto font-normal leading-[24px] border-[1px] border-[#000000] rounded-[5px]">View All</button>
          </div>
       </div>
    </div>
  )
}

export default section7
