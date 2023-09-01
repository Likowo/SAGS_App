const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    serviceName:{ type: String, required: true}, 
    serviceType: { type: String, required: true},
    biengOffered: Boolean
});

const Service = mongoose.model('Service', serviceSchema)

module.exports= Service;