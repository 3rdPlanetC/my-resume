const mongoose = require('mongoose')
const { Schema } = mongoose

const BlogSchema = new Schema({
    blog_id: { 
        type: String, 
        index: true 
    },
    blog_title: { 
        type: String, 
        required: true 
    },
    blog_buffer: {
        type: Buffer
    }
})

mongoose.model('Blog', BlogSchema)