import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import toml from "toml";
import fs from "fs";

import routes from './routes.js';

const config = toml.parse(fs.readFileSync('./config.toml', 'utf-8'))
const DB_CONNECTION = "mongodb+srv://" + config.user + ":" + config.password + "@cluster0.cadid.mongodb.net/" + config.db + "?retryWrites=true&w=majority";
const APP_PORT = process.env.PORT || 5000
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/v1', routes);

mongoose.connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(APP_PORT, () => console.log(`Server running on port: ${APP_PORT}`)))
    .catch((error) => console.log(error.message));
mongoose.set('useFindAndModify', false);
