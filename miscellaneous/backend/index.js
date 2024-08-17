const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true})); //standard line always use with post request
app.use(express.json());

// 1. get response
app.get("/register", (req,res) => {
    let {user, password} = req.query;
    res.send(`standard GET response. welcome ${user}!`);
});
// 2. post response
app.post("/register", (req,res) => {
    let {user, password} = req.body;
    console.log(req.body); //
    res.send(`standard POST response. welocme ${user}`);
});





// listeing in last---
app.listen(port, () => {
    console.log(`listening to port ${port}`);
});