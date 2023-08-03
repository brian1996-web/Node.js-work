const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();


// importing our database
const connectDB = require("./config/dbConfig");
const port = process.env.PORT || 3000;


// calling the configuration to run
const app = express();

//importing the Routes
const helloRoutes = require('./controllers/helloRoutes');
const employeeRoutes = require("./controllers/employeeRoutes");

app.use(express.urlencoded({ extended:false }));
app.use(express.json());

// calling the configuration to run
connectDB();

//setting up pug as our view engine
app.engine("pug",require("pug").__express);
app.set("view engine", "pug");
app.set("views",path.join(__dirname,"views"));

// setting up directory for static files
app.use(express.static(path.join(__dirname,'public')));
// using imported routes
app.use('/api', helloRoutes)

app.use('/api',employeeRoutes)





// app.get("/", (req, res) => {
//   res.send("Home page");
// });

// app.get("/about", (req, res) => {
//   res.send("A bout us page");
// });



// app.get('/',(req,res) => {
//   res.sendFile(path.join(__dirname,"index.html"));
// }
// )
// app.get('/about',(req,res) => {
//   res.sendFile(path.join(__dirname,"about.html"));
// });

// app.get('/hello', (req, res) => {
//   res.render(path.join("hello.pug"));
// })



//running the server on aspecific port(3000)
//this should always be the last line in the server file
// app.listen(port, () => console.log(` server is running at http://localhost:${port}`));
// anothe way of doing it
app.listen(port, () => console.log(" server is running at http://localhost:"+port));