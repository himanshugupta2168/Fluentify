"use client"

import { useState } from "react"
import { Header } from "./Header"
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
    return (
        <>
            <Header hearts={hearts} percentage={percentage} hasActiveSubscription = {!!userSubscription?.isActive}/>
        </>
    )
}