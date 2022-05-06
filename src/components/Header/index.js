import Head from "next/head";

export default function Header({ title, description, keywords }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTC-8" />
        <meta name="viewport" content="width=device-width, initial scale=1.0" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
