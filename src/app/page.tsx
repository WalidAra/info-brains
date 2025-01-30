"use client";

import Hero from "@/components/hero";
import Header from "@/components/Header";
import UpComingEvents from "@/components/UpComingEvents";
import ClubAchievements from "@/components/ClubAchievements";
import TechnicalWorkshops from "@/components/TechnicalWorkshops";
import MemberFeedback from "@/components/MemberFeedback";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] relative">
      <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-full border-l border-white/[0.02]" />
        ))}
      </div>
      <Header />
      <main className="relative mx-auto container max-w-6xl">
        <Hero />
        <UpComingEvents />
        <ClubAchievements />
        <TechnicalWorkshops />
        <MemberFeedback />
        <Newsletter />
        <Footer />
      </main>
    </div>
  );
}
