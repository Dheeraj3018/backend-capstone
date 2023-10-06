const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)
app.get("/", (req, res) => res.json({ msg: "hello world after the class" }));

// Connect to MongoDB

mongoose.connect('mongodb+srv://vsdheeraj17:Dheeraj123@cluster4.nazhwp5.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "Courses" }).then(() => {
  console.log('MongoDB Connected.!!!');
}).catch(error => console.log('Connection Error ::', error));

app.listen(9000, () => console.log('Server running on port 9000'));