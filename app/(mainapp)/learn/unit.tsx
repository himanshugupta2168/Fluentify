import { UnitBanner } from "./unitBanner"
import { LessonButton } from "./lessonButton"
type Props={
    id:number, 
    order:number,
    title:string
    description:string, 
    lessons:any[], 
    activeLesson:any, 
    activeLessonPercentage:number
}
export const Unit =({id, order, title, description, lessons, activeLesson,activeLessonPercentage }:Props)=>{
    return(
    <>
        <UnitBanner title={title} description={description}/>
        <div className=" flex items-center flex-col relative">
            {
                lessons.map((lesson, index)=>{
                    const isCurrent = lesson.lesson_id===activeLesson?.lesson_id;
                    const isLocked = !lesson.completed&& !isCurrent;
                    return <LessonButton key={lesson.lesson_id} id={lesson.lesson_id} index={index} totalCount={lessons.length-1} current={ isCurrent} locked={isLocked} percentage={activeLessonPercentage}/> 
                })
            }
        </div>
    </>
    )
}