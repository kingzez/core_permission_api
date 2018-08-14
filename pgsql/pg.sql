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

 Date: 14/08/2018 10:25:07
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
INSERT INTO "public"."Client" VALUES ('ddaa155c-e528-42d3-9bc1-e66fdd125580', 'rmk', 'rmk', 'rmk', 't', 1533198354481, 1533198354487);
INSERT INTO "public"."Client" VALUES ('272474b4-2cd3-4107-bbe5-244427dc4e79', 'rmk', 'rmk', 'rmk', 't', 1533200688714, 1533200688719);
INSERT INTO "public"."Client" VALUES ('971dec6e-8b5a-4d63-860a-2b1ce7c52994', 'rmk', 'rmk', 'rmk', 't', 1533200750273, 1533200750278);
INSERT INTO "public"."Client" VALUES ('73d2709d-7a35-4d7b-9dcf-8aaec25ce64f', 'rmk', 'rmk', 'rmk', 't', 1533202332051, 1533202332058);
INSERT INTO "public"."Client" VALUES ('cb109c1f-3e9f-4dfd-b870-fff04b96577c', 'rmk', 'rmk', 'rmk', 't', 1533204799899, 1533204799904);
INSERT INTO "public"."Client" VALUES ('87c8bfe5-728a-42a4-b8ef-d7f7386c4696', 'rmk', 'rmk', 'rmk', 't', 1534137589511, 1534137589513);
COMMIT;

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
-- Records of Passport
-- ----------------------------
BEGIN;
INSERT INTO "public"."Passport" VALUES ('43cce95c-f2b0-437e-9fdb-651946695143', 'admin', 'admin', 'admin@xiaoyun.com', 1533204799899, 1533204799983, 'f');
INSERT INTO "public"."Passport" VALUES ('db793c02-a0a8-4b3b-8d9c-543e68547cce', 'wangzezhi', '15dab537d36aaeed42454cc4c182f187', 'wangzezhi@xiaoyun.com', 1534156519416, 1534156519418, 'f');
INSERT INTO "public"."Passport" VALUES ('dcce7549-eb9b-4c86-9740-57faae877626', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534157514895, 1534157514896, 'f');
INSERT INTO "public"."Passport" VALUES ('2687d354-1a3f-4d72-a4b1-bfa476eb21a4', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185809179, 1534185809180, 'f');
INSERT INTO "public"."Passport" VALUES ('461824e1-7142-45ab-b65d-df7ebaf697e9', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185810546, 1534185810546, 'f');
INSERT INTO "public"."Passport" VALUES ('96c71265-efd7-42e9-817b-0b940f98acd8', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185811200, 1534185811201, 'f');
INSERT INTO "public"."Passport" VALUES ('54ad956d-1a28-4c64-8dcf-8e3130ca80f0', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185811885, 1534185811885, 'f');
INSERT INTO "public"."Passport" VALUES ('d09a27ac-3b15-4e68-b375-976e5e7d8a7f', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185950860, 1534185950860, 'f');
INSERT INTO "public"."Passport" VALUES ('93fad6cc-9519-4878-a487-eb232e1c19a0', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185951642, 1534185951642, 'f');
INSERT INTO "public"."Passport" VALUES ('7f62da27-ea8f-45f0-9b9c-9bbffad64ab0', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185952805, 1534185952805, 'f');
INSERT INTO "public"."Passport" VALUES ('cd290cad-2c4e-4f3e-ab09-c568ad36d5d1', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185953385, 1534185953385, 'f');
INSERT INTO "public"."Passport" VALUES ('feca8bdb-e30c-4c6a-be5c-e1c2eb62a48b', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185953848, 1534185953848, 'f');
INSERT INTO "public"."Passport" VALUES ('36381eed-0c94-4609-b8c8-951a24365429', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185954291, 1534185954291, 'f');
INSERT INTO "public"."Passport" VALUES ('c18a7c91-5ff6-4d3b-97f4-f5b12ced8681', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185954700, 1534185954700, 'f');
INSERT INTO "public"."Passport" VALUES ('b968d13e-c481-4117-a392-650087ef0a0c', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185955092, 1534185955092, 'f');
INSERT INTO "public"."Passport" VALUES ('f104dc9c-82e4-4568-9a81-8ecd480978e6', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185955472, 1534185955472, 'f');
INSERT INTO "public"."Passport" VALUES ('c20f31f4-bf33-4000-a012-8bd791de1e4f', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185955882, 1534185955882, 'f');
INSERT INTO "public"."Passport" VALUES ('932c2932-a561-4cb8-96cb-fa556b2d2946', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185956190, 1534185956190, 'f');
INSERT INTO "public"."Passport" VALUES ('e88362b4-3945-4502-ba9a-810750e3a032', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185956554, 1534185956554, 'f');
INSERT INTO "public"."Passport" VALUES ('0010f178-b8ab-412c-9d16-512a2e0c516a', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185956955, 1534185956955, 'f');
INSERT INTO "public"."Passport" VALUES ('49981102-2245-4ef1-81a2-ba497ba21848', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185967973, 1534185967975, 'f');
INSERT INTO "public"."Passport" VALUES ('d5e183bc-2ec4-461f-ab68-bdf296873f76', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185970454, 1534185970454, 'f');
INSERT INTO "public"."Passport" VALUES ('a46a5de6-c442-45aa-bdff-1208fdd96507', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185970738, 1534185970738, 'f');
INSERT INTO "public"."Passport" VALUES ('b314d89a-5f42-4a42-9f7a-8a32459da451', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185970951, 1534185970952, 'f');
INSERT INTO "public"."Passport" VALUES ('a3897fcc-5f32-4782-90af-de2433036a6f', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185971152, 1534185971152, 'f');
INSERT INTO "public"."Passport" VALUES ('13690e6c-9b20-49a1-9862-22c751fc785f', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185971354, 1534185971354, 'f');
INSERT INTO "public"."Passport" VALUES ('4beaac87-79be-40c4-9429-91d5d487ec72', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185971545, 1534185971545, 'f');
INSERT INTO "public"."Passport" VALUES ('de8cd97e-c604-4219-9ddf-d7b4a3f8827a', 'kingze', '639a10a7bdd5ccb749ec2727b7ac87e4', 'kingzez@xiaoyun.com', 1534185971721, 1534185971722, 'f');
COMMIT;

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
-- Records of Permission
-- ----------------------------
BEGIN;
INSERT INTO "public"."Permission" VALUES ('b03ba814-a868-486d-a085-459dc5754614', '管理系统', 'MS100', '管理整个系统', 'f', 1534152358351, 1534152358355);
COMMIT;

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
-- Records of Role
-- ----------------------------
BEGIN;
INSERT INTO "public"."Role" VALUES ('28e023de-9475-464a-abd2-25f105e3b03c', '销售', 'f', 'f', NULL, NULL, 1534146605335, 1534146605338);
INSERT INTO "public"."Role" VALUES ('278cb5bc-da96-4b7d-ab96-5d4c53b146e5', '管理员', 'f', 'f', NULL, NULL, 1534146696557, 1534146696561);
INSERT INTO "public"."Role" VALUES ('f4644aeb-b854-4486-b392-84477a3172d4', '超级管理员', 'f', 'f', NULL, NULL, 1534152358351, 1534152358354);
COMMIT;

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
