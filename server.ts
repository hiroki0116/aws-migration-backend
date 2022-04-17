require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'dev'}` });

import express, { Application, Request, Response } from 'express';
import {dbConnect} from './helpers/db.helper';

const app: Application = express();

dbConnect();
app.use(express.json())


// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
console.log(`Server is running on PORT: ${PORT}`)
})