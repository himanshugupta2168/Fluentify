import { cn } from "@/lib/utils"
import Image from "next/image"
type Props={
    key:number;
    id:number;
    text:string;
    imageSrc:string | null;
    shortcut:string | null ;
    audioSrc:string | null;
    selected?:boolean;
    onClick:()=>void;
    disabled?:boolean;
    status?:"correct" | "wrong" | "none";
    type:"ASSIST" | "SELECT"
}
export const Card =({id, text, imageSrc, shortcut, audioSrc, selected, onClick, disabled, status, type}:Props)=>{
    return(
        <div onClick={()=>{}} className={cn("h-full border-2 rounded-xl border-b-4 hover:bg-black/5 dark:hover:bg-slate-700 p-4  lg:p-6 cursor-pointer active:border-b-2",selected&&"border-sky-300  bg-sky-100 dark:bg-sky-500 hover:bg-sky-100 dark:hover:bg-sky-500", 
        selected && status==="correct" &&"border-green-300 dark:border-green-600 bg-green-100 dark:bg-green-500 hover:bg-green-100 dark:hover:bg-green-500",
        selected && status==="wrong" &&" border-rose-300 dark:border-rose-600 dark:bg-rose-500  bg-rose-100 hover:bg-rose-100 dark:hover:bg-rose-500",
        disabled&&"pointer-events-none hover:bg-white dark:hover:bg-[#030816]",
        type==="ASSIST" && "lg:p-3 w-full "
        )} >
            {
                imageSrc &&<div className="relative aspect-square mb-4 max-h-[80px] lg:max-h-[150px] w-full"><Image src={imageSrc} fill alt={text}/></div>
            }
            <div className={cn("flex items-center justify-between", type==="ASSIST"&&"flex-row-reverse")}>
                {type==="ASSIST" && <div/>}
                <p className={"text-neutral-600  dark:text-slate-400 text-sm lg:text-base "}>{text}</p>
                <div className={cn("lg:w-[30px] lg:h-[30px] w-[20px] h-[20px] border-2 flex items-center justify-center rounded-lg text-neutral-400 lg:text-[15px] text-sm font-semibold")}>{shortcut}</div>
            </div>
        </div>
    )
}