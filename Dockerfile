FROM node:8.2
RUN mkdir /node
WORKDIR /node
COPY ./ ./
RUN echo > ./src/services/score.service.js
RUN npm install
ENTRYPOINT ["sh", "init.sh"]
