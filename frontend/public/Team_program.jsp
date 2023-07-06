<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>중미산천문대</title>
	<link href="Team_program.css" rel="styleshee">
</head>
<body>

	
 <%@include file="../Header/Header.jsp" %> 헤더 링크 
<%@include file="../Header_bar/Header_bar.jsp" %> 헤더 바 링크


<div>헤더 영역</div>
<div>헤더바</div>
	 
	 <div id="wrap"><!-- 전체페이지 시작 -->
	 	
	 	<div class="sideMenu"> <!-- 사이드메뉴 시작 -->
	 		<p>사이드메뉴</p>
	 	
	 	
	 	
	 	</div> <!-- 사이드메뉴 종료 -->
	 	<div class="main_content"> <!-- 메인컨텐츠 시작 -->
	 		<div class="main_content_1">
	 		참가신청
	 		
	 		</div>
	 		<div class="main_content_2">
		 		<p>프로그램 <span>참가신청</span></p>>
		 		<p>중미산천문대 <span>단체프로그램</span> 신청페이지입니다,
		 		개인은 신청불가하며 20인 이하 단체는 유선으로 문의주세요.</p>
		 		<p>(천문대장 : 010-8520-0818)</p>
		 		
	 		</div>
	 		
	 		<div class="head_text">
	 			<p>선택사항</p>
	 		</div>
	 		
	 		<div class="main_content_3">
	 			
	 			<span>참가구분<div class="checkButton1">
	 			
	 			
	 			
	 			</div></span>
	 			<span>프로그램 선택<div class="checkButton2">
	 			
	 			
	 			
	 			</div></span>
	 			<span>날짜입력<div class="checkButton3">
	 			
	 			
	 			
	 			</div></span>
	 		
	 		</div>
	 		
	 		<div class="head_text">
	 			<p>단체정보</p>
	 		</div>
	 		
	 		<div class="main_content_4">
	 			<span><p class="leftText">신청인 성명 *</p><input type="text"></span>
	 			
	 			<span><p class="leftText">비밀번호 *</p>
	 			<div><input type="text"><p class="redText">* 참가신청확인시 사용할 비밀번호 4자리를 입력해주세요.</div></span>
	 			
	 			<span><p class="leftText">연락처 *</p>
	 			<input type="text">-
	 			<input type="text">-
	 			<input type="text">
	 			<p class="redText">* 프로그램 관련 실무담당자 연락처를 정확하게 기입해 주세요.</p>
	 			</span>
	 			
	 			<span><p class="leftText">단체(학교)명 *</p><input type="text"></span>
	 			
	 			<span><p class="leftText">단체유형 *</p><input type="text"></span>
	 			
	 			<span><p class="leftText">이메일 *</p><input type="text"></span>
	 			
	 			<span><p class="leftText">참가인원 *</p><input type="text">명</span>
	 			
	 			<span><p class="leftText">참가인원 상세 *</p>
		 			교사:<input type="text">명
		 			남학생:<input type="text">명
		 			여학생<input type="text">명
		 			<p class="redText">* 대략적인 인원을 작성해 주시고, 인원 변동이 생길 경우 사전에 연락 주시기 바랍니다.</p>
	 			</span>
	 		
	 		</div>
	 		
	 		<button type="button">작성완료버튼</button>
	 	
	 	</div> <!-- 메인컨텐츠 종료 -->


	</div> <!-- 전체페이지 종료 -->
		
 <%@include file="../Footer/Footer.jsp" %> 푸터링크
<div>푸터 영역</div>
	
	<script src="Team_program.js" type="text/javascript"></script>
</body>
</html>