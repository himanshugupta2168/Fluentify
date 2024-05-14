FROM node:22-alpine

WORKDIR /app

COPY package* .
COPY ./prisma .

RUN npm install 
RUN  npx prisma generate 

COPY . .

COPY .env.example .env

RUN  npm run build

EXPOSE 3000

CMD [ "npm" ,"start" ]