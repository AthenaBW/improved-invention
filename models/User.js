// Importing dependencies from mongoose library
const { Schema, model, } = require('mongoose'); 

// User Schema and email validation
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },   email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/]
    },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
});

// Virtual friend count defined and returned in friends array
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// User model created
const User = model('User', userSchema);

// User model export

module.exports = User;