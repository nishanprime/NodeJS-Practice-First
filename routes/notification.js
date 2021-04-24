import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Coming from notificaiton get route');
});
router.post('/', (req, res) => {
  res.send('Coming from notificaiton post route');
});

export default router;
