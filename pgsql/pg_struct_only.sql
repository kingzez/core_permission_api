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

 Date: 29/10/2018 23:47:04
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
