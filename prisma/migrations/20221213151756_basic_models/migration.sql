-- CreateTable
CREATE TABLE "NavbarCategories" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "NavbarCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriesAccounts" (
    "id" SERIAL NOT NULL,
    "login_title" TEXT NOT NULL,
    "register_title" TEXT NOT NULL,

    CONSTRAINT "CategoriesAccounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DashboardMenuBar" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "DashboardMenuBar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SlobyTools" (
    "id" SERIAL NOT NULL,
    "tool_name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "tool" TEXT NOT NULL,

    CONSTRAINT "SlobyTools_pkey" PRIMARY KEY ("id")
);
