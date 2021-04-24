import express from 'express';
import userRouter from './routes/users.js';
import postRouter from './routes/post.js';
import notificationRouter from './routes/notification.js';
import accountRouter from './routes/account.js';
const app = express();

//port
const PORT = process.env.PORT || 3000;

//get route
app.get('/', (req, res) => {
  res.send('Bipin is very good');
});

app.use('/users', userRouter);

app.use('/users/posts', postRouter);

app.use('/users/account', accountRouter);

//listener

app.use('/users/notification', notificationRouter);

app.listen(PORT, () => {
  console.log('Bipin is gay');
});
