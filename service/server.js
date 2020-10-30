const express = require('express')
const cors = require('cors')
const app = express()

const { jobsList } = require('./jobsList')

app.set('port', process.env.PORT || 3001)

app.use(cors())
app.use(express.json())

app.get('/api/jobs', async (req,res) => {
    try {
        const jobsData = await jobsList()
        res.json(jobsData).status(200)

    } catch (error) {
        console.log('Dont wait more bro, doesnt works',error)
    }
})

app.listen(app.get('port'), () => {
    console.log(`Server on port.. ${app.get('port')}`)
})