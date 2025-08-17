FROM node:20-bullseye

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy project files
COPY . .

EXPOSE 5173

# Start dev server (replace with build+serve for prod)
CMD ["npm", "run", "dev"]
