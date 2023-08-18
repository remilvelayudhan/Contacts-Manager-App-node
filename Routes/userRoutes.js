const express =require('express');
const {getContacts,getContact} = require('../Controllers/ContactContoller')
const validateToken = require('../middleware/validateToken');
const router = express.Router();


router.get("/current",validateToken,currentUser);
router.post("/login",loginUser);
router.post("/register",regiserUser);

module.exports =router;