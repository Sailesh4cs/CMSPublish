const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/check-entry', (req, res) => {
  const entry = req.body;

  // Custom logic to determine if the entry should be blocked
  const shouldBlock = entry.fields.title['en-US'].includes('block');

  if (shouldBlock) {
    return res.status(200).json({ allowPublish: false });
  } else {
    return res.status(200).json({ allowPublish: true });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
