import { Hero } from "@/app/components/Hero"
import { Features } from "@/app/components/Features";
import { FAQ } from "@/app/components/FAQ";
import { Footer } from "@/app/components/Footers"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Main Section Product */}
      <Features />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer Section */}
      <Footer />




    </>
  );
}
