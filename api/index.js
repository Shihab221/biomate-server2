/* eslint-disable no-console */
import mongoose from "mongoose";
import config from "../src/config/config";
import app from "../src/app";
import cors from "cors";
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend URL
  methods: ['GET', 'POST'], // Specify allowed methods if needed
  allowedHeaders: ['Content-Type', 'Authorization'], // Include headers you need to allow
  credentials: true, // This allows credentials (cookies, authorization headers) to be sent
};

// Apply the CORS middleware with options
app.use(cors(corsOptions));

// app.options('*', cors(corsOptions)); // Allow preflight requests for all routes

// { origin: '*' }
// app.use(cors(corsOptions));
// app.use(cors());

app.listen(config.port, (err) => {
  if (err) console.log(err);
  console.log(`Server started at port ${config.port}`);
});

mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected..."))
  .catch((e) => console.log(e));
