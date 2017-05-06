var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;
var app = express();
var db= require("./models")
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");

// app.use(express.static(process.cwd() + "/public"));
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./public"));
app.use(methodOverride("_method"));
//app.use("/", routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/burger-api-routes.js")(app);


db.sequelize.sync().then(function(){
app.listen(PORT,function(){
	console.log("app is listening at "+ PORT)
})

})