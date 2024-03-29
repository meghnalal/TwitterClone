const express = require('express');
const cors = require('cors');


const PORT =  3003;
const app = express();

let storedData = null; 
app.use(cors({
  origin: 'http://localhost:3002'
}));

app.use(express.json());
  // Endpoint to handle POST requests
app.post("/api", (req, res) => {
  // Access the JSON data sent from the frontend
  const requestData = req.body;
  // Do something with the data
  storedData = requestData;
  console.log(storedData);
  // Respond with a message
  res.json({ message: "Data received successfully!",
             data: requestData});
  
});

app.get("/api", (req, res) => {
  if (storedData) {
  // Respond with the data or any other desired response
  //const requestData = req.query;
  console.log('requestDataget', storedData)
  res.json({ message: "Data retrieved from the server", data: storedData  });
  } else {
    res.json({ message: "no" });
  }
});
 
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});