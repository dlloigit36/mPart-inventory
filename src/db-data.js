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


export default fetchClients;
