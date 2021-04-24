import express from 'express';
const router = express.Router();
<<<<<<< HEAD
=======
import mongoose from 'mongoose';

// db connection
>>>>>>> 2a7911f7bbe0ba58e1e565b229cbc8a36f10499a
router.get('/', (req, res) => {
  res.send('This is get route of users');
});
router.post('/');
export default router;
