import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import styles from "../../../styles/apps/ArticleDetails.module.css";
import { articles } from "../../../helpers/arrayArticles";
import { BsBookmark, BsCircleFill, BsLink45Deg } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import CardAuthor from "../../../components/CardAuthor";
import { authors } from "../../../helpers/arrayAuthor";

export default function ArticleDetails() {
  const router = useRouter();
  const { slug } = router.query;
  // const convertedId = parseInt(id);

  return (
    <>
      {articles.map((article, id) => {
        if (article.titleArticle === slug)
          return (
            <Header
              key={id}
              title={article.titleArticle}
              description={article.descriptionArticle}
              keywords={`5CM, News Web Apps, news, articles, write, ${article.category}`}
            />
          );
      })}

      <Navbar activePage="articles" />

      <main className="main">
        <section className={styles.articleSection}>
          {articles.map((article) => {
            if (article.titleArticle === slug)
              return (
                <div className={styles.contentWrapper}>
                  <div className={styles.articleInfo}>
                    <div
                      className={`${styles.wrapper} flex-row justify-between`}
                    >
                      <div className={styles.authorDateWrapper}>
                        <div className={styles.articleAuthorLg}>
                          <Image
                            className={`${styles.authorPictureLg} object-cover`}
                            src={article.authorPicture}
                            alt="author"
                            width={42}
                            height={42}
                          />
                          <p>{article.author}</p>
                        </div>

                        <div className={styles.iconWrapper}>
                          <BsCircleFill
                            className={`${styles.separateIcon} tertiaryTextColor`}
                          />
                        </div>

                        <p
                          className={`${styles.dateArticle} tertiaryTextColor`}
                        >
                          {article.createdAt}
                        </p>
                      </div>

                      <div className={styles.iconWrapper}>
                        <FiSend
                          className={`${styles.bookmarkIconLg} tertiaryTextColor`}
                        />
                        <BsLink45Deg
                          className={`${styles.bookmarkIconLg} tertiaryTextColor`}
                        />
                        <BsBookmark
                          className={`${styles.bookmarkIconLg} tertiaryTextColor`}
                        />
                      </div>
                    </div>

                    <h1
                      className={`${styles.articleTitle} primaryTextColor fontAvenir`}
                    >
                      {article.titleArticle}
                    </h1>

                    <Image
                      className={styles.articleImage}
                      src={article.imageArticle}
                      alt="imageArticle"
                      width={755}
                      height={405}
                    />
                  </div>

                  <div className={styles.articleContent}>
                    <p
                      className={`${styles.descriptionArticle} tertiaryTextColor fontGeorgia`}
                    >
                      <i>&quot;{article.descriptionArticle}&quot;</i>
                    </p>

                    <p className={`${styles.paragrafArticle} primaryTextColor`}>
                      {article.content.paragraf1}
                    </p>
                    <p className={`${styles.paragrafArticle} primaryTextColor`}>
                      {article.content.paragraf2}
                    </p>
                    <p className={`${styles.paragrafArticle} primaryTextColor`}>
                      {article.content.paragraf3}
                    </p>
                  </div>
                </div>
              );
          })}

          <div className={styles.additionalInfo}>
            <h2 className="primaryTextColor fontGeorgia">
              Author&apos;s Profile
            </h2>

            {articles.map((article, id) => {
              if (article.titleArticle === slug)
                return (
                  <div className={styles.topAuthorsWrapper}>
                    {authors.map((author) => {
                      if (author.authorName === article.author)
                        return (
                          <CardAuthor
                            key={author.authorId}
                            action={() =>
                              router.push(
                                `/apps/authors/${author.authorUsername}`
                              )
                            }
                            authorName={author.authorName}
                            authorPic={author.authorPic}
                            bio={author.bio}
                          />
                        );
                    })}
                  </div>
                );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
