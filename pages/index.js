import Banner from "@/components/banner/Banner";
import Card from "@/components/card/Card";
import SectionCard from "@/components/card/SectionCard";
import NavBar from "@/components/navbar/NavBar";
import { getVideos } from "lib/videos";
import Head from "next/head";
import Image from "next/image";

export default function Home({
  disneyVid,
  popularVid,
  productivityVid,
  travelVid,
}) {
  return (
    <div>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="A Netflix app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <NavBar />
      {/* Banner */}
      <Banner
        title="Clifford the red dog"
        subTitle="The best dog in the world"
        imgUrl="/static/clifford.webp"
      />
      {/* Card */}
      <div className="mt-6">
        <SectionCard title="Disney" videos={disneyVid} size="lg" />
        {/* <SectionCard title="Watch it again" videos={disneyVid} size="sm" /> */}
        <SectionCard title="travel" videos={travelVid} size="sm" />

        <SectionCard title="Productivity" videos={productivityVid} size="md" />
        {/* <SectionCard title="popular" videos={popularVid} size="sm" /> */}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const disney = await getVideos("disney trailers");
  const productivity = await getVideos("productivity");
  const travel = await getVideos("travel");
  //const popular = await getPopularVideos();
  return {
    props: {
      disneyVid: disney,
      popularVid: [],
      productivityVid: productivity,
      travelVid: travel,
    },
  };
}
