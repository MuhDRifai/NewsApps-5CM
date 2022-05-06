import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import Button from "../../../components/base/Button";
import Sidebar from "../../../components/Sidebar";

export default function Profile() {
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
          <Sidebar />

          <div className="rightSideProfile px-12 py-8">
            <h3 className=" m-0  fontGeorgia text-veryDarkBlue text-3xl">
              Posts
            </h3>

            <p className="m-0 mt-6 text-veryDarkBlue">
              Request to be an author and start writing down your wonderful
              thoughts and ideas.
            </p>

            <div className="flex flex-col justify-center align-middle mt-48">
              <Button className="self-center bg-gloomyPurple text-white text-lg py-4 px-10 rounded-md shadow-md hover:cursor-pointer hover:bg-gloomyPurpleHover active:bg-gloomyPurpleActive transition-colors">
                Request to be an Author
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
