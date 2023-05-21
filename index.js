const express = require("express")

const app = express()

const port = process.env.PORT || 4000

app.listen(port)

app.get("/", (req, resp) => {

    resp.send("Pagina inicial")
})

console.log(`escuchando en puerto ${port}`)
