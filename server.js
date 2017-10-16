var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Task = require('./api/models/usersModel'),
  bodyParser = require('body-parser'),
  swaggerJSDoc = require('swagger-jsdoc');

// This line below allowed proper access to api-docs files for Swagger
app.use(express.static('api/api-docs'))

var swaggerDefinition = {
  info: {
    title: 'Workout API',
    version: '1.0.0',
    description: 'RESTful API for tracking user workouts',
  },
  host: 'localhost:3000',
  basePath: '/',
};

var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./api/routes/*js'],
};
var swaggerSpec = swaggerJSDoc(options);
// serve swagger
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/WorkoutUsersdb');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var routes = require('./api/routes/usersRoutes');
routes(app);
app.listen(port);
console.log("todo list RESTful API server started on: " + port);
