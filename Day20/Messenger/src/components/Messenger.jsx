import React from "react";
import NavBar from "./Navbar";
import { AiOutlineDown } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import photo1 from "../images/profile1.jpg";
import photo2 from "../images/profile2.jpg";
import photo3 from "../images/profile1.jpg";
import photo4 from "../images/profile3.jpg";
import photo5 from "../images/profile4.jpg";
import photo6 from "../images/profile2.jpg";
import Profile from "./Profile";
import {FaSignal} from 'react-icons/fa'
import {FaWifi} from 'react-icons/fa'
import {CiBatteryFull} from 'react-icons/ci'

const Message = () => {
  return (
    <div className="">
      <div className="flex justify-center pt-10">
        <div className=" bg-white pt-10 rounded-3xl  ">
          <div className="p-6">
          <div className='flex items-center justify-between mb-14 bg-white'>
        <div className='flex items-center'>
          <p className='text-gray-800 text-sm font-bold mr-2'>
            4:20
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <div ><FaSignal/></div>
          <div ><FaWifi/></div>
          <div ><CiBatteryFull/></div>
        </div>
      </div>
            <div className="flex gap-2">
              <div className="text-3xl font-bold">Messages</div>
              <div className="pt-3 ">
                <AiOutlineDown />
              </div>
              <div className="flex  items-center pl-60 p-2 text-2xl">
                <FiSearch />
              </div>
            </div>
            <div className="">
              <div className="text-gray-500 pt-6">Pinned</div>
              <div className="pt-4 flex relative gap-4">
                <img src={photo1} className="w-16 h-16  rounded-full" />
                <div className="bg-green-400 w-3 h-3 absolute bottom-1 left-12 rounded-full"></div>
                <div className="">
                  <div className="text-xl font-bold">Robert Richards</div>
                  <div className="flex text-gray-500 gap-1 justify-center ">
                    Hello, tomorrow in 5 o'clock
                    <h2 className="text-sm text-gray-400  flex  items-center ">
                      . 5m
                    </h2>
                    <div className="w-6 h-6 flex ml-24 text-sm  justify-center items-center text-white rounded-full bg-blue-500">
                      2
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="text-gray-500 pt-8">Other</div>
                <div>
                  
                  
                  <div className="pt-4 pl-[70px]">
                    <hr />
                  </div>
                 <div className="flex items-center">
                  <Profile
                    image={photo6}
                    name="Connine Lane"
                    message="Where are you?"
                    time="yesterday"
                    />
                    <div className="w-6 h-6  flex ml-[200px] text-sm  justify-center items-center text-white rounded-full bg-blue-500">
                    12
                  </div>
                  </div>
                  <div className="pt-4 pl-[70px]">
                    <hr />
                  </div>
                  <Profile
                    image={photo3}
                    name="Wendy Watson"
                    message="We new to meet today."
                    time="12m"
                  />
                  <div className="pt-4 pl-[70px]">
                    <hr />
                  </div>
                  <Profile
                    image={photo4}
                    name="Harold Howard"
                    message="Check mail,please."
                    time="1h"
                  />
                  <div className="pt-4 pl-[70px]">
                    <hr />
                  </div>
                  <Profile
                    image={photo5}
                    name="Kathryn Alexander"
                    message="Alright, It fine."
                    time="yesterday"
                  />
                  <div className="pt-4 pl-[70px]">
                    <hr />
                  </div>
                  <Profile
                    image={photo6}
                    name="Bernard Nguyen"
                    message="See you soon bye "
                    time="2d"
                  />
                  <div className="pt-4 pl-[70px]">
                    <hr />
                  </div>
                  <Profile
                    image={photo1}
                    name="Nathan Fox"
                    message="Thank you so much."
                    time="4d"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <NavBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
