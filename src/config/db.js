const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Irumva:IrumvaEmmanuel97@cluster0.ws2ver4.mongodb.net/",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Error connecting to database:", err));

module.exports = mongoose;
