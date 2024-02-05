FROM node:18

WORKDIR /user/src/app

COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build
CMD ["npm", "run", "start"]
