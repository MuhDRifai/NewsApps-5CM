import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import CardArticleLg from "../../../components/CardArticleLg";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import { articles } from "../../../helpers/arrayArticles";

export default function Bookmarks() {
  const router = useRouter();
  return (
    <>
      <Header
        title="5CM | Share Information and Educate People"
        description="Share Information and Educate People"
        keywords="5CM, News Web Apps, news, articles"
      />

      <Navbar activePage="profile" />

      <main className="main">
        <section className="h-full w-full flex flex-row  px-16">
          <Sidebar activeSection="bookmarks" />

          <div className="rightSideProfile px-6 py-8">
            <div className="wrapper  ">
              <div className="flex flex-row justify-between align-middle">
                <h3 className=" m-0  fontGeorgia text-veryDarkBlue text-3xl">
                  Saved Posts
                </h3>
                <Link href="/apps/profile" passHref>
                  <p className=" m-0 underline text-gloomyPurpleActive text-lg hover:cursor-pointer">
                    Go Back
                  </p>
                </Link>
              </div>

              <div className="articlesWrapper">
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
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
