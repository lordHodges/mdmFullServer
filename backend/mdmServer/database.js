const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mdm';

mongoose.connect(URI)
.then(db => console.log('DB is Online!!!'))
.catch(err => console.log(err));


module.exports = mongoose;