import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import pfp from "../public/profile.jpg"
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { MapPin } from 'lucide-react';

import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';
import { Timeline } from './components/ui/timeline'

function App() {
  const [light, setLight] = useState(false)

  const data = [{
    title: "2024",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://assets.aceternity.com/templates/startup-1.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/templates/startup-2.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/templates/startup-3.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/templates/startup-4.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },]

  return (
    <>

      {/* -----------Background Bark/Light Section--------------- */}
      <div className='bg-bg-dark inset-0 fixed -z-10  '></div>

      {/* -------------------GRID LINES--------------------------- */}

      <div
        className="fixed -z-2 inset-0 h-full w-full bg-[linear-gradient(to_right,#80808025_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:45px_34px] "
      ></div>

      {/* ---------------------------------------------- */}



      <section className='h-full grid md:place-content-center  md:flex   '>


        <div className='  md:w-[60%]  text-text p-4  '>

          <div className=' p-2 grid place-content-end  rounded-xl '>
            <button onClick={() => {
              if (window.document.body.className == "light") {
                window.document.body.className = ""
                setLight(false)

              } else {
                window.document.body.className = "light"
                setLight(true)
              }


              console.log(window.document.body)
            }} className='block  duration-200 '> {light ? (<Sun />) : (<Moon />)}   </button>

          </div>



          {/* ------------------Content Box */}
          <div className=' p-2  '>
            <div className='flex justify-between items-center'>

              <img className='size-30 object-cover  object-top opacity-90  rounded-xl  ' src={pfp} alt="" />
              <div>
                <h1 className='text-text text-3xl font-semibold leading-relaxed'>Hi! I'm Kshitij</h1>
                <p className='text-text-muted' >fullstack developer | web3 </p>
                <div className='flex justify-end items-center gap-0.5  text-text-muted'> <MapPin size={18} /> Nepal </div>
              </div>
            </div>

            <section className=' w-full mt-14  '>
              <p className='text-justify text-text-muted leading-relaxed text-[1.1rem] '>I'm a Full Stack Blockchain Developer crafting cutting-edge dApps and DeFi solutions. From writing secure smart contracts to building intuitive Web3 interfaces, I turn complex blockchain concepts into user-friendly experiences.</p>

            </section>


            {/* ---------------------------Project Section------------------------ */}

            <section className='p-2 mt-12'>
              <Timeline data={data} />


              <section className='bg-rd-50 flex flex-col gap-y-2 items-center  bg-bg-light/30  border-2  border-neutral-100/20 border-x-violet-600/50 py-4  rounded-xl '>
                <h1 className='text-xl mb-2'>Find me on</h1>
                <ul className='flex gap-4  '>
                  <li><a href="https://www.x.com/steezcodes" target='_blank' ><FaXTwitter size={24} className='hover:opacity-50 ' /> </a></li>
                  <li><a href="https://www.linkedin.com/in/kshitijbhusal/" target='_blank' > <FaLinkedin size={24} className='hover:opacity-50 ' /> </a></li>
                </ul>
                <p className='text-text-muted backdrop' >kshitijbhusal64@gmail.com</p>

              </section>


              {/* ---------------------------Experience Section------------------------ */}


            </section>





          </div>





        </div>


      </section >
    </>
  )
}

export default App
