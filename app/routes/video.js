const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');


router.get('/getAllVideo', videoController.getAllVideo);
router.get('/getVideo/:id', videoController.getVideoById);
module.exports = router;