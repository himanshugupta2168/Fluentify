"use client"
import { upsertUserProgress } from "@/actions/userProgress"
import { Card } from "@/components/courses/Card"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { toast } from "sonner"
type Props={
    courses:{
        course_id:number, 
        title:string, 
        imageSrc:string,
    }[], 
    activeCourseId:number
}
export const List =({courses, activeCourseId}:Props)=>{
    const router =useRouter();
    const [pending , startTransition]= useTransition()
    const onClick=(id:number)=>{
        if (pending) return ;
        if(id === activeCourseId){
            return router.push("/learn");
        }
        startTransition(()=>{
            upsertUserProgress(id).catch(()=> toast("Something went Wrong"))
        });
    }
    return (
        <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
            {
                courses.map((course)=>(<Card key={course.course_id} title={course.title} id={course.course_id} imageSrc={course.imageSrc} onclick={onClick} disabled={pending} active={course.course_id === activeCourseId}/>))
            }
        </div>
    )
}