const express = require('express');
const app = express();

app.get('*', (req,res)=>{
  res.send('howdy');
})


app.listen(3000, () => {
  console.log('you have connected')
})
