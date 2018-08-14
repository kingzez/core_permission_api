## dev

Build our main app

```bash
nodemon dist/server.js
```

## watch

Compile ts & watch compile

```bash
tsc -w
```

## image

Build docker image

```bash
docker build -t reg.yunpro.cn/bjwjh/core_permission_api:latest .
```

## image:push

Push docker image

```bash
docker push reg.yunpro.cn/bjwjh/core_permission_api:latest
```