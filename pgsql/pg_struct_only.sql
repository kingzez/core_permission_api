/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : PostgreSQL
 Source Server Version : 100004
 Source Host           : 127.0.0.1:5432
 Source Catalog        : sso-server
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 100004
 File Encoding         : 65001

 Date: 14/08/2018 10:25:41
*/


-- ----------------------------
-- Table structure for Client
-- ----------------------------
DROP TABLE IF EXISTS "public"."Client";
CREATE TABLE "public"."Client" (
  "id" uuid NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "clientId" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "clientSecret" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "isTrusted" bool,
  "createdAt" int8,
  "updatedAt" int8
)
;
ALTER TABLE "public"."Client" OWNER TO "w";

-- ----------------------------
-- Table structure for Passport
-- ----------------------------
DROP TABLE IF EXISTS "public"."Passport";
CREATE TABLE "public"."Passport" (
  "id" uuid NOT NULL,
  "username" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "password" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "email" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "createdAt" int8,
  "updatedAt" int8,
  "isDelete" bool NOT NULL
)
;
ALTER TABLE "public"."Passport" OWNER TO "w";

-- ----------------------------
-- Table structure for Permission
-- ----------------------------
DROP TABLE IF EXISTS "public"."Permission";
CREATE TABLE "public"."Permission" (
  "id" uuid NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "code" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "desc" varchar(255) COLLATE "pg_catalog"."default",
  "status" bool,
  "createdAt" int8 NOT NULL,
  "updatedAt" int8
)
;
ALTER TABLE "public"."Permission" OWNER TO "w";

-- ----------------------------
-- Table structure for Role
-- ----------------------------
DROP TABLE IF EXISTS "public"."Role";
CREATE TABLE "public"."Role" (
  "id" uuid NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "status" bool NOT NULL DEFAULT false,
  "isUsed" bool NOT NULL DEFAULT false,
  "parent" varchar(255) COLLATE "pg_catalog"."default",
  "children" varchar(255) COLLATE "pg_catalog"."default",
  "createdAt" int8,
  "updatedAt" int8
)
;
ALTER TABLE "public"."Role" OWNER TO "w";

-- ----------------------------
-- Primary Key structure for table Client
-- ----------------------------
ALTER TABLE "public"."Client" ADD CONSTRAINT "Client_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table Passport
-- ----------------------------
ALTER TABLE "public"."Passport" ADD CONSTRAINT "Passports_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table Permission
-- ----------------------------
ALTER TABLE "public"."Permission" ADD CONSTRAINT "Permission_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table Role
-- ----------------------------
ALTER TABLE "public"."Role" ADD CONSTRAINT "Role_name_key" UNIQUE ("name");

-- ----------------------------
-- Primary Key structure for table Role
-- ----------------------------
ALTER TABLE "public"."Role" ADD CONSTRAINT "Role_pkey" PRIMARY KEY ("id");
