import React from 'react'
import CommonHead from './common/CommonHead'
import { RiUserLine } from "react-icons/ri";
import { GoClock } from "react-icons/go";

const Blog = () => {
  return (
    <>

    <section id='blog'>
        <div className="container">
            <div><CommonHead comp={'Our blog'} /></div>
            <div className='w-[457px] pt-[24px]'><CommonHead comh2={'The Future of AI '}  />
            <span className='text-[50px] leading-[60px] font-medium font-main text-main'>in Digital Marketing</span> </div>
            <div id='blog-row' className='pt-[42px] flex flex-col gap-[40px]'>

                {/* -------------- 1 details div */}
                <div className='border border-[#F9F4F1] flex items-center'>
                    <div className='pl-[40px] flex flex-col gap-[18px] pb-[60px]'>
                        <div className='flex items-center gap-[10px]'><RiUserLine /><p className='text-[17px] font-medium font-jost text-main'>By Brian Cumin</p></div>
                        <div className='flex items-center gap-[10px]'><GoClock /><p className='text-[17px] font-medium font-jost text-main'>March 27,2023</p></div>
                        <div><p className='text-[17px] font-medium font-jost text-main'>24 Comments</p></div>
                    </div>
                    <div className='w-[342px]  h-[240px] border border-[#F9F4F1] mr-[134px] ml-[170px]'>
                        <div className='w-[300px] h-[200px] bg-[#C4C4C4] m-[20px]'></div>
                    </div>
                    <div className='w-[490px]'><h2 className='text-[30px] font-medium font-main text-main'>Personalization and Automation for Better Results</h2></div>
                </div>
{/* --------------- 2 details div */}
                    <div className='border border-[#F9F4F1] flex   items-center'>
                    <div className='pl-[40px] flex flex-col gap-[18px] pb-[60px]'>
                        <div className='flex items-center gap-[10px]'><RiUserLine /><p className='text-[17px] font-medium font-jost text-main'>By Brian Cumin</p></div>
                        <div className='flex items-center gap-[10px]'><GoClock /><p className='text-[17px] font-medium font-jost text-main'>March 27,2023</p></div>
                        <div><p className='text-[17px] font-medium font-jost text-main'>24 Comments</p></div>
                    </div>
                    <div className='w-[342px] h-[240px] border  border-[#F9F4F1]  mr-[134px] ml-[170px]'>
                        <div className='w-[300px] h-[200px] bg-[#C4C4C4] m-[20px]'></div>
                    </div>
                    <div className='w-[490px]'><h2 className='text-[30px] font-medium font-main text-main'>Personalization and Automation for Better Results</h2></div>
                </div>
{/* ----------- 3 details div */}
                    <div className='border border-[#F9F4F1] flex   items-center'>
                    <div className='pl-[40px] flex flex-col gap-[18px] pb-[60px]'>
                        <div className='flex items-center gap-[10px]'><RiUserLine /><p className='text-[17px] font-medium font-jost text-main'>By Brian Cumin</p></div>
                        <div className='flex items-center gap-[10px]'><GoClock /><p className='text-[17px] font-medium font-jost text-main'>March 27,2023</p></div>
                        <div><p className='text-[17px] font-medium font-jost text-main'>24 Comments</p></div>
                    </div>
                    <div className='w-[342px] h-[240px] border border-[#F9F4F1] mr-[134px] ml-[170px]'>
                        <div className='w-[300px] h-[200px] bg-[#C4C4C4] m-[20px]'></div>
                    </div>
                    <div className='w-[490px]'><h2 className='text-[30px] font-medium font-main text-main'>Personalization and Automation for Better Results</h2></div>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    
    
    </>
  )
}

export default Blog