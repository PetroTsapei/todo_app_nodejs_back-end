
# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm cache clean --force
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Set the NODE_ENV to production
ENV NODE_ENV production

# Start the application
CMD npm run migrate:up && npm start
