/* eslint-disable no-console */
import mongoose from "mongoose";
import config from "../src/config/config";
import app from "../src/app";
import cors from "cors";
// const corsOptions = {
//   origin: 'http://localhost:3000',  // Set this to your frontend's URL
//   methods: ['GET', 'POST'],          // List allowed methods, or allow all
//   allowedHeaders: ['Content-Type'],  // Specify allowed headers if needed
//   credentials: true                  // Allow credentials if needed
// };

// app.use(cors(corsOptions));
app.use(cors({ origin: '*' }));

app.listen(config.port, (err) => {
  if (err) console.log(err);
  console.log(`Server started at port ${config.port}`);
});

mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected..."))
  .catch((e) => console.log(e));
