import axios from "axios";

export async function fetchPersons(){
    try {
        const response = await axios.get("http://127.0.0.1:4900/person");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function savePerson(personData){
    try {
        const response = await axios.post("http://127.0.0.1:4900/person", personData);
        return response.data;

    } catch (error) {
        console.log(error);
    }
}

export async function deletePerson(adhar){
    try {
        const response = await axios.delete(`http://127.0.0.1:4900/person/${adhar}`);
        return response.data;

    } catch (error) {
        console.log(error);
    }
}

export async function fetchPersonByAdhar(adhar){
    try {
        const response = await axios.get(`http://127.0.0.1:4900/person/${adhar}`);
        return response.data;

    } catch (error) {
        console.log(error);
    }
}

export async function updatePerson(updatedData, adhar){
    try {
        const response = await axios.put(`http://127.0.0.1:4900/person/${adhar}`,updatedData);
        console.log(response);
        return response.data;
        
    } catch (error) {
        console.log(error);
    }
}