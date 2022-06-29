// YOUR CODE HERE
const express      = require("express");
const morgan       = require("morgan");
const bodyParser   = require("body-parser");
const cors         = require("cors");
const studentStore = require("./routes/store");
const { NotFoundError } = require("./utils/errors");

const app = express();

app.use(morgan("tiny"));

app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).send({ping: "pong"});
});

app.use("/store", studentStore);
app.use((req, res, next) => {
    next (new NotFoundError());
})

app.use((error, req, res, next) => {
    const { status, message } = error;

    const errorObject = {
        status: status || 500,
        message: message || "Something went wrong with the application.",
    };

    res.status(status).send({ error: errorObject });
})

const port = process.env.port || 3001;

module.exports = app;