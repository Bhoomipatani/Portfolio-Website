# Use node 14 as base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and lock file for npm install
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the production version of the React app
RUN npm run build

# Expose the port your app runs on
EXPOSE 5173

# Command to run the app
CMD ["npm", "run", "start"]