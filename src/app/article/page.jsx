import ArticleView from "@/components/article-view/view";
import TransitionLayout from "@/components/view/transition-layout";
import React from "react";

export default function ArticlePage() {
  return (
    <main>
      <TransitionLayout />
      <ArticleView />
    </main>
  );
}
