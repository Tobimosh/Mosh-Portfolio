import Clients from "@/components/ Clients";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProjects/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import WorkExperience from "@/components/WorkExperience";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="bg-black-100 flex overflow-clip justify-center items-center flex-col mx-auto sm:px-10 relative px-5 ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Clients />
        <WorkExperience />
        <Approach />
        <Footer/>
      </div>
    </main>
  );
}
