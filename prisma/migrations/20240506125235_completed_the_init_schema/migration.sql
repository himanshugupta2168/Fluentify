-- CreateEnum
CREATE TYPE "challengeType" AS ENUM ('SELECT', 'ASSIST');

-- CreateTable
CREATE TABLE "Units" (
    "unit_id" SERIAL NOT NULL,
    "course_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Lesson" (
    "lesson_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "unit_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Challenges" (
    "challenge_id" SERIAL NOT NULL,
    "lesson_id" INTEGER NOT NULL,
    "type" "challengeType" NOT NULL,
    "question" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "challengeOptions" (
    "challengeOption_id" SERIAL NOT NULL,
    "challenge_id" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "correct" BOOLEAN NOT NULL DEFAULT false,
    "imageSrc" TEXT NOT NULL,
    "audioSrc" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ChallengeProgress" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "challengeId" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ChallengeProgress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Units_unit_id_key" ON "Units"("unit_id");

-- CreateIndex
CREATE UNIQUE INDEX "Lesson_lesson_id_key" ON "Lesson"("lesson_id");

-- CreateIndex
CREATE UNIQUE INDEX "Challenges_challenge_id_key" ON "Challenges"("challenge_id");

-- CreateIndex
CREATE UNIQUE INDEX "challengeOptions_challengeOption_id_key" ON "challengeOptions"("challengeOption_id");

-- CreateIndex
CREATE UNIQUE INDEX "ChallengeProgress_userId_challengeId_key" ON "ChallengeProgress"("userId", "challengeId");

-- AddForeignKey
ALTER TABLE "Units" ADD CONSTRAINT "Units_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_unit_id_fkey" FOREIGN KEY ("unit_id") REFERENCES "Units"("unit_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Challenges" ADD CONSTRAINT "Challenges_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "Lesson"("lesson_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "challengeOptions" ADD CONSTRAINT "challengeOptions_challenge_id_fkey" FOREIGN KEY ("challenge_id") REFERENCES "Challenges"("challenge_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChallengeProgress" ADD CONSTRAINT "ChallengeProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChallengeProgress" ADD CONSTRAINT "ChallengeProgress_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "Challenges"("challenge_id") ON DELETE RESTRICT ON UPDATE CASCADE;
