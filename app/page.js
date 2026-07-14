import Hero from "@/components/Hero";
import Preview from "@/components/Preview";
import Benefits from "@/components/Benefits";
import Samples from "@/components/Samples";
import MoreRecipesCta from "@/components/MoreRecipesCta";
import Testimonials from "@/components/Testimonials";
import Categories from "@/components/Categories";
import Story from "@/components/Story";
import Bonuses from "@/components/Bonuses";
import Audience from "@/components/Audience";
import FinalCta from "@/components/FinalCta";
import Delivery from "@/components/Delivery";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";

export default function LandingPage() {
  return (
    <>
      <main className="min-h-screen font-sans">
        <Hero />
        <Preview />
        <Benefits />
        <Samples />
        <MoreRecipesCta />
        <Testimonials />
        <Categories />
        <Story />
        <Bonuses />
        <Audience />
        <FinalCta />
        <Delivery />
        <Guarantee />
        <FAQ />
        <Footer />
      </main>
      <StickyCta />
    </>
  );
}
