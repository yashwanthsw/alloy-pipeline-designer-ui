FROM keymetrics/pm2-docker-alpine:6

MAINTAINER Eric Colvin <ecolvin@liaison.com>

ENV NODE_ENV production

# making sure we run the commands from the proper folder
WORKDIR /home/node/app

# copying over the files for installing dependencies & running application
COPY .npmrc /home/node/app/
COPY package.json /home/node/app/
COPY server.js /home/node/app/
COPY process.yml /home/node/app/
COPY public /home/node/app/public
COPY routes /home/node/app/routes
COPY dist /home/node/app/dist

# install packages
USER root
RUN npm install
USER $APPLICATION_USER

CMD ["pm2-docker", "process.yml", "--web", "9001"]