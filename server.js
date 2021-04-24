import express from 'express';
import userRouter from './routes/users.js';
const app = express();

//port
const PORT = process.env.PORT || 3000;

//get route
app.get('/', (req, res) => {
  res.send('Bipin is very good');
});

app.use('/users', userRouter);

//listener

app.listen(PORT, () => {
  console.log('Bipin is gay');
});
