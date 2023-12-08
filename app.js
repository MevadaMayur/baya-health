const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = 5005;
const bodyParser = require('body-parser');
const cors = require('cors'); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.send("hello from express")
})

const loginRoutes = require('./routes/login_routes');
app.use('/login', loginRoutes);

app.listen(PORT, () => console.log('Server is running on', PORT));
