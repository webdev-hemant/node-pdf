const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.MONGODB_CONNECTION, {
      dbName: process.env.DB_NAME,
    })
    .then((db) => {
      const { host, name } = db.connection;
      console.log(`DB=${name} & HOST=${host}`);
    })
    .catch((err) => {
      console.log({ err });
      process.exit(1);
    });
};

module.exports = connectDb;
