import Link from "next/link";
import React from "react";
import Input from "../../../components/base/Input";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";

export default function Setting() {
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
          <Sidebar activeSection="setting" />

          <div className="rightSideProfile px-6 py-8">
            <div className="wrapper ">
              <div className="titleSettingWrapper flex flex-row justify-between align-middle">
                <h3 className=" m-0  fontGeorgia text-veryDarkBlue text-3xl">
                  Setting
                </h3>
                <Link href="/apps/profile" passHref>
                  <p className=" m-0 underline text-gloomyPurpleActive text-lg hover:cursor-pointer">
                    Go Back
                  </p>
                </Link>
              </div>

              <div className="settingWrapper">
                <p className="text-veryDarkBlue text-lg">Account</p>
                <div className="flex flex-row align-middle">
                  <label className="font-bold text-sm" htmlFor="email">
                    Email:{" "}
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="fontAvenir text-base py-2 px-5 mt-1 mb-6 w-full bg-white placeholder:text-[#7f7c82] border border-[#0d253c] rounded-md focus:outline-none focus:border-[#bfa2db] focus:ring-[#bfa2db] focus:ring-1"
                      id="email"
                    />
                  </label>
                </div>
                <div className="flex flex-row align-middle">
                  <label className="font-bold text-sm" htmlFor="password">
                    Password:{" "}
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      className="fontAvenir text-base py-2 px-5 mt-1 mb-6 w-full bg-white placeholder:text-[#7f7c82] border border-[#0d253c] rounded-md focus:outline-none focus:border-[#bfa2db] focus:ring-[#bfa2db] focus:ring-1"
                      id="password"
                    />
                  </label>
                </div>

                <p className="text-veryDarkBlue text-lg">General</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
