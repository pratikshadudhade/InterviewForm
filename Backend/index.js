const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({ dest: 'uploads/' });

app.get('/', (req, res) => {
  res.send(`
    <h2>Upload File</h2>
    <form action="/upload" method="POST" enctype="multipart/form-data">
      <input type="file" name="myfile" />
      <button type="submit">Upload</button>
    </form>
  `);
});

app.post('/upload', upload.single('myfile'), (req, res) => {
  res.send(' File uploaded: ' + req.file.originalname);
});

app.listen(3000, () => console.log(' Server running at http://localhost:3000'));