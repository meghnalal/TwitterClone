const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5002;

const app = express();

// Middleware to parse JSON bodies
app.use(express.static('public'));
app.use(bodyParser.json());


app.post('/api', (req, res) => {
  const inputData = req.body.input; // Assuming you're sending the data as { input: "some value" }
  
  // Do something with the received data, e.g., save it to a database
  
  res.json({ message: 'Data received successfully!' });
});

app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});