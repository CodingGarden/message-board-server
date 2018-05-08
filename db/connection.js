const monk = require('monk');
const connectionString = process.env.MONGODB_URI || 'localhost/messageboard';
const db = monk(connectionString);

module.exports = db;