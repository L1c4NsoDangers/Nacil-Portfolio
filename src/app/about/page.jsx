import EducationAbout from "@/components/about-view/education-about";
import ExperienceAbout from "@/components/about-view/experience-about";
import SkillsAbout from "@/components/about-view/skills-about";
import AboutView from "@/components/about-view/view";
import TransitionLayout from "@/components/view/transition-layout";

export default function AboutPage() {
  return (
    <main>
      <TransitionLayout />
      <AboutView />
      <SkillsAbout />
      <ExperienceAbout />
      <EducationAbout />
    </main>
  );
}
