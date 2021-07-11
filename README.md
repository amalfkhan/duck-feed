![Home/All entries page](https://i.imgur.com/ZRrfOKV.png)

# Duck Feed

Full-stack app for crowdsourcing data on duck feeding in parks around the world. Built for the selection test step in the Freshworks interview process.

## Tools

### Main technologies:

React/JavaScript, Node.js/Express, mongoDB/mongoose

### Other packages:

- Material-UI - used for styling the front-end
- react-hook-forms - used to minimize re-rendering of the form component as the user entered input
- joi validation - used to easily validate user inputed data on the server side

<p>&nbsp;</p>

## Project Screen Shots

### Add entry form

![Add entry form](https://i.imgur.com/ZrXntiu.png)

<p>&nbsp;</p>

## Reflection

As this was a small project I was able to focus on improving my workflow and web-app organization based on what I've learnt from previous projects. I began the planning phase by determining how I wanted my data to be stored in the database, based on how I'd need to access it for use on frontend. At this point, I also drew out the concept for my frontend UI. Once those steps were complete I wrote down a rough outline of the steps I'd take in building the project. I first built out the backend, defining the data storage scheme and connecting to the mongodb database using mongoose. I also set up express as the webserver to handle client requests to server endpoints. Once the basis of the backend was complete, I moved on to fetching and displaying the data on the frontend. I then worked on the form for users to add their data; I began by implementing it as a pop-up, but for mobile responsiveness, I decided to change it to its own page.

</br>

**Future improvements:** </br></br>
Location input: Because of the many ways a user could define a park location (eg. a full address, just the park name etc.) I decided the location would be represented as a single string in the database. Once I began adding regex to try to ensure good quality data was being collected, it became clear that to do that I would have had to take a different approach to how I was modelling the location data.

Data display: Because the data is being used for scientific purposes, ideally the data should have been displayed in a table format. I wasn't able to properly execute this because I would have had to find a way to make the table mobile-friendly. Given more time, I would change the data display to fit the user's use case better, while also maintaining mobile responsiveness.

<p>&nbsp;</p>

## Installation, Setup, and Access Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

### Installation:

Server

```
cd server
npm install
```

Client

```
cd client
npm install
```

### Setup:

Server

```
cd server
npm run start
```

Client

```
cd client
npm run start
```

### Access app:

`localhost:3000/`
