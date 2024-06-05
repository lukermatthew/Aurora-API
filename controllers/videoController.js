const catchAsync = require('../utils/catchAsync');
const Video = require('./../models/videoModel');

exports.getAllVideos = catchAsync(async (req, res, next) => {
  const videos = await Video.find();

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: videos.length,
    data: {
      videos
    }
  });
});
