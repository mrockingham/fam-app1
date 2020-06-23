const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')



dotenv.config({path: './config/config.env'})
connectDB();

const transactions = require('./routes/transactions')

const server = express()

server.use(express.json())
if(process.env.NODE_ENV === 'development'){
    server.use(morgan('dev'))
}

server.use('/api/v1/transactions', transactions)

if(process.env.NODE_ENV === 'production')
 {
server.use(express.static('client/build'))

server.get('*', (req,res) =>  res.sendFile(path.resolve(_dirname, 'client', 'build',
'index.html')))
 }
const PORT = process.env.PORT || 5000
server.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta.bold))