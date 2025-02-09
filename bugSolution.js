const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  try {
    // Validate userId (e.g., check if it's a number)
    if (isNaN(parseInt(userId))) {
      return res.status(400).send('Invalid user ID');
    }
    // ...database query or other operation using userId...
    res.send(`User ${userId}`);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send('Server error');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});