"use client";

import * as React from "react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  DashboardSquare01Icon,
  Menu01Icon,
  ChartHistogramIcon,
  Folder01Icon,
  UserGroupIcon,
  Camera01Icon,
  File01Icon,
  Settings05Icon,
  HelpCircleIcon,
  SearchIcon,
  Database01Icon,
  Analytics01Icon,
  CommandIcon,
  PullRequest,
  Github,
  Settings,
  RepositoryIcon,
  RepositoryFreeIcons,
} from "@hugeicons/core-free-icons";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { DASHBOARD_ROUTES } from "@/features/dashboard/lib/routes";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Overview",
      url: DASHBOARD_ROUTES.overview,
      icon: <HugeiconsIcon icon={DashboardSquare01Icon} strokeWidth={2} />,
    },
    {
      title: "Repositories",
      url: DASHBOARD_ROUTES.repo,
      icon: <HugeiconsIcon icon={RepositoryFreeIcons} strokeWidth={2} />,
    },
    {
      title: "Pull Requests",
      url: DASHBOARD_ROUTES.pullRequest,
      icon: <HugeiconsIcon icon={PullRequest} strokeWidth={2} />,
    },
    {
      title: "Github App",
      url: DASHBOARD_ROUTES.github,
      icon: <HugeiconsIcon icon={Github} strokeWidth={2} />,
    },
    {
      title: "Settings",
      url: DASHBOARD_ROUTES.settings,
      icon: <HugeiconsIcon icon={Settings} strokeWidth={2} />,
    },
  ],
};
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session, isPending } = authClient.useSession();
  if (!isPending) {
    data.user.name = session!.user.name;
    data.user.email = session!.user.email;
    data.user.avatar = session!.user.image as string;
  }
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              render={<a href="#" />}
            >
              <Image
                src={"/code-fox-logo.svg"}
                alt="logo"
                width={40}
                height={40}
              ></Image>
              <span className="text-base font-semibold">Code Fox</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
