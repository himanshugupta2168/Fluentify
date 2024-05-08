import Image from "next/image";
import { ClerkLoaded, SignedOut, SignInButton, SignUpButton, SignedIn,} from "@clerk/nextjs";
import { Button } from "../ui/button";
import { Globe } from "lucide-react";
import Link from "next/link";


export const Hero = () => {
  return (
    <section className="relative min-h-1/2 flex flex-col mt-20">
      <div className="px-10 lg:px-20 rounded-full pt-10 shadow-2xl shadow-transparent">
        <h1 className="sm:text-[25px] md:text-[60px] lg:text-[80px] font-extrabold">
          Master Any{" "}
          <span className="border px-4 py-2 rounded-full border-pink-400 bg-pink-200 text-pink-400 dark:text-black dark:bg-pink-300">
            Language
          </span>
        </h1>
        <h1 className="text-center py-4 sm:text-[25px] md:text-[60px] lg:text-[80px] font-extrabold">
          Learn{" "}
          <span>
            <Globe className="hover:animate-spin  inline w-5 h-5 md:w-20 md:h-20  bg-sky-200 text-blue-500 rounded-full" />
            n
          </span>{" "}
          the Go.
        </h1>
      </div>
      <div className="w-[40px]h-[40px] lg:w-[100px] lg:h-[100px] bg-pink-300 rounded-xl absolute -z-10  flex justify-center items-center -rotate-12">
        <Image src="./img/lang.svg" alt="Language" width={60} height={60} />
      </div>
      <div className="w-[40px]h-[40px] lg:w-[100px] lg:h-[100px] bg-pink-300 rounded-xl absolute -z-10   right-0  flex justify-center items-center -rotate-12">
        <Image src="./img/bulb.svg" alt="Language" width={60} height={60} />
      </div>
      <div className="hidden  w-[40px]h-[40px] lg:w-[100px] lg:h-[100px] bg-blue-300 rounded-xl absolute -z-10  translate-y-[300px]  md:flex justify-center items-center -rotate-12">
        <Image src="./img/reward.svg" alt="Language" width={60} height={60} />
      </div>
      <div className="hidden w-[40px]h-[40px] lg:w-[100px] lg:h-[100px] bg-blue-300 rounded-xl absolute -z-10 translate-y-[300px] right-0  md:flex justify-center items-center -rotate-12">
        <Image src="./img/voice.svg" alt="Language" width={60} height={60} />
      </div>
      <div className="flex flex-col lg:w-1/2 mx-auto gap-y-5">
        <ClerkLoaded>
            <SignedIn>
              <Link href="/learn" className="w-full border "><Button size={"lg"} variant={"secondary"} className="w-full">Continue Learning</Button></Link>
            </SignedIn>
            <SignedOut>
            <SignUpButton mode="modal" fallbackRedirectUrl={"/learn"}>
            <Button size={"lg"} variant={"secondary"}> Create An Account</Button>
        </SignUpButton>
        <SignInButton mode="modal" fallbackRedirectUrl={"/learn"}>
            <Button size={"lg"} variant={"primaryOutline"}> Already Have an Account</Button>
        </SignInButton>
            </SignedOut>
        </ClerkLoaded>
      </div>
    </section>
  );
};
