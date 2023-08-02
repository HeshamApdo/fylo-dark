import Image from "next/image"
const Section = () => {
  return (
    <div className='w-[80%] mx-auto my-[150px]'>
      <div className="flex items-center gap-10 sm:gap-20 flex-col md:flex-row">
      <Image src="/images/illustration-stay-productive.png" alt="" width={500} height={500}/>
      <div className="flex flex-col gap-4 text-white">
        <h2 className="text-3xl font-semibold">Stay productive,<br/>
          Wherever you are
        </h2>
        <p className="text-slate-300">Never let location be an issue when accessing your files.fylo has you<br/>
          covered for all of your file storage needs.</p>
        <p className="text-slate-300">Securely share files and folders with friends, family and colleagues for live<br/> collaboration, No email attachments require.</p>
        <a href="/" className="hover:underline hover:decoration-sky-500 underline-offset-8 hover:text-sky-200 group">See how fylo works
          <img src="/images/icon-arrow.svg" alt="arrow-img" className="w-[20px] h-[20px] object-contain inline ml-1 group-hover:animate-[moveRight_1s_ease-in-out_infinite]"/>
        </a>
      </div>
      </div>
    </div>
  )
}

export default Section