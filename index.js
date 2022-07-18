const express = require("express")
const connectMongo = require("./db")

connectMongo()

const app = express()

app.use(express.json())


app.use('/api/auth', require("./routes/auth"))
app.use('/api/notes', require("./routes/notes"))

app.listen(5000, () => {
    console.log("Server is Running at port 5000")
})