import { useState } from 'react'
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
              <Timeline  />


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
