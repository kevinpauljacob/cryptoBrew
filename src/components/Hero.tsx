import Image from 'next/image'
import Link from 'next/link'
import me from '/public/assets/me.jpg'
import { AiOutlineTwitter, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

const Hero = () => {

  const socials = [
    { logo: <AiOutlineTwitter/>, link: 'https://twitter.com/it_aint_kevin' },
    { logo: <FaLinkedinIn/>, link: 'https://www.linkedin.com/in/itaintkevin' },
    { logo: <AiOutlineGithub/>, link: 'https://github.com/itaintkevin' },
    { logo: <AiOutlineMail/>, link: 'mailto:kevinjacobdev@gmail.com' },
  ];

  return (
    <div className='bg-accent-2 rounded-lg lg:w-[68%] md:w-[59%] sm:w-[48.25%] mb-6 sm:mb-0 p-10'>
      <div className='w-40 h-40'>
        <Image className="rounded-full border-4 border-white" src={me} alt="My Profile Picture" />
      </div>
      <h1 className='lg:text-5xl text-4xl font-bold mt-5'>
        Hey! I am Kevin Paul
      </h1>
      <p className='text-xl font-semibold mt-5'>
        Full Stack Developer. <br/>
        Transitioning to Web3. <br/>
        Junior at SRMIST, pursuing B.Tech in CSE. <br/>
        I keep coding until I hit a code block. <br/>
      </p>
      <p className="flex mt-5 animate-fadeUp">
        {socials.map((social, index) => (
            <Link key={index} href={social.link} target="_blank" className='bg-white text-black text-lg rounded-full p-1.5 mr-2'>
                {social.logo}
            </Link>
        ))}
      </p>
    </div>
  )
}

export default Hero