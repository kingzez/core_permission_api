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

 Date: 10/08/2018 11:05:56
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
-- Records of Client
-- ----------------------------
BEGIN;
INSERT INTO "public"."Client" VALUES ('2cae41d9-87b0-42bc-925a-33ddf57fa08a', 'rmk', 'rmk', 'rmk', 't', 1533467344198, 1533467344207);
COMMIT;

-- ----------------------------
-- Table structure for Passport
-- ----------------------------
DROP TABLE IF EXISTS "public"."Passport";
CREATE TABLE "public"."Passport" (
  "id" uuid NOT NULL,
  "username" varchar(255) COLLATE "pg_catalog"."default",
  "password" varchar(255) COLLATE "pg_catalog"."default",
  "email" varchar(255) COLLATE "pg_catalog"."default",
  "createdAt" int8,
  "updatedAt" int8,
  "userId" uuid
)
;
ALTER TABLE "public"."Passport" OWNER TO "w";

-- ----------------------------
-- Records of Passport
-- ----------------------------
BEGIN;
INSERT INTO "public"."Passport" VALUES ('c4f0a1b9-672c-4363-8b1a-f796d7464cfc', 'admin', 'admin', 'admin@xiaoyun.com', 1533467344198, 1533467344337, 'cd6a0643-30a3-4be6-b279-554db7ca6c4a');
COMMIT;

-- ----------------------------
-- Primary Key structure for table Client
-- ----------------------------
ALTER TABLE "public"."Client" ADD CONSTRAINT "Client_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table Passport
-- ----------------------------
ALTER TABLE "public"."Passport" ADD CONSTRAINT "Passports_pkey" PRIMARY KEY ("id");
