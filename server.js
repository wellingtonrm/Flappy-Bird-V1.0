const express = require('express')
const path = require('path')
const app = express()
const port = 5000





app.use(express.static('public'));
app.use(express.static('css'));
app.use(express.static('modules'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))

})
app.get('/script', (req, res) => {
    res.sendFile(path.join(__dirname + '/modules/index.js'))

  
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})