const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    method: "GET,POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  })
);

// app.use(
//   cors({
//     origin: process.env.CROS_ORIGIN,
//     credentials: true,
//   })
// );

app.use(express.static("public"));

app.use(express.json({ limit: "15kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(cookieParser());

//user Routes :=
const router = require("./router/userRouters.js");
app.use("/api/v1/users", router);

//data Routes :=
const datarouter = require("./router/dataRouter.js");
app.use("/api/v1/", datarouter);

module.exports = { app };
