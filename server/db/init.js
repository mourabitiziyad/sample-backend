const models = require("./models");

const createVenues = async () => {
    const venue1 = await models.Venue.create({ venue_name: "Gymnasium" });
    const venue2 = await models.Venue.create({ venue_name: "Field near Maingate" });
    const venue3 = await models.Venue.create({ venue_name: "Mini-foot near Proxy" });
    const venue4 = await models.Venue.create({ venue_name: "Online Event" });
    const venue5 = await models.Venue.create({ venue_name: "Outdoor Basketball Court (near Gym)" });
    const venue6 = await models.Venue.create({ venue_name: "Off-Campus" });
    const venue7 = await models.Venue.create({ venue_name: "Other" });
  };


const createSports = async () => {
    const sport1 = await models.Sport.create({ sport_name: "Football" });
    const sport2 = await models.Sport.create({ sport_name: "Basketball" });
    const sport3 = await models.Sport.create({ sport_name: "Handball" });
    const sport4 = await models.Sport.create({ sport_name: "Rugby" });
    const sport5 = await models.Sport.create({ sport_name: "Tennis" });
    const sport6 = await models.Sport.create({ sport_name: "Ping Pong (Table Tennis)" });
    const sport7 = await models.Sport.create({ sport_name: "Other" });
  };

  createVenues();
  createSports();