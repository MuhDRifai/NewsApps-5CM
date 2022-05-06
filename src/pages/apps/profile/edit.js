import Link from "next/link";
import React from "react";
import Button from "../../../components/base/Button";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import blankProfile from "../../../assets/blankProfile.png";
import profile from "../../../assets/profile.jpg";
import Image from "next/image";
import { HiOutlinePencil } from "react-icons/hi";
import Input from "../../../components/base/Input";

export default function EditProfile() {
  return (
    <>
      <Header
        title="5CM | Share Information and Educate People"
        description="Share Information and Educate People"
        keywords="5CM, News Web Apps, news, articles"
      />

      <Navbar activePage="profile" />

      <main className="main">
        <section className="h-full w-full flex flex-row  px-16">
          <Sidebar activeSection="editProfile" />

          <div className="rightSideProfile px-6 py-8">
            <div className="wrapper ">
              <div className="titleSection flex flex-row justify-between align-middle">
                <h3 className=" m-0  fontGeorgia text-veryDarkBlue text-3xl">
                  Edit Profile
                </h3>
                <Link href="/apps/profile" passHref>
                  <p className=" m-0 underline text-gloomyPurpleActive text-lg hover:cursor-pointer">
                    Go Back
                  </p>
                </Link>
              </div>

              <div className="editPictureSection flex flex-col align-middle justify-center ">
                <div className="self-center">
                  <Image
                    src={profile}
                    alt="profilePic"
                    width={102}
                    height={102}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="self-center ">
                  <span className="editIconWrapper editorWrapper flex bg-gloomyPurpleActive rounded-full relative  p-3 hover:cursor-pointer hover:bg-gloomyPurpleHover active:bg-gloomyPurpleActive">
                    <HiOutlinePencil className="self-center text-lg text-white" />
                  </span>
                </div>
                <p className="m-0 text-gloomyGrayForText self-center hover:cursor-pointer hover:underline">
                  Remove profile picture
                </p>
              </div>

              <div className="editProfileFormSection mt-8">
                <form className="formInputEditProfile flex flex-col px-4">
                  <div className="formInputWrapper flex flex-row">
                    <div className="formNamesWrapper flex flex-col flex-1 mr-4">
                      <label className="font-bold text-sm" htmlFor="username">
                        Username:{" "}
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter your username"
                        className="fontAvenir text-base py-2 px-5 mt-1 mb-6 bg-white placeholder:text-[#7f7c82] w-full border border-[#0d253c] rounded-md focus:outline-none focus:border-[#bfa2db] focus:ring-[#bfa2db] focus:ring-1"
                        id="username"
                      />

                      <label className="font-bold text-sm" htmlFor="fullname">
                        Full Name:{" "}
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter your fullname"
                        className="fontAvenir text-base py-2 px-5 mt-1 mb-6 w-full bg-white placeholder:text-[#7f7c82] border border-[#0d253c] rounded-md focus:outline-none focus:border-[#bfa2db] focus:ring-[#bfa2db] focus:ring-1"
                        id="fullname"
                      />
                    </div>

                    <div className="formBioWrapper flex-1">
                      <label className="font-bold text-sm " htmlFor="bio">
                        Bio:{" "}
                      </label>
                      <textarea
                        type="text"
                        placeholder="Bio"
                        rows={4}
                        cols={12}
                        className="fontAvenir text-base py-2 px-5 mt-1 mb-6 w-full bg-white placeholder:text-[#7f7c82] border border-[#0d253c] rounded-md focus:outline-none focus:border-[#bfa2db] focus:ring-[#bfa2db] focus:ring-1"
                        id="bio"
                      />
                    </div>
                  </div>

                  <Button className="bg-veryDarkBlue w-2/5 self-center fontAvenir text-white text-base font-bold mt-7 px-8 py-3 rounded-md cursor-pointer hover:bg-veryDarkBlueHover active:bg-veryDarkBlueActive transition-colors">
                    Save Change
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
