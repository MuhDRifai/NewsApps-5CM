
import Header from "../../components/Header";
import Input from "../../components/base/Input";
import Button from "../../components/base/Button";
import styles from "../../styles/auth/Signup.module.css";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <Header
        title="Signup for 5CM -5CM"
        description="Create new account and start exploring and writing now!"
      />

      <main className="main">
        <div
          className={`${styles.signupContainer} bg-slate-50 justify-center align-middle`}
        >
          <section className={styles.signupSection}>
            <div
              className={`${styles.formContainer} fontAvenir primaryTextColor primaryBgColor px-4`}
            >
              <h2 className="mx-1 mt-5 mb-2 text-3xl ">Sign Up</h2>
              <p className="text-center mt-4 mb-8 text-base">
                Hello, welcome to{" "}
                <strong className="cursor-pointer hover:underline">
                  <Link href="/">5CM</Link>
                </strong>{" "}
                <br />
                Create an account to enjoy our full feautres!
              </p>

              <form className=" flex flex-col px-4">
                <label className="font-bold text-sm" htmlFor="username">
                  Username:{" "}
                </label>
                <Input
                  type="text"
                  placeholder="Enter your username"
                  className="fontAvenir text-base py-2 px-5 mt-1 mb-6 bg-white placeholder:text-[#7f7c82] w-full border border-[#0d253c] rounded-md focus:outline-none focus:border-[#bfa2db] focus:ring-[#bfa2db] focus:ring-1"
                  id="username"
                />

                <label className="font-bold text-sm" htmlFor="email">
                  Email:{" "}
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="fontAvenir text-base py-2 px-5 mt-1 mb-6 w-full bg-white placeholder:text-[#7f7c82] border border-[#0d253c] rounded-md focus:outline-none focus:border-[#bfa2db] focus:ring-[#bfa2db] focus:ring-1"
                  id="email"
                />

                <label className="font-bold text-sm" htmlFor="password">
                  Password:{" "}
                </label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="fontAvenir text-base py-2 px-5 mt-1 mb-6 w-full bg-white placeholder:text-[#7f7c82] border border-[#0d253c] rounded-md focus:outline-none focus:border-[#bfa2db] focus:ring-[#bfa2db] focus:ring-1"
                  id="password"
                />

                <Button className="secondaryBgColor fontAvenir text-white text-base font-bold mt-7 px-8 py-3 rounded-md cursor-pointer hover:bg-gloomyPurpleHover active:bg-gloomyPurpleActive transition-colors">
                  Sign Up
                </Button>
              </form>

              <p className="text-center mt-6">
                Already have an account?{" "}
                <span className="secondaryTextColor font-semibold hover:underline hover:cursor-pointer">
                  <Link href="/auth/login">Login Here</Link>
                </span>{" "}
              </p>

              <Link href="/">
                <p className="uppercase text-purple-900 text-center font-bold underline cursor-pointer">
                  Back to Home
                </p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
