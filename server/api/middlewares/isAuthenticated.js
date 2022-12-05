const jwt = require("jsonwebtoken");
const { default: Axios } = require("axios");

const isAuthenticated = (req, res, next) => {
```
  This is the middleware that will be used to check if the user is authenticated using jwt and office 365
  The same idea can be used to check if someone has admin rights etc. 
  This code is not useful for your projects, focus on the middleware concept
```
  const bearerHeader = req.headers.authorization;
  if (bearerHeader) {

    const PEMSTART = "-----BEGIN CERTIFICATE-----\n";
    const PEMEND = "\n-----END CERTIFICATE-----\n";

    return Axios.get("https://login.microsoftonline.com/" + process.env.AZURE_SECRET + "/discovery/v2.0/keys")
      .then((response) => {
        jwt.verify(
          bearerHeader,
          PEMSTART + response.data.keys[2]["x5c"][0] + PEMEND,
          { algorithms: "RS256" },
          (error) => {
            if (error) return res.status(401).json({ error: error.message });
            // next() means it's good to go to the next middleware or to the actual route handler
            else next();
          },
        );
      })
      .catch((error) => {
        return res.status(401).json({ error: error.message });
      });
  } else {
    // if there is no token
    // return an error
    res.status(401);
  }
};

module.exports = isAuthenticated;
