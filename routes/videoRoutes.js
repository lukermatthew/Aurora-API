const express = require('express');
const videoController = require('../controllers/videoController');

const router = express.Router();

router.route('/').get(videoController.getAllVideos);
router.route('/search').get(videoController.searchVideos);
module.exports = router;
