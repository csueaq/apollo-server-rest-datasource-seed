# Download base image nodejs
FROM node:10.15.3 as build

COPY . /src

WORKDIR src

RUN npm install

FROM node:10.15.3-alpine as runtime

COPY --from=build src/ src/

WORKDIR src

CMD ["npm", "start"]

# Set port and start service
EXPOSE 4000
