// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function sayhello () {
	var name =
		document.getElementById("name").value;
		var message = "hello " + name + "!"

		document
		.getElementById("content")
		.textContent = message;
}