import Image from "next/image";
import React from "react";
import styles from "./CardAuthor.module.css";

export default function CardAuthor({ authorName, authorPic, bio, action }) {
  return (
    <>
      <div onClick={action} className={`${styles.authorDetails} mb-3`}>
        <div>
          <Image
            className={styles.authorImg}
            src={authorPic}
            alt="TopAuthor"
            width={57}
            height={57}
          />
        </div>

        <div className={styles.authorInfo}>
          <p className={styles.authorName}>{authorName}</p>
          <p className={`${styles.authorAbout} tertiaryTextColor truncate`}>
            {bio}
          </p>
        </div>
      </div>
    </>
  );
}
