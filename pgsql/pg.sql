/*
 Navicat Premium Data Transfer

 Source Server         : sso
 Source Server Type    : PostgreSQL
 Source Server Version : 100004
 Source Host           : localhost:5432
 Source Catalog        : sso-server
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 100004
 File Encoding         : 65001

 Date: 31/08/2018 18:45:32
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
  "isDeleted" bool NOT NULL
)
;
ALTER TABLE "public"."Passport" OWNER TO "w";

-- ----------------------------
-- Records of Passport
-- ----------------------------
BEGIN;
INSERT INTO "public"."Passport" VALUES ('bd712e62-a676-43a7-8927-7475b3726856', 'cao', '0ea12995c8bced881c5f177a101c2c6d', '233dd1@qq.com', 1535702433078, 1535702433078, 'f');
INSERT INTO "public"."Passport" VALUES ('3c6d15a5-3d66-4eea-aa0b-0014616e01ed', 'zhao', '0ea12995c8bced881c5f177a101c2c6d', '2d1111@qq.com', 1535702462749, 1535702462749, 'f');
INSERT INTO "public"."Passport" VALUES ('1fecc4e7-7360-497e-b73e-cde13634fbaf', 'tian', '0ea12995c8bced881c5f177a101c2c6d', '123233@qq.com', 1535702475663, 1535702475663, 'f');
INSERT INTO "public"."Passport" VALUES ('e3345ad2-9fd9-4878-8f3b-356d8f99190c', 'zhang', 'd4c39dfda37e4a2183e58dc8d07cf8f6', '2331@qq.com', 1535701954218, 1535702024629, 't');
INSERT INTO "public"."Passport" VALUES ('e7154650-c3fd-4c03-a152-77964c025f30', 'weixin', '0ea12995c8bced881c5f177a101c2c6d', '233d1@qq.com', 1535701984886, 1535701984886, 't');
INSERT INTO "public"."Passport" VALUES ('8d8e1938-49e2-49b0-b752-22441d4b420b', 'lisi', '0ea12995c8bced881c5f177a101c2c6d', '12322233@qq.com', 1535702712250, 1535702712250, 'f');
INSERT INTO "public"."Passport" VALUES ('2e533a58-c229-4094-ad1a-9d9a460da1aa', 'sun', '0ea12995c8bced881c5f177a101c2c6d', '123222233@qq.com', 1535702722439, 1535704697740, 't');
INSERT INTO "public"."Passport" VALUES ('337db44f-cee0-4d6f-9f9b-c69939f17810', 'sun1', '0ea12995c8bced881c5f177a101c2c6d', '12e233@qq.com', 1535704842675, 1535704842675, 'f');
INSERT INTO "public"."Passport" VALUES ('36a20bfb-4141-41bf-8ca6-eef8b818cb7e', 'sun2', '0ea12995c8bced881c5f177a101c2c6d', '12e22233@qq.com', 1535704849059, 1535704849060, 'f');
INSERT INTO "public"."Passport" VALUES ('134283a8-47df-4ad1-8a26-d30ed198fc44', 'sun4', '0ea12995c8bced881c5f177a101c2c6d', '1211122233@qq.com', 1535704857430, 1535704857430, 'f');
INSERT INTO "public"."Passport" VALUES ('585ba45c-32ca-443c-ba47-53b52ad27f2b', 'sun5', '0ea12995c8bced881c5f177a101c2c6d', '1222211122233@qq.com', 1535704865095, 1535704865096, 'f');
INSERT INTO "public"."Passport" VALUES ('0d8885df-a638-404f-86d2-103f3e5c4c90', 'sun6', '0ea12995c8bced881c5f177a101c2c6d', '122222211122233@qq.com', 1535704871868, 1535704871868, 'f');
INSERT INTO "public"."Passport" VALUES ('f2fb4f0c-b8f5-4243-903d-864ba7f9a476', 'sun7', '0ea12995c8bced881c5f177a101c2c6d', '12223211122233@qq.com', 1535704892359, 1535704892359, 'f');
INSERT INTO "public"."Passport" VALUES ('dc1298bc-9a74-49de-b6c0-266ea7fd7e71', 'sun8', '0ea12995c8bced881c5f177a101c2c6d', '133211122233@qq.com', 1535704900517, 1535704900517, 'f');
INSERT INTO "public"."Passport" VALUES ('70cdcc4d-dc1a-46e5-be70-ad4ed021f1c4', 'sun9', '0ea12995c8bced881c5f177a101c2c6d', '1332131122233@qq.com', 1535704906514, 1535704906514, 'f');
INSERT INTO "public"."Passport" VALUES ('4b24efa5-6247-404b-9d1b-7756b8517296', 'sun10', '0ea12995c8bced881c5f177a101c2c6d', '13322231122233@qq.com', 1535704914441, 1535704914442, 'f');
INSERT INTO "public"."Passport" VALUES ('4ef7aa91-5cbf-4259-ab3d-254e8299559f', 'sun12', '0ea12995c8bced881c5f177a101c2c6d', '1333231122233@qq.com', 1535705027333, 1535705027333, 'f');
INSERT INTO "public"."Passport" VALUES ('a2c7bb66-2dd4-461c-9516-151a193ff320', 'sun14', '0ea12995c8bced881c5f177a101c2c6d', '1232231122233@qq.com', 1535705043539, 1535705043539, 'f');
INSERT INTO "public"."Passport" VALUES ('8b048aa0-4c4e-44a2-bb58-9588df1128e0', 'sun15', '0ea12995c8bced881c5f177a101c2c6d', '111132231122233@qq.com', 1535705053794, 1535705053795, 'f');
INSERT INTO "public"."Passport" VALUES ('12b42ea6-27fb-43b5-9625-ccc03898ae97', 'sun13', '0ea12995c8bced881c5f177a101c2c6d', '1233231122233@qq.com', 1535705033771, 1535706319502, 'f');
INSERT INTO "public"."Passport" VALUES ('fe519f5a-340e-4497-8a99-4ee7de51a6fb', 'sun11', '8bc9627934aecb9b3894e06b4ffea265', '133231122233@qq.com', 1535705020392, 1535710764564, 'f');
INSERT INTO "public"."Passport" VALUES ('64c8b7ff-a88c-4853-b93a-5c4a75698f11', 'li', '0ea12995c8bced881c5f177a101c2c6d', '231111@qq.com', 1535702445256, 1535710786151, 't');
INSERT INTO "public"."Passport" VALUES ('bdcae590-efe2-4bdb-a8f8-e2440af89cb4', 'sun16', '557323e45a975672c1aed31ba493e8ad', '111132122233@qq.com', 1535705061137, 1535711034189, 'f');
COMMIT;

-- ----------------------------
-- Table structure for PassportRole
-- ----------------------------
DROP TABLE IF EXISTS "public"."PassportRole";
CREATE TABLE "public"."PassportRole" (
  "id" uuid NOT NULL,
  "user_id" uuid NOT NULL,
  "role_id" uuid NOT NULL,
  "createdAt" int8,
  "updatedAt" int8
)
;
ALTER TABLE "public"."PassportRole" OWNER TO "w";

-- ----------------------------
-- Records of PassportRole
-- ----------------------------
BEGIN;
INSERT INTO "public"."PassportRole" VALUES ('bdef5bda-e4cc-41d5-96b8-081602699c46', 'bd712e62-a676-43a7-8927-7475b3726856', 'bdef5bda-e4cc-41d5-96b8-081602699c46', NULL, NULL);
INSERT INTO "public"."PassportRole" VALUES ('0ba57916-ba30-47dd-b11b-cc5974b68ecc', '70cdcc4d-dc1a-46e5-be70-ad4ed021f1c4', 'bdef5bda-e4cc-41d5-96b8-081602699c46', 1535704967152, 1535704967153);
INSERT INTO "public"."PassportRole" VALUES ('4b160713-a37d-4b4c-ae51-df1e691f0a57', 'a2c7bb66-2dd4-461c-9516-151a193ff320', 'bdef5bda-e4cc-41d5-96b8-081602699c46', 1535706325941, 1535706325942);
INSERT INTO "public"."PassportRole" VALUES ('b1431660-e1d4-47e0-99a2-c22d8fa39ae2', '4ef7aa91-5cbf-4259-ab3d-254e8299559f', 'bdef5bda-e4cc-41d5-96b8-081602699c46', 1535710771517, 1535710771519);
INSERT INTO "public"."PassportRole" VALUES ('12ee89d3-fc9d-4139-8e38-953c122fc410', 'fe519f5a-340e-4497-8a99-4ee7de51a6fb', 'bdef5bda-e4cc-41d5-96b8-081602699c46', 1535710775810, 1535710775810);
INSERT INTO "public"."PassportRole" VALUES ('5fc71435-3067-4d17-b5a9-1ecaa36d5569', 'bdcae590-efe2-4bdb-a8f8-e2440af89cb4', 'bdef5bda-e4cc-41d5-96b8-081602699c46', 1535711038165, 1535711038165);
INSERT INTO "public"."PassportRole" VALUES ('4c4f40d5-6991-4a3e-bba3-a4f3ed16352e', 'bdcae590-efe2-4bdb-a8f8-e2440af89cb4', '74397524-e62d-49ed-bf5a-fc192013a091', 1535711082809, 1535711082809);
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
INSERT INTO "public"."Permission" VALUES ('77f9aaee-4177-4479-a8b2-b96fde972b9f', '登录权限', 'L100', '登录内部管理系统', 'f', 1535709828204, 1535709828207);
INSERT INTO "public"."Permission" VALUES ('62e9b889-3df1-4819-a009-3ff9905fe16f', '登录权限', 'L101', '登录外部管理系统', 'f', 1535709853287, 1535709853287);
INSERT INTO "public"."Permission" VALUES ('b5d18487-71a7-44a6-9e4c-244793f08321', '登录权限', 'L102', '登录坐席', 'f', 1535709870837, 1535709870838);
INSERT INTO "public"."Permission" VALUES ('9b56ca5d-36ae-4e4e-bc1a-20fad427327c', '账号管理', 'AM100', '管理运营管理员账号', 'f', 1535709929368, 1535709929368);
INSERT INTO "public"."Permission" VALUES ('5c7152ff-28ff-442e-bc71-e68239510c01', '账号管理', 'AM101', '管理系统管理员账号', 'f', 1535709954036, 1535709954036);
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
INSERT INTO "public"."Role" VALUES ('bdef5bda-e4cc-41d5-96b8-081602699c46', '系统管理员', 't', 't', '7aceafaf-912c-4866-a4eb-0bc15cc90594', NULL, 1535702741238, 1535711038175);
INSERT INTO "public"."Role" VALUES ('74397524-e62d-49ed-bf5a-fc192013a091', '超级管理员', 'f', 't', NULL, NULL, 1535711074649, 1535711082826);
COMMIT;

-- ----------------------------
-- Table structure for RolePermission
-- ----------------------------
DROP TABLE IF EXISTS "public"."RolePermission";
CREATE TABLE "public"."RolePermission" (
  "id" uuid NOT NULL,
  "role_id" uuid NOT NULL,
  "permission_id" uuid NOT NULL,
  "createdAt" int8,
  "updatedAt" int8
)
;
ALTER TABLE "public"."RolePermission" OWNER TO "w";

-- ----------------------------
-- Records of RolePermission
-- ----------------------------
BEGIN;
INSERT INTO "public"."RolePermission" VALUES ('4e39c7a6-c46a-4816-aa67-dd18b957cefc', 'bdef5bda-e4cc-41d5-96b8-081602699c46', '5c7152ff-28ff-442e-bc71-e68239510c01', 1535710849128, 1535710849128);
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
-- Primary Key structure for table PassportRole
-- ----------------------------
ALTER TABLE "public"."PassportRole" ADD CONSTRAINT "PassportRole_pkey" PRIMARY KEY ("user_id", "role_id");

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

-- ----------------------------
-- Primary Key structure for table RolePermission
-- ----------------------------
ALTER TABLE "public"."RolePermission" ADD CONSTRAINT "RolePermission_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table PassportRole
-- ----------------------------
ALTER TABLE "public"."PassportRole" ADD CONSTRAINT "PassportRole_passportId_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."Passport" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION DEFERRABLE;
ALTER TABLE "public"."PassportRole" ADD CONSTRAINT "PassportRole_roleId_fkey" FOREIGN KEY ("role_id") REFERENCES "public"."Role" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION DEFERRABLE;

-- ----------------------------
-- Foreign Keys structure for table RolePermission
-- ----------------------------
ALTER TABLE "public"."RolePermission" ADD CONSTRAINT "permissionidddd" FOREIGN KEY ("permission_id") REFERENCES "public"."Permission" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."RolePermission" ADD CONSTRAINT "roleIddttt" FOREIGN KEY ("role_id") REFERENCES "public"."Role" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
