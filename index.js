const express = require("express")

const app = express()

const port = process.env.PORT || 4000

app.listen(port)

app.get("/", (req, resp) => {

    resp.send("Hola Thi!")
})

console.log(`escuchando en puerto ${port}`)
