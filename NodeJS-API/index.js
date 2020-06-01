const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Opa. Tudo certo ?')
})

app.listen(8080)
