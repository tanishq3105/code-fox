import { GithubAppCard } from "@/features/github/components/github-card";
import { GithubCardSkeleton } from "@/features/github/components/github-card-skeleton";
import React, { Suspense, use } from "react";

export default function GithubPage() {
  return (
    <div>
      <Suspense fallback={<GithubCardSkeleton />}>
        <GithubAppCard></GithubAppCard>
      </Suspense>
    </div>
  );
}
