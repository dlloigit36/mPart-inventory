// functions to query data/records from mlist-api
// import React from "react";
import axios from "axios";

const API_HOST = import.meta.env.VITE_API_HOST;
const API_PORT = import.meta.env.VITE_API_PORT;
const API_URL = `http://${API_HOST}:${API_PORT}`;


const API_Key = import.meta.env.VITE_API_KEY;
const config = {
    params: { key: API_Key}
};


async function fetchClients(clientname) {
  let clientList = [];
  try {
    const result = await axios.get(API_URL + "/clients?clientname="+ clientname, config);
    // const result = await axios.get(API_URL + "/clients?clientname=*", config);
    clientList = result.data;
  } catch (error) {
    console.log(error);
  }
  return clientList; 
}

// function to send http post with client details to backend api post "/client/new"
async function addDbClient(params) {
  let clientDetails= {
    cname: params.name,
    cdesc: params.description
  };

  try {
    const result = await axios.post(API_URL + "/client/new", clientDetails, config);
    // console.log("posted new client to api. return =", result.data);
    
  } catch (error) {
    console.log("error connecting to machinery backend API = ", error.stack);
  }
  
}

const staticData = [
    {
        "id": 1,
        "name": "AAA Company",
        "description": "manually added from sql command 1."
    },
    {
        "id": 2,
        "name": "BBB Company",
        "description": "manually added from sql command 2."
    },
    {
        "id": 3,
        "name": "CCC Company",
        "description": "manually added from sql command 3."
    },
    {
        "id": 7,
        "name": "A1 company",
        "description": "from postman"
    },
    {
        "id": 8,
        "name": "B2 company",
        "description": "from website"
    },
    {
        "id": 9,
        "name": "B3 company",
        "description": "from website take 2"
    },
    {
        "id": 10,
        "name": "B4 company",
        "description": "from website take 3"
    },
    {
        "id": 11,
        "name": "B5 company",
        "description": "from website take 6"
    }
]

export default fetchClients;
export {addDbClient, staticData};
