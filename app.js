const express = require('express');
const app = express();
app.use(express.json()); // For parsing JSON in request bodies
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded data
app.get('/', (req, res) => {
    res.send('Hello, this is your homepage!');
  });
  
  app.get('/about', (req, res) => {
    res.send('This is the about page.');
  });
  
  // Add your other routes and logic here...
  const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
