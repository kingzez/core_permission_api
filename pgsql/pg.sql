/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : PostgreSQL
 Source Server Version : 100005
 Source Host           : 127.0.0.1:5432
 Source Catalog        : sso-server
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 100005
 File Encoding         : 65001

 Date: 29/10/2018 23:46:45
*/


-- ----------------------------
-- Table structure for client
-- ----------------------------
DROP TABLE IF EXISTS "public"."client";
CREATE TABLE "public"."client" (
  "id" uuid NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "clientId" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "clientSecret" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "isTrusted" bool,
  "createdAt" int8,
  "updatedAt" int8
)
;
ALTER TABLE "public"."client" OWNER TO "w";

-- ----------------------------
-- Records of client
-- ----------------------------
BEGIN;
INSERT INTO "public"."client" VALUES ('728246e0-b165-4b46-8ccc-8f34784c2afd', 'xiaoyun', 'xiaoyun_id', 'xiaoyun_id', 't', 1536553504883, 1536553504884);
INSERT INTO "public"."client" VALUES ('b8a17925-a892-463b-ba4a-a4bf6a032164', 'rmk1', 'xiaoyun_id', 'xiaoyun_id', 't', 1536563512780, 1536563512780);
INSERT INTO "public"."client" VALUES ('0562a632-cde0-42b0-b115-25443dec1757', 'rmk', 'core_permission', 'core_permission', 't', 1536563486712, 1536563486713);
INSERT INTO "public"."client" VALUES ('39f92e04-1886-45a7-bb52-cdb4560e8e08', 'rmk11', 'rmk', 'rmk', 't', 1536655344722, 1536655344727);
COMMIT;

-- ----------------------------
-- Table structure for passport
-- ----------------------------
DROP TABLE IF EXISTS "public"."passport";
CREATE TABLE "public"."passport" (
  "id" uuid NOT NULL,
  "username" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "password" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "email" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "isDeleted" bool NOT NULL,
  "createdAt" int8,
  "updatedAt" int8
)
;
ALTER TABLE "public"."passport" OWNER TO "w";

-- ----------------------------
-- Records of passport
-- ----------------------------
BEGIN;
INSERT INTO "public"."passport" VALUES ('67ed0f32-ea92-417a-b88b-6f345f37315e', 'xiaoyun', '7f3dd1cc886da87a6ded1389701a140c', 'a@gmail.com', 'f', 1536553508926, 1536553508927);
INSERT INTO "public"."passport" VALUES ('c3b23e00-9d36-4a5e-9ca6-17e50c0e0d35', 'test', 'aa735574c10cdae10613435a1c6bcd2d', 'test@gmail.com', 'f', 1536564568564, 1536564568567);
INSERT INTO "public"."passport" VALUES ('251dd3ca-fe25-4500-a302-fead898cd034', 'admin', 'c62402fe51ff1741fc14c311fc1fcc5d', 'admin@gmail.com', 'f', 1538978573662, 1538978573664);
INSERT INTO "public"."passport" VALUES ('117c5442-592b-423d-8a0c-50af4b701d08', 'wangzezhi', '15dab537d36aaeed42454cc4c182f187', 'wangzezhi@gmail.com', 'f', 1539166415297, 1539166415300);
INSERT INTO "public"."passport" VALUES ('bc107291-134b-4ff4-87d4-7ac1d94a38de', '1', 'b82e0d66f43d9aa37b13d0f453864bde', '1ds@gmail.com', 'f', 1539169024961, 1539169024966);
COMMIT;

-- ----------------------------
-- Table structure for passport_client_rel
-- ----------------------------
DROP TABLE IF EXISTS "public"."passport_client_rel";
CREATE TABLE "public"."passport_client_rel" (
  "passportId" uuid NOT NULL,
  "clientId" uuid NOT NULL,
  "createdAt" int8,
  "updatedAt" int8
)
;
ALTER TABLE "public"."passport_client_rel" OWNER TO "w";

-- ----------------------------
-- Table structure for passport_client_role_rel
-- ----------------------------
DROP TABLE IF EXISTS "public"."passport_client_role_rel";
CREATE TABLE "public"."passport_client_role_rel" (
  "passportId" uuid NOT NULL,
  "clientId" uuid NOT NULL,
  "roleId" uuid NOT NULL,
  "createdAt" int8,
  "updatedAt" int8
)
;
ALTER TABLE "public"."passport_client_role_rel" OWNER TO "w";

-- ----------------------------
-- Table structure for passport_role_rel
-- ----------------------------
DROP TABLE IF EXISTS "public"."passport_role_rel";
CREATE TABLE "public"."passport_role_rel" (
  "passportId" uuid NOT NULL,
  "roleId" uuid NOT NULL,
  "createdAt" int8,
  "updatedAt" int8
)
;
ALTER TABLE "public"."passport_role_rel" OWNER TO "w";

-- ----------------------------
-- Records of passport_role_rel
-- ----------------------------
BEGIN;
INSERT INTO "public"."passport_role_rel" VALUES ('67ed0f32-ea92-417a-b88b-6f345f37315e', '0587c299-f3ce-4b88-85e4-191b58979724', 1536553576018, 1536553576019);
COMMIT;

-- ----------------------------
-- Table structure for permission
-- ----------------------------
DROP TABLE IF EXISTS "public"."permission";
CREATE TABLE "public"."permission" (
  "id" uuid NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "code" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "desc" varchar(255) COLLATE "pg_catalog"."default",
  "status" bool NOT NULL DEFAULT false,
  "createdAt" int8,
  "updatedAt" int8
)
;
ALTER TABLE "public"."permission" OWNER TO "w";

-- ----------------------------
-- Records of permission
-- ----------------------------
BEGIN;
INSERT INTO "public"."permission" VALUES ('30a3ca54-b72e-4d00-9e9d-f92c29b8f0b3', 'God_mode', 'God_mode', '上帝模式', 'f', 1536553548255, 1536553548256);
COMMIT;

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS "public"."role";
CREATE TABLE "public"."role" (
  "id" uuid NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "status" bool NOT NULL DEFAULT false,
  "isUsed" bool NOT NULL DEFAULT false,
  "children" varchar(255) COLLATE "pg_catalog"."default",
  "clientId" uuid NOT NULL,
  "createdAt" int8,
  "updatedAt" int8
)
;
ALTER TABLE "public"."role" OWNER TO "w";

-- ----------------------------
-- Records of role
-- ----------------------------
BEGIN;
INSERT INTO "public"."role" VALUES ('0587c299-f3ce-4b88-85e4-191b58979724', '超级管理员', 'f', 't', NULL, '728246e0-b165-4b46-8ccc-8f34784c2afd', 1536553543144, 1536553576044);
INSERT INTO "public"."role" VALUES ('6a87c7ac-4fec-4347-a718-a2dbfd8b0519', '管理员', 'f', 'f', NULL, '728246e0-b165-4b46-8ccc-8f34784c2afd', 1536562193399, 1536562193400);
INSERT INTO "public"."role" VALUES ('a2e143c0-4db8-4262-adf3-c4848c5818ee', '员', 'f', 'f', NULL, '728246e0-b165-4b46-8ccc-8f34784c2afd', 1536562200889, 1536562200889);
INSERT INTO "public"."role" VALUES ('d859ae76-02e1-47de-a22a-d6bdf33f7d96', '超级1管理员', 'f', 'f', NULL, 'b8a17925-a892-463b-ba4a-a4bf6a032164', 1536563570286, 1536563570286);
INSERT INTO "public"."role" VALUES ('ec2430c4-ba44-407d-85d5-b015069637a5', '超级12管理员', 'f', 'f', NULL, '0562a632-cde0-42b0-b115-25443dec1757', 1536563636143, 1536563636143);
INSERT INTO "public"."role" VALUES ('62d4d2a7-b1f1-4184-98b2-cfaeeee6c67e', '员', 'f', 'f', NULL, '0562a632-cde0-42b0-b115-25443dec1757', 1536564814967, 1536564814967);
COMMIT;

-- ----------------------------
-- Table structure for role_permission_rel
-- ----------------------------
DROP TABLE IF EXISTS "public"."role_permission_rel";
CREATE TABLE "public"."role_permission_rel" (
  "roleId" uuid NOT NULL,
  "permissionId" uuid NOT NULL,
  "createdAt" int8,
  "updatedAt" int8
)
;
ALTER TABLE "public"."role_permission_rel" OWNER TO "w";

-- ----------------------------
-- Primary Key structure for table client
-- ----------------------------
ALTER TABLE "public"."client" ADD CONSTRAINT "client_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table passport
-- ----------------------------
ALTER TABLE "public"."passport" ADD CONSTRAINT "passport_username_key" UNIQUE ("username");
ALTER TABLE "public"."passport" ADD CONSTRAINT "passport_email_key" UNIQUE ("email");

-- ----------------------------
-- Primary Key structure for table passport
-- ----------------------------
ALTER TABLE "public"."passport" ADD CONSTRAINT "passport_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table passport_client_rel
-- ----------------------------
ALTER TABLE "public"."passport_client_rel" ADD CONSTRAINT "passport_client_rel_pkey" PRIMARY KEY ("passportId", "clientId");

-- ----------------------------
-- Primary Key structure for table passport_client_role_rel
-- ----------------------------
ALTER TABLE "public"."passport_client_role_rel" ADD CONSTRAINT "passport_client_role_rel_pkey" PRIMARY KEY ("passportId", "clientId", "roleId");

-- ----------------------------
-- Primary Key structure for table passport_role_rel
-- ----------------------------
ALTER TABLE "public"."passport_role_rel" ADD CONSTRAINT "passport_role_rel_pkey" PRIMARY KEY ("passportId", "roleId");

-- ----------------------------
-- Uniques structure for table permission
-- ----------------------------
ALTER TABLE "public"."permission" ADD CONSTRAINT "permission_name_key" UNIQUE ("name");
ALTER TABLE "public"."permission" ADD CONSTRAINT "permission_code_key" UNIQUE ("code");

-- ----------------------------
-- Primary Key structure for table permission
-- ----------------------------
ALTER TABLE "public"."permission" ADD CONSTRAINT "permission_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table role
-- ----------------------------
ALTER TABLE "public"."role" ADD CONSTRAINT "role_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table role_permission_rel
-- ----------------------------
ALTER TABLE "public"."role_permission_rel" ADD CONSTRAINT "role_permission_rel_pkey" PRIMARY KEY ("roleId", "permissionId");

-- ----------------------------
-- Foreign Keys structure for table passport_client_rel
-- ----------------------------
ALTER TABLE "public"."passport_client_rel" ADD CONSTRAINT "passport_client_rel_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "public"."client" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."passport_client_rel" ADD CONSTRAINT "passport_client_rel_passportId_fkey" FOREIGN KEY ("passportId") REFERENCES "public"."passport" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table passport_client_role_rel
-- ----------------------------
ALTER TABLE "public"."passport_client_role_rel" ADD CONSTRAINT "passport_client_role_rel_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "public"."client" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION DEFERRABLE INITIALLY DEFERRED;
ALTER TABLE "public"."passport_client_role_rel" ADD CONSTRAINT "passport_client_role_rel_passportId_fkey" FOREIGN KEY ("passportId") REFERENCES "public"."passport" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION DEFERRABLE INITIALLY DEFERRED;
ALTER TABLE "public"."passport_client_role_rel" ADD CONSTRAINT "passport_client_role_rel_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."role" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION DEFERRABLE INITIALLY DEFERRED;

-- ----------------------------
-- Foreign Keys structure for table passport_role_rel
-- ----------------------------
ALTER TABLE "public"."passport_role_rel" ADD CONSTRAINT "passport_role_rel_passportId_fkey" FOREIGN KEY ("passportId") REFERENCES "public"."passport" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."passport_role_rel" ADD CONSTRAINT "passport_role_rel_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."role" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table role
-- ----------------------------
ALTER TABLE "public"."role" ADD CONSTRAINT "role_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "public"."client" ("id") ON DELETE CASCADE ON UPDATE CASCADE DEFERRABLE INITIALLY DEFERRED;

-- ----------------------------
-- Foreign Keys structure for table role_permission_rel
-- ----------------------------
ALTER TABLE "public"."role_permission_rel" ADD CONSTRAINT "role_permission_rel_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "public"."permission" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."role_permission_rel" ADD CONSTRAINT "role_permission_rel_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."role" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
