<!DOCTYPE html>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html lang="en">
<head>

<c:url value="/css/bootstrapcss/bootstrap.css" var="bootstrapcss" />
<link href="${bootstrapcss}" rel="stylesheet" />


<!-- 
	<spring:url value="/css/main.css" var="springCss" />
	<link href="${springCss}" rel="stylesheet" />
	 -->
<c:url value="/css/main.css" var="maincss" />
<link href="${maincss}" rel="stylesheet" />

<c:url value="/css/bootstrapcss/bootstrap.css.map" var="bootstrapmincss" />
<link href="${bootstrapmincss}" rel="stylesheet" />

<c:url value="/js/jquery.min.js" var="jqueryjs"/>
<script src="${jqueryjs}" type="text/javascript" ></script>

<c:url value="/js/app1.js" var="app1js"/>
<script src="${app1js}" type="text/javascript" ></script>

<c:url value="/js/app2.js" var="app2js"/>
<script src="${app2js}" type="text/javascript" ></script>

<c:url value="/js/bootstrapjs/bootstrap.js" var="bootstrapjs"/>
<script type="text/javascript" src="${bootstrapjs}"></script>

<c:url value="/js/bootstrapjs/bootstrap.min.js" var="bootstrapminjs"/>
<script type="text/javascript" src="${bootstrapminjs}"></script>

<c:url value="/js/bootstrapjs/bootstrap.js.map" var="bootstrapmapjs"/>
<script type="text/javascript" src="${bootstrapmapjs}"></script>


</head>
<body>

	<nav class="navbar navbar-inverse">
		<div class="container">
			<div class="navbar-header">
				<a class="navbar-brand" href="#">Spring Boot</a>
			</div>
			<div id="navbar" class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<li class="active"><a href="#">Home</a></li>
					<li><a href="#about">About</a></li>
				</ul>
			</div>
		</div>
	</nav>

	<div class="container">

		<div class="starter-template">
			<h1>Spring Boot Web JSP Example</h1>
			<h2>Message: ${message}</h2>
		</div>
<button onclick="myFunction()">Try it</button>

	</div>
	<!-- /.container -->

</body>

</html>
