const express = require('express')
const cors = require('cors')
const mentorsRouter = require('./routes/mentors.routes')
const PORT = 50577

const app = express()
app.use(cors({
    origin: '*',
    credentials: true
}))

app.use(express.json())
app.use('/api', mentorsRouter)


app.listen(PORT, () => console.log(`server started on port ${PORT}`))