const express = require('express')
const app = express()
const port = 3001

app.get("/", (req, res) => {
    res.send("Hello, I'm walk on EC2")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}` )
});