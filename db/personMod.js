import mongoose, { Schema } from "mongoose";

const personSchema = new Schema(
{
    adhar:Number,
    fname:String,
    lname:String,
    fathername:String,
    age: Number,
    gender: String,
    mob: Number,
    email: String,
    pass: String,
    city: String,
    country: String,
    state: String,
    pin: Number,
    status: String
}
)
export const Person = mongoose.model("person", personSchema);
 

// {
//     "adhar": 234567890121,
//     "fname": "Nikhil",
//     "lname": "Hero",
//     "fathername": " ",
//     "age": 30,
//     "gender": "Male",
//     "mob": 1234567890, 
//     "email": "john@example.com",
//     "pass": "password123",
//     "city": "New York",
//     "country": "USA",
//     "state": "New York",
//     "pin": 10001 
//   }
  