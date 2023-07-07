<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<!-- 반응형 동작코드를 부트스트랩에서 복사하여 삽입 -->
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- 부트스트랩 사용을 위한 link 연결 -->
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</head>
<body>
	
	
	<!-- 부트스트랩 : 미리 만들어진 CSS/JS 빠르게 적용
			설치/적용 CDN
				1. <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
				2. <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
			
			1. container : 구역 설정
			2. 그리드 : 해당 구역을 12조각으로 분할
					.row : 하위 요소 가로배치
					.col : 배치 구역 설정
					.col-분할수 : 요소 배치 크기 설정 [col-6이면 12에서 6만큼 사용한다는 뜻]
					
			3. table :
				.table			: 테이블 기본 css
				.table-striped	: 홀/짝 행 기본 색상
				.table-hover	: 행에 마우스를 올렸을 때 스타일
				.table-bordered	: 테두리 스타일
			4. .navigation 		: 페이지네이션 / 페이징처리 버튼
			5. .form-select		: 셀렉트 상자 꾸미기
			6. .form-control	: input 상자 꾸미기 
			
			
			
		썸머노트[부트스트랩/jquery 라이브러리 기반으로 생성된 에디터]
				1. 설치
					1. <link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/summernote-lite.min.css" rel="stylesheet">
					2. <script src="http://code.jquery.com/jquery-latest.min.js"></script>
					3. <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/summernote-lite.min.js"></script>
					4. <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/lang/summernote-ko-KR.min.js"></script>
		
				
	 -->	
	
	
	<%@include file="../header.jsp"%>
	<!-- css/js 관련하여 라이브러리(미리 만들어진 css/js) 제공 -->

	<div class="container"> <!-- 현재 게시물출력 페이지 전체 구역 -->
		<a href="write.jsp"><button type="button" class="btn btn-primary b-3">글쓰기</button></a>
		<table class="table table-striped table-bordered table-hover text-center">
			<thead class="table-light">
				<tr>
					<th width="5%">번호</th> <th width="50%">제목</th> <th width="10%">작성자</th>
					<th width="15%">작성일</th> <th width="10%">조회수</th> <th width="10%">추천수</th>
				</tr>
			</thead>
			<tbody class="tcontent">
				
			</tbody>
			<tfoot>
				<tr> 
					<td colspan="6"> total : 3 </td>
				</tr>
				
			</tfoot>
		</table> <!-- table end -->
		
		<nav aria-label="Page navigation example">
			  <ul class="pagination justify-content-center">
			    <li class="page-item disabled">
			      <a class="page-link">이전</a>
			    </li>
			    <li class="page-item"><a class="page-link" href="#">1</a></li>
			    <li class="page-item"><a class="page-link" href="#">2</a></li>
			    <li class="page-item"><a class="page-link" href="#">3</a></li>
			    <li class="page-item">
			      <a class="page-link" href="#">다음</a>
			    </li>
			  </ul>
		</nav>
		
		<div class="row justify-content-md-center gx-5 text-center">
				<div class="col-2">	
					<select class="form-select" aria-label="Default select example">
						<option>키워드</option> <option>번호</option> <option>제목</option> <option>작성자</option>
					</select>
				</div>
				<div class="col-3 row">	
					<input class="form-control" type="text">
				</div>
				<div class="col-1 row">
					<button class="form-control">검색</button>
				</div>
		</div>
	
	
	</div>

	<%@include file="../footer.jsp"%>
	
	<script src="../js/list.js" type="text/javascript"></script>
	<!-- 부트스트립 사용을 위한 스크립트 사용 -->
	 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</body>
</html>