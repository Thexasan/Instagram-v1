import React from "react";
import EditCalendarIcon from '@mui/icons-material/EditCalendar';

import prof from "../../assets/2.jpg"
import msg from "../../assets/profile.jpg"

export default function Direct() {
  return (
    <div className="w-[100%] sm:pt-8 lg:pt-0 overflow-hidden">
      <div className="container m-[0_auto] flex">
        <div className="w-[100%] lg:ml-[16%] sm:ml-0 flex">
            <div className="lg:w-[30%] sm:w-[100%] lg:border-r ">
                <div className="px-6 flex justify-between items-center py-6">
                    <p className="text-[24px] font-[600]">sharif_10021</p>
                    <EditCalendarIcon sx={{fontSize: "28px"}}/>
                </div>

                <div className="flex px-6 justify-between pb-2">
                    <p className="font-[600]">Messages</p>
                    <p className="text-[#5f5f5f]">Requests</p>
                </div>

                <div className="  overflow-x-hidden overflow-y-scroll h-[83vh]">
                <div className="py-[8px] cursor-pointer hover:bg-[#f4f4f4]">
                    <div className="flex gap-2 items-center px-6">
                        <img src={prof} alt="" className="w-[60px] h-[60px] rounded-[50%]"/>
                        <div>
                            <p>Bachohoi Yosh</p>
                            <p className="text-[#888888]">Salom ba hama bachohoi yosh</p>
                        </div>
                    </div>
                </div>
                <div className="py-[8px] cursor-pointer hover:bg-[#f4f4f4]">
                    <div className="flex gap-2 items-center px-6">
                        <img src={prof} alt="" className="w-[60px] h-[60px] rounded-[50%]"/>
                        <div>
                            <p>Bachohoi Yosh</p>
                            <p className="text-[#888888]">Salom ba hama bachohoi yosh</p>
                        </div>
                    </div>
                </div>
                <div className="py-[8px] cursor-pointer hover:bg-[#f4f4f4]">
                    <div className="flex gap-2 items-center px-6">
                        <img src={prof} alt="" className="w-[60px] h-[60px] rounded-[50%]"/>
                        <div>
                            <p>Bachohoi Yosh</p>
                            <p className="text-[#888888]">Salom ba hama bachohoi yosh</p>
                        </div>
                    </div>
                </div>
                <div className="py-[8px] cursor-pointer hover:bg-[#f4f4f4]">
                    <div className="flex gap-2 items-center px-6">
                        <img src={prof} alt="" className="w-[60px] h-[60px] rounded-[50%]"/>
                        <div>
                            <p>Bachohoi Yosh</p>
                            <p className="text-[#888888]">Salom ba hama bachohoi yosh</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="lg:flex sm:hidden justify-center items-center w-[70%]">
                <div className=" text-center">
                    <img src={msg} alt="" className=" m-auto w-[100px] pb-2"/>
                    <p className="text-[20px]">Your messages</p>
                    <p className="py-[10px] text-[#959595]">Send private photos and messages to a friend or group</p>

                    <button className="text-[#fff] px-[15px] py-[5px] bg-[#0095F6] rounded-[5px]">Send message</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}