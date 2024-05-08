# Fluentify 

This is a guide on how to use environment variables with Docker for a Next.js application.

## Prerequisites

- Docker installed on your system

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>

2. Navigate to the project Directory 
    ```bash
    cd fluentify

3. create a .env file 
    copy the .env .example and rename it to .env
    ```bash 
    cp .env.example .env

4. Build the docker Image 
    ```bash
    docker build -t fluentify 

5. run the docker container 
    ```bash 
    docker run -d -p 3000:3000 -e NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your value> -e CLERK_SECRET_KEY=<your value > -e DATABASE_URL=<your value >   fluentify 



# For  installing the app via npm
1. clone the repository 
    ```bash 
    git clone <repository-url>

2. navigate to the project directory 
    ```bash 
    cd fluentify

3. create a .env file and copy the required credentials from the .env.example  file 

4. run the npm install command
    ```bash 
    npm install 

5. start the app 
    ```bash 
    npm run dev
6. visit the app on https://localhost:3000

