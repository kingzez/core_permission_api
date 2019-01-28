# rest tests

need install the vscode plugin: rest client

### get request baidu

GET https://www.baidu.com HTTP/1.1

## health check

GET http://localhost:8999/ping HTTP/1.1



## Client

### createClient
POST http://localhost:8999/api/client HTTP/1.1
Content-type: application/json; charset=utf-8

{
    "name": "rmk1",
    "clientId": "xiaoyun_id",
	"clientSecret": "xiaoyun_id",
	"isTrusted": "true"
}

### getClients

GET http://localhost:8999/api/client HTTP/1.1



## Passport

### createPassport

POST http://localhost:8999/api/passport HTTP/1.1
Content-type: application/json; charset=utf-8

{
    "username": "xiaoyun",
    "password": "111111",
	"email": "a@xiaoyun.com"
}


### getPassports

GET http://localhost:8999/api/passport HTTP/1.1



## Role

### createRole

POST http://localhost:8999/api/role HTTP/1.1
Content-type: application/json; charset=utf-8

{
	"name": "员",
	"clientId": "0562a632-cde0-42b0-b115-25443dec1757"
}

### getRoles
GET http://localhost:8999/api/role HTTP/1.1



## Permission

### createPermission

POST http://localhost:8999/api/permission HTTP/1.1
Content-type: application/json; charset=utf-8

{
	"name": "God_mode",
	"code": "God_mode",
	"desc": "上帝模式"
}

### getPermissions

GET http://localhost:8999/api/permission HTTP/1.1




