const express = require("express");
const cors = require("cors");
const app = express();
const path= require('path')
app.use(cors());


const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "dist")));
 app.use(express.static(path.join(__dirname, "src/images")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname , '/dist/index.html'));
});

app.listen(PORT, () => console.log("Listening on port 8080"));