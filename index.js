//ES6 
//import  Express  from "express";
const Express = require("express");
//import bodyparser from "body-parser"; 
const bodyparser = require("body-parser");
const user = require("./app/routes/user");
const Blogs = require("./app/routes/blog");

 const app = Express(); 
 const port = 8000; 

 app.use(bodyparser.urlencoded({ extended: true }))
 app.use(bodyparser.json());


// routing 
app.use("/User", user);
app.use("/Blogs", Blogs);


 //app.use(Expresss.static("public"));

 
//  app.get("/videoEdu", (request, response) => {
//     response.json({
//         data: {
//         Title: "Present Tense",
//         author: "Michel",
//         Deskription: " jadjjdjhhhh",
//         Category: "SMP",  
//         Durasi: 11,
//         },
//     })
//  });

// const server = http.createServer((req, res) => {});


// app.post("/videoEdu", (request, response) =>  {
//     console.log({request});
//     response.json({
//         author: request.body.author,
//     });
// })

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});