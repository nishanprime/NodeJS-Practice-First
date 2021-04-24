import express from 'express';

const app = express();

//port
const PORT = process.env.PORT || 3000;

//get route
app.get('/', (req, res) => {
  res.send('Bipin is very good');
});

//listener

app.listen(PORT, () => {
  console.log('Bipin is gay');
});
