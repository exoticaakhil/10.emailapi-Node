

const { StatusCodes } = require('http-status-codes')
const mailHandler = require('../config/mail')

 const homePage = async (req, res) => {
    try {
        res.render("index.ejs")
    }catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: true , msg: err.message })
    }
}

 const uploadPage = async (req, res) => {
    try {
        res.render("upload.ejs")
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: true , msg: err.message })
    }
}

 const mailController = async (req, res) => {
    try {
        const { to,sub,msg} = req.body
        let template = `<div> ${msg} </div>`
        let fileData=[{
            filename:req.file.filename,
            path: req.file.path
        }]
        
        await mailHandler(to,sub,template,fileData).then(out => {
            return res.status(StatusCodes.ACCEPTED).json({ status: true,out})
        }).catch(err => {
            return res.status(StatusCodes.CONFLICT).json({ status: true, out})
        })
    }catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: true , msg: err.message })
    }
}

module.exports = {homePage,uploadPage,mailController}