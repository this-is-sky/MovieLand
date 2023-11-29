import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const express = require("express");

// const app = express();

// app.get("/user", (req, res) => {
// console.log("User is called");
// })

// app.listen(4000,()=>{
//   console.log("Listening on port 4000");
// });

// const express = require('express');

// const app = express();

// app.get('/user',(req, res)=>{
//   console.log("User is called");
//   res.send("Hello user");
// })

// app.get('/',(req,res)=>{
//   // res.send("Server is listening on port");
//   res.sendFile(__dirname+"/index.html");

// })

//  app.listen(4000,()=>{
//   console.log("Listening on port 4000");
//  });