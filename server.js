const express =require('express');
const connectDb=require('./Config/dBConnection');
const dotenv =require('dotenv').config();
const errorHandler=require('./middleware/errorHandler');

connectDb();
const app=express();
const port=process.env.PORT || 5000; 


app.use(express.json());
app.use("/api/contacts",require('./Routes/contactRoutes'));
app.use("/api/users",reuire('./Routes/userRoutes'));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});