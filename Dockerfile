# Base image
FROM 989299900151.dkr.ecr.ap-south-1.amazonaws.com/node-18:latest
RUN apk --no-cache --update add make g++

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm ci

# Bundle app source
COPY . .

EXPOSE 3000

# Run Migrations
RUN npx prisma format
RUN npx prisma generate
RUN npx prisma migrate deploy
# RUN npx prisma db seed

# Creates a "dist" folder with the production build
RUN npx nx build app

# Start the server using the production build
CMD npx nx serve app

