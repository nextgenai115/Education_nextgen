import Hero from "@/components/Hero";
import MarketStats from "@/components/MarketStats";
import Hierarchy from "@/components/Hierarchy";
import Modules from "@/components/Modules";
import Certification from "@/components/Certification";
import EnrollmentForm from "@/components/EnrollmentForm";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <MarketStats />
      <Hierarchy />
      <Modules />
      <Certification />
      <EnrollmentForm />
      <FAQ />
    </main>
  );
}
