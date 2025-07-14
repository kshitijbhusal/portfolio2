import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import pfp from "/pfp.jpg"

import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';

function App() {
  const [light, setLight] = useState(false)

  return (
    <>
      <div className='bg-bg-dark inset-0 fixed -z-10  '>
      </div>
      <div
        className="fixed -z-2 inset-0 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:28px_28px] "
      ></div>



      <section className='h-full grid md:place-content-center  md:flex  '>
        <div className='  md:w-[40%]  text-text p-4  '>

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




          <div className=' p-2  '>


            <div className='flex justify-between items-center'>
              <div className='size-20 rounded-full  bg-gradient-to-tl from-cyan-500 to-purple-600 overflow-hidden grid place-content-center   '>
                <img className='size-60 object-cover  rounded-full  ' src={pfp} alt="" />

              </div>
              <div>
                <h1 className='text-text '>Kshitij Bhusal</h1>
                <p className='text-text-muted' >fullstack developer | web3 </p>
              </div>
            </div>

            <section className=' w-full mt-8'>
              <p className='text-justify text-text-muted  '>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat repudiandae vitae tempore dicta quasi reprehenderit esse inventore porro, repellat adipisci provident nostrum illum sequi labore rem dolor modi atque at!" </p>

              <span className='grid place-content-end text-text-muted ' > - Kshitij Bhusal </span>
            </section>


            <div className='text-justify'>
              other contenr

            </div>





          </div>





        </div>


      </section >
    </>
  )
}

export default App
