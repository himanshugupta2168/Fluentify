const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const handle = async () => {
    try {
        await prisma.courses.create({
            data: {
                title: "Korean",
                imageSrc: "/flags/kr.svg"
            }
        });
        console.log("Course created successfully.");
    } catch (error) {
        console.error("Error creating course:", error);
    } finally {
        await prisma.$disconnect(); // Disconnect from the Prisma Client
    }
};

handle();
