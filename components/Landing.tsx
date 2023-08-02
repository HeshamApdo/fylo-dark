import Image from 'next/image'
const Landing = () => {
  return (
          <div className='flex flex-col justify-center items-center pt-[120px] text-center p-10 pb-20 sm:auto bg-[#181e2a]'>
      <div>
        <Image src="/images/illustration-intro.png" alt='landing' width={500} height={500}/>
      </div>
      <div className=''>
        <h1 className='text-3xl py-7 text-white'>All your files in one secure location, 
            <br/>
            accessible anyWhere.
        </h1>
        <p className='text-slate-300 pb-7'>Fylo stores all your most files in one secure location.<br/>
          Access them Wherever you need, share and collaborate with<br/>
          friends family, and co-workers.
        </p>
        <a href='/' className='px-10 py-4 bg-sky-300 rounded-full text-white font-bold hover:bg-sky-600 transition-all duration-200'>Get Started</a>
      </div>
    </div>
  )
}

export default Landing;