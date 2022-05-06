import Image from "next/image";
import { BsBookmark } from "react-icons/bs";
import styles from "./CardArticleSm.module.css";

export default function CardArticleSm({
  titleArticle,
  descriptionArticle,
  authorPicture,
  author,
  createdAt,
  action,
  action2,
  ...props
}) {
  return (
    <>
      <div className={styles.articleCardSm}>
        <div onClick={action} className={styles.articleTextSmWrapper}>
          <h2 className={`${styles.articleTitle} primaryTextColor`}>
            {titleArticle}
          </h2>
          <p className={`${styles.articleDesc} tertiaryTextColor`}>
            {descriptionArticle}
          </p>
        </div>
        <div onClick={action2} className={styles.articleAuthor}>
          <Image
            className={styles.authorPicture}
            src={authorPicture}
            alt="author"
            width={27}
            height={27}
          />
          <p>{author}</p>
        </div>

        <div className={styles.articleAction}>
          <p className={`${styles.articleDate} tertiaryTextColor`}>
            {createdAt}
          </p>
          <BsBookmark className={`${styles.bookmarkIcon} tertiaryTextColor`} />
        </div>
      </div>
    </>
  );
}
