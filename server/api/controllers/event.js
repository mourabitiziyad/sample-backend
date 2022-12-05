const models = require("../../db/models");

const createEvent = async (req, res) => {
  const { event_name, event_date, start_time, end_time, event_type, other_event, venue_id, other_venue, max_participants, description, owner } = req.body
  const pre_description = `${event_type === '7' ? `Event: ${other_event}\n` : '' }${venue_id === '7' ? `Venue: ${other_venue}\n` : '' }`
  const event = {
    event_title: event_name,
    event_description: `${pre_description}${description}`,
    sport_id: event_type,
    event_date: event_date,
    event_start_time: start_time,
    event_end_time: end_time,
    venue_id: venue_id,
    max_participants: max_participants,
    user_id: owner
  }
  try {
    const Event = await models.Event.create(event);
    return res.status(201).json({
      Event: Event
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await models.Event.findAll({
      include: [{
        model: models.User,
       }]
    });
    return res.status(200).json({ events });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getEventById = async (req, res) => {
  try {
    const { eventId } = req.params;
    const Event = await models.Event.findOne({
      where: { event_id: eventId },
      include: [{
        model: models.User,
       }]
    });
    if (Event) {
      return res.status(200).json({ Event });
    }
    return res.status(404).send("Event with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const [ updated ] = await models.Event.update(req.body, {
      where: { event_id: eventId }
    });
    if (updated) {
      const updatedEvent = await models.Event.findOne({ where: { event_id: eventId } });
      return res.status(200).json({ Event: updatedEvent });
    }
    throw new Error("Event not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const deleted = await models.Event.destroy({
      where: { event_id: eventId }
    });
    if (deleted) {
      return res.status(204).send("Event deleted");
    }
    throw new Error("Event not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent
};
