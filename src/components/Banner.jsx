import React from 'react'
import CommonHead from './common/CommonHead'
import { Link } from 'react-router'
import bannerimg from '../assets/images/banner-img.png'

const Banner = () => {







  
  return (
    <>
    
    <section id='banner' className='bg-[#e5745d0d] pt-[52px] pb-[65px]'>
        <div className="container">
            <div className='flex justify-between items-center'>
              

            <div>
                <div><CommonHead comp={'UI/UX Designer'} /></div>
                <div className='w-[899px] leading-[110px]'>
                <h2 className='text-[75px] pt-[17px] pb-[8px] flex flex-col leading-[110%] font-bold font-main text-main'>SteveIn Product<span className='text-outline'>Portfolio</span> </h2>

                </div>
                <p className='w-[642px] text-[20px] pb-[25px] font-normal font-jost text-main'>You can find me on Dribble, Instagram, LinkedIn, Behance or Facebook. I'm working at User interface or User experience.</p>
                <Link className='text-[40px] pt-[25px] font-semibold font-main text-primary border-b-2' >Steven@gmai.com</Link>

            </div>
            <div style={{ background: `URL(${bannerimg})`,backgroundRepeat: `no-repeat`, backgroundSize: `cover`, }} className='w-[724px] h-[748px]'></div>
            </div>


        </div>
    </section>
    
    
    
    
    
    
    </>
  )
}

export default Banner