require("dotenv").config()
const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const bcrypt = require("bcryptjs")

require("./src/db/conn");
const Register = require("./src/models/registers");
// const order=require("./models/payment")

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "/public");
const template_path = path.join(__dirname, "/templates/views");
const partials_path = path.join(__dirname, "/template/partials");

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(static_path));

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("index.hbs");
});

app.get("/index", (req, res) => {
    res.render("index")
});

app.get("/register", (req, res) => {
    res.render("register.hbs")
});
app.get("/login",(req,res)=>{
    res.render("login.hbs")
});

app.get("/forgotPass",(req,res)=>{
    res.render("forgotPass.hbs");
});
app.get("/payment",(req,res)=>{
    res.render("payment.hbs");
});
app.get("/privacy",(req,res)=>{
    res.render("privacy.hbs");
});
app.get("/refund",(req,res)=>{
    res.render("refund.hbs");
});

app.get("/terms_and_cond",(req,res)=>{
    res.render("terms_and_cond.hbs");
});



app.get("/terms_and_cond", (req, res) => {
    res.render("terms_and_cond.hbs")
});

app.post("/register", async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.cpassword;

        if (password === cpassword) {
            const registerEmployee = new Register({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                cpassword: req.body.cpassword
            })

            const registered = await registerEmployee.save();
            

            res.status(201).render("login.hbs");
        }
        else {
            res.send("passwords are not matching")
        }

    } catch (error) {
        res.status(400).send(error);
    }
})


app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
            
        const userEmail = await Register.findOne({ email: email });

        const isMatch = await bcrypt.compare(password,userEmail.password);
        if(isMatch){
            res.status(201).render("index.hbs");
        }else{
            res.send("password  not matching");
        }
    } catch (error) {
        res.status(400).send("invalid login details")
    }
})



app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})