const express = require('express')
const cors = require('cors')
const app = express()
const { jobsList } = require('./jobsList')

app.set('port', process.env.PORT || 3001)
app.use(cors())
app.use(express.json())
app.get('/api/jobs', async (req,res) => {
    const lista = await jobsList()
    res.json(lista)
})

app.listen(app.get('port'), () => {
    console.log(`Server on port.. ${app.get('port')}`);
})