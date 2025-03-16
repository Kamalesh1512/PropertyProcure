import Image from "next/image";
import Hero from "./_components/hero";
import Features from "./_components/features";
import HowItWorks from "./_components/how-it-works";
import Cta from "./_components/cta";
import Testimonials from "./_components/testimonals";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20">
      <main className="flex flex-col gap-6 row-start-2 items-center sm:items-start">
      <Hero />
      <Features />
      <HowItWorks />
      {/* <Testimonials /> */}
      {/* <Cta /> */}
      </main>
    </div>
  );
}
