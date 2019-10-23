<!DOCTYPE html>
<html lang="en">
<head>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Oauth2 Login</title>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" />
</head>

<script>
var name = '${urls}';
console.log(name);
</script>

<body>
<div class="container">
	<div class="col-sm-3 well">
		<h3>Login with:</h3>
		<div class="list-group">
			<c:forEach var = "url"  items="${urls}" >
         			<a href="${url.value}" class="list-group-item active">${url.key}</a>
      			</c:forEach>
		</div>
	</div>
</div>
</body>
</html>
