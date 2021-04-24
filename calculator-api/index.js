const express = require('express');
const calc = require('./routes/calc');

const port=3000;
const app = express();

app.use(express.json())
app.use('/api/calc',calc);


app.listen(port,(err)=>{
if(err){
    console.log(`Error in running server`);
}
console.log(`Server is running on port ${port}`);
})