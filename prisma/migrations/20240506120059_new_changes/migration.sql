-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_activeCourseId_fkey" FOREIGN KEY ("activeCourseId") REFERENCES "courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;
