import { StickyWrapper } from "@/components/Learn/StickyWrapper"
import { FeedWrapper } from "@/components/Learn/FeedWrapper"
import { Header } from "./Header"
import { UserProgress } from "@/components/Learn/UserProgress"
import { Unit } from "./unit"
import {  getCourseProgress, getLessonPercentage, getUnits, getUserProgress } from "@/db/queries"
import { redirect } from "next/navigation"
async function Learn() {
  const userProgressData= getUserProgress();
  const unitsData= getUnits();
  const courseProgressData = getCourseProgress();
  const lessonPercentageData= getLessonPercentage();
  const [userProgress, units, courseProgress, lessonPercentage]= await Promise.all([userProgressData, unitsData, courseProgressData, lessonPercentageData]);
  if (!userProgress || !userProgress.activeCourseId || !courseProgress){
    redirect("/courses")
  }
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress activeCourse={userProgress.activeCourse||{title:"NULL" , imageSrc:"/logo.svg"}} hearts={userProgress.hearts} points={userProgress.points} hasActiveSubscription={false}/>
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse?.title||"NULL"}/>
        {
          units.map((unit)=>(
            <div key={unit.unit_id} className="mb-10">
                <Unit id={unit.unit_id}
                order={unit.order ||0}
                title={unit.title ||""}
                description={unit.description ||""}
                lessons={unit.lessons||{}}
                activeLesson={courseProgress.activeLesson}
                activeLessonPercentage={lessonPercentage}
                />
            </div>
          ))
        }
      </FeedWrapper>
    </div>
  )
}

export default Learn