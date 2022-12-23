const db = require("../models");
const User = db.users;
const Location = db.location;
const Credentials = db.credentials;
const Op = db.Sequelize.Op;

const cryptoService = require("../services/crypto.service");

// Create and Save a new User
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Name cannot be empty!"
    });
    return;
  }

  if (!req.body.location) {
    res.status(400).send({
      message: "Country cannot be empty!"
    });
    return;
  }

  if (!req.body.login) {
    res.status(400).send({
      message: "Credentials cannot be empty!"
    });
    return;
  }


  // Create a User
  const user = {
    title: req.body.name.title,
    first_name: req.body.name.first,
    last_name: req.body.name.last,
    gender: req.body.gender,
    email: req.body.email,
    date_of_birth: req.body.dob,
    phone: req.body.phone,
    nationality: req.body.nationality,
    pic_large: req.body.profile_picture,
    pic_medium: req.body.profile_picture,
    pic_thumbnail: req.body.profile_picture
  };

  const location = {
    street_number: req.body.location.street.number ? null : '',
    street_name: req.body.location.street.name ? null : '',
    city: req.body.location.city ? null : '',
    state: req.body.location.state ? null : '',
    postcode: req.body.location.postcode ? null : '',
    country: req.body.location.country 
  }

  const md5 = cryptoService().getMD5Hash(req.body.login.password)
  const sha1 = cryptoService().getSHA1Hash(req.body.login.password)
  const sha256 = cryptoService().getSHA256Hash(req.body.login.password)

  const credentials = {
    username: req.body.login.username,
    password: req.body.login.password,
    md5: md5,
    sha1: sha1,
    sha256: sha256
  }

  await Credentials.create(credentials)
        .then()
        .catch(err => {
          console.log(err);
          res.status(500).send({
            message: err.message || 'Credentials cannot be accepted!'
        })
  

  // Save User in the database
  await User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  User.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Users were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all users."
      });
    });
};

// find all published User
exports.findAllPublished = (req, res) => {
  User.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};
