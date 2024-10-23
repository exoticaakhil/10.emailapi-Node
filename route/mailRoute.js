const mailRoute = require('express').Router()
const { homePage,uploadPage,mailController} = require('../controller/mailController')
const fileConfig = require('../middleware/fileConfig')

mailRoute.get(`/`, homePage)
mailRoute.get(`/upload`, uploadPage)

mailRoute.post(`/send/mail`, mailController)
mailRoute.post(`/send/mail/attachment`,fileConfig, mailController)


module.exports = mailRoute;