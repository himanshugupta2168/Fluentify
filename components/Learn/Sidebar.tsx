import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./SidebarItem";
import {ClerkLoading, ClerkLoaded, UserButton} from "@clerk/nextjs"
import { Loader } from "lucide-react"
import { ModeToggle } from "../ui/modeToggler";
type Props = {
  className?: string;
};
export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-screen lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
        <Link href="/learn">
            <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                <Image src="/logo.svg" height={40} width={40} alt="Mascot" />
                <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
                Fluentify
                </h1>
            </div>
      </Link>
      <div className=" flex flex-col gap-y-2 flex-1">
        <SidebarItem label="learn" iconSource="/img/learn.svg" href="/learn"/>
        <SidebarItem label="leaderboard" iconSource="/img/leaderboard.svg" href="/leaderboard"/>
        <SidebarItem label="quests" iconSource="/img/quests.svg" href="/quests"/>
        <SidebarItem label="shop" iconSource="/img/shop.svg" href="/shop"/>
        </div>
        <div>
        <div className="p-4 flex justify-between">
                <ClerkLoading>
                    <Loader className="h-5 w-5  text-muted-foreground animate-spin"/>
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/"/>
                </ClerkLoaded>
                  <ModeToggle/>
            </div>
        </div>
    </div>
  );
};


