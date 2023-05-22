const mongoose = require('mongoose');
const moment = require('moment');

// create reply schema
const replySchema = new mongoose.Schema(
    {
        // Set custom ID
        replyId: {
            type: mongoose.Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        replyBody: {
            type: String,
            required: true,
            maxLength: 400
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (newDate) => moment(newDate).format('MMM DD, YYYY [at] hh:mm a')
        }

    }
)