import { Badge } from "@/components/ui/badge";
import React from "react";

export default function GithubConnectionBadge(connected:boolean) {
  return (
    <Badge
      variant="outline"
      className={
        connected
          ? "rounded-none border-primary/50 bg-primary text-primary-foreground"
          : "rounded-none text-muted-foreground"
      }
    >
      {connected ? "Connected" : "Not Connected"}
    </Badge>
  );
}
