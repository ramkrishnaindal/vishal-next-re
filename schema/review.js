
const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

var Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    comment: {
        type: String,
        required: true,
        trim: true
    },
    propertyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'property',
        default: null
    },
    rating: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    },
    id: false,
    toJSON: {
        getters: true,
        virtuals: true
    },
    toObject: {
        getters: true,
        virtuals: true
    }
}, {
    collection: 'review'
}
);

module.exports = schema;