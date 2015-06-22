(function () {
	// add more files here if needed
	var files = ['javascript.json', 'node.json', 'jquery.json', 'text-editors.json']

	files.forEach(function (filename) {
		// create placeholder divs to enforce topic order
		var el = getTargetElement(filename.split('.')[0])
		document.getElementById('content').appendChild(el)

		getFile(filename).then(function (data) {
			render(data)
		})
	})

	function render (data) {
		var template = Handlebars.compile(document.getElementById('main_template').text)
		var html = template(data)

		var id = 'topic-' + data.title.replace(/ /g, '-')
		var el = document.getElementById(id)
		el.innerHTML = html
	}

	function getFile (filename) {
		return reqwest({
			url: '/data/' + filename,
			type: 'json',
			method: 'get'
		})
	}

	function getTargetElement (id) {
		var el = document.createElement('div')
		el.setAttribute('id', 'topic-' + id)
		return el
	}
})()
