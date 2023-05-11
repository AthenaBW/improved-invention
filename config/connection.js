// Import mongoose library
const mongoose = require('mongoose');

// Connecting to the MongoDB database using the MongoDB URI provided in the environment 
//default URI if unavailable
mongoose.connect(process.env.MONOGDB_URI || {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

// Exporting connection to database as a module
module.exports = mongoose.connection