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
// module.exports = connectDatabase;

const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URL);
    console.log(`MongoDB connected with server: ${connection.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Exit the process if MongoDB fails to connect
  }
};

module.exports = connectDatabase;
