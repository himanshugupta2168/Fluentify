"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useExitModal } from "@/store/use-exit-modal";
export const ExitModal = () => {
  const router = useRouter();
  const { isOpen, close } = useExitModal();
  const [isClient, setisClient] = useState(false);
  useEffect(() => setisClient(true), []);
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image
              src="./img/mascot_sad.svg"
              alt="sad-mascot"
              height={80}
              width={80}
            />
          </div>
          <DialogTitle className=" text-center font-bold text-2xl">Wait , don&apos;t go!</DialogTitle>
          <DialogDescription  className="text-center text-base">You&apos;re about to leave the lesson. Are you sure?</DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
            <div className="flex flex-col gap-y-4 w-full">
                <Button variant="primary" className="w-full" size="lg" onClick={close}>Keep Learning</Button>
                <Button variant="dangerOutline" className="w-full" size="lg" onClick={()=>{
                    close();
                    router.push("/learn")
                }}>End Session</Button>
            </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
