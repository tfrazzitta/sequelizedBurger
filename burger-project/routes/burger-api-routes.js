var db=require("../models")

//var findAll ='SELECT FROM'

module.exports=function(app){


app.get("/",function(req,res){
	res.render("index2")
})


	app.get("/create", function(req,res){
		//console.log(req.body)
		db.burger.findAll({}).then(function(data, err){
			if (err) console.log(err)
			let temp= data.map((data)=>data.dataValues);
			//console.log("db data", data[0])
			//console.log("temp", temp)
			//let temp2= data.map((data))=>data.dataValues.filter((data) => data.devoured);
			res.render("index",{burger:temp})
			// res.json(data);
		})//db.burger
	}) //app.get


	app.post("/", function(req,res){
		db.burger.create(req.body).then(function(data){
			res.redirect("/create")
		})//db.burger
	}) //app.get



	app.put("/:id", function(req,res){
		var NewBurger={
				name:req.body.burger,
				devoured:req.body.devoured
		}

		console.log(req.params.id)
		db.burger.update(NewBurger,{
			where:{
				id:req.params.id
			}
		}).then(function(data){
			
			//if (err) console.log(err)
			let temp= data.map((data)=>data.dataValues);
			console.log("data", data)
			//console.log("db data", data)
			console.log("temp", temp)
			//console.log(req.params.devoured)
			res.redirect("/create")
		})//db.burger
	}) //app.get

// app.put('/', function(req, res) {
//     console.log(req.body.id)

//     burger.findOne({
//         where: {
//             id: req.body.id,
//         }
//     }).then(function updateSeqBurger(sq_burger) {
//         console.log(sq_burger);
//         sq_burger.update({
//             devoured: 0
//         }).then(function(whatever) {
//             res.redirect('/');
//         });
//     });
// });


	app.delete("/:id", function(req,res){
		console.log(req.params.id)
		db.burger.destroy({
			where:{
				id:req.params.id
			}
		}).then(function(data){
			res.redirect("/create")
		})//db.burger
	}) //app.get


	}//module.exoports



	







