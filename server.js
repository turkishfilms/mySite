const { Router } = require('express')

const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    server = app.listen(port, () => console.log(`Preach It!! ${port}`)),
    router = express.Router(),
    path = require('path')
app.use(express.static('public'))

router.get('*', (req, res) => {
    res.send("trash kid 404, you are literally lost")
})
app.use('/', router)