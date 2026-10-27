"use client";

import { Button } from "@base-ui/react";
import { GithubIcon, UnplugIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTransition } from "react";
import { disconnectGithub, getGithubInstallURL } from "../actions";
import { TextMorph } from "torph/react";

export function InstallGitHubButton({ connected = false }) {
  const [pending, startTransition] = useTransition();
  const handleGithubConnect = () => {
    startTransition(async () => {
      if (connected) {
        disconnectGithub();
      } else {
        const url = await getGithubInstallURL();
        window.location.href = url;
      }
    });
  };

  return (
    <Button
      className={`flex px-2 py-2 gap-1 cursor-pointer items-center rounded-none transition-colors ${
        connected
          ? "bg-red-500/15 text-red-600 hover:bg-red-500/25"
          : "bg-green-500/15 text-green-600 hover:bg-green-500/25"
      }`}
      onClick={() => {
        handleGithubConnect();
      }}
    >
      <HugeiconsIcon
        icon={connected ? UnplugIcon : GithubIcon}
        className="size-4"
      />

      <TextMorph>
        {pending
          ? "Processing..."
          : connected
            ? "Disconnect GitHub App"
            : "Install GitHub App"}
      </TextMorph>
    </Button>
  );
}
