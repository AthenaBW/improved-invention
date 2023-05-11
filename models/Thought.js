// Dependencies imported from mongoose library
const { Schema, model } = require('mongoose'); 

// Reaction schema required
const reactionSchema = require('./Reaction');

// Defining the thought schema with all required fields
const thoughtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            required: true,
            minlength: 1,
            maxlenght: 280,
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: time => new Date(time).toLocaleString(),
        },
        username:{
            type: String,  
            required: true,
        },
        reactions:[reactionSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

// Adding a virtual property to the thought schema to get the total count of reactions on a thought

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

// Creating & Exporting the Thought model / schema to be used in other modules
const Thought = model('Thought',thoughtSchema)
module.exports = Thought
