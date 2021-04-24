import express from 'express';
import userRouter from './routes/users.js';
<<<<<<< HEAD
import userLogout from './routes/userLogout.js';
=======
import postRouter from './routes/post.js';
import notificationRouter from './routes/notification.js';
import accountRouter from './routes/account.js';
>>>>>>> c78fc7b1213fa4a1047338d4faf3b89e60530f55
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

<<<<<<< HEAD
app.use('/users/logout', userLogout);
=======
<<<<<<< HEAD
app.use('/users/posts', postRouter);
>>>>>>> c78fc7b1213fa4a1047338d4faf3b89e60530f55

app.use('/users/account', accountRouter);

//listener

app.use('/users/notification', notificationRouter);

app.listen(PORT, () => {
  console.log('Bipin is gay');
});
=======

>>>>>>> 2a7911f7bbe0ba58e1e565b229cbc8a36f10499a
