const axios = require("axios");
const protobuf = require("protobufjs");
require("dotenv").config();

const serverUrl = process.env.REQUEST_BIN_URL;

const root = protobuf.loadSync("./data.proto");

const Data = root.lookupType("Data");

const pbData = Data.create({ name: "Nisha Singhal", age: 19 });

const pbBuffer = Data.encode(pbData).finish();

// Send Protocol Buffers data to remote server
const sendProtobufData = async () => {
    try {
        const startTime = new Date();
        const pbBuffer = Data.encode(pbData).finish();
        const response = await axios.post(serverUrl, pbBuffer);
        const endTime = new Date();
    const dataSize = pbBuffer.length;
    console.log("Protocol Buffers Data Sent Successfully!");
    return { endTime, startTime, dataSize }
} catch (error) {
    console.error("Error sending Protocol Buffers data:", error.message);
  }
};

module.exports = sendProtobufData;
