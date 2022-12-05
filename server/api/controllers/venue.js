const models = require("../../db/models");

const createVenue = async (req, res) => {
  try {
    console.log(req)
    const venue = await models.Venue.create(req.body);
    return res.status(201).json({
      venue
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllVenues = async (req, res) => {
  try {
    const venues = await models.Venue.findAll({
    });
    return res.status(200).json({ venues });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getVenueById = async (req, res) => {
  try {
    const { venueId } = req.params;
    const venue = await models.Venue.findOne({
      where: { venue_id: venueId },
    });
    if (venue) {
      return res.status(200).json({ venue });
    }
    return res.status(404).send("Venue with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateVenue = async (req, res) => {
  try {
    const { venueId } = req.params;
    const [updated] = await models.Venue.update(req.body, {
      where: { venue_id: venueId }
    });
    if (updated) {
      const updatedVenue = await models.Venue.findOne({ where: { venue_id: venueId } });
      return res.status(200).json({ venue: updatedVenue });
    }
    throw new Error("Venue not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteVenue = async (req, res) => {
  try {
    const { venueId } = req.params;
    const deleted = await models.Venue.destroy({
      where: { venue_id: venueId }
    });
    if (deleted) {
      return res.status(204).send("Venue deleted");
    }
    throw new Error("Venue not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createVenue,
  getAllVenues,
  getVenueById,
  updateVenue,
  deleteVenue
};
