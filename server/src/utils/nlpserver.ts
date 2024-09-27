import axios from "axios";

const nlpserver = axios.create({
  baseURL: process.env.NLP_SERVER_URL,
});

export default nlpserver;
