const models = require("../../db/models");

const createSport = async (req, res) => {
  try {
    console.log(req)
    const sport = await models.Sport.create(req.body);
    return res.status(201).json({
      sport
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllSports = async (req, res) => {
  try {
    const sports = await models.Sport.findAll({
    });
    return res.status(200).json({ sports });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getSportById = async (req, res) => {
  try {
    const { sportId } = req.params;
    const sport = await models.Sport.findOne({
      where: { sport_id: sportId },
    });
    if (sport) {
      return res.status(200).json({ sport });
    }
    return res.status(404).send("Sport with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateSport = async (req, res) => {
  try {
    const { sportId } = req.params;
    const [updated] = await models.Sport.update(req.body, {
      where: { sport_id: sportId }
    });
    if (updated) {
      const updatedSport = await models.Sport.findOne({ where: { sport_id: sportId } });
      return res.status(200).json({ sport: updatedSport });
    }
    throw new Error("Sport not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteSport = async (req, res) => {
  try {
    const { sportId } = req.params;
    const deleted = await models.Sport.destroy({
      where: { sport_id: sportId }
    });
    if (deleted) {
      return res.status(204).send("Sport deleted");
    }
    throw new Error("Sport not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createSport,
  getAllSports,
  getSportById,
  updateSport,
  deleteSport
};
