const mongoose = require('mongoose');
const colors = require('colors'); // <-- import colors

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Database connected successfully'.green.bold);
  } catch (error) {
    console.error(`Database connection failed: ${error.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDatabase;
