import express from "express";
import { signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.get('/login', (req, res) => {
  res.send('Login endpoint!');
});

router.post('/signup', signup);

router.get('/logout', (req, res) => {
  res.send('logout endpoint!');
});

router.get('/update', (req, res) => {
  res.send('Update endpoint!');
});

export default router;