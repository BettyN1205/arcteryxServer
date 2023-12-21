const express =require('express');
const cors = require("cors")
const app =express();
require("dotenv").config();
const PORT=process.env.PORT||5050;
app.use(cors());
app.use(express.json());
const productRoutes =require('./routes/clothing-routes');
app.use('/clothing-size',productRoutes);

app.listen(PORT,()=>{console.log(`running at http://localhost:${PORT}`);});