import express from 'express';
const router = express.Router();
router.get('/', (req, res) => {
  res.send('This is get route of users');
});
router.post('/');
export default router;
