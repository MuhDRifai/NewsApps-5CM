import Image from "next/image";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import styles from "../../../styles/apps/Author.module.css";
import { authors } from "../../../helpers/arrayAuthor";
import { articles } from "../../../helpers/arrayArticles";
import { useRouter } from "next/router";
import CardArticleLg from "../../../components/CardArticleLg";
import Button from "../../../components/base/Button";

export default function Author() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      {articles.map((article) => {
        if (article.authorUsername === slug)
          return (
            <Header
              title={`${article.author} (${article.authorUsername}) - 5CM`}
              description="Share Information and Educate People"
              keywords="5CM, News Web Apps, news, articles"
            />
          );
      })}

      <Navbar />

      <main className="main">
        <section className="h-full w-full flex flex-row  px-16">
          <div className={`${styles.authorProfile} pr-8 py-8 sticky  `}>
            {authors.map((author) => {
              if (author.authorUsername === slug)
                return (
                  <div key={author.authorId}>
                    <div className=" flex flex-row justify-start align-middle">
                      <Image
                        src={author.authorPic}
                        alt="AuthorPic"
                        width={127}
                        height={127}
                        className="rounded-full object-cover "
                      />

                      <div className="ml-4 flex flex-col self-center">
                        <Button className="bg-gloomyPurple text-white text-base py-2 px-8 mb-3 rounded-md shadow-md hover:cursor-pointer hover:bg-gloomyPurpleHover active:bg-gloomyPurpleActive transition-colors">
                          Follow
                        </Button>
                        <Button className="bg-veryDarkBlue text-white text-base py-2 px-8 mb-3 rounded-md shadow-md hover:cursor-pointer hover:bg-veryDarkBlueHover active:bg-veryDarkBlueActive transition-colors">
                          Message
                        </Button>
                      </div>
                    </div>
                    <p className=" m-0 mt-4 text-3xl text-veryDarkBlue">
                      {author.authorName}
                    </p>
                    <p className="m-0 text-veryDarkBlue">
                      @{author.authorUsername}
                    </p>
                    <div className="flex flex-row text-gloomyGrayForText text-lg mt-0">
                      <p className="mr-4">{author.totalPosts} Posts</p>
                      <p>{author.totalFollowers} Followers</p>
                    </div>
                    <p className="m-0 text-veryDarkBlue">{author.bio}</p>
                  </div>
                );
            })}
          </div>

          <div className={`${styles.authorPosts} px-12 py-8`}>
            <h2 className="m-0 fontGeorgia text-3xl text-veryDarkBlue">
              Author&apos;s Posts
            </h2>
            {articles.map((article) => {
              if (article.authorUsername === slug)
                return (
                  <CardArticleLg
                    action={() =>
                      router.push(`/apps/articles/${article.titleArticle}`)
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
        </section>
      </main>
    </>
  );
}
