<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<!-- 다른 JSP 파일 호출 -->
	<%@include file="/frontendproject/header.jsp"%>
		<p>
			대문입니다.
			ctrl + f11 실행 [ 톰캣서버 ]
			코드변경되면 저장후에 [ctrl+f5 (강력 새로고침)]
			project -> build automacally 켜져 있어야 자동 새로고침 가능
		</p>
	<%@include file="/frontendproject/footer.jsp"%>

</body>
</html>