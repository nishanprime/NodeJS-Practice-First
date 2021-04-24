import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Someone got logout');
  });

export default router;