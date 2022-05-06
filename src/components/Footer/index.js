import Link from "next/link";
import styles from "./Footer.module.css";
import logo from "../../assets/log.png";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className={`${styles.footer} secondaryBgColor`}>
        <div className={`${styles.footerContent} whiteTextColor`}>
          <section className={styles.leftSection}>
            <ul>
              <Link href="/apps/about">
                <li>
                  Why <span className="fontGeorgia">5CM</span>?
                </li>
              </Link>
              <Link href="/apps/about">
                <li>Be an author</li>
              </Link>
              <Link href="/apps/about">
                <li>Community</li>
              </Link>
              <li>FAQ</li>
            </ul>
          </section>
          <section className={styles.rightSection}>
            <div className="flex flex-row justify-end align-middle">
              <div className="self-center">
                <Image src={logo} alt="logo" width={32} height={32} />
              </div>
              <h2 className="fontGeorgia ml-3">5CM</h2>
            </div>
            <p className="">
              {" "}
              Jendral Sudirman Street No. 23 <br /> Jakarta, Indonesia
            </p>
            <p className="">(62)853-2042-2143</p>
            <p className="">5CM@gmail.com</p>
          </section>
        </div>
      </footer>
    </>
  );
}
