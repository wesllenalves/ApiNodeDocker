const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI
console.log(`${MONGO_URI}`)
mongoose.connect(`${MONGO_URI}`, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));