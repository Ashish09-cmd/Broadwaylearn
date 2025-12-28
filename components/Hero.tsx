import Image from 'next/image';

export const Hero = () => {
  return (
    <section className='py-16'>
      <div className="container">
        <div className='flex items-center justify-between flex-wrap'>
          <div className='w-full md:w-1/2'>
            <h1>Learn. Build. Grow. Transform your skills.</h1>
            <p>Build in-demand skills to unlock your potential and drive outcomes for your career and business.</p>
            <div className='py-4 px-6 bg-primary'>
              <a href="#">Get Started shhshshsh</a>
            </div>
          </div>
          <div className='w-full md:w-1/2 relative mt-8 md:mt-0'>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-40 bg-primary rounded-full opacity-30"></div>
            <Image
              src="/assets/Home/Hero.png"
              alt="Hero Image"
              width={400}
              height={300}
              className="relative z-10 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
