-- CreateTable
CREATE TABLE "HeaderCategories" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "HeaderCategories_pkey" PRIMARY KEY ("id")
);
