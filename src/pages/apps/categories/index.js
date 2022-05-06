import Image from "next/image";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import styles from "../../../styles/apps/Categories.module.css";
import illustration3 from "../../../assets/LOGO CLIMBING.jpg";
import { categories } from "../../../helpers/arrayCategories";
import CardCategory from "../../../components/CardCategory";
import Button from "../../../components/base/Button";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Categories() {
  const router = useRouter();
  const [desc, setDesc] = useState({});
  const handleClick = (data) => {
    setDesc(data);
  };

  return (
    <>
      <Header
        title="Choose Your Favourite Category | 5CM"
        description="Start writing your own articles or just simply refresh your mind with our collection."
        keywords="5CM, News Web Apps, news, articles, write"
      />

      <Navbar heroColor="tertiary" activePage="category" />

      <main className="main">
        <section className="heroSection tertiaryBgColor">
          <div className="heroTitleWrapper">
            <h1 className="title fontGeorgia text-black text-7xl">
              Choose Article by Category.
            </h1>
            <p className="subtitle text-xl text-black">
              Category helps you to read another article that you <br /> haven’t
              thought before. You able to read all articles for free. <br />{" "}
              Enjoy the reading!
            </p>
          </div>
          <Image
            className="illustration"
            src={illustration3}
            alt="Illustration1"
            width={540}
            height={500}
          />
        </section>

        <section className={styles.categoriesSection}>
          <div className={styles.List}>
            {categories.map((category, index) => {
              return (
                <CardCategory
                  action={() => handleClick(category)}
                  key={index}
                  imageCategory={category.imageCategory}
                  nameCategory={category.nameCategory}
                />
              );
            })}
          </div>

          <div className={styles.Description}>
            {categories.map((category) => {
              if (category.codeCategory === desc.codeCategory)
                return (
                  <div key={category.id} className={styles.categoryDetails}>
                    <Image
                      src={
                        category.imageCategory
                          ? category.imageCategory
                          : illustration3
                      }
                      alt="category"
                      width={280}
                      height={280}
                    />
                    <h1 className="primaryTextColor">
                      {category.nameCategory}
                    </h1>

                    <div
                      className={`${styles.descriptionWrapper} primaryTextColor`}
                    >
                      <p className={styles.descriptionTitle}>Description:</p>
                      <p className={styles.descriptionContent}>
                        {category.descriptionCategory}{" "}
                      </p>
                    </div>

                    <div
                      className={`${styles.descriptionWrapper} primaryTextColor`}
                    >
                      <p>
                        <span>Total Articles:</span>{" "}
                        {category.totalArticles > 0
                          ? `${category.totalArticles} Articles`
                          : "0 Article"}
                      </p>
                      <p>
                        <span>Date Created:</span> {category.createdAt}
                      </p>
                    </div>

                    <Button
                      onClick={() =>
                        router.push(`/apps/categories/${category.codeCategory}`)
                      }
                      className={`${styles.btnExploreCategory} secondaryBgColor whiteTextColor hover:bg-gloomyPurpleHover active:bg-gloomyPurpleActive transition-colors`}
                    >
                      Explore Category
                    </Button>
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
