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
        <meta name="title" content="Winnopro: Winning through Innovation" />
        <meta
          name="description"
          content="Winnopro Technologies Pvt Ltd. is committed to improve the quality of lives through Innovation. Join us in leading the new-gen Customer Experience across Digital Media platforms including Web, Mobile and Social media. We are in a mission to bring new dimensions to improve and enhance the customer engagement and experience."
        />
        <meta
          name="abstract"
          content="We are Design Thinking and Innovative Minded group of people, working towards a Mission to Improve the Quality of Lives!"
        />
        <meta
          name="keywords"
          content="Winnopro, Innovation, Innovative, Customer Experience, Customer Journey, Design Thinking, Quality of Lives, Improving Lives, User Story, User Experience, Closed Network, Job Portal, Recruitment Portal, Mobile App, Artificial Intelligence, Machine Learning"
        />
        <meta
          name="google-site-verification"
          content="E2-H9L-WrEa39xLSbpDVODykJ7jkK97ZT7O6s3HP4JM"
        />
      </Head>
      <body className=" scrollbar font-cambria ">{children}</body>
    </html>
  );
}
