"use client"

import { useState } from "react"
import { Header } from "./Header"
import { QuestionBubble } from "./question-bubble"
import { Challenge } from "./challenge"
type Props={
    initialPercentage:number, 
    initialHearts :number, 
    initialLessonId:number , 
    initialLessonChallenges:any [], 
    userSubscription :any //replace with subscription 
}
export const Quiz = ({initialHearts, initialLessonChallenges, initialLessonId,initialPercentage, userSubscription}:Props)=>{
    const [hearts, setHearts]= useState<number>(initialHearts);
    const [percentage,setPercentage]= useState<number> ( initialPercentage)
    const [challenges]= useState(initialLessonChallenges)
    const[activeindex, setActiveIndex]= useState(()=>{
        const uncompletedIndex=challenges.findIndex((challenge)=>!challenge.completed);
        return uncompletedIndex===-1?0:uncompletedIndex;
    })
    const challenge = challenges[activeindex];
    const options = challenge?.options || [];
    const title = challenge.type==='ASSIST'?'Select the correct meaning':challenge.question;
    // console.log(challenge);
    return (
        <>
            <Header hearts={hearts} percentage={percentage} hasActiveSubscription = {!!userSubscription?.isActive}/>
            <div className="flex-1 ">
                <div className="h-screen flex items-center justify-center">
                    <div className="lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0  flex flex-col gap-y-12">
                            <h1 className=" text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700 dark:text-neutral-200">{title}</h1>
                            <div>
                                {
                                    challenge.type==="ASSIST"&&(
                                        <QuestionBubble question={challenge.question}/>
                                    )
                                }
                                <Challenge options={options} onSelect={()=>{}} status="none" selectedOption={undefined} disabled={false} type ={challenge.type}/>
                            </div>
                    </div>
                </div>

            </div>
        </>
    )
}