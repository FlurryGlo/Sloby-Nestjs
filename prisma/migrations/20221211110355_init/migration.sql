-- CreateTable
CREATE TABLE "SiteInfo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "sub_title" TEXT NOT NULL,
    "button_title_docs" TEXT NOT NULL,
    "button_title_get_started" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "SiteInfo_pkey" PRIMARY KEY ("id")
);
