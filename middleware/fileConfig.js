const express = require('express')
const path = require('path')
const multer = require('multer')

//storage location and filename settings
const myStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Set the destination for the file storage
        cb(null, "documents/")
    },
    filename: (req, file, cb) => {
        // Set the filename (original name of the file with a prefix 'doc')
        cb(null, `doc_${file.originalname}`)
    }
})

//multer config
let fileConfig = multer({
    storage: myStorage,
    limits: {
        fileSize: 10 * 1024 * 1024 //10MB
    }
}).single('mfile')

// Exporting the multer configuration for use in other parts of the application
module.exports = fileConfig
