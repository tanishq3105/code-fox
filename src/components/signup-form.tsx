import { cn } from "cn";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { GithubSignInForm } from "@/features/auth/components/github-sign-in-form";

interface SignUpForm extends React.ComponentProps<"div"> {
  callbackUrl: string;
}

export async function SignupForm({
  className,
  callbackUrl,
  ...props
}: SignUpForm) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Sign into your account</CardTitle>
          <CardDescription>
            Sign in with your github account to start managing your repositories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldSet>
            <FieldGroup>
              <Field>
                <GithubSignInForm callbackUrl={callbackUrl}></GithubSignInForm>
                <FieldDescription className="text-center">
                  We only request the permissions to identify your account. You
                  can revoke access anytime from setting
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldSet>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
