<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="">
</head>
<body>
	<span id= "hello-world" class="message"> Hello World <span> Hello World again</span></span>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>
	<script>
	var element = $("#hello-world");
	console.log(element);

	var sameElement = $(".message");
	console.log(sameElement);

	var child = $("#hello-world > span").html("<span>Holaaa Mundo</span>");
	//child.text("Holaaa Mundo");
	console.log(child);
</script>
</body>
</html>