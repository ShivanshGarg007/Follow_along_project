// const mongoose = require("mongoose");
// const connectDatabase = () => {
//   mongoose
//     .connect(process.env.DB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then((data) => {
//       console.log(`mongod connected with server: ${data.connection.host}`);
//     });
// };
// module.exports = connectDatabase;  //module.exports will be accessible to other files that require() that module.

const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.DB_URL);
    console.log(`MongoDB connected with server: ${connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process on connection failure
  }
};

module.exports = connectDatabase;
