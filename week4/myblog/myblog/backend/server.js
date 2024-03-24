const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Database connection established successfully");
}) 

const blogRouter = require('./routers/blog.router');
 
app.use("/api/blogs", blogRouter);

app.listen(port, () => {
    console.log("Server is running at " + port);
})
