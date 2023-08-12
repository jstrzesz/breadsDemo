// require mongoose
const mongoose = require('mongoose');

// shorthand for the Schema constructor
const { model, Schema } = mongoose;

const breadSchema = new Schema({
  // we will write our Schema here
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'http://placehold.it/500x500.png' },
  baker: {
    type: Schema.Types.ObjectId,
    ref: 'Baker',
  }
});

// helper methods
breadSchema.methods.getBakedBy = function() {
  return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`;
}

breadSchema.statics.getAllByBaker = function(name) {
  return this.where({ baker: name });
}

// Bread Model
const Bread = model('Bread', breadSchema);

module.exports = Bread;
