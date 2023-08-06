const express = require("express");
const mysql=require("mysql")
const app=express();
app.use(express.json());

const db=mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"Monisha8012",
    database:"mydb",

});
app.post('/register',(req,res)=>{
    db.query("INSERT IN TO users (username,password) VALUES{?,?}",
    [username,password],
    (err, result) =>{
        console.log("error")
    }

    )
}

)
app.listen(3001, ()=>{
    console.log("running server");

});
