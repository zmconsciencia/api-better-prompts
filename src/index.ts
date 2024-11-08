import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import fieldsRoute from "./routes/fields";
import mongoose from "mongoose";
import devTypesRoute from "./routes/devTypes";
import frameworksRoute from "./routes/frameworks";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

app.use("/api/fields", fieldsRoute);
app.use("/api/devtypes", devTypesRoute);
app.use("/api/frameworks", frameworksRoute);

mongoose
  .connect(process.env.MONGO_URI || "", {
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
