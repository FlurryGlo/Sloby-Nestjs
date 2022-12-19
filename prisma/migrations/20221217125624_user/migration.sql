/*
  Warnings:

  - You are about to drop the `NavbarCategories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "NavbarCategories";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email_address" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
