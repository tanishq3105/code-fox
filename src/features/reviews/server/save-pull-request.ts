import { PullRequestWebhookPayload } from "@/features/github/server/webhook-handler";
import { prisma } from "@/lib/prisma";

function getAuthorLogin(user: { login: string } | null) {
  if (!user) return null;
  return user.login;
}
export async function savePullRequest(event: PullRequestWebhookPayload) {
  const req = await prisma.pullRequest.upsert({
    where: {
      repoFullName_prNumber: {
        repoFullName: event.repository.full_name,
        prNumber: event.pull_request.number,
      },
    },
    update: {
      title: event.pull_request.title,
      headSha: event.pull_request.head.sha,
      status: "pending",
    },
    create: {
      installationId: event.installation.id,
      repoFullName: event.repository.full_name,
      prNumber: event.pull_request.number,
      title: event.pull_request.title,
      authorLogin: getAuthorLogin(event.pull_request.user),
      status: "pending",
      baseBranch: event.pull_request.base.ref,
      headSha: event.pull_request.head.sha,
    },
  });
}
