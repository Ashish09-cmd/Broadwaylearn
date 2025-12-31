import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
  return (
    <>
      <section className="bg-[#0054C00A] hero-section relative overflow-hidden">
          <div className="container py-12 md:py-0">
              <div className='flex items-center justify-between'>
                  <div className='flex-1'>
                    <div className='hero-content-wrapper'>
                    <h1 className='text-6xl font-bold mb-4 line-height-5xl font-geologica'>Learn. Build. Grow. Transform your skills.</h1>
                     <p className='text-md font-regular font-googleSansFlex line-height-md text-text-subtext'>Build in-demand skills to unlock your potential and drive outcomes for your career and business.</p>
                     <div  className='py-4 px-6 rounded-lg bg-primary text-white w-max mt-6 font-medium hover:opacity-90 transition-opacity duration-300'>
                      <Link href="">Get Started</Link>
                     </div>
                    </div>
                  </div>                   
                  <div className="flex-1 md:mt-6 hero-banner">
                   <div className="hero-banner-right absolute right-0 h-full z-2">
                      <div className='image-wrapper'>
                        <img className='h-full w-full ' src="./assets/home/hero.png" alt="" />
                      </div>
                   </div>
                   <div className='hidden md:block absolute -right-90 h-267.5 w-267.5 hero-ellipse rounded-full -top-73 ellipse p-56 bg-[#0054C0F0] z-1'>
                        <div className="w-full h-full rounded-full bg-blue-50"></div>
                    </div>
                 </div>
              </div>
          </div>
      </section>
    </>
  )
}
