import "./globals.css";
import Head from "next/head";
export const metadata = {
  title: "Winnopro",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className=" scrollbar font-cambria ">{children}</body>
    </html>
  );
}
