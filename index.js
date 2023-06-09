const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// routes
const projects = require('./routes/api/projects');
const homeworks = require('./routes/api/homeworks');
const contents = require('./routes/api/contents');
const cta = require('./routes/api/Cta');
const footer = require('./routes/api/Footer');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/projects', projects);
app.use('/homework', homeworks);
app.use('/content', contents);
app.use('/cta', cta);
app.use('/footer', footer);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));