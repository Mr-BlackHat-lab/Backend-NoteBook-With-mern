const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    Obj={
        a:'this is no.',
        number:34
    }
    res.json(Obj)
})

module.exports = router