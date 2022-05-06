/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import { articles } from "../../../helpers/arrayArticles";
import { categories } from "../../../helpers/arrayCategories";
import CardArticleLg from "../../../components/CardArticleLg";
import styles from "../../../styles/apps/ArticlesByCategory.module.css";
import { IoPricetags } from "react-icons/io5";
import Image from "next/image";
import author from "../../../assets/profile.jpg";

export default function Category() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      {categories.map((category) => {
        if (category.codeCategory === slug)
          return (
            <Header
              title={`Learn more about ${category.nameCategory} with these phenomenal articles!`}
              description={category.descriptionCategory}
              keywords={`5CM, News Web Apps, news, articles, write, ${category.codeCategory}`}
            />
          );
      })}

      <Navbar activePage="category" />

      <main className="main">
        <section className={styles.articlesCategorySection}>
          {categories.map((category) => {
            if (category.codeCategory === slug)
              return (
                <div key={category.id} className={styles.listArticle}>
                  <div className={styles.categoryTitleWrapper}>
                    <IoPricetags
                      className={`${styles.tagsIcon} primaryTextColor`}
                    />
                    <h2 className="primaryTextColor fontGeorgia">
                      {category.nameCategory}
                    </h2>
                  </div>
                  {category.totalArticles > 0 ? (
                    articles.map((article) => {
                      if (article.category === slug)
                        return (
                          <CardArticleLg
                            action={() =>
                              router.push(
                                `/apps/articles/${article.titleArticle}`
                              )
                            }
                            action2={() =>
                              router.push(
                                `/apps/authors/${article.authorUsername}`
                              )
                            }
                            key={article.id}
                            imageArticle={article.imageArticle}
                            titleArticle={article.titleArticle}
                            descriptionArticle={article.descriptionArticle}
                            authorPicture={article.authorPicture}
                            author={article.author}
                            createdAt={article.createdAt}
                          />
                        );
                    })
                  ) : (
                    <p>Articles in this category are not yet available.</p>
                  )}
                </div>
              );
          })}

          <div className={styles.relatedArticle}>
            <h2 className="primaryTextColor fontGeorgia">Popular Tags</h2>
            <p className="blackTextColor">
              Explore new topics and satisfy your mind
            </p>

            <div className={styles.tagsWrapper}>
              <span className="secondaryBgColor whiteTextColor">#cats</span>
              <span className="secondaryBgColor whiteTextColor">#seblak</span>
              <span className="secondaryBgColor whiteTextColor">#foodie</span>
              <span className="secondaryBgColor whiteTextColor">
                #SOEHOKGIE
              </span>
              <span className="secondaryBgColor whiteTextColor">
                #5CM
              </span>
              <span className="secondaryBgColor whiteTextColor">#health</span>
              <span className="secondaryBgColor whiteTextColor">#anime</span>
              <span className="secondaryBgColor whiteTextColor">#japan</span>
              <span className="secondaryBgColor whiteTextColor">#husky</span>
              <span className="secondaryBgColor whiteTextColor">
                #7SUMMITINDONESIA
              </span>
              <span className="secondaryBgColor whiteTextColor">#bali</span>
              <span className="secondaryBgColor whiteTextColor">
                #DIKSAR
              </span>
              <span className="secondaryBgColor whiteTextColor">
                #SURVIVALLIT
              </span>
            </div>

            {categories.map((category) => {
              if (category.codeCategory === slug && category.totalArticles > 0)
                return (
                  <div>
                    <h2
                      className={`${styles.topAuthorCategoryTitle} primaryTextColor fontGeorgia`}
                    >
                      Top Authors in This Category
                    </h2>
                    <div className={styles.topAuthorsWrapper}>
                      <div className={styles.authorDetails}>
                        <div>
                          <Image
                            className={styles.authorImg}
                            src={author}
                            alt="TopAuthor"
                            width={57}
                            height={57}
                          />
                        </div>

                        <div className={styles.authorInfo}>
                          <p className={styles.authorName}>Ferdi Ferdiana</p>
                          <p
                            className={`${styles.authorAbout} tertiaryTextColor`}
                          >
                            Life is like climbing a mountain, sometimes the path goes up, sometimes it is gentle, but sometimes it goes down sharply. and if we are not careful we will fall into the abyss
                          </p>
                        </div>
                      </div>
                    </div>
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
