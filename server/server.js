const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());
let users=[];
app.post('/register',(req,res)=>{
    const{name,email,password}=req.body;
    if(!name||!email||!password){
        return res.status(400).json({message:"All feilds are required"});
    }
    const existingUser=users.find(user=>user.email==email);
    if(existingUser){
        return res.status(409).json({message:"user already exists"});
    }
    users.push({name,email,password});
    res.status(201).json({message:"user registered succesfully"});
});
app.post('/login',(req,res)=>{
    const{email,password}=req.body;
    if(!email||!password){
        return res.status(400).json({message:"email and password are required"});
    }
    const user=users.find(u=>u.email==email&& u.password==password);
    if(!user){
        return res.status(401).json({message:"Invalid credentials"});
    }
    res.status(201).json({message:`welcome back,${user.name}`});
});
app.put('/users/:email',(req,res)=>{
    const email=req.params.email;
    const {name,password}=req.body;
    const user=users.find(u=>u.email==email);
    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    if(name) user.name=name;
    if(password)  user.password=password;
    res.status(200).json({message:"user updated succesfully",user});
});
app.delete('/users/:email', (req, res) => {
    const email = req.params.email;
    const index = users.findIndex(u => u.email === email);
    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }
    users.splice(index, 1);
    res.status(200).json({ message: "User deleted successfully" });
});

app.listen(3001,()=>{
    console.log("server is running on the port ");
});