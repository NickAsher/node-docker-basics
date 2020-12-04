# the package on which the app is based, so node version that i am using is specified here
FROM node:12

WORKDIR /usr/src/app

#Now firstly copy the package.json file and package-lock.json file
COPY package*.json ./

#NOW run the npm install command to install all the npm packages
RUN npm install

#Now copy everything else from this folder. (Locations specified in .dockerignore file won't be copied)
COPY . .

#Now we expose the port we use, so that later on, we can map this to system using using "-p somePort:3099"
EXPOSE 3099

#run the command "node server.js" .
CMD [ "node", "server.js" ]
