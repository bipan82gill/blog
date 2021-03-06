const express = require('express');
const morgan = require("morgan");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const blogRoutes = require('./Routes/blog.js');
const authRoutes = require('./Routes/auth.js')
const userRoutes = require('./Routes/user.js');
const categoryRoutes = require('./Routes/category.js');
const tagRoutes = require('./Routes/tag.js');

const app = express();
//database
mongoose
.connect(process.env.DATABASE_CLOUD,{useNewUrlParser:true, useCreateIndex: true,useFindAndModify:false})
.then(()=>console.log('DB connected'))
.catch(err=>{
    console.log(err);
})


app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(cookieParser())


//cors
if(process.env.NODE_ENV === 'development'){
app.use(cors({ origin:`${process.env.CLIENT_URL}`}));
}
//port 
app.use('/api',blogRoutes);
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', tagRoutes);

const port = process.env.PORT || 8000;

app.listen(port, ()=> console.log(`server is running on port ${port}`));