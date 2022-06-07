<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="HandheldFriendly" content="true">
    <title>BOARDBOOK</title>
    <link href="style.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
</head>
<body>
<nav class="navbar">
    <a href="index.jsp" class="nav-logo">BoardBook</a>
    <ul>
        <li><a href="index.jsp">Home</a> </li>
        <li><a href="aboutUs.jsp">About</a> </li>
        <li><a href="whiteboard.html">Whiteboard</a></li>
    </ul>
</nav>
<main>
    <div class="mcontent">
        <h1>Whiteboard</h1>
        <p>
            Here you can post a job or ask for advice on getting a Job
        </p>
        <a href="whiteboard.html" class="buttons" id = "Abtns" >Get Writing</a>
    </div>


    <div class = "image">
        <img src="images/whiteboard.png"  alt="hkhvhk" style=" padding-top: 26px">
    </div>
</main>
<br/>
<script>
    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
</script>
</body>
</html>