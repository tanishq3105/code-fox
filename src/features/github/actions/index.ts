"use server";
import { randomBytes } from "node:crypto";
import { prisma } from "@/lib/prisma";
import { getServerSession, requireAuth } from "@/features/auth/actions";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getGithubApp } from "../utils/github-app";

export async function getGithubInstallURL() {
  const session = await getServerSession();
  if (!session) {
    redirect(`/sign-in?callbackUrl=/dashboard/github`);
  }
  // 2. Generate a secure, unpredictable state token.
  const state = randomBytes(32).toString("hex");

  // 3. Save the state against the authenticated user.
  await prisma.githubInstallState.create({
    data: {
      state,
      userId: session.user.id,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000),
    },
  });

  // 4. Return the GitHub installation URL.
  const url = new URL(
    process.env.NEXT_GITHUB_PUBLIC_LINK + "/installations/new",
  );

  url.searchParams.set("state", state);

  return url.toString();
}

export async function disconnectGithub() {
  const session = await requireAuth();

  const installation = await prisma.githubInstallation.findUnique({
    where: { userId: session.user.id },
    select: { installationId: true },
  });

  if (!installation) return;

  const app = getGithubApp();

  try {
    await app.octokit.request("DELETE /app/installations/{installation_id}", {
      installation_id: installation.installationId,
    });
  } catch (err: any) {
    // 404 = already uninstalled on GitHub, safe to continue and clean up the DB
    if (err?.status !== 404) throw err;
  }

  await prisma.githubInstallation.deleteMany({
    where: { userId: session.user.id },
  });

  revalidatePath("/dashboard/github");
}
