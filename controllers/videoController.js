const catchAsync = require('../utils/catchAsync');
const Video = require('./../models/videoModel');

exports.getAllVideos = catchAsync(async (req, res, next) => {
  const videos = await Video.find().populate('creator', 'username avatar');

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: videos.length,
    data: {
      videos
    }
  });
});

exports.searchVideos = catchAsync(async (req, res, next) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({
      status: 'fail',
      message: 'Please provide a search query'
    });
  }

  // Create a regex for case-insensitive search
  const searchRegex = new RegExp(query, 'i');
  const videos = await Video.find({ title: { $regex: searchRegex } }).populate(
    'creator',
    'username avatar'
  );

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: videos.length,
    data: {
      videos
    }
  });
});
