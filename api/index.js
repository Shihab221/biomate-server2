
/* eslint-disable no-console */
import mongoose from "mongoose";
import config from "../src/config/config";
import app from "../src/app";
import cors from "cors";

const corsOptions = {
  origin: 'http://localhost:3001/', // Replace with your actual frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // List the HTTP methods you want to allow
  credentials: true, // This allows cookies to be sent
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'], // Specify the headers allowed
};

// Apply the CORS middleware with options
app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.cookie('cookieName', 'cookieValue', { 
    sameSite: 'None', 
    secure: true 
  });
  next();
});

app.options('*', cors(corsOptions)); // This enables handling preflight requests


app.listen(config.port, (err) => {
  if (err) console.log(err);
  console.log(`Server started at port ${config.port}`);
});

mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected..."))
  .catch((e) => console.log(e));
