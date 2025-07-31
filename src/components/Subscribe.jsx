import React from 'react'

const Subscribe = () => {
  return (
    <>
    
    <section className='pt-[140px] pb-[90px]'>
        <div className="container">
            <div className='h-[180px] bg-[#E5745D]'>

                <div className='flex justify-around items-center py-[36px]'>
                    <div>
                        <h2 className='text-[40px] font-bold font-main text-white'>Subscribe to our Youtube!</h2>
                        <p className='w-[482px] h-[52px] text-[18px] font-normal font-jost text-[#fff]'>Please like and subscribe to my channel and press the bell icon to get new video updates.</p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <div className='w-[290px] h-[64px] border border-[#fff]'>
                        <input className='py-[22px] pl-[20px] w-[90%] outline-none text-[14px] font-normal font-jost  text-[#fff]' type="email" placeholder='Enter your email' />

                        </div>
      <div className='w-[179px] h-[64px]  bg-[#fff]'><button className='w-[169px] h-[54px] m-[5px]  border border-primary text-[18px] font-medium font-jost text-primary'>Download CV</button> </div>

                    </div>


                </div>

            </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Subscribe