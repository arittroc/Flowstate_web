import Hero from "@/components/Hero";
import ProcessScroll from "@/components/ProcessScroll";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-alabaster">
      <Hero />
      <ProcessScroll />
      <LeadForm />
    </main>
  );
}
