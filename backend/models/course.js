const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const courseSchema = new mongoose.Schema({
   
        name: {
          type: String,
          required: true
        },
        universities: {
          type: [{
            name: {
              type: String,
              required: true
            },
            url: {
              type: String,
              required: true
            }
          }],
          validate: [arrayLimit, '{PATH} exceeds the limit of 10']
        }
      }, { timestamps: true });
      
      function arrayLimit(val) {
        return val.length <= 10;
      }
      const Course = mongoose.model('Course', courseSchema);

      module.exports = Course;