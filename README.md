![Home/All entries page](https://i.imgur.com/ZRrfOKV.png)

# Duck Feed

Full-stack app for crowdsourcing data on duck feeding in parks around the world. This app was built for the selection test step in the Freshworks Studio interview process.

## Technologies

### Main:

React, Node.js/Express, MongoDB/mongoose

### Other:

- Material-UI - used for styling the frontend
- React Hook Forms - used to minimize re-rendering of the form component as the user entered input
- joi validation - used to easily validate user input data on the server-side

<p>&nbsp;</p>

## Project Screen Shots

### Add entry form

![Add entry form](https://i.imgur.com/ZrXntiu.png)

<p>&nbsp;</p>

## Reflection

As this was a small project I was able to focus on improving my workflow and web-app organization based on what I'd learnt from previous projects. I also had the opportunity to work with mongoose, which I found to be a very helpful tool that made all database related actions much easier. I will definitely use it in future projects. There are some aspects of the app and the development process that given more time I could further improve:

</br>
Testing: I have some knowledge of the Jest testing framework, but I haven't had the chance to work with it on a project. Given the time constraint, I decided not to use it on this project. In the future, I would include test development early in the build process to practice test-driven-development and make my applications more robust.

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
