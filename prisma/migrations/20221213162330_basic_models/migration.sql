-- CreateTable
CREATE TABLE "UsersLogin" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "forgot_password" TEXT NOT NULL,
    "small_tag" TEXT NOT NULL,

    CONSTRAINT "UsersLogin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersCreateAccount" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "optional_waiting" TEXT NOT NULL,
    "forgot_password" TEXT NOT NULL,
    "button_title" TEXT NOT NULL,
    "small_tag" TEXT NOT NULL,

    CONSTRAINT "UsersCreateAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Footer" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "palceholder" TEXT NOT NULL,
    "items" TEXT[],
    "optional" TEXT[],
    "input" BOOLEAN NOT NULL,
    "icons" TEXT[],
    "copyright" TEXT NOT NULL,
    "news_letter_description" TEXT NOT NULL,
    "button" TEXT NOT NULL,

    CONSTRAINT "Footer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeclareSlobyTools" (
    "id" SERIAL NOT NULL,
    "tool_name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "tool" TEXT NOT NULL,

    CONSTRAINT "DeclareSlobyTools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SlobyMenuBar" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "icons" TEXT NOT NULL,

    CONSTRAINT "SlobyMenuBar_pkey" PRIMARY KEY ("id")
);
