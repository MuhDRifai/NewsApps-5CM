import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import styles from "../../../styles/apps/Articles.module.css";
import Button from "../../../components/base/Button";
import Image from "next/image";
import illustration2 from "../../../assets/LOGO CLIMBING.jpg";
import CardArticleLg from "../../../components/CardArticleLg";
import { articles } from "../../../helpers/arrayArticles";
import Input from "../../../components/base/Input";
import { useRouter } from "next/router";
import { IoSearch, IoClose } from "react-icons/io5";

export default function Articles() {
  const router = useRouter();
  return (
    <>
      <Header
        title="Start Writing Your Thoughts | 5CM"
        description="Start writing your own articles or just simply refresh your mind with our collection."
        keywords="5CM, News Web Apps, news, articles, write"
      />

      <Navbar heroColor="quaternary" activePage="articles" />

      <main className="main">
        <section className="heroSection quaternaryBgColor">
          <div className="heroTitleWrapper">
            <h1 className="title fontGeorgia text-black text-7xl">
              Start Writing Your <br /> Own Articles.
            </h1>
            <p className="subtitle text-xl text-black">
              You can be an author by being active in reading articles <br /> in
              a month or you can request to be an author if you <br /> have been
              a member for three months.
            </p>
            <Button className="btnHero secondaryBgColor whiteTextColor text-xl px-14 py-4 mt-4 fontAvenir hover:bg-gloomyPurpleHover active:bg-gloomyPurpleActive transition-colors">
              Start Writing
            </Button>
          </div>
          <Image
            className="illustration"
            src={illustration2}
            alt="Illustration1"
            width={560}
            height={570}
          />
        </section>

        <section className={styles.listArticlesSection}>
          <div className={styles.articlesWrapper}>
            {articles.map((article) => {
              return (
                <CardArticleLg
                  action={() =>
                    router.push(`/apps/articles/${article.titleArticle}`)
                  }
                  action2={() =>
                    router.push(`/apps/authors/${article.authorUsername}`)
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
            })}
          </div>
          <div className={styles.searchArticle}>
            <h2 className="primaryTextColor fontGeorgia">Search Article</h2>

            <div>
              <IoSearch className={`${styles.searchIcon} secondaryTextColor`} />
              <Input
                className={styles.inputSearchArticle}
                type="text"
                placeholder="What do you want to read today?"
              />
              <IoClose className={`${styles.closeIcon} secondaryTextColor`} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
