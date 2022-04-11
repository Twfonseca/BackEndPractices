const express =require('express')
const path = require('path')
const routApi= require('./routes/api')
const app =express()
const PORT= 3000
app.use('/api', routApi)
app.use(express.static(path.join(__dirname,'public')))
app.listen(ROUT, ()=>{
    console.log(`Server running on port${PORT}` )
})





