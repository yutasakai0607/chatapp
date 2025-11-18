import express from "express";

const router = express.Router();

router.get('/login', (req, res) => {
  res.send('Login endpoint!');
});

router.get('/signup', (req, res) => {
  res.send('Signup endpoint!');
});

router.get('/logout', (req, res) => {
  res.send('logout endpoint!');
});

router.get('/update', (req, res) => {
  res.send('Update endpoint!');
});

export default router;