import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import pfp from "/pfp.jpg"

import { MapPin } from 'lucide-react';

import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';

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



      <section className='h-full grid md:place-content-center  md:flex  '>


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

              <img className='size-30 object-cover  rounded-xl  ' src={pfp} alt="" />
              <div>
                <h1 className='text-text text-3xl font-semibold leading-relaxed'>Hi! I'm Kshitij</h1>
                <p className='text-text-muted' >fullstack developer | web3 </p>
                <div className='flex justify-end items-center gap-0.5  text-text-muted'> <MapPin size={18} /> Nepal </div>
              </div>
            </div>

            <section className=' w-full mt-14  '>
              <p className='text-justify text-text-muted leading-relaxed text-[1.1rem] '>I'm a Full Stack Blockchain Developer crafting cutting-edge dApps and DeFi solutions. From writing secure smart contracts to building intuitive Web3 interfaces, I turn complex blockchain concepts into user-friendly experiences.</p>

            </section>


            {/* ---------------------------Experience Section------------------------ */}

            <section className='bg-red-500 text-justify'>
              <h1>sadfjsadkfskf Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit fugiat fuga corporis esse. Repellat, at ab perspiciatis libero tempora cum quis ullam deleniti doloribus maiores nemo quibusdam natus consectetur necessitatibus, fuga, illum error? Nisi at dignissimos non ullam nesciunt incidunt adipisci delectus facilis eveniet illo esse nulla ab est vero numquam repellat officiis consectetur, alias voluptatibus voluptas modi fuga. Sunt ex ullam, natus delectus dolores eligendi suscipit nulla possimus, libero, molestiae labore dolorem. Rem iure magni unde, impedit velit quis nulla sunt, corrupti excepturi deserunt, eveniet ex illo consectetur at natus dicta? Expedita assumenda iusto nisi alias error provident suscipit.</h1>


            </section>





          </div>





        </div>


      </section >
    </>
  )
}

export default App
