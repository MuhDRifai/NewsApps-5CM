import Image from "next/image";
import styles from "./CardCategory.module.css";

export default function CardCategory({ action, imageCategory, nameCategory }) {
  return (
    <>
      <div onClick={action} className={styles.categoryCard}>
        <Image
          src={imageCategory}
          alt="categoryName"
          width={190}
          height={180}
        />
        <p className={`${styles.categoryName} primaryTextColor `}>
          {nameCategory}
        </p>
      </div>
    </>
  );
}
