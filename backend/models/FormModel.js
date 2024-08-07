const mongoose = require('mongoose');

const formSubmissionSchema = new mongoose.Schema({
    minArea: {
        type: Number,
        required: true
    },
    maxArea: {
        type: Number,
        required: true
    },
    minPrice: {
        type: Number,
        required: true
    },
    maxPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Under Construction', 'Completed'],
        required: true
    }
}, {
    timestamps: true // This will add createdAt and updatedAt fields
});

const FormSubmission = mongoose.model('FormSubmission', formSubmissionSchema);
module.exports = FormSubmission;
