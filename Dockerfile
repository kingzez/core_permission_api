### Health check 'curl /ping'
FROM reg.yunpro.cn/bjwjh/node:10.0.0

WORKDIR /app

ADD ./package.json /app/
ADD ./package-lock.json /app/
ADD ./dist /app/dist

RUN \
    rm /etc/localtime && \
    ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN npm i --only=production --registry https://registry.npm.taobao.org

ENV PORT=8999
ENV DB_USERNAME='root'
ENV DB_PASSWORD='root'
ENV DB_NAME='oauth2_server'
ENV DB_HOSTNAME='10.11.3.137'
ENV DB_PORT='5432'
ENV SESSION_HOST='http://10.11.3.137:11104'
ENV OAUTH2_SERVER_HOST='http://10.11.3.123:8998/'

EXPOSE 8999
CMD node ./dist/server.js
