
(function () {

	reqwest({
		url: './data.json',
		type: 'json',
		method: 'get',
		error: function (err) {
			console.log('ERROR:', err)
		},
		success: function (data) {
			console.log(data)
			render(data) 
		}
	})

	function render (data) {
		var template = Handlebars.compile(document.getElementById('main_template').text)
		var html = template(data)
		document.body.innerHTML = html
	}

})()