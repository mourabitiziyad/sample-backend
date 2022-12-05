const apirouter = require("express").Router();

const indexRouter = require("./routes/temp")
const venueRouter = require("./routes/venue")
const userRouter = require("./routes/user")
const sportRouter = require("./routes/sport")
const eventRouter = require("./routes/event")
const notificationRouter = require("./routes/notification")
const EventSignupRouter = require("./routes/event_signup")


apirouter.use('/', indexRouter)
apirouter.use('/', venueRouter)
apirouter.use('/', userRouter)
apirouter.use('/', sportRouter)
apirouter.use('/', eventRouter)
apirouter.use('/', notificationRouter)
apirouter.use('/', EventSignupRouter)



module.exports = apirouter
