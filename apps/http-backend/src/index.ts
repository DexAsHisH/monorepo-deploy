import express from 'express';
import {prismaClient } from '@repo/db/client';


const app = express();
app.use(express.json());



app.post('/users',async(req:any,res:any)=>{
    const {username,password} = req.body;
    const user = await prismaClient.user.create({
        data:{
            username,
            password
        }
    })
    res.json(user);
});
app.get('/',async(req:any,res:any)=>{
    const users = await prismaClient.user.findMany();
    res.json(users);
});


app.listen(8000,()=>{
    console.log('Server is running on port 8000');
}
); 


