import express from "express"

import Db_connect from "./config/db.js"

import TodoRouter from './routes/todoRoutes.js'
const app = express();

import 'dotenv/config'

const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//default route
app.get("/", (req, res) => {
  res.send("<p>welcome to the home page of Todo list</p>");
});

app.use('/todo/api/v1',TodoRouter)

// db connection function
Db_connect();

//app listen
app.listen(PORT, () => {
  console.log(`server started on port number ${PORT}`);
});
