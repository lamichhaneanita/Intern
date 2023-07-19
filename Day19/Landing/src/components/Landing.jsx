import React from 'react'
import Image from '../images/Photo.jpg'
import {BiLogoPlayStore} from "react-icons/bi" 
import {FaApple} from "react-icons/fa"
const Landing = () => {
  return (
    <div className='bg-black flex h-full w-full'>
      <div className=' flex-1 py-6   ml-20 '>
          <h1 className=' font-bold text-4xl '>Download Our <br/> APP Today</h1>
          <p className='mt-14'>ड्राइभिङ परीक्षा तयारीको लागि अब सजिलो अध्ययन गर्नुहोस्। यसमा तपाईंलाई
           <br /> पूर्ण पाठ्यक्रम, महत्वपूर्ण सूचना, प्रश्नोत्तरहरू र अभ्यास सामग्री प्राप्त हुनेछ। <br /> आफ्नो ड्राइभिङ परीक्षा तयारीलाई अब सहज बनाएर सुरक्षित सडक यात्रामा पूर्ण<br /> विश्वास जोगाउनुहोस्।
          </p>
           <div className='flex gap-4 mt-8'>
            <button className='bg-white text-black px-4 py-2 rounded-lg'><FaApple/><p> Download on the</p>App Store</button>
            <button className='bg-white text-black px-4 py-2 rounded-lg'> <BiLogoPlayStore />Get it On<br/> Google Play</button>
        </div>
        </div>
        <div className='flex-1 relative py-4 px-8 mr-20 mb-8'>
            <div class="bg-gradient-to-r from-indigo-100 via-purple-300 to-pink-600 h-[500px] w-[100px]..."></div>
              <div className='absolute mr-20 top-0'>
                <img src={Image}></img>
              </div>

    
   
          </div>
    </div>
    
  )
}

export default Landing
