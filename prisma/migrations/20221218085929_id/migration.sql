-- AlterTable
CREATE SEQUENCE user_user_id_seq;
ALTER TABLE "User" ALTER COLUMN "user_id" SET DEFAULT nextval('user_user_id_seq');
ALTER SEQUENCE user_user_id_seq OWNED BY "User"."user_id";
