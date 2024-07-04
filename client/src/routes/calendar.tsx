import { createFileRoute } from "@tanstack/react-router";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import Button from "../components/Button/Button";
import { IoIosLogOut } from "react-icons/io";
import { LuCalendarPlus } from "react-icons/lu";

export const Route = createFileRoute("/calendar")({
  component: () => (
    <>
      <div className="w-full bg-white p-5 flex items-center justify-between rounded-md h-fit">
        <div className="w-fit flex items-center space-x-5">
          <IoChevronBackOutline className="text-xl cursor-pointer hover:text-@SkyBlue" />
          <Button className="w-40 desktop:w-48 flex justify-center items-center text-lg bg-whote text-black border-1 border hover:border-black">
            November 2023
          </Button>
          <IoChevronForward className="text-xl cursor-pointer hover:text-@SkyBlue" />
        </div>
        <Button className="bg-pink-500">R</Button>
      </div>
      <div className="w-full grid grid-cols-7 bg-white rounded-md">
        <div className="w-full p-2  flex justify-center items-center">Sun</div>
        <div className="w-full p-2  flex justify-center items-center">Mon</div>
        <div className="w-full p-2  flex justify-center items-center">Tue</div>
        <div className="w-full p-2  flex justify-center items-center">Wed</div>
        <div className="w-full p-2  flex justify-center items-center">Thu</div>
        <div className="w-full p-2  flex justify-center items-center">Fri</div>
        <div className="w-full p-2  flex justify-center items-center">Sat</div>
        {new Array(35).fill(null).map((_e, i) => {
          return (
            <div className="col-span-1 min-h-32 border py-2 hover:bg-gray-100 cursor-pointer flex flex-col items-center space-y-1">
              <div>{i + 1}</div>
              <div className="w-full border-l-4 border-green-500 px-1">
                Hello
              </div>
              <div className="w-full bg-purple-500 text-white px-1">Hello</div>
              <div className="w-full bg-red-500 text-white px-1">Hello</div>
              <div className="w-full bg-yellow-500 text-white px-1">Hello</div>
              <div className="w-full bg-blue-500 text-white px-1">Hello</div>
            </div>
          );
        })}
      </div>
      <div className="fixed border-2 hover:border-@SkyBlue cursor-pointer bg-@Crayola desktop:bottom-16 desktop:right-12 bottom-48 right-7 p-5 text-white drop-shadow-xl rounded-full">
        <LuCalendarPlus size={35} />
      </div>
    </>
  ),
});
