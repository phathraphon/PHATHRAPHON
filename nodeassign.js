var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    var m = req.method;
    if (m == 'GET') {
        res.writeHead(200, { 'Content-Type': 'plain/text' });
        res.write('GET Method:\n');
        var q = url.parse(req.url, true).query;
        var zxc = new URLSearchParams(q);
        for (var pair of zxc.entries()) {
            res.write(pair[0] + '=' + pair[1] + '\n');
        }
        res.end();
    }
    else if (m == 'POST' || m == 'PUT' || m == 'DELETE') {
        let JSONbody = '';
        res.writeHead(200, { 'Content-Type': 'application/json' });
        req.on('data', function (data) {
            JSONbody = data;
        });
        req.on('end', function() {
            JSONbody = JSONbody.toString();
            console.log(JSONbody);
            JSONbody = JSONbody.replace(/[\n]/, '').split(/[ \t&,]/,);
            JSONbody = JSON.stringify(JSONbody);
            res.end(JSONbody);
        });
    }
    else{

        
        res.writeHead(400, { 'Content-Type': 'plain/text' });
        res.write('ERROR: "Invalid Request"');
        res.end();
    }

}).listen(8082);