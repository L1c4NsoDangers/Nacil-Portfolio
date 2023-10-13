import HireMe from "@/components/view/hire-me";
import HomeViewHome from "@/components/view/home";
import TransitionLayout from "@/components/view/transition-layout";

export default function Home() {
  return (
    <main>
      <TransitionLayout />
      <HomeViewHome />
      <HireMe />
    </main>
  );
}
