const mongoose = require("mongoose");
mongoose.connect(process.env.MONGOD_CONNECT_URI,{
//    useNewUrlParser: true,
//     // useUnifiedTopology:true,
//      useCreateIndex:true 
}).then(()=>{
    console.log(`connection Successful`);
}).catch((e)=>{
    console.log(`no connection`);
})