// import React from "react";
import MeatBall from "../../assets/svgs/meatballs-icon.svg";

import React, { useState } from "react";

export default function Card({
  value,
  id,
  message,
  actionButtons,
  desc,
  time,
  notifType,
  img1,
  handleAction,
}) {
  return (
    <>
      <div
        className="h-24 w-[100%] border-2 border-blue-400 my-0.5 bg-blue-100 flex overflow-hidden"
        key={id}
      >
        {notifType === "prMul" ? (
          <div className="h-[100%] w-[15%] flex justify-center items-center">
            <img
              src={img1}
              alt="john"
              className="sm:h-12 sm:w-12 h-8 w-8  relative left-[17.5%] -top-[10%] rounded-full overflow-hidden"
            />
            <img
              src={value}
              alt="john"
              className="sm:h-12 sm:w-12 h-8 w-8  relative -left-[17.5%] top-[10%] rounded-full overflow-hidden "
            />
          </div>
        ) : (
          <div className="h-[100%] w-[15%]  flex justify-center items-center">
            <img
              src={value}
              alt="john"
              className="sm:h-12 sm:w-12 h-8 w-8 rounded-full"
            />
          </div>
        )}
        {/* <div className="h-[100%] w-[10%] border-2 border-gray-700 flex justify-center items-center">
          <img src={value} alt="john" className="h-9 w-9 rounded-full" />
        </div> */}

        <div className="h-[100%] w-[65%] ">
          {notifType === "post" ? (
            <div className="sm:text-lg mb-1 text-base ">
              {message}
              <span className="text-red-600"> ❤</span>
            </div>
          ) : notifType === "newReq" ? (
            <div className="view:text-lg mb-1 text-sm">{message}</div>
          ) : (
            <div className="sm:text-lg mb-1 text-base">{message}</div>
          )}
          {notifType === "newReq" ? (
            <div className="flex mb-1">
              <div className="sm:text-base opacity-75 text-xs ">{desc}</div>
              <img
                src="./Images/remove.png"
                alt="my image"
                onClick={handleAction}
                className="h-4 w-4 ml-2 hover:cursor-pointer"
              />
              <img
                src="./Images/tick-mark.png"
                alt="my image"
                onClick={handleAction}
                className="h-[1.1rem] w-[1.1rem] ml-2 hover:cursor-pointer"
              />
            </div>
          ) : notifType === "prSolo" ? (
            <div className="flex mb-1] justify-between">
              <div className="sm:text-sm opacity-75 mb-1 text-xs">{desc}</div>
              <div className="sm:text-xs text-[0.5rem] sm:w-[40%] h-[10%] sm:h-[100%] sm:p-1 px-2 border border-green-500 text-center bg-white text-green-500 rounded-xl overflow-hidden">
                Approved
              </div>
            </div>
          ) : (
            <div className="text-xs opacity-75 mb-1 sm:text-sm">{desc}</div>
          )}
          <div>
            {notifType !== "post" && notifType !== "newLogin" ? (
              <button
                className="h-6 text-xs p-0 mb-1 w-16 bg-white text-blue-400 border border-blue-400 hover:bg-blue-600 hover:text-white"
                onClick={handleAction}
              >
                View
              </button>
            ) : notifType === "newLogin" ? (
              <button
                className="h-6 text-xs p-0 mb-1 w-32 bg-white text-red-600 border border-red-600 hover:bg-red-600 hover:text-white"
                onClick={handleAction}
              >
                Change Password
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="h-[100%] w-[10%]  text-[0.7rem] opacity-90">
          ({time})
        </div>
        <div className="h-[100%] w-[10%] flex justify-center items-center">
          <img
            src={MeatBall}
            alt=""
            className="h-[50%] hover:cursor-pointer"
            onClick={handleAction}
          />
        </div>
      </div>
    </>
  );
}
