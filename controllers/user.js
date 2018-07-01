exports.findById = function(req, res) {
	var id = req.params.id;

	const request = require('request');
	request({ 
		url:'https://api.github.com/users/' + id + '/followers', 
		headers: { 'user-agent': 'cschaefer66' },
		json: true
	}, function (err, resp, body) {
		
		if (err) { return console.log(err) };
		
		var logins = { followers: [] };
		for (var i=0; i<5; i++) {
			if (body[i]) {
				logins.followers.push(body[i]["login"]);
			}
		}
		return res.send(logins);
	});
};