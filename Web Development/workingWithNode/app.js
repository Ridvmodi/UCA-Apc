var http = require('http');
var fs = require('fs');
var url = require('url');


function readAndServe(pathName, contentType, response) {
	fs.readFile(pathName, function(error, data) {
		if (error) {
			throw error;
		} else {
			response.writeHead(200, {'Content-type': contentType});
			response.write(data);
			response.end();
		}
	});
}

function addToFile(pathName, request, callback) {

	var body = '';
  	request.on('data', function(chunk) {
		 body += chunk;
	});

	request.on('end', function() {
		var data = body;
		var newData;
		fs.readFile(pathName, function(error, data1) {
			if(error) {
				throw error;
			}
			newData = (JSON.parse(data1));
			newData.push(JSON.parse(data));
			fs.writeFile(pathName, JSON.stringify(newData), function(error) {
				if(error) {
					throw error;
				}
			});
			callback();
		});
   });
}

function changeToFile(pathName, request, callback) {

	var body = '';
  	request.on('data', function(chunk) {
		 body += chunk;
	});

	request.on('end', function() {
		var data = body;
		var newData = JSON.parse(data);
		fs.writeFile(pathName, JSON.stringify(newData), function(error) {
			if(error) {
				throw error;
			}
		});
		callback();
	});
}

http.createServer(function (request, response) {
	var pathName = url.parse(request.url).pathname;

	if(request.method === 'GET') {
		if(pathName === '/') {
			readAndServe("index.html", "text/html", response);
		} else if(pathName === '/script.js') {
			readAndServe("script.js", "text/javascript", response);
		} else if(pathName === '/tasks') {
			readAndServe("tasks.html", "text/html", response);
		} else if(pathName === "/1.txt") {
			fs.readFile("./1.txt", function(error, data) {
				if(error) {
					throw error;
				}
				response.writeHead(200, {"Content-type": "application/json"});
				response.write(data);
				response.end();
			});
		} else if(pathName === "/2.txt") {
			fs.readFile("./2.txt", function(error, data) {
				if(error) {
					throw error;
				}
				response.writeHead(200, {"Content-type": "application/json"});
				response.write(data);
				response.end();
			});
		} else {
			response.end();
		}
	} else if (request.method === "POST") {
		if(pathName === '/1.txt') {
			addToFile("1.txt", request, function () {
				response.end();
			});
		} else if (pathName === '/2.txt') {
			addToFile("2.txt", request, function () {
				response.end();
			});
		}
	} else if (request.method === "DELETE") {
		if(pathName === '/1.txt') {
			changeToFile("1.txt", request, function () {
				response.end();
			});
		} else if (pathName === '/2.txt') {
			changeToFile("2.txt", request, function () {
				response.end();
			});
		}
	} else {
		response.end();
	}
}).listen(8080, "127.0.0.1");


console.log("Running on 127.0.0.1:8080")