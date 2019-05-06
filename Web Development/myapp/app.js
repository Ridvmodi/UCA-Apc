var express = require('express')
var fs = require('fs')
var app = express()
app.post("/products.txt", function (request, response) {
	addToFile(request, function() {
		response.end();
	});
})
app.delete("/products.txt", function (request, response) {
	addToFile(request, function () {
		response.end();
	})
})
app.delete("/products", function (request, response) {
	fs.truncate("manageProducts/products.txt", 0, function() {
		console.log("All Records cleared")
	});
})
app.use(express.static(process.argv[3]));
app.listen(process.argv[2]);
console.log("Running on localhost")

function addToFile(request, callback) {

	var newData = [];
		var body = '';
	 	request.on('data', function(chunk) {
			body += chunk;
		});

		request.on('end', function() {
			var data = JSON.parse(body);
			newData = (data);
			console.log(data)
			fs.writeFile("manageProducts/products.txt", JSON.stringify(newData), function (error) {
				if(error) {
					throw error;
				}
			});
		});
}