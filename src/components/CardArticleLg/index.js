import Image from "next/image";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import styles from "./CardArticleLg.module.css";

export default function CardArticleLg({
  imageArticle,
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
      <div className={styles.articleCardLg}>
        <Image
          onClick={action}
          className={`${styles.articlePictureLg} hover:cursor-pointer`}
          src={imageArticle}
          alt="articleImage"
          width={255}
          height={157}
        />

        <div className={styles.articleCardContentLgWrapper}>
          <div onClick={action} className={styles.articleTextLgWrapper}>
            <h2 className={`${styles.articleTitleLg} primaryTextColor`}>
              {titleArticle}
            </h2>
            <p className={`${styles.articleDescLg} tertiaryTextColor`}>
              {descriptionArticle}
            </p>
          </div>

          <div
            onClick={action2}
            className={`${styles.articleAuthorLg}  hover:cursor-pointer`}
          >
            <Image
              className={`${styles.authorPictureLg}`}
              src={authorPicture}
              alt="author"
              width={27}
              height={27}
            />
            <p>{author}</p>
          </div>

          <div className={styles.articleActionLg}>
            <p className={`${styles.articleDateLg} tertiaryTextColor`}>
              {createdAt}
            </p>
            <div className={styles.iconWrapper}>
              <AiOutlineLike
                className={`${styles.likeIconLg} tertiaryTextColor`}
              />
              <BsBookmark
                className={`${styles.bookmarkIconLg} tertiaryTextColor`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
