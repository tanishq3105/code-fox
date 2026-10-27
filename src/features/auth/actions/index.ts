"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import {
  DEFAULT_AUTH_CALLBACK,
  getSafeCallbackPath,
  SIGN_IN_PATH,
} from "../utils";
import { cache } from "react";
import { authClient } from "@/lib/auth-client";
export async function signInWithGithub(formData: FormData) {
  const callback = formData.get("callback");
  const redirectTo = getSafeCallbackPath(
    typeof callback === "string" ? callback : null,
  );
  const result = await auth.api.signInSocial({
    body: {
      provider: "github",
      callbackURL: redirectTo,
    },
    headers: await headers(),
  });

  if (result.url) {
    redirect(result.url);
  }
}

export const getServerSession = cache(async () => {
  return auth.api.getSession({ headers: await headers() });
});

export async function requireAuth(redirect_to = SIGN_IN_PATH) {
  const session = await getServerSession();
  if (!session) {
    redirect(redirect_to);
  }
  return session;
}

export async function requireUnauth(redirect_to = DEFAULT_AUTH_CALLBACK) {
  const session = await getServerSession();
  if (session) {
    redirect(redirect_to);
  }
}

export async function handleLogout(redirect_to = SIGN_IN_PATH) {
  const result = await auth.api.signOut({
    headers: await headers(),
  });
  if (result.success) {
    redirect(redirect_to);
  }
}
