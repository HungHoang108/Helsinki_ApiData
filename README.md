# Helsinki_ApiData

The app using Helsinki open API data to allow users search for places, events and incoming activities in the city
using Reactjs in the frontend and Nodejs/express in the backend.

##To run the application

1. Clone the repository
2. Install the dependencies
- Install Node.js
- Install the package concurrently by running the below command at the root folder:

```
cd client
npm install
```

- Install its dependencies for the front-end:
```
cd client/hsk
npm install
```
- Install its dependencies for the back-end:
```
cd ..
cd server
npm install
```
3. Finally, we can now run the application
- On first terminal window to server directory, run: 
```
node app.js
```
- On second terminal window to client/hsk directory, run:
```
npm start
```
