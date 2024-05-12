const sendJsonData = require("./json_data.js");
const sendProtobufData = require("./protobuf_data.js");

// Function to measure and log bandwidth, latency and payload size
const logStats = (dataSize, startTime, endTime) => {
  const timeTaken = endTime - startTime; // in milliseconds
  console.log("Payload Size:", dataSize, "Bytes");
  console.log("Latency:", timeTaken, " ms");
  const bandwidth = (dataSize / timeTaken) * 1000; // convert time to seconds
  console.log("Bandwidth:", bandwidth, "bytes/second");
};

// Call sendJsonData and sendProtobufData functions asynchronously
(async () => {
    try {
      const { endTime: endTimeJson, startTime: startTimeJson, dataSize: dataSizeJson } = await sendJsonData();
      logStats(dataSizeJson, startTimeJson, endTimeJson);
      const { endTime: endTimeProtobuf, startTime: startTimeProtobuf, dataSize: dataSizeProtobuf } = await sendProtobufData();
      logStats(dataSizeProtobuf, startTimeProtobuf, endTimeProtobuf);
    } catch (error) {
      console.error("Error:", error.message);
    }
  })();
