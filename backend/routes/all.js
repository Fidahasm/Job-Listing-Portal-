// const express = require('express')
// const app = express()
const candidateRoute = require('./candidateRoutes')


module.exports = function apiRoutes(app){
    app.use('/web/api/candidate',candidateRoute)
}
