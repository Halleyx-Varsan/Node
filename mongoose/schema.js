const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50 
    },
    id: {
        type: String,
        required: true
    }
});


const classSchema = new mongoose.Schema({
    standard: {
        type: Number,
        required: true
    },
    section: {
        type: String,
        required: true,
        maxLength: 1
    }
});


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50 
    },
    dob: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        maxLength: 100, 
    },
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
    class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' }, 
    age: { type: Number }
});


studentSchema.pre('save', function(next) {
    const today = new Date();
    const dob = this.dob;
    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        this.age = age - 1;
    } else {
        this.age = age;
    }
    next();
});


const Subject = mongoose.model('Subject', subjectSchema);
const Class = mongoose.model('Class', classSchema);
const Info = mongoose.model('StudentInformation', studentSchema);

module.exports = {
    Subject,
    Class,
    Info
};
