const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://akanshaanand:Akan123@cluster0.ttpct.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

exports.connect = async () => {
  // Connecting to the database
  await mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};
