"use client";
// components/github-app-card.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  GithubIcon,
  LinkSquare02Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";
import { TextMorph } from "torph/react";

const features = [
  "Access public and private repositories you select",
  "Receive webhooks for pull request events",
  "Post AI-generated review comments on PRs",
];
export function GithubCardSkeleton({}: {}) {
  const connected = false;
  return (
    <Card className="rounded-none border border-border bg-card mx-5">
      <CardHeader className="flex flex-row items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center border border-border bg-background">
          <HugeiconsIcon icon={GithubIcon} className="size-6" />
        </div>

        <div className="flex-1 space-y-1">
          <CardTitle className="font-heading text-lg">GitHub App</CardTitle>
          <CardDescription>
            Install the Chai reviewer app on your GitHub account or organization
            to access public and private repositories.
          </CardDescription>
        </div>

        <Badge
          variant="outline"
          className={
            connected
              ? "rounded-none border-primary/50 bg-primary text-primary-foreground"
              : "rounded-none text-muted-foreground"
          }
        >
          {connected ? "Connected" : "Connecting..."}
        </Badge>
      </CardHeader>

      <CardContent>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <HugeiconsIcon
                icon={CheckmarkCircle02Icon}
                className="size-4 shrink-0 text-primary"
              />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          className={`flex px-2 py-2 gap-1 cursor-pointer items-center rounded-none transition-colors ${
            connected
              ? "bg-red-500/15 text-red-600 hover:bg-red-500/25"
              : "bg-green-500/15 text-green-600 hover:bg-green-500/25"
          }`}
        >
          <HugeiconsIcon icon={GithubIcon} className="size-4" />

          <TextMorph>Connecting...</TextMorph>
        </Button>
      </CardFooter>
    </Card>
  );
}
