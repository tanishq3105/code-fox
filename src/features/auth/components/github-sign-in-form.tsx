"use client";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useFormStatus } from "react-dom";
import { TextMorph } from "torph/react";
import { signInWithGithub } from "../actions";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? <Spinner /> : <SiGithub />}
      <TextMorph>
        {pending ? "Redirecting to Github" : "Continue with Github"}
      </TextMorph>
    </Button>
  );
}

type GithubSignInFormProps = {
  callbackUrl?: string;
};

export function GithubSignInForm({ callbackUrl }: GithubSignInFormProps) {
  return (
    <form action={signInWithGithub} className="flex justify-center">
      {callbackUrl ? (
        <input type="hidden" name="callback" value={callbackUrl}></input>
      ) : null}
      <SubmitButton />
    </form>
  );
}
