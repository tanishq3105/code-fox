import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useFormStatus } from "react-dom";
import { TextMorph } from "torph/react";
import { signInWithGithub } from "../actions";
function SubmitButton() {
  const { pending } = useFormStatus();

  let buttonLabel = "Continue with Github";
  let icon = <SiGithub />;

  if (pending) {
    buttonLabel = "Redirecting to Github";
    icon = <Spinner />;
  }

  return (
    <Button type="submit" disabled={pending}>
      {icon}
      <TextMorph>{buttonLabel}</TextMorph>
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
