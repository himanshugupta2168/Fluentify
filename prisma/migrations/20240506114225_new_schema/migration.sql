-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "userName" TEXT NOT NULL DEFAULT 'User',
    "userImageSrc" TEXT NOT NULL DEFAULT '/logo.svg',
    "hearts" INTEGER NOT NULL DEFAULT 5,
    "points" INTEGER NOT NULL DEFAULT 0,
    "activeCourseId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "courses" (
    "course_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "imageSrc" TEXT NOT NULL,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("course_id")
);

-- CreateTable
CREATE TABLE "userPurchasedCourses" (
    "user_id" TEXT NOT NULL,
    "course_id" INTEGER NOT NULL,

    CONSTRAINT "userPurchasedCourses_pkey" PRIMARY KEY ("user_id","course_id")
);

-- AddForeignKey
ALTER TABLE "userPurchasedCourses" ADD CONSTRAINT "userPurchasedCourses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userPurchasedCourses" ADD CONSTRAINT "userPurchasedCourses_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;
