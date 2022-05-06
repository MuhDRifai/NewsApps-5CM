import Image from "next/image";
import React from "react";
import Button from "../base/Button";
import { RiArrowRightSLine } from "react-icons/ri";
import { useRouter } from "next/router";
import profilePic from "../../assets/profile.jpg";

export default function Sidebar({ activeSection }) {
  const router = useRouter();

  return (
    <>
      <div className="leftSideProfile pr-8 py-8 sticky">
        <h3 className=" m-0  fontGeorgia text-veryDarkBlue text-3xl">
          Profile
        </h3>

        <div className=" flex flex-row justify-start align-middle mt-4 ">
         
          <Image
            src={profilePic}
            alt="AuthorPic"
            width={127}
            height={127}
            className="rounded-full object-cover "
          />
          <div className="flex flex-col self-center ml-5">
            <p className=" m-0 text-3xl text-veryDarkBlue">Muhamad Rifai</p>
            <p className="m-0 text-veryDarkBlue">@Rifai23</p>
            <p className="m-0 text-gloomyPurpleActive text-lg">Member</p>
            <div className="flex flex-row text-gloomyGrayForText text-lg mt-0 ">
              <p className="m-0 mr-4">0 Posts</p>
              <p className="m-0"> 0 Followers</p>
            </div>
          </div>
        </div>

        <p className="m-0 mt-8 text-veryDarkBlue font-bold">About Me:</p>
        <p className="m-0 mt-2 text-veryDarkBlue">
        When you want to know the character of someone close to you, then invite him to climb the mountain.
        </p>

        <div className="flex flex-col justify-start mt-12  text-xl">
          <ul className="list-none pl-0">
            <li
              onClick={() => router.push("/apps/profile/edit")}
              className={
                activeSection === "editProfile"
                  ? "flex flex-row justify-between align-middle text-gloomyPurpleActive bg-purple-50 rounded-sm py-2 px-1 mb-3 hover:cursor-pointer hover:text-gloomyPurpleActive transition-colors"
                  : "flex flex-row justify-between align-middle text-veryDarkBlue py-2 px-1 mb-3 hover:cursor-pointer hover:text-gloomyPurpleActive transition-colors"
              }
            >
              <p className="m-0">Edit Profile</p>
              <RiArrowRightSLine className="self-center" />
            </li>

            <li
              onClick={() => router.push("/apps/profile/bookmarks")}
              className={
                activeSection === "bookmarks"
                  ? "flex flex-row justify-between align-middle text-gloomyPurpleActive bg-purple-50 rounded-sm py-2 px-1 mb-3 hover:cursor-pointer hover:text-gloomyPurpleActive transition-colors"
                  : "flex flex-row justify-between align-middle text-veryDarkBlue py-2 px-1 mb-3 hover:cursor-pointer hover:text-gloomyPurpleActive transition-colors"
              }
            >
              <p className="m-0">Saved Posts</p>
              <RiArrowRightSLine className="self-center" />
            </li>

            <li
              onClick={() => router.push("/apps/profile/setting")}
              className={
                activeSection === "setting"
                  ? "flex flex-row justify-between align-middle text-gloomyPurpleActive bg-purple-50 rounded-sm py-2 px-1 mb-3 hover:cursor-pointer hover:text-gloomyPurpleActive transition-colors"
                  : "flex flex-row justify-between align-middle text-veryDarkBlue py-2 px-1 mb-3 hover:cursor-pointer hover:text-gloomyPurpleActive transition-colors"
              }
            >
              <p className="m-0">Setting</p>
              <RiArrowRightSLine className="self-center" />
            </li>
          </ul>

          <Button className="bg-gloomyPurple text-white text-lg py-3 px-6 rounded-md shadow-md hover:cursor-pointer hover:bg-gloomyPurpleHover active:bg-gloomyPurpleActive transition-colors">
            Log Out
          </Button>
        </div>
      </div>
    </>
  );
}
