"use server"

import { getCourseById, getUserProgress } from "@/db/queries";
import { auth, currentUser } from "@clerk/nextjs/server"
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";



export const upsertUserProgress= async(courseId:number)=>{
    const {userId} = await auth();
    const user = await currentUser();
    // console.log(user);
    if (!userId || !user){
        throw new Error("Unauthorized");
    }

    const course = await getCourseById(courseId);
    if (!course){
        throw new Error("Course not found");
    }
    // throw new Error("test")
    // if (!course.units.length || !course.units[0].length){
    //     throw new Error ("course id empty ");
    // }
    const existingUserProgress = await getUserProgress();
    if (existingUserProgress){
        await prisma.user.update({
            where:{
                user_id:existingUserProgress.user_id
            },
            data:{
                activeCourseId:courseId, 
                userName:user.firstName || "User",
                userImageSrc:user.imageUrl|| "/logo.svg",

            }
        })
        revalidatePath("/courses");
        revalidatePath("/learn");
        redirect("/learn");

    }
    else{
        await prisma.user.create({
            data:{
                user_id:user.id,
                activeCourseId:courseId, 
                userName:user.firstName || "User", 
                userImageSrc:user.imageUrl||"/logo.svg",
            }
        });

    }
}