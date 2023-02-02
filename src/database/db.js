const mongoose = require('mongoose');

const connectDatabase = () => {
  console.log("Wait connecting to the database");

  mongoose.set('strictQuery', false);

  const uri = process.env.MONGODB_URI;
  mongoose
    .connect(uri,
      { useNewUrlParser: true,
        useUnifiedTopology: true })
      .then(() => console.log("Connected with your database"))
      .catch((err) => console.log(err.message));
}

module.exports = connectDatabase;