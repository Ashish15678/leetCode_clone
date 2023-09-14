const mongoose = require("mongoose");

async function connect() {
  await mongoose.connect(
    "mongodb+srv://root:root@cluster0.corp2ba.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log(mongoose.connection.readyState);
}
connect().catch((err) => {
  console.log(err);
});

export { connect };
