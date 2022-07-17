const express = require('express')
const { join } = require('path')

const app = express();
const port = 3000;

app.use( express.static(join(__dirname, './dist')));

app.get('*', (req, res)=> res.sendFile(join(__dirname, '.dist/index.html')));

app.listen(port, () => console.log( `Server is running on port: ${port}`));