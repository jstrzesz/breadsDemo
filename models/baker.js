const mongoose = require('mongoose');
const { model, Schema } = mongoose;
const Bread = require('./bread');

const bakerSchema = new Schema({
  name: {
    type: String,
    required: true,
    enum: [ 'Rachel', 'Monica', 'Joey', 'Ross', 'Chandler', 'Phoebe' ]
  },
  startDate: {
    type: Date,
    required: true,
  },
  bio: String,
}, { toJSON: { virtuals: true }});

bakerSchema.virtual('breads', {
  ref: 'Bread',
  localField: '_id',
  foreignField: 'baker',
});


// hooks
bakerSchema.post('findOneAndDelete', function() {
  Bread.deleteMany({ baker: this._conditions._id })
    .then(deleteStatus => {
      console.log(deleteStatus);
    })
    .catch(err => {
      console.error(err);
    });
});

const Baker = model('Baker', bakerSchema);

module.exports = Baker;

