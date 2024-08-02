const express = require('express')
const app = express();

app.get("/getList",(req,res)=>{
  res.send("Hello Api vercel i want to  add  more.......")
})







const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
