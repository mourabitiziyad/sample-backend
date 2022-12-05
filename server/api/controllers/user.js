const models = require("../../db/models");

const createUser = async (req, res) => {
  const { user_id, user_name, user_email } = req.body;
  try {
    const user = await models.User.findOrCreate({
      where: { user_id: user_id },
      defaults: {
        user_fname: user_name,
        user_lname: '',
        user_id: user_id,
        user_email: user_email
      }
    });
    return res.status(201).json({
      user
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await models.User.findAll({

    });
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await models.User.findOne({
      where: { user_id: userId },
    });
    if (user) {
      return res.status(200).json({ user });
    }
    return res.status(404).send("User with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const [updated] = await models.User.update(req.body, {
      where: { user_id: userId }
    });
    if (updated) {
      const updatedUser = await models.User.findOne({ where: { user_id: userId } });
      return res.status(200).json({ user: updatedUser });
    }
    throw new Error("User not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const deleted = await models.User.destroy({
      where: { user_id: userId }
    });
    if (deleted) {
      return res.status(204).send("User deleted");
    }
    throw new Error("User not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
