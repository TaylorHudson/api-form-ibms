const mongoose = require('mongoose');

const connectDatabase = () => {
  console.log("Wait connecting to the database");

  mongoose.set('strictQuery', false);

  mongoose.connect("mongodb+srv://root:root@cluster0.idzhpku.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Connected with your database"))
    .catch((err) => console.log(err));
}

module.exports = connectDatabase;