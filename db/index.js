import express, { response } from 'express'
//import { request } from 'http';
import mongoose from 'mongoose';
import { Person } from './personMod.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const connectdb = async() => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/visadb');
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
}

app.post("/person", async (request, response) => {
    try{
        const reqData = request.body;
        const person = new Person(reqData);
        await person.save();
        response.send({message: "person inserted"});
    }catch(error){
        response.send({message: "SOmething went wronngg"})
    }
})

app.get("/person", async(request, response) =>{
    try {
        const person = await Person.find();
        response.send({persons:person});
    } catch (error) {
        response.send({message: "Soething not right"})
    }
})

app.get("/person/:adhar", async(request, response) => {
    try {
        const person = await Person.findOne({adhar: request.params.adhar});
        if(person == null)
        {
            response.status(404).send("person not in the list ")
        }
        else
        {    
            response.send({person:person});
        }
    } catch (error) {
        response.status(500).send({message: "Soething not right"})
    }
});

app.delete("/person/:adhar", async(request, response) => {
    try {
        const person = await Person.deleteOne({adhar: request.params.adhar});
        response.send({message:"person deleted"});
        console.log(person);
    } catch (error) {
        response.status(500).send({message: "Soething not right"})
    }
});
 
app.put("/person/:adhar", async(request, response) => {
    try {
        const person = await Person.updateOne({adhar: request.params.adhar}, request.body);
        response.send("person data updaed ")
        console.log(person);
    } catch (error) {
        response.status(500).send({message: "Soething not right"})
    }
});

app.listen( 4900, () => {
    console.log("server stared on 4900");
    connectdb();
    //mongoose.connect('mongodb://127.0.0.1:27017/institutedb');

})

