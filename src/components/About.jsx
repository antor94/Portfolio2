import React from 'react'
import CommonHead from './common/CommonHead'

const About = () => {
  return (
    <>
    
    
    <section id='about' className='py-[120px]'>
        <div className="container">
            <div>
                <div><CommonHead  comp={'About me'} /></div>
                <div className='w-[685px] pt-[11px]'><CommonHead comh2={'At The Heart of Design is An Opportunity to Problem Solve.'} /></div>
            </div>
            <div className='pt-[40px] flex gap-[110px] '>
                <div className='w-[740px] h-[420px] bg-[#87BEAD] pt-[40px]'><img src="#" alt="about-img" /></div>
                <div className='w-[440px] h-[289px] flex flex-col gap-[30px]'>
                    <p className='text-[18px] font-normal font-jost text-main'>Solvency based award-winning design director and UI/UX design expert with 10 years of experience in design and management.</p>
<p className='text-[18px] font-normal font-jost text-main'>Internum various sit a met mattes ululate denim. Orcin asellus celestas tells rut rum tells pelletised eu. Nunc pulvinar supine et ligula albacore.</p>


      <div className='w-[179px] h-[64px]  bg-[#E5745D]'><button className='w-[169px] h-[54px] m-1  border text-[18px] font-medium font-jost text-[#fff]  border-[#fff]'>Download CV</button> </div>
                </div>


            
             
            </div>
        </div>
    </section>
    
    
    </>
  )
}

export default About