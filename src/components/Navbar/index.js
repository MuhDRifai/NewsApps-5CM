import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../base/Button";
import styles from "./Navbar.module.css";
import { BiBell, BiCircle } from "react-icons/bi";
import blankProfile from "../../assets/profile.jpg";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar({ heroColor, activePage }) {
  const router = useRouter();

  const [click, setClick] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 0 && window.scrollY <= 600) {
      setNavbar(true);
    } else if (window.scrollY >= 632) {
      setNavColor(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <>
      <nav
        className={
          navbar
            ? heroColor === "tertiary"
              ? `${styles.navbar} tertiaryBgColor`
              : heroColor === "quaternary"
              ? `${styles.navbar} quaternaryBgColor`
              : heroColor === "quinary"
              ? `${styles.navbar} quinaryBgColor`
              : `${styles.navbar} primaryBgColor`
            : navColor
            ? `${styles.navbar} primaryBgColor`
            : `${styles.navbar}`
        }
      >
        <div className={styles.navbarContent}>
          <section className={styles.logoSection}>
            <h1
              onClick={handleClick}
              className={`${styles.logoTitle} logoTitle fontGeorgia primaryTextColor`}
            >
              5CM
            </h1>
          </section>
          <section className={`${styles.menuSection} primaryTextColor`}>
            <ul>
              <li className={activePage === "home" ? "activePage" : null}>
                <Link href="/">Home</Link>
              </li>
              <li className={activePage === "articles" ? "activePage" : null}>
                <Link href="/apps/articles">Articles</Link>
              </li>
              <li className={activePage === "category" ? "activePage" : null}>
                <Link href="/apps/categories">Category</Link>
              </li>
              <li className={activePage === "about" ? "activePage" : null}>
                <Link href="/apps/about">About</Link>
              </li>
            </ul>
          </section>

          <section className={styles.eventSection}>
            {click ? (
              <div className={styles.btnNavbarWrapper}>
                <Button
                  onClick={() => router.push("/auth/signup")}
                  className={`${styles.btnNavbar} ${styles.signup}`}
                >
                  Sign up
                </Button>
                <Button
                  onClick={() => router.push("/auth/login")}
                  className={`${styles.btnNavbar} secondaryBgColor whiteTextColor shadow-md hover:bg-gloomyPurpleHover active:bg-gloomyPurpleActive transition-colors`}
                >
                  Login
                </Button>
              </div>
            ) : (
              <div className={styles.profileNotifWrapper}>
                <BiBell
                  className={`${styles.notifIcon} hover:text-gloomyPurpleHover hover:cursor-pointer`}
                />
                <div
                  onClick={() => router.push("/apps/profile")}
                  className={
                    activePage === "profile"
                      ? ` ${styles.navProfileWrapper} bg-gloomyPurpleActive hover:cursor-pointer`
                      : `${styles.navProfileWrapper} hover:cursor-pointer hover:border-gloomyPurpleHover`
                  }
                >
                  <Image
                    className={styles.navProfile}
                    src={blankProfile}
                    alt="profile"
                    width={35}
                    height={35}
                  />
                </div>
              </div>
            )}
          </section>
        </div>
      </nav>
    </>
  );
}
