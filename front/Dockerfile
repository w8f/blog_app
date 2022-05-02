FROM node:17-alpine3.13

ENV TZ Asia/Tokyo

WORKDIR /front

COPY ./ /front
RUN apk update && apk add bash
RUN npm install

CMD ["npm", "run", "dev"]
