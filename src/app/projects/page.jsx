import ProjectsView from "@/components/projects-view/view";
import TransitionLayout from "@/components/view/transition-layout";
import React from "react";

export default function ProjectsPage() {
  return (
    <main>
      <TransitionLayout />
      <ProjectsView />
    </main>
  );
}
