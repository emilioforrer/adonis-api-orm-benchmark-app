FROM node:11-stretch as dev

ENV APP_DIR /workspace

WORKDIR $APP_DIR

COPY . /$APP_DIR

VOLUME /APP_DIR

EXPOSE 3000

RUN npm i -g @adonisjs/cli yarn pm2 && yarn install

CMD [ "pm2", "start", "app.json", "--no-daemon" ]