import { ToggleTheme } from "@/components/lightswind/toggle-theme";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ToggleTheme animationType="swipe-right" />
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#fafafa] font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between px-16 py-32 bg-white dark:bg-black sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />

          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              To get started, edit the page.tsx file.
            </h1>

            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Looking for a starting point or more instructions? Head over to{" "}
              <a
                href="https://vercel.com/templates"
                className="font-medium text-black dark:text-zinc-50"
              >
                Templates
              </a>{" "}
              or the{" "}
              <a
                href="https://nextjs.org/learn"
                className="font-medium text-black dark:text-zinc-50"
              >
                Learning Center
              </a>
              .
            </p>
          </div>

          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <a
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            >
              Deploy Now
            </a>

            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/10 px-5 transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10 md:w-[158px]"
            >
              Documentation
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
