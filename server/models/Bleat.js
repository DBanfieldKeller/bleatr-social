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

    },
    {
        toJSON: {
            getters: true
        }
    }
);

// create bleat schema
const bleatSchema = new mongoose.Schema({
    bleatText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 400
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (newDate) => moment(newDate).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true
    },
    replies: [replySchema]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// total reply count
bleatSchema.virtual('replyCount').get(()=> this.replies.length);

// create bleat model
const Bleat = mongoose.model('Bleat', bleatSchema);

module.exports = Bleat