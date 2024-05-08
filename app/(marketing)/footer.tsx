import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
export  const Footer= ()=>{
    return(
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <h3>&#169; 2024 -- Made with ❤️ by <Link href="https://github.com/himanshugupta2168" className="underline text-sky-400">Himanshu Gupta</Link>. All rights reserved.</h3>
                <Button >
                    <Image src="/next.svg" width={40} height={40} alt="technology"></Image>
                </Button>
            </div>
        </footer>
    );
};