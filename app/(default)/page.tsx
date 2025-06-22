export const metadata = {
  title: "Simplified Learning Study",
  description: "Simplified Learning Study",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Contact />
    </>
  );
}
