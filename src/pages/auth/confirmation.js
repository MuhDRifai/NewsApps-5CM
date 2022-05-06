
import Input from "../../components/base/Input";
import Header from "../../components/Header";
import styles from "../../styles/auth/Login.module.css";
import Link from "next/link";
import Button from "../../components/base/Button";
import { useRouter } from "next/router";

export default function EmailConfirmation() {
  const router = useRouter();
  return (
    <>
      <Header
        title="Forgotten Password - 5CM"
        description="Enter your email adress that you used to register and we’ll give you instructions to reset your password."
      />

      <main className="main">
        <div
          className={`${styles.loginContainer} bg-slate-50 justify-center align-middle`}
        >
          <section className={styles.loginSection}>
            <div
              className={`${styles.formContainer} fontAvenir primaryTextColor primaryBgColor px-4`}
            >
              <h2 className="mx-1 mt-5 mb-2 text-3xl ">Forgot Password</h2>
              <p className="text-center mt-4 mb-8 text-base">
                We are here to help you to recover your password. Enter your
                email adress that you used to register and we’ll give you
                instructions to reset your password.
              </p>

              <form className=" flex flex-col px-4">
                <label className="font-bold text-sm" htmlFor="email">
                  Email:{" "}
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="fontAvenir text-base py-2 px-5 mt-1 mb-6 w-full bg-white placeholder:text-[#7f7c82] border border-[#0d253c] rounded-md focus:outline-none focus:border-[#bfa2db] focus:ring-[#bfa2db] focus:ring-1"
                  id="email"
                />
              </form>

              <Button
                onClick={() => router.push("/auth/create-new-password")}
                className="secondaryBgColor fontAvenir text-white text-base font-bold mt-36 mx-4 px-8 py-3 rounded-md cursor-pointer hover:bg-gloomyPurpleHover active:bg-gloomyPurpleActive transition-colors"
              >
                Send Email
              </Button>

              <Link href="/">
                <p className="uppercase text-purple-900 text-center font-bold underline cursor-pointer mt-12">
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
