module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/create", users.create);

  // Retrieve all users
  router.get("/get", users.findAll);

  // Retrieve a single User with id
  router.get("/get/:id", users.findOne);

  // Update a User with id
  router.put("/update/:id", users.update);

  // Delete a User with id
  router.delete("/delete/:id", users.delete);

  // Delete all users
  router.delete("/delete", users.deleteAll);

  app.use('/api/users', router);
};
