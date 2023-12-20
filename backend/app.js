const express = require("express");
const bodyParser = require('body-parser');
const connectDB = require("./db/conn");
const cors = require("cors")
const env = require("dotenv").config()

const port = process.env.PORT || 5000;

const app = express();

// app.use(express.json())
app.use(bodyParser.json());
app.use(cors());


app.use(express.urlencoded({extended:false}))
connectDB()
app.use("/fruit/user", require("./router/userRouter"))

app.listen(port, ()=> console.log(`server is running of port ${port}`))