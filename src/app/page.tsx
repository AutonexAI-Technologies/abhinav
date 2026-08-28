import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import ServicesTicker from "@/components/ServicesTicker/ServicesTicker";
import HomeAbout from "@/components/home/HomeAbout";
import HomeServices from "@/components/home/HomeServices";
import HomeProcess from "@/components/home/HomeProcess";
import HomeTransformations from "@/components/home/HomeTransformations";

import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "Abhinav Lifts | Online Fitness Coach & Hybrid Athlete",
  description:
    "Online coaching, custom nutrition plans, and hybrid training programs. Build a stronger body and a more disciplined mind with Abhinav — coach, runner, and content creator.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesTicker />
      <HomeAbout />
      <HomeServices />
      <HomeProcess />
      <HomeTransformations />

      <HomeCTA />
    </>
  );
}
