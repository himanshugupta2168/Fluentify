import { cn } from "@/lib/utils"
import { Card } from "./card"
type Props={
    options:{
        challengeOption_id:number;
        challenge_id:number;
        text:string;
        correct:boolean;
        imageSrc:string;
        audioSrc:string
    }[], 
    onSelect:(id:number)=>void;
    status:"correct" | "wrong" | "none";
    selectedOption?:number;
    disabled:boolean
    type:"ASSIST" | "SELECT"
}

export const Challenge=({options, onSelect, status, selectedOption, disabled, type}:Props)=>{
    return(
        <div className={cn("grid gap-2",type==="ASSIST"&&"grid-cols-1", type==="SELECT" && "grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]" )}>
            {
                options.map((option, i)=>(
                    <Card 
                    key= {option.challengeOption_id} 
                    id={option.challengeOption_id} 
                    text={option.text} 
                    imageSrc= {option.imageSrc} 
                    audioSrc={option.audioSrc} 
                    shortcut={`${i+1}`}
                    selected={true || selectedOption===option.challengeOption_id}
                    onClick={()=>onSelect(option.challengeOption_id)}
                    status={status}
                    disabled={disabled}
                    type={type}
                    />
                ))
            }
        </div>
    )
}