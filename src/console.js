const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // eslint-disable-next-line no-unused-expressions
    res.send('Hello World !')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

