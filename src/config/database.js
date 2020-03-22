const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(db => {
    console.log("DB Connected");
  })
  .catch(error => {
    console.error("Error: " + error);
  });
