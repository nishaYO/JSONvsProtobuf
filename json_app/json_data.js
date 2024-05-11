const jsonData = {
    name: "nisha singhal",
    age: 19
}

const jsonBuffer = Buffer.from(JSON.stringify(jsonData))

console.log("json buffer", jsonBuffer);
console.log("json buffer length", jsonBuffer.length);