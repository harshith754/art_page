import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar";
import HeroSection from "../components/hero-section";
import RecentArtworksContainer from "../components/recent-artworks-container";
import CategoryContainer from "../components/category-container";
import InspirationForm from "../components/inspiration-form";
import Footer from "../components/footer";

const LandingPage: NextPage = () => {
  return (
    <main className="relative bg-white w-full h-[3264px] flex flex-col items-center justify-start">
      <Navbar />
      <HeroSection />
      <RecentArtworksContainer />
      <CategoryContainer />
      <InspirationForm />
      <Footer />
    </main>
  );
};

export default LandingPage;
