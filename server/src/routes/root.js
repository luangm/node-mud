import express from "express";
import path from "path";
import jwt from "jsonwebtoken";

const router = express.Router();

const JWT_SECRET = "123456";

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/login', function(req, res) {
  // TODO: validate the actual user user
  let profile = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john@doe.com',
    id: 123
  };

  // we are sending the profile in the token
  let token = jwt.sign(profile, JWT_SECRET, { expiresIn: 60*60*5 });

  res.json({token: token});
});

export default router;
