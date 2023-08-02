
const GetStarted = () => {
  return (
    <div className='w-[400px] sm:w-[700px] lg:w-[900px] mx-auto my-[200px] bg-[#181e2a] rounded-xl shadow-2xl shadow-blue-800/10'>
      <div className="flex-col">
        <div className="w-[400px] sm:w-[550px] lg:w-[700px] flex flex-col text-center gap-5 p-5 xl:p-10 mx-auto">
          <h3 className="text-white text-2xl lg:text-3xl">Get early access today</h3>
          <p className="text-slate-300 text-sm md:text-lg lg:text-xl">it only takes a minute to sign up and our free starter tier is extremely generous.if you have any
            question, our support team would be happy to help you.
          </p>
        </div>
        <div className="flex flex-row gap-5 justify-center pb-10">
          <input type="email" className="bg-white w-[230px] sm:w-[400px] lg:w-[500px] rounded-full focus:border-2 focus:border-indigo-500 outline-none indent-3" placeholder="Enter your email"/>
          <a href='/' className='px-2 py-2 text-xs sm:text-md lg:text-xl sm:px-5 lg:px-10 sm:py-4 bg-sky-300 rounded-full text-white hover:bg-sky-600 transition-all duration-200'>Get Started For Free</a>
        </div>
      </div>
    </div>
  )
}

export default GetStarted