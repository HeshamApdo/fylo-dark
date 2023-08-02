import { dataTestimonials } from "@/constans"
const Testimonials = () => {
  return (
    <div className='w-[80%] mx-auto my-[170px]'>
      <div className="flex items-center justify-between gap-8 flex-col xl:flex-row relative">
        <div className="absolute -top-10 left-5 -z-10 sm:-top-10 sm:left-15">
          <img src="/images/bg-quotes.png" alt="quote" width={50}/>
        </div>
        {dataTestimonials.map((everyTest) =>(
          <div key={everyTest.id} className="flex flex-col gap-5 text-white bg-[#181e2a] p-10 rounded-xl">
            <p className="text-slate-300">{everyTest.desc}</p>
            <div className="flex flex-row gap-3">
              <img src={`/images/${everyTest.image}`} width={40} height={40} className="rounded-full"/>
              <div className="">
              <h4>{everyTest.name}</h4>
              <p className="text-slate-400">{everyTest.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials