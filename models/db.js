const mongoose = require('mongoose');

let dbUrl = 'mongodb+srv://lacapsule88:angelo@lacapsule-9expd.mongodb.net/user?retryWrites=true';

const options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true
};
mongoose.connect(dbUrl, options, error => {
  if (error) {
    console.error(error);
  } else {
    console.log('Your database is operational...')
  }
});
module.exports = {
  mongoose: mongoose,
}
