const db = require("../../config/database");
const Op = db.Sequelize.Op;
const User = db.users;

const searchUser = async (req, res, next) => {
  try {
    const users = await User.findAll({
      where: {
        deleted_at: null,
      },
    });
    res.send(users);
  } catch (err) {
    console.log(err);
  }
};

const detailUser = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
        deleted_at: null,
      },
    });
    res.send(user);
  } catch (err) {
    console.log(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    const params = req.body;

    const userToCreate = {
      full_name: params.full_name,
      gender: params.gender,
      status: params.status,
      avatar: params.avatar,
      created_at: Date.now(),
    };

    const result = await User.create(userToCreate);
    res.send({
      message: "CREATE OK",
      id: result.id,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const params = req.body;
    const status = req.body.status;
    if (!status) {
      return res.status(500).send({
        message: "Error updating with id=" + id,
      });
    }
    const userToUpdate = {
      full_name: params.full_name,
      gender: params.gender,
      status: params.status,
      avatar: params.avatar,
      updated_at: Date.now(),
    };

    const result = await User.update(userToUpdate, {
      where: { id: req.params.id },
    });
    res.send({
      message: "UPDATE OK",
      id: result.id,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const result = await User.update(
      { deleted_at: Date.now() },
      { where: { id: req.params.id } }
    );
    res.send({
      message: "DELETE OK",
      id: result.id,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { searchUser, detailUser, createUser, updateUser, deleteUser };
