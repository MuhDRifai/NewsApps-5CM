import Link from "next/link";
import React from "react";
import Button from "../../components/base/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import styles from "../../styles/apps/About.module.css";
import logo from "../../assets/logo.png";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <Header
        title="5CM"
        description="A Brief Story About 5CN and Why you should start exploring it!"
        keywords="5CM, News Web Apps, news, articles, about us"
      />

      <Navbar heroColor="about" activePage="about" />

      <main className="main">
        <section className="heroSection bg-white">
          <p className="fontGeorgia text-black text-8xl text-center">
          When you want to know the character of someone close to you, then invite him to climb the mountain.
          </p>
        </section>

        <section className={" h-3/6 w-full bg-white"}>
          <div
            className={`${styles.borderBottomDark} px-16 py-20 fontGeorgia text-center`}
          >
            <p className="m-0 text-8xl mt-10">Start Writing Right Now.</p>
            <p className="text-2xl">
              Be an author and start expressing your thoughts, feelings,
              imagination, and ideas.
            </p>

            <Button className="bg-gloomyPurple text-white text-xl px-8 py-4 mt-12 rounded-md shadow-md cursor-pointer hover:bg-gloomyPurpleHover active:bg-gloomyPurpleActive transition-colors">
              Request to be an Author
            </Button>
          </div>

          <div className="flex flex-row fontGeorgia ">
            <div
              className={`${styles.borderRightDark} flex-1 pl-16 pr-9 py-12`}
            >
              <p className="m-0 text-5xl">Join Our Community.</p>
              <p className="text-xl cursor-pointer hover:underline">Blog</p>
              <p className="text-xl cursor-pointer hover:underline">Twitter</p>

              
            </div>

            <div className="flex-1 pl-8 py-12 flex m-auto">
              <div className="flex flex-row justify-start align-middle ">
                <Image src={logo} alt="logo" width={120} height={120} />
                <div className="flex flex-col ml-2">
                  <h1 className=" mb-0 text-5xl">5CM</h1>
                  <p className="m-0 text-lg">
                    &copy; Copyright 2022. All Right Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
