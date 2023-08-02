
import Link from "next/link"

const Footer = () => {
  return (
    <div className='w-[80%] mx-auto my-[10px] mb-12'>
      <div className="lg:flex lg:items-center lg:flex-nowrap lg:gap-20">
        <div className="flex flex-col gap-8 mb-10">
          <div>
            <img src="/images/logo.svg" alt="" width={80}/>
          </div>
          <div className="flex flex-row gap-4">
            <div>
              <img src="/images/icon-location.svg" alt="location" width={20} height={20}/>
            </div>
            <p className="text-white">Lorem, ipsum dolor sit amet consectetur<br/> adipisicing elit. Fuga quos fugit exercitationem<br/> facilis quod dolorum, velit in laborum eos?<br/> Hic molestiae laboriosam, eligendi aspernatur<br/> distinctio iste commodi quos adipisci ducimus.</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-white mb-10">
          <div className="flex flex-row gap-3 items-center">
            <div>
              <img src="/images/icon-phone.svg"/>
            </div>
            <span>+123 345 6789</span>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <div>
              <img src="/images/icon-email.svg"/>
            </div>
            <span>example@gmail.com</span>
          </div>
        </div>
        <div className="flex flex-row gap-10 mb-10">
          <div className="flex flex-col text-white">
            <Link href="/" className="flex flex-col gap-3">
              <h4>About us</h4>
              <h4>Jobs</h4>
              <h4>Press</h4>
              <h4>Blog</h4>
            </Link>
          </div>
          <div className="flex flex-col text-white">
            <Link href="/" className="flex flex-col gap-3">
            <h4>Contact us</h4>
            <h4>Terms</h4>
            <h4>Privacy</h4>
            </Link>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <Link href="/" className="flex flex-row gap-4">
            <img src="/images/facebook (1).png"/>
            <img src="/images/instagram (2).png"/>
            <img src="/images/twitter (1).png"/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer