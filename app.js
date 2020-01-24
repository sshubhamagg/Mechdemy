var express=require('express');
var mongoose=require('mongoose');
var cors=require('cors');
var bodyParser=require('body-parser')

var app=express();


const routes = require('./router/indexRoute');
const port=3000;
const dbUrl="mongodb://127.0.0.1:27017/mechademy";

mongoose.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection.on('connected',()=>{
    console.log('mongodb connected');
    
})

mongoose.connection.on('error',(error)=>{
    console.log('mongodb connection failed',error);
    
})


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, PUT,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,Authorization,Accept-Language');
  next();
});

app.use('/mechademy',routes)

app.listen(port,()=>{
    console.log('server listening to port',port);    
})