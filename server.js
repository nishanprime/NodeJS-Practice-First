import express from 'express';
import userRouter from './routes/users.js';
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Fetch Env variables from .env
dotenv.config();
const PORT = process.env.PORT || 3000;
const DB_Url = process.env.Mongo_db_url;

//port listener
app.listen(PORT, () => {
  console.log('Listening to the port on' + ' ' + PORT);
});

// db connection
mongoose.connect(DB_Url, {useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true})
  .then(() => console.log('successfully connected to database.'))
  .catch(err => console.log('connection to the database unsuccessful.'));


//get route
app.get('/', (req, res) => {
  res.send('Bipin is very good');
});

app.use('/users', userRouter);


