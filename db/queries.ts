import { cache } from "react";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { isNull } from "util";

export const getCourses=cache(async()=>{
    const data = await prisma.courses.findMany({
        select:{
            course_id:true,
            imageSrc:true, 
            title:true,
       },
       orderBy:{
        course_id:"asc"
       }
    });
    return data ;
})


export const getUserProgress = cache(async()=>{
    const {userId} = await auth();
    // console.log(userId);
    if (!userId){
        return null;
    }
    else{
        const data  = await prisma.user.findFirst({
            where:{
                user_id:userId
            },
            select:{
                user_id:true,
                hearts:true,
                userName:true, 
                points:true, 
                userImageSrc:true,
                activeCourseId:true,
                activeCourse:{
                    select:{
                        title:true, 
                        imageSrc:true,
                    }
                }
            }
        })
        // console.log(data);
        return data;
    }
})


export const getCourseById = cache(async(courseId:number)=>{
    const course = await prisma.courses.findFirst({
        where:{
            course_id:courseId
        }
    })
    if (!course){
        return null;
    }
    else{
        return  course;
    }
})

//Todo  order it on the basis of order 
export const getUnits=cache(async()=>{
    const userProgress = await getUserProgress();
    if (! userProgress?.user_id || !userProgress?.activeCourseId){
        return [];
    }
    const data = await prisma.units.findMany({
        where:{
            course_id:userProgress.activeCourseId
        },
        select:{
            title:true, 
            description:true, 
            unit_id:true,
            order:true,
            lessons:{
                select:{
                    lesson_id:true,
                    title:true,
                    description:true, 
                    order:true,
                    challenges:{
                        select:{
                            question:true, 
                            type:true, 
                            order:true, 
                            options:{
                                select:{
                                    challenge_id:true,
                                    text:true, 
                                    correct:true,
                                    audioSrc:true, 
                                    imageSrc:true,      
                                },
                            },
                            challengeProgress:{
                                where:{
                                    userId:userProgress.user_id, 
                                    completed:true,
                                },
                                include:{
                                    challenge:true,
                                }
                            }
                        }, 
                        orderBy:{
                            order:"asc"
                        }
                    }
                },
                orderBy:{
                    order:"asc"
                }
            }

        },
        orderBy:{
            order:"asc"
        }
    })
    const normalisedData = data.map((unit)=>{
        const lessonsWithCompletedStatus = unit.lessons.map((lesson)=>{
            if (lesson.challenges.length===0){
                return{...lesson, completed:false}
            }
            const allcompletedChallenges=lesson.challenges.every((challenge)=>
                {
                    return challenge.challengeProgress&& challenge.challengeProgress.length>0 && challenge.challengeProgress.every((progress)=>progress.completed)
            });
            return {...lesson, completed:allcompletedChallenges}
        })
        return{...unit, lessons: lessonsWithCompletedStatus}
    })
    return normalisedData;
});


export const getCourseProgress=cache(async()=>{
    const {userId}= await auth();
    const userProgress= await getUserProgress();
    if (!userId || !userProgress?.activeCourseId) return null;
    const unitsInActiveCourse = await prisma.units.findMany({
        where:{
            course_id:userProgress?.activeCourseId
        },
        orderBy:{
            order:"asc",
        }, 
        select:{
            lessons:{
                select:{
                    title:true, 
                    description:true, 
                    lesson_id:true,
                    challenges:{
                        select:{
                            options:true, 
                            question:true, 
                            challengeProgress:{
                                where:{
                                    userId:userId
                                },
                                select:{
                                    completed:true,
                                }
                            }
                        }, 
                        orderBy:{
                            order:"asc",
                        }
                    }
                },
                orderBy:{
                    order:"asc"
                }
            }
        }
    });
    const firstUncompletedLesson = unitsInActiveCourse.flatMap((unit)=>unit.lessons)
    .find((lesson)=>{
        return lesson.challenges.some((challenge)=>{
            return !challenge.challengeProgress 
            || challenge.challengeProgress.length===0 
            || challenge.challengeProgress.some((progress)=>progress.completed===false);
        })
    })
    return {
        activeLesson :firstUncompletedLesson, 
        activeLessonId : firstUncompletedLesson?.lesson_id,
    }
});


export const getLesson = cache(async(id?:number)=>{
    const {userId}= await auth();
    if(!userId) return null;
    const courseProgress= await getCourseProgress();
    const lessonId = id ||courseProgress?.activeLessonId;
    if (!lessonId){
        return null;
    }
    const data = await prisma.lesson.findFirst({
        where:{
            lesson_id:lessonId
        },
        select:{
            challenges:{
                select:{
                    question:true, 
                    options:true, 
                    challenge_id:true,
                    type:true,  
                    challengeProgress:{
                        where:{
                            userId:userId
                        }, 
                        select:{
                            challenge:true,
                            completed:true,

                        }
                    }
                },
                orderBy:{
                    order:"asc"
                }
            },
            description:true,
            lesson_id:true,
            title:true, 
            unit_id:true, 
            order:true
        },
        orderBy:{
            order:"asc"
        }
    });
    if (!data || !data.challenges) return null;
    const normalisedChallenges= data.challenges.map((challenge)=>{
        const completed= challenge.challengeProgress && challenge.challengeProgress.length>0 &&challenge.challengeProgress.every((progress)=> progress.completed)
        return {...challenge, completed:completed};
    })
    return {...data, challenges:normalisedChallenges};
})

export const getLessonPercentage = cache(async()=>{
    const courseProgress= await getCourseProgress();
    if (!courseProgress || courseProgress.activeLessonId) return 0;
    const lesson = await getLesson(courseProgress.activeLessonId);
    if (!lesson)return 0;
    const completedChallenges= lesson.challenges.filter((challenge)=>challenge.completed);
    const percentage = Math.round((completedChallenges.length/lesson.challenges.length)*100);
    return percentage;
})