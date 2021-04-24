import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';

// db connection
router.get('/', (req, res) => {
  res.send('Bipin has changed his gender, he is no more a gay');
});
router.post('/');
export default router;
