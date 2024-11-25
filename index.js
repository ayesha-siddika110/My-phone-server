const express = require('express');
const cors = require('cors')  //cors k declare korte hobe

const app = express();
const port = process.env.PORT || 5000;


app.use(cors()) // middle were hisebe cors k set korte hobe tahole data k access kora jabe

app.use(express.json())


const users = [
    { id: 1 ,name: "ayesha", gmail: "ayesha@gmail.com", address: "dinajpur"},
    { id: 2 ,name: "isha", gmail: "isha@gmail.com", address: "dinajpur"},
    { id: 3 ,name: "mariya", gmail: "mariya@gmail.com", address: "dinajpur"},
    { id: 4 ,name: "ridisha", gmail: "ridisha@gmail.com", address: "dinajpur"},
]


app.get('/', (req, res)=>{
    res.send('users server is rUnning')
})
app.get('/users', (req, res)=>{
    res.send(users)
})
app.post('/users', (req, res)=>{
    console.log('post api hitting');
    console.log(req.body); //create a post api on the server

    const newUser = req.body;
    newUser.id = users.length + 1 
    users.push(newUser)
    res.send(newUser)
    // console.log(users);
    
    
})


 app.listen(port, ()=>{
    console.log(`server is running on PORT: ${port}`);
    
 })