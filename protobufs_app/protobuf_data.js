const protobuf = require('protobufjs')

const root = protobuf.loadSync("./data.proto")

const Data = root.lookupType("Data");

const pbData = Data.create({name: "Nisha Singhal", age : 19});

const pbBuffer = Data.encode(pbData).finish();


console.log("pb buffer ", pbBuffer);
console.log("pb buffer length ", pbBuffer.length);