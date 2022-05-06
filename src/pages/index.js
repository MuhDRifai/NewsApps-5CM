import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/base/Button";
import CardCategory from "../components/CardCategory";
import styles from "../styles/Home.module.css";
import illustration1 from "../assets/LOGO CLIMBING.jpg";
import { categories } from "../helpers/arrayCategories";
import { articles } from "../helpers/arrayArticles";
import CardArticleLg from "../components/CardArticleLg";
import CardArticleSm from "../components/CardArticleSm";
import { useRouter } from "next/router";
import { authors } from "../helpers/arrayAuthor";
import CardAuthor from "../components/CardAuthor";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Header
        title="5CM | Share Information and Educate People"
        description="Share Information and Educate People"
        keywords="5CM, News Web Apps, news, articles"
      />

      <Navbar heroColor="quinary" activePage="home" />

      <main className="main">
        <section className="heroSection quinaryBgColor">
          <div className="heroTitleWrapper">
            <h1 className="title fontGeorgia text-black text-7xl ">
              Share Information <br /> and Educate People.
            </h1>
            <p className="subtitle text-xl text-black">
              Everyone has their own point of view, stories, <br /> opinions,
              and ideas. Share your unique perspective <br /> to the world and
              help other people write their own stories.
            </p>
            <Button
              onClick={() => router.push("/apps/articles")}
              className="btnHero secondaryBgColor whiteTextColor fontAvenir text-xl px-10 py-4 mt-4 shadow-md hover:bg-gloomyPurpleHover active:bg-gloomyPurpleActive transition-colors"
            >
              Start Exploring
            </Button>
          </div>
          <Image
            className="illustration"
            src={illustration1}
            alt="Illustration1"
            width={560}
            height={550}
          />
        </section>

        <section className={styles.categorySection}>
          <div className={styles.textWrapper}>
            <h2 className="primaryTextColor fontGeorgia">Category</h2>
            <p className={`${styles.link} primaryTextColor fontAvenir`}>
              <Link href="/apps/categories">More Like This</Link>
            </p>
          </div>
          <div className={styles.categoryWrapper}>
            {categories.map((category, index) => {
              if (category.id <= 6)
                return (
                  <CardCategory
                    action={() =>
                      router.push(`/apps/categories/${category.codeCategory}`)
                    }
                    key={index}
                    imageCategory={category.imageCategory}
                    nameCategory={category.nameCategory}
                  />
                );
            })}
          </div>
        </section>

        <section className={styles.recommendSection}>
          <div className={styles.recommend}>
            <h2 className="primaryTextColor fontGeorgia">
              Recommended For You
            </h2>

            <div className={styles.recommendArticlesWrapper}>
              {articles.map((article) => {
                return (
                  <CardArticleSm
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
          </div>

          <div className={styles.tags}>
            <h2 className="primaryTextColor fontGeorgia">Popular Tags</h2>
            <p className="blackTextColor">
              Explore new topics and satisfy your mind
            </p>

            <div className={styles.tagsWrapper}>
              <span className="secondaryBgColor whiteTextColor hover:bg-gloomyPurpleHover active:bg-gloomyPurpleActive transition-colors">
                #GunungLawu
              </span>
              <span className="secondaryBgColor whiteTextColor">#DIKSAR</span>
              <span className="secondaryBgColor whiteTextColor">#PENMAS</span>
              <span className="secondaryBgColor whiteTextColor">
                #History
              </span>
              <span className="secondaryBgColor whiteTextColor">
                #SoeHokGie
              </span>
              <span className="secondaryBgColor whiteTextColor">#5cm</span>
              <span className="secondaryBgColor whiteTextColor">#KodeEtik</span>
              <span className="secondaryBgColor whiteTextColor">#Edelweis</span>
              <span className="secondaryBgColor whiteTextColor">#DaftarBlackList</span>
              <span className="secondaryBgColor whiteTextColor">
                #7SummitIndonesia
              </span>
              <span className="secondaryBgColor whiteTextColor">
                #PembabatanHutanKalimantan
              </span>
            </div>
          </div>
        </section>

        <section className={`${styles.videoSection} quinaryBgColor`}>
          <div className={styles.videoDescWrapper}>
            <h2 className="primaryTextColor fontGeorgia text-3xl">
              Trailer Film <br /> SOE HOK GIE
            </h2>
            <p className="primaryTextColor text-lg">
            Soe Hok Gie merupakan seorang aktivis mahasiswa yang lahir di keluarga keturunan Tionghoa dan menjalani kehidupan sederhana di Jakarta. Gie merupakan sosok yang jujur dan tidak kenal kompromi.<br /> Sejak usia remaja, Gie memiliki ketertarikan dengan konsep-konsep idealis yang dipaparkan oleh intelek-intelek kelas dunia
            </p>
            <Button className="btnHero secondaryBgColor whiteTextColor fontAvenir px-7 py-3 text-lg shadow-md hover:bg-gloomyPurpleHover active:bg-gloomyPurpleActive transition-colors">
              Read Full Article
            </Button>
          </div>

          <video
            className={styles.video}
            src={"/gie.mp4"}
            width={443}
            height={250}
            controls
          />
        </section>

        <section className={styles.latestArticlesSection}>
          <div className={styles.latestNews}>
            <h2 className="primaryTextColor fontGeorgia">Latest News</h2>

            <div className="">
              {articles.map((article) => {
                if (article.id === 3 || article.id === 5 || article.id === 6)
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
          </div>

          <div className={`${styles.topAuthor} px-6 py-8`}>
            <h2 className="primaryTextColor fontGeorgia">Who To Follow</h2>

            <div className={`${styles.topAuthorsWrapper} `}>
              {authors.map((author) => {
                return (
                  <CardAuthor
                    key={author.authorId}
                    action={() =>
                      router.push(`/apps/authors/${author.authorUsername}`)
                    }
                    authorName={author.authorName}
                    authorPic={author.authorPic}
                    bio={author.bio}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
