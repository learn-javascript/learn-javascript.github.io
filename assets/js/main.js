
(function () {

	// add more files here if needed
	var files = ['javascript.json','text-editors.json']

	.forEach(function (filename) {
		getFile(filename).then(function (data) {
			render(data)
		})
	})

	function render (data) {
		var template = Handlebars.compile(document.getElementById('main_template').text)
		var html = template(data)
		var el = document.createElement('div')
		el.innerHTML = html
		document.getElementById('content').appendChild(el)
	}

	function getFile (filename) {
		return reqwest({
			url: '/data/' + filename,
			type: 'json',
			method: 'get'	
		})
	}

})()