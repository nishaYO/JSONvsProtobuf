const axios = require("axios");
const { log } = require("console");
require("dotenv").config();

const serverUrl = process.env.REQUEST_BIN_URL;

const jsonData = {
  name: "Nisha Singhal",
  age: 19,
};

const jsonBuffer = Buffer.from(JSON.stringify(jsonData));

// Send JSON data to remote server
const sendJsonData = async () => {
  try {
    const startTime = new Date();
    const response = await axios.post(serverUrl, jsonData);
    const endTime = new Date();
    const dataSize = Buffer.byteLength(JSON.stringify(jsonData));
    console.log("JSON Data Sent Successfully!");
    return { endTime, startTime, dataSize }
  } catch (error) {
    console.error("Error sending JSON data:", error.message);
  }
};

module.exports = sendJsonData;



