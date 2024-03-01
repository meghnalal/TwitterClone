const express = require('express');

const PORT = process.env.PORT || 5006;
const app = express();
app.use(express.json());

  // Endpoint to handle POST requests
app.post("/api", (req, res) => {
  // Access the JSON data sent from the frontend
  const requestData = req.body;
  // Do something with the data
  console.log(requestData);
  // Respond with a message
  res.json({ message: "Data received successfully!",
             data: requestData});
  
});
 
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});