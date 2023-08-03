const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true, //removes white spaces after putting in information
  },
  lastname: {
    type: String
  },
  Age:{
    type:Number
  },
    Email: {
      type: String,
      unique: true  //doesnot store the element eg email more than once
    },
    telephone: {
      type: String
    }
  }
  )

  module.exports = mongoose.model("Employee",EmployeeSchema);