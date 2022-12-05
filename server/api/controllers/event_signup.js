const models = require("../../db/models");

const createEventSignUp = async (req, res) => {
  try {
    console.log(req)
    const EventSignUp = await models.Event_sign_up.create(req.body);
    return res.status(201).json({
      EventSignUp
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllEventSignUps = async (req, res) => {
  try {
    const EventSignUps = await models.Event_sign_up.findAll({
    });
    return res.status(200).json({ EventSignUps });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getEventSignUpById = async (req, res) => {
  try {
    const { eventId, userId } = req.params;
    const EventSignUp = await models.Event_sign_up.findOne({
      where: { event_id: eventId, user_id: userId},
    });
    if (EventSignUp) {
      return res.status(200).json({ EventSignUp });
    }
    return res.status(404).send("EventSignUp with the specified IDs does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getEventSignUpByEventId = async (req, res) => {
  try {
    const { eventId} = req.params;
    const EventSignUp = await models.Event_sign_up.findAll({
      where: { event_id: eventId},
      include: [{
        model: models.User,
       }]
    });
    if (EventSignUp) {
      return res.status(200).json({ EventSignUp });
    }
    return res.status(404).send("EventSignUp with the specified IDs does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateEventSignUp = async (req, res) => {
  try {
    const { eventId, userId } = req.params;
    const [updated] = await models.Event_sign_up.update(req.body, {
      
      where: {event_id: eventId, user_id: userId}
    });
    if (updated) {
      const updatedEventSignUp = await models.Event_sign_up.findOne({ where: {event_id: eventId, user_id: userId} });
      return res.status(200).json({ EventSignUp: updatedEventSignUp });
    }
    throw new Error("EventSignUp not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteEventSignUp = async (req, res) => {
  try {
    const { eventId, userId  } = req.params;
    const deleted = await models.Event_sign_up.destroy({
      where: { event_id: eventId, user_id: userId}
    });
    if (deleted) {
      return res.status(204).send("EventSignUp deleted");
    }
    throw new Error("EventSignUp not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createEventSignUp,
  getAllEventSignUps,
  getEventSignUpById,
  getEventSignUpByEventId, 
  updateEventSignUp,
  deleteEventSignUp
};
