import Navigation from "../components/navigation";
import Head from "next/head";

export default function About() {

  return (
    <>
      <Navigation />
      <Head>
        {/* <title>{t("home.About title")}</title>
        <meta property="og:title" content={t("home.About title")} key="title" />
        <meta name="description" content={t("home.About description")} /> */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container mt-5">
        <h1>About Us</h1>
        <p>Hello, Dear friends, Welcome to Copy the Symbol and Emoji for Thread also, we are happy you want to know something more about our site</p>
            <p>So, basically, nowadays people are more dependent on online products and services that’s why we also, take forward a step to help you.</p>
            <p>Our first wish is to provide you with a better solution to solve your problem. So, kindly if you don’t get any solution then mention it in the comment section.</p>
            <p>Also, we are trying to provide fresh & latest content that provides you ideas about all updated information that’s happening in the world.</p>
            <p>In the below section you can get more ideas about our site like our website category and content category.</p>
            <p>If you have additional questions or require more information about our About Us Page, do not hesitate to contact us through email at</p>
            <h2>What is Our Goal?</h2>
            <p>There are millions of websites created every day, also, there is much fake content spread on the internet.</p>
            <p>So, Our main goal is to provide you with 100% Original and Safe content that provides you a great and better experience on the world wide web.</p>
            <p>We mainly focus on our service so and improving it regularly to provide a better user experience to all users.</p>

      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
