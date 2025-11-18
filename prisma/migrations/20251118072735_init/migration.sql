-- CreateTable
CREATE TABLE "public"."memoryQuiz" (
    "id" SERIAL NOT NULL,
    "answer" VARCHAR(255) NOT NULL,
    "imgUnoUrl" VARCHAR(2048) NOT NULL,
    "imgDosUrl" VARCHAR(2048) NOT NULL,
    "imgTresUrl" VARCHAR(2048) NOT NULL,
    "imgCuatroUrl" VARCHAR(2048) NOT NULL,

    CONSTRAINT "memoryQuiz_pkey" PRIMARY KEY ("id")
);
