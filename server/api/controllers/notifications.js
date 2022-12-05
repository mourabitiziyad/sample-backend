const models = require("../../db/models");

const createNotification = async (req, res) => {
  try {
    console.log(req)
    const notification = await models.Notification.create(req.body);
    return res.status(201).json({
      notification: notification
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllNotifications = async (req, res) => {
  try {
    const notifications = await models.Notification.findAll({
    });
    return res.status(200).json({ notifications });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getNotificationById = async (req, res) => {
  try {
    const { notificationId } = req.params;
    const notification = await models.Notification.findOne({
      where: { notification_id: notificationId },
    });
    if (notification) {
      return res.status(200).json({ notification });
    }
    return res.status(404).send("Notification with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateNotification = async (req, res) => {
  try {
    const { notificationId } = req.params;
    const [updated] = await models.Notification.update(req.body, {
      where: { notification_id: notificationId }
    });
    if (updated) {
      const updatedNotification = await models.Notification.findOne({ where: { notification_id: notificationId } });
      return res.status(200).json({ Notification: updatedNotification });
    }
    throw new Error("Notification not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteNotification = async (req, res) => {
  try {
    const { notificationId } = req.params;
    const deleted = await models.Notification.destroy({
      where: { notification_id: notificationId }
    });
    if (deleted) {
      return res.status(204).send("Notification deleted");
    }
    throw new Error("Notification not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createNotification,
  getAllNotifications,
  getNotificationById,
  updateNotification,
  deleteNotification
};
