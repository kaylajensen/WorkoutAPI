'use strict';

module.exports = function(app) {
  var users = require('../controllers/usersController');

  /**
   * @swagger
   * definition:
   *   User:
   *     properties:
   *       username:
   *         type: string
   *       firstName:
   *         type: string
   *       lastName:
   *         type: string
   *       phone:
   *         type: string
   *       workoutCount:
   *         type: integer
   *       allTimeWorkoutCount:
   *         type: integer
   *       currentDay:
   *         type: string
   */

   /**
   * @swagger
   * /users:
   *   post:
   *     tags:
   *       - Users
   *     description: Creates a new user
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: user
   *         description: User Object
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/User'
   *     responses:
   *       200:
   *         description: Successfully created new user
   */
  app.route('/users').post(users.createUser);

  /**
   * @swagger
   * /users:
   *   get:
   *     tags:
   *       - Users
   *     description: Returns all users
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Successfully returns an array of users
   */
  app.route('/users').get(users.getUsers);

  /**
   * @swagger
   * /users/{username}:
   *   get:
   *     tags:
   *       - Users
   *     description: Returns a single user by username
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: username
   *         description: User's username
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Successfully returned a single user by username
   *         schema:
   *           $ref: '#/definitions/User'
   */
  app.route('/users/:username').get(users.getUserByUsername);

  /**
  * @swagger
  * /users/{username}:
  *   put:
  *     tags:
  *       - Users
  *     description: Updates a single user by username
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: username
  *         description: User's username
  *         in: path
  *         required: true
  *         type: string
  *       - name: user
  *         description: User Object
  *         in: body
  *         required: true
  *         schema:
  *           $ref: '#/definitions/User'
  *     responses:
  *       200:
  *         description: Successfully updated user by username
  */
  app.route('/users/:username').put(users.updateUser);

  /**
   * @swagger
   * /users/{username}:
   *   delete:
   *     tags:
   *       - Users
   *     description: Deletes a single user by username
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: username
   *         description: User's username
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Successfully deleted user by username
   */
  app.route('/users/:username').delete(users.deleteUser);
};
