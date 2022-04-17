const mongoose = require('mongoose');
const dbConnect = async (DB_NAME = 'auth-transition') => {
    try {
      const dbUrl = process.env.DB_CLOUD.replace('DB_NAME', DB_NAME);
      await mongoose.connect(dbUrl);
      console.log('Connected to MongoDB')
    } catch (err) {
      console.log('DB Connection Error', err);
    }
  };

module.exports = {
    dbConnect
  };