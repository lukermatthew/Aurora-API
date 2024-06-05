const mongoose = require('mongoose');
// const validator = require('validator');

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please tell us the title!']
    },
    thumbnail: {
      type: String,
      required: [true, 'Thumbnail is required!']
    },
    prompt: {
      type: String,
      required: [true, 'Prompt is required!']
    },
    video: {
      type: String,
      required: [true, 'Video is required!']
    },
    creator: {
      type: String,
      required: [true, 'A Creator is required!']
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: true
    }
  }
  // {
  //   toJSON: { virtuals: true },
  //   toObject: { virtuals: true }
  // }
);

const Video = mongoose.model('Videos', videoSchema);

module.exports = Video;
