<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	<!-- 뷰포트 : 반응형 동작 코드  -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- 부트스트랩에서 만든 CSS 적용 -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
	<!-- 썸머노트 css 적용 - 부트스트랩v5 -->
	<link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/summernote-lite.min.css" rel="stylesheet">

</head>
<body>
	
	<%@include file="../header.jsp"%>
		
		
		<div class="container">
			<input class="mTitle form-control mb-3 bTitle" type="text" placeholder="제목">
			<textarea id="summernote" class="mContent form-control m-3" rows="10" cols=""></textarea>
			<input class="form-control m-3" type="file" />
			
			<div class="row justify-content-md-center">
				<div class=col-1>
					<input onclick="modiComplete()" class="btn btn-outline-secondary form-control" type="button" value="수정하기">
				</div>
				<div class=col-1>
					<a href="../board/view.jsp"><input class="btn btn-outline-secondary form-control" type="button" value="취소하기"></a>
				</div>
			</div>
		</div>
		
		
	<%@include file="../footer.jsp"%>


	<!-- 부트스트랩에서 만든 JS 적용 -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
	
	<!-- jquery : js 최신 라이브러리  -->
	<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
	
	<!-- 썸머노트 js 적용 -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/summernote-lite.min.js"></script>
	
	<!-- 썸머노트 한글적용  -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/lang/summernote-ko-KR.min.js"></script>
	
	<!-- JS 호출 -->
	<script src="../js/modify.js" type="text/javascript"></script>
	
</body>
</html>